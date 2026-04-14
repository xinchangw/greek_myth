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
})();
