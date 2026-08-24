/* Visuals for capacitors — the lesson e5, which had none.
 *
 *   capLab   one capacitor, three modes:
 *
 *     'store'      the Q-V line, with the energy drawn as the AREA under it.
 *                  Every capacitor energy question on the site is the same
 *                  triangle. Pass compare:true and a ghost triangle at double
 *                  the voltage is drawn behind it, so "what happens to the
 *                  energy when you double V" stops being a rule and becomes a
 *                  picture of how many small triangles fit in the big one.
 *     'combine'    two capacitors in series or in parallel, with the thing
 *                  that actually explains the answer made visible: in series
 *                  the SAME charge sits on both, and the voltages add. That is
 *                  why series capacitors combine the opposite way to resistors
 *                  — a fact everyone memorises backwards.
 *     'discharge'  V falling through a resistor, with the time constant marked
 *                  where the curve passes 37% of where it started.
 *
 * reveal:false withholds the quantity its question asks for and nothing else.
 * The player still gets the structure — the axes, the shape, the shaded area.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage, clamp = K.clamp;
  var controls = K.controls, readout = K.readout, slider = K.slider, button = K.button;

  global.QQViz.register('capLab', function (host, api) {
    var P = (api && api.params) || {};
    var mode = P.mode || 'store';
    var cap = P.C != null ? P.C : 100;        // microfarads
    var volts = P.V != null ? P.V : 12;       // volts
    var res = P.R != null ? P.R : 10;         // kilohms
    var arrangement = P.arrangement || 'series';
    var compare = !!P.compare;
    var reveal = P.reveal !== false;

    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.80);
    var t0 = performance.now();

    slider(row, { min: 10, max: 400, step: 10, value: cap, label: 'capacitance µF' },
      function (v) { cap = v; api.onInteract('slider'); say(); });
    if (mode !== 'discharge') {
      slider(row, { min: 1, max: 24, step: 1, value: volts, label: 'voltage' },
        function (v) { volts = v; api.onInteract('slider'); say(); });
    } else {
      slider(row, { min: 1, max: 40, step: 1, value: res, label: 'resistance kΩ' },
        function (v) { res = v; api.onInteract('slider'); say(); });
      button(row, 'Recharge and release', function () {
        t0 = performance.now(); api.onInteract('run');
      });
    }
    if (mode === 'combine') {
      button(row, 'Series / parallel', function () {
        arrangement = arrangement === 'series' ? 'parallel' : 'series';
        api.onInteract('toggle'); say();
      });
    }

    /* One source of truth. C in farads, everything SI, and the display
     * converts — mixing µF into the arithmetic is how these go wrong. */
    function model() {
      var Cf = cap * 1e-6;
      return {
        Cf: Cf,
        q: Cf * volts,                       // coulombs
        e: 0.5 * Cf * volts * volts,         // joules
        tau: Cf * res * 1e3,                 // seconds
        series: cap / 2,                     // two equal ones
        parallel: cap * 2
      };
    }

    function say() {
      var m = model(), s;
      if (mode === 'combine') {
        s = 'two ' + cap.toFixed(0) + ' µF capacitors, ' + arrangement +
            '<br><span class="muted">' +
            (arrangement === 'series'
              ? 'the same charge sits on both, and their voltages add up'
              : 'both see the whole voltage, and their charges add up') +
            '</span>';
        if (reveal) {
          s += '<br>total = <b>' +
               (arrangement === 'series' ? m.series : m.parallel).toFixed(0) +
               ' µF</b>';
        }
      } else if (mode === 'discharge') {
        s = 'C = <b>' + cap.toFixed(0) + ' µF</b> &nbsp;·&nbsp; R = <b>' +
            res.toFixed(0) + ' kΩ</b>';
        s += reveal
          ? '<br>time constant = <b>' + m.tau.toFixed(2) + ' s</b>'
          : '<br><span class="muted">the dashed line is 37% of the start — ' +
            'how long does it take to get there?</span>';
      } else {
        s = 'C = <b>' + cap.toFixed(0) + ' µF</b> &nbsp;·&nbsp; V = <b>' +
            volts.toFixed(0) + ' V</b>';
        if (reveal) {
          s += '<br>charge = <b>' + (m.q * 1e3).toFixed(2) + ' mC</b>' +
               ' &nbsp;·&nbsp; energy = <b>' + (m.e * 1e3).toFixed(2) + ' mJ</b>';
        } else {
          s += '<br><span class="muted">the shaded area is the energy — ' +
               'it is a triangle</span>';
        }
      }
      out.innerHTML = s;
    }
    say();

    stage.draw = function (g, w, h, t) {
      var m = model();
      var pad = 44;
      if (mode === 'combine') { drawCombine(g, w, h, m); return; }
      if (mode === 'discharge') { drawDischarge(g, w, h, m, t); return; }

      /* ---- the Q-V line, with the energy as the area under it ---------- */
      var Vmax = compare ? 48 : 24;
      var Qmax = cap * 1e-6 * Vmax;
      var X = function (v) { return pad + (v / Vmax) * (w - pad - 20); },
          Y = function (q) { return (h - pad) - (q / Qmax) * (h - pad - 22); };

      g.strokeStyle = C.line; g.lineWidth = 1;
      g.beginPath(); g.moveTo(X(0), Y(0)); g.lineTo(X(Vmax), Y(0)); g.stroke();
      g.beginPath(); g.moveTo(X(0), Y(0)); g.lineTo(X(0), Y(Qmax)); g.stroke();

      /* the ghost at double the voltage, drawn FIRST so it sits behind */
      if (compare) {
        var v2 = Math.min(volts * 2, Vmax);
        g.fillStyle = 'rgba(210,153,34,0.16)';
        g.beginPath();
        g.moveTo(X(0), Y(0)); g.lineTo(X(v2), Y(0));
        g.lineTo(X(v2), Y(cap * 1e-6 * v2)); g.closePath(); g.fill();
        g.strokeStyle = 'rgba(210,153,34,0.55)'; g.lineWidth = 1.5;
        g.setLineDash([4, 4]); g.stroke(); g.setLineDash([]);
      }

      g.fillStyle = 'rgba(88,166,255,0.26)';
      g.beginPath();
      g.moveTo(X(0), Y(0)); g.lineTo(X(volts), Y(0));
      g.lineTo(X(volts), Y(m.q)); g.closePath(); g.fill();

      g.strokeStyle = C.accent; g.lineWidth = 3;
      g.beginPath(); g.moveTo(X(0), Y(0)); g.lineTo(X(Vmax), Y(Qmax)); g.stroke();

      g.fillStyle = C.muted; g.font = f(12, 600);
      g.textAlign = 'center'; g.textBaseline = 'top';
      g.fillText('voltage', (X(0) + X(Vmax)) / 2, h - pad + 8);
      g.save();
      g.translate(14, (Y(0) + Y(Qmax)) / 2); g.rotate(-Math.PI / 2);
      g.textBaseline = 'middle'; g.fillText('charge', 0, 0);
      g.restore();

      g.strokeStyle = C.gold; g.setLineDash([3, 3]); g.lineWidth = 1.4;
      g.beginPath(); g.moveTo(X(volts), Y(0)); g.lineTo(X(volts), Y(m.q));
      g.stroke(); g.setLineDash([]);

      g.fillStyle = C.fg; g.font = f(12, 700);
      g.textAlign = 'center'; g.textBaseline = 'bottom';
      g.fillText(volts.toFixed(0) + ' V', X(volts), h - pad - 4);

      g.fillStyle = C.muted; g.font = f(12, 500);
      g.textBaseline = 'alphabetic';
      g.fillText(compare
        ? 'how many of the blue triangle fit inside the gold one?'
        : 'the shaded area under the line is the stored energy',
        w / 2, h - 3);
    };

    function plate(g, x, y, hh, col) {
      g.strokeStyle = col; g.lineWidth = 4;
      g.beginPath(); g.moveTo(x, y - hh); g.lineTo(x, y + hh); g.stroke();
    }

    function drawCombine(g, w, h, m) {
      var mid = h / 2 - 6;
      var ser = arrangement === 'series';
      g.font = f(12, 700); g.textAlign = 'center';
      if (ser) {
        /* one loop: the same charge has to pass through both */
        var xs = [w * 0.28, w * 0.62];
        g.strokeStyle = C.line; g.lineWidth = 2;
        g.beginPath(); g.moveTo(w * 0.10, mid); g.lineTo(w * 0.90, mid); g.stroke();
        xs.forEach(function (x, i) {
          g.fillStyle = C.bg;
          g.fillRect(x - 13, mid - 26, 26, 52);
          plate(g, x - 5, mid, 18, C.accent);
          plate(g, x + 5, mid, 18, C.accent);
          g.fillStyle = C.muted; g.textBaseline = 'top';
          g.fillText(cap.toFixed(0) + ' µF', x, mid + 24);
          g.fillStyle = C.gold; g.textBaseline = 'bottom';
          g.fillText('+q  −q', x, mid - 24);
        });
        g.fillStyle = C.muted; g.font = f(12, 500);
        g.textBaseline = 'alphabetic';
        g.fillText('the same q on both — so each takes its own share of the voltage',
                   w / 2, h - 3);
      } else {
        /* two branches: both across the whole supply */
        var ys = [mid - 34, mid + 34];
        g.strokeStyle = C.line; g.lineWidth = 2;
        ys.forEach(function (y) {
          g.beginPath(); g.moveTo(w * 0.22, y); g.lineTo(w * 0.78, y); g.stroke();
          plate(g, w * 0.48, y, 15, C.accent);
          plate(g, w * 0.52, y, 15, C.accent);
          g.fillStyle = C.muted; g.font = f(12, 700);
          g.textBaseline = 'middle';
          g.fillText(cap.toFixed(0) + ' µF', w * 0.68, y - 22);
        });
        g.strokeStyle = C.line;
        g.beginPath(); g.moveTo(w * 0.22, ys[0]); g.lineTo(w * 0.22, ys[1]); g.stroke();
        g.beginPath(); g.moveTo(w * 0.78, ys[0]); g.lineTo(w * 0.78, ys[1]); g.stroke();
        g.fillStyle = C.muted; g.font = f(12, 500);
        g.textBaseline = 'alphabetic';
        g.fillText('both across the whole voltage — their charges add', w / 2, h - 3);
      }
    }

    function drawDischarge(g, w, h, m, t) {
      var pad = 44;
      var span = Math.max(1e-3, m.tau * 5);
      var X = function (s) { return pad + (s / span) * (w - pad - 16); },
          Y = function (v) { return (h - pad) - (v / 1.05) * (h - pad - 22); };
      g.strokeStyle = C.line; g.lineWidth = 1;
      g.beginPath(); g.moveTo(X(0), Y(0)); g.lineTo(X(span), Y(0)); g.stroke();
      g.beginPath(); g.moveTo(X(0), Y(0)); g.lineTo(X(0), Y(1.05)); g.stroke();

      /* 37% of the start: the definition of the time constant, drawn as a
       * level rather than stated as a fact */
      var frac = 1 / Math.E;
      g.strokeStyle = C.gold; g.setLineDash([5, 4]); g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(X(0), Y(frac)); g.lineTo(X(span), Y(frac)); g.stroke();
      g.setLineDash([]);
      g.fillStyle = C.gold; g.font = f(12, 700);
      g.textAlign = 'left'; g.textBaseline = 'bottom';
      g.fillText('37% of the start', X(0) + 6, Y(frac) - 4);

      g.strokeStyle = C.accent; g.lineWidth = 3;
      g.beginPath();
      for (var i = 0; i <= 160; i++) {
        var s = (i / 160) * span, v = Math.exp(-s / m.tau);
        if (i) g.lineTo(X(s), Y(v)); else g.moveTo(X(s), Y(v));
      }
      g.stroke();

      /* a dot actually running down the curve, restarted by the button */
      var el = ((performance.now() - t0) / 1000) % (span * 1.25);
      if (el <= span) {
        var vv = Math.exp(-el / m.tau);
        g.fillStyle = C.fg;
        g.beginPath(); g.arc(X(el), Y(vv), 5, 0, 7); g.fill();
      }

      g.fillStyle = C.muted; g.font = f(12, 500);
      g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      g.fillText('the dot is the voltage, falling', w / 2, h - 3);
    }

    return { destroy: stage.destroy };
  });
}(window));
