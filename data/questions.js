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
  window.QUESTIONS.forEach(function (q) {
    (q.options || []).forEach(function (o) {
      Object.keys(o.scores || {}).forEach(function (cid) {
        if (!knownSet[cid] && window.console) {
          console.error('[quiz] unknown character id "' + cid + '" in Q' + q.id);
        }
      });
    });
  });
})();
