/* Render matrices as matrices.
 *
 * The bank writes a matrix inline as [2 1; 3 4] — MATLAB shorthand, which is
 * compact to author and wrong to show a student. Somebody meeting matrices for
 * the first time needs to SEE rows and columns inside brackets; a
 * semicolon-separated string is the notation they are supposed to be learning
 * to replace.
 *
 * This turns any [a b; c d] in a prompt, a choice or an explanation into a real
 * bracketed grid. It is a display layer only: the bank keeps the shorthand, so
 * the generator, the checks and verify all keep working on plain text.
 *
 *   QQMat.html(text)  -> HTML string with matrices marked up
 *   QQMat.into(el, text)
 *
 * Anything that is not a matrix is escaped and passed through untouched.
 */
(function (global) {
  'use strict';

  /* [2 1; 3 4] or [1 2 3; 0 1 4; 5 6 0] — rows separated by ; and entries by
   * spaces or commas. Entries may be negative, decimal, or a short algebraic
   * term like k or k−1, which the bank does use. */
  var MATRIX = /\[([^\[\]]*?;[^\[\]]*?)\]/g;

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function grid(body) {
    var rows = body.split(';').map(function (r) {
      return r.trim().split(/[\s,]+/).filter(function (x) { return x !== ''; });
    });
    if (!rows.length || rows.some(function (r) { return !r.length; })) return null;
    var cols = rows[0].length;
    /* A ragged "matrix" is not one — leave the text alone rather than draw
     * something misleading. */
    if (rows.some(function (r) { return r.length !== cols; })) return null;

    var html = '<span class="mat" role="img" aria-label="matrix with ' +
               rows.length + ' rows and ' + cols + ' columns">' +
               '<span class="mat-b mat-l"></span>' +
               '<span class="mat-g" style="grid-template-columns:repeat(' +
               cols + ',auto)">';
    rows.forEach(function (r) {
      r.forEach(function (v) { html += '<span class="mat-c">' + esc(v) + '</span>'; });
    });
    return html + '</span><span class="mat-b mat-r"></span></span>';
  }

  function html(text) {
    if (text == null) return '';
    var out = '', last = 0, m;
    MATRIX.lastIndex = 0;
    while ((m = MATRIX.exec(text)) !== null) {
      var g = grid(m[1]);
      if (!g) continue;
      out += esc(text.slice(last, m.index)) + g;
      last = m.index + m[0].length;
    }
    out += esc(text.slice(last));
    return out;
  }

  function into(el, text) {
    if (!el) return;
    var h = html(text);
    /* Only pay the innerHTML cost when there is actually a matrix to draw. */
    if (h.indexOf('<span class="mat"') === -1) el.textContent = text == null ? '' : text;
    else el.innerHTML = h;
  }

  global.QQMat = { html: html, into: into };
})(window);
