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

  /* ------------------------------------------------------------ scaleBox --
   * The square-cube law is the estimation idea everyone accepts as a sentence
   * and then cannot use. So this makes it countable: drag the length factor
   * and watch three bars -- length, area, volume -- pull apart. The bars carry
   * FACTORS rather than raw sizes, because the factor is what the question
   * asks for, and they sit on a log scale so x64 still fits beside x1.
   */
  global.QQViz.register('scaleBox', function (host, api) {
    var P = (api && api.params) || {};
    var L = P.L != null ? P.L : 2;
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.82);
    slider(row, { min: 1, max: 4, step: 0.5, value: L, label: 'length factor' },
      function (v) { L = v; api.onInteract('slider'); say(); });

    function say() {
      out.innerHTML = 'length x<b>' + L + '</b>' + (reveal
        ? ' &nbsp;·&nbsp; area x<b>' + (+(L * L).toFixed(2)) +
          '</b> &nbsp;·&nbsp; volume x<b>' + (+(L * L * L).toFixed(2)) + '</b>'
        : ' &nbsp;·&nbsp; area and volume do not grow by the same factor. By how much does each?');
    }
    say();

    stage.draw = function (g, w, h) {
      var barTop = h - 66;
      /* the cube, so the growth is seen and not only tabulated */
      var base = Math.min((w - 40) / 6.0, (barTop - 16) / 4.8);
      var side = base * L, ox = 24, oy = barTop - 10;
      var dp = side * 0.32;
      g.fillStyle = 'rgba(88,166,255,0.18)';
      g.fillRect(ox, oy - side, side, side);
      g.strokeStyle = C.accent; g.lineWidth = 2;
      g.strokeRect(ox, oy - side, side, side);
      g.beginPath();
      g.moveTo(ox, oy - side); g.lineTo(ox + dp, oy - side - dp);
      g.lineTo(ox + side + dp, oy - side - dp); g.lineTo(ox + side, oy - side);
      g.moveTo(ox + side, oy); g.lineTo(ox + side + dp, oy - dp);
      g.lineTo(ox + side + dp, oy - side - dp);
      g.stroke();

      var bars = [['length', L, C.accent],
                  ['area', L * L, C.gold],
                  ['volume', L * L * L, C.good]];
      var maxF = Math.max(4 * 4 * 4, bars[2][1]);
      var x0 = 62, wAvail = w - x0 - 44;
      bars.forEach(function (b, i) {
        var y = barTop + 6 + i * 18;
        var frac = Math.log(b[1]) / Math.log(maxF);   // log scale
        g.fillStyle = C.line;
        K.roundRect(g, x0, y, wAvail, 11, 3); g.fill();
        g.fillStyle = b[2];
        K.roundRect(g, x0, y, Math.max(3, wAvail * frac), 11, 3); g.fill();
        g.fillStyle = C.muted; g.font = f(10, 700); g.textAlign = 'right';
        g.fillText(b[0], x0 - 6, y + 9);
        g.fillStyle = C.fg; g.textAlign = 'left';
        g.fillText(reveal ? 'x' + (+b[1].toFixed(2)) : '?', x0 + wAvail + 6, y + 9);
      });
    };
    return { destroy: stage.destroy };
  });
})(window);

/* ============================================================ seeSaw ======
 * Moments, as a thing that tips rather than a formula that balances.
 *
 * Unit 8 gained a Moments and stability lesson on 2026-08-24 and nothing
 * registered could draw it: the visuals list had 27 entries and not one beam,
 * pivot or balance among them.
 *
 * TWO MODES, because the same picture answers two different questions:
 *   mode 'load'   the pivot is fixed at the centre and you move the second
 *                 weight. Balance when W1.d1 = W2.d2.
 *   mode 'pivot'  the weights are pinned to the ends and you move the PIVOT.
 *                 The point where it balances IS the centre of mass, which is
 *                 the whole content of me_com_two and is much easier to
 *                 believe when you have found it by hand.
 *
 * The beam TILTS by the net moment, so being wrong is visible before any
 * number is read. `reveal:false` hides the verdict line but never the two
 * moments themselves -- those are the working, not the answer.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, slider = K.slider;

  global.QQViz.register('seeSaw', function (host, api) {
    var P = (api && api.params) || {};
    var mode = P.mode === 'pivot' ? 'pivot' : 'load';
    var w1 = P.w1 != null ? P.w1 : 300;
    var w2 = P.w2 != null ? P.w2 : 600;
    var span = P.span != null ? P.span : 1.0;      // half-length, metres
    var d1 = P.d1 != null ? P.d1 : 1.0;
    var d2 = P.d2 != null ? P.d2 : 0.9;
    var pivot = P.pivot != null ? P.pivot : 0.35;  // 0..1 along the beam
    var unit = P.unit || 'N';
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.72);

    if (mode === 'load') {
      slider(row, { min: 0.1, max: span, step: 0.05, value: d2,
                    label: 'distance of the second one' },
        function (v) { d2 = v; api.onInteract('slider'); say(); });
    } else {
      slider(row, { min: 0.05, max: 0.95, step: 0.05, value: pivot,
                    label: 'pivot position' },
        function (v) { pivot = v; api.onInteract('slider'); say(); });
    }

    /* left and right moments about the pivot, in the same units both ways */
    function moments() {
      if (mode === 'load') return [w1 * d1, w2 * d2];
      return [w1 * (pivot * span), w2 * ((1 - pivot) * span)];
    }
    function r2(x) { return Math.round(x * 100) / 100; }
    function say() {
      var m = moments();
      var bal = Math.abs(m[0] - m[1]) < 1e-6;
      out.innerHTML =
        'left <b>' + r2(m[0]) + '</b> vs right <b>' + r2(m[1]) + '</b>' +
        (reveal ? ('   ·   ' + (bal ? '<b>balanced</b>'
                                    : 'it tips ' + (m[0] > m[1] ? 'left' : 'right')))
                : '');
    }
    say();

    stage.draw = function (g, w, h) {
      var mid = h / 2, cx = w / 2, half = w * 0.36;
      var m = moments();
      /* tilt from the net moment, capped so it stays on screen */
      var net = (m[1] - m[0]) / Math.max(1, Math.abs(m[0]) + Math.abs(m[1]));
      /* Tilt is deliberately GENTLE. At the first cut's 0.30 rad the beam ran
       * off the top and bottom of the panel and took both weights with it --
       * seen on the live site, not in any check. The tilt only has to say
       * WHICH WAY it goes; the numbers above say by how much. */
      var th = Math.max(-0.13, Math.min(0.13, net * 0.30));
      var px = mode === 'pivot' ? cx - half + pivot * 2 * half : cx;

      /* the pivot: a triangle under the beam */
      g.fillStyle = C.line;
      g.beginPath();
      g.moveTo(px, mid + 6); g.lineTo(px - 16, mid + 40); g.lineTo(px + 16, mid + 40);
      g.closePath(); g.fill();

      function at(dx) {          /* a point dx px along the tilted beam */
        return [px + dx * Math.cos(th), mid + dx * Math.sin(th)];
      }
      var L = at(-(px - (cx - half))), R = at((cx + half) - px);
      g.strokeStyle = C.accent; g.lineWidth = 7; g.lineCap = 'round';
      g.beginPath(); g.moveTo(L[0], L[1]); g.lineTo(R[0], R[1]); g.stroke();

      /* the two weights, drawn where they actually sit */
      function block(pt, wt, lab) {
        var s = 12 + 16 * Math.min(1, wt / Math.max(w1, w2));
        g.fillStyle = C.gold;
        K.roundRect(g, pt[0] - s / 2, pt[1] - s - 4, s, s, 3); g.fill();
        g.fillStyle = C.fg; g.font = f(11, 700); g.textAlign = 'center';
        g.fillText(lab, pt[0], pt[1] - s - 9);
      }
      if (mode === 'load') {
        block(at(-half * (d1 / span)), w1, w1 + ' ' + unit);
        block(at(half * (d2 / span)), w2, w2 + ' ' + unit);
      } else {
        block(L, w1, w1 + ' ' + unit);
        block(R, w2, w2 + ' ' + unit);
      }

      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText(mode === 'pivot'
        ? 'move the pivot until it sits level'
        : 'moment = weight x distance from the pivot', cx, h - 6);
    };
    return { destroy: stage.destroy };
  });
}(window));

/* ========================================================= energyBars ======
 * Energy changing form, as two bars whose total never moves.
 *
 * Lesson p4 (Energy and power) had FIVE questions and ZERO visuals, and none
 * of the 36 registered visuals could illustrate any of them — nothing in the
 * library drew energy at all. That gap was recorded on 2026-08-24 rather than
 * filled with a near miss; this is the build it was waiting for.
 *
 * Drag the height. Gravitational energy falls, kinetic energy rises, and the
 * two bars always sum to the same total — which is the whole idea, and is why
 * the total bar is drawn as a fixed outline that the two colours fill.
 *
 * WHAT IT DOES NOT SHOW: a speed. `me_fall_speed` asks for the speed on
 * landing, so the ENERGIES are the working and the speed is the answer. The
 * readout carries joules and never m/s unless `showSpeed` is explicitly set.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, slider = K.slider;

  global.QQViz.register('energyBars', function (host, api) {
    var P = (api && api.params) || {};
    var m = P.m != null ? P.m : 2;          // kg
    var g = P.g != null ? P.g : 10;
    var h0 = P.h0 != null ? P.h0 : 5;       // the drop, metres
    var h = P.h != null ? P.h : h0;         // where it currently is
    var showSpeed = P.showSpeed === true;   // OFF unless asked for
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.78);

    slider(row, { min: 0, max: h0, step: h0 / 20, value: h, label: 'height' },
      function (v) { h = v; api.onInteract('slider'); say(); });

    function gpe() { return m * g * h; }
    function ke() { return m * g * (h0 - h); }
    function total() { return m * g * h0; }
    function r1(x) { return Math.round(x * 10) / 10; }

    function say() {
      out.innerHTML =
        'height <b>' + r1(h) + ' m</b>   ·   gravitational <b>' + r1(gpe()) +
        ' J</b>   ·   kinetic <b>' + r1(ke()) + ' J</b>' +
        (showSpeed && h < h0
          ? '   ·   speed <b>' + r1(Math.sqrt(2 * g * (h0 - h))) + ' m/s</b>'
          : '');
    }
    say();

    stage.draw = function (gx, w, hh) {
      var pad = 26, barW = 54, baseY = hh - 34, top = 22;
      var span = baseY - top;
      /* the falling object, at the height the slider says */
      var ox = pad + 40;
      var oy = baseY - span * (h / h0);
      gx.fillStyle = C.line;
      gx.fillRect(pad + 4, baseY, 72, 4);
      gx.fillStyle = C.gold;
      gx.beginPath(); gx.arc(ox, oy - 10, 11, 0, 7); gx.fill();
      /* the two bars, sharing one fixed outline so the total is visibly fixed */
      var bx = w - pad - barW * 2 - 26;
      var frac = total() > 0 ? gpe() / total() : 0;
      gx.strokeStyle = C.line; gx.lineWidth = 2;
      gx.strokeRect(bx, top, barW, span);
      gx.fillStyle = C.accent;
      gx.fillRect(bx + 1, top + span * (1 - frac) + 1, barW - 2, span * frac - 2);
      gx.strokeRect(bx + barW + 26, top, barW, span);
      gx.fillStyle = C.good;
      gx.fillRect(bx + barW + 27, top + span * frac + 1, barW - 2,
                  span * (1 - frac) - 2);
      gx.fillStyle = C.muted; gx.font = f(11, 700); gx.textAlign = 'center';
      gx.fillText('gravitational', bx + barW / 2, hh - 16);
      gx.fillText('kinetic', bx + barW + 26 + barW / 2, hh - 16);
      gx.fillText('the two always add to the same total', w / 2, hh - 2);
    };
    return { destroy: stage.destroy };
  });
}(window));
