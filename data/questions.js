/* ======================================================================
   Questions · aggregator / sort hook
   ----------------------------------------------------------------------
   Each batch under data/questions/*.js pushes its items into
   window.QUESTIONS. This file (loaded LAST among data files) sorts
   the array by id so the quiz order is deterministic.
   ====================================================================== */
(function () {
  "use strict";
  window.QUESTIONS = window.QUESTIONS || [];
  window.QUESTIONS.sort(function (a, b) { return a.id - b.id; });

  // Boot-time diagnostics (non-blocking): duplicate ids + unknown character ids
  var dupes = [];
  for (var i = 1; i < window.QUESTIONS.length; i++) {
    if (window.QUESTIONS[i].id === window.QUESTIONS[i - 1].id) dupes.push(window.QUESTIONS[i].id);
  }
  if (dupes.length && window.console) console.error("[quiz] duplicate question ids:", dupes);

  var known = window.CHARACTERS ? Object.keys(window.CHARACTERS) : [];
  var knownSet = {};
  for (var k = 0; k < known.length; k++) knownSet[known[k]] = true;
  // Per-question primary-score cap. Binary & preference questions have a
  // smaller dynamic range (main score = 3) than scenarios (main score = 8),
  // so the warning threshold is stricter there. Negative penalties are
  // capped at magnitude 1 everywhere — anything larger has historically
  // drowned out an entire run's signal.
  var SCENARIO_CAP = 8;
  var OTHER_CAP = 3;
  window.QUESTIONS.forEach(function (q) {
    var cap = q.type === "scenario" ? SCENARIO_CAP : OTHER_CAP;
    (q.options || []).forEach(function (o) {
      Object.keys(o.scores || {}).forEach(function (cid) {
        if (!knownSet[cid] && window.console) {
          console.error('[quiz] unknown character id "' + cid + '" in Q' + q.id);
        }
        var s = o.scores[cid];
        if (typeof s === "number" && window.console) {
          if (s > cap) {
            console.warn('[quiz] score ' + s + ' for "' + cid + '" in Q' + q.id + ' exceeds cap ' + cap);
          }
          if (s < -1) {
            console.warn('[quiz] penalty ' + s + ' for "' + cid + '" in Q' + q.id + ' exceeds -1');
          }
        }
      });
    });
  });
})();
