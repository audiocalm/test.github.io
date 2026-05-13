/* =====================================================================
 *  AudioCALM — Demo Sample Registry
 *  ---------------------------------------------------------------------
 *  Each task lists every baseline reported in the paper. The main page
 *  shows only Ground Truth + AudioCALM (ours) per sample; clicking
 *  "Compare baselines" opens a modal with the full lineup.
 *
 *  Drop your audio files into the matching audio/<task>/sampleNN/ folder
 *  and fill in the paths below. Empty paths render as a disabled player
 *  with a hint, so the page degrades gracefully while you collect samples.
 * ===================================================================== */

window.DEMO_DATA = {

  /* ------------------------------------------------------------------ */
  /* 1. ZERO-SHOT TEXT-TO-SPEECH                                        */
  /* ------------------------------------------------------------------ */
  tts: {
    models: [
      { key: "audiocalm",  name: "AudioCALM (ours)", ours: true },
      { key: "cosyvoice3", name: "CosyVoice 3.0",   group: "Modality-specific" },
      { key: "f5tts",      name: "F5-TTS",          group: "Modality-specific" },
      { key: "mingomni",   name: "Ming-omni",       group: "Unified" },
      { key: "uniflow",    name: "UniFlow-Audio",   group: "Unified" },
      { key: "unimoe",     name: "UniMoE-Audio",    group: "Unified" },
      { key: "uniaudio",   name: "UniAudio",        group: "Unified" },
    ],
    samples: [
      {
        id: "tts-01", source: "LibriTTS",
        text: "TODO: target sentence to be synthesized.",
        prompt: "audio/tts/sample01/prompt.wav",
        gt:     "audio/tts/sample01/gt.wav",
        audios: {
          audiocalm:  "audio/tts/sample01/audiocalm.wav",
          cosyvoice3: "audio/tts/sample01/cosyvoice3.wav",
          f5tts:      "audio/tts/sample01/f5tts.wav",
          mingomni:   "audio/tts/sample01/mingomni.wav",
          uniflow:    "audio/tts/sample01/uniflow.wav",
          unimoe:     "audio/tts/sample01/unimoe.wav",
          uniaudio:   "audio/tts/sample01/uniaudio.wav",
        },
      },
      {
        id: "tts-02", source: "LibriTTS",
        text: "TODO: target sentence to be synthesized.",
        prompt: "audio/tts/sample02/prompt.wav",
        gt:     "audio/tts/sample02/gt.wav",
        audios: {
          audiocalm:  "audio/tts/sample02/audiocalm.wav",
          cosyvoice3: "audio/tts/sample02/cosyvoice3.wav",
          f5tts:      "audio/tts/sample02/f5tts.wav",
          mingomni:   "audio/tts/sample02/mingomni.wav",
          uniflow:    "audio/tts/sample02/uniflow.wav",
          unimoe:     "audio/tts/sample02/unimoe.wav",
          uniaudio:   "audio/tts/sample02/uniaudio.wav",
        },
      },
      {
        id: "tts-03", source: "LibriTTS",
        text: "TODO: target sentence to be synthesized.",
        prompt: "audio/tts/sample03/prompt.wav",
        gt:     "audio/tts/sample03/gt.wav",
        audios: {
          audiocalm:  "audio/tts/sample03/audiocalm.wav",
          cosyvoice3: "audio/tts/sample03/cosyvoice3.wav",
          f5tts:      "audio/tts/sample03/f5tts.wav",
          mingomni:   "audio/tts/sample03/mingomni.wav",
          uniflow:    "audio/tts/sample03/uniflow.wav",
          unimoe:     "audio/tts/sample03/unimoe.wav",
          uniaudio:   "audio/tts/sample03/uniaudio.wav",
        },
      },
      {
        id: "tts-04", source: "SeedTTS-eval",
        text: "TODO: target sentence to be synthesized.",
        prompt: "audio/tts/sample04/prompt.wav",
        gt:     "audio/tts/sample04/gt.wav",
        audios: {
          audiocalm:  "audio/tts/sample04/audiocalm.wav",
          cosyvoice3: "audio/tts/sample04/cosyvoice3.wav",
          f5tts:      "audio/tts/sample04/f5tts.wav",
          mingomni:   "audio/tts/sample04/mingomni.wav",
          uniflow:    "audio/tts/sample04/uniflow.wav",
          unimoe:     "audio/tts/sample04/unimoe.wav",
          uniaudio:   "audio/tts/sample04/uniaudio.wav",
        },
      },
      {
        id: "tts-05", source: "SeedTTS-eval",
        text: "TODO: target sentence to be synthesized.",
        prompt: "audio/tts/sample05/prompt.wav",
        gt:     "audio/tts/sample05/gt.wav",
        audios: {
          audiocalm:  "audio/tts/sample05/audiocalm.wav",
          cosyvoice3: "audio/tts/sample05/cosyvoice3.wav",
          f5tts:      "audio/tts/sample05/f5tts.wav",
          mingomni:   "audio/tts/sample05/mingomni.wav",
          uniflow:    "audio/tts/sample05/uniflow.wav",
          unimoe:     "audio/tts/sample05/unimoe.wav",
          uniaudio:   "audio/tts/sample05/uniaudio.wav",
        },
      },
      {
        id: "tts-06", source: "SeedTTS-eval",
        text: "TODO: target sentence to be synthesized.",
        prompt: "audio/tts/sample06/prompt.wav",
        gt:     "audio/tts/sample06/gt.wav",
        audios: {
          audiocalm:  "audio/tts/sample06/audiocalm.wav",
          cosyvoice3: "audio/tts/sample06/cosyvoice3.wav",
          f5tts:      "audio/tts/sample06/f5tts.wav",
          mingomni:   "audio/tts/sample06/mingomni.wav",
          uniflow:    "audio/tts/sample06/uniflow.wav",
          unimoe:     "audio/tts/sample06/unimoe.wav",
          uniaudio:   "audio/tts/sample06/uniaudio.wav",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 2. TEXT-TO-SOUND                                                   */
  /* ------------------------------------------------------------------ */
  sound: {
    models: [
      { key: "audiocalm",   name: "AudioCALM (ours)",  ours: true },
      { key: "tangoflux",   name: "TangoFlux",         group: "Modality-specific" },
      { key: "stableaudio", name: "Stable Audio Open", group: "Modality-specific" },
      { key: "audioldm2",   name: "AudioLDM 2-Large",  group: "Modality-specific" },
      { key: "mingomni",    name: "Ming-omni",         group: "Unified" },
      { key: "uniflow",     name: "UniFlow-Audio",     group: "Unified" },
      { key: "uniaudio",    name: "UniAudio",          group: "Unified" },
    ],
    samples: [
      {
        id: "sound-01", source: "AudioCaps",
        text: "TODO: caption, e.g. 'A dog barks while a doorbell rings in the distance.'",
        gt:   "audio/sound/sample01/gt.wav",
        audios: {
          audiocalm:   "audio/sound/sample01/audiocalm.wav",
          tangoflux:   "audio/sound/sample01/tangoflux.wav",
          stableaudio: "audio/sound/sample01/stableaudio.wav",
          audioldm2:   "audio/sound/sample01/audioldm2.wav",
          mingomni:    "audio/sound/sample01/mingomni.wav",
          uniflow:     "audio/sound/sample01/uniflow.wav",
          uniaudio:    "audio/sound/sample01/uniaudio.wav",
        },
      },
      {
        id: "sound-02", source: "AudioCaps",
        text: "TODO: caption.",
        gt:   "audio/sound/sample02/gt.wav",
        audios: {
          audiocalm:   "audio/sound/sample02/audiocalm.wav",
          tangoflux:   "audio/sound/sample02/tangoflux.wav",
          stableaudio: "audio/sound/sample02/stableaudio.wav",
          audioldm2:   "audio/sound/sample02/audioldm2.wav",
          mingomni:    "audio/sound/sample02/mingomni.wav",
          uniflow:     "audio/sound/sample02/uniflow.wav",
          uniaudio:    "audio/sound/sample02/uniaudio.wav",
        },
      },
      {
        id: "sound-03", source: "AudioCaps",
        text: "TODO: caption.",
        gt:   "audio/sound/sample03/gt.wav",
        audios: {
          audiocalm:   "audio/sound/sample03/audiocalm.wav",
          tangoflux:   "audio/sound/sample03/tangoflux.wav",
          stableaudio: "audio/sound/sample03/stableaudio.wav",
          audioldm2:   "audio/sound/sample03/audioldm2.wav",
          mingomni:    "audio/sound/sample03/mingomni.wav",
          uniflow:     "audio/sound/sample03/uniflow.wav",
          uniaudio:    "audio/sound/sample03/uniaudio.wav",
        },
      },
      {
        id: "sound-04", source: "AudioCaps",
        text: "TODO: caption.",
        gt:   "audio/sound/sample04/gt.wav",
        audios: {
          audiocalm:   "audio/sound/sample04/audiocalm.wav",
          tangoflux:   "audio/sound/sample04/tangoflux.wav",
          stableaudio: "audio/sound/sample04/stableaudio.wav",
          audioldm2:   "audio/sound/sample04/audioldm2.wav",
          mingomni:    "audio/sound/sample04/mingomni.wav",
          uniflow:     "audio/sound/sample04/uniflow.wav",
          uniaudio:    "audio/sound/sample04/uniaudio.wav",
        },
      },
      {
        id: "sound-05", source: "AudioCaps",
        text: "TODO: caption.",
        gt:   "audio/sound/sample05/gt.wav",
        audios: {
          audiocalm:   "audio/sound/sample05/audiocalm.wav",
          tangoflux:   "audio/sound/sample05/tangoflux.wav",
          stableaudio: "audio/sound/sample05/stableaudio.wav",
          audioldm2:   "audio/sound/sample05/audioldm2.wav",
          mingomni:    "audio/sound/sample05/mingomni.wav",
          uniflow:     "audio/sound/sample05/uniflow.wav",
          uniaudio:    "audio/sound/sample05/uniaudio.wav",
        },
      },
      {
        id: "sound-06", source: "AudioCaps",
        text: "TODO: caption.",
        gt:   "audio/sound/sample06/gt.wav",
        audios: {
          audiocalm:   "audio/sound/sample06/audiocalm.wav",
          tangoflux:   "audio/sound/sample06/tangoflux.wav",
          stableaudio: "audio/sound/sample06/stableaudio.wav",
          audioldm2:   "audio/sound/sample06/audioldm2.wav",
          mingomni:    "audio/sound/sample06/mingomni.wav",
          uniflow:     "audio/sound/sample06/uniflow.wav",
          uniaudio:    "audio/sound/sample06/uniaudio.wav",
        },
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* 3. TEXT-TO-MUSIC                                                   */
  /* ------------------------------------------------------------------ */
  music: {
    models: [
      { key: "audiocalm",   name: "AudioCALM (ours)",  ours: true },
      { key: "stableaudio", name: "Stable Audio Open", group: "Modality-specific" },
      { key: "musicgen",    name: "MusicGen-Large",    group: "Modality-specific" },
      { key: "unimoe",      name: "UniMoE-Audio",      group: "Unified" },
      { key: "mingomni",    name: "Ming-omni",         group: "Unified" },
      { key: "uniflow",     name: "UniFlow-Audio",     group: "Unified" },
      { key: "uniaudio",    name: "UniAudio",          group: "Unified" },
    ],
    samples: [
      {
        id: "music-01", source: "Song-Describer",
        text: "TODO: caption, e.g. 'A mellow lo-fi hip-hop loop with vinyl crackle, soft Rhodes piano and laid-back drums.'",
        gt:   "audio/music/sample01/gt.wav",
        audios: {
          audiocalm:   "audio/music/sample01/audiocalm.wav",
          stableaudio: "audio/music/sample01/stableaudio.wav",
          musicgen:    "audio/music/sample01/musicgen.wav",
          unimoe:      "audio/music/sample01/unimoe.wav",
          mingomni:    "audio/music/sample01/mingomni.wav",
          uniflow:     "audio/music/sample01/uniflow.wav",
          uniaudio:    "audio/music/sample01/uniaudio.wav",
        },
      },
      {
        id: "music-02", source: "Song-Describer",
        text: "TODO: caption.",
        gt:   "audio/music/sample02/gt.wav",
        audios: {
          audiocalm:   "audio/music/sample02/audiocalm.wav",
          stableaudio: "audio/music/sample02/stableaudio.wav",
          musicgen:    "audio/music/sample02/musicgen.wav",
          unimoe:      "audio/music/sample02/unimoe.wav",
          mingomni:    "audio/music/sample02/mingomni.wav",
          uniflow:     "audio/music/sample02/uniflow.wav",
          uniaudio:    "audio/music/sample02/uniaudio.wav",
        },
      },
      {
        id: "music-03", source: "Song-Describer",
        text: "TODO: caption.",
        gt:   "audio/music/sample03/gt.wav",
        audios: {
          audiocalm:   "audio/music/sample03/audiocalm.wav",
          stableaudio: "audio/music/sample03/stableaudio.wav",
          musicgen:    "audio/music/sample03/musicgen.wav",
          unimoe:      "audio/music/sample03/unimoe.wav",
          mingomni:    "audio/music/sample03/mingomni.wav",
          uniflow:     "audio/music/sample03/uniflow.wav",
          uniaudio:    "audio/music/sample03/uniaudio.wav",
        },
      },
      {
        id: "music-04", source: "Song-Describer",
        text: "TODO: caption.",
        gt:   "audio/music/sample04/gt.wav",
        audios: {
          audiocalm:   "audio/music/sample04/audiocalm.wav",
          stableaudio: "audio/music/sample04/stableaudio.wav",
          musicgen:    "audio/music/sample04/musicgen.wav",
          unimoe:      "audio/music/sample04/unimoe.wav",
          mingomni:    "audio/music/sample04/mingomni.wav",
          uniflow:     "audio/music/sample04/uniflow.wav",
          uniaudio:    "audio/music/sample04/uniaudio.wav",
        },
      },
      {
        id: "music-05", source: "Song-Describer",
        text: "TODO: caption.",
        gt:   "audio/music/sample05/gt.wav",
        audios: {
          audiocalm:   "audio/music/sample05/audiocalm.wav",
          stableaudio: "audio/music/sample05/stableaudio.wav",
          musicgen:    "audio/music/sample05/musicgen.wav",
          unimoe:      "audio/music/sample05/unimoe.wav",
          mingomni:    "audio/music/sample05/mingomni.wav",
          uniflow:     "audio/music/sample05/uniflow.wav",
          uniaudio:    "audio/music/sample05/uniaudio.wav",
        },
      },
      {
        id: "music-06", source: "Song-Describer",
        text: "TODO: caption.",
        gt:   "audio/music/sample06/gt.wav",
        audios: {
          audiocalm:   "audio/music/sample06/audiocalm.wav",
          stableaudio: "audio/music/sample06/stableaudio.wav",
          musicgen:    "audio/music/sample06/musicgen.wav",
          unimoe:      "audio/music/sample06/unimoe.wav",
          mingomni:    "audio/music/sample06/mingomni.wav",
          uniflow:     "audio/music/sample06/uniflow.wav",
          uniaudio:    "audio/music/sample06/uniaudio.wav",
        },
      },
    ],
  },

};
