/* Dimensions, drawn — for es4, "Checking an answer by its units".
 *
 *   dimCheck   tap a candidate expression and see what it is made of: the
 *              powers of mass, length and time, as bars either side of zero.
 *
 * WHY THIS EXISTS AT ALL. The build script used to say these questions
 * deliberately had no visual, because "nothing registered draws units and
 * every candidate would be decoration next to a question about whether m^3/s^2
 * can be a speed". The reasoning was sound and the conclusion was not: the
 * answer to "nothing draws units" is to draw units. This does.
 *
 * WHAT IT DELIBERATELY DOES NOT DO. It never says which candidate is right,
 * never shows the target dimensions alongside, and never prints a verdict.
 * Those questions ask which expression COULD be a speed, so a matching pair of
 * bars sitting side by side would be the answer handed over as a picture. You
 * pick an expression, you see what it is; knowing that a speed is a length
 * over a time is the part that is yours.
 *
 * The fractional case is the one worth the price of admission: sqrt(2gh^2)
 * comes out as L^3/2, and a half-power of a length is not a thing that exists
 * in the world. Seeing that bar sit between two gridlines says more than the
 * sentence does.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, button = K.button;

  var SUP = { '-2': '⁻²', '-1': '⁻¹', '-0.5': '⁻¹ᐟ²', '0': '', '0.5': '¹ᐟ²',
              '1': '', '1.5': '³ᐟ²', '2': '²', '3': '³' };

  function sup(p) {
    var k = String(p);
    if (SUP[k] !== undefined) return SUP[k];
    return '^' + k;
  }

  /* "M^0 L^1.5 T^-1"  ->  "L³ᐟ² T⁻¹", with the zero powers dropped, because a
   * dimension nobody uses should not take up room on the line. */
  function label(d) {
    var out = [];
    [['M', d.M], ['L', d.L], ['T', d.T]].forEach(function (p) {
      if (Math.abs(p[1]) < 1e-9) return;
      out.push(p[0] + sup(p[1]));
    });
    return out.length ? out.join(' ') : 'dimensionless';
  }

  global.QQViz.register('dimCheck', function (host, api) {
    var P = (api && api.params) || {};
    var exprs = P.exprs || [
      { label: '2gh', M: 0, L: 2, T: -2 },
      { label: 'sqrt(2gh)', M: 0, L: 1, T: -1 }
    ];
    var sel = 0;

    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.62);

    var btns = exprs.map(function (e, i) {
      return button(row, e.label, function () {
        sel = i; api.onInteract('chip'); paint(); say();
      });
    });

    function paint() {
      btns.forEach(function (b, i) {
        b.classList.toggle('primary', i === sel);
      });
    }
    function say() {
      var e = exprs[sel];
      out.innerHTML = '<b>' + e.label + '</b> has dimensions <b>' +
        label(e) + '</b>' +
        '<br><span class="muted">g is a length over a time squared; a height ' +
        'is a length. Build it up and see what survives.</span>';
    }
    paint(); say();

    stage.draw = function (g, w, h) {
      var e = exprs[sel];
      var rows = [['mass', e.M], ['length', e.L], ['time', e.T]];
      var pad = 62;
      var midX = pad + (w - pad - 20) * 0.42;   // the zero line
      var unit = Math.min(46, (w - pad - 30) * 0.20);
      var rh = Math.min(34, (h - 34) / 3);
      var y0 = 16;

      /* gridlines at every WHOLE power, so a half-power visibly lands between
       * two of them rather than on one */
      g.strokeStyle = C.line; g.lineWidth = 1;
      for (var k = -2; k <= 3; k++) {
        var gx = midX + k * unit;
        if (gx < pad - 6 || gx > w - 8) continue;
        g.globalAlpha = k === 0 ? 1 : 0.4;
        g.beginPath(); g.moveTo(gx, y0 - 4); g.lineTo(gx, y0 + rh * 3 + 4);
        g.stroke();
        g.globalAlpha = 1;
        g.fillStyle = C.muted; g.font = f(10, 500);
        g.textAlign = 'center'; g.textBaseline = 'top';
        g.fillText(String(k), gx, y0 + rh * 3 + 6);
      }

      rows.forEach(function (r, i) {
        var cy = y0 + rh * i + rh / 2;
        g.fillStyle = C.muted; g.font = f(12, 600);
        g.textAlign = 'right'; g.textBaseline = 'middle';
        g.fillText(r[0], pad - 12, cy);
        if (Math.abs(r[1]) < 1e-9) {
          g.fillStyle = C.dim;
          g.beginPath(); g.arc(midX, cy, 3, 0, 7); g.fill();
          return;
        }
        var x1 = midX + r[1] * unit;
        g.fillStyle = r[1] > 0 ? 'rgba(63,185,80,0.55)' : 'rgba(248,81,73,0.5)';
        g.fillRect(Math.min(midX, x1), cy - rh * 0.26,
                   Math.abs(x1 - midX), rh * 0.52);
        g.fillStyle = C.fg; g.font = f(12, 700);
        g.textAlign = r[1] > 0 ? 'left' : 'right';
        g.fillText((r[1] > 0 ? '+' : '') + r[1],
                   x1 + (r[1] > 0 ? 6 : -6), cy);
      });

      g.fillStyle = C.muted; g.font = f(12, 500);
      g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      g.fillText('the power of each unit — a bar between two gridlines is a ' +
                 'fractional power', w / 2, h - 3);
    };

    return { destroy: stage.destroy };
  });
}(window));
