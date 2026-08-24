/* A ray diagram for a converging lens — the lens half of lesson w3.
 *
 *   lensRay   the three standard construction rays, drawn live as you slide
 *             the object along the axis. The image is where they cross, and
 *             the point of the visual is that you can WATCH it be where they
 *             cross rather than take 1/f = 1/u + 1/v on trust.
 *
 *             Slide the object inside the focal point and the rays stop
 *             converging: they spread, and the image jumps to the near side,
 *             upright and magnified. That is the magnifying-glass case, and
 *             it is the one students reliably get wrong because the formula
 *             gives a negative number with no picture attached to it.
 *
 * reveal:false withholds the image distance and the magnification — the two
 * numbers w3 asks for — and nothing else. The construction is still drawn,
 * because the construction is the method, not the answer.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage, clamp = K.clamp;
  var controls = K.controls, readout = K.readout, slider = K.slider;

  global.QQViz.register('lensRay', function (host, api) {
    var P = (api && api.params) || {};
    var u = P.u != null ? P.u : 15;          // object distance, cm
    var fl = P.f != null ? P.f : 10;         // focal length, cm
    var reveal = P.reveal !== false;

    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.66);

    slider(row, { min: 4, max: 80, step: 1, value: u, label: 'object distance' },
      function (v) { u = v; api.onInteract('slider'); say(); });
    slider(row, { min: 5, max: 40, step: 1, value: fl, label: 'focal length' },
      function (v) { fl = v; api.onInteract('slider'); say(); });

    /* One solver. The picture and the readout both read from it, so they
     * cannot disagree — and it reports the degenerate case honestly instead
     * of dividing by something near zero. */
    function solve() {
      var inv = 1 / fl - 1 / u;
      if (Math.abs(inv) < 1e-9) {
        return { parallel: true, v: Infinity, m: Infinity };
      }
      var v = 1 / inv;
      return { parallel: false, v: v, m: v / u, virtual: v < 0 };
    }

    function say() {
      var s = solve();
      var txt = 'object at <b>' + u + ' cm</b> &nbsp;·&nbsp; focal length <b>' +
                fl + ' cm</b>';
      if (s.parallel) {
        txt += '<br><span class="muted">object exactly at the focal point — ' +
               'the rays leave parallel and never meet</span>';
      } else if (reveal) {
        txt += '<br>image at <b>' + Math.abs(s.v).toFixed(1) + ' cm</b>' +
               (s.virtual ? ' on the SAME side (virtual)' : ' on the far side') +
               ' &nbsp;·&nbsp; magnification <b>' + Math.abs(s.m).toFixed(2) +
               '</b>' + (s.virtual ? ', upright' : ', inverted');
      } else {
        txt += '<br><span class="muted">' +
               (s.virtual
                 ? 'the rays are spreading — follow them back to find the image'
                 : 'the image is where the rays cross') + '</span>';
      }
      out.innerHTML = txt;
    }
    say();

    stage.draw = function (g, w, h) {
      var s = solve();
      var axisY = h / 2;
      var lensX = w * 0.44;
      /* one scale for everything on the axis, chosen so the object, both
       * focal points and a real image all fit */
      var need = Math.max(u, fl * 2, s.parallel ? fl * 2 : Math.abs(s.v)) * 1.18;
      var px = Math.min(lensX - 26, (w - lensX) - 26) / Math.max(1e-6, need);
      var X = function (cm) { return lensX + cm * px; };
      var objH = Math.min(30, h * 0.17);

      /* axis */
      g.strokeStyle = C.line; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(8, axisY); g.lineTo(w - 8, axisY); g.stroke();

      /* the lens */
      g.strokeStyle = C.accent; g.lineWidth = 3;
      var lh = h * 0.32;
      g.beginPath();
      g.moveTo(lensX, axisY - lh);
      g.quadraticCurveTo(lensX + 13, axisY, lensX, axisY + lh);
      g.quadraticCurveTo(lensX - 13, axisY, lensX, axisY - lh);
      g.stroke();

      /* focal points, both sides — they are a GIVEN, so they are labelled */
      g.fillStyle = C.gold;
      [-1, 1].forEach(function (sgn) {
        g.beginPath(); g.arc(X(sgn * fl), axisY, 3.5, 0, 7); g.fill();
      });
      g.font = f(11, 700); g.textAlign = 'center'; g.textBaseline = 'top';
      g.fillText('F', X(-fl), axisY + 6);
      g.fillText('F', X(fl), axisY + 6);

      /* the object, on the left */
      var ox = X(-u);
      g.strokeStyle = C.good; g.lineWidth = 3;
      g.beginPath(); g.moveTo(ox, axisY); g.lineTo(ox, axisY - objH); g.stroke();
      g.beginPath();
      g.moveTo(ox, axisY - objH); g.lineTo(ox - 4, axisY - objH + 8);
      g.lineTo(ox + 4, axisY - objH + 8); g.closePath();
      g.fillStyle = C.good; g.fill();

      /* --- the three construction rays ------------------------------------
       * 1  parallel in  -> out through the far F
       * 2  straight through the centre, undeviated
       * 3  in through the near F -> out parallel
       * Each is drawn to the edge of the canvas, so where they cross is
       * something you see rather than something announced. */
      var top = axisY - objH;
      g.lineWidth = 2;

      function ray(pts, dashed) {
        g.setLineDash(dashed ? [5, 4] : []);
        g.beginPath();
        g.moveTo(pts[0][0], pts[0][1]);
        for (var i = 1; i < pts.length; i++) g.lineTo(pts[i][0], pts[i][1]);
        g.stroke();
        g.setLineDash([]);
      }
      function extend(x0, y0, x1, y1, toX) {
        var t = (toX - x0) / (x1 - x0);
        return [toX, y0 + (y1 - y0) * t];
      }

      g.strokeStyle = 'rgba(88,166,255,0.95)';
      var a1 = extend(lensX, top, X(fl), axisY, w - 8);
      ray([[ox, top], [lensX, top], a1]);

      g.strokeStyle = 'rgba(63,185,80,0.95)';
      var a2 = extend(ox, top, lensX, axisY, w - 8);
      ray([[ox, top], a2]);

      /* ray 3 only exists as drawn if the object is beyond F */
      if (u > fl + 0.001) {
        g.strokeStyle = 'rgba(210,153,34,0.95)';
        var hitY = extend(ox, top, X(-fl), axisY, lensX)[1];
        ray([[ox, top], [lensX, hitY], [w - 8, hitY]]);
      }

      /* the virtual case: the outgoing rays are traced BACK, dashed, which is
       * exactly what "virtual image" means and is impossible to say in words
       * as clearly as it can be drawn */
      if (!s.parallel && s.virtual) {
        var ix = X(s.v);                       // negative -> left of the lens
        var ih = objH * Math.abs(s.m);
        g.strokeStyle = 'rgba(139,148,158,0.75)';
        ray([[lensX, top], [ix, axisY - ih]], true);
        ray([[lensX, axisY], [ix, axisY - ih]], true);
        g.strokeStyle = C.fg; g.lineWidth = 3;
        g.beginPath(); g.moveTo(ix, axisY); g.lineTo(ix, axisY - ih); g.stroke();
      } else if (!s.parallel) {
        var rx = X(s.v);
        var rh = objH * Math.abs(s.m);
        g.strokeStyle = C.fg; g.lineWidth = 3;
        g.beginPath(); g.moveTo(rx, axisY); g.lineTo(rx, axisY + rh); g.stroke();
        g.beginPath();
        g.moveTo(rx, axisY + rh); g.lineTo(rx - 4, axisY + rh - 8);
        g.lineTo(rx + 4, axisY + rh - 8); g.closePath();
        g.fillStyle = C.fg; g.fill();
      }

      g.fillStyle = C.muted; g.font = f(12, 500);
      g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      g.fillText(s.parallel
        ? 'the object is sitting exactly on F'
        : (s.virtual
            ? 'inside the focal point: the rays spread, so trace them back'
            : 'slide the object inwards and watch the crossing point move'),
        w / 2, h - 3);
    };

    return { destroy: stage.destroy };
  });
}(window));
