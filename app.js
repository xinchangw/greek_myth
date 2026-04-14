/* ======================================================================
   Which Greek God Are You  ·  App Logic
   ====================================================================== */
(function () {
  "use strict";

  const STORAGE_PROGRESS = "greekmyth:progress";
  const STORAGE_RESULT = "greekmyth:lastResult";

  const views = {
    intro: document.getElementById("view-intro"),
    quiz: document.getElementById("view-quiz"),
    calculating: document.getElementById("view-calculating"),
    result: document.getElementById("view-result"),
  };

  const state = {
    current: 0,
    answers: {},              // { [qid]: optionIndex }
    scores: null,
  };

  const QUESTIONS = window.QUESTIONS || [];
  const CHARACTERS = window.CHARACTERS || {};
  const ICONS = window.ICONS || {};

  // ---------- View switching ----------
  function show(name) {
    Object.values(views).forEach((v) => v.classList.remove("view--active"));
    views[name].classList.add("view--active");
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }

  // ---------- Persistence ----------
  function saveProgress() {
    try {
      localStorage.setItem(
        STORAGE_PROGRESS,
        JSON.stringify({ answers: state.answers, current: state.current })
      );
    } catch (e) { /* quota or private mode */ }
  }
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_PROGRESS);
      if (!raw) return null;
      const p = JSON.parse(raw);
      if (p && typeof p.current === "number" && p.answers) return p;
    } catch (e) {}
    return null;
  }
  function clearProgress() {
    try { localStorage.removeItem(STORAGE_PROGRESS); } catch (e) {}
  }
  function saveResult(payload) {
    try { localStorage.setItem(STORAGE_RESULT, JSON.stringify(payload)); } catch (e) {}
  }

  // ---------- Scoring ----------
  function computeScores() {
    const scores = {};
    Object.keys(CHARACTERS).forEach((id) => (scores[id] = 0));
    QUESTIONS.forEach((q) => {
      const idx = state.answers[q.id];
      if (idx == null) return;
      const opt = q.options[idx];
      if (!opt) return;
      Object.entries(opt.scores).forEach(([cid, v]) => {
        if (scores[cid] == null) scores[cid] = 0;
        scores[cid] += v;
      });
    });
    return scores;
  }

  function rankScores(scores) {
    return Object.entries(scores)
      .map(([id, v]) => ({ id, v }))
      .sort((a, b) => b.v - a.v || a.id.localeCompare(b.id));
  }

  // ---------- Intro ----------
  function renderIntro() {
    const progress = loadProgress();
    const btnResume = document.getElementById("btn-resume");
    if (progress && progress.current > 0 && progress.current < QUESTIONS.length) {
      btnResume.hidden = false;
      btnResume.textContent = `继续上次测试 (${progress.current}/${QUESTIONS.length})`;
    } else {
      btnResume.hidden = true;
    }
    show("intro");
  }

  // ---------- Quiz ----------
  function renderQuiz() {
    const q = QUESTIONS[state.current];
    if (!q) return;

    document.getElementById("quiz-total").textContent = QUESTIONS.length;
    document.getElementById("quiz-current").textContent = state.current + 1;

    // Progress bar
    const bar = document.getElementById("quiz-progress");
    bar.innerHTML = "";
    for (let i = 0; i < QUESTIONS.length; i++) {
      const p = document.createElement("span");
      p.className = "pillar";
      if (i < state.current) p.classList.add("done");
      else if (i === state.current) p.classList.add("current");
      bar.appendChild(p);
    }

    // Type label
    const typeMap = { scenario: "SCENARIO · 场景", preference: "PREFERENCE · 偏好", binary: "DICHOTOMY · 二元" };
    document.getElementById("quiz-type").textContent = typeMap[q.type] || "QUESTION";

    // Question
    document.getElementById("quiz-question").textContent = q.question;

    // Options
    const wrap = document.getElementById("quiz-options");
    wrap.innerHTML = "";
    q.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.className = "option";
      btn.type = "button";
      btn.innerHTML = `
        <span class="option__mark">${String.fromCharCode(65 + idx)}</span>
        <span class="option__text">${escapeHtml(opt.text)}</span>
      `;
      btn.addEventListener("click", () => pickOption(q, idx, btn));
      wrap.appendChild(btn);
    });

    // Nav
    document.getElementById("btn-prev").disabled = state.current === 0;

    show("quiz");
  }

  function pickOption(q, idx, btn) {
    // Visual feedback
    document.querySelectorAll(".option").forEach((o) => o.classList.remove("selected"));
    btn.classList.add("selected");

    state.answers[q.id] = idx;
    saveProgress();

    // Advance
    setTimeout(() => {
      if (state.current < QUESTIONS.length - 1) {
        state.current += 1;
        saveProgress();
        renderQuiz();
      } else {
        finish();
      }
    }, 380);
  }

  function goBack() {
    if (state.current === 0) return;
    state.current -= 1;
    saveProgress();
    renderQuiz();
  }

  function restartMid() {
    if (!confirm("确定要放弃当前进度，重新开始吗？")) return;
    state.current = 0;
    state.answers = {};
    clearProgress();
    renderIntro();
  }

  // ---------- Finish & result ----------
  function finish() {
    show("calculating");
    setTimeout(() => {
      const scores = computeScores();
      const ranked = rankScores(scores);
      state.scores = scores;
      saveResult({ scores, ranked, t: Date.now() });
      clearProgress();
      renderResult(scores, ranked);
    }, 1400);
  }

  function renderResult(scores, ranked) {
    const top = ranked[0];
    const character = CHARACTERS[top.id];
    if (!character) return;

    const top3 = ranked.slice(0, 3);
    const totalTop3 = top3.reduce((s, x) => s + x.v, 0) || 1;
    const compositions = top3.map((x) => ({
      ...x,
      pct: Math.round((x.v / totalTop3) * 100),
      character: CHARACTERS[x.id],
    }));
    // Adjust rounding so sum == 100
    const sumPct = compositions.reduce((s, x) => s + x.pct, 0);
    if (compositions.length && sumPct !== 100) compositions[0].pct += 100 - sumPct;

    const shadow = ranked[ranked.length - 1];
    const shadowChar = CHARACTERS[shadow.id];

    // Tie notice
    const tieNotice = ranked[1] && ranked[1].v === top.v
      ? `<p class="result__archetype">同时强烈共鸣：${CHARACTERS[ranked[1].id].nameZh}</p>`
      : "";

    const body = document.getElementById("result-body");
    body.innerHTML = `
      <header class="result__header">
        <p class="result__kicker">Your Primary Archetype</p>
        <h1 class="result__name-en">${character.nameEn}</h1>
        <h2 class="result__name-zh">你是「${character.nameZh}」型灵魂</h2>
        <p class="result__archetype">${escapeHtml(character.archetype)}</p>
        ${tieNotice}
        <div class="result__icon" aria-hidden="true">${ICONS[character.id] || ""}</div>

        <div class="composition">
          <div class="composition__title">Your Divine Composition · 你的神格构成</div>
          <div class="composition__bar">
            ${compositions.map((c, i) => `
              <div class="composition__seg"
                   style="width:${c.pct}%; background:${segColor(i)};"></div>
            `).join("")}
          </div>
          <div class="composition__legend">
            ${compositions.map((c, i) => `
              <span>
                <span class="swatch" style="background:${segColor(i)}"></span>
                ${c.pct}% ${c.character.nameZh}
              </span>
            `).join("")}
          </div>
        </div>
      </header>

      <section class="section">
        <div class="section__label">The Myth · 神话</div>
        <div class="section__zh">${character.nameZh} 的故事</div>
        <div class="section__body">${paragraphify(character.myth)}</div>
      </section>

      <section class="section">
        <div class="section__label">The Portrait · 性格画像</div>
        <div class="section__zh">你是「${character.nameZh}」型人格</div>
        <div class="section__body">${paragraphify(character.analysis)}</div>
      </section>

      <section class="section">
        <div class="section__label">Light &amp; Shadow · 光与影</div>
        <div class="duality">
          <div class="duality__col">
            <h4>LIGHT · 光明面</h4>
            <ul>${character.light.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
          </div>
          <div class="duality__col duality__col--shadow">
            <h4>SHADOW · 阴暗面</h4>
            <ul>${character.shadow.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section__label">Oracle · 神话原典</div>
        <blockquote class="quote">
          ${escapeHtml(character.quote)}
          <span class="quote__attr">— ${escapeHtml(character.quoteSource || (character.nameZh + " · " + character.nameEn))}</span>
        </blockquote>
      </section>

      <section class="section">
        <div class="section__label">Affinities · 关系相性</div>
        <div class="relations">
          ${character.bestMatch.map((r) => `
            <div class="relation relation--match">
              <div class="relation__type">最佳拍档 · BEST MATCH</div>
              <div class="relation__name">${CHARACTERS[r.id] ? CHARACTERS[r.id].nameZh : r.id} · ${CHARACTERS[r.id] ? CHARACTERS[r.id].nameEn : ""}</div>
              <div class="relation__reason">${escapeHtml(r.reason)}</div>
            </div>
          `).join("")}
          ${character.rival.map((r) => `
            <div class="relation relation--rival">
              <div class="relation__type">天生宿敌 · NEMESIS</div>
              <div class="relation__name">${CHARACTERS[r.id] ? CHARACTERS[r.id].nameZh : r.id} · ${CHARACTERS[r.id] ? CHARACTERS[r.id].nameEn : ""}</div>
              <div class="relation__reason">${escapeHtml(r.reason)}</div>
            </div>
          `).join("")}
          ${character.tension ? `
            <div class="relation relation--tension">
              <div class="relation__type">暧昧张力 · TENSION</div>
              <div class="relation__name">${CHARACTERS[character.tension.id] ? CHARACTERS[character.tension.id].nameZh : character.tension.id} · ${CHARACTERS[character.tension.id] ? CHARACTERS[character.tension.id].nameEn : ""}</div>
              <div class="relation__reason">${escapeHtml(character.tension.reason)}</div>
            </div>
          ` : ""}
        </div>
      </section>

      <section class="section">
        <div class="section__label">Your Shadow Self · 你的阴影面</div>
        <div class="shadow-card">
          <div class="shadow-card__label">LEAST RESONANT · 最不像你</div>
          <div class="shadow-card__name">${shadowChar.nameZh} · ${shadowChar.nameEn}</div>
          <div class="shadow-card__hint">${escapeHtml(shadowChar.archetype)}——这是你最陌生的原型，也可能是你最需要学习的一面。</div>
        </div>
      </section>

      <div class="result__actions">
        <button id="btn-share" class="btn btn--primary">复制分享文案</button>
        <button id="btn-restart" class="btn btn--ghost">再测一次</button>
      </div>
    `;

    document.getElementById("btn-share").addEventListener("click", () => {
      const text = `我的希腊神话灵魂原型是【${character.nameZh} · ${character.nameEn}】——${character.archetype}。\n神格构成：${compositions.map((c) => `${c.pct}% ${c.character.nameZh}`).join(" + ")}\n阴影面：${shadowChar.nameZh}\n来测测你是谁：`;
      copyToClipboard(text);
    });
    document.getElementById("btn-restart").addEventListener("click", () => {
      state.current = 0;
      state.answers = {};
      clearProgress();
      renderIntro();
    });

    show("result");
  }

  function segColor(i) {
    return ["#d4a84b", "#6b4c8a", "#4a6fa5"][i] || "#8a3a3a";
  }

  // ---------- Helpers ----------
  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function paragraphify(text) {
    return String(text || "")
      .split(/\n\s*\n/)
      .map((p) => `<p>${escapeHtml(p.trim())}</p>`)
      .join("");
  }

  function copyToClipboard(text) {
    const done = () => toast("已复制到剪贴板 · 去分享吧");
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallback());
    } else {
      fallback();
    }
    function fallback() {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("复制失败，请手动复制"); }
      document.body.removeChild(ta);
    }
  }

  function toast(msg) {
    let el = document.querySelector(".toast");
    if (!el) {
      el = document.createElement("div");
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 1800);
  }

  // ---------- Starfield ----------
  function initStarfield() {
    const c = document.getElementById("starfield");
    if (!c) return;
    const ctx = c.getContext("2d");
    if (!ctx) return;
    const isMobile = window.matchMedia("(max-width: 680px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, stars = [];

    function resize() {
      w = c.clientWidth = window.innerWidth;
      h = c.clientHeight = window.innerHeight;
      c.width = w * dpr;
      c.height = h * dpr;
      ctx.scale(dpr, dpr);
      const density = isMobile ? 0.00008 : 0.00014;
      const count = Math.floor(w * h * density);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.1 + 0.2,
        a: Math.random() * 0.6 + 0.2,
        s: Math.random() * 0.02 + 0.005,
        p: Math.random() * Math.PI * 2,
      }));
    }
    resize();
    window.addEventListener("resize", resize);

    let last = 0;
    const interval = 1000 / 30;
    function loop(t) {
      if (t - last > interval) {
        last = t;
        ctx.clearRect(0, 0, w, h);
        for (const s of stars) {
          s.p += s.s;
          const a = s.a + Math.sin(s.p) * 0.25;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(238, 203, 125, ${Math.max(0.05, a * 0.6)})`;
          ctx.fill();
        }
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  // ---------- Bootstrap ----------
  function init() {
    document.getElementById("btn-start").addEventListener("click", () => {
      state.current = 0;
      state.answers = {};
      clearProgress();
      renderQuiz();
    });
    document.getElementById("btn-resume").addEventListener("click", () => {
      const p = loadProgress();
      if (!p) return;
      state.answers = p.answers || {};
      state.current = Math.min(p.current || 0, QUESTIONS.length - 1);
      renderQuiz();
    });
    document.getElementById("btn-prev").addEventListener("click", goBack);
    document.getElementById("btn-restart-mid").addEventListener("click", restartMid);

    initStarfield();
    renderIntro();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
