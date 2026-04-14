/* ======================================================================
   Character SVG icons · placeholders
   ----------------------------------------------------------------------
   Each entry is an inline SVG string rendered on the result page.
   These are uniform classical-style placeholders; swap individual
   entries later to drop in custom illustrations. Guidelines:
     - viewBox="0 0 120 120"
     - stroke="currentColor" fill="none"
     - stroke-width 1.2–1.6
   ====================================================================== */
(function () {
  "use strict";

  function placeholder(letter, label) {
    // Classical motif: laurel wreath + Greek column + initial glyph
    return `
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"
     stroke="currentColor" fill="none" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round">
  <!-- outer circle -->
  <circle cx="60" cy="60" r="52" opacity="0.35"/>
  <circle cx="60" cy="60" r="46" opacity="0.6"/>

  <!-- laurel wreath -->
  <g opacity="0.8">
    <path d="M20 60 Q 20 28 60 18"/>
    <path d="M100 60 Q 100 28 60 18"/>
    <path d="M26 48 q 4 -4 9 -3"/>
    <path d="M30 38 q 4 -4 9 -3"/>
    <path d="M36 30 q 4 -4 9 -3"/>
    <path d="M45 23 q 4 -4 9 -3"/>
    <path d="M94 48 q -4 -4 -9 -3"/>
    <path d="M90 38 q -4 -4 -9 -3"/>
    <path d="M84 30 q -4 -4 -9 -3"/>
    <path d="M75 23 q -4 -4 -9 -3"/>
  </g>

  <!-- column pedestal -->
  <g opacity="0.7">
    <line x1="38" y1="92" x2="82" y2="92"/>
    <line x1="42" y1="88" x2="78" y2="88"/>
    <line x1="46" y1="84" x2="74" y2="84"/>
    <line x1="46" y1="84" x2="46" y2="56"/>
    <line x1="74" y1="84" x2="74" y2="56"/>
    <line x1="50" y1="56" x2="70" y2="56"/>
    <line x1="54" y1="52" x2="66" y2="52"/>
  </g>

  <!-- central glyph: initial letter -->
  <text x="60" y="70" text-anchor="middle"
        font-family="'Cinzel Decorative', serif"
        font-size="28" font-weight="900"
        fill="currentColor" stroke="none" opacity="0.95">${letter}</text>

  <!-- tiny greek key marks -->
  <g opacity="0.5">
    <path d="M14 106 h 6 v -4 h -4 v 4"/>
    <path d="M100 106 h 6 v -4 h -4 v 4"/>
  </g>

  <title>${label}</title>
</svg>`;
  }

  // Map of characterId -> SVG. All placeholders for now; replace individually later.
  window.ICONS = {
    zeus:        placeholder("Z", "Zeus · 宙斯"),
    hera:        placeholder("H", "Hera · 赫拉"),
    poseidon:    placeholder("P", "Poseidon · 波塞冬"),
    athena:      placeholder("A", "Athena · 雅典娜"),
    apollo:      placeholder("Ω", "Apollo · 阿波罗"),
    artemis:     placeholder("☽", "Artemis · 阿尔忒弥斯"),
    ares:        placeholder("X", "Ares · 阿瑞斯"),
    aphrodite:   placeholder("♀", "Aphrodite · 阿芙洛狄忒"),
    hephaestus:  placeholder("V", "Hephaestus · 赫菲斯托斯"),
    hermes:      placeholder("H", "Hermes · 赫尔墨斯"),
    dionysus:    placeholder("D", "Dionysus · 狄俄尼索斯"),
    demeter:     placeholder("Δ", "Demeter · 德墨忒尔"),
    hades:       placeholder("Ⱶ", "Hades · 哈迪斯"),
    prometheus:  placeholder("Π", "Prometheus · 普罗米修斯"),
    persephone:  placeholder("Φ", "Persephone · 珀尔塞福涅"),
    hecate:      placeholder("Ψ", "Hecate · 赫卡忒"),
    odysseus:    placeholder("O", "Odysseus · 奥德修斯"),
    achilles:    placeholder("Α", "Achilles · 阿喀琉斯"),
    heracles:    placeholder("Ἡ", "Heracles · 赫拉克勒斯"),
    sisyphus:    placeholder("Σ", "Sisyphus · 西西弗斯"),
    orpheus:     placeholder("Ο", "Orpheus · 俄耳甫斯"),
    cassandra:   placeholder("K", "Cassandra · 卡珊德拉"),
    medea:       placeholder("M", "Medea · 美狄亚"),
    icarus:      placeholder("I", "Icarus · 伊卡洛斯"),
    antigone:    placeholder("Ἀ", "Antigone · 安提戈涅"),
    pandora:     placeholder("◉", "Pandora · 潘多拉"),
    circe:       placeholder("✴", "Circe · 喀耳刻"),
    narcissus:   placeholder("Ν", "Narcissus · 纳西索斯"),
  };
})();
