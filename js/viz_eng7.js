/* Power and energy as an AREA — the lesson e3, which had no visual.
 *
 *   powerBox   a rectangle whose two sides are the two things you were given
 *              and whose area is the thing you were asked for. All five of
 *              e3's questions are this one rectangle:
 *
 *                mode 'vi'      sides V and I     -> area is power
 *                mode 'i2r'     sides I and I x R -> area is power, and you
 *                               can SEE that P = I^2 R is nothing more than
 *                               P = V I with V replaced by I R. The second
 *                               side grows as you drag the current, which is
 *                               where the square comes from and why doubling
 *                               the current quadruples the heat.
 *                mode 'energy'  sides power and time -> area is energy. The
 *                               unit is chosen by the sliders, so a kilowatt
 *                               against half an hour and sixty watts against
 *                               two minutes are visibly the same picture.
 *
 *              unknown:'side' turns it round: the AREA is given and one side
 *              is missing, which is the fuse question. Same rectangle, solved
 *              the other way, and worth seeing as the same rectangle.
 *
 * reveal:false withholds whichever quantity the question asks for -- the area,
 * or the missing side -- and never the two you were handed.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage, roundRect = K.roundRect;
  var controls = K.controls, readout = K.readout, slider = K.slider;

  global.QQViz.register('powerBox', function (host, api) {
    var P = (api && api.params) || {};
    var mode = P.mode || 'vi';
    var unknown = P.unknown || 'area';
    var reveal = P.reveal !== false;

    var volts = P.V != null ? P.V : 240;
    var amps = P.I != null ? P.I : 8;
    var ohms = P.R != null ? P.R : 5;
    var watts = P.P != null ? P.P : 920;      // used when the area is given
    var power = P.power != null ? P.power : 60;
    var time = P.t != null ? P.t : 120;
    var tUnit = P.tUnit || 's';
    var pUnit = P.pUnit || 'W';

    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.74);

    if (mode === 'energy') {
      slider(row, { min: 1, max: 100, step: 1, value: power,
                    label: 'power' },
        function (v) { power = v; api.onInteract('slider'); say(); });
      slider(row, { min: 5, max: 300, step: 5, value: time, label: 'time' },
        function (v) { time = v; api.onInteract('slider'); say(); });
    } else if (mode === 'i2r') {
      slider(row, { min: 1, max: 10, step: 0.5, value: amps, label: 'current' },
        function (v) { amps = v; api.onInteract('slider'); say(); });
      slider(row, { min: 1, max: 20, step: 1, value: ohms, label: 'resistance' },
        function (v) { ohms = v; api.onInteract('slider'); say(); });
    } else if (unknown === 'side') {
      slider(row, { min: 50, max: 3000, step: 10, value: watts, label: 'power' },
        function (v) { watts = v; api.onInteract('slider'); say(); });
      slider(row, { min: 50, max: 260, step: 5, value: volts, label: 'voltage' },
        function (v) { volts = v; api.onInteract('slider'); say(); });
    } else {
      slider(row, { min: 10, max: 260, step: 5, value: volts, label: 'voltage' },
        function (v) { volts = v; api.onInteract('slider'); say(); });
      slider(row, { min: 0.5, max: 15, step: 0.5, value: amps, label: 'current' },
        function (v) { amps = v; api.onInteract('slider'); say(); });
    }

    /* One model. Both sides and the area come from here, so the labelled
     * numbers and the drawn shape can never tell different stories. */
    function box() {
      if (mode === 'energy') {
        return { w: time, h: power, area: power * time,
                 wLab: 'time', hLab: 'power',
                 wUnit: tUnit, hUnit: pUnit, aUnit: pUnit + '·' + tUnit };
      }
      if (mode === 'i2r') {
        return { w: amps, h: amps * ohms, area: amps * amps * ohms,
                 wLab: 'current', hLab: 'voltage across it = I × R',
                 wUnit: 'A', hUnit: 'V', aUnit: 'W' };
      }
      if (unknown === 'side') {
        return { w: watts / volts, h: volts, area: watts,
                 wLab: 'current', hLab: 'voltage',
                 wUnit: 'A', hUnit: 'V', aUnit: 'W' };
      }
      return { w: amps, h: volts, area: volts * amps,
               wLab: 'current', hLab: 'voltage',
               wUnit: 'A', hUnit: 'V', aUnit: 'W' };
    }

    function fmt(x) {
      return Math.abs(x - Math.round(x)) < 1e-9 ? String(Math.round(x))
                                                : x.toFixed(2);
    }

    function say() {
      var b = box();
      var s;
      if (unknown === 'side') {
        s = 'the whole rectangle is <b>' + fmt(b.area) + ' ' + b.aUnit +
            '</b> &nbsp;·&nbsp; one side is <b>' + fmt(b.h) + ' ' + b.hUnit +
            '</b>';
        s += reveal
          ? '<br>so the other side is <b>' + fmt(b.w) + ' ' + b.wUnit + '</b>'
          : '<br><span class="muted">so how long is the other side?</span>';
      } else {
        s = b.hLab + ' = <b>' + fmt(b.h) + ' ' + b.hUnit + '</b>' +
            ' &nbsp;·&nbsp; ' + b.wLab + ' = <b>' + fmt(b.w) + ' ' + b.wUnit +
            '</b>';
        if (mode === 'i2r') {
          s += '<br><span class="muted">drag the current and watch BOTH sides ' +
               'grow — that is where the square comes from</span>';
        }
        s += reveal
          ? '<br>area = <b>' + fmt(b.area) + ' ' + b.aUnit + '</b>'
          : '<br><span class="muted">the area is what you are after</span>';
      }
      out.innerHTML = s;
    }
    say();

    stage.draw = function (g, w, h) {
      var b = box();
      var pad = 52;
      var maxW = w - pad - 22, maxH = h - pad - 26;
      /* fixed reference scales, so the rectangle changes SIZE as you drag --
       * a box rescaled to fit would look identical for every input and teach
       * nothing */
      var refW = mode === 'energy' ? 300 : (mode === 'i2r' ? 10 : 15);
      var refH = mode === 'energy' ? 100 : (mode === 'i2r' ? 200 : 260);
      var bw = Math.max(6, Math.min(maxW, (b.w / refW) * maxW));
      var bh = Math.max(6, Math.min(maxH, (b.h / refH) * maxH));
      var x0 = pad, y0 = h - pad;

      /* axes */
      g.strokeStyle = C.line; g.lineWidth = 1.5;
      g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0 + maxW, y0); g.stroke();
      g.beginPath(); g.moveTo(x0, y0); g.lineTo(x0, y0 - maxH); g.stroke();

      g.fillStyle = 'rgba(88,166,255,0.22)';
      g.strokeStyle = C.accent; g.lineWidth = 2.5;
      roundRect(g, x0, y0 - bh, bw, bh, 3);
      g.fill(); g.stroke();

      /* The sides are labelled because they are what you were given -- EXCEPT
       * the missing one in the fuse question, which is the answer. The
       * readout hid it correctly and this label did not, so the canvas was
       * quietly printing the very number being asked for. */
      var hideW = (unknown === 'side' && !reveal);
      g.font = f(12, 700); g.fillStyle = hideW ? C.muted : C.fg;
      g.textAlign = 'center'; g.textBaseline = 'top';
      g.fillText(hideW ? '? ' + b.wUnit : fmt(b.w) + ' ' + b.wUnit,
                 x0 + bw / 2, y0 + 7);
      g.fillStyle = C.fg;
      g.save();
      g.translate(x0 - 9, y0 - bh / 2); g.rotate(-Math.PI / 2);
      g.textBaseline = 'bottom'; g.textAlign = 'center';
      g.fillText(fmt(b.h) + ' ' + b.hUnit, 0, 0);
      g.restore();

      /* the area is the answer in every mode except the fuse one, where the
       * missing SIDE is; so each is printed only when it is not being asked */
      g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = f(14, 700);
      var showArea = reveal || unknown === 'side';
      if (bw > 46 && bh > 26) {
        g.fillStyle = showArea ? C.fg : C.muted;
        g.fillText(showArea ? fmt(b.area) + ' ' + b.aUnit : '?',
                   x0 + bw / 2, y0 - bh / 2);
      }

      g.fillStyle = C.muted; g.font = f(12, 500);
      g.textAlign = 'center'; g.textBaseline = 'alphabetic';
      g.fillText(unknown === 'side'
        ? 'the area is fixed — drag and watch the sides trade off'
        : 'both sides are given; the area is the quantity you want',
        w / 2, h - 3);
    };

    return { destroy: stage.destroy };
  });
}(window));
