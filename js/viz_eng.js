/* Visuals for the maths and physics topics.
 *
 * Same house rule as the matrices set: animate the thing, do not write the
 * formula. Every visual is draggable, tappable or re-runnable.
 *
 *   quadRoots      drag a, b, c and watch the roots and the discriminant
 *   tangentSlide   slide a point along a curve; the tangent follows
 *   areaUnder      rectangles under a curve, refine them toward the integral
 *   unitCircle     drag the angle; sin, cos and tan read off the circle
 *   vectorAdd      drag two vectors; see the resultant and the dot product
 *   projectile     fire at an angle and watch the parabola, with the range
 *   circuitLab     series or parallel, live current and total resistance
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, el = K.el, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, button = K.button, slider = K.slider;

  function axes(g, w, h, ox, oy, s, opts) {
    opts = opts || {};
    g.strokeStyle = C.line; g.lineWidth = 1;
    var n = Math.ceil(Math.max(w, h) / s) + 1;
    for (var i = -n; i <= n; i++) {
      g.beginPath(); g.moveTo(ox + i * s, 0); g.lineTo(ox + i * s, h); g.stroke();
      g.beginPath(); g.moveTo(0, oy + i * s); g.lineTo(w, oy + i * s); g.stroke();
    }
    g.strokeStyle = C.muted; g.lineWidth = 1.6;
    g.beginPath(); g.moveTo(0, oy); g.lineTo(w, oy); g.stroke();
    g.beginPath(); g.moveTo(ox, 0); g.lineTo(ox, h); g.stroke();
  }

  function plot(g, w, h, ox, oy, s, fn, col, lw) {
    g.strokeStyle = col; g.lineWidth = lw || 2.5;
    g.beginPath();
    var started = false;
    for (var px = 0; px <= w; px += 2) {
      var x = (px - ox) / s, y = fn(x), py = oy - y * s;
      if (!isFinite(py) || py < -2000 || py > 2000) { started = false; continue; }
      if (!started) { g.moveTo(px, py); started = true; } else g.lineTo(px, py);
    }
    g.stroke();
  }

  function dot(g, x, y, col, r) {
    g.fillStyle = col; g.beginPath(); g.arc(x, y, r || 5, 0, 7); g.fill();
  }

  /* ---------------------------------------------------------- quadRoots */
  global.QQViz.register('quadRoots', function (host, api) {
    /* Open on the question's own quadratic when it supplies one. */
    var P = (api && api.params) || {};
    var a = P.a != null ? P.a : 1,
        b = P.b != null ? P.b : -5,
        c = P.c != null ? P.c : 6;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.95);
    slider(row, { min: -3, max: 3, step: 1, value: a, label: 'a' },
      function (v) { a = v || 1; api.onInteract('slider'); say(); });
    slider(row, { min: -8, max: 8, step: 1, value: b, label: 'b' },
      function (v) { b = v; api.onInteract('slider'); say(); });
    slider(row, { min: -10, max: 10, step: 1, value: c, label: 'c' },
      function (v) { c = v; api.onInteract('slider'); say(); });

    /* WHETHER TO SPELL OUT WHAT THE DISCRIMINANT MEANS.
     *
     * Showing b² − 4ac is teaching; adding "one repeated root" after it is
     * answering. On a question that ASKS how many roots there are, the second
     * half turns the visual into a spoiler and the question into a reading
     * exercise. Questions that ask it pass verdict:false and get the number
     * only — they still have to know that zero means one root, which is the
     * thing being examined. */
    var verdict = P.verdict !== false;
    function disc() { return b * b - 4 * a * c; }
    function say() {
      var d = disc();
      var eq = 'y = ' + a + 'x² ' + (b < 0 ? '− ' + (-b) : '+ ' + b) + 'x ' +
        (c < 0 ? '− ' + (-c) : '+ ' + c);
      var msg = 'b² − 4ac = <b>' + d + '</b>';
      if (verdict) {
        msg += ' — ' + (d > 0 ? 'two real roots'
                              : (d === 0 ? 'one repeated root' : 'no real roots'));
      }
      out.innerHTML = eq + '<br>' + msg;
    }
    say();

    stage.draw = function (g, w, h) {
      var s = Math.min(w, h) / 12, ox = w / 2, oy = h / 2 + s * 2;
      axes(g, w, h, ox, oy, s);
      plot(g, w, h, ox, oy, s, function (x) { return a * x * x + b * x + c; }, C.accent);
      var d = disc();
      /* The green dots count the roots for you, so they come off too when the
       * question is asking for that count. The curve still crosses where it
       * crosses -- the student reads it, rather than being told. */
      if (d >= 0 && verdict) {
        var r1 = (-b - Math.sqrt(d)) / (2 * a), r2 = (-b + Math.sqrt(d)) / (2 * a);
        dot(g, ox + r1 * s, oy, C.good, 6);
        dot(g, ox + r2 * s, oy, C.good, 6);
      }
      var vx = -b / (2 * a);
      dot(g, ox + vx * s, oy - (a * vx * vx + b * vx + c) * s, C.gold, 4);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText(verdict ? 'green = roots      gold = vertex'
                   : 'gold = vertex', w / 2, h - 6);
    };
    return { destroy: stage.destroy };
  });

  /* -------------------------------------------------------- tangentSlide */
  global.QQViz.register('tangentSlide', function (host, api) {
    /* THE CURVE COMES FROM THE QUESTION, and the gradient can be withheld.
     *
     * This was hardcoded to y = x cubed minus 3x with a readout printing the
     * gradient at the slider, and eight questions mounted it bare. ca_two_stat
     * asks for the stationary points OF THAT EXACT CURVE, so sliding onto one
     * made the visual announce "stationary" -- the answer, handed over. Four
     * more questions name different curves (4x cubed, x cubed minus 5x plus 2,
     * x squared minus 6x plus 5, x cubed minus 2x) and were all shown the same
     * unrelated cubic.
     */
    var P = (api && api.params) || {};
    var reveal = P.reveal !== false;
    var CURVES = {
      cub3:  { f: function (x) { return x * x * x - 3 * x; },
               d: function (x) { return 3 * x * x - 3; },  label: 'y = x³ − 3x' },
      cub4:  { f: function (x) { return 4 * x * x * x; },
               d: function (x) { return 12 * x * x; },     label: 'y = 4x³' },
      cub2:  { f: function (x) { return x * x * x - 2 * x; },
               d: function (x) { return 3 * x * x - 2; },  label: 'y = x³ − 2x' },
      sum:   { f: function (x) { return x * x * x - 5 * x + 2; },
               d: function (x) { return 3 * x * x - 5; },  label: 'y = x³ − 5x + 2' },
      para:  { f: function (x) { return x * x - 6 * x + 5; },
               d: function (x) { return 2 * x - 6; },      label: 'y = x² − 6x + 5' }
    };
    var C0 = CURVES[P.curve] || CURVES.cub3;
    var fn = C0.f, df = C0.d;
    var x0 = P.x0 != null ? P.x0 : 1;
    var lo = P.lo != null ? P.lo : -2.5, hi = P.hi != null ? P.hi : 2.5;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.95);
    slider(row, { min: lo, max: hi, step: 0.1, value: x0, label: 'x' },
      function (v) { x0 = v; api.onInteract('slider'); say(); });
    function say() {
      out.innerHTML = C0.label + '  ·  at x = <b>' + (+x0.toFixed(1)) + '</b>' +
        (reveal
          ? ', gradient dy/dx = <b>' + (+df(x0).toFixed(2)) + '</b>' +
            (Math.abs(df(x0)) < 0.06 ? ' — stationary' : '')
          : ' — watch the tangent tilt, and find where it goes flat');
    }
    say();
    stage.draw = function (g, w, h) {
      /* fit the curve that was asked for, rather than assuming it fits a box
       * sized for one particular cubic */
      var top = 0.001, bot = 0, i;
      for (i = 0; i <= 80; i++) {
        var yv = fn(lo + (hi - lo) * i / 80);
        if (!isFinite(yv)) continue;
        if (yv > top) top = yv;
        if (yv < bot) bot = yv;
      }
      var span = Math.max(Math.abs(top), Math.abs(bot), 1) * 1.25;
      var s = Math.min((w * 0.86) / Math.max(1e-6, (hi - lo)), (h - 40) / (2 * span));
      var ox = w / 2 - ((lo + hi) / 2) * s, oy = h / 2;
      axes(g, w, h, ox, oy, s);
      g.strokeStyle = C.accent; g.lineWidth = 2.5; g.beginPath();
      for (i = 0; i <= 160; i++) {
        var x = lo + (hi - lo) * i / 160, y = fn(x);
        var px = ox + x * s, py = oy - y * s;
        if (i === 0) g.moveTo(px, py); else g.lineTo(px, py);
      }
      g.stroke();
      var y0 = fn(x0), m = df(x0);
      g.strokeStyle = C.gold; g.lineWidth = 2;
      g.beginPath();
      g.moveTo(ox + (x0 - 3) * s, oy - (y0 + m * -3) * s);
      g.lineTo(ox + (x0 + 3) * s, oy - (y0 + m * 3) * s);
      g.stroke();
      dot(g, ox + x0 * s, oy - y0 * s, C.gold, 6);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('the gold line is the tangent — its slope IS the derivative', w / 2, h - 6);
    };
    return { destroy: stage.destroy };
  });

  /* ----------------------------------------------------------- areaUnder */
  global.QQViz.register('areaUnder', function (host, api) {
    /* THE CURVE AND THE LIMITS COME FROM THE QUESTION.
     *
     * This used to be hardcoded to y = x squared from 0 to 3, with a readout
     * that ended "the exact integral is 9". Five questions mounted it. One of
     * them asks for exactly that integral, so the picture printed its own
     * answer; two others are about y = 2x and y = x(4 - x) and were shown a
     * parabola that has nothing to do with them; and the true/false about a
     * NEGATIVE integral was illustrated with an area entirely above the axis.
     *
     * Now the curve, the limits and whether the exact value is revealed all
     * come from vizParams, and the Riemann sum is what the rectangles actually
     * compute rather than a number typed into a string.
     */
    var P = (api && api.params) || {};
    var A = P.a != null ? P.a : 0, B = P.b != null ? P.b : 3;
    var reveal = P.reveal !== false;
    var CURVES = {
      sq:     { f: function (x) { return x * x; },            label: 'y = x²' },
      lin:    { f: function (x) { return 2 * x; },            label: 'y = 2x' },
      inv2:   { f: function (x) { return 1 / (x * x); },      label: 'y = x⁻²' },
      sine:   { f: function (x) { return Math.sin(x); },      label: 'y = sin x' },
      hump:   { f: function (x) { return x * (4 - x); },      label: 'y = x(4 − x)' },
      dome:   { f: function (x) { return 4 - x * x; },        label: 'y = 4 − x²' },
      cubic:  { f: function (x) { return x * x * x; },        label: 'y = x³' },
      polysum:{ f: function (x) { return 3 * x * x + 2 * x; }, label: 'y = 3x² + 2x' },
      root:   { f: function (x) { return Math.sqrt(Math.max(0, x)); }, label: 'y = √x' }
    };
    var C0 = CURVES[P.curve] || CURVES.sq;
    var fn = C0.f;
    var n = 4;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.9);
    slider(row, { min: 1, max: 60, step: 1, value: n, label: 'rectangles' },
      function (v) { n = v; api.onInteract('slider'); say(); });
    function riemann() {
      var s = 0, dx = (B - A) / n;
      for (var i = 0; i < n; i++) s += fn(A + (i + 0.5) * dx) * dx;
      return s;
    }
    function say() {
      var r = riemann();
      out.innerHTML = n + ' rectangle' + (n === 1 ? '' : 's') + ' give <b>' +
        r.toFixed(3) + '</b>' + (reveal
          ? '; the exact integral is <b>' + (P.exact != null ? P.exact : '?') + '</b>'
          : ' — slide it up and see what it settles on');
    }
    say();
    stage.draw = function (g, w, h) {
      /* the scale has to fit whatever curve was asked for, including one that
       * dips below the axis -- the hardcoded version could only ever draw a
       * shape that fitted y = x squared on 0..3 */
      var lo = 0, hi = 0.001, i, dxs = (B - A) / 80;
      for (i = 0; i <= 80; i++) {
        var yv = fn(A + i * dxs);
        if (isFinite(yv)) { if (yv > hi) hi = yv; if (yv < lo) lo = yv; }
      }
      var span = Math.max(Math.abs(hi), Math.abs(lo)) * 1.15;
      var s = Math.min((w * 0.72) / Math.max(1e-6, (B - A)), (h - 46) / (2 * span));
      var ox = w * 0.16, oy = h - 30 - (lo < 0 ? (h - 46) / 2 : 0);
      axes(g, w, h, ox, oy, s);
      var dx = (B - A) / n;
      for (i = 0; i < n; i++) {
        var xl = A + i * dx, yy = fn(xl + dx / 2);
        if (!isFinite(yy)) continue;
        g.fillStyle = yy >= 0 ? 'rgba(88,166,255,0.28)' : 'rgba(248,81,73,0.28)';
        g.fillRect(ox + (xl - A) * s, oy - Math.max(yy, 0) * s,
                   dx * s, Math.abs(yy) * s);
        g.strokeStyle = yy >= 0 ? 'rgba(88,166,255,0.55)' : 'rgba(248,81,73,0.55)';
        g.lineWidth = 1;
        g.strokeRect(ox + (xl - A) * s, oy - Math.max(yy, 0) * s,
                     dx * s, Math.abs(yy) * s);
      }
      /* the curve itself, drawn over the range the question names */
      g.strokeStyle = C.gold; g.lineWidth = 2.5; g.beginPath();
      for (i = 0; i <= 120; i++) {
        var x = A + (B - A) * i / 120, y = fn(x);
        if (!isFinite(y)) continue;
        var px = ox + (x - A) * s, py = oy - y * s;
        if (i === 0) g.moveTo(px, py); else g.lineTo(px, py);
      }
      g.stroke();
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText(C0.label + ' from ' + A + ' to ' + B, w / 2, h - 6);
    };
    return { destroy: stage.destroy };
  });

  /* ---------------------------------------------------------- unitCircle */
  global.QQViz.register('unitCircle', function (host, api) {
    var P = (api && api.params) || {};
    var deg = P.deg != null ? P.deg : 30;
    /* sin and cos are printed to three decimals, which on several questions is
     * the answer or one step from it. reveal:false keeps the drawing -- the
     * green height and the blue width are still there to read off the grid --
     * and drops the numbers. */
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 1.0);
    slider(row, { min: 0, max: 360, step: 5, value: deg, label: 'angle' },
      function (v) { deg = v; api.onInteract('slider'); say(); });
    function say() {
      var r = deg * Math.PI / 180;
      out.innerHTML = deg + '°' + (reveal
        ? '  ·  sin = <b>' + Math.sin(r).toFixed(3) +
          '</b>  cos = <b>' + Math.cos(r).toFixed(3) + '</b>'
        : '  ·  green is the height, blue is the width — read them off the grid');
    }
    say();
    stage.draw = function (g, w, h) {
      var s = Math.min(w, h) / 2.8, ox = w / 2, oy = h / 2;
      axes(g, w, h, ox, oy, s / 2);
      g.strokeStyle = C.line; g.lineWidth = 2;
      g.beginPath(); g.arc(ox, oy, s, 0, 7); g.stroke();
      var r = deg * Math.PI / 180;
      var px = ox + Math.cos(r) * s, py = oy - Math.sin(r) * s;
      g.strokeStyle = C.gold; g.lineWidth = 2.5;
      g.beginPath(); g.moveTo(ox, oy); g.lineTo(px, py); g.stroke();
      g.strokeStyle = C.good; g.lineWidth = 3;
      g.beginPath(); g.moveTo(px, oy); g.lineTo(px, py); g.stroke();   // sin
      g.strokeStyle = C.accent;
      g.beginPath(); g.moveTo(ox, oy); g.lineTo(px, oy); g.stroke();   // cos
      dot(g, px, py, C.gold, 5);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('green = sin (height)      blue = cos (across)', w / 2, h - 6);
    };
    return { destroy: stage.destroy };
  });

  /* ----------------------------------------------------------- vectorAdd */
  global.QQViz.register('vectorAdd', function (host, api) {
    /* THE VECTORS COME FROM THE QUESTION, AND THE NUMBERS CAN BE WITHHELD.
     *
     * This was hardcoded to a = (3,4), b = (1,2), with a readout printing the
     * magnitudes, the dot product and the angle. Seven questions mounted it
     * bare, and three of them had their exact answer displayed underneath:
     * ve_mag asks for the magnitude of (3,4) and the readout said |a| = 5.00;
     * ve_dot asks for the dot product of (3,4) and (1,2) and it said 11.0;
     * ve_resultant asks for the resultant of 3 N east and 4 N north, which is
     * the same 5.00. Others -- ve_add, ve_find_k, ve_angle -- name different
     * vectors and were shown these two regardless.
     *
     * With reveal:false the arrows and the grid stay, so the geometry is still
     * there to reason about, and only the computed numbers go.
     */
    var P = (api && api.params) || {};
    var reveal = P.reveal !== false;
    var a = { x: P.ax != null ? P.ax : 3, y: P.ay != null ? P.ay : 4 };
    var b = { x: P.bx != null ? P.bx : 1, y: P.by != null ? P.by : 2 };
    var showSum = P.sum !== false;
    var drag = 0;
    var out = readout(host, 'Drag either arrow.');
    var stage = Stage(host, 0.95);
    function say() {
      var dp = a.x * b.x + a.y * b.y;
      var ma = Math.hypot(a.x, a.y), mb = Math.hypot(b.x, b.y);
      var ang = (ma && mb) ? Math.acos(Math.max(-1, Math.min(1, dp / (ma * mb)))) * 180 / Math.PI : 0;
      var comps = 'a = (' + a.x + ', ' + a.y + ')   b = (' + b.x + ', ' + b.y + ')';
      out.innerHTML = reveal
        ? comps + '<br>|a| = <b>' + ma.toFixed(2) + '</b>  |b| = <b>' + mb.toFixed(2) +
          '</b>  a·b = <b>' + dp.toFixed(1) + '</b>  angle = <b>' + ang.toFixed(0) + '°</b>' +
          (Math.abs(dp) < 0.05 ? ' — perpendicular' : '')
        : comps + ' — drag them and work it out from the grid';
    }
    say();
    function arrow(g, ox, oy, s, v, col) {
      var x1 = ox + v.x * s, y1 = oy - v.y * s;
      g.strokeStyle = col; g.fillStyle = col; g.lineWidth = 3;
      g.beginPath(); g.moveTo(ox, oy); g.lineTo(x1, y1); g.stroke();
      var an = Math.atan2(y1 - oy, x1 - ox);
      g.beginPath();
      g.moveTo(x1, y1);
      g.lineTo(x1 - 10 * Math.cos(an - 0.4), y1 - 10 * Math.sin(an - 0.4));
      g.lineTo(x1 - 10 * Math.cos(an + 0.4), y1 - 10 * Math.sin(an + 0.4));
      g.closePath(); g.fill();
    }
    stage.draw = function (g, w, h) {
      var s = Math.min(w, h) / 11, ox = w / 2, oy = h / 2 + s;
      axes(g, w, h, ox, oy, s);
      // resultant, drawn first so the components sit on top. Suppressed where
      // the question asks FOR the resultant -- drawing it is the answer.
      if (showSum) {
        g.setLineDash([5, 4]);
        arrow(g, ox, oy, s, { x: a.x + b.x, y: a.y + b.y }, '#a371f7');
        g.setLineDash([]);
      }
      arrow(g, ox, oy, s, a, C.accent);
      arrow(g, ox, oy, s, b, C.gold);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText(showSum ? 'dashed purple = a + b' : 'drag either arrow',
                 w / 2, h - 6);
    };
    function move(ev) {
      if (!drag) return;
      ev.preventDefault();
      var p = stage.pointer(ev), w = stage.w, h = stage.h - 6;
      var s = Math.min(w, h) / 11, ox = w / 2, oy = h / 2 + s;
      var v = { x: Math.round((p.x - ox) / s), y: Math.round((oy - p.y) / s) };
      v.x = K.clamp(v.x, -5, 5); v.y = K.clamp(v.y, -3, 5);
      if (drag === 1) a = v; else b = v;
      say();
    }
    stage.canvas.addEventListener('pointerdown', function (ev) {
      var p = stage.pointer(ev), w = stage.w, h = stage.h - 6;
      var s = Math.min(w, h) / 11, ox = w / 2, oy = h / 2 + s;
      var da = Math.hypot(p.x - (ox + a.x * s), p.y - (oy - a.y * s));
      var db = Math.hypot(p.x - (ox + b.x * s), p.y - (oy - b.y * s));
      drag = (da < db ? (da < 42 ? 1 : 0) : (db < 42 ? 2 : 0));
      if (drag) { api.onInteract('drag'); move(ev); }
    });
    global.addEventListener('pointermove', move);
    global.addEventListener('pointerup', function () { drag = 0; });
    return { destroy: stage.destroy };
  });

  /* ---------------------------------------------------------- projectile */
  global.QQViz.register('projectile', function (host, api) {
    var P = (api && api.params) || {};
    var ang = P.ang != null ? P.ang : 30,
        u = P.u != null ? P.u : 20, G = 10, t = 0, running = false;
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.72);
    slider(row, { min: 10, max: 80, step: 5, value: ang, label: 'angle' },
      function (v) { ang = v; t = 0; api.onInteract('slider'); say(); });
    button(row, 'fire', function () { t = 0; running = true; api.onInteract('fire'); });
    function flight() { return 2 * u * Math.sin(ang * Math.PI / 180) / G; }
    function range() { return u * u * Math.sin(2 * ang * Math.PI / 180) / G; }
    function apex() { return Math.pow(u * Math.sin(ang * Math.PI / 180), 2) / (2 * G); }
    function say() {
      /* range, height and time are exactly what me_proj_time and
       * me_proj_height ask for. With reveal:false the flight is still there to
       * watch and to time by eye; the numbers are not handed over. */
      out.innerHTML = reveal
        ? ang + '°  ·  range <b>' + range().toFixed(1) +
          ' m</b>  ·  height <b>' + apex().toFixed(1) +
          ' m</b>  ·  time <b>' + flight().toFixed(2) + ' s</b>'
        : ang + '° at ' + u + ' m/s  ·  press fire and watch the arc';
    }
    say();
    stage.draw = function (g, w, h) {
      var maxR = u * u / G;
      var s = (w - 40) / (maxR * 1.05), oy = h - 24, ox = 22;
      g.strokeStyle = C.muted; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(0, oy); g.lineTo(w, oy); g.stroke();
      var rad = ang * Math.PI / 180, T = flight();
      g.strokeStyle = 'rgba(88,166,255,0.55)'; g.lineWidth = 2;
      g.beginPath();
      for (var i = 0; i <= 60; i++) {
        var tt = T * i / 60;
        var X = ox + u * Math.cos(rad) * tt * s;
        var Y = oy - (u * Math.sin(rad) * tt - 0.5 * G * tt * tt) * s;
        if (i === 0) g.moveTo(X, Y); else g.lineTo(X, Y);
      }
      g.stroke();
      if (running) {
        t += 1 / 60;
        if (t > T) { t = T; running = false; }
      }
      var bx = ox + u * Math.cos(rad) * t * s;
      var by = oy - (u * Math.sin(rad) * t - 0.5 * G * t * t) * s;
      dot(g, bx, by, C.gold, 7);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('45° gives the greatest range — try it', w / 2, h - 4);
    };
    return { destroy: stage.destroy };
  });

  /* ---------------------------------------------------------- circuitLab */
  global.QQViz.register('circuitLab', function (host, api) {
    var P = (api && api.params) || {};
    var r1 = P.r1 != null ? P.r1 : 3,
        r2 = P.r2 != null ? P.r2 : 6,
        series = P.series != null ? P.series : true,
        V = P.V != null ? P.V : 12;
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.6);
    slider(row, { min: 1, max: 12, step: 1, value: r1, label: 'R1' },
      function (v) { r1 = v; api.onInteract('slider'); say(); });
    slider(row, { min: 1, max: 12, step: 1, value: r2, label: 'R2' },
      function (v) { r2 = v; api.onInteract('slider'); say(); });
    button(row, 'series / parallel', function () {
      series = !series; api.onInteract('toggle'); say();
    });
    function total() { return series ? r1 + r2 : 1 / (1 / r1 + 1 / r2); }
    function say() {
      var R = total();
      /* R and I are precisely what el_series, el_parallel and
       * el_parallel_unequal ask for, and this printed both. reveal:false keeps
       * the circuit and the two resistor values -- which the question states
       * anyway -- and drops the totals. */
      out.innerHTML = reveal
        ? (series ? 'Series' : 'Parallel') + ': R = <b>' +
          R.toFixed(2) + ' Ω</b>, I = V/R = <b>' + (V / R).toFixed(2) + ' A</b>'
        : (series ? 'Series' : 'Parallel') + ': ' + r1 + ' Ω and ' + r2 +
          ' Ω, supply ' + V + ' V — work the total out';
    }
    say();
    stage.draw = function (g, w, h) {
      var y = h / 2, x0 = 30, x1 = w - 30;
      g.strokeStyle = C.muted; g.lineWidth = 2;
      function box(x, yy, label) {
        g.fillStyle = C.panel; g.strokeStyle = C.accent; g.lineWidth = 2;
        K.roundRect(g, x - 22, yy - 12, 44, 24, 5); g.fill(); g.stroke();
        g.fillStyle = C.fg; g.font = f(12, 700);
        g.textAlign = 'center'; g.textBaseline = 'middle';
        g.fillText(label + 'Ω', x, yy);
      }
      g.strokeStyle = C.muted; g.lineWidth = 2;
      if (series) {
        g.beginPath(); g.moveTo(x0, y); g.lineTo(x1, y); g.stroke();
        box(w * 0.38, y, r1); box(w * 0.62, y, r2);
      } else {
        var yA = y - 30, yB = y + 30;
        g.beginPath();
        g.moveTo(x0, y); g.lineTo(w * 0.32, y);
        g.moveTo(w * 0.32, yA); g.lineTo(w * 0.32, yB);
        g.moveTo(w * 0.32, yA); g.lineTo(w * 0.68, yA);
        g.moveTo(w * 0.32, yB); g.lineTo(w * 0.68, yB);
        g.moveTo(w * 0.68, yA); g.lineTo(w * 0.68, yB);
        g.moveTo(w * 0.68, y); g.lineTo(x1, y);
        g.stroke();
        box(w * 0.5, yA, r1); box(w * 0.5, yB, r2);
      }
      g.fillStyle = C.gold; g.font = f(12, 700); g.textAlign = 'left';
      g.fillText(V + ' V', 6, y - 16);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('parallel always totals less than either branch', w / 2, h - 4);
    };
    return { destroy: stage.destroy };
  });

})(window);
