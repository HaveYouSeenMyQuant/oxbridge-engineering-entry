/* Visuals for the sine and cosine rules — the lesson t2, which had none.
 *
 *   triangleLab   one triangle, two fixed sides and the angle between them,
 *                 all three draggable. Three modes:
 *
 *     'cosine'  lays out c² = a² + b² − 2ab·cos C as three quantities you can
 *               watch move. Pull the angle round to 90° and the correction
 *               term goes to zero in front of you: the cosine rule IS
 *               Pythagoras plus a term that measures how far from square the
 *               corner is. That is the whole idea, and it is invisible in
 *               algebra.
 *     'sine'    puts a/sin A and b/sin B next to each other. They stay equal
 *               no matter how the triangle is dragged. The sine rule is not a
 *               formula to trust, it is a quantity that does not change.
 *     'area'    draws the perpendicular height b·sin C, so ½ab·sin C is read
 *               off the picture as base × height ÷ 2 rather than recalled.
 *
 * reveal:false withholds only the quantity its question asks for, and never
 * the structure. The player still sees a² + b² and the correction; what they
 * do not get handed is c.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage, clamp = K.clamp;
  var controls = K.controls, readout = K.readout, slider = K.slider;

  var DEG = Math.PI / 180;

  global.QQViz.register('triangleLab', function (host, api) {
    var P = (api && api.params) || {};
    var mode = P.mode || 'cosine';
    var a = P.a != null ? P.a : 5;         // side a, from the corner C
    var b = P.b != null ? P.b : 7;         // side b, from the corner C
    var ang = P.C != null ? P.C : 60;      // the angle BETWEEN them, degrees
    var reveal = P.reveal !== false;

    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.82);

    slider(row, { min: 2, max: 12, step: 0.5, value: a, label: 'side a' },
      function (v) { a = v; api.onInteract('slider'); say(); });
    slider(row, { min: 2, max: 12, step: 0.5, value: b, label: 'side b' },
      function (v) { b = v; api.onInteract('slider'); say(); });
    slider(row, { min: 10, max: 170, step: 1, value: ang, label: 'angle C' },
      function (v) { ang = v; api.onInteract('slider'); say(); });

    /* The triangle, solved from the two sides and the angle between them.
     * Everything downstream reads these — the picture and the readout can
     * never disagree, because there is only one source. */
    function solve() {
      var Cr = ang * DEG;
      var sq = a * a + b * b;
      var corr = 2 * a * b * Math.cos(Cr);
      var c = Math.sqrt(Math.max(1e-9, sq - corr));
      /* the other two angles, from the sine rule, taken from the SMALLER
       * side so the arcsin is never in the ambiguous branch */
      var A = Math.asin(clamp(a * Math.sin(Cr) / c, -1, 1));
      var B = Math.PI - Cr - A;
      return { c: c, sq: sq, corr: corr, A: A / DEG, B: B / DEG, Cr: Cr,
               area: 0.5 * a * b * Math.sin(Cr) };
    }

    function say() {
      var t = solve();
      var s;
      if (mode === 'sine') {
        var ra = a / Math.sin(t.A * DEG), rb = b / Math.sin(t.B * DEG);
        s = 'a ÷ sin A = <b>' + ra.toFixed(2) + '</b>' +
            ' &nbsp;·&nbsp; b ÷ sin B = <b>' + rb.toFixed(2) + '</b>' +
            '<br><span class="muted">the same number, however you drag it — ' +
            'that is the sine rule</span>';
        if (!reveal) s += '<br><span class="muted">A = ' + t.A.toFixed(1) +
          '° · B = ' + t.B.toFixed(1) + '°</span>';
      } else if (mode === 'area') {
        s = 'base b = <b>' + b.toFixed(2) + '</b>' +
            ' &nbsp;·&nbsp; height = a·sin C = <b>' +
            (a * Math.sin(t.Cr)).toFixed(2) + '</b>';
        s += reveal ? '<br>area = <b>' + t.area.toFixed(2) + '</b>'
                    : '<br><span class="muted">so what is the area?</span>';
      } else {
        s = 'a² + b² = <b>' + t.sq.toFixed(2) + '</b>' +
            ' &nbsp;·&nbsp; 2ab·cos C = <b>' + t.corr.toFixed(2) + '</b>';
        /* Saying "the correction is zero" in words IS the answer to
         * tr_pythag_check, so it is only said once the question is no longer
         * asking. The player who drags to 90° still sees the number; that one
         * they found themselves. */
        if (reveal && Math.abs(ang - 90) < 0.5) {
          s += '<br><span class="muted">at 90° the correction is zero — this ' +
               'is just Pythagoras</span>';
        }
        s += reveal ? '<br>c² = <b>' + (t.sq - t.corr).toFixed(2) +
                      '</b> &nbsp;·&nbsp; c = <b>' + t.c.toFixed(2) + '</b>'
                    : '<br><span class="muted">so what is c?</span>';
      }
      out.innerHTML = s;
    }
    say();

    stage.draw = function (g, w, h) {
      var t = solve();
      /* place the corner C, then the two sides that meet there */
      var pts = [
        { x: 0, y: 0 },                                                  // C
        { x: b, y: 0 },                                                  // A
        { x: a * Math.cos(t.Cr), y: a * Math.sin(t.Cr) }                 // B
      ];
      var xs = pts.map(function (p) { return p.x; }),
          ys = pts.map(function (p) { return p.y; });
      var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
      var y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys);
      var pad = 46;
      var s = Math.min((w - 2 * pad) / Math.max(1e-6, x1 - x0),
                       (h - 2 * pad - 14) / Math.max(1e-6, y1 - y0));
      var ox = (w - (x1 - x0) * s) / 2 - x0 * s;
      var oy = h - pad - (-y0) * s;
      var X = function (x) { return ox + x * s; },
          Y = function (y) { return oy - y * s; };

      /* the perpendicular height, in area mode, because that is the idea */
      if (mode === 'area') {
        g.strokeStyle = C.dim; g.lineWidth = 1.5;
        g.setLineDash([5, 4]);
        g.beginPath(); g.moveTo(X(pts[2].x), Y(pts[2].y));
        g.lineTo(X(pts[2].x), Y(0)); g.stroke();
        g.setLineDash([]);
      }

      g.fillStyle = 'rgba(88,166,255,0.13)';
      g.beginPath();
      g.moveTo(X(pts[0].x), Y(pts[0].y));
      g.lineTo(X(pts[1].x), Y(pts[1].y));
      g.lineTo(X(pts[2].x), Y(pts[2].y));
      g.closePath(); g.fill();

      /* side c is the one the cosine rule is about, so it is the gold one */
      var edges = [[0, 1, C.accent, 'b'], [0, 2, C.accent, 'a'],
                   [1, 2, C.gold, 'c']];
      edges.forEach(function (e) {
        var p = pts[e[0]], q = pts[e[1]];
        g.strokeStyle = e[2]; g.lineWidth = 3;
        g.beginPath(); g.moveTo(X(p.x), Y(p.y)); g.lineTo(X(q.x), Y(q.y));
        g.stroke();
        var mx = (X(p.x) + X(q.x)) / 2, my = (Y(p.y) + Y(q.y)) / 2;
        var len = e[3] === 'a' ? a : (e[3] === 'b' ? b : t.c);
        g.fillStyle = e[2]; g.font = f(13, 700);
        g.textAlign = 'center'; g.textBaseline = 'middle';
        /* side c carries the answer in cosine mode, so it is named but not
         * measured unless the question is not asking for it */
        var hide = (!reveal && mode === 'cosine' && e[3] === 'c');
        g.fillText(hide ? 'c = ?' : e[3] + ' = ' + len.toFixed(2),
                   mx + (e[3] === 'a' ? -16 : 16), my - 10);
      });

      /* the angle at C, drawn as an arc, with a square when it is square */
      var r = Math.min(34, 0.34 * Math.min(a, b) * s);
      g.strokeStyle = C.good; g.lineWidth = 2.5;
      if (Math.abs(ang - 90) < 0.5) {
        var u = r * 0.72;
        g.beginPath();
        g.moveTo(X(0) + u, Y(0));
        g.lineTo(X(0) + u, Y(0) - u);
        g.lineTo(X(0), Y(0) - u);
        g.stroke();
      } else {
        g.beginPath(); g.arc(X(0), Y(0), r, -t.Cr, 0); g.stroke();
      }
      g.fillStyle = C.good; g.font = f(13, 700);
      g.textAlign = 'left'; g.textBaseline = 'middle';
      g.fillText(ang.toFixed(0) + '°', X(0) + r + 6, Y(0) - r * 0.45);

      g.fillStyle = C.muted; g.font = f(12, 500);
      g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      var foot = mode === 'sine'
        ? 'drag any slider — a ÷ sin A and b ÷ sin B move together'
        : (mode === 'area' ? 'the dashed line is the height, a·sin C'
           : 'drag the angle and watch the correction term change');
      g.fillText(foot, w / 2, h - 3);
    };

    return { destroy: stage.destroy };
  });
}(window));
