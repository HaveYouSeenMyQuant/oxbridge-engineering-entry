/* Vectors in three dimensions — for v4 and v5, which had no visual.
 *
 *   vec3Box   a vector drawn as the diagonal of its own box, with the TWO
 *             right-angled triangles that give its length picked out:
 *
 *               1  across the floor:  sqrt(x^2 + y^2)
 *               2  then straight up:  sqrt( that^2 + z^2 )
 *
 *             That is the whole of 3D Pythagoras — the 2D one, done twice —
 *             and it is the thing the formula sqrt(x^2+y^2+z^2) hides. Drag a
 *             component and both triangles move, so the floor diagonal is
 *             visibly the hypotenuse of one triangle and a leg of the next.
 *
 *   mode 'diff' takes two points and draws the box on the DIFFERENCE, which
 *   is what a distance question actually is: the same picture with the tail
 *   moved to the origin.
 *
 * reveal:false withholds the magnitude — the number these questions ask for —
 * while still drawing both triangles, because the construction is the method.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, slider = K.slider;

  /* an isometric projection: cheap, unambiguous, and it keeps a right angle
   * on the floor looking like a right angle */
  function iso(x, y, z, s) {
    return { X: (x - y) * 0.866 * s, Y: -(z + (x + y) * 0.5) * s };
  }

  global.QQViz.register('vec3Box', function (host, api) {
    var P = (api && api.params) || {};
    var mode = P.mode || 'vector';
    var a = (P.a || [1, 2, 2]).slice();
    var b = (P.b || [0, 0, 0]).slice();
    var reveal = P.reveal !== false;

    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.78);

    ['x', 'y', 'z'].forEach(function (nm, i) {
      slider(row, { min: -6, max: 6, step: 1, value: a[i], label: nm },
        function (v) { a[i] = v; api.onInteract('slider'); say(); });
    });

    /* one source: the vector actually drawn is the vector described */
    function vec() {
      if (mode === 'diff') return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
      return a;
    }
    function floorLen(v) { return Math.sqrt(v[0] * v[0] + v[1] * v[1]); }
    function len(v) { return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]); }
    function fmt(x) {
      return Math.abs(x - Math.round(x)) < 1e-9 ? String(Math.round(x))
                                                : x.toFixed(3);
    }

    /* When z is zero the vector lies flat, the second triangle collapses, and
     * the floor diagonal IS the magnitude. The intermediate step is normally
     * safe to show -- it is the method -- but in that case showing it hands
     * over the answer. ve3_dist is exactly this: (1,2,3) to (4,6,3) differ
     * only in x and y. So the evaluated floor length is withheld too, and the
     * unevaluated expression stays, because forming the difference and
     * reaching for Pythagoras is the part being taught. */
    function floorIsAnswer(v) {
      return !reveal && Math.abs(v[2]) < 1e-9;
    }

    function say() {
      var v = vec(), fl = floorLen(v);
      var s = (mode === 'diff'
        ? 'the difference is <b>(' + v.join(', ') + ')</b>'
        : 'the vector is <b>(' + v.join(', ') + ')</b>');
      s += '<br>across the floor: &radic;(' + (v[0] * v[0]) + ' + ' +
           (v[1] * v[1]) + ')' +
           (floorIsAnswer(v) ? '' : ' = <b>' + fmt(fl) + '</b>');
      s += reveal
        ? '<br>then up: &radic;(' + fmt(fl * fl) + ' + ' + (v[2] * v[2]) +
          ') = <b>' + fmt(len(v)) + '</b>'
        : (floorIsAnswer(v)
            ? '<br><span class="muted">z is the same for both points, so this ' +
              'one lies flat — there is no second step to do</span>'
            : '<br><span class="muted">now do the same again, using that as ' +
              'one side and z as the other</span>');
      out.innerHTML = s;
    }
    say();

    stage.draw = function (g, w, h) {
      var v = vec();
      var span = Math.max(3, Math.max(Math.abs(v[0]), Math.abs(v[1]),
                                      Math.abs(v[2])) + 1);
      var s = Math.min((w - 44) / (span * 2.2), (h - 44) / (span * 2.0));
      var ox = w / 2, oy = h * 0.62;
      function pt(x, y, z) {
        var p = iso(x, y, z, s);
        return [ox + p.X, oy + p.Y];
      }
      function line(p, q, col, lw, dash) {
        g.strokeStyle = col; g.lineWidth = lw;
        g.setLineDash(dash || []);
        g.beginPath(); g.moveTo(p[0], p[1]); g.lineTo(q[0], q[1]); g.stroke();
        g.setLineDash([]);
      }

      var O = pt(0, 0, 0);
      /* axes */
      line(O, pt(span, 0, 0), C.dim, 1.5);
      line(O, pt(0, span, 0), C.dim, 1.5);
      line(O, pt(0, 0, span), C.dim, 1.5);
      g.fillStyle = C.muted; g.font = f(11, 700);
      g.textAlign = 'center'; g.textBaseline = 'middle';
      var lx = pt(span, 0, 0), ly = pt(0, span, 0), lz = pt(0, 0, span);
      g.fillText('x', lx[0] + 8, lx[1]);
      g.fillText('y', ly[0] - 8, ly[1]);
      g.fillText('z', lz[0], lz[1] - 9);

      var Px = pt(v[0], 0, 0);
      var Pxy = pt(v[0], v[1], 0);
      var P = pt(v[0], v[1], v[2]);

      /* the box, faint, so the diagonal has something to be the diagonal OF */
      line(Px, Pxy, C.dim, 1, [4, 4]);
      line(pt(0, v[1], 0), Pxy, C.dim, 1, [4, 4]);
      line(Pxy, P, C.dim, 1, [4, 4]);

      /* TRIANGLE 1 — on the floor. Its hypotenuse becomes a leg of the next,
       * which is the entire idea, so it is drawn in its own colour and kept. */
      g.fillStyle = 'rgba(63,185,80,0.16)';
      g.beginPath();
      g.moveTo(O[0], O[1]); g.lineTo(Px[0], Px[1]);
      g.lineTo(Pxy[0], Pxy[1]); g.closePath(); g.fill();
      line(O, Px, 'rgba(63,185,80,0.9)', 2);
      line(Px, Pxy, 'rgba(63,185,80,0.9)', 2);
      line(O, Pxy, C.good, 3);

      /* TRIANGLE 2 — standing up on that hypotenuse */
      g.fillStyle = 'rgba(210,153,34,0.14)';
      g.beginPath();
      g.moveTo(O[0], O[1]); g.lineTo(Pxy[0], Pxy[1]);
      g.lineTo(P[0], P[1]); g.closePath(); g.fill();
      line(Pxy, P, C.gold, 2);

      /* the vector itself */
      line(O, P, C.accent, 3.5);
      g.fillStyle = C.accent;
      g.beginPath(); g.arc(P[0], P[1], 4.5, 0, 7); g.fill();

      /* the floor diagonal is labelled because it is the intermediate step,
       * not the answer; the vector's own length is NOT labelled unless the
       * question has stopped asking for it */
      var fl = floorLen(v);
      g.font = f(12, 700); g.fillStyle = C.good;
      g.textAlign = 'center'; g.textBaseline = 'middle';
      if (!floorIsAnswer(v)) {
        g.fillText(fmt(fl), (O[0] + Pxy[0]) / 2 + 12, (O[1] + Pxy[1]) / 2 + 12);
      }
      if (reveal) {
        g.fillStyle = C.accent;
        g.fillText(fmt(len(v)), (O[0] + P[0]) / 2 - 16, (O[1] + P[1]) / 2);
      }

      g.fillStyle = C.muted; g.font = f(12, 500);
      g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      g.fillText('green triangle lies flat; gold one stands on its hypotenuse',
                 w / 2, h - 3);
    };

    return { destroy: stage.destroy };
  });
}(window));
