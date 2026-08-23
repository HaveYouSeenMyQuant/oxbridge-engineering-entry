/* Visuals for the three topics that had none: logs, waves, estimation.
 *
 *   powerLadder   drag the exponent; the value and the log read off together
 *   waveLab       change frequency or wavelength and watch v = f x lambda hold
 *   refractBend   drag the incoming ray; watch it bend, and find where it stops
 *                 getting out altogether
 *   magnitudeLine a logarithmic number line for order-of-magnitude estimates
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, button = K.button, slider = K.slider;

  /* --------------------------------------------------------- powerLadder --
   * A logarithm answers "what power?", so the visual shows the power and the
   * value as two ends of one object rather than two separate facts. */
  global.QQViz.register('powerLadder', function (host, api) {
    var P = (api && api.params) || {};
    var base = P.base || 2;
    var reveal = P.reveal !== false;
    var x = P.x != null ? P.x : 5;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.8);
    slider(row, { min: 0, max: 10, step: 1, value: x, label: 'power' },
      function (v) { x = v; api.onInteract('slider'); say(); });
    function val() { return Math.pow(base, x); }
    function say() {
      out.innerHTML = base + '<sup>' + x + '</sup> = <b>' + val().toLocaleString() +
        '</b>' + (reveal ? '   ·   so log<sub>' + base + '</sub>(' +
        val().toLocaleString() + ') = <b>' + x + '</b>' : '');
    }
    say();
    stage.draw = function (g, w, h) {
      var n = 11, pad = 22;
      var bw = (w - 2 * pad) / n;
      var maxv = Math.pow(base, 10);
      for (var i = 0; i < n; i++) {
        var v = Math.pow(base, i);
        /* heights on a LOG scale, because on a linear one the first eight bars
         * are invisible next to the last -- which is itself the lesson */
        var frac = Math.log(v) / Math.log(maxv);
        var bh = 8 + frac * (h - 58);
        g.fillStyle = i === x ? C.gold : C.line;
        K.roundRect(g, pad + i * bw + 2, h - 26 - bh, bw - 4, bh, 3); g.fill();
        g.fillStyle = i === x ? C.fg : C.muted;
        g.font = f(i === x ? 12 : 10, 700); g.textAlign = 'center';
        g.fillText(String(i), pad + i * bw + bw / 2, h - 12);
      }
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('the power is the position — that is all a logarithm reads off',
                 w / 2, h - 1);
    };
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------------- waveLab --
   * v = f x lambda, shown as a constraint you cannot escape rather than a
   * formula to memorise: change one and something else must give. */
  global.QQViz.register('waveLab', function (host, api) {
    var P = (api && api.params) || {};
    var freq = P.f != null ? P.f : 2;      // arbitrary units for the picture
    var lam = P.lam != null ? P.lam : 3;
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.62);
    slider(row, { min: 1, max: 6, step: 1, value: freq, label: 'frequency' },
      function (v) { freq = v; api.onInteract('slider'); say(); });
    slider(row, { min: 1, max: 6, step: 1, value: lam, label: 'wavelength' },
      function (v) { lam = v; api.onInteract('slider'); say(); });
    function say() {
      out.innerHTML = 'f = <b>' + freq + '</b>, &lambda; = <b>' + lam + '</b>' +
        (reveal ? '   ·   v = f&lambda; = <b>' + (freq * lam) + '</b>' : '');
    }
    say();
    var t0 = performance.now();
    stage.draw = function (g, w, h) {
      var t = (performance.now() - t0) / 1000;
      var mid = h / 2 - 6, amp = Math.min(30, h / 5);
      var pxPerLam = (w - 30) / (7 - lam + 1);
      g.strokeStyle = C.accent; g.lineWidth = 2.5;
      g.beginPath();
      for (var px = 15; px <= w - 15; px += 2) {
        var phase = (px - 15) / pxPerLam - freq * t * 0.6;
        var y = mid - amp * Math.sin(2 * Math.PI * phase);
        if (px === 15) g.moveTo(px, y); else g.lineTo(px, y);
      }
      g.stroke();
      /* one marked crest, so the SPEED is visible and not just asserted */
      var crestPhase = Math.ceil(freq * t * 0.6);
      var cx = 15 + (crestPhase + 0.25 + freq * t * 0.6 - crestPhase) * pxPerLam;
      cx = 15 + ((0.25 + freq * t * 0.6) % (7 - lam + 1)) * pxPerLam;
      if (cx < w - 15) {
        g.fillStyle = C.gold;
        g.beginPath(); g.arc(cx, mid - amp, 5, 0, 7); g.fill();
      }
      /* the wavelength, drawn as a measured span */
      g.strokeStyle = C.good; g.lineWidth = 2;
      g.beginPath();
      g.moveTo(15, h - 20); g.lineTo(15 + pxPerLam, h - 20); g.stroke();
      g.fillStyle = C.good; g.font = f(11, 700); g.textAlign = 'center';
      g.fillText('one wavelength', 15 + pxPerLam / 2, h - 6);
    };
    return { destroy: stage.destroy };
  });

  /* --------------------------------------------------------- refractBend --
   * Snell's law as something you do, not something you read: drag the incoming
   * ray and the refracted one follows, until past the critical angle it stops
   * escaping altogether. */
  global.QQViz.register('refractBend', function (host, api) {
    var P = (api && api.params) || {};
    var n = P.n != null ? P.n : 1.5;
    var fromDense = P.fromDense === true;
    var reveal = P.reveal !== false;
    var deg = P.deg != null ? P.deg : 30;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.9);
    slider(row, { min: 5, max: 85, step: 1, value: deg, label: 'angle' },
      function (v) { deg = v; api.onInteract('slider'); say(); });
    function refracted() {
      var s = fromDense ? Math.sin(deg * Math.PI / 180) * n
                        : Math.sin(deg * Math.PI / 180) / n;
      return s > 1 ? null : Math.asin(s) * 180 / Math.PI;
    }
    function say() {
      var r = refracted();
      out.innerHTML = 'incoming <b>' + deg + '°</b> ' +
        (r === null
          ? '— <b>nothing gets out</b>: totally internally reflected'
          : (reveal ? '→ refracted <b>' + r.toFixed(1) + '°</b>'
                    : '→ watch which side of the normal it bends toward'));
    }
    say();
    stage.draw = function (g, w, h) {
      var cx = w / 2, cy = h / 2;
      g.fillStyle = fromDense ? 'rgba(88,166,255,0.05)' : 'rgba(88,166,255,0.16)';
      g.fillRect(0, cy, w, h - cy);
      g.fillStyle = fromDense ? 'rgba(88,166,255,0.16)' : 'rgba(88,166,255,0.05)';
      g.fillRect(0, 0, w, cy);
      g.strokeStyle = C.muted; g.lineWidth = 2;
      g.beginPath(); g.moveTo(0, cy); g.lineTo(w, cy); g.stroke();
      g.setLineDash([4, 4]); g.strokeStyle = C.line;
      g.beginPath(); g.moveTo(cx, 8); g.lineTo(cx, h - 8); g.stroke();
      g.setLineDash([]);
      var L = Math.min(w, h) * 0.42, a = deg * Math.PI / 180;
      g.strokeStyle = C.gold; g.lineWidth = 3;
      g.beginPath();
      g.moveTo(cx - L * Math.sin(a), cy - L * Math.cos(a)); g.lineTo(cx, cy);
      g.stroke();
      var r = refracted();
      if (r === null) {
        g.strokeStyle = C.bad; g.lineWidth = 3;
        g.beginPath();
        g.moveTo(cx, cy); g.lineTo(cx + L * Math.sin(a), cy - L * Math.cos(a));
        g.stroke();
      } else {
        var rr = r * Math.PI / 180;
        g.strokeStyle = C.good; g.lineWidth = 3;
        g.beginPath();
        g.moveTo(cx, cy); g.lineTo(cx + L * Math.sin(rr), cy + L * Math.cos(rr));
        g.stroke();
      }
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText(fromDense ? 'dense below — try a big angle'
                           : 'dense below — the ray bends toward the normal',
                 w / 2, h - 4);
    };
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------- magnitudeLine --
   * Estimation is marked on the power of ten, so the number line IS
   * logarithmic. Place a guess and see which decade it lands in. */
  global.QQViz.register('magnitudeLine', function (host, api) {
    var P = (api && api.params) || {};
    var lo = P.lo != null ? P.lo : 0, hi = P.hi != null ? P.hi : 12;
    var pick = P.pick != null ? P.pick : 6;
    var marks = P.marks || [
      [0, 'one'], [2, 'a room'], [4, 'a town'], [6, 'a city'],
      [9, 'a country x100'], [12, 'a trillion']
    ];
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.55);
    slider(row, { min: lo, max: hi, step: 1, value: pick, label: 'power of ten' },
      function (v) { pick = v; api.onInteract('slider'); say(); });
    function say() {
      out.innerHTML = '10<sup>' + pick + '</sup> = <b>' +
        Number(Math.pow(10, pick)).toLocaleString() + '</b>';
    }
    say();
    stage.draw = function (g, w, h) {
      var pad = 26, y = h / 2;
      g.strokeStyle = C.muted; g.lineWidth = 2;
      g.beginPath(); g.moveTo(pad, y); g.lineTo(w - pad, y); g.stroke();
      for (var e = lo; e <= hi; e++) {
        var x = pad + (e - lo) / (hi - lo) * (w - 2 * pad);
        var on = e === pick;
        g.strokeStyle = on ? C.gold : C.line; g.lineWidth = on ? 3 : 1.5;
        g.beginPath(); g.moveTo(x, y - (on ? 16 : 8)); g.lineTo(x, y + (on ? 16 : 8));
        g.stroke();
        if (e % 3 === 0 || on) {
          g.fillStyle = on ? C.gold : C.muted; g.font = f(on ? 12 : 10, 700);
          g.textAlign = 'center';
          g.fillText('10^' + e, x, y - 22);
        }
      }
      marks.forEach(function (m) {
        if (m[0] < lo || m[0] > hi) return;
        var x = pad + (m[0] - lo) / (hi - lo) * (w - 2 * pad);
        g.fillStyle = C.muted; g.font = f(9, 600); g.textAlign = 'center';
        g.fillText(m[1], x, y + 30);
      });
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('each step is TEN times the last', w / 2, h - 4);
    };
    return { destroy: stage.destroy };
  });

})(window);
