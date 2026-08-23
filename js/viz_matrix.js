/* Matrices — interactive visuals for the engineering-entrance road.
 *
 * House rule, inherited from the quant site: animate the thing, do not write
 * the formula. Every visual here is draggable, tappable or re-runnable, and
 * none of them is a picture of an equation.
 *
 * The six:
 *   matGrid         a matrix you can resize and tap, to learn what a_ij means
 *   matMul          tap an entry of AB and watch the row and column that built it
 *   detArea         drag the two columns; the parallelogram IS the determinant
 *   matInv          apply M, then M-inverse, and watch the shape come home
 *   solveLines      two equations as two lines; the crossing is the solution
 *   transformPlane  four sliders, one shape, live transformation
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, el = K.el, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, button = K.button, slider = K.slider;

  function grid(g, w, h, ox, oy, s, span) {
    g.strokeStyle = C.line; g.lineWidth = 1;
    for (var i = -span; i <= span; i++) {
      g.beginPath(); g.moveTo(ox + i * s, 0); g.lineTo(ox + i * s, h); g.stroke();
      g.beginPath(); g.moveTo(0, oy + i * s); g.lineTo(w, oy + i * s); g.stroke();
    }
    g.strokeStyle = C.muted; g.lineWidth = 1.5;
    g.beginPath(); g.moveTo(0, oy); g.lineTo(w, oy); g.stroke();
    g.beginPath(); g.moveTo(ox, 0); g.lineTo(ox, h); g.stroke();
  }

  function arrow(g, x0, y0, x1, y1, col, lw) {
    g.strokeStyle = col; g.fillStyle = col; g.lineWidth = lw || 3;
    g.beginPath(); g.moveTo(x0, y0); g.lineTo(x1, y1); g.stroke();
    var a = Math.atan2(y1 - y0, x1 - x0), L = 10;
    g.beginPath();
    g.moveTo(x1, y1);
    g.lineTo(x1 - L * Math.cos(a - 0.4), y1 - L * Math.sin(a - 0.4));
    g.lineTo(x1 - L * Math.cos(a + 0.4), y1 - L * Math.sin(a + 0.4));
    g.closePath(); g.fill();
  }

  /* Draw a bracketed matrix. Returns the cell rectangles so callers can hit-test. */
  function drawMatrix(g, m, x, y, cw, ch, opts) {
    opts = opts || {};
    var rows = m.length, cols = m[0].length;
    var W = cols * cw, H = rows * ch, cells = [];
    g.strokeStyle = opts.bracket || C.muted; g.lineWidth = 2;
    var b = 7;
    g.beginPath();
    g.moveTo(x + b, y - 4); g.lineTo(x - 2, y - 4);
    g.lineTo(x - 2, y + H + 4); g.lineTo(x + b, y + H + 4); g.stroke();
    g.beginPath();
    g.moveTo(x + W - b, y - 4); g.lineTo(x + W + 2, y - 4);
    g.lineTo(x + W + 2, y + H + 4); g.lineTo(x + W - b, y + H + 4); g.stroke();
    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        var cx = x + j * cw, cy = y + i * ch;
        var hot = opts.highlight && opts.highlight(i, j);
        if (hot) {
          g.fillStyle = hot === 2 ? 'rgba(210,153,34,0.30)' : 'rgba(88,166,255,0.22)';
          K.roundRect(g, cx + 2, cy + 2, cw - 4, ch - 4, 5); g.fill();
        }
        g.fillStyle = hot ? C.fg : (opts.dim ? C.muted : C.fg);
        g.font = f(opts.size || 17, 700);
        g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(String(m[i][j]), cx + cw / 2, cy + ch / 2);
        cells.push({ i: i, j: j, x: cx, y: cy, w: cw, h: ch });
      }
    }
    return { cells: cells, w: W, h: H };
  }

  /* ------------------------------------------------------------ 1. matGrid */
  global.QQViz.register('matGrid', function (host, api) {
    var rows = 2, cols = 2;
    var vals = [[2, 1], [3, 4]];
    var row = controls(host);
    var out = readout(host, 'Tap an entry to see its address.');
    button(row, 'rows +', function () { resize(rows + 1, cols); });
    button(row, 'rows −', function () { resize(rows - 1, cols); });
    button(row, 'cols +', function () { resize(rows, cols + 1); });
    button(row, 'cols −', function () { resize(rows, cols - 1); });
    var stage = Stage(host, 0.78);
    var pick = null;

    function resize(r, c) {
      r = K.clamp(r, 1, 4); c = K.clamp(c, 1, 4);
      var nv = [];
      for (var i = 0; i < r; i++) {
        nv.push([]);
        for (var j = 0; j < c; j++) nv[i].push((vals[i] && vals[i][j] != null) ? vals[i][j] : (i + j + 1));
      }
      rows = r; cols = c; vals = nv; pick = null;
      out.innerHTML = 'Order <b>' + rows + ' × ' + cols + '</b> — rows first, then columns.';
      api.onInteract('resize');
    }

    var cellRects = [];
    stage.draw = function (g, w, h) {
      var cw = Math.min(52, (w - 60) / cols), ch = Math.min(46, (h - 70) / rows);
      var x = (w - cols * cw) / 2, y = (h - rows * ch) / 2 - 6;
      var r = drawMatrix(g, vals, x, y, cw, ch, {
        highlight: function (i, j) { return pick && pick.i === i && pick.j === j ? 1 : 0; }
      });
      cellRects = r.cells;
      g.fillStyle = C.muted; g.font = f(12, 600);
      g.textAlign = 'center';
      g.fillText(rows + ' rows  ×  ' + cols + ' columns', w / 2, y + rows * ch + 26);
    };

    stage.canvas.addEventListener('pointerdown', function (ev) {
      var p = stage.pointer(ev);
      for (var k = 0; k < cellRects.length; k++) {
        var c = cellRects[k];
        if (p.x >= c.x && p.x <= c.x + c.w && p.y >= c.y && p.y <= c.y + c.h) {
          pick = c;
          out.innerHTML = 'That is <b>a<sub>' + (c.i + 1) + (c.j + 1) + '</sub></b> = ' +
                          vals[c.i][c.j] + ' — row ' + (c.i + 1) + ', column ' + (c.j + 1) + '.';
          api.onInteract('cell');
          return;
        }
      }
    });
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------------- 2. matMul */
  global.QQViz.register('matMul', function (host, api) {
    /* THE PRODUCT USED TO BE DRAWN IN FULL, which answered the question.
     * mx_entry11 asks for the top-left entry of AB and the visual printed it.
     * With reveal:false every entry of the product shows as "?" until it is
     * tapped, and the tapped one shows its row-times-column WORKING rather
     * than the number, so the visual teaches the method and the student still
     * has to do the arithmetic. */
    var P0 = (api && api.params) || {};
    var reveal = P0.reveal !== false;
    var A = [[2, 1], [3, 4]], B = [[1, 0], [-2, 5]];
    var P = [[0, 0], [0, 0]], i, j, k;
    for (i = 0; i < 2; i++) for (j = 0; j < 2; j++) {
      var s = 0; for (k = 0; k < 2; k++) s += A[i][k] * B[k][j]; P[i][j] = s;
    }
    var out = readout(host, 'Tap an entry of the answer.');
    var stage = Stage(host, 0.62);
    var sel = null, rects = [];

    stage.draw = function (g, w, h) {
      var cw = 40, ch = 36;
      var totalW = 3 * (2 * cw) + 2 * 34;
      var sc = Math.min(1, (w - 20) / totalW);
      cw *= sc; ch *= sc;
      var y = (h - 2 * ch) / 2 - 4;
      var x0 = (w - (3 * 2 * cw + 2 * 34 * sc)) / 2;
      var gap = 34 * sc;

      drawMatrix(g, A, x0, y, cw, ch, {
        size: 16 * sc,
        highlight: function (r) { return sel && sel.i === r ? 1 : 0; }
      });
      var x1 = x0 + 2 * cw + gap;
      drawMatrix(g, B, x1, y, cw, ch, {
        size: 16 * sc,
        highlight: function (r, c) { return sel && sel.j === c ? 2 : 0; }
      });
      var x2 = x1 + 2 * cw + gap;
      var shown = reveal ? P : [['?', '?'], ['?', '?']];
      var rr = drawMatrix(g, shown, x2, y, cw, ch, {
        size: 16 * sc, bracket: C.accent,
        highlight: function (r, c) { return sel && sel.i === r && sel.j === c ? 1 : 0; }
      });
      rects = rr.cells;

      g.fillStyle = C.muted; g.font = f(15 * sc, 700); g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillText('×', x0 + 2 * cw + gap / 2, y + ch);
      g.fillText('=', x1 + 2 * cw + gap / 2, y + ch);

      if (sel) {
        g.fillStyle = C.accent; g.font = f(12 * sc, 600); g.textAlign = 'center';
        var terms = [];
        for (k = 0; k < 2; k++) terms.push(A[sel.i][k] + '×' + B[k][sel.j]);
        g.fillText(terms.join('  +  ') + (reveal ? '  =  ' + P[sel.i][sel.j] : '  =  ?'),
                   w / 2, y + 2 * ch + 22 * sc);
      }
    };

    stage.canvas.addEventListener('pointerdown', function (ev) {
      var p = stage.pointer(ev);
      for (var n = 0; n < rects.length; n++) {
        var c = rects[n];
        if (p.x >= c.x && p.x <= c.x + c.w && p.y >= c.y && p.y <= c.y + c.h) {
          sel = c;
          out.innerHTML = 'Row <b>' + (c.i + 1) + '</b> of A against column <b>' +
                          (c.j + 1) + '</b> of B.';
          api.onInteract('entry');
          return;
        }
      }
    });
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------------ 3. detArea */
  global.QQViz.register('detArea', function (host, api) {
    /* Opens on the question's own matrix when it supplies one, and withholds
     * the determinant VALUE on questions that ask for it -- the parallelogram
     * is still there to be reasoned about. */
    var P0 = (api && api.params) || {};
    var reveal = P0.reveal !== false;
    var col1 = { x: P0.a != null ? P0.a : 3, y: P0.c != null ? P0.c : 1 },
        col2 = { x: P0.b != null ? P0.b : 1, y: P0.d != null ? P0.d : 2 };
    var out = readout(host, 'Drag either arrow.');
    var stage = Stage(host, 0.95);
    var drag = null;

    function det() { return col1.x * col2.y - col2.x * col1.y; }

    function say() {
      var d = det();
      var lhs = 'det = ' + col1.x.toFixed(1) + '×' + col2.y.toFixed(1) + ' − ' +
                col2.x.toFixed(1) + '×' + col1.y.toFixed(1);
      out.innerHTML = reveal
        ? lhs + ' = <b>' + d.toFixed(2) + '</b>' +
          (Math.abs(d) < 0.05 ? ' — squashed flat, no inverse' :
            (d < 0 ? ' — negative: flipped over' : ' — area of the parallelogram'))
        : lhs + ' = <b>?</b> — the shaded area is its size, and the sign says ' +
          'whether the plane was flipped.';
    }
    say();

    stage.draw = function (g, w, h) {
      var s = Math.min(w, h) / 8, ox = w / 2, oy = h / 2 + s * 0.6;
      grid(g, w, h, ox, oy, s, 5);
      var P = function (v) { return { x: ox + v.x * s, y: oy - v.y * s }; };
      var a = P(col1), b = P(col2), ab = P({ x: col1.x + col2.x, y: col1.y + col2.y });
      var d = det();
      g.beginPath();
      g.moveTo(ox, oy); g.lineTo(a.x, a.y); g.lineTo(ab.x, ab.y); g.lineTo(b.x, b.y);
      g.closePath();
      g.fillStyle = Math.abs(d) < 0.05 ? 'rgba(248,81,73,0.30)'
        : (d < 0 ? 'rgba(210,153,34,0.24)' : 'rgba(63,185,80,0.22)');
      g.fill();
      arrow(g, ox, oy, a.x, a.y, C.accent, 3);
      arrow(g, ox, oy, b.x, b.y, C.gold, 3);
      g.fillStyle = C.fg; g.font = f(13, 700); g.textAlign = 'center';
      g.fillText(reveal ? 'area ' + Math.abs(d).toFixed(2) : 'drag to compare areas',
                 w / 2, h - 8);
    };

    function nearest(p, w, h) {
      var s = Math.min(w, h) / 8, ox = w / 2, oy = h / 2 + s * 0.6;
      var d1 = Math.hypot(p.x - (ox + col1.x * s), p.y - (oy - col1.y * s));
      var d2 = Math.hypot(p.x - (ox + col2.x * s), p.y - (oy - col2.y * s));
      return d1 < d2 ? (d1 < 40 ? 1 : 0) : (d2 < 40 ? 2 : 0);
    }
    function move(ev) {
      if (!drag) return;
      ev.preventDefault();
      var p = stage.pointer(ev), w = stage.w, h = stage.h - 6;
      var s = Math.min(w, h) / 8, ox = w / 2, oy = h / 2 + s * 0.6;
      var v = { x: K.clamp((p.x - ox) / s, -4, 4), y: K.clamp((oy - p.y) / s, -3, 4) };
      v.x = Math.round(v.x * 2) / 2; v.y = Math.round(v.y * 2) / 2;
      if (drag === 1) col1 = v; else col2 = v;
      say();
    }
    stage.canvas.addEventListener('pointerdown', function (ev) {
      drag = nearest(stage.pointer(ev), stage.w, stage.h - 6);
      if (drag) { api.onInteract('drag'); move(ev); }
    });
    global.addEventListener('pointermove', move);
    global.addEventListener('pointerup', function () { drag = null; });
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------------- 4. matInv */
  global.QQViz.register('matInv', function (host, api) {
    var M = [[3, 4], [1, 2]];
    var d = M[0][0] * M[1][1] - M[0][1] * M[1][0];
    var Inv = [[M[1][1] / d, -M[0][1] / d], [-M[1][0] / d, M[0][0] / d]];
    var phase = 0;                       // 0 original, 1 transformed, 2 back
    var t = 0, target = 0;
    var row = controls(host);
    var out = readout(host, 'Apply M, then apply M⁻¹.');
    button(row, 'apply M', function () { target = 1; phase = 1; api.onInteract('apply'); say(); });
    button(row, 'apply M⁻¹', function () { target = 0; phase = 2; api.onInteract('undo'); say(); });
    var stage = Stage(host, 0.9);

    function say() {
      out.innerHTML = phase === 1
        ? 'M has stretched and sheared the square. Area is now <b>' + Math.abs(d) + '</b>×.'
        : (phase === 2 ? 'M⁻¹ has put every point back exactly where it started.'
                       : 'The unit square, before anything happens.');
    }

    var SQ = [[0, 0], [1, 0], [1, 1], [0, 1]];
    stage.draw = function (g, w, h) {
      t += (target - t) * 0.12;
      var s = Math.min(w, h) / 7, ox = w / 2 - s, oy = h / 2 + s * 1.4;
      grid(g, w, h, ox, oy, s, 6);
      g.beginPath();
      SQ.forEach(function (p, i) {
        var x = p[0] + (M[0][0] * p[0] + M[0][1] * p[1] - p[0]) * t;
        var y = p[1] + (M[1][0] * p[0] + M[1][1] * p[1] - p[1]) * t;
        var X = ox + x * s, Y = oy - y * s;
        if (i === 0) g.moveTo(X, Y); else g.lineTo(X, Y);
      });
      g.closePath();
      g.fillStyle = 'rgba(88,166,255,0.26)'; g.fill();
      g.strokeStyle = C.accent; g.lineWidth = 2.5; g.stroke();
      g.fillStyle = C.muted; g.font = f(12, 600); g.textAlign = 'center';
      g.fillText(t < 0.02 ? 'unit square' : (t > 0.98 ? 'after M' : '…'), w / 2, h - 8);
    };
    return { destroy: stage.destroy };
  });

  /* ---------------------------------------------------------- 5. solveLines */
  global.QQViz.register('solveLines', function (host, api) {
    /* 3x + 4y = 10 and x + 2y = 4.
     * THE READOUT USED TO PRINT "they cross at x = 2, y = 1", which is
     * precisely what mx_solve_x and mx_solve_y ask for. With reveal:false it
     * reports only the determinant and WHETHER they cross; the crossing point
     * is drawn on the grid for the student to read off, which is the skill. */
    var P0 = (api && api.params) || {};
    var reveal = P0.reveal !== false;
    var a1 = 3, b1 = 4, c1 = 10, a2 = 1, b2 = 2, c2 = 4;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.95);

    slider(row, { min: -4, max: 6, step: 1, value: a2, label: 'second equation x-coefficient' },
      function (v) { a2 = v; api.onInteract('slider'); say(); });

    function say() {
      var det = a1 * b2 - b1 * a2;
      if (Math.abs(det) < 1e-9) {
        out.innerHTML = 'det = <b>0</b> — the lines are parallel. No single crossing point.';
      } else {
        var x = (c1 * b2 - b1 * c2) / det, y = (a1 * c2 - c1 * a2) / det;
        out.innerHTML = reveal
          ? 'det = <b>' + det + '</b> — they cross at x = <b>' + (+x.toFixed(2)) +
            '</b>, y = <b>' + (+y.toFixed(2)) + '</b>.'
          : 'det = <b>' + det + '</b> — non-zero, so they cross exactly once. ' +
            'Read the point off the grid.';
      }
    }
    say();

    stage.draw = function (g, w, h) {
      var s = Math.min(w, h) / 9, ox = w / 2 - s, oy = h / 2 + s * 2;
      grid(g, w, h, ox, oy, s, 7);
      function line(a, b, c, col) {
        if (Math.abs(b) < 1e-9) {
          var X = ox + (c / a) * s;
          g.strokeStyle = col; g.lineWidth = 2.5;
          g.beginPath(); g.moveTo(X, 0); g.lineTo(X, h); g.stroke();
          return;
        }
        var x0 = -6, x1 = 8;
        g.strokeStyle = col; g.lineWidth = 2.5;
        g.beginPath();
        g.moveTo(ox + x0 * s, oy - ((c - a * x0) / b) * s);
        g.lineTo(ox + x1 * s, oy - ((c - a * x1) / b) * s);
        g.stroke();
      }
      line(a1, b1, c1, C.accent);
      line(a2, b2, c2, C.gold);
      var det = a1 * b2 - b1 * a2;
      if (Math.abs(det) > 1e-9) {
        var x = (c1 * b2 - b1 * c2) / det, y = (a1 * c2 - c1 * a2) / det;
        g.fillStyle = C.good;
        g.beginPath(); g.arc(ox + x * s, oy - y * s, 6, 0, 7); g.fill();
      }
      g.fillStyle = C.muted; g.font = f(12, 600); g.textAlign = 'center';
      g.fillText('3x + 4y = 10   and   ' + a2 + 'x + 2y = 4', w / 2, h - 8);
    };
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------- 6. transformPlane */
  global.QQViz.register('transformPlane', function (host, api) {
    var P0 = (api && api.params) || {};
    var m = P0.m ? P0.m.slice() : [1, 0, 0, 1];
    var reveal = P0.reveal !== false;
    var row = controls(host);
    var out = readout(host, 'Move the sliders. The columns are where (1,0) and (0,1) land.');
    var stage = Stage(host, 0.92);
    ['a', 'b', 'c', 'd'].forEach(function (name, idx) {
      slider(row, { min: -3, max: 3, step: 0.5, value: m[idx], label: name },
        function (v) { m[idx] = v; api.onInteract('slider'); say(); });
    });
    function say() {
      var det = m[0] * m[3] - m[1] * m[2];
      out.innerHTML = '[' + m[0] + ' ' + m[1] + '; ' + m[2] + ' ' + m[3] + ']' +
        (reveal ? '  ·  det = <b>' + (+det.toFixed(2)) + '</b>' +
                  (Math.abs(det) < 0.01 ? ' — collapsed to a line' : '')
                : '  ·  watch where the two arrows land');
    }
    say();

    var SHAPE = [[0, 0], [1, 0], [1, 1], [0.5, 1.6], [0, 1]];
    stage.draw = function (g, w, h) {
      var s = Math.min(w, h) / 8, ox = w / 2, oy = h / 2 + s;
      grid(g, w, h, ox, oy, s, 6);
      g.beginPath();
      SHAPE.forEach(function (p, i) {
        var x = m[0] * p[0] + m[1] * p[1], y = m[2] * p[0] + m[3] * p[1];
        var X = ox + x * s, Y = oy - y * s;
        if (i === 0) g.moveTo(X, Y); else g.lineTo(X, Y);
      });
      g.closePath();
      g.fillStyle = 'rgba(163,113,247,0.26)'; g.fill();
      g.strokeStyle = '#a371f7'; g.lineWidth = 2.5; g.stroke();
      arrow(g, ox, oy, ox + m[0] * s, oy - m[2] * s, C.accent, 3);
      arrow(g, ox, oy, ox + m[1] * s, oy - m[3] * s, C.gold, 3);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('blue = image of (1,0)      gold = image of (0,1)', w / 2, h - 8);
    };
    return { destroy: stage.destroy };
  });

})(window);

/* ==========================================================================
 * Three visuals added after an audit found the ones above being used for
 * questions they could not illustrate. Each of these exists because a specific
 * question had no honest picture.
 * ========================================================================== */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, button = K.button;

  function bracketed(g, m, x, y, cw, ch, size, hi, dimAll) {
    var rows = m.length, cols = m[0].length, W = cols * cw, H = rows * ch;
    g.strokeStyle = C.muted; g.lineWidth = 2;
    var b = 6;
    g.beginPath();
    g.moveTo(x + b, y - 4); g.lineTo(x - 2, y - 4);
    g.lineTo(x - 2, y + H + 4); g.lineTo(x + b, y + H + 4); g.stroke();
    g.beginPath();
    g.moveTo(x + W - b, y - 4); g.lineTo(x + W + 2, y - 4);
    g.lineTo(x + W + 2, y + H + 4); g.lineTo(x + W - b, y + H + 4); g.stroke();
    for (var i = 0; i < rows; i++) for (var j = 0; j < cols; j++) {
      if (hi && hi(i, j)) {
        g.fillStyle = 'rgba(88,166,255,0.22)';
        K.roundRect(g, x + j * cw + 2, y + i * ch + 2, cw - 4, ch - 4, 5); g.fill();
      }
      g.fillStyle = dimAll ? C.muted : C.fg;
      g.font = f(size, 700); g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(String(m[i][j]), x + j * cw + cw / 2, y + i * ch + ch / 2);
    }
    return { w: W, h: H };
  }

  /* ------------------------------------------------------------- matOps ----
   * For "what is the top-left entry of A + B" and "of 3A". The old visual
   * showed one matrix and could do neither. */
  global.QQViz.register('matOps', function (host, api) {
    var P = (api && api.params) || {};
    var A = P.A || [[2, 1], [3, 4]], B = P.B || [[1, 0], [-2, 5]];
    var k = P.k != null ? P.k : 3;
    var mode = P.mode || 'add';            // 'add' or 'scale'
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.6);
    var sel = null, cells = [];

    function result() {
      var R = [[0, 0], [0, 0]];
      for (var i = 0; i < 2; i++) for (var j = 0; j < 2; j++) {
        R[i][j] = mode === 'add' ? A[i][j] + B[i][j] : k * A[i][j];
      }
      return R;
    }
    function say() {
      if (!sel) { out.textContent = 'Tap an entry of the answer.'; return; }
      var i = sel.i, j = sel.j;
      var lhs = mode === 'add' ? A[i][j] + ' + ' + B[i][j] : k + ' × ' + A[i][j];
      out.innerHTML = 'Entry (' + (i + 1) + ',' + (j + 1) + '): ' + lhs +
                      (reveal ? ' = <b>' + result()[i][j] + '</b>' : ' = <b>?</b>');
    }
    say();
    button(row, mode === 'add' ? 'A + B' : k + 'A', function () { api.onInteract('op'); });

    stage.draw = function (g, w, h) {
      var cw = Math.min(42, (w - 90) / 6), ch = cw * 0.9;
      var blocks = mode === 'add' ? 3 : 2;
      var gap = 30, tot = blocks * 2 * cw + (blocks - 1) * gap;
      var x = (w - tot) / 2, y = (h - 2 * ch) / 2;
      bracketed(g, A, x, y, cw, ch, 15,
                function (i, j) { return sel && sel.i === i && sel.j === j; });
      var nx = x + 2 * cw + gap;
      g.fillStyle = C.muted; g.font = f(16, 700);
      g.textAlign = 'center'; g.textBaseline = 'middle';
      if (mode === 'add') {
        g.fillText('+', x + 2 * cw + gap / 2, y + ch);
        bracketed(g, B, nx, y, cw, ch, 15,
                  function (i, j) { return sel && sel.i === i && sel.j === j; });
        nx += 2 * cw + gap;
        g.fillText('=', nx - gap / 2, y + ch);
      } else {
        g.fillText('×' + k, x + 2 * cw + gap / 2, y + ch);
      }
      var shown = reveal ? result() : [['?', '?'], ['?', '?']];
      bracketed(g, shown, nx, y, cw, ch, 15,
                function (i, j) { return sel && sel.i === i && sel.j === j; });
      cells = [];
      for (var i = 0; i < 2; i++) for (var j = 0; j < 2; j++) {
        cells.push({ i: i, j: j, x: nx + j * cw, y: y + i * ch, w: cw, h: ch });
      }
      g.fillStyle = C.muted; g.font = f(11, 600);
      g.fillText(mode === 'add' ? 'addition pairs entries by position'
                                : 'a scalar multiplies every entry', w / 2, h - 6);
    };
    stage.canvas.addEventListener('pointerdown', function (ev) {
      var p = stage.pointer(ev);
      for (var n = 0; n < cells.length; n++) {
        var c = cells[n];
        if (p.x >= c.x && p.x <= c.x + c.w && p.y >= c.y && p.y <= c.y + c.h) {
          sel = c; say(); api.onInteract('cell'); return;
        }
      }
    });
    return { destroy: stage.destroy };
  });

  /* ----------------------------------------------------------- matShapes ---
   * For the conformability question. The old visual was hard-wired to 2x2
   * matrices and could not show why (2x3)(3x4) works and (3x4)(2x3) does not
   * -- while its hint claimed you could "slide the shapes together". */
  global.QQViz.register('matShapes', function (host, api) {
    var P = (api && api.params) || {};
    var r1 = P.r1 || 2, c1 = P.c1 || 3, r2 = P.r2 || 3, c2 = P.c2 || 4;
    var swapped = false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.52);
    button(row, 'swap the order', function () {
      swapped = !swapped; api.onInteract('swap'); say();
    });
    function left() { return swapped ? [r2, c2] : [r1, c1]; }
    function right() { return swapped ? [r1, c1] : [r2, c2]; }
    function say() {
      var L = left(), R = right(), fits = L[1] === R[0];
      out.innerHTML = '(' + L[0] + '×<b>' + L[1] + '</b>)(<b>' + R[0] + '</b>×' + R[1] + ') — ' +
        (fits ? 'the inner numbers match, so the product is <b>' + L[0] + '×' + R[1] + '</b>'
              : 'the inner numbers <b>differ</b>, so this product is undefined');
    }
    say();
    stage.draw = function (g, w, h) {
      var L = left(), R = right(), fits = L[1] === R[0];
      var u = Math.min(16, (w - 90) / (L[1] + R[1] + 3));
      var y = h / 2 - 26;
      function blk(x, rows, cols, col) {
        g.fillStyle = col; g.globalAlpha = 0.30;
        g.fillRect(x, y, cols * u, rows * u);
        g.globalAlpha = 1; g.strokeStyle = col; g.lineWidth = 2;
        g.strokeRect(x, y, cols * u, rows * u);
        g.fillStyle = C.fg; g.font = f(12, 700); g.textAlign = 'center';
        g.fillText(rows + '×' + cols, x + cols * u / 2, y + rows * u + 16);
        return x + cols * u;
      }
      var x0 = (w - (L[1] + R[1]) * u - 40) / 2;
      var e1 = blk(x0, L[0], L[1], C.accent);
      var e2 = blk(e1 + 40, R[0], R[1], C.gold);
      /* the join: green when the inner dimensions agree, red when they do not */
      g.strokeStyle = fits ? C.good : C.bad; g.lineWidth = 3;
      g.setLineDash(fits ? [] : [5, 4]);
      g.beginPath();
      g.moveTo(e1, y + L[0] * u / 2); g.lineTo(e1 + 40, y + R[0] * u / 2);
      g.stroke(); g.setLineDash([]);
      g.fillStyle = fits ? C.good : C.bad; g.font = f(13, 700); g.textAlign = 'center';
      g.fillText(fits ? 'inner numbers match' : 'inner numbers differ', w / 2, h - 6);
    };
    return { destroy: stage.destroy };
  });

  /* ---------------------------------------------------------- matCompose ---
   * For "is AB the same as BA" and "which order composes". The old visual
   * applied a single matrix and could not show an order at all. */
  global.QQViz.register('matCompose', function (host, api) {
    var P = (api && api.params) || {};
    var R = P.R || [0, -1, 1, 0];          // rotate 90 anticlockwise
    var F = P.F || [1, 0, 0, -1];          // reflect in the x-axis
    var order = 'FR';
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.62);
    button(row, 'swap the order', function () {
      order = order === 'FR' ? 'RF' : 'FR'; api.onInteract('swap'); say();
    });
    function mul(a, b) {
      return [a[0] * b[0] + a[1] * b[2], a[0] * b[1] + a[1] * b[3],
              a[2] * b[0] + a[3] * b[2], a[2] * b[1] + a[3] * b[3]];
    }
    function say() {
      out.innerHTML = order === 'FR'
        ? 'FR — rotate first, then reflect'
        : 'RF — reflect first, then rotate';
    }
    say();
    var SHAPE = [[0, 0], [1.4, 0], [1.4, 0.5], [0.5, 0.5], [0.5, 1.4], [0, 1.4]];
    stage.draw = function (g, w, h) {
      var s = Math.min(w, h) / 6.5, ox = w / 2, oy = h / 2;
      grid(g, w, h, ox, oy, s, 4);
      var M = order === 'FR' ? mul(F, R) : mul(R, F);
      function poly(m, col, alpha, dash) {
        g.beginPath();
        SHAPE.forEach(function (p, i) {
          var x = m[0] * p[0] + m[1] * p[1], yv = m[2] * p[0] + m[3] * p[1];
          var X = ox + x * s, Y = oy - yv * s;
          if (i === 0) g.moveTo(X, Y); else g.lineTo(X, Y);
        });
        g.closePath();
        g.globalAlpha = alpha; g.fillStyle = col; g.fill(); g.globalAlpha = 1;
        g.setLineDash(dash || []); g.strokeStyle = col; g.lineWidth = 2.5;
        g.stroke(); g.setLineDash([]);
      }
      poly([1, 0, 0, 1], C.muted, 0.10, [4, 4]);      // where it started
      poly(M, C.accent, 0.30);
      /* the OTHER order, faint, so the difference is the point of the picture */
      var other = order === 'FR' ? mul(R, F) : mul(F, R);
      poly(other, C.gold, 0.12, [5, 4]);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('blue = this order      gold dashed = the other order', w / 2, h - 6);
    };
    function grid(g, w, h, ox, oy, s, span) {
      g.strokeStyle = C.line; g.lineWidth = 1;
      for (var i = -span; i <= span; i++) {
        g.beginPath(); g.moveTo(ox + i * s, 0); g.lineTo(ox + i * s, h); g.stroke();
        g.beginPath(); g.moveTo(0, oy + i * s); g.lineTo(w, oy + i * s); g.stroke();
      }
      g.strokeStyle = C.muted; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(0, oy); g.lineTo(w, oy); g.stroke();
      g.beginPath(); g.moveTo(ox, 0); g.lineTo(ox, h); g.stroke();
    }
    return { destroy: stage.destroy };
  });
})(window);
