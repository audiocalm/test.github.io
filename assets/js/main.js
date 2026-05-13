/* =====================================================================
 *  AudioCALM — Demo Page Renderer
 *  ---------------------------------------------------------------------
 *  The main card shows Ground Truth + AudioCALM (ours) only. A
 *  "Compare baselines" button opens a modal listing every baseline.
 * ===================================================================== */

(function () {
  "use strict";

  const DATA = window.DEMO_DATA || {};

  /* ---------- helpers ---------- */
  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach((k) => {
        if (k === "class") node.className = attrs[k];
        else if (k === "html") node.innerHTML = attrs[k];
        else if (k === "text") node.textContent = attrs[k];
        else if (attrs[k] !== undefined && attrs[k] !== null)
          node.setAttribute(k, attrs[k]);
      });
    }
    if (children) {
      (Array.isArray(children) ? children : [children]).forEach((c) => {
        if (c) node.appendChild(c);
      });
    }
    return node;
  }

  function audioPlayer(src) {
    const hasSrc = typeof src === "string" && src.trim().length > 0;
    const a = el("audio", {
      controls: "controls",
      preload: "none",
      src: hasSrc ? src : "",
    });
    return { node: a, present: hasSrc };
  }

  /* Build one audio row (model name + player + optional missing hint).
   * `kind` ∈ {"ours", "gt", "baseline"} controls styling.            */
  function buildRow(displayName, badge, path, kind) {
    const cls =
      "sample-row" +
      (kind === "ours" ? " is-ours" : "") +
      (kind === "gt" ? " is-gt" : "") +
      (path ? "" : " empty");
    const row = el("div", { class: cls });

    row.appendChild(
      el("div", { class: "model" }, [
        el("span", { text: displayName }),
        badge ? el("span", { class: "badge " + badge.cls, text: badge.text }) : null,
      ])
    );

    const a = audioPlayer(path);
    row.appendChild(a.node);
    if (!a.present) {
      row.appendChild(
        el("div", {
          class: "missing-hint",
          text: path ? "→ " + path : "no path set",
        })
      );
    }
    return row;
  }

  /* ---------- render one sample card (compact: GT + OURS + button) --- */
  function renderSample(sample, models, taskKey) {
    const card = el("div", { class: "sample-card" });

    // header
    const numMatch = (sample.id || "").match(/(\d+)\s*$/);
    const label = numMatch ? "Sample " + numMatch[1] : (sample.id || "");
    card.appendChild(
      el("div", { class: "sample-header" }, [
        el("div", { class: "sample-id", text: label }),
        sample.source
          ? el("div", { class: "sample-source", text: sample.source })
          : null,
      ])
    );

    // text / caption
    if (sample.text) {
      const labelText = sample.prompt ? "Target text" : "Caption";
      card.appendChild(
        el("div", { class: "sample-text" }, [
          el("span", { class: "label", text: labelText }),
          el("span", { text: sample.text }),
        ])
      );
    }

    // optional speaker prompt (TTS)
    if (sample.prompt !== undefined) {
      const promptRow = el("div", { class: "sample-prompt" });
      promptRow.appendChild(
        el("span", { class: "label", text: "Speaker prompt (3 s)" })
      );
      const p = audioPlayer(sample.prompt);
      promptRow.appendChild(p.node);
      if (!p.present) {
        promptRow.appendChild(
          el("span", {
            class: "missing-hint",
            text: "→ drop file at " + sample.prompt,
          })
        );
      }
      card.appendChild(promptRow);
    }

    // primary rows: Ground Truth + OURS
    const rows = el("div", { class: "sample-rows" });
    const oursModel = (models || []).find((m) => m.ours) || { name: "AudioCALM (ours)", key: "audiocalm" };
    const oursPath = sample.audios ? sample.audios[oursModel.key] : "";

    rows.appendChild(
      buildRow(
        "Ground truth",
        { cls: "badge-gt", text: "REAL" },
        sample.gt,
        "gt"
      )
    );
    rows.appendChild(
      buildRow(
        oursModel.name,
        { cls: "badge-ours", text: "OURS" },
        oursPath,
        "ours"
      )
    );
    card.appendChild(rows);

    // compare-all button — counts non-ours baselines
    const baselines = (models || []).filter((m) => !m.ours);
    const btn = el("button", {
      type: "button",
      class: "compare-btn",
      "aria-label": "Compare against " + baselines.length + " baselines",
    });
    btn.appendChild(el("span", { class: "compare-btn-label", text: "Compare " + baselines.length + " baselines" }));
    btn.appendChild(el("span", { class: "compare-btn-arrow", text: "→" }));
    btn.addEventListener("click", function () {
      openCompareModal(sample, models, taskKey);
    });
    card.appendChild(btn);

    return card;
  }

  /* ---------- modal: full baseline lineup --------------------------- */
  let modalEl = null;
  let lastFocus = null;

  function ensureModal() {
    if (modalEl) return modalEl;
    modalEl = el("div", { class: "modal", "aria-hidden": "true", role: "dialog", "aria-modal": "true" });
    const backdrop = el("div", { class: "modal-backdrop" });
    backdrop.addEventListener("click", closeModal);
    const panel = el("div", { class: "modal-panel" });
    panel.addEventListener("click", function (e) { e.stopPropagation(); });
    modalEl.appendChild(backdrop);
    modalEl.appendChild(panel);
    document.body.appendChild(modalEl);
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && modalEl.classList.contains("is-open")) closeModal();
    });
    return modalEl;
  }

  function openCompareModal(sample, models, taskKey) {
    const m = ensureModal();
    const panel = m.querySelector(".modal-panel");
    panel.innerHTML = "";
    lastFocus = document.activeElement;

    // header
    const numMatch = (sample.id || "").match(/(\d+)\s*$/);
    const label = numMatch ? "Sample " + numMatch[1] : (sample.id || "");
    const taskLabel = ({ tts: "Speech", sound: "Sound", music: "Music" })[taskKey] || "";

    const header = el("div", { class: "modal-header" });
    header.appendChild(
      el("div", { class: "modal-eyebrow", text: taskLabel + (taskLabel ? " · " : "") + label + (sample.source ? " · " + sample.source : "") })
    );
    if (sample.text) {
      header.appendChild(el("p", { class: "modal-text", text: sample.text }));
    }
    const closeBtn = el("button", { type: "button", class: "modal-close", "aria-label": "Close" });
    closeBtn.appendChild(el("span", { text: "×" }));
    closeBtn.addEventListener("click", closeModal);
    header.appendChild(closeBtn);
    panel.appendChild(header);

    // speaker prompt (TTS)
    if (sample.prompt !== undefined) {
      const promptRow = el("div", { class: "modal-prompt" });
      promptRow.appendChild(el("span", { class: "label", text: "Speaker prompt (3 s)" }));
      const p = audioPlayer(sample.prompt);
      promptRow.appendChild(p.node);
      if (!p.present) {
        promptRow.appendChild(el("span", { class: "missing-hint", text: "→ drop file at " + sample.prompt }));
      }
      panel.appendChild(promptRow);
    }

    const body = el("div", { class: "modal-body" });

    // Ground Truth on top
    body.appendChild(
      buildRow("Ground truth", { cls: "badge-gt", text: "REAL" }, sample.gt, "gt")
    );

    // Group baselines by `group`; OURS sits at the top of the list
    const ours = (models || []).find((m) => m.ours);
    if (ours) {
      body.appendChild(
        buildRow(ours.name, { cls: "badge-ours", text: "OURS" }, sample.audios ? sample.audios[ours.key] : "", "ours")
      );
    }

    const groups = {};
    (models || []).forEach((m) => {
      if (m.ours) return;
      const g = m.group || "Baselines";
      (groups[g] = groups[g] || []).push(m);
    });
    Object.keys(groups).forEach((g) => {
      body.appendChild(el("div", { class: "modal-group-label", text: g + " baselines" }));
      groups[g].forEach((m) => {
        body.appendChild(buildRow(m.name, null, sample.audios ? sample.audios[m.key] : "", "baseline"));
      });
    });

    panel.appendChild(body);

    m.classList.add("is-open");
    m.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    closeBtn.focus();
  }

  function closeModal() {
    if (!modalEl) return;
    // stop any playing audio inside
    modalEl.querySelectorAll("audio").forEach((a) => { try { a.pause(); } catch (e) {} });
    modalEl.classList.remove("is-open");
    modalEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
  }

  /* ---------- mount one task block ---------- */
  function mount(containerId, taskData, taskKey) {
    const root = document.getElementById(containerId);
    if (!root || !taskData) return;
    if (!taskData.samples || !taskData.samples.length) {
      root.appendChild(
        el("div", {
          class: "figure-placeholder",
          text: "No samples configured yet — edit assets/js/data.js to add them.",
        })
      );
      return;
    }
    taskData.samples.forEach((s) =>
      root.appendChild(renderSample(s, taskData.models || [], taskKey))
    );
  }

  /* ---------- topnav scrollspy ---------- */
  function setupScrollspy() {
    const links = Array.from(document.querySelectorAll(".topnav a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in window)) return;
    const map = new Map();
    links.forEach((a) => {
      const sec = document.querySelector(a.getAttribute("href"));
      if (sec) map.set(sec, a);
    });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((l) => l.classList.remove("is-active"));
          const link = map.get(e.target);
          if (link) link.classList.add("is-active");
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );
    map.forEach((_, sec) => obs.observe(sec));
  }

  document.addEventListener("DOMContentLoaded", function () {
    mount("tts-samples", DATA.tts, "tts");
    mount("sound-samples", DATA.sound, "sound");
    mount("music-samples", DATA.music, "music");
    setupScrollspy();
  });
})();
