/* ANSWER-LEAK PROBE — paste into the browser console on the live site.
 *
 * WHY THIS EXISTS. Reading the visuals found five that printed a question's own
 * answer. Then this probe found six MORE that reading had passed over,
 * including five I had already "fixed" with reveal:false — because that flag
 * hides a trailing sentence, not the equation above it. Whether a visual gives
 * the answer away is a question about what it RENDERS, so the only honest check
 * mounts it and reads the pixels' worth of text back.
 *
 * HOW IT WORKS. Every question that has a visual and a numeric answer is
 * mounted with its real vizParams, and the numbers are pulled out of the
 * rendered readout and compared NUMERICALLY against the answer. An earlier
 * version compared substrings and reported 21 hits, more than half of them
 * nonsense: the answer 9 "appears" inside 8.859.
 *
 * READING THE RESULT. A match is not automatically a fault. Several are numbers
 * the question itself states — a matrix entry, a coefficient, a frequency in
 * arbitrary units — showing up because the visual draws the question's own
 * data. Judge each one; do not chase the count to zero.
 *
 * As of 2026-08-24 the expected residue is 7:
 *   mx_det2, mx_solve_x, mx_reflect_det, mx_shear_area,
 *   al_quad_roots, al_exam_disc, wa_wavelength
 * Anything OUTSIDE that list is new and wants looking at.
 */
(function () {
  var bad = [], n = 0;
  QQ_DATA.units.forEach(function (u) { u.lessons.forEach(function (l) {
    l.questions.forEach(function (q) {
      if (!q.viz || q.answerNumber == null) return;
      n++;
      var host = document.createElement('div');
      host.setAttribute('style', 'width:340px;height:250px');
      document.body.appendChild(host);
      try {
        var v = QQViz.mount(q.viz, host, {
          params: q.vizParams || {}, data: QQ_DATA.vizData,
          onInteract: function () {}, regions: null
        });
        var t = host.textContent || '';
        var nums = (t.match(/-?\d+(?:\.\d+)?/g) || []).map(Number);
        var a = Number(q.answerNumber);
        var tol = Math.max(1e-9, Math.abs(a) * 1e-6);
        if (nums.some(function (x) { return Math.abs(x - a) <= tol; })) bad.push(q.id);
        if (v && v.destroy) v.destroy();
      } catch (e) { bad.push(q.id + ':THREW'); }
      host.remove();
    });
  }); });
  console.log('NUMERIC  checked=' + n + ' matches=' + bad.length + ' :: ' + bad.join(', '));

  /* PART TWO: choice and true/false questions, where a leak is a WORD rather
   * than a number. This half found mx_singular_system, whose visual said "the
   * lines are parallel" under a question whose answer is that they are
   * parallel -- a leak I had created myself hours earlier by making that
   * question open on a singular system so the picture would match it. The
   * det-zero branch was the one string in the file with no reveal guard.
   *
   * Expected residue as of 2026-08-24: lg_loglog_axes and lg_loglin_axes share
   * only the generic word "against", and es_square_cube shares "volume"
   * because the visual labels a bar that way while showing the mechanism.
   */
  var hits = [], m = 0;
  function words(x) {
    return String(x).toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/)
      .filter(function (w) { return w.length >= 5; });
  }
  QQ_DATA.units.forEach(function (u) { u.lessons.forEach(function (l) {
    l.questions.forEach(function (q) {
      if (!q.viz || q.answerNumber != null || q.answerValue == null) return;
      m++;
      var host = document.createElement('div');
      host.setAttribute('style', 'width:340px;height:250px');
      document.body.appendChild(host);
      try {
        var v = QQViz.mount(q.viz, host, {
          params: q.vizParams || {}, data: QQ_DATA.vizData,
          onInteract: function () {}, regions: null
        });
        var t = (host.textContent || '').toLowerCase();
        var shared = words(q.answerValue).filter(function (w) { return t.indexOf(w) >= 0; });
        if (shared.length) hits.push(q.id + '{' + shared.join('+') + '}');
        if (v && v.destroy) v.destroy();
      } catch (e) { hits.push(q.id + ':THREW'); }
      host.remove();
    });
  }); });
  console.log('TEXT     checked=' + m + ' hits=' + hits.length + ' :: ' + hits.join(', '));
  return { numeric: bad, text: hits };
})();
