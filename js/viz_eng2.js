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

/* ==========================================================================
 * Mechanics. Added after a coverage check found 25 questions there sharing
 * four visuals between them -- the thinnest topic on the site.
 * ========================================================================== */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, button = K.button, slider = K.slider;

  /* ------------------------------------------------------------- vtGraph --
   * Gradient is acceleration, area is distance. Both are shown as things you
   * can see rather than rules to remember. */
  global.QQViz.register('vtGraph', function (host, api) {
    var P = (api && api.params) || {};
    var u = P.u != null ? P.u : 0, a = P.a != null ? P.a : 3, T = P.T != null ? P.T : 4;
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.85);
    slider(row, { min: -5, max: 5, step: 1, value: a, label: 'acceleration' },
      function (v) { a = v; api.onInteract('slider'); say(); });
    slider(row, { min: 0, max: 8, step: 1, value: u, label: 'start speed' },
      function (v) { u = v; api.onInteract('slider'); say(); });
    function dist() { return u * T + 0.5 * a * T * T; }
    function say() {
      out.innerHTML = 'u = <b>' + u + '</b>, a = <b>' + a + '</b> over ' + T + ' s' +
        (reveal ? '   ·   area = distance = <b>' + (+dist().toFixed(1)) + '</b>'
                : '   ·   the shaded area IS the distance');
    }
    say();
    stage.draw = function (g, w, h) {
      var pad = 30, x0 = pad, y0 = h - 26, x1 = w - 12, y1 = 14;
      var vmax = 14, sx = (x1 - x0) / T, sy = (y0 - y1) / vmax;
      g.strokeStyle = C.line; g.lineWidth = 1;
      for (var i = 0; i <= T; i++) {
        g.beginPath(); g.moveTo(x0 + i * sx, y1); g.lineTo(x0 + i * sx, y0); g.stroke();
      }
      for (var v = 0; v <= vmax; v += 2) {
        g.beginPath(); g.moveTo(x0, y0 - v * sy); g.lineTo(x1, y0 - v * sy); g.stroke();
      }
      g.strokeStyle = C.muted; g.lineWidth = 1.8;
      g.beginPath(); g.moveTo(x0, y1); g.lineTo(x0, y0); g.lineTo(x1, y0); g.stroke();
      /* the area under the line, which IS the distance */
      g.beginPath();
      g.moveTo(x0, y0);
      for (var t = 0; t <= T; t += T / 60) {
        var vv = Math.max(0, u + a * t);
        g.lineTo(x0 + t * sx, y0 - vv * sy);
      }
      g.lineTo(x0 + T * sx, y0); g.closePath();
      g.fillStyle = 'rgba(88,166,255,0.24)'; g.fill();
      g.strokeStyle = C.accent; g.lineWidth = 2.5;
      g.beginPath();
      for (var t2 = 0; t2 <= T; t2 += T / 60) {
        var v2 = Math.max(0, u + a * t2);
        var X = x0 + t2 * sx, Y = y0 - v2 * sy;
        if (t2 === 0) g.moveTo(X, Y); else g.lineTo(X, Y);
      }
      g.stroke();
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('gradient = acceleration      area = distance', w / 2, h - 6);
    };
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------------ collide ---
   * Momentum before and after, with the kinetic energy shown alongside so the
   * difference between the two is visible rather than asserted. */
  global.QQViz.register('collide', function (host, api) {
    var P = (api && api.params) || {};
    var m1 = P.m1 != null ? P.m1 : 2, u1 = P.u1 != null ? P.u1 : 3;
    var m2 = P.m2 != null ? P.m2 : 1;
    var reveal = P.reveal !== false;
    var t = 0, running = false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.5);
    slider(row, { min: 1, max: 6, step: 1, value: m1, label: 'first mass' },
      function (v) { m1 = v; t = 0; api.onInteract('slider'); say(); });
    slider(row, { min: 1, max: 6, step: 1, value: u1, label: 'first speed' },
      function (v) { u1 = v; t = 0; api.onInteract('slider'); say(); });
    button(row, 'run', function () { t = 0; running = true; api.onInteract('run'); });
    function vAfter() { return m1 * u1 / (m1 + m2); }
    function say() {
      var ke0 = 0.5 * m1 * u1 * u1, ke1 = 0.5 * (m1 + m2) * Math.pow(vAfter(), 2);
      out.innerHTML = 'momentum before = <b>' + (m1 * u1) + '</b>' +
        (reveal ? '   ·   after they join, v = <b>' + vAfter().toFixed(2) + '</b>' +
                  '   ·   KE ' + ke0.toFixed(1) + ' → ' + ke1.toFixed(1)
                : '   ·   momentum is the same afterwards — what about the energy?');
    }
    say();
    stage.draw = function (g, w, h) {
      if (running) { t += 1 / 60; if (t > 2.4) { t = 2.4; running = false; } }
      var y = h / 2, floor = h - 20;
      g.strokeStyle = C.muted; g.lineWidth = 2;
      g.beginPath(); g.moveTo(0, floor); g.lineTo(w, floor); g.stroke();
      var meet = 0.62 * w, tHit = 1.2;
      var x1, x2;
      if (t < tHit) {
        x1 = 0.12 * w + (meet - 0.12 * w) * (t / tHit);
        x2 = meet + 26;
      } else {
        var v = vAfter() / Math.max(1, u1);
        x1 = meet + (t - tHit) * 60 * v;
        x2 = x1 + 26;
      }
      function block(x, m, col) {
        var s = 12 + m * 5;
        g.fillStyle = col;
        K.roundRect(g, x - s / 2, floor - s, s, s, 3); g.fill();
        g.fillStyle = C.fg; g.font = f(10, 700); g.textAlign = 'center';
        g.fillText(m + 'kg', x, floor - s - 6);
      }
      block(x1, m1, C.accent);
      block(x2, m2, C.gold);
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('they stick together — momentum survives, energy does not',
                 w / 2, h - 4);
    };
    return { destroy: stage.destroy };
  });

  /* ------------------------------------------------------------ incline ---
   * Resolving a weight, with the two components drawn so sin and cos stop
   * being interchangeable. */
  global.QQViz.register('incline', function (host, api) {
    var P = (api && api.params) || {};
    var deg = P.deg != null ? P.deg : 30, m = P.m != null ? P.m : 4;
    var reveal = P.reveal !== false;
    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.75);
    slider(row, { min: 5, max: 60, step: 5, value: deg, label: 'slope' },
      function (v) { deg = v; api.onInteract('slider'); say(); });
    function along() { return m * 10 * Math.sin(deg * Math.PI / 180); }
    function into() { return m * 10 * Math.cos(deg * Math.PI / 180); }
    function say() {
      out.innerHTML = deg + '°, ' + m + ' kg, g = 10' +
        (reveal ? '   ·   along <b>' + along().toFixed(1) + ' N</b>, into the slope <b>' +
                  into().toFixed(1) + ' N</b>'
                : '   ·   which component uses sin, and which cos?');
    }
    say();
    stage.draw = function (g, w, h) {
      var r = deg * Math.PI / 180;
      var bx = 40, by = h - 28, L = Math.min(w - 80, (h - 60) / Math.max(0.18, Math.tan(r)));
      var tx = bx + L, ty = by - L * Math.tan(r);
      g.fillStyle = 'rgba(88,166,255,0.14)';
      g.beginPath(); g.moveTo(bx, by); g.lineTo(tx, by); g.lineTo(tx, ty); g.closePath();
      g.fill();
      g.strokeStyle = C.muted; g.lineWidth = 2;
      g.beginPath(); g.moveTo(bx, by); g.lineTo(tx, ty); g.moveTo(bx, by); g.lineTo(tx, by);
      g.stroke();
      var px = bx + L * 0.55, py = by - L * 0.55 * Math.tan(r);
      g.fillStyle = C.accent;
      K.roundRect(g, px - 11, py - 11, 22, 22, 3); g.fill();
      function arrow(dx, dy, col, lab) {
        var x1 = px + dx, y1 = py + dy;
        g.strokeStyle = col; g.fillStyle = col; g.lineWidth = 3;
        g.beginPath(); g.moveTo(px, py); g.lineTo(x1, y1); g.stroke();
        var an = Math.atan2(y1 - py, x1 - px);
        g.beginPath(); g.moveTo(x1, y1);
        g.lineTo(x1 - 9 * Math.cos(an - 0.4), y1 - 9 * Math.sin(an - 0.4));
        g.lineTo(x1 - 9 * Math.cos(an + 0.4), y1 - 9 * Math.sin(an + 0.4));
        g.closePath(); g.fill();
        g.font = f(10, 700); g.textAlign = 'center';
        g.fillText(lab, x1 + 12 * Math.cos(an), y1 + 12 * Math.sin(an));
      }
      var sc = 2.0;
      arrow(0, m * 10 * sc * 0.5, C.muted, 'mg');
      arrow(Math.cos(r) * along() * sc * 0.5, Math.sin(r) * along() * sc * 0.5,
            C.gold, 'along');
      arrow(Math.sin(r) * into() * sc * 0.5, -Math.cos(r) * into() * sc * 0.5,
            C.good, 'into');
      g.fillStyle = C.muted; g.font = f(11, 600); g.textAlign = 'center';
      g.fillText('gold slides it down, green presses it in', w / 2, h - 4);
    };
    return { destroy: stage.destroy };
  });
})(window);
