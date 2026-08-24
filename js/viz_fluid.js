/* fluidPressure — the visual the Pressure and fluids lesson had none of.
 *
 * Drag a depth marker down a vessel and watch the pressure climb with DEPTH.
 * The vessel can be switched between a straight tube, a flared tank and a
 * narrow neck, all filled to the SAME height, which is the hydrostatic paradox
 * standing there to be noticed rather than asserted.
 *
 * WHAT IT DELIBERATELY DOES NOT DO. With reveal:false the pressure number is
 * withheld and only the depth is shown, because me_hydrostatic and me_pressure
 * ask for that number. And the paradox question itself, me_pressure_shape, gets
 * no visual at all: a readout showing the same pressure under three different
 * shapes IS its answer, and after a night spent removing visuals that handed
 * over their own answers I am not adding another.
 */
(function (global) {
  'use strict';
  var K = global.QQViz.kit;
  var C = K.C, f = K.f, Stage = K.Stage;
  var controls = K.controls, readout = K.readout, button = K.button, slider = K.slider;

  global.QQViz.register('fluidPressure', function (host, api) {
    var P = (api && api.params) || {};
    var rho = P.rho != null ? P.rho : 1000;      // kg/m^3
    var g = P.g != null ? P.g : 10;
    var full = P.h != null ? P.h : 10;           // depth of liquid, metres
    var depth = P.depth != null ? P.depth : full / 2;
    var reveal = P.reveal !== false;
    var shapes = ['straight', 'flared', 'neck'];
    var shape = shapes.indexOf(P.shape) >= 0 ? shapes.indexOf(P.shape) : 0;

    var row = controls(host);
    var out = readout(host, '');
    var stage = Stage(host, 0.86);

    slider(row, { min: 0, max: full, step: full / 20, value: depth, label: 'depth' },
      function (v) { depth = v; api.onInteract('slider'); say(); });
    button(row, 'change the shape', function () {
      shape = (shape + 1) % shapes.length; api.onInteract('shape'); say();
    });

    function pressure() { return rho * g * depth; }

    function say() {
      var kpa = pressure() / 1000;
      out.innerHTML = shapes[shape] + ' vessel  ·  depth <b>' +
        (+depth.toFixed(1)) + ' m</b>' + (reveal
          ? '  ·  p = &rho;gh = <b>' + (+kpa.toFixed(0)) + ' kPa</b>'
          : '  —  change the shape and watch whether anything about the depth changes');
    }
    say();

    /* half-width of the vessel at a given fraction of the way DOWN, so each
     * shape holds liquid to the same height with a different amount in it */
    function halfWidth(t) {
      if (shapes[shape] === 'flared') return 0.30 + 0.55 * t;
      if (shapes[shape] === 'neck') return 0.85 - 0.55 * t;
      return 0.55;
    }

    stage.draw = function (g2, w, h) {
      var top = 18, bot = h - 26, span = bot - top;
      var cx = w / 2, wid = Math.min(w * 0.34, 120);
      /* the liquid, drawn as a stack of slices so any profile works */
      for (var i = 0; i < 40; i++) {
        var t0 = i / 40, t1 = (i + 1) / 40;
        var y0 = top + t0 * span, y1 = top + t1 * span;
        var hw0 = halfWidth(t0) * wid, hw1 = halfWidth(t1) * wid;
        g2.beginPath();
        g2.moveTo(cx - hw0, y0); g2.lineTo(cx + hw0, y0);
        g2.lineTo(cx + hw1, y1); g2.lineTo(cx - hw1, y1);
        g2.closePath();
        /* darker with depth, so "deeper" is visible before any number is read */
        g2.fillStyle = 'rgba(47,110,168,' + (0.35 + 0.5 * t0).toFixed(3) + ')';
        g2.fill();
      }
      /* the vessel walls */
      g2.strokeStyle = C.fg; g2.lineWidth = 2.5;
      for (var side = -1; side <= 1; side += 2) {
        g2.beginPath();
        for (var j = 0; j <= 40; j++) {
          var t = j / 40, x = cx + side * halfWidth(t) * wid, y = top + t * span;
          if (j === 0) g2.moveTo(x, y); else g2.lineTo(x, y);
        }
        g2.stroke();
      }
      /* the depth marker */
      var td = full ? depth / full : 0;
      var my = top + td * span, mhw = halfWidth(td) * wid;
      g2.strokeStyle = C.gold; g2.lineWidth = 3;
      g2.beginPath(); g2.moveTo(cx - mhw - 12, my); g2.lineTo(cx + mhw + 12, my); g2.stroke();
      g2.fillStyle = C.gold; g2.font = f(11, 700); g2.textAlign = 'left';
      g2.fillText((+depth.toFixed(1)) + ' m', cx + mhw + 16, my + 4);
      g2.fillStyle = C.muted; g2.font = f(11, 600); g2.textAlign = 'center';
      g2.fillText('same height of liquid in every shape', w / 2, h - 6);
    };
    return { destroy: stage.destroy };
  });
})(window);
