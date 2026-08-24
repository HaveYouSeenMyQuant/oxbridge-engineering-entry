/* Integration as the reverse of differentiation — for i1, which had none.
 *
 *   antiDeriv   two stacked panels showing the one relationship the lesson is
 *               about:
 *
 *                 TOP     y = f(x), the thing you are integrating
 *                 BOTTOM  y = F(x) + c, a curve whose SLOPE at every x is the
 *                         HEIGHT of the curve above it
 *
 *               Drag x and the two move together: the dot on top rises, the
 *               tangent below tilts to match. Integrating is the job of
 *               finding the lower curve when you have been handed the upper
 *               one, and that sentence means very little until you have
 *               watched the tangent track the height.
 *
 *               The c slider slides the whole lower curve up and down without
 *               changing any tangent anywhere. That is what the arbitrary
 *               constant IS: every one of those curves is an equally good
 *               answer, because differentiating any of them gives back the
 *               same top panel.
 *
 * WHAT IT NEVER SHOWS. No formula for the lower curve, and no y-value read off
 * it. i1's questions ask for coefficients of the antiderivative, so printing
 * either would be the answer. The top panel is labelled because the integrand
 * is what the question hands you; the bottom is a shape, and turning it into
 * an expression is the work.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, slider = K.slider;

  /* f is the integrand, F one of its antiderivatives. Checked before wiring:
   * d/dx(x^3)=3x^2, d/dx(5x)=5, d/dx(3x^2+4x)=6x+4, d/dx(-1/x)=1/x^2. */
  var PAIRS = {
    power:  { f: function (x) { return 3 * x * x; },
              F: function (x) { return x * x * x; },
              label: 'y = 3x²', lo: -1.6, hi: 1.6 },
    consty: { f: function () { return 5; },
              F: function (x) { return 5 * x; },
              label: 'y = 5', lo: -2, hi: 2 },
    sum:    { f: function (x) { return 6 * x + 4; },
              F: function (x) { return 3 * x * x + 4 * x; },
              label: 'y = 6x + 4', lo: -2.2, hi: 2.2 },
    invsq:  { f: function (x) { return 1 / (x * x); },
              F: function (x) { return -1 / x; },
              label: 'y = x⁻²', lo: 0.5, hi: 3.2 }
  };

  global.QQViz.register('antiDeriv', function (host, api) {
    var P = (api && api.params) || {};
    var Q = PAIRS[P.pair] || PAIRS.power;
    var lo = P.lo != null ? P.lo : Q.lo, hi = P.hi != null ? P.hi : Q.hi;
    var x0 = P.x0 != null ? P.x0 : (lo + hi) / 2;
    var cc = P.c != null ? P.c : 0;

    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 1.02);

    slider(row, { min: lo, max: hi, step: 0.1, value: x0, label: 'x' },
      function (v) { x0 = v; api.onInteract('slider'); say(); });
    slider(row, { min: -4, max: 4, step: 0.5, value: cc, label: 'c' },
      function (v) { cc = v; api.onInteract('slider'); say(); });

    function say() {
      var hgt = Q.f(x0);
      out.innerHTML = 'at x = <b>' + (+x0.toFixed(1)) + '</b>, the top curve ' +
        'is <b>' + (+hgt.toFixed(2)) + '</b> high' +
        '<br><span class="muted">so the bottom curve has slope ' +
        (+hgt.toFixed(2)) + ' there — and sliding c moves it up and down ' +
        'without changing that at all</span>';
    }
    say();

    stage.draw = function (g, w, h) {
      var pad = 30;
      var panelH = (h - 26) / 2;
      var s = (w - 2 * pad) / Math.max(1e-6, hi - lo);
      var X = function (x) { return pad + (x - lo) * s; };

      function panel(top, fn, drawTangent, colour) {
        /* each panel scales to its own curve; they share only the x axis */
        var mn = 0, mx = 0.001, i, y;
        for (i = 0; i <= 90; i++) {
          y = fn(lo + (hi - lo) * i / 90);
          if (isFinite(y)) { if (y > mx) mx = y; if (y < mn) mn = y; }
        }
        var pad2 = (mx - mn) * 0.12 + 0.001;
        mn -= pad2; mx += pad2;
        var ys = (panelH - 22) / (mx - mn);
        var Y = function (v) { return top + panelH - 14 - (v - mn) * ys; };

        g.strokeStyle = C.line; g.lineWidth = 1;
        g.beginPath(); g.moveTo(pad, Y(0)); g.lineTo(w - pad, Y(0)); g.stroke();

        g.strokeStyle = colour; g.lineWidth = 2.5; g.beginPath();
        var started = false;
        for (i = 0; i <= 160; i++) {
          var xx = lo + (hi - lo) * i / 160, yy = fn(xx);
          if (!isFinite(yy) || Math.abs(yy) > 1e4) { started = false; continue; }
          if (!started) { g.moveTo(X(xx), Y(yy)); started = true; }
          else g.lineTo(X(xx), Y(yy));
        }
        g.stroke();

        if (drawTangent) {
          /* slope here is the HEIGHT of the curve in the panel above -- that
           * is the whole relationship, so it is taken from Q.f directly and
           * never from a numerical difference of F */
          var m = Q.f(x0), yv = fn(x0);
          var dxv = (hi - lo) * 0.22;
          g.strokeStyle = C.gold; g.lineWidth = 2;
          g.beginPath();
          g.moveTo(X(x0 - dxv), Y(yv - m * dxv));
          g.lineTo(X(x0 + dxv), Y(yv + m * dxv));
          g.stroke();
          g.fillStyle = C.gold;
          g.beginPath(); g.arc(X(x0), Y(yv), 4.5, 0, 7); g.fill();
        } else {
          var hv = fn(x0);
          g.strokeStyle = C.gold; g.lineWidth = 1.5; g.setLineDash([4, 3]);
          g.beginPath(); g.moveTo(X(x0), Y(0)); g.lineTo(X(x0), Y(hv)); g.stroke();
          g.setLineDash([]);
          g.fillStyle = C.gold;
          g.beginPath(); g.arc(X(x0), Y(hv), 4.5, 0, 7); g.fill();
        }
        return Y;
      }

      panel(0, Q.f, false, C.accent);
      /* the family: faint copies at other c, so "+ c" is a picture and not a
       * footnote. They are drawn first so the live one sits on top. */
      [-3, -1.5, 1.5, 3].forEach(function (dc) {
        panel(panelH + 13, function (x) { return Q.F(x) + cc + dc; }, false,
              'rgba(139,148,158,0.28)');
      });
      panel(panelH + 13, function (x) { return Q.F(x) + cc; }, true, C.good);

      g.fillStyle = C.muted; g.font = f(11, 700); g.textAlign = 'left';
      g.textBaseline = 'top';
      g.fillText(Q.label + '   — what you are integrating', pad, 4);
      g.fillText('its integral: slope here = height above', pad, panelH + 17);
    };

    return { destroy: stage.destroy };
  });
}(window));
