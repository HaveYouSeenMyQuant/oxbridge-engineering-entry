/* Visuals for superposition and for standing waves.
 *
 *   interfere    two sources, one screen: drag the point and read the PATH
 *                DIFFERENCE, which is the whole of interference
 *   standWave    a string fixed at both ends; step through the harmonics and
 *                watch how many half-wavelengths fit
 *
 * Both withhold the number their question asks for when reveal:false is passed.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, button = K.button, slider = K.slider;

  /* ----------------------------------------------------------- interfere --
   * Constructive or destructive is not a rule to memorise, it is a question
   * about how many wavelengths further one path is than the other. So the
   * visual measures both paths and reports the DIFFERENCE in wavelengths; the
   * bright/dark verdict follows from it in front of you.
   */
  global.QQViz.register('interfere', function (host, api) {
    var P = (api && api.params) || {};
    var lam = P.lam != null ? P.lam : 1.0;      // wavelength, arbitrary units
    var d = P.d != null ? P.d : 4;              // source separation
    var reveal = P.reveal !== false;
    var py = P.py != null ? P.py : 0;           // where on the screen we sit
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.86);
    var D = 12;                                 // sources to screen

    slider(row, { min: 0.4, max: 2, step: 0.1, value: lam, label: 'wavelength' },
      function (v) { lam = v; api.onInteract('slider'); say(); });
    slider(row, { min: -6, max: 6, step: 0.25, value: py, label: 'point on the screen' },
      function (v) { py = v; api.onInteract('slider'); say(); });

    function paths() {
      var r1 = Math.hypot(D, py - d / 2), r2 = Math.hypot(D, py + d / 2);
      return { r1: r1, r2: r2, dr: Math.abs(r2 - r1) };
    }
    function say() {
      var p = paths(), n = p.dr / lam;
      var near = Math.round(n), off = Math.abs(n - near);
      var verdict = off < 0.12 ? 'a whole number of wavelengths — the crests arrive together'
        : (Math.abs(off - 0.5) < 0.12 ? 'a half-odd number — crest meets trough'
          : 'somewhere in between');
      out.innerHTML = 'path difference = <b>' + p.dr.toFixed(2) + '</b>' +
        (reveal ? ' = <b>' + n.toFixed(2) + '</b> wavelengths — ' + verdict
                : ' &nbsp;·&nbsp; &lambda; = <b>' + lam.toFixed(2) +
                  '</b> — how many wavelengths is that?');
    }
    say();

    stage.draw = function (g, w, h) {
      var s = Math.min((w - 60) / 15, (h - 30) / 14);
      var ox = 30, oy = h / 2;
      var X = function (x) { return ox + x * s; },
          Y = function (y) { return oy - y * s; };
      /* the screen */
      g.strokeStyle = C.muted; g.lineWidth = 3;
      g.beginPath(); g.moveTo(X(D), Y(-6.5)); g.lineTo(X(D), Y(6.5)); g.stroke();
      /* circular crests from each source, so the pattern is visible and not
       * merely described */
      var srcs = [d / 2, -d / 2];
      srcs.forEach(function (sy, i) {
        g.strokeStyle = i ? 'rgba(210,153,34,0.33)' : 'rgba(88,166,255,0.33)';
        g.lineWidth = 1.2;
        for (var r = lam; r < 15; r += lam) {
          g.beginPath(); g.arc(X(0), Y(sy), r * s, -1.2, 1.2); g.stroke();
        }
      });
      var p = paths();
      /* the two paths to the chosen point */
      [[d / 2, C.accent], [-d / 2, C.gold]].forEach(function (a) {
        g.strokeStyle = a[1]; g.lineWidth = 2.5;
        g.beginPath(); g.moveTo(X(0), Y(a[0])); g.lineTo(X(D), Y(py)); g.stroke();
      });
      srcs.forEach(function (sy, i) {
        g.fillStyle = i ? C.gold : C.accent;
        g.beginPath(); g.arc(X(0), Y(sy), 5, 0, 7); g.fill();
      });
      var n = p.dr / lam, off = Math.abs(n - Math.round(n));
      g.fillStyle = off < 0.12 ? C.good : (Math.abs(off - 0.5) < 0.12 ? C.bad : C.muted);
      g.beginPath(); g.arc(X(D), Y(py), 7, 0, 7); g.fill();
      g.font = f(11, 700); g.textAlign = 'center'; g.fillStyle = C.muted;
      g.fillText('two sources, one screen', w / 2, h - 5);
    };
    return { destroy: stage.destroy };
  });

  /* ---------------------------------------------------------- standWave ---
   * The fundamental is not a formula, it is the observation that the string
   * must be still at both ends, so only a whole number of half-wavelengths
   * fits. Stepping the harmonic up makes that countable.
   */
  global.QQViz.register('standWave', function (host, api) {
    var P = (api && api.params) || {};
    var L = P.L != null ? P.L : 2;             // length in metres
    var n = P.n != null ? P.n : 1;             // harmonic number
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.72);
    button(row, 'next harmonic', function () {
      n = n % 5 + 1; api.onInteract('harmonic'); say();
    });
    button(row, 'back to fundamental', function () {
      n = 1; api.onInteract('reset'); say();
    });
    function say() {
      var lam = 2 * L / n;
      out.innerHTML = 'harmonic <b>' + n + '</b> — <b>' + n +
        '</b> half-wavelength' + (n === 1 ? '' : 's') + ' fit in ' + L + ' m' +
        (reveal ? ', so &lambda; = 2L/n = <b>' + (+lam.toFixed(3)) + '</b> m'
                : ' &nbsp;·&nbsp; how long is one whole wavelength?');
    }
    say();
    var t0 = performance.now();
    stage.draw = function (g, w, h) {
      var t = (performance.now() - t0) / 1000;
      var x0 = 24, x1 = w - 24, mid = h / 2 - 4;
      var amp = Math.min(34, h / 4) * Math.cos(2 * Math.PI * 1.1 * t);
      g.strokeStyle = C.muted; g.lineWidth = 2;
      g.beginPath(); g.moveTo(x0, mid); g.lineTo(x1, mid); g.stroke();
      g.strokeStyle = C.accent; g.lineWidth = 3;
      g.beginPath();
      for (var px = x0; px <= x1; px += 2) {
        var u = (px - x0) / (x1 - x0);
        var y = mid - amp * Math.sin(n * Math.PI * u);
        if (px === x0) g.moveTo(px, y); else g.lineTo(px, y);
      }
      g.stroke();
      /* the ends and the nodes: the points that never move */
      for (var k = 0; k <= n; k++) {
        var px2 = x0 + (x1 - x0) * k / n;
        g.fillStyle = (k === 0 || k === n) ? C.bad : C.good;
        g.beginPath(); g.arc(px2, mid, 5, 0, 7); g.fill();
      }
      g.fillStyle = C.muted; g.font = f(11, 700); g.textAlign = 'center';
      g.fillText('red ends are clamped; green dots never move either',
                 w / 2, h - 5);
    };
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------------- logPlot --
   * The exam skill is not "what is a log", it is: given data that curves,
   * which axes straighten it, and what do the gradient and intercept then
   * MEAN. So this plots the same data three ways -- linear, log-log and
   * log-linear -- and lets you switch. A power law straightens on log-log; an
   * exponential straightens on log-linear. Seeing one curve and the other
   * straighten, on the same points, is the entire lesson.
   */
  global.QQViz.register('logPlot', function (host, api) {
    var P = (api && api.params) || {};
    var kind = P.kind || 'power';        // 'power': y = a x^n, 'exp': y = A e^kx
    var a = P.a != null ? P.a : 3, n = P.n != null ? P.n : 2;
    var A = P.A != null ? P.A : 5, k = P.k != null ? P.k : 0.4;
    var reveal = P.reveal !== false;
    var mode = P.mode || 'linear';
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.80);
    button(row, 'linear axes', function () { mode = 'linear'; api.onInteract('axes'); say(); });
    button(row, 'log-log', function () { mode = 'loglog'; api.onInteract('axes'); say(); });
    button(row, 'log-linear', function () { mode = 'loglin'; api.onInteract('axes'); say(); });

    function pts() {
      var o = [], i;
      for (i = 1; i <= 10; i++) {
        o.push({ x: i, y: kind === 'power' ? a * Math.pow(i, n) : A * Math.exp(k * i) });
      }
      return o;
    }
    /* the transformed coordinates for the chosen axes */
    function tx(p) {
      if (mode === 'loglog') return { x: Math.log10(p.x), y: Math.log10(p.y) };
      if (mode === 'loglin') return { x: p.x, y: Math.log(p.y) };
      return { x: p.x, y: p.y };
    }
    function straight() {
      return (mode === 'loglog' && kind === 'power') ||
             (mode === 'loglin' && kind === 'exp');
    }
    function say() {
      var lab = mode === 'linear' ? 'y against x'
        : (mode === 'loglog' ? 'lg y against lg x' : 'ln y against x');
      var msg = lab + ' — ' + (straight() ? '<b>straight</b>' : 'still curved');
      if (straight() && reveal) {
        msg += kind === 'power'
          ? '. Gradient is the POWER n = <b>' + n + '</b>; intercept is lg a.'
          : '. Gradient is the rate k = <b>' + k + '</b>; intercept is ln A.';
      } else if (straight()) {
        msg += '. What does its gradient tell you?';
      }
      out.innerHTML = msg;
    }
    say();

    stage.draw = function (g, w, h) {
      var p = pts().map(tx);
      var xs = p.map(function (q) { return q.x; }), ys = p.map(function (q) { return q.y; });
      var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
      var y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys);
      if (x1 - x0 < 1e-9) x1 = x0 + 1;
      if (y1 - y0 < 1e-9) y1 = y0 + 1;
      var L = 34, R = 12, T = 12, B = 26;
      var X = function (v) { return L + (v - x0) / (x1 - x0) * (w - L - R); };
      var Y = function (v) { return h - B - (v - y0) / (y1 - y0) * (h - T - B); };
      g.strokeStyle = C.muted; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(L, T); g.lineTo(L, h - B); g.lineTo(w - R, h - B); g.stroke();
      /* the straight line through the first and last point, drawn only when
       * the data really is straight -- otherwise it would imply a fit that is
       * not there */
      if (straight()) {
        g.strokeStyle = C.good; g.lineWidth = 2; g.setLineDash([6, 4]);
        g.beginPath(); g.moveTo(X(p[0].x), Y(p[0].y));
        g.lineTo(X(p[p.length - 1].x), Y(p[p.length - 1].y)); g.stroke();
        g.setLineDash([]);
      }
      g.strokeStyle = C.accent; g.lineWidth = 2.5; g.beginPath();
      p.forEach(function (q, i) {
        if (i) g.lineTo(X(q.x), Y(q.y)); else g.moveTo(X(q.x), Y(q.y));
      });
      g.stroke();
      g.fillStyle = C.gold;
      p.forEach(function (q) {
        g.beginPath(); g.arc(X(q.x), Y(q.y), 3.5, 0, 7); g.fill();
      });
      g.fillStyle = C.muted; g.font = f(11, 700); g.textAlign = 'center';
      g.fillText(mode === 'loglog' ? 'lg x' : 'x', (L + w - R) / 2, h - 8);
      g.save(); g.translate(11, (T + h - B) / 2); g.rotate(-Math.PI / 2);
      g.fillText(mode === 'linear' ? 'y' : (mode === 'loglog' ? 'lg y' : 'ln y'), 0, 0);
      g.restore();
    };
    return { destroy: stage.destroy };
  });
})(window);
