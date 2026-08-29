/* THE ANSWERS ARCHIVE — GENERATED FILE, DO NOT EDIT BY HAND.
 *
 * Written by pipeline/build_answers.py out of analytics/posts.jsonl and the
 * caption / comment / module files each posted video already has. Re-run it
 * after every post:
 *
 *     python3 pipeline/build_answers.py
 *
 * Same inputs, byte-identical output — a re-run with nothing new is a no-op.
 * Every `a` and every `why` here is quoted from this repo; nothing was
 * written for the website, so nothing here can drift from what we published.
 *
 * src: "comment" = the worked answer we posted under the video
 *      "caption" = the video's own caption
 *      "module"  = the docstring of pipeline/questions/<slug>.py, whose
 *                  verify() is what proves the number
 */
window.QQ_ANSWERS = {
 "count": 192,
 "entries": [
  {
   "slug": "it_should_fall_over",
   "title": "It should fall over",
   "ts": "2026-08-29T11:28:30+00:00",
   "date": "29 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "A push sideways moves it sideways. Gravity's push on a spinning top IS sideways.",
   "why": [
    {
     "h": "WHY IT DOES NOT FALL",
     "t": "p",
     "lines": [
      "A torque does not move a spinning object the way it points. It changes the angular momentum in the direction it points — and for a leaning top, gravity's torque points HORIZONTALLY, at right angles to the lean. So the axis moves horizontally: round in a circle, not down."
     ]
    },
    {
     "h": "THE RATE",
     "t": "pre",
     "lines": [
      "Toppling torque, with a lean of theta:      m g r sin(theta)",
      "The part of the spin that must swing:       I w sin(theta)"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    rate = m g r sin(th) / (I w sin(th)) = m g r / (I w)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Two things fall out of that and both are strange."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "**The lean cancels.** It does not matter whether the top is barely tilted or half over — it goes round at the same rate. A top about to fall swings round no faster than an upright one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "**Faster spin means SLOWER swing.** The rate has w on the bottom. For a 50 g top with its centre 20 mm up, spinning at 1800 rpm:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    rate = 0.05 x 9.81 x 0.02 / (2e-05 x 188) = 2.60 rad/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "One slow turn every 2.4 seconds, while the top itself is going round every 33.3 milliseconds — 72 times faster. As friction takes the spin away, the swing speeds up, gets wilder, and that is when it finally goes over."
     ]
    },
    {
     "h": "WHERE THIS STOPS BEING TRUE",
     "t": "p",
     "lines": [
      "The whole thing assumes the angular momentum points along the axis, which needs the spin to be much faster than the swing. Here it is 72 times faster, so that is fine. Spin it slowly and the top nods up and down as it goes round instead — a real effect, and the reason the tidy formula has a range."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When something responds at right angles to what you did to it, stop asking what it is resisting with and start asking what direction the change is pointing."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_circ_accel",
    "lesson": "p8",
    "unit": 8,
    "prompt": "A car goes round a bend of radius 25 m at a steady 10 m/s. What is its acceleration, in m/s²?"
   }
  },
  {
   "slug": "forwards_but_the_wheels_go_back",
   "title": "Forwards, but the wheels go back",
   "ts": "2026-08-29T10:43:27+00:00",
   "date": "29 Aug 2026",
   "topic": "cs_systems",
   "q": null,
   "a": "Because film does not record motion. It records 24 still pictures a second, and between two of them the wheel has moved 28 degrees — but the spokes are 30 degrees apart and identical, so nothing in the frames can tell you it went forwards 28 rather than backwards 2.",
   "why": [
    {
     "h": "WHAT THE FRAMES ACTUALLY SUPPORT",
     "t": "pre",
     "lines": [
      "    true rotation      28 deg per frame  =  1.87 turns a second, forwards",
      "    spoke spacing      30 deg",
      "    smallest reading   -2 deg per frame  =  -0.13 turns a second"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Your eye takes the smallest change that fits, because that is the only sane way to join up a sequence of stills. The film is not reversed and nothing was edited — backwards is a correct reading of the evidence. It is simply not the only one."
     ]
    },
    {
     "h": "THE WHEEL CAN ALSO STOP DEAD",
     "t": "p",
     "lines": [
      "If the wheel turns an exact whole number of spoke-spacings between frames, every frame is identical and it appears perfectly still while the cart tears along. That happens at 2, 4 and 6 turns a second for this wheel — and at no speed in between."
     ]
    },
    {
     "h": "WHY THE CART DOES NOT DO IT",
     "t": "p",
     "lines": [
      "The cart's position is not periodic. There is no second interpretation of \"it moved 40 cm\", so it cannot be misread, and it advances honestly in the very frames whose wheels are running backwards. Both readings come from the same pictures and both are right."
     ]
    },
    {
     "h": "MORE SPOKES IS WORSE",
     "t": "p",
     "lines": [
      "Misreading becomes possible as soon as the spokes pass the lens faster than half the frame rate — 12 spokes at 24 frames a second means anything above 1 turn a second is already ambiguous. A wheel with one chalk mark stays honest 12x longer."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Sampling a repeating thing too slowly does not blur it — it produces a confident, sharp, WRONG answer at a completely different frequency. Which is why a monitoring dashboard polling once a minute can miss a fault that cycles every 61 seconds and instead report a slow drift that does not exist."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "twice_the_bulb_is_not_twice_the_light",
   "title": "Twice the bulb is not twice the light",
   "ts": "2026-08-29T08:09:55+00:00",
   "date": "29 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "About 26% brighter. Not 100% — twice the bulb is nothing like twice the light.",
   "why": [
    {
     "h": "WHAT THE EYE ACTUALLY DOES",
     "t": "p",
     "lines": [
      "Sensation does not track stimulus in proportion. Brightness goes roughly as the cube root of the light: double the light and you multiply the appearance by 2^0.33, which is 1.26."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2x the light   looks 1.26x brighter",
      "    4x             looks 1.58x",
      "    8x             looks 1.99x"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "To genuinely double how bright a room looks you need about 8 times the light — sixteen 50 W bulbs where you had two."
     ]
    },
    {
     "h": "HOW SURE IS THE EXPONENT",
     "t": "p",
     "lines": [
      "Not very, and it does not matter much. Published values run about 0.3 to 0.5 depending on the conditions. At 0.5 — the most generous end — you would still need 4 times the light to double the appearance, and doubling the bulb would still only buy 41%. The conclusion does not depend on pinning the number down."
     ]
    },
    {
     "h": "WHY IT FEELS WRONG",
     "t": "p",
     "lines": [
      "Because it is the reason a second lamp disappoints, a dimmer feels oversensitive near the bottom, and one candle to two is obvious while twenty to twenty-one is invisible. All of those are the same curve."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Before assuming an effect scales with its cause, ask what is being measured at the far end. If it is a person, the scale is almost never linear."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "lg_log2",
    "lesson": "g1",
    "unit": 7,
    "prompt": "What is log₂32?"
   }
  },
  {
   "slug": "the_rust_weighs_more",
   "title": "The rust weighs more",
   "ts": "2026-08-29T05:54:03+00:00",
   "date": "29 Aug 2026",
   "topic": "chemistry",
   "q": null,
   "a": "Heavier. 10 g of nail becomes 14.30 g of rust — 43% more than it started.",
   "why": [
    {
     "h": "WHERE THE EXTRA COMES FROM",
     "t": "p",
     "lines": [
      "Red rust is Fe2O3: two iron atoms take on three oxygens. Oxygen weighs 15.999 against iron's 55.845, so per gram of iron consumed you get 1.4297 g of oxide. Nothing has been lost — three-quarters of a gram of oxygen has been added for every two grams of iron."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Corrosion looks like loss because rust flakes off and blows away. The mass leaves the NAIL. It does not leave the experiment."
     ]
    },
    {
     "h": "THE EXPERIMENT THAT SETTLES IT",
     "t": "p",
     "lines": [
      "Lavoisier's version: seal the whole thing in a jar and weigh the jar. The total changes by exactly 0.0 g. The nail gains 4.30 g and the air inside loses the same 4.30 g, because the oxygen was in the jar all along."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The 43% only appears when you weigh the nail and quietly leave one of the reactants off the scales."
     ]
    },
    {
     "h": "WHICH OXIDE MATTERS",
     "t": "p",
     "lines": [
      "Get the formula wrong and the answer changes:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    FeO      x 1.286",
      "    Fe3O4    x 1.382",
      "    Fe2O3    x 1.430   <- ordinary red rust"
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When something appears to lose mass, check whether the thing it reacted with was ever on the scales. Most \"losses\" are a boundary drawn around part of a system."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "twice_the_ice_four_times_the_load",
   "title": "Twice the ice, four times the load",
   "ts": "2026-08-29T05:02:09+00:00",
   "date": "29 Aug 2026",
   "topic": "materials",
   "q": null,
   "a": "Four times. The load goes as the SQUARE of the thickness, not in step with it.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The working rule for clear ice is Gold's:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    safe load in kg = 3.5 x (thickness in cm)^2"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    5 cm    88 kg    one person, and not with any margin",
      "    10 cm   350 kg   a small group",
      "    15 cm   788 kg   a quad bike",
      "    20 cm  1400 kg   a small car"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the honest question is never \"is the ice thick enough\" but \"thick enough for what\". Going from 5 cm to 10 cm does not double what it holds; it quadruples it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY SQUARED. The ice is a floating plate and it fails by BENDING, not by crushing or by running out of buoyancy. A plate's resistance to bending rises with the square of its thickness, for the same reason a plank on edge is stiffer than one laid flat: the material furthest from the middle does the most work, and thickening the plate moves more material further out."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE PART THAT CATCHES PEOPLE OUT. Buoyancy is not the mechanism. A 5 cm sheet displaces plenty of water to float a person — it simply breaks first. Reasoning from flotation gives an answer that is far too optimistic and the wrong shape."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE TRANSFERABLE MOVE. When something carries load by bending — ice, a plank, a beam, a phone screen — expect thickness to appear squared, and check the exponent before trusting a rule of thumb. Half the thickness is a quarter of the strength."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "ma_cantilever",
    "lesson": "p9",
    "unit": 8,
    "prompt": "A diving board dips a certain amount with someone standing on the end. Replace it with a board of the same width and thickness but TWICE the length. How much further does the end dip, with the same person on it?"
   }
  },
  {
   "slug": "the_charged_one_is_heavier",
   "title": "The charged one is heavier",
   "ts": "2026-08-28T20:21:25+00:00",
   "date": "28 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "The charged one. Energy has mass, and you put energy into it.",
   "why": [
    {
     "h": "WHAT CHARGING ACTUALLY DOES",
     "t": "p",
     "lines": [
      "It does not add atoms. It moves lithium ions from one electrode to the other and leaves them somewhere higher. Same atoms, same count, more energy."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Energy and mass are not two things that convert into each other. They are the same quantity in different units, and the conversion factor is c^2:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    dm = E / c^2"
     ]
    },
    {
     "h": "HOW MUCH",
     "t": "p",
     "lines": [
      "A 4,000 mAh cell at 3.85 V holds 55,440 joules, so"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    dm = 55,440 / (299,792,458)^2 = 6.17e-13 kg"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is about 617 picograms — 1.4e-11 of the cell's own mass. The best mass comparators ever built resolve around a tenth of a microgram, so this sits about 162 times below anything anyone can weigh. You would need 1.62e+09 full charges to put on one gram."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A hot cup of tea is the same story: 250 g of water, 80 degrees hotter, is heavier by 932 picograms."
     ]
    },
    {
     "h": "WHY IT MATTERS ANYWAY",
     "t": "p",
     "lines": [
      "Because it is not a rounding error everywhere. A proton is made of two up quarks and a down quark, and those three weigh 8.99 MeV against the proton's 938.3 — about 1.0% of it. The other 99% is the energy of the field binding them."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Mass is not a count of stuff. Nearly all of yours is energy. The battery result is the same physics with the effect too small to see, which is the only reason it sounds strange."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_cap_energy",
    "lesson": "e5",
    "unit": 10,
    "prompt": "That same 100 µF capacitor at 12 V. How much energy does it store, in millijoules?"
   }
  },
  {
   "slug": "four_times_the_readings",
   "title": "Four times the readings",
   "ts": "2026-08-28T19:11:54+00:00",
   "date": "28 Aug 2026",
   "topic": "statistics",
   "q": null,
   "a": "Half. Four times the readings buys a factor of two, not a factor of four.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The spread of an average falls as one over the square root of the count:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    error(n) = error(1) / sqrt(n)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So n = 4 gives 1/2, n = 9 gives 1/3, and n = 100 gives 1/10. To cut an error by ten you do a hundred times the work; to cut it by a hundred, ten thousand times."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS THE SQUARE ROOT. The noise in each reading is independent, so the VARIANCES add rather than the errors. Averaging n of them divides the summed variance by n squared and multiplies it by n, leaving variance/n — and error is the square root of variance, so it falls as one over root n."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT IT MEANS IN PRACTICE. Repeating a measurement is the most expensive way to buy precision there is, and it gets worse the more you buy. That is why an experimentalist facing an error bar twice too large looks first for a better instrument, a longer lever arm or a nulling method, and only then reaches for more repeats."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The useful habit: before you agree to take more data, work out the exponent. If the thing you want is a factor of ten, root-n says you have just signed up for a hundred times the work."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_specific_heat",
    "lesson": "h1",
    "unit": 9,
    "prompt": "How much energy does it take to warm 2 kg of water by 30 °C? Water's specific heat capacity is 4200 J/kg°C. Give your answer in kilojoules."
   }
  },
  {
   "slug": "more_salt_stops_helping",
   "title": "More salt stops helping",
   "ts": "2026-08-28T18:31:47+00:00",
   "date": "28 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "Nothing. Below about -21 C the road stops responding and more salt is just salt.",
   "why": [
    {
     "h": "WHY MORE USUALLY WORKS",
     "t": "p",
     "lines": [
      "Dissolved salt lowers water's freezing point by 2 x 1.86 x the molality — two, because each unit of salt becomes two ions, and each of them counts. A modest 1 mol/kg brine already freezes at -3.7 C."
     ]
    },
    {
     "h": "WHY IT STOPS",
     "t": "p",
     "lines": [
      "Water will only hold about 6.1 mol/kg of salt. Past that the brine is saturated and the next shovelful does not dissolve; it sits on the road as salt. So the lowest reachable temperature is set by the solubility, not by how much is spread, and it is a property of the two substances."
     ]
    },
    {
     "h": "WHERE THE SIMPLE SUM IS WRONG, AND BY HOW MUCH",
     "t": "p",
     "lines": [
      "Run the formula to saturation and it predicts -22.7 C. The measured eutectic is -21.1 C — a gap of 1.6 degrees, about 8%."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That gap is not sloppiness, it is the assumption failing. The law treats every ion as independent, and in a saturated brine they are crowded enough to pair up and partly screen each other, so the effective number of particles is a little under two. An ideal law overshooting slightly at high concentration is exactly what you should expect."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When a remedy scales with a dose, find what limits the dose. It is usually not the budget, and the ceiling it sets is often the whole answer."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_latent",
    "lesson": "h1",
    "unit": 9,
    "prompt": "How much energy does it take to melt 0.5 kg of ice that is already at 0 °C? The latent heat of fusion is 334 kJ/kg. Give your answer in kilojoules."
   }
  },
  {
   "slug": "the_wing_lesson_is_wrong",
   "title": "The wing lesson is wrong",
   "ts": "2026-08-28T17:47:18+00:00",
   "date": "28 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "It is short by a factor of 15. The wing holds the aircraft up by throwing air downwards.",
   "why": [
    {
     "h": "MEASURE THE TWO SURFACES",
     "t": "p",
     "lines": [
      "Take the NACA 2412 section — the one on a Cessna 172 — and integrate each surface from its published definition:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    upper   1.0281 chords",
      "    lower   1.0135 chords",
      "    ratio   1.0144"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the top is 1.4% longer. Not 30%, not 10%."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If the two parcels really did have to meet up, speed would scale with path length, and Bernoulli would give"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    dp = 0.5 * rho * V^2 * (ratio^2 - 1) = 44.4 Pa"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Over 16.2 m^2 of wing that is 720 N of lift. The aeroplane weighs 10,899 N. The classroom explanation delivers **6.6%** of what is needed."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "It is also false as physics: air over the top arrives at the trailing edge EARLIER than air underneath, not at the same time. Nothing requires two parcels that separated to meet again. Aerofoils fly upside down, and a flat plate at an angle flies perfectly well with two identical surfaces."
     ]
    },
    {
     "h": "WHAT ACTUALLY HOLDS IT UP",
     "t": "p",
     "lines": [
      "The wing turns a large mass of air downwards every second, and the reaction is lift. Roughly, it works on a cylinder of air its own span across:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    air handled   5,821 kg every second",
      "    pushed down   1.9 m/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the whole aeroplane, from one line of momentum bookkeeping."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "An explanation that names the right quantities can still be wrong. Put numbers in it. Being made of correct-sounding physics is not the same as coming out to the right size."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_lift",
    "lesson": "p2",
    "unit": 8,
    "prompt": "A 50 kg person stands in a lift accelerating upward at 2 m/s², g = 10. What is the normal reaction force, in newtons?"
   }
  },
  {
   "slug": "a_charger_that_takes_230_and_gives_12",
   "title": "A charger that takes 230 and gives 12",
   "ts": "2026-08-28T15:52:29+00:00",
   "date": "28 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT 9.6 AMPS — nearly twenty times MORE than went in.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    in     230 V x 0.5 A  =  115 W",
      "    out    115 W / 12 V   =  9.58 A"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    volts came down by 19.2 times",
      "    amps went UP by 19.2 times"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. A transformer does not conserve current, it conserves POWER. Whatever the wall hands over, the charger hands on, minus a little heat. So if the voltage is divided by nineteen, the current has to be multiplied by nineteen for the product to survive. Step-down in volts is step-UP in amps, always, and that is why the thin cable goes to the wall and the fat one goes to the phone."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"0.026 A\" IS THE TRAP. It divides the current by 19.2 as well, because \"step-down\" sounds like a property of the whole device. But if both halves fell by nineteen, the power out would be 115/368 of a watt — the charger would be delivering almost nothing, and your phone would never charge."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"HALF AN AMP, THE SAME\" IS THE OTHER GOOD WRONG ANSWER. It treats the transformer as a pipe with current running through it. Nothing runs through: the two coils are not connected to each other at all. What crosses the gap is a changing magnetic field, and the current on the far side is generated afresh. That is also why a transformer does nothing on DC — a steady field induces nothing, which is the whole reason the grid is alternating."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SANITY CHECK WORTH KEEPING. Multiply the volts by the amps on each side. If the two products do not match, you have made an error somewhere, because that product is the thing the device is preserving."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_transformer",
    "lesson": "e6",
    "unit": 10,
    "prompt": "A transformer has 100 turns on the primary and 20 on the secondary. The primary is on 230 V. What is the secondary voltage, in volts?"
   }
  },
  {
   "slug": "nothing_to_push_against",
   "title": "Nothing to push against",
   "ts": "2026-08-28T15:10:24+00:00",
   "date": "28 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "It never pushes on anything. It changes shape, and a cyclic change of shape turns you.",
   "why": [
    {
     "h": "THE BOOKKEEPING",
     "t": "p",
     "lines": [
      "Angular momentum is conserved, and you are floating with none of it. That does NOT mean you cannot turn. It means the total must stay zero:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I_body * psi' + I_limb * (psi' + phi' cos b) = 0"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Sweep the limb round a cone and the body must counter-rotate to keep the sum at zero. After one full sweep the limb is back where it started — but the body is not:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    net body turn = -50.9 degrees per sweep, for I_limb/I_body =",
      "    0.25 and a cone half-angle of 45 degrees"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Repeat it and it accumulates. About 3.5 sweeps gets you through half a turn, and you are facing the other way — having pushed on nothing."
     ]
    },
    {
     "h": "WHY THIS IS NOT THE ICE SKATER",
     "t": "p",
     "lines": [
      "Pulling your arms in makes you spin FASTER because momentum was already there. Here there is none, and speed is irrelevant: run the same sweep slowly or in a violent jerk and the answer is identical to six decimal places. What determines the turn is the PATH the shape takes, not the timing. A cone that encloses nothing — the limb swung flat through the axis — gives exactly zero however hard it is swung."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the signature of a geometric effect. The rotation is a property of the loop in shape space, the same way the direction a pendulum swings depends on the loop the earth carried it round."
     ]
    },
    {
     "h": "THIS IS HOW A CAT DOES IT",
     "t": "p",
     "lines": [
      "A cat dropped upside down has no angular momentum either, and lands on its feet anyway. It bends at the waist and turns its front and back halves about slightly different axes, twice per fall. Front first, then back. It is not a tail trick — cats born without one manage perfectly well. Astronauts are taught the same move."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "\"Conserved\" does not mean \"stuck\". Look for what you can change that the conservation law does not pin down."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_ke_conserved",
    "lesson": "p3",
    "unit": 8,
    "prompt": "Kinetic energy is conserved when two objects stick together in a collision."
   }
  },
  {
   "slug": "the_sand_burns_the_sea_is_freezing",
   "title": "The sand burns, the sea is freezing",
   "ts": "2026-08-28T11:41:19+00:00",
   "date": "28 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "BECAUSE WATER IS ASTONISHINGLY HARD TO HEAT — and then three other things pile on top.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    dry sand   about  800 J to raise a kilogram by one degree",
      "    water           4,182 J to do the same"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Same energy in, and the sand climbs 5.2 times as far. Put 100 kJ into a kilogram of each and the sand rises 125 °C while the water rises 24."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That factor alone would settle it, but the sea has three more advantages and none of them is specific heat:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  IT MIXES. Waves and currents carry warmed surface water down and bring cold",
      "  water up, so the energy is shared through metres of depth. The sand cannot",
      "  stir itself, so everything lands in the top centimetre or two — which is",
      "  exactly the bit your foot touches."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  IT IS TRANSPARENT. Sunlight goes several metres into water before it is",
      "  absorbed. It stops dead at the surface of sand."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  IT EVAPORATES. Every gram that leaves takes about 2,260 J with it, which is",
      "  the heat you would need to cool 540 grams of water by a whole degree. The sea",
      "  is running an enormous evaporative cooler on itself all day."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"THE SEA IS DEEPER\" IS THE GOOD WRONG ANSWER. It is true, and it is one of the four. But a shallow tray of water beside a tray of sand behaves the same way, so depth cannot be the whole story."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"SAND IS DARKER\" IS THE INTERESTING ONE. Colour does matter — but dry pale sand is LIGHTER than the sea, and the ocean is one of the darkest surfaces on Earth. The sea absorbs MORE of the sunlight landing on it and still ends up colder. That is worth sitting with for a moment."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE ELSE THIS SHOWS UP. It is why coasts have mild winters and mild summers while the middle of a continent bakes and freezes, why a hot water bottle beats a hot brick of the same mass, and why the sea is at its warmest in September rather than in June — it is still catching up with a summer that has already ended."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_specific_heat",
    "lesson": "h1",
    "unit": 9,
    "prompt": "How much energy does it take to warm 2 kg of water by 30 °C? Water's specific heat capacity is 4200 J/kg°C. Give your answer in kilojoules."
   }
  },
  {
   "slug": "five_tonnes_of_air_to_lift_one",
   "title": "Five tonnes of air to lift one",
   "ts": "2026-08-28T10:59:15+00:00",
   "date": "28 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "About 19 metres across — a sphere the height of a six-storey building.",
   "why": [
    {
     "h": "WHY SO BIG",
     "t": "p",
     "lines": [
      "Heating air does not make it much lighter. At 20 C air is 1.204 kg per cubic metre; at 100 C it is 0.946. That is a drop of only 21%, so each cubic metre of envelope lifts 258 grams — about the weight of an apple."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A tonne therefore needs 3,874 cubic metres, which as a sphere is 19.5 m across."
     ]
    },
    {
     "h": "THE NUMBER THAT MAKES IT MAKE SENSE",
     "t": "p",
     "lines": [
      "That envelope is holding 3,664 kg of hot air in order to lift 1,000 kg of basket. Nearly five tonnes of air to carry one — and the air weighs so much more than the load that the whole thing only works because the air OUTSIDE weighs slightly more still."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Buoyancy is never about the thing being light. It is about the difference between two large numbers, and hot air makes that difference small."
     ]
    },
    {
     "h": "WHY NOT JUST GET IT HOTTER",
     "t": "p",
     "lines": [
      "Density falls as 1/T in kelvin, so the returns shrink fast. Going from 100 C to 200 C would only get the lift per cubic metre to 458 grams, and nylon envelopes soften long before that. The size is not a design failure; it is what the physics costs."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When an effect depends on a difference between two nearly equal quantities, expect to need an enormous amount of the thing to get a useful result."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_upthrust",
    "lesson": "p6",
    "unit": 8,
    "prompt": "An object of volume 2 litres is held completely under water. Taking ρ = 1000 kg/m³ and g = 10, what upthrust acts on it, in newtons?"
   }
  },
  {
   "slug": "the_moon_goes_round_every_month",
   "title": "The Moon goes round every month",
   "ts": "2026-08-28T09:30:37+00:00",
   "date": "28 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "BECAUSE THE MOON'S ORBIT IS TILTED, and by far more than it sounds.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The tilt is only about 5°, which seems like nothing. But the Moon is 384,400 km away, and a small angle at that range is an enormous distance:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    384,400 x sin(5.1°)  =  about 34,000 km"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "off the Sun-Earth line, at most. The Earth's radius is 6,371 km. So the Moon can sit more than FIVE EARTH RADII above or below the line — the shadow does not graze the edge of the planet, it misses into empty space entirely."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE FLAT PICTURE IS SO CONVINCING. Every diagram you have ever seen, this one included, draws the orbit edge-on and flat, because that is the only way to fit it on a page. Drawn flat, an eclipse every month is not a mistake — it is what the picture actually shows. The error is in the picture, not in the reasoning."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHEN IT DOES LINE UP. The tilted orbit crosses the flat one at two points, the NODES. Only when a new moon happens near a node does the shadow land, and that lines up roughly twice a year — which is why eclipse seasons exist and are spaced about six months apart."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"YOU JUST HAVE TO BE IN THE RIGHT PLACE\" IS THE GOOD WRONG ANSWER. It is true of the eclipses that DO happen: totality falls on a track about 100 km wide, so almost everybody misses almost all of them. But on the other months there is nowhere on Earth to stand, because the shadow never touches it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND THE COINCIDENCE NOBODY ASKED FOR. The Sun is about 400 times wider than the Moon and about 400 times further away, so they appear almost exactly the same size in the sky — 32.0 arcminutes against 31.1. That is why totality is possible at all, and it is pure luck of timing: the Moon is drifting away, and in the far future there will be no total eclipses left."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "tr_soh",
    "lesson": "t1",
    "unit": 5,
    "prompt": "A right-angled triangle has hypotenuse 10 and an angle of 30°. How long is the side opposite that angle?"
   }
  },
  {
   "slug": "turn_the_plank_on_its_edge",
   "title": "Turn the plank on its edge",
   "ts": "2026-08-28T08:48:58+00:00",
   "date": "28 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "Because bending stiffness grows with the CUBE of a beam's depth and only linearly with its width. Turning the plank swaps those two numbers over.",
   "why": [
    {
     "h": "THE QUANTITY THAT MATTERS",
     "t": "p",
     "lines": [
      "For a rectangle of width b and depth d, resistance to bending is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I = b x d^3 / 12"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Depth is cubed because fibres far from the centre stretch further, and each one resists in proportion to how far out it sits — one factor of d for how much it stretches, one for the leverage it acts through, and one for how many fibres are out there."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A 50 x 200 plank, both ways round:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    on edge   I = 50 x 200^3 / 12 = 33,300,000 mm^4",
      "    flat      I = 200 x 50^3 / 12 =  2,080,000 mm^4"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "a ratio of exactly (200/50)^2 = 16."
     ]
    },
    {
     "h": "WHAT THAT IS IN MILLIMETRES",
     "t": "p",
     "lines": [
      "Over a 4 m span with 100 kg hung in the middle, sag is 62.8 mm lying flat and 3.9 mm on edge. Same timber, same weight of wood, same load. The only thing that changed is which way up it is."
     ]
    },
    {
     "h": "TWO LAWS, OFTEN CONFUSED",
     "t": "pre",
     "lines": [
      "    double the DEPTH  -> 8x stiffer   (d cubed)",
      "    double the WIDTH  -> 2x stiffer   (b linear)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Which is why you buy a deeper joist rather than a wider one, and why an I-beam throws almost all its steel to the top and bottom and leaves a thin web in the middle. The middle is doing almost nothing."
     ]
    },
    {
     "h": "STIFFNESS IS NOT STRENGTH",
     "t": "p",
     "lines": [
      "Before it breaks rather than bends, the relevant quantity is the section modulus, bd^2/6 — a SQUARE, not a cube. So the same rotation gives 16x the stiffness but only 4x the strength. Confusing the two is how people over-trust a deep thin beam."
     ]
    },
    {
     "h": "WHY YOU CANNOT JUST KEEP GOING",
     "t": "p",
     "lines": [
      "A tall thin beam on edge stops failing by bending and starts failing by twisting sideways. That is why joists carry noggings between them: not to help them hold weight, but to stop them falling over."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When a quantity depends on a power, spend your budget on the term with the highest exponent. The same reasoning puts the material in the flanges of a beam, the mass at the rim of a flywheel, and the diameter ahead of the wall thickness in any tube."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "ma_cantilever",
    "lesson": "p9",
    "unit": 8,
    "prompt": "A diving board dips a certain amount with someone standing on the end. Replace it with a board of the same width and thickness but TWICE the length. How much further does the end dip, with the same person on it?"
   }
  },
  {
   "slug": "the_flash_is_instant_the_rumble_is_not",
   "title": "The flash is instant, the rumble is not",
   "ts": "2026-08-28T08:07:46+00:00",
   "date": "28 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "BECAUSE THE BOLT IS KILOMETRES LONG, and you are hearing different parts of it arrive one after another.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every part of the channel explodes at the same moment. But the sound has to travel to you from each part, and those parts are at very different distances. A bolt three kilometres long spreads its own thunder over:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    3,000 m / 343 m/s  =  about 9 seconds"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the rumble, and it comes from the LENGTH of the bolt rather than from anything happening after it. The near end reaches you first as a sharp crack; the far end arrives seconds later as a low roll, softened by having travelled further through the air."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE FLASH DOES NOT DO THIS. The light from the far end is behind the light from the near end too — by ten MICROseconds. Nothing in your eye or your brain resolves that, so the flash looks like one instant event. The light and the sound cover the same length of bolt; one of them takes almost a million times longer to do it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"ECHOES\" IS THE RESPECTABLE WRONG ANSWER. Echoes are real. Hills and the underside of the cloud layer do stretch thunder out, and in a valley they dominate. But you hear a long rumble over flat open water with nothing to echo off, and the reason is the bolt's own length."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"IT IS JUST FADING\" IS NOT IT EITHER. A single bang fading away gets steadily quieter and keeps its character. Thunder does not — it changes as it rolls, cracking, then booming, then grumbling, because each moment of it is sound from a different piece of the channel arriving in turn."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE THING WORTH REMEMBERING. A close strike goes CRACK because the whole channel is at roughly the same distance from you. A distant one goes BOOM and rumbles, because the geometry has spread it out. The character of the thunder is telling you about the SHAPE and the distance of the bolt, not its power."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_wavelength",
    "lesson": "w1",
    "unit": 11,
    "prompt": "Sound travels at 340 m/s. What is the wavelength of a 170 Hz note, in metres?"
   }
  },
  {
   "slug": "heat_the_bar_until_it_is_white",
   "title": "Heat the bar until it is white",
   "ts": "2026-08-28T07:27:09+00:00",
   "date": "28 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "IN THE INFRARED, AT ABOUT 1160 NANOMETRES — well past the red end of what any eye can see. A bar hot enough to look WHITE is still sending most of its energy where you cannot follow it.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE NUMBER. Wien's displacement law says the brightest wavelength is 2.898 millimetre-kelvin divided by the temperature. For a bar at 2500 K:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    peak = 2.898e-3 / 2500  =  1.16 micrometres  =  1160 nm"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The eye stops at about 750 nm. The peak is not near the edge of vision — it is half as far again beyond it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT LOOKS WHITE ANYWAY. White is not what you see when the peak is in the middle of the visible band. It is what you see when the visible band is lit FAIRLY EVENLY — and that happens on the long shoulder of the curve running down from a peak that is somewhere else entirely. You are seeing the tail, not the summit, and the tail is flat enough across red, green and blue to read as white."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1000 K   dull red        peak 2900 nm     infrared",
      "    1700 K   yellow          peak 1700 nm     infrared",
      "    2500 K   white           peak 1160 nm     infrared",
      "    5772 K   the Sun         peak  502 nm     visible, blue-green"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every glowing thing you have ever watched cool has had its peak in the infrared the whole time. The Sun is the first one on that list whose peak you can actually see, and even the Sun looks white rather than blue-green — for exactly the same reason the bar does."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND WHY NOTHING EVER GLOWS BLUE FIRST. The peak does march towards the blue as things get hotter. It reaches 450 nm at about 6400 K — hotter than the surface of the Sun. But anything that hot is radiating hard across the entire visible band, so it looks white long before it could ever look blue. Blue-hot is not a stage before white-hot; it is white-hot with the balance tipped, which is why a gas flame's blue comes from something else entirely."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT THIS COSTS IN PRACTICE. An old filament lamp runs near 2800 K, which is why roughly nine tenths of its energy leaves as heat rather than light. Nothing was wrong with the bulb. You were asking a hot object to be a lamp, and a hot object puts its peak in the infrared."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_wien_peak",
    "lesson": "h3",
    "unit": 9,
    "prompt": "A lamp filament sits at 2900 K. Taking Wien's constant as 2.9 × 10⁻³ m·K, at what wavelength does it radiate most strongly? Give your answer in nanometres."
   }
  },
  {
   "slug": "a_skater_on_a_blade_of_steel",
   "title": "A skater on a blade of steel",
   "ts": "2026-08-28T06:43:31+00:00",
   "date": "28 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT TWO AND A HALF DEGREES. Which is not enough, and that is the whole point — the textbook explanation for skating is wrong.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    contact area   0.20 m x 0.0001 m  =  20 mm²",
      "    pressure       70 x 9.81 / 20 mm² =  34 MPa, about 340 atmospheres",
      "    melting point  shifts by           -2.5 °C"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Three hundred and forty atmospheres is a genuinely enormous pressure. And it buys you two and a half degrees."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THAT KILLS THE STORY. People skate at -10 °C. They skate in Siberia at -30. At -10 the ice under the blade is still seven degrees below its melting point even with the skater standing on it, and nothing melts at all. To melt ice at -10 by pressure alone you would need about 1,300 atmospheres — four times what a skater can manage, and a heavier skater on a sharper blade does not get you there either."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "SO WHY IS ICE SLIPPERY? Two reasons, neither of them pressure."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  THE SURFACE IS ALREADY LIQUID-ISH. Ice carries a disordered, mobile layer a",
      "  few molecules thick on its outside, and it is there well below freezing,",
      "  whether or not anything is pressing on it. It is a property of the surface",
      "  rather than of the load."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  AND RUBBING WARMS IT. A moving blade heats the contact by friction and grows",
      "  that layer. This is why skating is easier once you are moving than when you",
      "  are standing still — a fact the pressure story cannot explain at all, since",
      "  standing still is when the pressure is highest."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"IT IS NOT HEAVY ENOUGH\" IS THE RIGHT ANSWER FOR THE WRONG REASON. The pressure is not small. What is small is how weakly ice's melting point responds to it: about 0.0074 °C per atmosphere. Water is unusual in melting at a LOWER temperature under pressure at all — almost everything else goes the other way — and even for water the effect is feeble."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_latent",
    "lesson": "h1",
    "unit": 9,
    "prompt": "How much energy does it take to melt 0.5 kg of ice that is already at 0 °C? The latent heat of fusion is 334 kJ/kg. Give your answer in kilojoules."
   }
  },
  {
   "slug": "a_ping_and_its_echo",
   "title": "A ping and its echo",
   "ts": "2026-08-28T05:59:51+00:00",
   "date": "28 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "THREE HUNDRED METRES.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    the sound went down AND came back, so it travelled for 0.40 s in total",
      "    distance travelled = 1500 x 0.40 = 600 m",
      "    that is DOWN AND BACK, so the depth is half of it = 300 m"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY 600 IS THE COMMONEST ANSWER. It is the distance the sound covered, and the question asks for the depth. Every echo problem ever set has this same trap in it, and it catches people who did the physics correctly and then answered a different question. Read the last line of the question again before you write the number down — that is the whole defence."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY 68 METRES IS THE MORE INTERESTING MISTAKE. It comes from using 340 m/s, the speed of sound in AIR, because that is the number everyone has memorised. Sound in seawater travels at about 1500 m/s — more than FOUR TIMES faster."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That surprises people, because the instinct is that a denser medium should slow a wave down. It does the opposite. Sound is a wave of squeezing, and it moves at a speed set by how STIFF the medium is against how dense it is. Water is far harder to compress than air — enormously so — and that stiffness wins easily against the extra density."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    air         340 m/s",
      "    seawater   1500 m/s",
      "    steel      5000 m/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Steel is denser again, and faster again, for the same reason."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE IT MATTERS. This is how every depth sounder on every boat works, how ships find each other, and how a sonographer sees a baby — the same arithmetic, with the round trip halved, at frequencies too high to hear."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_wavelength",
    "lesson": "w1",
    "unit": 11,
    "prompt": "Sound travels at 340 m/s. What is the wavelength of a 170 Hz note, in metres?"
   }
  },
  {
   "slug": "a_jet_at_twice_the_speed_of_sound",
   "title": "A jet at twice the speed of sound",
   "ts": "2026-08-28T05:11:42+00:00",
   "date": "28 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT 17 KILOMETRES PAST YOU — far beyond where you would think to look, and still going.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The shock is a CONE trailing the aircraft, and its half-angle depends only on the Mach number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    sin θ  =  1 / M  =  1 / 2      so  θ  =  30°"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The cone touches the ground at the point where that 30° line from the aircraft reaches it. With the jet 10 km up:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    distance behind  =  10 / tan 30°  =  17.3 km"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"RIGHT OVERHEAD\" IS THE INSTINCT. It is what every other loud thing does. But sound needs about thirty seconds to fall ten kilometres, and a jet at Mach 2 covers roughly twenty kilometres in that time. You are not hearing where it is; you are hearing where it was, and it has moved a very long way since."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"WHERE IT BROKE THE BARRIER\" IS THE MISCONCEPTION WORTH KILLING. There is no bang at that moment, and no single place where it happens. The cone exists for as long as the aircraft is supersonic and is dragged along with it, sweeping the ground like the wake behind a boat. Everyone under the flight path hears one bang, at their own moment, as the cone passes over them. A jet that stays supersonic for an hour lays down an hour's worth of boom in a strip across the country."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ANGLE IS THE SPEEDOMETER. Faster means a narrower cone and a longer wait:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    Mach 1.2   cone 56°   heard  6.6 km behind",
      "    Mach 1.5   cone 42°   heard 11.2 km behind",
      "    Mach 2     cone 30°   heard 17.3 km behind",
      "    Mach 3     cone 20°   heard 28.3 km behind"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "At exactly Mach 1 the angle is 90° — the shock is a flat wall travelling with the aircraft, which is the only sense in which there is a \"barrier\" at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND NOTE WHAT IS MISSING FROM THE SUM. The speed of sound never appears. It cancels, which is why the answer is the same on a freezing day and a hot one, even though the aircraft's actual speed is quite different in each."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "tr_tan_angle",
    "lesson": "t1",
    "unit": 5,
    "prompt": "A ladder reaches 4 m up a wall with its foot 3 m out. What angle does it make with the ground, in degrees, to the nearest degree?"
   }
  },
  {
   "slug": "a_bird_on_the_high_voltage_line",
   "title": "A bird on the high voltage line",
   "ts": "2026-08-27T20:25:11+00:00",
   "date": "27 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT TWO AND A HALF THOUSANDTHS OF A VOLT. Not four hundred thousand — two and a half millivolts.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    cable between the feet   5 cm of conductor  =  0.0000025 ohms",
      "    line current             1,000 A",
      "    p.d. across the bird     1,000 x 0.0000025  =  0.0025 V",
      "    current through the bird 0.0025 / 10,000    =  0.25 microamps"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "You can feel about a milliamp. This is four thousand times below that."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE 400,000 VOLTS DOES NOT MATTER. Because a voltage is always a DIFFERENCE between two points, and the bird only ever touches one thing. Both of its feet are at four hundred thousand volts, and it is the difference BETWEEN them that pushes a current through the bird — which is whatever appears along five centimetres of thick aluminium carrying the line current. That is almost nothing, because the cable is an excellent conductor. It is designed to be."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The bird is not insulated from the line. It is at exactly the line's potential, which is a completely different thing and a far safer one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"IT IS SAFE BECAUSE IT IS NOT EARTHED\" IS THE RIGHT ANSWER FOR THE WRONG REASON. It reaches the right verdict by a rule that fails when it matters. A large bird whose wings bridge two conductors of a three-phase set is killed instantly, and never goes anywhere near the ground: those two conductors sit at different potentials, and the difference across the bird is then enormous. This is why raptors are killed on distribution poles far more often than small birds, and why utilities widen the spacing on pylons in raptor country."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The rule that survives both cases is the one about difference, not the one about earth."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SAME PHYSICS, DELIBERATELY. A lineman working live is raised to the conductor's potential first, in a bonded suit, and then works on a live 400 kV line with bare hands. Being at a high potential is safe. Being between two different ones is not."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_bird_line",
    "lesson": "e1",
    "unit": 10,
    "prompt": "A bird can perch on a single high-voltage line unharmed because there is almost no potential difference between its feet."
   }
  },
  {
   "slug": "a_bar_of_chocolate_in_the_microwave",
   "title": "A bar of chocolate in the microwave",
   "ts": "2026-08-27T19:43:37+00:00",
   "date": "27 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT 6 CENTIMETRES — 6.1 cm, to be exact.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    wavelength  =  c / f  =  3.0 x 10⁸ / 2.45 x 10⁹  =  12.2 cm",
      "    hot spots sit at the ANTINODES, one every HALF wavelength",
      "    spacing  =  12.2 / 2  =  6.1 cm"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THERE IS A PATTERN AT ALL. The oven is a metal box, and metal reflects microwaves. The wave bounces back on itself and interferes with its own reflection, which is a standing wave — fixed places where the field is always huge and fixed places where it is always nearly nothing. The chocolate melts where the field is huge. That is the entire reason a microwave has a turntable: not to cook evenly by magic, but to drag the food through a pattern that will not move."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY 12 CM IS THE GOOD WRONG ANSWER. It is the wavelength, and it is the right number to have worked out — it just is not the spacing. Antinodes come twice per wavelength, once at each bulge of the wave, so they are half a wavelength apart. The same factor of two catches people on strings and organ pipes."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "NOW TURN IT ROUND, BECAUSE THIS IS THE GOOD PART. Measure the gap between the melted patches yourself, multiply by two to get the wavelength, and multiply by the frequency written on the back of the oven:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    c  =  2 x 0.0612 m x 2.45 x 10⁹ Hz  =  3.00 x 10⁸ m/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the speed of light, to three significant figures, from a bar of chocolate and a ruler. It is a real measurement and not a trick: the same standing wave that ruins your reheating is a metre rule laid against the electromagnetic spectrum."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT TO ACTUALLY DO. Take the turntable out, lay the bar flat, and give it about twenty seconds — you want soft patches, not a puddle. The gaps are clearest on a wide thin bar."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_speed",
    "lesson": "w1",
    "unit": 11,
    "prompt": "A wave has frequency 50 Hz and wavelength 6 m. What is its speed, in m/s?"
   }
  },
  {
   "slug": "it_sits_over_one_spot_all_day",
   "title": "It sits over one spot all day",
   "ts": "2026-08-25T17:35:16+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT 3,075 METRES PER SECOND — roughly 11,000 km/h, which is around nine times the speed of sound.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    orbit radius       42,164 km from the Earth's CENTRE",
      "    one lap            23 h 56 min (a sidereal day, not 24 h)",
      "    speed = 2πr / T    = 3,075 m/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"ZERO\" IS THE ANSWER THE WORD INVITES. Geostationary means stationary with respect to THE GROUND, and to nothing else. The satellite and the dish pointing at it are both being carried round by the same rotation; neither is standing still in any other sense. If it really were motionless it would fall straight down, because nothing is holding it up — it stays up by moving sideways fast enough to keep missing."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY 465 M/S IS THE CLEVER ANSWER, AND WHAT IT DROPS. It is the speed of the equator itself, and the reasoning behind it is right: same angular speed, one lap a day, which is exactly why the satellite keeps station. What it drops is the radius. The satellite goes round a circle 6.6 times bigger in the very same time:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    the equator          6,371 km   ->    465 m/s",
      "    the satellite       42,164 km   ->  3,075 m/s",
      "    ratio                42,164 / 6,371 = 6.62"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Same angular speed, six and a half times the distance, six and a half times the speed."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE SIDEREAL DAY. The satellite must keep pace with the Earth's rotation relative to the stars, not to the Sun, and those differ by about four minutes a day because the Earth is also going round the Sun. Using 24 hours instead puts the orbit 77 km too high — small, but it is the difference between holding station and drifting slowly out of position."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT IT COSTS TO BE UP THERE. Thirty-six thousand kilometres is far: the round trip for a signal is about a quarter of a second, which is why a satellite phone call has that pause in it, and why nobody plays a fast game over one."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_orbit_speed",
    "lesson": "p8",
    "unit": 8,
    "prompt": "A satellite orbits at a radius of 7 000 km, where gravity gives an acceleration of 8 m/s². How fast is it going, in km/s, to two significant figures?"
   }
  },
  {
   "slug": "the_battery_reads_lower_under_load",
   "title": "The battery reads lower under load",
   "ts": "2026-08-25T16:55:02+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "HALF AN OHM.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    the volts that went missing  =  12.0 − 10.5  =  1.5 V",
      "    they were lost inside the battery, at 3 A",
      "    r  =  1.5 / 3  =  0.5 Ω"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE READING FELL AT ALL. A real battery is not a source of fixed voltage. It is a source of fixed EMF with a resistance in series inside it, and that resistance carries the same current as everything else. So the moment current flows, some of the EMF is spent pushing it through the battery itself and never reaches the terminals. With nothing connected, no current flows, nothing is lost, and you measure the EMF exactly — which is why the \"12 V\" on the label is only true when the battery is doing nothing at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY 3.5 Ω IS THE GOOD WRONG ANSWER. It is 10.5 / 3, which is real arithmetic and gives a real resistance — the EXTERNAL one, the lamp. That is the thing the battery is driving, not the thing inside it. The two live in the same circuit and add up:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    external  10.5 / 3  =  3.5 Ω",
      "    internal   1.5 / 3  =  0.5 Ω",
      "    total     12.0 / 3  =  4.0 Ω"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Notice the total uses the EMF and not the reading. That is the check worth doing: if your two resistances do not add to emf/I, you have used the wrong voltage somewhere."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE IT BITES. It is why a car's headlights dim when the starter turns over — the starter pulls hundreds of amps, so the loss inside the battery becomes several volts. It is why an old battery \"has voltage\" on a meter and still cannot start anything: its internal resistance has risen, so it collapses the moment it is asked for current. And it is why a battery gets warm in use — that missing power has to go somewhere, and it is heating the battery from inside."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_emf",
    "lesson": "e1",
    "unit": 10,
    "prompt": "A battery of emf 9 V has internal resistance 1 Ω and drives 2 A. What is the terminal voltage, in volts?"
   }
  },
  {
   "slug": "a_glass_filled_to_the_brim",
   "title": "A glass filled to the brim",
   "ts": "2026-08-25T16:15:12+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "NOT A DROP. The level does not move at all — not up, not down.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    floating, the cube pushes aside its own WEIGHT of water",
      "    melted, the cube BECOMES exactly that weight of water"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and the same weight of water takes up the same room whether it arrived by being pushed aside or by melting. So the water that appears fits precisely into the hole the cube was already making."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"IT OVERFLOWS\" FEELS RIGHT. Because there IS a lump standing proud of the surface — about 8% of the cube — and it does have to go somewhere. What that argument misses is that the ice will SHRINK as it melts, and it shrinks by exactly the size of that lump. The two are not a coincidence; they are the same fact stated twice."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    ice     917 kg per m³",
      "    water  1000 kg per m³",
      "    so a floating cube sits 91.7% under, and 8.3% proud"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE NUMBERS. A 50 g cube displaces 50 ml of water while it floats. Melted, it IS 50 ml of water. Nothing changed."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"THE LEVEL FALLS\" IS THE CLEVERER MISTAKE. Ice really is less dense than water and really does shrink on melting, so someone who knows that reaches for a falling level. But the shrinkage was already accounted for by the part above the surface, which was never displacing anything to begin with."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS ACTUALLY MATTERS. Sea ice melting does not raise sea level, for exactly this reason — the Arctic ice cap could vanish entirely and the oceans would sit where they are. Ice sitting on LAND is a completely different matter: Greenland and Antarctica are not floating, so what they add is all new water. That distinction is the whole reason the two are counted separately."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE ASSUMPTION: the ice is floating freely and is pure. A cube held under by a straw, or ice with a stone frozen into it, breaks the argument — and salt water changes the numbers, which is why the sea-ice version is very slightly more subtle than the glass."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_upthrust",
    "lesson": "p6",
    "unit": 8,
    "prompt": "An object of volume 2 litres is held completely under water. Taking ρ = 1000 kg/m³ and g = 10, what upthrust acts on it, in newtons?"
   }
  },
  {
   "slug": "row_128_of_pascals_triangle",
   "title": "Row 128 of Pascal's triangle",
   "ts": "2026-08-25T15:35:13+00:00",
   "date": "25 Aug 2026",
   "topic": "number_theory",
   "q": null,
   "a": "TWO. Out of a hundred and twenty nine numbers, exactly two are odd.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Almost everybody guesses somewhere near half — sixty-odd — because the entries look like arbitrary large numbers and arbitrary numbers are odd about half the time. These are not arbitrary."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE RULE. The number of odd entries in row n is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2 ^ (the number of 1s in the binary form of n)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "128 in binary is 10000000 — a single 1 — so row 128 has 2^1 = 2 odd entries, and they are the two at the ends, which are both 1. Every single one of the 127 numbers between them is even."
     ]
    },
    {
     "h": "CHECK IT ON SMALL ROWS",
     "t": "pre",
     "lines": [
      "    row 4   = 1 4 6 4 1          100 in binary, one 1  -> 2 odd    correct",
      "    row 5   = 1 5 10 10 5 1      101, two 1s           -> 4 odd    correct",
      "    row 6   = 1 6 15 20 15 6 1   110, two 1s           -> 4 odd    correct",
      "    row 100 = ...                1100100, three 1s     -> 8 odd"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS TRUE. Kummer's theorem says the power of 2 dividing \"n choose k\" is the number of carries when you add k to n-k in binary. An entry is odd exactly when there are no carries — which happens exactly when the 1-bits of k are a subset of the 1-bits of n. So the odd entries correspond to subsets of n's 1-bits, and a set of b bits has 2^b subsets. Hence 2^b odd entries."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Rows just below a power of two go the other way: row 127 is 1111111, seven 1s, so ALL 128 of its entries are odd."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE PICTURE NOBODY EXPECTS. Colour every odd entry and leave the even ones blank, and Pascal's triangle turns into the Sierpinski gasket — the same fractal you get by stepping halfway towards random corners forever. The rows that are nearly all even are the big blank triangles; the rows just under a power of two are the solid lines beneath them."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_pascal_row",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "In Pascal's triangle, the top row is row 0. What do the entries in row 10 add up to?"
   }
  },
  {
   "slug": "swap_the_lamp_for_a_brighter_red",
   "title": "Swap the lamp for a brighter red",
   "ts": "2026-08-25T14:55:11+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "NONE. Not fewer — none at all, however long you leave it and however bright you make it.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "ONE ELECTRON ABSORBS ONE PHOTON. That is the whole thing. Light arrives in lumps, and an electron takes a lump or it takes nothing; it cannot save up two small ones. So what matters is the energy of a SINGLE photon, and that depends on the colour alone:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    E = hc / lambda"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    blue  450 nm  ->  2.757 eV",
      "    red   650 nm  ->  1.909 eV"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The metal holds its electrons with a work function of about 2.30 eV. Blue clears it with 0.46 eV to spare, which the electron keeps as speed. Red is 0.39 eV short, and being short is fatal: a photon that cannot free an electron does nothing at all. Turning the red lamp up sends MORE photons, each still too small. A hundred times nothing is nothing."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"A HUNDRED TIMES MORE\" IS NOT A SILLY ANSWER. It is what classical physics predicts, and predicts confidently. If light were a wave, energy would arrive smoothly, an electron would soak it up until it had enough, and a brighter lamp would simply mean a shorter wait. That is a clean, sensible theory, and this experiment is where it died — not on a technicality, but because the wait never ends no matter how bright the lamp gets."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"ABOUT SEVEN TENTHS AS MANY\" IS THE BETTER MISTAKE. Knowing E = hf and scaling by it gives 1.909/2.757 = 0.692, so about seven tenths. That is a real calculation on real numbers, and it is the answer you give if you have the formula but not the THRESHOLD. Below the threshold the ratio is not small, it is zero — the behaviour changes kind, not just size."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE THRESHOLD IS A WAVELENGTH YOU CAN NAME: 539 nm for this metal, which is green. Every colour bluer than that works at any brightness; every colour redder fails at any brightness. That cliff edge is the fingerprint of light being lumpy, and it is why this experiment, not the double slit, is what won Einstein the Nobel Prize."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: one photon per electron. At the intensity of a laboratory lamp that is right. Fire a strong enough laser and two photons can arrive at one electron close enough together to add up — two-photon photoemission is real, and it takes an intensity roughly a billion times higher than anything in this scene."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_light_wavelength",
    "lesson": "w1",
    "unit": 11,
    "prompt": "Light travels at 3×10⁸ m/s. What is the wavelength of light of frequency 5×10¹⁴ Hz, in nanometres?"
   }
  },
  {
   "slug": "hold_a_thumb_up_and_swap_eyes",
   "title": "Hold a thumb up and swap eyes",
   "ts": "2026-08-25T14:15:03+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "TWICE AS BIG. Not four times — and \"four times\" is the answer most people with some physics reach for.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY NOT FOUR. Brightness falls as 1/d², gravity falls as 1/d², sound intensity falls as 1/d². Reaching for the square is trained behaviour, not carelessness. But those are quantities spread over the surface of a sphere, and the sphere's area is what carries the square. A parallax is an ANGLE, and an angle is just opposite over adjacent — halve the adjacent side and the angle doubles."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    eyes 6.5 cm apart, thumb at 60 cm  ->  jump of 6.20°",
      "    the same thumb at 30 cm            ->  jump of 12.37°"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Not exactly double — 1.994 rather than 2.000 — because the angle is an arctangent and only behaves perfectly for small angles. At star distances it is exact for every purpose you will ever have."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"IT IS THE SAME\" IS WRONG. Nothing about the thumb changed, which is true and beside the point. What changes is the angle between the two lines of sight, and that is set by how far away the thumb is, not by how big it is."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT THIS IS ACTUALLY FOR. Swap your two eyes for the Earth at opposite ends of its orbit and you have the only direct way anyone has ever measured the distance to a star."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    Proxima Centauri, 4.25 light years  ->  0.77 arcseconds",
      "    Sirius, 8.6 light years             ->  0.38 arcseconds",
      "    a typical naked-eye star, 300 ly    ->  0.011 arcseconds"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Your thumb's jump is about 29,000 times bigger than Proxima's."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND WHY IT RUNS OUT. Because the angle goes as 1/d, a star ten times further gives a jump ten times smaller. Push far enough and it drops below what any instrument can resolve, and the method simply stops — which is why parallax measures the near stars and everything beyond them is measured another way."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Note what does NOT limit it: brightness. A faint nearby star has a large parallax and a brilliant distant one has a tiny parallax. The limit is angular resolution, and the only cure is a longer baseline — and the Earth's orbit is the longest one we have."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "tr_small_angle",
    "lesson": "t4",
    "unit": 5,
    "prompt": "Using the small-angle approximation, what is sin(0.02) to three decimal places, with 0.02 in radians?"
   }
  },
  {
   "slug": "two_crossed_filters_and_a_third",
   "title": "Two crossed filters and a third",
   "ts": "2026-08-25T13:34:33+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "AN EIGHTH OF THE ORIGINAL BEAM — 12.5%. You added a filter to a stack that was passing nothing, and light came out.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    unpolarised light in                     100%",
      "    through the first filter                  50%     (half, always)",
      "    through the 45° filter    x cos²45°       25%",
      "    through the crossed filter x cos²45°    12.5%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"STILL NOTHING\" IS THE ANSWER ALMOST EVERYONE GIVES. Because it is exactly right for anything that only absorbs. Stack two pieces of smoked glass and you get less light; add a third and you get less again. A polariser looks like it belongs to that family and does not. It does not remove part of the beam and pass the rest through unchanged — it REWRITES what comes out, so that everything leaving it is polarised along its own axis, whatever came in."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the whole trick. Light arriving at the second filter is no longer the light that left the first: the 45° filter has re-aimed it, and something at 45° to the crossed filter is not blocked by it. The third filter did not let more of the old beam through. It made a new one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"A QUARTER\" IS THE OTHER GOOD WRONG ANSWER. Half through the first, then cos²45° is a half, giving 25% — and then it stops. The crossed filter takes its own cos²45° as well. Two factors of a half after the first filter, not one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "45° IS THE BEST YOU CAN DO, and that is worth checking rather than assuming. Put the middle filter at angle θ and the fraction is ½cos²θ·cos²(90°−θ), which is largest at exactly 45°. Nearer either neighbour and one of the two cosines collapses."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE YOU HAVE SEEN THIS. It is why an LCD screen goes black at some angles through polarised sunglasses, and why a stressed piece of clear plastic between two polarisers blooms into colour — the plastic is doing what the 45° filter does, rotating the light on its way through."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_polar_malus",
    "lesson": "l6",
    "unit": 11,
    "prompt": "Light that is ALREADY polarised meets a filter whose axis is 60° to it. What fraction of it gets through? Give a decimal."
   }
  },
  {
   "slug": "the_thermometer_in_the_white_box",
   "title": "The thermometer in the white box",
   "ts": "2026-08-25T12:54:50+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "NO. Not by a hundredth of a degree. It reads five, and it goes on reading five however hard it blows.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. Wind chill is not a temperature. It is a statement about the RATE at which a warm object loses heat, and a dry thermometer sitting at air temperature is not a warm object — it has no temperature difference to drive any loss at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Write down what the wind actually changes. For an object cooling by convection,"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    P = h A (T_object − T_air)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The wind raises h, the heat transfer coefficient — from around 8 W/m^2K in still air to perhaps 45 in a brisk wind. But look what h multiplies. For the thermometer, T_object − T_air is ZERO, and any h times zero is still zero. The wind arrives, finds nothing to carry away, and leaves."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "FOR YOU IT IS ENTIRELY DIFFERENT, because you are not at air temperature. Bare skin sits near 33 degrees, so the bracket is 28 degrees, and the wind is multiplying something real:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    still   8 x 28  =  224 W/m^2",
      "    windy  45 x 28  = 1260 W/m^2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Five and a half times the heat loss, from air that has not changed temperature at all. \"Feels like minus two\" means \"you lose heat as fast as you would in still air at minus two\". It is a sentence about YOU, not about the air, and it is why a wind-chill figure needs a person in it to mean anything."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE TELL. Wind chill has no effect on anything that is not warmer than the air. It cannot cool a parked car below air temperature, it cannot freeze a pipe that is already at air temperature, and it will never take a puddle below zero on a day when the air is above it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: the thermometer is DRY and SHADED. Wet it and the answer changes completely — evaporation is a different mechanism, it does take the reading below air temperature, and the wind speeds it up. That is precisely what a wet-bulb thermometer is for, and it is why you feel cold getting out of a swimming pool on a warm day. Put it in the sun instead and it sits ABOVE air temperature, and there the wind really does cool it. The Stevenson screen exists to remove both of those."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When something \"feels\" a certain way, ask whether the quantity in question is a STATE or a RATE. Temperature is a state; comfort is almost always a rate. Most of the confusion around heating, insulation and wind chill is those two being swapped."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_metal_feels_cold",
    "lesson": "h2",
    "unit": 9,
    "prompt": "A metal rail and a wooden bench have been outside all night, at the same temperature. Why does the metal feel colder?"
   }
  },
  {
   "slug": "which_way_should_the_cold_pipe_run",
   "title": "Which way should the cold pipe run",
   "ts": "2026-08-25T12:04:39+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "THE OPPOSITE WAY. Counterflow, and it is not a small win.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ARITHMETIC. Take hot in at 90 and out at 50, cold in at 20 and out at 45. The driving force is the log-mean of the two end differences:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    counterflow   ends are 90−45 = 45 and 50−20 = 30    LMTD = 37.0 K",
      "    parallel      ends are 90−20 = 70 and 50−45 =  5    LMTD = 24.6 K"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Half as much driving temperature again, from the same pipes, the same fluids and the same flow rates. Since the heat moved is U A x LMTD, that is a third off the area you need — a physically smaller, cheaper exchanger for exactly the same duty."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY PARALLEL FLOW THROWS ITS ADVANTAGE AWAY. It does start better: 70 degrees of difference at the inlet, against counterflow's 45. But the two streams are running towards the same place, so they converge — and by the outlet there are only 5 degrees left to work with. All the heat transfer happens in the first stretch and the rest of the exchanger is nearly idle. Counterflow spreads the difference evenly along the whole length, and evenly is worth more than a good start."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE PART THAT SETTLES IT. Parallel flow cannot bring the cold stream out hotter than the hot stream leaves — the two ends up side by side and neither can pass the other. Counterflow can: the cold outlet meets the hot INLET, so it can be heated past the hot outlet temperature entirely. Want cold out at 60 while hot leaves at 50? Counterflow does it. In parallel flow the sum has a negative temperature difference in it and simply has no solution."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is why it is a decision and not an optimisation: one arrangement is better, and the other cannot do the job at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "BOTH MOVE THE SAME ENERGY. Nothing here breaks conservation — for the same terminal temperatures and flow rates the duty is identical. What changes is the temperature difference available to push it through, and therefore how much metal you need to buy."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: the two streams only exchange with each other. Real exchangers lose some heat to the surroundings, the wall has its own resistance, and at very low flow rates the fluid inside a pipe stratifies instead of mixing. None of that changes the direction of the answer; all of it changes the size of the win."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE YOU HAVE MET IT. Every car radiator, every condensing boiler, the heat recovery in a ventilation system — and in your own body, where the arteries and veins in an arm run alongside each other in opposite directions so that blood returning cold from the hand is warmed by blood on its way out."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_conduction",
    "lesson": "h2",
    "unit": 9,
    "prompt": "Heat flows through a sheet of glass 2 m² in area and 4 mm thick, with 20 °C across it. Glass conducts at 1.0 W/m°C. What is the rate of heat flow, in watts?"
   }
  },
  {
   "slug": "throw_it_so_it_never_comes_back",
   "title": "Throw it so it never comes back",
   "ts": "2026-08-25T11:19:51+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT 11.2 KILOMETRES PER SECOND. Twenty five thousand miles an hour.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is escape velocity from the Earth's surface, and the striking part is what is NOT in the formula."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE IT COMES FROM. To escape, the thing you throw needs enough kinetic energy to climb all the way out of the Earth's gravitational well:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    ½mv²  =  GMm/R"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The m — the mass of whatever you threw — appears on BOTH sides and cancels:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    v = sqrt(2GM/R)",
      "      = sqrt(2 x 6.67e-11 x 5.97e24 / 6.37e6)",
      "      = 11,190 m/s  ≈  11.2 km/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A marble and a battleship need exactly the same speed. Mass never enters it, for the same reason everything falls at the same rate."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A SHORTCUT WORTH KNOWING. Since g = GM/R², the same answer comes out of surface gravity alone:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    v = sqrt(2gR) = sqrt(2 x 9.81 x 6.37e6) = 11,180 m/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Same number, no need for G or the Earth's mass — useful when a paper gives you g and a radius and nothing else."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND ITS RELATION TO ORBIT. Circular orbital speed at the surface is sqrt(GM/R) = 7.9 km/s. Escape is exactly sqrt(2) times that. Getting away entirely costs only about 41% more speed than going round and round."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "OTHER WORLDS, same formula:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    Moon      2.4 km/s     which is why its \"atmosphere\" left long ago",
      "    Earth    11.2 km/s",
      "    Jupiter  60   km/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: no air, and no third body."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The 11.2 km/s falls out of energy conservation with gravity as the only force. A real object thrown at that speed from the surface would not get out — it would be destroyed by the atmosphere within seconds, and even surviving it would lose a large slice of that speed to drag on the way up. This is why rockets do not try to reach escape velocity at ground level; they climb slowly through the thick air first and do their real accelerating where there is none. The figure is what you need at the top of the atmosphere, not at the bottom."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "And \"never comes back\" means never comes back to EARTH. The Sun is still there, and something that has just escaped the Earth is in orbit around the Sun, not gone. Escaping the solar system from here needs about 42 km/s relative to the Sun — which is why the Voyagers used Jupiter to get the rest of it rather than carrying the fuel."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT IT IS NOT. It is not a speed limit you must reach to leave — a rocket with a working engine can climb out arbitrarily slowly. Escape velocity is the speed needed by something that is THROWN and then coasts, with nothing pushing it afterwards. That distinction is exactly what a good interviewer will push on."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_suvat",
    "lesson": "p1",
    "unit": 8,
    "prompt": "A ball is dropped from rest. Taking g = 10 m/s², how fast is it moving after 3 s, in m/s?"
   }
  },
  {
   "slug": "one_trolley_hits_a_still_one",
   "title": "One trolley hits a still one",
   "ts": "2026-08-25T10:35:38+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "EXACTLY HALF OF IT. Not most, not nearly all — half, and half of it is gone for good as heat, sound and bent buffers.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    before   one trolley moving, one still     8 J",
      "    after    both moving together              4 J"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"ALL OF IT\" IS THE ANSWER MOST GOOD STUDENTS GIVE. Energy IS conserved. Nothing was destroyed. But KINETIC energy is not a conserved quantity, and the question asks about kinetic energy specifically. The missing half is still in the room — it is in the warmth of the buffers, the bang you heard, and the metal that is now very slightly bent. This is the difference between \"energy is conserved\" and \"kinetic energy is conserved\", and only the first is a law."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"A QUARTER\" IS THE OTHER GOOD WRONG ANSWER. The trolleys leave at half the speed, and kinetic energy goes as speed squared, so a quarter feels right. It drops one term: the moving MASS has doubled. Half the speed squared is a quarter, times twice the mass, is a half."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT MOMENTUM DOES MEANWHILE. It is untouched — 4 kg m/s before, 4 kg m/s after. Two conservation laws walk into this collision and only one walks out, which is exactly why you have to know which one you are allowed to use."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SPEED DOES NOT MATTER, AND THAT IS THE REAL POINT. Try it at 1 m/s or at 100 m/s: still exactly half. The speed cancels, and what is left depends only on the masses:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    fraction left = m(moving) / (m(moving) + m(still))"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So identical trolleys always lose half. A moving trolley hitting a stationary one of TWICE its mass keeps a third. Hitting one of nine times its mass keeps a tenth — which is why a small thing hitting a big thing is such an efficient way to turn motion into heat, and why that is exactly how a forging hammer is supposed to work."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_ke_conserved",
    "lesson": "p3",
    "unit": 8,
    "prompt": "Kinetic energy is conserved when two objects stick together in a collision."
   }
  },
  {
   "slug": "stretch_the_wire_to_twice_its_length",
   "title": "Stretch the wire to twice its length",
   "ts": "2026-08-25T09:53:58+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "FOUR TIMES BIGGER. Not twice — four times, and the second factor of two is the one almost everyone leaves out.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    R = ρL / A"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Doubling the length doubles R. But the copper had to come from somewhere: the same volume now fills twice the length, so the cross-section is HALVED, and halving A doubles R again. Two doublings, one from each end of the fraction."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    length   x2      ->  R x2",
      "    area     x½      ->  R x2",
      "                        R x4"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"IT DOUBLES\" IS THE BEST WRONG ANSWER HERE. It uses the right formula honestly and changes one variable. Nothing about it is careless; it just treats A as though it were fixed, when the stretch is what changed it. If you had somehow doubled the length while keeping the thickness, doubling would be exactly right — but you cannot, not without more copper."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"IT STAYS THE SAME\" IS THE OTHER ONE. Resistance feels like a property of the object, the way mass is. It is not. The same lump of copper can be given any resistance you like by choosing what shape to draw it into. The property that does NOT change is the RESISTIVITY ρ, which belongs to the material and not to the piece — and keeping those two apart is most of what this question is for."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "IN GENERAL. Stretch by a factor k and the resistance goes up by k². Pull a wire to ten times its length and it has a hundred times the resistance."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    x3  ->  x9        x10  ->  x100"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE IT BITES. It is why drawing wire finer is not a cheap way to save copper: halve the diameter to save metal and the area falls by four, so the resistance quadruples and the heat it wastes quadruples with it. It is also why an over-stretched extension lead runs warm, and why a filament is made thin deliberately — a lamp WANTS the resistance."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_resistivity_property",
    "lesson": "e1",
    "unit": 10,
    "prompt": "Resistivity belongs to the material, while resistance depends on the shape of the particular piece as well."
   }
  },
  {
   "slug": "two_tubes_of_different_bore",
   "title": "Two tubes of different bore",
   "ts": "2026-08-25T09:02:25+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "THE NARROW ONE, and exactly twice as high.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    h = 2 gamma cos(theta) / (rho g r)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The radius is on the BOTTOM, so halve the bore and you double the climb. For clean glass and water, taking gamma = 0.0728 N/m and theta near zero:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    bore radius 1.0 mm    h = 14.8 mm",
      "    bore radius 0.5 mm    h = 29.7 mm"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT GOES UP AT ALL. Water wets glass, so the surface curves up the wall and the surface tension pulling along that contact line has an upward component. That force acts around the CIRCUMFERENCE, which goes as r. The weight it has to hold up is a column of water, which goes as the AREA, r squared. So"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    lift / weight  ~  r / r^2  =  1 / r"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Halve the radius and the lifting force falls by two while the load falls by four — the tube wins by the difference, and the water goes twice as far."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"THE WIDE ONE, THERE IS MORE ROOM\" IS THE TRAP. More water does go up the wide tube: twice the height in a quarter of the area still leaves the wide one carrying more total mass. The question asks about HEIGHT, and height is exactly where the narrow tube wins."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND WHY A BUCKET IS FLAT. Put r = 50 mm into the same expression and the rise is 0.3 mm — invisible against the size of the bucket. The effect never switches off; it just gets swamped. Capillary rise matters at the scale where 1/r is large, which is why it moves water through soil, up a paper towel, and through the xylem of a plant, and why none of those are made of wide pipes."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: clean glass and pure water, which is what makes theta near zero. Grease the tube and theta rises, cos(theta) shrinks, and the climb drops with it. Push theta past 90 degrees and cos goes NEGATIVE and the liquid is pushed DOWN below the outside level — which is exactly what mercury does in glass, and why a mercury meniscus curves the other way."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When a shape gets smaller, ask which quantities go as the length, which as the area, and which as the volume. Anything held up by a perimeter and weighed down by an area gets better as it shrinks — the same reasoning that lets an insect stand on water and stops you doing it."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_surface_per_length",
    "lesson": "p6",
    "unit": 8,
    "prompt": "Surface tension is a force per unit AREA of the liquid surface."
   }
  },
  {
   "slug": "it_never_actually_sits_at_230",
   "title": "It never actually sits at 230",
   "ts": "2026-08-25T08:21:52+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "BECAUSE 230 IS THE ROOT MEAN SQUARE, and that is the only average that answers the question anyone actually cares about: how much does it HEAT things.",
   "why": [
    {
     "h": "THE TWO OBVIOUS AVERAGES BOTH FAIL.",
     "t": "pre",
     "lines": [
      "  The plain average over a cycle is ZERO. The wave is above the axis exactly as",
      "  long as it is below, and the two cancel perfectly. Correct arithmetic,",
      "  useless answer — by that measure the mains is not there at all."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  The average SIZE, ignoring sign, is 2/pi times the peak:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      2/pi x 325.3 = 207 V"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  That is a real number and it is close enough to 230 to feel like the answer.",
      "  It is not, and the reason is the whole point."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE SQUARE. Power does not care about the sign of the voltage — a negative voltage across a heater heats it just as well, because P = V^2/R and the square throws the sign away. So the average that matters is the average of V SQUARED, not of V:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      mean of V^2  =  half the peak squared",
      "      so V_rms     =  peak / sqrt(2)  =  325.3 / 1.414  =  230 V"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the definition, and it is chosen to make one sentence true: a resistor on this supply gets exactly as hot as it would on a steady 230 V battery. Every mains appliance rating is written on that basis, which is why a 2 kW heater really does deliver 2 kW."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY NOT 207. Because the average of the square is not the square of the average. Squaring weights the big values more heavily than the small ones, so the peaks count for more than their share — and the answer comes out above the mean magnitude, not equal to it. 230 sits between 207 and 325 for exactly that reason."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT IT MEANS FOR THE INSULATION. Nothing in an appliance is designed for 230. It has to survive 325, twice per cycle, a hundred times a second, and the insulation is rated on the PEAK. Confusing the two is how equipment gets specified to fail."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: a clean sine. The peak-over-root-two rule is true for a sine and for nothing else. A square wave has V_rms equal to its peak; a spiky waveform from a cheap inverter has a much higher peak for the same heating, which is exactly why \"true RMS\" meters exist and why the cheap ones read wrong on anything that is not a sine."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When you are asked to average something, ask what the average is FOR. Averaging the quantity is right when the effect is linear in it; when the effect goes as the square, you have to average the square."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_power",
    "lesson": "e3",
    "unit": 10,
    "prompt": "A 240 V kettle draws 8 A. What is its power, in watts?"
   }
  },
  {
   "slug": "grab_the_shaft_and_hold_it",
   "title": "Grab the shaft and hold it",
   "ts": "2026-08-25T07:42:33+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "IT GOES UP, AND HARD. About twelve times the running current, and the heating in the windings goes up by the SQUARE of that.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY A SPINNING MOTOR TAKES SO LITTLE. A motor is a generator that happens to be driven. As the rotor turns, it generates a voltage of its own that OPPOSES the supply — the back EMF. What the winding resistance actually sees is the difference:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I = (V - E) / R"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Running freely, the back EMF climbs until it is nearly the whole supply. With 12 V, a back EMF of 11 V and a winding resistance of 1 ohm:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I = (12 - 11) / 1 = 1 A"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is why a free-running motor draws almost nothing. It is not that it is efficient; it is that it is fighting itself."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "NOW HOLD THE SHAFT. The rotor stops, so it generates nothing, so E = 0:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I = (12 - 0) / 1 = 12 A"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Twelve times the current from a circuit nobody has touched. And the winding does not care about current, it cares about I^2 R:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    running   1^2 x 1  =    1 W",
      "    stalled  12^2 x 1  =  144 W"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A hundred and forty-four times the heat, into the same small coil of wire, with the fan no longer turning. That is why a jammed drill smells hot in seconds and why \"stall current\" is the number a motor is protected against, not its running current."
     ]
    },
    {
     "h": "THE TWO ANSWERS PEOPLE GIVE.",
     "t": "pre",
     "lines": [
      "  \"It drops to zero, it is not doing anything now.\"  It stops doing WORK, which",
      "  is the output. The input is the opposite: all 12 V is now pushed across bare",
      "  copper. A motor doing no useful work is a motor drawing the most."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  \"It stays the same.\"  This treats the motor as a resistor, and its resistance",
      "  has not changed. But a motor is not a resistor: its speed sets the back EMF,",
      "  and the back EMF is most of what limits the current."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: a steady state, and inductance ignored. In the first milliseconds the winding's inductance resists the change, so the current ramps rather than jumps; and many motors have a thermal cutout or a driver that limits current precisely because the stall figure is destructive. Nothing in that changes the direction or the size of the effect — it changes how long you have."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When something rotating or moving is part of a circuit, ask what voltage the MOTION is generating. Motors, dynamos, regenerative brakes and the eddy-current brake in a train are all one idea: motion makes a voltage that opposes whatever caused the motion."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_lenz",
    "lesson": "e6",
    "unit": 10,
    "prompt": "A magnet is pushed north-pole-first into a coil. Which way does the induced current flow, seen from the magnet's side?"
   }
  },
  {
   "slug": "frozen_at_the_top_of_the_throw",
   "title": "Frozen at the top of the throw",
   "ts": "2026-08-25T07:01:56+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "9.81 METRES PER SECOND SQUARED, STRAIGHT DOWN — exactly what it was on the way up and exactly what it will be on the way down. Nothing about it changes at the top.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"ZERO\" IS THE ANSWER ALMOST EVERYONE GIVES. The ball is momentarily at rest, and rest feels like nothing happening. But acceleration is not how fast something is going, it is how fast its velocity is CHANGING — and at the top the velocity is changing as fast as it ever does, from a whisker upward to a whisker downward."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ARGUMENT THAT SETTLES IT. Suppose the acceleration really were zero at the top. Zero acceleration and zero velocity means nothing changes — so the ball would sit up there for ever. It does not. The fact that it comes back down at all is proof the acceleration was never zero."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT DOES NOT REVERSE EITHER. Acceleration follows the FORCE, not the motion, and the only force on the ball is the earth pulling it down. That pull does not know or care which way the ball is travelling. It is 9.81 m/s² down while the ball rises, while it hangs, and while it falls — one number, unchanged, for the whole flight."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    thrown at 20 m/s  ->  apex after 2.04 s, 20.39 m up"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The velocity passes through zero at 2.04 s; the acceleration passes through nothing at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT THE MISTAKE COSTS ELSEWHERE. \"Negative acceleration means slowing down\" is the same error wearing different clothes — a car with negative acceleration that is already reversing is speeding up. Acceleration and velocity are independent: knowing one tells you nothing about the sign of the other."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: no air. With drag the acceleration is NOT the same on the way up and the way down — going up, drag and gravity both act downward; coming down they oppose, so the ball decelerates less than it accelerated. It still is not zero at the top, where the speed and therefore the drag are zero, and the acceleration there is exactly g even in air."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_decel_negative",
    "lesson": "p1",
    "unit": 8,
    "prompt": "An object with negative acceleration must be slowing down."
   }
  },
  {
   "slug": "straight_across_with_no_resistor",
   "title": "Straight across with no resistor",
   "ts": "2026-08-25T06:22:03+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "IT LIGHTS BRILLIANTLY, AND THEN IT IS DEAD. A few milliseconds of the brightest light it will ever produce, and the junction is gone.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE RESISTOR IS NOT OPTIONAL. Work out what the current should be with the resistor in place. The LED drops about 2 V no matter what, so 7 V is left for everything else:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I = (9 - 2) / 330 = 21 mA"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "which is what a small LED is built for. Now take the resistor out. The 7 V is still there and it is now dropped across nothing but the battery's own internal resistance, a couple of ohms:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I = (9 - 2) / 2 = 3.5 A"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is more than a hundred and fifty times the rated current. A real PP3 cannot actually deliver 3.5 A — its voltage collapses under the attempt — so the true figure is smaller and depends on how fresh the battery is, somewhere in the region of one to three amps. It does not matter. Anything above about 100 mA kills the die, and the current gets there in microseconds."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE PART THAT IS ACTUALLY THE PHYSICS. A resistor obeys I = V/R, so its current is set by the voltage across it. A diode does not: above its forward voltage its current rises roughly EXPONENTIALLY with voltage, so a tenth of a volt more can multiply the current tenfold. That means the LED cannot set its own operating point in any stable way — a fraction of a volt of extra supply, or the drop falling slightly as the die warms, runs the current away."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Something else in the circuit has to decide the current, and the resistor is that something. It is not there to protect the LED from the voltage. It is there because a diode has no opinion about current, and a circuit needs one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"NOTHING WILL HAPPEN, 9 V IS TOO MUCH FOR A 2 V LED\" IS ALSO WRONG. It treats the forward voltage as a requirement to be matched, like a socket. It is not: it is the voltage the diode settles at once current is flowing. Supply more and it does not refuse, it takes more current."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: an ordinary indicator LED and an ordinary battery. Some modern LED products have a resistor or a driver chip built into the package, and those really can be connected straight across a stated voltage. If it survives, something in there was doing the resistor's job."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. For any component, ask what SETS the current through it. For a resistor, the voltage does. For a diode, a transistor or a motor at stall, something else in the circuit must, and finding out what is most of circuit design."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_ohm",
    "lesson": "e1",
    "unit": 10,
    "prompt": "A 12 V supply drives 3 A through a resistor. What is its resistance, in ohms?"
   }
  },
  {
   "slug": "twenty_five_times_less_water",
   "title": "Twenty-five times less water",
   "ts": "2026-08-25T05:42:39+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "NONE OF THEM. All three taps are under exactly the same pressure, and the amount of water above them has nothing to do with it.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT THE PRESSURE ACTUALLY DEPENDS ON. Only the depth:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    p = rho g h = 1000 x 9.81 x 0.40 = 3,924 Pa"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "There is no term in that expression for width, for shape, or for volume, because none of them belong there. Same depth, same water, same pressure — whether there are twelve litres above the tap or half a litre."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"THE FAT ONE\" FEELS RIGHT AND IS NOT. More water does weigh more, and that part of the intuition is sound. The mistake is that pressure is not weight, it is weight PER UNIT AREA — and the fat vessel spreads its extra weight over a proportionally bigger bottom. Double the area and you double the weight sitting on it, so the ratio is untouched. That is the whole trick, and it is why the flared vessel does not win: the extra water it holds is sitting over the sloped glass, not over the tap, and the glass carries it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY \"TWENTY-FIVE TIMES LESS\" IS THE BETTER MISTAKE. The volumes really are in a 25:1 ratio — 12.6 litres against 0.50 litres — so applying it is a reasonable move on a real number. But that ratio belongs to the WEIGHT of the water, and the question asks about pressure. Divide by the base area and the 25 cancels out completely."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE PART THAT SOUNDS LIKE A TRICK AND IS NOT. Because only depth counts, a very thin pipe of water can generate a very large pressure — a tube of water one storey high pushes as hard as a lake of the same depth. Pascal is said to have burst a sealed barrel by connecting a long thin pipe to it and pouring in a jug of water. The barrel does not care that it is only a jug; it feels the height."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: the water is STILL, and every vessel is open to the air at the top. Get water moving and pressure starts trading against speed instead. Seal the top and you can pressurise the space above the water, at which point the vessel very much does matter."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. A dam is designed for the DEPTH of the reservoir, not its surface area — which is why a deep narrow valley is the expensive one to dam and a shallow lake stretching for miles is not. And it is why the header tank in a loft is placed high rather than made big."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_pressure_shape",
    "lesson": "p6",
    "unit": 8,
    "prompt": "The pressure at the bottom of a container depends on the shape of the container."
   }
  },
  {
   "slug": "you_land_at_the_same_speed_either_way",
   "title": "You land at the same speed either way",
   "ts": "2026-08-25T05:02:49+00:00",
   "date": "25 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT 38 TIMES HARDER — and if you answered 50, you did the right physics and dropped two terms. That is the interesting part of this question.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "FIRST, WHY IT IS NOT \"NO DIFFERENCE\". You do arrive at the same speed —"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    v = sqrt(2gh) = sqrt(2 x 9.81 x 1.5) = 5.4 m/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and you have exactly the same momentum to get rid of either way. That much of the naive answer is correct. But the momentum is not what hurts you; the RATE you shed it is. Spread the same change over a longer stop and the load drops in proportion. Nothing about the fall changes — everything about the stop does."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ENERGY BALANCE. While you are stopping you travel a further distance d, and gravity keeps working on you the whole way down. So the work done on you is mg(h + d), not mgh:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    mg(h + d) = F d        ->        F/mg = (h + d)/d"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    locked legs, d = 1 cm  :  (1.50 + 0.01)/0.01  =  151 x body weight",
      "    folding,     d = 50 cm :  (1.50 + 0.50)/0.50  =    4 x body weight"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    ratio = 151/4 = 38"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "151 g is not a figure you walk away from; that is how ankles and spines break from heights that sound harmless. 4 g is a brisk landing and nothing more. The whole difference is what your knees do in the last half metre."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY 50 IS WRONG, AND WHY IT IS THE BETTER MISTAKE. Reach for F = mgh/d and you get 150 and 3, and a ratio of exactly 50 — the ratio of the stopping distances. It over-states the benefit by about a third, for two reasons that both cut the same way: your weight is still pressing down while you stop (the +1 that turns 3 into 4), and the folding landing falls through the extra half metre, arriving with more energy to lose than the locked one. The shortcut is fine when d is tiny compared with h. Here d is a third of h, so it is not."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: a CONSTANT stopping load. Real legs do not deliver constant load — the peak is higher than this average, and the shape of the curve is what a running shoe or a crash mat is designed to flatten. So 38 is the ratio of the averages, and it is the honest comparison; the ratio of the true peaks depends on how you fold and is not something you can get from these three numbers."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. It is the entire design brief for crumple zones, airbags, crash mats, climbing rope stretch and packaging foam. None of them reduce the momentum you have to lose. Every one of them buys distance."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_force_rate",
    "lesson": "p3",
    "unit": 8,
    "prompt": "A jet of water delivers 20 kg per second at 5 m/s onto a wall and stops dead. What force does it exert, in newtons?"
   }
  },
  {
   "slug": "the_glass_is_not_the_point",
   "title": "The glass is not the point",
   "ts": "2026-08-24T20:32:10+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "THE GAP, and it is not close. The air between the panes does about 99% of the work, and the two sheets of glass together do about 1%.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SUM. Thermal resistance of a slab is its thickness divided by how well the material conducts:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    R = t / k"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    one pane   0.004 m / 1.0  W/mK   = 0.0040",
      "    the gap    0.016 m / 0.026 W/mK  = 0.6154"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The gap is about 150 times the resistance of a pane. Stack them in series -- resistances add, exactly like resistors -- and the unit comes to"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    R = 0.0040 + 0.6154 + 0.0040 = 0.6234"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "of which the glass contributes 0.0080, or 1.3%."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE THICKNESS IS THE RED HERRING. The gap is only FOUR times thicker than a pane. It wins 150 to 1 because still air conducts about 40 times worse than glass, and that is the number doing the work. Glass feels like an insulator because it is cold to touch, but cold-to-touch means it is CARRYING heat away from your hand, which is the opposite of what an insulator does."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "SO WHAT IS THE SECOND PANE FOR? Not for its own resistance -- it is there to hold the gap. Without it there is no trapped layer, and a single 4 mm pane has R = 0.004, which is roughly one hundred and fifty times worse than the sealed unit. The glass is the packaging; the air is the product."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND WHY NOT A MUCH BIGGER GAP? Because past about 16 to 20 mm the air stops being still. It starts to circulate -- warm air up the inner face, cold air down the outer -- and convection carries heat across far faster than conduction ever did. The gap is chosen to be exactly as wide as it can be without the air beginning to turn over. Argon is used instead of air because it is heavier and more sluggish, so it starts convecting later."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: conduction only. The sum above ignores convection inside the gap, which is what sets the 16 mm limit, and it ignores radiation straight across from pane to pane, which in a plain air unit is a real fraction of the loss and is what low-emissivity coatings exist to stop. A full window calculation carries all three; the point of this one is that even the crudest version already settles the question by two orders of magnitude."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. For layers in series, compare t/k and not t. People compare thicknesses because thicknesses are visible; the conductivity is usually the bigger lever by far."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_gap_dominates",
    "lesson": "h2",
    "unit": 9,
    "prompt": "A double-glazed window is 4 mm glass, then a 16 mm air gap, then 4 mm glass. Which part does most of the insulating?"
   }
  },
  {
   "slug": "too_slow_on_the_banked_bend",
   "title": "Too slow on the banked bend",
   "ts": "2026-08-24T19:50:26+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "DOWN THE BANK — towards the INSIDE of the bend.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. Forget friction for a moment and look at what the slope alone does. The road pushes on the tyres at right angles to its surface, so that push N leans inwards. Split it:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    vertically     N cos(theta) holds the car up against gravity",
      "    horizontally   N sin(theta) points into the bend"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The horizontal part is the only thing bending the path. Divide the two and both N and the mass disappear:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    tan(theta) = v^2 / (r g)      so    v = sqrt(g r tan(theta))"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "For 20 degrees and a 50 m radius that is sqrt(9.81 x 50 x 0.364) = 13.4 m/s, about 30 mph. That is the speed the bend was built for."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "NOW GO SLOWER. The circle needs LESS inward force than before — v^2/r has fallen — but the bank is still pushing inwards just as hard, because it does not know how fast you are going. There is now too much inward force. The surplus pushes the car towards the middle of the bend, and the car slides DOWN the slope. Friction has to act UP the bank to stop it."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    at 13.4 m/s   need 3.57 m/s^2 inward, bank supplies 3.57   balanced",
      "    at 8 m/s      need 1.28 m/s^2 inward, bank supplies 3.57   too much: down"
     ]
    },
    {
     "h": "THE TWO ANSWERS PEOPLE GIVE, AND WHY THEY ARE WRONG.",
     "t": "pre",
     "lines": [
      "  \"Up the bank.\"  That is what happens when you go too FAST: then the circle",
      "  needs more than the bank supplies, the shortfall is made up by friction, and",
      "  the car climbs if there is not enough of it. Going slowly is the same story",
      "  with the sign reversed, and the feeling of being flung outwards in a car is",
      "  the fast case, which is the one everybody has felt."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  \"Neither — friction holds it.\"  Usually true, and it dodges the question.",
      "  Friction does hold it, and asking which WAY friction must act is the same as",
      "  asking which way it would slide without it. On a slow bend, friction acts up",
      "  the slope, which is exactly what an icy banked bend stops providing."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE CHECK THAT SETTLES IT. Take the speed to zero. The car is simply parked on a slope, and a car parked on a slope slides down it. Nothing about that changes as you creep up towards the design speed."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. On any banked or tilted problem, ask what the surface supplies REGARDLESS of speed, then compare it with what the motion demands. The difference, with its sign, is what friction is being asked to do — and the sign is the answer."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_circ_accel",
    "lesson": "p8",
    "unit": 8,
    "prompt": "A car goes round a bend of radius 25 m at a steady 10 m/s. What is its acceleration, in m/s²?"
   }
  },
  {
   "slug": "the_hump_does_not_matter",
   "title": "The hump does not matter",
   "ts": "2026-08-24T19:10:01+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "NEITHER. They empty at exactly the same rate, and the height of the hump makes no difference at all.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. Follow one parcel of water from the surface of the tank to the outlet. Going up over the hump it slows down, trading speed for height. Coming down the far side it speeds up again, trading the height back. Those two exchanges cancel exactly, and what is left is the NET drop — from the water surface to the outlet:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    v = sqrt(2 g h)     h = surface to outlet, and nothing else"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "With a 0.60 m drop that is sqrt(2 x 9.81 x 0.60) = 3.4 m/s at both outlets. The hump does not appear in the expression, so it cannot change the answer."
     ]
    },
    {
     "h": "THE TWO WRONG ANSWERS, AND WHY THEY ARE THE SAME MISTAKE.",
     "t": "pre",
     "lines": [
      "  \"The tall one is slower — the water has further to climb.\"  It does, and it",
      "  gets every bit of that back on the way down. You are counting the cost and",
      "  forgetting the refund."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  \"The tall one is faster — it falls further afterwards.\"  It falls further,",
      "  from higher up, and arrives at the same place. You are counting the refund",
      "  and forgetting the cost."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Both are looking at one leg of the journey. Only the two ENDPOINTS matter, which is what \"conservative field\" means in practice: the path is irrelevant, the height difference is everything."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT DOES CHANGE THINGS. Lower the outlet and it runs faster. Raise the outlet to the water surface and it stops dead — zero drop, zero flow — which is the same statement, and it is how you switch a siphon off without touching the tank."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE THING THE HUMP CAN DO. Go high enough and the siphon fails altogether, because it is atmospheric pressure that holds the column up over the bend. The ceiling is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    h = p / (rho g) = 101325 / (1000 x 9.81) = 10.3 m"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Below that the hump is irrelevant; above it, nothing works at all. There is no gradual penalty in between, which is exactly why people expect one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When something travels a path and you are asked about the result, check whether the quantity depends on the path or only on the ends. Height, and anything derived from it, only cares about the ends. That single question also disposes of \"does a longer ramp need less work\" and most of gravitational potential energy."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_hydrostatic",
    "lesson": "p6",
    "unit": 8,
    "prompt": "How much does the pressure increase 10 m below the surface of water? Take ρ = 1000 kg/m³ and g = 10. Give your answer in kilopascals."
   }
  },
  {
   "slug": "twice_the_board_eight_times_the_dip",
   "title": "Twice the board, eight times the dip",
   "ts": "2026-08-24T18:29:53+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "EIGHT TIMES FURTHER. Not twice, and not four times.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. For a beam held at one end with a load on the other, the tip drops by"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    delta = F L^3 / (3 E I)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Everything in that except L is unchanged — same board, same person, same material, same cross-section. So the dip goes as the CUBE of the length, and doubling L multiplies it by 2 x 2 x 2 = 8."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THE CUBE COMES FROM, without the formula. Two separate things get worse at once when you lengthen the board:"
     ]
    },
    {
     "h": null,
     "t": "list",
     "lines": [
      "the MOMENT at the root is F x L, so it grows with L. Twice the length,"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    twice the twisting effort at the fixed end."
     ]
    },
    {
     "h": null,
     "t": "list",
     "lines": [
      "but the board also has more length over which to curve, and the tip is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    further from every bit of that curvature. Each of those contributes",
      "    another factor of L."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Three factors of L, one cube. This is the same reason a long shelf sags so much more than a short one, and why the fix is almost never a thicker shelf — it is a bracket halfway along, which halves L and so divides the sag by eight."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE OTHER CUBE, WHICH IS THE USEFUL ONE. The second moment of area of a rectangle is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I = b t^3 / 12"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "so the THICKNESS is cubed too, the other way up. Double the thickness of the board and the dip divides by eight. Double the WIDTH and it only halves — width appears once, thickness three times. That is why a plank is far stiffer on its edge than laid flat, and why joists are tall and thin rather than short and wide."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A REAL NUMBER. A 3 m fibreglass board, 400 mm wide and 50 mm thick, with a 70 kg person on the end:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    I     = 0.40 x 0.050^3 / 12   = 4.17e-6 m^4",
      "    delta = 700 x 3^3 / (3 x 10e9 x 4.17e-6) = 0.151 m"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "about 15 cm, which is roughly what you see at a pool. Make it 6 m and the same person puts the tip 1.2 m down — which is why competition boards are thicker and stiffer, not merely longer."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK, and it is worth saying out loud. delta = F L^3 / (3 E I) is SMALL-DEFLECTION theory: it assumes the board bends only slightly, so its length along the curve is still near enough L and the slope stays shallow. At 3 m the tip drops 0.151 m, a twentieth of the length, and that is comfortably inside it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "At 6 m the same sum gives 1.2 m, which is a FIFTH of the length — and there the assumption is being stretched. A real board that far over is measurably stiffer than the formula predicts, because the geometry has changed: part of the load is now carried along the board rather than across it. The factor of eight is exactly right as the answer to the question asked (how the formula scales), and the 1.2 m should be read as \"far more than 15 cm, and past where this formula is trustworthy\" rather than as a measurement."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the honest version, and an interviewer will usually be pleased to hear the limit of a formula quoted alongside it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. Before reaching for a formula, count how many times the length enters the problem. If it enters three times, no amount of intuition about \"twice as long\" will save you."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "ma_cantilever",
    "lesson": "p9",
    "unit": 8,
    "prompt": "A diving board dips a certain amount with someone standing on the end. Replace it with a board of the same width and thickness but TWICE the length. How much further does the end dip, with the same person on it?"
   }
  },
  {
   "slug": "three_seconds_in_one_millisecond_out",
   "title": "Three seconds in, one millisecond out",
   "ts": "2026-08-24T17:49:54+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "THREE THOUSAND TIMES. Not a little more — three thousand.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE-LINE ROUTE. Whatever energy the battery put in over those three seconds is the same energy that comes back out during the flash. Nothing is created in between; the store just holds it. And power is energy per unit time, so if the energy is the same both ways, the powers are in the inverse ratio of the times:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    P_out / P_in  =  t_in / t_out  =  3 s / 0.001 s  =  3000"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "You never need a component value. That is worth noticing on its own: the question looks like it needs the capacitance and the voltage, and it does not."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE LONG ROUTE, WHICH AGREES. A typical flash capacitor is about 100 microfarads charged to 300 volts:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    E = 1/2 C V^2 = 1/2 x 100e-6 x 300^2 = 4.5 J"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    charging   4.5 J over 3 s        = 1.5 W    (a trickle, easily done by",
      "                                                 a small battery)",
      "    flashing   4.5 J over 0.001 s    = 4500 W   (briefly brighter than",
      "                                                 a room full of lights)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and 4500 / 1.5 is 3000 again."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "ENERGY AND POWER ARE NOT THE SAME THING, and this is the cleanest example of the difference there is. The energy in that flash is about what it takes to lift a phone two metres — trivial. The POWER is enormous, because it is delivered in a slot a thousandth of a second wide. A small battery could never supply 4500 W directly; it does not have to, because it is never asked to supply it at all. It fills a bucket slowly and something else tips the bucket over."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE ELSE THIS IS THE WHOLE DESIGN. A defibrillator charges for seconds and delivers in milliseconds. So does a camera flash, a railgun, a spot welder, and the ignition coil in a petrol engine. Any time you see \"charges for a few seconds\", the device is buying power by spending time."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: that the energy going in comes back out. Not all of it does — some is lost warming the circuit while it charges, and the flash tube turns only part of what it gets into light rather than heat. So the ratio of USEFUL powers is somewhat under three thousand."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The argument itself survives all of that untouched, which is why it is worth making this way round: whatever fraction comes back, it comes back in a thousandth of the time it went in. The time ratio is doing the work and the efficiency only scales the answer."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When a number looks impossibly large, check whether it is an ENERGY or a POWER. Energies have to come from somewhere and be paid for; powers can be manufactured for free by shortening the window they are delivered in."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_cap_energy",
    "lesson": "e5",
    "unit": 10,
    "prompt": "That same 100 µF capacitor at 12 V. How much energy does it store, in millijoules?"
   }
  },
  {
   "slug": "how_slowly_can_you_swing_it",
   "title": "How slowly can you swing it",
   "ts": "2026-08-24T17:09:43+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT 3.1 METRES PER SECOND — and the surprise is how slow that is: one turn every two seconds, half a revolution a second. Slower than that and the water leaves the bucket.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THE NUMBER COMES FROM. Look only at the top of the circle, which is the hardest point. To go round, the water must accelerate towards the centre — and at the top, \"towards the centre\" is straight DOWN. The acceleration it needs is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    a = v^2 / r"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Gravity is already pulling it down at g, for nothing. The bucket can also push its contents inward — that is what the base of a bucket does — but it cannot PULL them outward; there is nothing to hold on with. So:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    v^2/r  >  g     the water needs more than gravity gives, the bucket makes",
      "                    up the rest by pushing, and everything stays in",
      "    v^2/r  <  g     gravity is more than enough, the water would need holding",
      "                    back, and nothing can hold it. It carries on in a straight",
      "                    line while the bucket curves away. That is the pour."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The edge is where they are equal:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    v^2/r = g   →   v = sqrt(g r) = sqrt(9.81 x 1) = 3.13 m/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "One turn at that speed takes 2 pi r / v = 2.0 seconds."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE MASS IS NOT IN IT. No m appears anywhere above, and that is not an accident — the weight to be carried and the force gravity supplies grow in exactly the same proportion. A full bucket and a half-full one have the same critical speed, and so does a bucket of bricks."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT ACTUALLY GOES WRONG WHEN YOU GO TOO SLOW. Not that the water \"falls out\" in the sense of pouring downwards over the rim — it keeps going in the straight line it was already travelling, and the bucket curves away from underneath it. From the ground it looks like the bucket threw it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A LONGER ROPE NEEDS A HIGHER SPEED. v = sqrt(g r), so doubling the rope needs 1.41 times the speed. But the circle is twice as big, so each turn takes LONGER: T = 2 pi sqrt(r/g), up by the same 1.41. That is the pendulum relationship wearing a different hat."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: the rope stays TAUT and the water is treated as a single lump at the end of it. Both matter."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A rope can only pull, never push, which is exactly why the condition bites at the top and nowhere else — that is the one point where \"taut\" and \"fast enough\" are the same requirement. And a real bucket has a rim: a little water can be held by the sides even below the critical speed, so the failure is a slop rather than a clean dump, and it starts slightly before the number says."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The number is the speed at which the WATER stops needing the bucket. That is the physics the question is about, and the rim is upholstery."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. For anything on a vertical circle — a bucket, a rollercoaster, a bicycle over a humpback bridge, water in a spin dryer — go straight to the worst point and ask what is available there. Everything else in the loop has an easier time than that one place."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_circ_outward",
    "lesson": "p8",
    "unit": 8,
    "prompt": "A rider on a fairground roundabout is pushed outwards by a force."
   }
  },
  {
   "slug": "which_way_does_the_strip_curl",
   "title": "Which way does the strip curl",
   "ts": "2026-08-24T16:28:35+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "IT CURLS TOWARDS THE STEEL — the steel ends up on the INSIDE of the curve and the brass on the outside.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. Heat both by the same 100 degrees and they do not grow by the same amount:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    brass   100 mm x (1 + 19e-6 x 100) = 100.190 mm",
      "    steel   100 mm x (1 + 12e-6 x 100) = 100.120 mm"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The brass is now 0.07 mm longer. But they are bonded along their whole length, so they are not free to be different lengths side by side. The only shape that lets a longer layer sit against a shorter one is a curve — and the longer layer has to take the OUTSIDE of it, because the outside of a bend is the longer path."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the brass goes outside, the steel goes inside, and the strip curls towards the steel."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE CHECK THAT MAKES IT OBVIOUS. Think of a running track. The outside lane is longer than the inside lane. If two runners must stay side by side and one has to cover more ground, that one is in the outer lane. The brass is the outer lane."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "SEVEN HUNDREDTHS OF A MILLIMETRE DOES THAT? Yes, and this is the part worth sitting with. The deflection at the free end is far larger than the mismatch, because bending turns a tiny difference in LENGTH into a large difference in POSITION — the longer the strip and the thinner it is, the more it moves for the same mismatch. A strip a few centimetres long visibly swings."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "COOL IT INSTEAD and everything reverses: the brass shrinks more, so now it is the SHORT one, it takes the inside of the curve, and the strip bends the other way."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE YOU HAVE MET IT. Every mechanical thermostat: the strip carries a contact, the curl makes or breaks the circuit, and the temperature you dial in just moves the point at which it touches. Also the flashing indicator relay in an older car, and the trip in a thermal circuit breaker."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: the bond holds. Everything above depends on the two layers being unable to slide against each other — that is what forces the mismatch into a curve instead of letting one layer simply grow past the other. Heat a badly-bonded strip and it delaminates instead of curling, which is the usual way a cheap thermostat dies."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Two smaller ones worth knowing: the expansion coefficients drift with temperature, so 19 and 12 are room-temperature figures rather than constants, and the layers are taken as equally thick. Make one much thicker than the other and it dominates the bending."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When two joined things want to be different sizes and cannot be, the mismatch has to go somewhere. Ask what shape absorbs it. That one question also gets you thermal stress in a bridge, warping in a weld, and why a mug can crack when you pour boiling water into it."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "th_bimetal",
    "lesson": "h1",
    "unit": 9,
    "prompt": "A strip of steel and brass is bonded face to face and heated. Brass expands about 1.6 times as much as steel. Which way does the strip curl?"
   }
  },
  {
   "slug": "drop_it_down_the_copper_pipe",
   "title": "Drop it down the copper pipe",
   "ts": "2026-08-24T15:47:41+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "SECONDS, NOT HALF A SECOND. A dropped stone clears a metre of pipe in",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    t = sqrt(2h/g) = sqrt(2 x 1 / 9.81) = 0.45 s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The magnet takes several seconds to drift out of the bottom, and with a strong magnet and a thick-walled pipe you can comfortably watch it go. Nothing is holding it and nothing is touching it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY, AND WHY \"COPPER IS NOT MAGNETIC\" IS TRUE AND IRRELEVANT. Copper is not attracted to a magnet, and that is the wrong property to be thinking about. Copper is an excellent CONDUCTOR, and the magnet is moving."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1. As the magnet falls, the magnetic field through each ring of pipe wall",
      "       ahead of it grows, and through each ring behind it shrinks.",
      "    2. A changing field through a conducting loop drives a current round it.",
      "       The pipe wall is a stack of such loops.",
      "    3. Lenz's law fixes the direction: the induced current always opposes the",
      "       change that produced it. So the ring ahead is driven to repel the",
      "       magnet and the ring behind is driven to attract it. Both act upwards."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The magnet is falling through a brake it is creating itself."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE PART WORTH NOTICING. The retarding force depends on the SPEED, because speed is what sets how fast the field is changing. So the magnet does not stop, and it does not fall freely either: it accelerates until the drag matches its weight,"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    mg = k v      so      v = mg / k"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and then descends at that steady speed. It has a terminal velocity, in the same way a parachutist does, but with no air involved."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE BIT THAT CATCHES PEOPLE OUT. A STRONGER magnet falls SLOWER, not faster. Doubling the field strength roughly doubles the induced current AND doubles the force on it, so the braking goes up faster than the weight does. Same for a thicker or more conductive wall."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE YOU HAVE MET THIS. It is how the speedometer in an older car works, how a train's eddy-current brake works, and why the aluminium disc in an electricity meter spins at a steady rate rather than accelerating."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK, in two parts. First, the retarding force is taken as proportional to SPEED. That is right while the magnet is slow and the field pattern in the wall keeps up with it; push it much faster and the relationship bends. Second, and more honestly: the coupling constant used above is CALIBRATED to what a neodymium magnet in a copper pipe is observed to do, not derived from the wall thickness and conductivity. Deriving it is a real piece of electromagnetism and a different question."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So treat the seconds as \"several, and you can watch it\" rather than as a prediction. What IS exact, and is the whole answer, is the direction: the induced current opposes the change that made it, so the force is always upwards, always resisting, and always larger the faster it goes."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When a material property seems to settle the question, ask which property actually matters HERE. \"Not magnetic\" is about attraction at rest; this question is about a changing field, and the property that governs that is conductivity."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_mag_brake",
    "lesson": "e6",
    "unit": 10,
    "prompt": "A strong magnet is dropped down a vertical COPPER pipe. Copper is not magnetic. What happens?"
   }
  },
  {
   "slug": "what_does_the_driver_hear",
   "title": "What does the driver hear",
   "ts": "2026-08-24T15:07:02+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ONE STEADY NOTE, AND IT NEVER CHANGES. The driver hears exactly the note the siren makes — 900 Hz if that is what it emits — from the moment it is switched on until it is switched off.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. The Doppler shift depends on the motion BETWEEN the source and the listener, not on how fast either is going. The driver and the siren are bolted to the same vehicle: the distance between them never changes, so no wavefront is ever squeezed or stretched on its way to the cab. Sitting still in a stationary ambulance and doing 70 on a motorway sound identical from the driver's seat."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT YOU HEARD INSTEAD. For a stationary listener and a source moving at v,"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    approaching   f = f0 x c/(c − v) = 900 x 343/323 = 955.7 Hz",
      "    receding      f = f0 x c/(c + v) = 900 x 343/363 = 850.4 Hz"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "so as it passed you the note fell by about 105 Hz — near enough two semitones, which is why it is so obvious. Both figures straddle the true 900 Hz, and the true note is what the driver had the whole time."
     ]
    },
    {
     "h": "THE TWO WRONG ANSWERS, AND WHY THEY ARE THE SAME MISTAKE.",
     "t": "pre",
     "lines": [
      "  \"The driver hears it drop too.\"  This treats the drop as something that",
      "  happens to the SIREN. It does not; the siren is unchanged throughout. The",
      "  drop happens to the sound on its way to you."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  \"The driver hears it higher, because they are driving into their own",
      "  sound.\"  This is the one that feels most like physics, and it is still the",
      "  same error: the driver is not catching up on the sound, because the sound",
      "  they hear left the siren a few metres away and they have not moved relative",
      "  to it at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE CHECK THAT SETTLES IT. Put v = 0 in either formula and the shift vanishes. The v that matters is the RELATIVE one, and for the driver it is zero at every speed."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: the driver hears the siren DIRECTLY, and nothing else. That is the physics the question is about, and it is not quite the whole of what a real driver hears."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Sound also leaves the siren, crosses to a wall or a parked lorry, and comes back. On that path the ambulance IS moving relative to the reflector — closing on the things ahead, retreating from the things behind — so those returns come back shifted, and shifted TWICE over (once going, once returning). A driver in a narrow street with hard walls really does hear the note wander, and it is why a siren sounds different in a tunnel."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "None of that changes the answer: the note the siren makes and the note reaching the cab through the air directly are the same, because that path has no relative motion in it at all. But \"directly\" is the word doing the work, and saying it out loud is the difference between knowing the result and knowing the physics."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. Whenever a formula has a velocity in it, ask \"relative to what?\" before using it. Most Doppler mistakes, and a fair share of relativity ones, are that question left unasked."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_dop_driver",
    "lesson": "w6",
    "unit": 11,
    "prompt": "What does the DRIVER of that ambulance hear as it speeds up, passes you, and drives away?"
   }
  },
  {
   "slug": "how_far_does_the_crate_rise",
   "title": "How far does the crate rise",
   "ts": "2026-08-24T14:27:20+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ONE METRE. You hauled four metres and the crate came up a quarter of that.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. Four rope sections hold the moving block. For the block to come up by one metre, every one of those four sections has to get one metre shorter — and all that rope has to go somewhere. It goes through your hands. So"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    rope hauled  =  sections x rise",
      "        4 m      =     4      x  1 m"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Nothing is lost and nothing is hidden; the rope you pulled in is simply shared out between the four sections that had to shorten."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE OTHER HALF, AND THE REAL POINT. The force goes the other way by exactly the same factor. Those four sections share the crate's weight, so if it weighs 1000 N, each section carries 250 N — and the one in your hand is one of them. You pull with 250 N."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    you pull    250 N through 4 m  =  1000 J",
      "    crate gets 1000 N through 1 m  =  1000 J"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The work is identical. That is the whole of what a machine does: it trades force against distance and never gives you both. A pulley block, a lever, a gear train, a hydraulic press and a screw jack are all the same bargain in different packaging."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT ABOUT ONE PULLEY? A single fixed pulley has ONE section holding the load, so the ratio is one to one: haul four metres, it rises four metres, and you pull the full 1000 N. It buys you nothing but a change of direction — which is still worth having, because pulling down while standing is easier than lifting up."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ASSUMPTION DOING THE WORK: the block is IDEAL — the sheaves turn freely, the rope is weightless and perfectly flexible, and nothing rubs. That is what lets the work in equal the work out exactly."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A real block does not. Each sheave costs a few per cent to bearing friction and to the effort of bending a stiff rope round it, and those losses compound: a four-sheave block might return 85 to 90 per cent of what you put in, so you pull rather more than 250 N. The DISTANCES are unaffected — four metres of rope still lifts the crate one metre, because that is geometry and geometry does not have losses. It is the force that pays."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Worth knowing which half of the bargain is exact and which is approximate: the rope-counting is exact, the force division is the ideal case."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. Whenever a machine seems to multiply force, find the distances. Energy in must equal energy out, so whatever the force is multiplied by, the distance is divided by. Count the rope sections and you have both numbers at once, without a formula."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_gpe",
    "lesson": "p4",
    "unit": 8,
    "prompt": "How much gravitational potential energy does a 5 kg mass gain when lifted 4 m, with g = 10? Answer in joules."
   }
  },
  {
   "slug": "carbon_dating_cannot_touch_it",
   "title": "Carbon dating cannot touch it",
   "ts": "2026-08-24T13:46:55+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "BECAUSE THERE IS NOTHING LEFT TO MEASURE. Carbon-14 has a half-life of 5,730 years, and 65 million years is over ELEVEN THOUSAND half-lives.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE FIRST WAY TO SEE IT. Each half-life leaves half of what there was, so after n of them the fraction remaining is 2 to the minus n:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    n = 65,000,000 / 5,730  =  11,344 half-lives",
      "    fraction left = 2^-11344  =  about 10^-3415"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "There is no way to picture that number. The observable universe holds roughly 10^80 atoms, so 10^-3415 of anything is not a small amount — it is a quantity that has no physical meaning at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SECOND WAY, WHICH IS THE ONE WORTH KNOWING. Exponential decay is a smooth curve on paper, but a real sample is a FINITE PILE OF ATOMS, and you cannot have half an atom. A kilogram of fresh carbon contains about"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    5 x 10^22 carbon atoms  x  1.3 x 10^-12 carbon-14 share",
      "      =  about 6.5 x 10^10 carbon-14 atoms"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Sixty-five billion atoms sounds like plenty, but halving repeatedly gets through it fast: log2(6.5 x 10^10) is only about 36. After roughly 36 half-lives — about 206,000 years — the expected number of carbon-14 atoms left in a whole kilogram drops below ONE. The curve does not gently approach zero; the sample simply runs out."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE PRACTICAL LIMIT is earlier still, around 50,000 years, because you need enough atoms left to count against contamination and background — about 0.2% of the original at that point."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "SO WHAT IS ACTUALLY USED? Isotopes with half-lives matched to the age. Potassium-40 has a half-life of 1.25 billion years and uranium-238 4.5 billion, so after 65 million years most of it is still there and the ratio is measurable. The rule is general: choose a clock whose half-life is the same order as the thing you are timing."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. Whenever a method is applied outside its range, ask how many half-lives, doublings or time constants fit into the interval. If the answer is more than about fifty, the quantity is gone — and often it is the finite number of ATOMS, not the mathematics, that ends it first."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "lg_halflife_k",
    "lesson": "lg5",
    "unit": 7,
    "prompt": "A decay has constant k = 0.05 per year in N = N0 e^(-kt). What is the half-life, in years? Give two decimal places."
   }
  },
  {
   "slug": "why_not_just_send_it_at_230",
   "title": "Why not just send it at 230",
   "ts": "2026-08-24T13:06:07+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "BECAUSE THE ENERGY LOST HEATING THE CABLES GOES AS ONE OVER THE VOLTAGE SQUARED — and at 230 V it would not merely be wasteful, it would be impossible.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE LINE THAT DOES IT. A cable has resistance R, and the power it wastes as heat is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    loss = I squared x R"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Note what is NOT in that: the voltage. The loss depends on the CURRENT. Now, to deliver a power P you need"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    P = V x I,  so  I = P / V"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Put the two together:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    loss = (P/V) squared x R"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "For a fixed amount of power delivered, raising the voltage lowers the current in proportion, and the loss falls as the SQUARE of that. Double the voltage and you waste a quarter as much. Raise it a thousandfold and you waste a millionth."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE NUMBERS, for 400 MW down a line of 10 ohms:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    at 400,000 V    current 1,000 A          loss 10 MW      2.5% of the power",
      "    at 230 V        current 1,739,130 A      loss 30,000 GW"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That second figure is not a large waste. It is seventy-five thousand times MORE power than you were trying to send in the first place, which simply cannot happen — the line would fail long before. Sending household voltage across the country is not expensive, it is impossible."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY NOT JUST USE THICKER CABLE? Because resistance falls in proportion to cross-sectional area, so to make up the same factor you would need about three million times the copper. Transformers are stupendously cheaper."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY 230 AT THE SOCKET, THEN? Because high voltage is dangerous, and once the power has arrived the distances are short — a few tens of metres of house wiring has so little resistance that the loss no longer matters. You pay the transformer cost once, at the point where the trade-off flips."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When asked why some engineering system uses an extreme value, look for a quantity that scales as a SQUARE. Whatever is being squared is usually the thing the design is really built around — here it is the current, and every transformer on the grid exists to keep it small."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_ohm",
    "lesson": "e1",
    "unit": 10,
    "prompt": "A 12 V supply drives 3 A through a resistor. What is its resistance, in ohms?"
   }
  },
  {
   "slug": "aim_straight_or_upstream",
   "title": "Aim straight or upstream",
   "ts": "2026-08-24T12:24:51+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "POINT STRAIGHT AT THE FAR BANK. It is the quicker crossing, and by a wide margin — and the striking part is that the current does not slow it down by even a fraction of a second.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "SPLIT THE VELOCITY IN TWO. Your swimming velocity has a component ACROSS the river and a component ALONG it. Only the across component carries you over, so the crossing time is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    time = width / (across component)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Point straight over and the whole of your two metres per second is the across component:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    time = 100 / 2 = 50 seconds"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Angle upstream to cancel the drift and you must aim at 30 degrees, because sin(30) = 1/2 = current/swim speed. Now only the cosine of your speed points across:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    across = 2 x cos(30) = 1.73 m/s",
      "    time = 100 / 1.73 = 57.7 seconds"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Nearly eight seconds longer, a 13% penalty, for the privilege of landing directly opposite."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE CURRENT CANNOT SLOW YOU AT ALL. The flow runs ALONG the bank, at right angles to the direction you are trying to travel. Perpendicular components are independent: the current adds nothing to your across velocity and takes nothing away. Whether the river runs at zero or at one metre per second or at nineteen, if you point straight over you arrive in exactly 50 seconds. All the current does is decide WHERE you land — here, 50 metres downstream."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "This is the same idea as the ball dropped beside a ball fired horizontally. Motion at right angles does not interfere."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT YOU ARE REALLY CHOOSING between is not speed against slowness, it is time against position: the fastest crossing lands you downstream, and landing opposite costs you time. Which is right depends on what is on the far bank, and an interviewer asking this usually wants to hear that distinction rather than a number."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "ve_resultant",
    "lesson": "v3",
    "unit": 6,
    "prompt": "Forces of 3 N east and 4 N north act on a body. What is the magnitude of the resultant, in newtons?"
   }
  },
  {
   "slug": "three_kilowatts_from_one",
   "title": "Three kilowatts from one",
   "ts": "2026-08-24T11:43:33+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "NO, IT IS REAL, AND IT IS SITTING IN THOUSANDS OF HOMES. The trick is that the box does not MAKE heat. It MOVES it.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THE OTHER TWO KILOWATTS COME FROM. A heat pump is a fridge pointed the other way. A fridge takes heat out of the food and dumps it into your kitchen; a heat pump takes heat out of the cold air outside and dumps it into your sitting room. The electricity does not become the heat — it drives the pump that carries the heat uphill, from cold to warm."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the energy balance is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    heat delivered  =  work you paid for  +  heat scavenged from outside",
      "        3 kW        =         1 kW        +          2 kW"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Nothing is created and the first law is untouched. Only ONE of those three kilowatts came out of the socket."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "BUT SURELY COLD AIR HAS NO HEAT IN IT? At 0 degrees Celsius the air is still 273 degrees above absolute zero, and every one of those degrees is energy you can take. Cold is not the absence of heat, it is just less of it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "HOW GOOD CAN IT GET? The ceiling is set by the two temperatures, and it is generous:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    ceiling  =  T_warm / (T_warm − T_cold)",
      "             =  294 / (294 − 273)",
      "             =  14"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Fourteen kilowatts of heat per kilowatt of electricity, in principle. Real units manage 3 or 4 — a fifth to a quarter of the limit — and they get worse as it gets colder outside, because the gap in the denominator widens: at −20 °C the ceiling has already fallen to about 7."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE COMPARISON THAT MATTERS. A plain electric bar heater turns 1 kW of electricity into exactly 1 kW of heat. It is 100% efficient and it cannot be beaten, because every joule becomes heat. The heat pump is not more efficient than that — the word does not apply. It is doing a different job: not converting energy, but transporting it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When a number looks like it breaks conservation, check whether the device is CONVERTING energy or MOVING it. Converters are capped at 100%. Movers are not, and the ratio you quote for them is not an efficiency at all."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_charge",
    "lesson": "e1",
    "unit": 10,
    "prompt": "A current of 2 A flows for 30 s. How much charge passes, in coulombs?"
   }
  },
  {
   "slug": "two_heaters_wired_end_to_end",
   "title": "Two heaters wired end to end",
   "ts": "2026-08-24T11:02:59+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "FIVE HUNDRED WATTS. Not two kilowatts. Not one. Adding the second heater HALVED the heat, and each heater is now giving a quarter of what it is sold as.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. A heater is just a resistance, and the rating tells you what it is. At its rated voltage,"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    P = V^2 / R    so    R = V^2 / P = 230^2 / 1000 = 52.9 ohms"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Put two of them end to end in one loop and they carry the SAME current, so the resistances add:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    R_total = 52.9 + 52.9 = 105.8 ohms"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The mains voltage has not changed. So the whole loop now dissipates"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    P = V^2 / R_total = 230^2 / 105.8 = 500 W"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and the two of them split it evenly: 250 W each."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE TRAP, AND IT CATCHES PEOPLE BOTH WAYS. Two confident wrong answers:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  \"2 kW — two kilowatt heaters, obviously.\"  That is the answer for two",
      "  heaters wired SIDE BY SIDE, each across the full 230 V. That is how sockets",
      "  actually work, and it is why the intuition feels right."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "  \"1 kW — they must share the kilowatt.\"  This assumes the power is fixed and",
      "  gets divided. It is not. Power is not a thing the mains hands out; it is",
      "  what falls out of V and R."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT ACTUALLY CHANGED. Doubling the resistance halves the current — and the heat goes as I^2 R. The current is down by a factor of 2, so I^2 is down by 4, while R is up by 2: net, half. Each element sees only half the mains voltage across it, and a quarter of its rated power."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    one heater alone   1000 W",
      "    two in series       500 W total   (250 W each)",
      "    two side by side   2000 W total   (1000 W each)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When something is \"rated\" at a number, that number is not a property of the object — it is a property of the object AT A STATED VOLTAGE. Change the voltage across it and the rating tells you nothing directly. Go back to R, which really is fixed, and work forwards from there."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "el_series",
    "lesson": "e2",
    "unit": 10,
    "prompt": "Resistors of 3 Ω and 5 Ω in series. What is the total resistance, in ohms?"
   }
  },
  {
   "slug": "the_lift_and_the_ball",
   "title": "The lift and the ball",
   "ts": "2026-08-24T10:23:18+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "IT HANGS EXACTLY WHERE YOU LET GO OF IT. Not because gravity has stopped, but because it is pulling on you and on the ball in precisely the same way.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE LINE. Everything in the lift is in free fall, so everything accelerates at g:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    acceleration of the ball        = g",
      "    acceleration of the lift        = g",
      "    acceleration of the ball AS SEEN FROM THE LIFT = g − g = 0"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Relative to you, the ball does not accelerate at all. Let go of it and it stays put, level with your hand, for the whole drop. From a 20 m shaft that is about 2.0 seconds of a ball hanging in mid-air beside you."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Note what is missing from that subtraction: any mass. A cannonball and a pea do the same thing, for the same reason a hammer and a feather land together on the Moon."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WEIGHT HAS NOT GONE ANYWHERE. Gravity still pulls the ball down with force mg — its weight is unchanged. What disappears is the NORMAL FORCE: the floor is no longer pushing up on your feet, because the floor is falling away from them just as fast as you are. The sensation we call weight is that push from the floor, not gravity itself, and that is the whole content of the word \"weightless\"."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHICH IS WHY ASTRONAUTS FLOAT. Not because there is no gravity up there — at the space station's altitude g is still about 8.7 m/s², roughly 89% of its value at the surface. They float because the station and everything in it are in free fall together, endlessly missing the Earth as they go round. It is your lift, on a longer drop."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT A REAL SHAFT DOES, raised by @jur1t in the comments on 2026-08-24 and worth the correction. Everything above assumes the car is in TRUE free fall. A real car is not: it has to push air out from underneath it and its shoes still rub on the guide rails, so it falls slightly slower than g. The ball, which has none of that, does fall at g — so it gains on the car and drifts gently down to the floor instead of hanging there indefinitely."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That does not change the answer to the question, which is about the frame and not about the upholstery: at the instant you let go, and for a good while after, the ball sits beside you rather than dropping. But \"the lift is in free fall\" is the assumption doing all the work, and it is worth being able to say so out loud — an interviewer asking this will often be waiting for exactly that."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When something behaves strangely in an accelerating box, do not reason in the room's frame and then patch it. Ask what the acceleration is in the frame you care about, subtract, and see what is left. Here the subtraction leaves nothing at all, which is exactly why it feels so odd."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_lift",
    "lesson": "p2",
    "unit": 8,
    "prompt": "A 50 kg person stands in a lift accelerating upward at 2 m/s², g = 10. What is the normal reaction force, in newtons?"
   }
  },
  {
   "slug": "which_way_do_you_push_the_bars",
   "title": "Which way do you push the bars",
   "ts": "2026-08-24T09:36:15+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "YOU PUSH THE LEFT BAR FORWARD — which steers the front wheel briefly to the RIGHT. To go left, you steer right first. It is called countersteering, every rider above walking pace does it, and almost none of them know they are doing it.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY YOU CANNOT SIMPLY STEER LEFT. Going round a corner needs a force pointing INTO the corner, and the only horizontal force available is friction where the tyres meet the road. That force acts at ground level, well below your centre of mass. Applied to an upright bike it does not turn you — it pushes the wheels out from under you and topples the bike outwards."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So before you can turn left, the bike has to LEAN left, far enough that gravity and the ground reaction line up through the centre of mass. How far is set by the speed and the corner:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    tan(theta) = v² / (r g)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "At 8 m/s round a 15 m corner that is tan(theta) = 64/147 = 0.435, a lean of about 23 degrees. Faster or tighter and it grows fast: 12 m/s round the same corner needs 44 degrees."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND HOW DO YOU MAKE IT LEAN? You cannot push against thin air. What you can do is move the wheels OUT from under yourself — and steering briefly right slides the tyre contact patch to the right of your centre of mass, so gravity drops you to the left. Once the lean is established you steer back into the turn and hold it."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "THE SEQUENCE, then: push left bar → wheel points right → bike falls left →",
      "steer left → round the corner. The first move is opposite to the destination."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "TRY IT AND SEE. On a straight quiet road at any decent speed, push gently on the left grip. The bike goes left. Push the right grip and it goes right. It feels wrong the first time, and it is the thing every motorcycle course teaches on day one, because in an emergency the instinct to steer TOWARD the danger is what puts riders into it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When a system will not respond to the obvious input, ask what has to be true before that input can work at all — and whether reaching that state needs the opposite input first. Cranes, ships and rockets all have versions of this."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_friction",
    "lesson": "p2",
    "unit": 8,
    "prompt": "A 10 kg block on a rough floor needs 25 N to keep moving steadily. What is the coefficient of friction, given g = 10? Give a decimal."
   }
  },
  {
   "slug": "how_far_can_the_stack_lean",
   "title": "How far can the stack lean",
   "ts": "2026-08-24T08:56:23+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "AS FAR AS YOU LIKE. There is no limit at all — with enough blocks a stack can hang out over a metre, a mile, any distance you name, with nothing holding it down but its own weight.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THE OVERHANG COMES FROM. Work from the top down. The top block can jut half its length past the one beneath it before its centre of mass passes the edge below. That PAIR has its centre of mass a quarter of a block back from the lower block's edge, so the pair can jut a quarter further. The next allows a sixth, then an eighth, and so on. The total for n blocks is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1/2 + 1/4 + 1/6 + 1/8 + ... + 1/2n",
      "      =  ½ (1 + 1/2 + 1/3 + ... + 1/n)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "which is one half of the HARMONIC series."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THAT MEANS NO LIMIT. The harmonic series diverges. It grows without bound, just very slowly — roughly as ln(n). So the overhang has no ceiling, and you can reach any distance you choose if you are patient enough."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE NUMBERS, and they are worth seeing:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1 block     0.500 block lengths",
      "    2 blocks    0.750",
      "    3 blocks    0.917",
      "    4 blocks    1.042   ← clear of the table entirely",
      "    10 blocks   1.465",
      "    31 blocks   2.014",
      "    100 blocks  2.594"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "FOUR BLOCKS is the striking one. Four is enough for the top block to hang completely clear of the table edge, with nothing underneath it at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND WHY IT IS SLOW. Doubling the overhang takes roughly SQUARING the number of blocks: 31 blocks reach two block lengths, and about 1,200 would be needed for three. Divergence and practicality are different questions, which is exactly the distinction an interviewer is looking for."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE MOVE WORTH LEARNING. When something looks bounded, check whether the thing that accumulates is a series, and whether that series converges. \"It gets smaller every time\" does not mean \"it adds up to something finite\" — that is the whole difference between 1/2^n and 1/n."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_stack_limit",
    "lesson": "p7",
    "unit": 8,
    "prompt": "A stack of identical blocks on a table can never overhang the edge by more than one block length in total."
   }
  },
  {
   "slug": "ten_times_taller_and_it_cannot_stand",
   "title": "Ten times taller and it cannot stand",
   "ts": "2026-08-24T08:13:16+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "NO. IT WOULD BE TEN TIMES WORSE OFF THAN YOU ARE, and its legs would fail under nothing but its own weight.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE TWO NUMBERS THAT DISAGREE. Scale every length by 10 and two things grow at different rates:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    STRENGTH follows the CROSS-SECTION of the bone, which is an area — two",
      "    lengths multiplied — so it grows by 10 x 10 = 100."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    WEIGHT follows VOLUME, which is three lengths multiplied, so it grows by",
      "    10 x 10 x 10 = 1000."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The giant is 100 times stronger and 1000 times heavier. Strength per unit of weight is therefore 100/1000 = one TENTH of yours. Ten times taller means ten times worse, and in general the ratio goes as 1/k: the penalty is not a quirk of the number 10, it applies at every size."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THIS IS THE SQUARE-CUBE LAW, and it is a geometric fact, not a biological one. Nothing about the material changed — the bone is the same bone. The two exponents, 2 for area and 3 for volume, simply refuse to keep pace."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT IT EXPLAINS, all with the same one line:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    An ant lifts many times its own weight; an elephant cannot. Not stronger",
      "    muscle — a better ratio, because it is small."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    Real large animals are not scaled-up small ones. An elephant's leg bones",
      "    are disproportionately THICK, precisely to buy back the area they lost."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    A mouse survives a fall that kills a horse: drag follows area, weight",
      "    follows volume, so terminal velocity goes as the square root of size."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    Crushed ice melts faster than a block: surface area per unit volume is",
      "    6/L, so smaller means relatively more surface."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE INTERVIEW MOVE. When you are asked whether something can be scaled up, do not reach for numbers. Ask which quantities follow an area and which follow a volume, and the answer usually falls out before any arithmetic does."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "es_square_cube",
    "lesson": "es5",
    "unit": 12,
    "prompt": "Why can an ant carry many times its own weight while an elephant cannot?"
   }
  },
  {
   "slug": "the_second_speaker_makes_it_quieter",
   "title": "The second speaker makes it quieter",
   "ts": "2026-08-24T07:25:45+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "NO. AT SOME PLACES THE SECOND SPEAKER MAKES IT QUIETER, and at some it cancels the note almost completely — two speakers producing silence where one produced sound.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. Sound from the two speakers reaches you along two different paths. What matters is not how far you are from either one, but how much FURTHER one path is than the other — the path difference."
     ]
    },
    {
     "h": "PATH DIFFERENCE A WHOLE NUMBER OF WAVELENGTHS",
     "t": "pre",
     "lines": [
      "    The two waves arrive in step. Crest lands on crest, and you get a LOUD",
      "    spot — louder than one speaker alone."
     ]
    },
    {
     "h": "PATH DIFFERENCE AN ODD NUMBER OF HALF-WAVELENGTHS",
     "t": "pre",
     "lines": [
      "    One wave arrives half a cycle behind. Crest lands on trough, they cancel,",
      "    and you get a QUIET spot — quieter than one speaker alone."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Walk along the line and you pass through these alternately: loud, quiet, loud, quiet. The note does not fade smoothly, it comes and goes in bands."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "PUTTING NUMBERS ON IT. For a 1700 Hz note with sound at 340 m/s:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    wavelength = v/f = 340/1700 = 0.2 m"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the first quiet spot is where one path is longer than the other by half of that — just 10 CENTIMETRES of extra distance. With the speakers 2 m apart and the walking line 6 m away, that happens about 30 cm from the centre line. You can walk from a loud spot into a quiet one in a single step."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THE ENERGY GOES, since it is not destroyed: it is redistributed. The loud spots are more than twice as loud as one speaker would be, and they take exactly what the quiet spots gave up. Add over the whole room and the total is what you would expect from two speakers."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SAME IDEA, ELSEWHERE. Noise-cancelling headphones deliberately generate the half-wavelength-behind wave. The double-slit fringes are this pattern in light. And it is why a hi-fi shop sounds different as you move your head — you are walking through the bands."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_path_quiet",
    "lesson": "w4",
    "unit": 11,
    "prompt": "Two speakers 1 m apart play a 1700 Hz note in phase; sound travels at 340 m/s. What is the SMALLEST path difference, in metres, that gives a quiet spot?"
   }
  },
  {
   "slug": "pull_the_bottom_pedal_backwards",
   "title": "Pull the bottom pedal backwards",
   "ts": "2026-08-24T01:26:23+00:00",
   "date": "24 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "IT ROLLS BACKWARDS — the same way you pulled. Most people say forwards, reasoning that pulling the pedal back is pedalling backwards, and that a backwards pedal ought to drive the bike forwards. It does not.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE CLEANEST ARGUMENT IS BY CONTRADICTION. Suppose the bike rolled FORWARDS. Then the rear wheel turns forwards, and through the chain the cranks turn forwards too. A pedal sitting at the BOTTOM of its circle, with the cranks turning forwards, swings BACKWARDS relative to the frame — but the frame is moving forwards faster than the pedal swings back, so the pedal would end up moving FORWARDS relative to the ground. And your hand is pulling it backwards. A body cannot move opposite to the only horizontal force on it. So the bike cannot roll forwards, and it rolls back."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE PEDAL LOSES THE ARGUMENT. Put numbers on the two competing motions for each metre the bike moves:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    the bike carries the pedal with it              1.00 m",
      "    the chain swings the pedal the other way        L x (rs/rc) / R"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "For an ordinary bike — crank 0.17 m, rear sprocket 0.045 m, chainring 0.11 m, wheel 0.34 m — that second term is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    0.17 x (0.045/0.11) / 0.34  =  0.20 m"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Only a fifth of a metre against a full metre. The pedal is dragged along by the bike far more than the chain can swing it the other way, so the pedal always goes the way the BIKE goes. Pull it backwards and the bike must come backwards with it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE GENERAL CONDITION. The bike goes the way you pull whenever"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    L x rs / (rc x R)  <  1"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and for any real bicycle that number is around 0.2 to 0.5 — nowhere near 1. To reverse the behaviour you would need a crank longer than the wheel is big. The answer is not a quirk of one bike; it holds for every bike you will ever meet."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT MAKES IT A GOOD INTERVIEW QUESTION. There is a tempting wrong answer with a story attached, and the right answer needs you to notice that the pedal's motion has TWO parts and to compare their sizes. That is the habit being tested, not the bicycle."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_v2",
    "lesson": "p1",
    "unit": 8,
    "prompt": "A car decelerates from 20 m/s to rest in 40 m. What is the magnitude of its acceleration, in m/s²?"
   }
  },
  {
   "slug": "twenty_newtons_lifts_a_car",
   "title": "Twenty newtons lifts a car",
   "ts": "2026-08-23T22:28:48+00:00",
   "date": "23 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "500 NEWTONS. Twenty five times what you put in — which is exactly the area ratio.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. A fluid cannot support a shear, so the pressure it carries is the same everywhere in it. That is Pascal's principle, and it is the whole machine:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    pressure  p = F/A = 20 / 2 = 10 N per cm²"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That same 10 N per cm² presses on every square centimetre of the wide piston, and there are 50 of them:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    F = p x A = 10 x 50 = 500 N"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The force is multiplied by the AREA RATIO, 50/2 = 25. Nothing about the shape of the pipe, the length of it or the amount of oil matters at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "BUT NOTHING IS FREE, and this is the half that gets asked in an interview. The oil is incompressible, so whatever volume leaves the narrow cylinder arrives in the wide one:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    A₁ d₁ = A₂ d₂     ->     d₁/d₂ = A₂/A₁ = 25"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Push the narrow piston 25 cm and the wide one rises 1 cm. Check the work:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    in    20 N x 0.25 m = 5 J",
      "    out   500 N x 0.01 m = 5 J"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Identical. You have not gained energy — you have traded distance for force, which is what every simple machine does. A lever, a pulley block, a gear train and a hydraulic jack are the same bargain wearing different clothes."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE YOU MEET IT. Car brakes: a light push on the pedal becomes a large force at four brake calipers at once, because one master cylinder feeds them all at the same pressure. A garage jack lifts a tonne from a hand pump, at the cost of a great many strokes."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_hydraulic",
    "lesson": "p6",
    "unit": 8,
    "prompt": "A hydraulic jack has pistons of 2 cm² and 50 cm². You push the small one with 20 N. What force does the large one deliver, in newtons?"
   }
  },
  {
   "slug": "the_angle_light_cannot_leave",
   "title": "The angle light cannot leave",
   "ts": "2026-08-23T21:49:09+00:00",
   "date": "23 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "ABOUT 42 DEGREES. Past that, none of it gets out — it all reflects back in.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The angle is called the CRITICAL ANGLE, and for ordinary glass it is 41.8°, measured from the normal (the line perpendicular to the surface), not from the surface itself."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE IT COMES FROM. Snell's law across the boundary, with glass n = 1.5 and air n = 1:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    n sin(inside) = 1 x sin(outside)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "As the inside angle grows, the outside angle grows faster, because it is being multiplied by 1.5. The escaping ray flattens toward the surface, and the critical angle is exactly where it would flatten to 90° — lying along the surface:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1.5 sin C = sin 90 = 1",
      "    sin C = 1/1.5 = 0.667",
      "    C = 41.8°"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Steeper than that and the equation asks for sin(outside) > 1, which has no solution. There is no escaping ray to be had, so all of the light reflects back into the glass. That is TOTAL internal reflection — total because none is lost, unlike an ordinary mirror."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "IT DEPENDS ON THE MATERIAL, through sin C = 1/n:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    water    n = 1.33   C = 48.8°",
      "    glass    n = 1.50   C = 41.8°",
      "    diamond  n = 2.42   C = 24.4°"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Diamond's tiny critical angle is why it sparkles: light that gets in bounces around many times before finding an angle shallow enough to leave."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT MATTERS TO AN ENGINEER. This is the whole principle of the optical fibre. Light entering a fibre nearly along its axis meets the wall at a very steep angle — far past critical — so it cannot leave, and it bounces the length of the cable losing almost nothing. Every transatlantic message you have ever sent went that way."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "ONE DIRECTION ONLY. It happens going from dense to less dense — glass to air, never air to glass. Coming the other way the ray always bends toward the normal and always gets in."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_critical",
    "lesson": "w2",
    "unit": 11,
    "prompt": "What is the critical angle for glass of refractive index 1.5, in degrees, to the nearest degree?"
   }
  },
  {
   "slug": "one_dropped_one_fired",
   "title": "One dropped, one fired",
   "ts": "2026-08-23T21:08:37+00:00",
   "date": "23 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "THEY LAND TOGETHER. Exactly together, however hard the second one is fired.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Almost everyone says the dropped one, because the fired one \"has further to travel\". It does travel further — but not DOWNWARD, and only downward motion is racing gravity."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. Split the motion into two directions and they do not talk to each other:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    vertically    both start with zero downward speed and both accelerate at g",
      "    horizontally  one has speed u, the other zero — and gravity does not care"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The vertical equation is the same for both balls:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    h = ½gt²   ->   t = sqrt(2h/g)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "There is no u in it. From 5 m with g = 10 that is t = 1.00 s for both, whether the second ball is fired at 1 m/s or 100 m/s. Fire it hard enough and it lands a hundred metres away — still after exactly one second."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE IDEA WORTH KEEPING. Perpendicular components of motion are independent. It is why every projectile question on the paper splits into two easy one-dimensional problems instead of one hard two-dimensional one: resolve, solve each direction separately, recombine at the end."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE IT STOPS BEING TRUE. Air resistance couples the two: it acts along the direction of travel, so a fast-moving ball feels a drag with an upward component and does hang very slightly longer. In a vacuum, or at the speeds of a classroom demonstration, the effect is far too small to see — which is why the demonstration works, and why the exam says \"ignore air resistance\" rather than pretending it does not exist."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "MythBusters filmed this with a real gun and a dropped ball. Both hit at the same instant, to within the resolution of a high-speed camera."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_distance",
    "lesson": "p1",
    "unit": 8,
    "prompt": "Same ball, same g = 10. How far has it fallen in 3 s, in metres?"
   }
  },
  {
   "slug": "the_can_that_wastes_least",
   "title": "The can that wastes least",
   "ts": "2026-08-23T20:28:58+00:00",
   "date": "23 Aug 2026",
   "topic": "real_world",
   "q": null,
   "a": "THE HEIGHT EQUALS THE DIAMETER. The can is exactly as tall as it is wide.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Almost nobody guesses this. The instinct is that a tall thin can is efficient, because it looks lean — but a tall can is nearly all curved side, and a squat one is nearly all lid and base. The cheapest shape sits between them, and it is a long way from where most people put it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE WORKING, which is the standard exam method: write the thing you want in ONE variable, then differentiate."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    volume      V = pi r^2 h,  so  h = V / (pi r^2)",
      "    metal       A = 2 pi r^2  +  2 pi r h        (two ends + the side)",
      "    substitute  A = 2 pi r^2  +  2V / r",
      "    minimise    dA/dr = 4 pi r  -  2V / r^2  =  0",
      "                r^3 = V / (2 pi)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Now put that back into the height:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    h = V / (pi r^2) = 2r"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So h = 2r — the height is twice the radius, which is the diameter. The can is as tall as it is wide, whatever the volume. The V cancels, so the SHAPE is always the same; only the size changes."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A CONCRETE CASE. With V = 16 pi the best radius is 2 and the height is 4, using about 75.4 units of metal. Move away in either direction and it costs you:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    r = 1.5   ->  81.2      r = 2.0  ->  75.4      r = 2.5  ->  79.5"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY REAL CANS ARE NOT THIS SHAPE. Look in any cupboard and the tins are taller than they are wide. The model assumes metal is the only cost and every part of it costs the same — but the ends are cut from sheet and waste the corners, the seam costs extra, and cans have to fit a hand and a shelf. A good engineer gets the mathematical answer first and THEN asks which assumption reality is breaking. The gap between 75.4 and what a factory actually does is where the engineering is."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "es_scale_area",
    "lesson": "es5",
    "unit": 12,
    "prompt": "You double every length of an object. By what factor does its surface area grow?"
   }
  },
  {
   "slug": "he_never_quite_catches_it",
   "title": "He never quite catches it",
   "ts": "2026-08-23T19:07:34+00:00",
   "date": "23 Aug 2026",
   "topic": "paradox",
   "q": null,
   "a": "HE PASSES IT AFTER 100/9 SECONDS, 1000/9 METRES — about 11.1s and 111.1m.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Zeno's argument is not wrong about the gaps. There really are infinitely many of them, and he really does have to close every one. The mistake is the quiet assumption that infinitely many gaps must take infinitely long."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE DIRECT ANSWER, which takes one line. He gains 9 metres of ground every second, and he needs to make up 100 metres:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    time = 100 / (10 - 1) = 100/9 s = 11.11...",
      "    distance = 10 x 100/9 = 1000/9 m = 111.11..."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SAME ANSWER THE LONG WAY, which is the interesting one, because it is Zeno's own construction taken seriously. Each stage runs to where the tortoise was:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    stage 1    100 m       (10 s)     it has moved 10 m",
      "    stage 2     10 m       (1 s)      it has moved 1 m",
      "    stage 3      1 m       (0.1 s)    it has moved 0.1 m",
      "    stage 4      0.1 m     (0.01 s)   ..."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The stage lengths are 100, 10, 1, 0.1, ... — a geometric series with ratio 1/10. Infinitely many terms, and they add to a finite number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    100 x (1 + 1/10 + 1/100 + ...) = 100 x 1/(1 - 1/10) = 100 x 10/9 = 1000/9"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The same 111.11... metres. Zeno's infinity of steps and the schoolboy sum are not rivals: they are the same journey counted two ways."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT THE PARADOX ACTUALLY SHOWS. Not that motion is impossible — that an infinite sequence of events can occupy a finite stretch of time. Every one of the infinitely many stages happens, and all of them are over by 11.11 seconds. Cutting a finite thing into infinitely many pieces does not make it bigger, and the intuition that it must is the thing worth giving up."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT TOOK TWO THOUSAND YEARS. Convergence was not made precise until the 19th century. Before that the honest position was that the answer is obviously 111.1m and nobody could say cleanly why the argument against it failed."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_boat_holds_one",
   "title": "The boat holds one",
   "ts": "2026-08-23T18:27:32+00:00",
   "date": "23 Aug 2026",
   "topic": "puzzles",
   "q": null,
   "a": "SEVEN crossings, and the reason is that the goat has to come back.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Almost everyone answers five. That is the count you get if you assume each item crosses once and the farmer rows back between them: over, back, over, back, over. It is exactly the answer to the puzzle WITHOUT the eating rules -- run the same search with the rules removed and it returns 5. The rules cost two extra trips, and both are spent on the same animal."
     ]
    },
    {
     "h": "THE SEQUENCE",
     "t": "pre",
     "lines": [
      "    1. take the GOAT over          (wolf + cabbage left alone: fine)",
      "    2. row back empty",
      "    3. take the WOLF over          (cabbage alone: fine)",
      "    4. bring the GOAT BACK         <- the move nobody wants to make",
      "    5. take the CABBAGE over       (goat alone on the near bank: fine)",
      "    6. row back empty",
      "    7. take the GOAT over"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY STEP 4 IS THE WHOLE PUZZLE. Every other move is forced once you accept it. The goat is the only item that is dangerous in both directions -- it eats the cabbage and is eaten by the wolf -- so it can never be left with either of the others. That means the goat must cross first, and it means the second animal over cannot simply be dropped and left. Undoing progress is the only way forward, which is why the puzzle is a thousand years old and still works."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "STARTING WITH ANYTHING ELSE FAILS IMMEDIATELY. Take the wolf first and the goat eats the cabbage behind you. Take the cabbage first and the wolf eats the goat. There is no recovery from either, so the first move is not a choice at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE GENERAL SHAPE. This is a shortest path through a graph of states -- who is on which bank, and where the boat is. Ten states are reachable under the rules, and the answer is the distance from one corner to the other. Written that way it stops being a riddle and becomes a search, which is how a computer would do it and how the same trick solves much bigger crossing puzzles."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "It is usually credited to Alcuin of York, around 800 AD."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "one_red_already_out",
   "title": "One red already out",
   "ts": "2026-08-23T17:13:39+00:00",
   "date": "23 Aug 2026",
   "topic": "probability",
   "q": null,
   "a": "ONE IN THREE, not one in two.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Most people picture what is left as \"one red, one blue\" and say a half. Count again. The bag started with FOUR marbles: red, red, blue, blue. One red is now out, so THREE remain -- one red and two blue. The chance the next is red is one of those three."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    started      R R B B",
      "    taken out    R",
      "    still in     R B B      ->  1 in 3"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE HALF FEELS RIGHT, which is the interesting part. The instinct is not stupid -- it is a rule that works on big bags misapplied to a tiny one. With fifty red and fifty blue, taking one red out leaves 49 red against 50 blue, and the chance really is 0.495, near enough a half to ignore. Removing one marble barely dents a hundred. It dents four enormously."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2 red 2 blue      1/3    = 0.333",
      "    3 red 3 blue      2/5    = 0.400",
      "    5 red 5 blue      4/9    = 0.444",
      "    50 red 50 blue    49/99  = 0.495"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the intuition is a LIMIT, and the puzzle sets the bag small on purpose to put you far from it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE GENERAL RULE. Drawing without putting things back changes the pot, and the smaller the pot the more each draw changes it. Card counting is this same observation taken seriously: every card that goes past changes what is left, and in a single deck it changes it a lot."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A DIFFERENT QUESTION, WORTH KEEPING STRAIGHT. The chance that BOTH your first two marbles are red -- asked before you draw anything -- is 1/2 x 1/3 = 1/6. That is a different number because it is a different question: one is asked before any draw, the other after a red has already appeared. Mixing the two up is the commonest error in conditional probability, and it is worth being able to say which one you are answering."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_both_red",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "A bag holds 4 red and 6 blue counters. Two are taken out without replacement. What is the probability both are red? Give it as a decimal to three places."
   }
  },
  {
   "slug": "weigh_yourself_for_your_heart",
   "title": "Bathroom scales, for your heart",
   "ts": "2026-08-23T13:02:20+00:00",
   "date": "23 Aug 2026",
   "topic": "",
   "q": "You weigh yourself every morning. This is the same habit, pointed at your heart.",
   "a": "Genuinely asking, not rhetorically: what would you want a daily reading like this to tell you?",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Illness before you feel it? Whether you are training too hard? Sleep? Something I have not thought of? Every answer goes into what actually gets built."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Early access list is the link in my bio."
     ]
    }
   ],
   "src": "comment",
   "road": {
    "qid": "me_v2",
    "lesson": "p1",
    "unit": 8,
    "prompt": "A car decelerates from 20 m/s to rest in 40 m. What is the magnitude of its acceleration, in m/s²?"
   }
  },
  {
   "slug": "five_in_the_queue",
   "title": "Five in the queue",
   "ts": "2026-08-23T12:22:07+00:00",
   "date": "23 Aug 2026",
   "topic": "combinatorics",
   "q": null,
   "a": "ONE HUNDRED AND TWENTY.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Build the queue one place at a time. Five people could stand at the front. Once the front is settled, four are left for second place, then three, then two, and the last person has nowhere else to go:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    5 x 4 x 3 x 2 x 1  =  120"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That product has a name -- five factorial, written 5! -- and it is the count of ways to put five distinct things in a row."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS NOT FIVE, AND NOT TWENTY-FIVE. Five is the number of PEOPLE, not the number of queues. Twenty-five would be right if each of the five places could be filled by any of the five people, but a person cannot stand in two places at once, so each choice removes someone from the pool. That shrinking pool is what turns 5x5x5x5x5 into 5x4x3x2x1."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "HOW FAST IT CLIMBS. This is the part worth carrying away:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    3 friends            6 queues",
      "    4 friends           24",
      "    5 friends          120",
      "    6 friends          720",
      "    10 friends   3,628,800"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Adding ONE more friend does not add a few more queues -- it MULTIPLIES the total by the new number of people. Going from five to six multiplies by six. Ten friends would take you past three and a half million, which is more orders than you could photograph in a lifetime of bus journeys."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE THING THAT MAKES IT CLICK. Any time you count arrangements of distinct things where every position matters and nothing repeats, you get this shrinking product. Seating plans, race finishes, the order of songs on a playlist, the sequence in which jobs run. And it explains why \"just try all the orders\" stops being advice almost immediately: at twenty items there are more orderings than there are grains of sand on Earth."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_queue_orders",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "Six people queue at a bus stop. In how many different orders can they stand?"
   }
  },
  {
   "slug": "how_many_different_pizzas",
   "title": "How many different pizzas",
   "ts": "2026-08-23T11:37:53+00:00",
   "date": "23 Aug 2026",
   "topic": "combinatorics",
   "q": null,
   "a": "ONE THOUSAND AND TWENTY-FOUR.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Go topping by topping. For each one there are two choices — on the pizza or not — and those choices are independent of each other. Ten toppings, two ways each:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2 x 2  =  2^10  =  1024"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE PEOPLE FORGET is the plain pizza: take none of the ten. It is a real order and it is one of the 1024. The same goes for the everything pizza. The count runs from the empty selection to the full one, and both ends are included."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS NOT TEN. Ten is the number of TOPPINGS, not the number of pizzas. It is the answer to \"how many things can I add\", which is a different question and the one the mind reaches for first."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS NOT FIFTY-FIVE either, which is the other common answer: that is what you get counting one-topping pizzas plus two-topping pizzas and so on and stopping early, or from a half-remembered formula. Count every size properly and they add to 1024:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    0 toppings   1        5 toppings  252",
      "    1 topping   10        6 toppings  210",
      "    2 toppings  45        7 toppings  120",
      "    3 toppings 120        8 toppings   45",
      "    4 toppings 210        9 toppings   10",
      "                         10 toppings    1"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "EVERY EXTRA TOPPING DOUBLES THE MENU. That is the part worth carrying away. Going from ten toppings to eleven does not add a few pizzas, it adds another 1024. Twenty toppings would be over a million. A menu that looks like a modest list is a combinatorial object that outgrows any kitchen."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. Anything built from independent yes-or-no choices: subsets of a set, on/off configuration flags, which items go in a basket, which of n conditions hold. The count is always 2^n, it always includes the empty case, and it always grows faster than the list that produced it. The moment someone says \"we only have twenty settings\", the number of configurations is already past a million."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_pizzas",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "A shop offers eight toppings. How many different pizzas have exactly three different toppings?"
   }
  },
  {
   "slug": "the_frog_comes_home",
   "title": "The frog comes home",
   "ts": "2026-08-23T10:55:19+00:00",
   "date": "23 Aug 2026",
   "topic": "probability",
   "q": null,
   "a": "SIX SECONDS — the same as the number of pads.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE-LINE REASON. Over a long time the frog spends an equal share of its life on every pad, because the ring treats all six alike. So it is on the home pad one second in six. If you visit a place one time in six, the average gap between visits is six. That is the whole argument, and it works on any ring: n pads, n seconds."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The general statement is that for a random walk like this, the average time to return to a spot is one divided by the long-run share of time spent there."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "BUT SIX IS NOT THE TYPICAL RETURN. This is the part worth keeping. The frog hops away and then hops straight back half of the time:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    right then left    hop back home",
      "    left then right    hop back home",
      "    right then right   two pads away",
      "    left then left     two pads away"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Two of those four paths are home in two seconds, so HALF of all returns take exactly two hops. The most common outcome is two, the average is six, and both are correct. The average is dragged up by a long tail of wanderings that go the scenic route round the far side of the ring."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That gap between the typical and the average is the real lesson. Anyone who simulates this a few times and sees \"two, two, four, two\" will confidently answer two or three, and they will have measured the mode while being asked for the mean."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "CONTRAST WITH THE INFINITE LINE. Put the same frog on an endless row of pads instead of a ring. It still returns home with probability one — it is certain to come back. But the average time it takes is INFINITE. Closing the row into a ring of six changes an infinite expected wait into six seconds, because the frog can no longer wander arbitrarily far without coming round the other side."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. Any recurring state in a system that shuffles between states: how often a machine is idle, how long between visits to a particular configuration, the average gap between repeat customers. The share of time in a state and the average wait between visits are reciprocals of each other, and knowing one always gives you the other."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "gold_at_least_once",
   "title": "Gold at least once",
   "ts": "2026-08-23T10:08:27+00:00",
   "date": "23 Aug 2026",
   "topic": "probability",
   "q": null,
   "a": "SEVEN SIXTEENTHS — about 44%, not a half.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE TEMPTING ANSWER is a quarter plus a quarter, which is a half. Adding is almost right and always wrong, and here is the quickest way to see it: if adding worked, five spins would give five quarters, which is more than one. A chance above certainty is not an approximation, it is a broken rule."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ROUTE THAT WORKS. \"At least once\" is awkward to count directly, because gold could come on the first spin, or the second, or both. Its opposite is one clean event: NO gold at all."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    no gold on one spin        3/4",
      "    no gold on both spins      3/4 x 3/4  =  9/16",
      "    so gold at least once      1 - 9/16   =  7/16"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY MULTIPLY. The spins do not affect each other, so of the 3/4 of the time you miss on the first spin, you miss again on 3/4 of THOSE occasions. Three quarters of three quarters is nine sixteenths — a smaller slice of an already smaller slice, which is why probabilities shrink when you multiply and why \"and\" is never \"plus\"."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SAME COUNT, BY HAND. Cut the spinner into four equal quarters, one gold. Two spins make 4 x 4 = 16 equally likely pairs of quarters. Seven of them contain the gold quarter: the gold one paired with each of the four second results is 4, the three non-gold firsts paired with a gold second is 3, and 4 + 3 = 7. Seven out of sixteen. No formula, and the same answer."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "BOTH GOLD IS A DIFFERENT QUESTION, and worth keeping straight: that is 1/4 x 1/4 = 1/16, about 6%. \"At least one\" and \"both\" are the two ends of the same calculation and people mix them constantly."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "HOW IT GROWS. With n spins the chance of at least one gold is 1 - (3/4)^n: 7/16 for two, 37/64 for three, and it approaches one without ever reaching it. That is the shape of every \"at least once\" question — a rare event repeated enough becomes likely, but never guaranteed."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. Any repeated exposure: at least one failure in n components, at least one match in n attempts, at least one outage in a year. The working move is always the same — compute the chance of NOTHING happening, and take it off one."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_at_least_one",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "A fair die is rolled three times. What is the probability of at least one six? Give it as a decimal to three places."
   }
  },
  {
   "slug": "which_light_do_you_meet",
   "title": "Which light do you meet",
   "ts": "2026-08-23T09:28:54+00:00",
   "date": "23 Aug 2026",
   "topic": "probability",
   "q": null,
   "a": "RED — you meet it half the time.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The cycle is 25 + 5 + 30 = 60 seconds. Arriving \"at random\" means every second of that minute is equally likely, so each colour's chance is the share of the minute it occupies:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    red      30 of 60     =  1/2      50%",
      "    green    25 of 60     =  5/12     41.7%",
      "    amber     5 of 60     =  1/12      8.3%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE TRAP is three colours, so one in three. That would be right if you picked a colour out of a hat. You are not picking a colour — you are picking a MOMENT, and the moments are not shared out evenly between the lamps. One in three is wrong for all three of them: too low for red, too low for green, and four times too high for amber."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT \"AT RANDOM\" ACTUALLY MEANS HERE. It means uniform over TIME. Whenever the thing you are sampling is a moment in a repeating cycle, the probability of any state is the fraction of the cycle it lasts. Nothing else about the light matters — not the order of the colours, not where you start counting."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A DETAIL WORTH NOTICING. Red beats green by 5 seconds, which is 1/12 of the cycle — and 1/12 is exactly amber's share. Move amber's five seconds into green and the light would be red and green equally often. The whole result turns on one short lamp."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS NOT A TRICK QUESTION. Real lights are close to this: reds usually run longer than greens on the minor road of a junction, which is why waiting feels more common than sailing through. The feeling is right, and it has a number."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. Anything sampled by arriving at a random time rather than by choosing an item: which machine state you catch, which phase of a process you observe, how often a monitor sees a system busy. Long states are over-represented in what you see, in exact proportion to how long they last — and if you count states instead of time, you will be wrong every time."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "a_double_or_a_six",
   "title": "A double or a six",
   "ts": "2026-08-23T08:49:10+00:00",
   "date": "23 Aug 2026",
   "topic": "probability",
   "q": null,
   "a": "NEITHER — they are equally likely. One chance in four each.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The set has 28 tiles: every unordered pair of numbers from 0 to 6, each appearing once."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    DOUBLES        0-0  1-1  2-2  3-3  4-4  5-5  6-6          7 tiles",
      "    SHOWS A SIX    6-0  6-1  6-2  6-3  6-4  6-5  6-6          7 tiles"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Seven out of 28 is one quarter, both times."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THEY MATCH, WITHOUT COUNTING. Each list is built the same way: pick a number from 0 to 6 and there is one tile for it. A double is \"the tile where this number meets itself\". A six-tile is \"the tile where this number meets a six\". Both are one tile per number, and there are seven numbers, so both lists have seven entries. The match is not a coincidence; it is the same construction twice."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That also tells you the six is not special. Ask for tiles showing a THREE and you get seven again — 3-0 through 3-6. Every number appears on exactly seven tiles, which is why the set has 7 x 7 = 49 halves... but only 28 tiles, because each tile carries two halves and the doubles carry two of the same."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE TILE IN BOTH LISTS. 6-6 is a double AND shows a six. So if you ask for the chance of drawing a tile that is EITHER, it is not 7 + 7 = 14 out of 28. It is 13 out of 28, because 6-6 would be counted twice. That is the inclusion- exclusion correction, and forgetting it is the classic slip."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY 28 AND NOT 49. Seven numbers, each pairing with seven others, is 49 ordered pairs — but 3-5 and 5-3 are the same tile. The 42 non-doubles collapse into 21, and the 7 doubles stand alone: 21 + 7 = 28."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. Two categories that feel different sizes because one has a memorable name. \"Doubles\" sounds rare and special; \"has a six in it\" sounds broad. Both are seven. Whenever you compare two subsets, count the construction rather than trusting how each one sounds."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_double_or_six",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "Two fair dice are thrown. What is the probability of a double OR at least one six? Give it as a decimal to three places."
   }
  },
  {
   "slug": "the_letters_of_banana",
   "title": "The letters of banana",
   "ts": "2026-08-23T08:08:51+00:00",
   "date": "23 Aug 2026",
   "topic": "combinatorics",
   "q": null,
   "a": "SIXTY.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Start with the wrong answer, because it is the one most people give. Six letters in six positions is 6 x 5 x 4 x 3 x 2 x 1 = 720. That would be right if every letter were different. They are not."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT GOES WRONG. Label the three A's as A1, A2, A3 for a moment. The 720 counts BA1NA2NA3 and BA2NA1NA3 as two different words. Look at them without the labels and they are both BANANA. The same word, counted twice — and in fact counted once for every way of shuffling the A's among themselves."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "There are 3 x 2 x 1 = 6 ways to arrange three A's, and 2 ways to arrange two N's. So every genuinely different word has been counted 6 x 2 = 12 times over."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    720 / 12 = 60"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE RULE. For a word of n letters where a letter repeats a times, another b times and so on, the count is n! divided by a! x b! x ... You divide out exactly the shuffles you cannot see."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A SECOND ROUTE, IF DIVIDING FEELS LIKE A TRICK. Choose positions instead. Of the six slots, pick which three hold the A's: that is 20 ways. Of the three slots left, pick which two hold the N's: 3 ways. The B takes the last slot, 1 way. 20 x 3 x 1 = 60. No division anywhere, and the same answer."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT MATTERS. This is the difference between things that are distinct and things that are merely in different places. Every time you count arrangements of anything with repeats — routes with repeated steps, schedules with identical shifts, sequences of wins and losses — the raw factorial overcounts, and by a factor you can name precisely. Getting that factor right is the whole skill."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_letter_words",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "How many different arrangements are there of the six letters in the word LETTER?"
   }
  },
  {
   "slug": "every_hand_in_the_room",
   "title": "Every hand in the room",
   "ts": "2026-08-23T07:28:08+00:00",
   "date": "23 Aug 2026",
   "topic": "combinatorics",
   "q": null,
   "a": "FORTY-FIVE.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The trap first, because most people fall in it. Each of the ten people shakes nine hands, and ten times nine is ninety. That counts every handshake TWICE — once from each side. When you and I shake hands, that is one handshake, not two. Halve it: ninety over two is forty-five."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT IT REALLY COUNTS. A handshake is a PAIR of people, and nothing else about it matters — not who offered first, not the order. So the question is how many pairs ten people make. Take the first person: nine handshakes. The second has already shaken the first, so eight new ones. The third adds seven, and so on:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 45"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the same 45, arrived at without dividing anything, and it is why the answer is a triangular number."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE GENERAL SHAPE. With n people it is n(n-1)/2. Ten gives 45; twenty gives 190; a hundred gives 4,950. Double the room and you roughly QUADRUPLE the handshakes, because each new person shakes everyone already there. That quadratic growth is the whole reason large meetings do not scale: the connections grow far faster than the people."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY EVERY EDGE COUNTS ONCE. Draw ten dots and join every pair. What you have is a complete graph, and its edges are exactly the handshakes. Counting edges by walking round the dots gives 10 x 9, and every edge gets walked from both ends — which is the doubling, seen a second way."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. Pairwise anything: league fixtures where each team plays each other once, cables between machines, comparisons between items in a sort, messages in a group where everyone must tell everyone. The count is never the number of things — it is the number of pairs, and that is the number people get wrong."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_pizzas",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "A shop offers eight toppings. How many different pizzas have exactly three different toppings?"
   }
  },
  {
   "slug": "every_route_to_the_corner",
   "title": "Every route to the corner",
   "ts": "2026-08-23T06:47:01+00:00",
   "date": "23 Aug 2026",
   "topic": "combinatorics",
   "q": null,
   "a": "TWENTY.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every route is six steps long: three of them right, three of them up. You never get a choice about HOW MANY of each — the grid decides that. The only thing a route decides is the ORDER."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the question becomes: in how many orders can you take three rights and three ups? Write a route as a word, R R R U U U or R U R U R U. Every arrangement of those six letters is a different route, and every route is one arrangement."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Pick which three of the six steps are the rights, and the ups fill the rest:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    6 x 5 x 4",
      "    ---------  =  20",
      "    3 x 2 x 1"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE OTHER WAY, WHICH NEEDS NO FORMULA. Write at each junction the number of ways to reach it. Every edge junction is 1 — there is only one way along a wall. Any other junction can only be entered from the left or from below, so its number is the sum of those two:"
     ]
    },
    {
     "h": "1    4   10   20",
     "t": "pre",
     "lines": [
      "        1    3    6   10",
      "        1    2    3    4",
      "        1    1    1    1"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Read the top right: 20. That is Pascal's triangle lying on its side, and it is the same count arrived at without choosing anything."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS NOT SIX, AND NOT SIXTY-FOUR. Two tempting wrong answers. It is not six steps' worth of freedom: you do not choose at every junction, because once you have used your three rights the rest is forced. And it is not two-to-the-six, 64, which would count sequences like R R R R R R that walk off the grid."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE GENERAL SHAPE. An m by n grid has (m+n) choose n routes. A 3x3 gives 20; a 4x4 gives 70; a 10x10 gives 184,756. The growth is brutal, which is why counting them one at a time stops working almost at once."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS SHOWS UP. Any process that is a fixed multiset of steps in a free order: orderings of tasks, sequences of wins and losses that end level, ways a price path returns to where it started. The lattice is a picture of \"same ingredients, different order\", and the count is almost never small."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_pascal_row",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "In Pascal's triangle, the top row is row 0. What do the entries in row 10 add up to?"
   }
  },
  {
   "slug": "one_seat_is_already_taken",
   "title": "One seat is already taken",
   "ts": "2026-08-23T05:40:37+00:00",
   "date": "23 Aug 2026",
   "topic": "combinatorics",
   "q": null,
   "a": "126.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Omar is on the committee — that is given, not a choice. So put him in a seat and look at what is actually left to decide: four more seats, and nine people still available."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    committees = ways to choose 4 from 9 = 126"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE MISTAKE almost everyone makes is choosing 4 from TEN. Omar is already seated, so he cannot be picked again; the pool is nine, not ten. That slip gives 210, and it counts committees that contain Omar twice over."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The other common slip is answering 252, which is the number of committees of five from ten with no condition at all — the answer to a question that was not asked."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A CHECK THAT COSTS NOTHING. Every committee of five either contains Omar or does not. The ones that do number 126. The ones that do not are committees of five from the other nine, which is also 126. Together: 252, which is exactly the unconstrained count. The two halves add up, so the answer is consistent."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THEY ARE EQUAL HERE, and not in general. Omar is on exactly half of the committees because five seats are being filled from ten people — his share is five tenths. Choose 3 from 8 instead and any given person is on three eighths of them, not half. The rule is that a given person appears on k/n of all the committees, and the halving here is a coincidence of the numbers."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE HABIT WORTH TAKING. When something is forced, remove it from the problem before you start counting, and count what is genuinely still free. Most counting mistakes are made by counting things that were never in question."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_pizzas",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "A shop offers eight toppings. How many different pizzas have exactly three different toppings?"
   }
  },
  {
   "slug": "the_gap_between_two_dice",
   "title": "The gap between two dice",
   "ts": "2026-08-23T04:48:03+00:00",
   "date": "23 Aug 2026",
   "topic": "probability",
   "q": null,
   "a": "A gap of ONE, not zero.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "There are 36 equally likely rolls. Count how many give each gap:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    gap 0    6 of 36     the six doubles",
      "    gap 1   10 of 36",
      "    gap 2    8 of 36",
      "    gap 3    6 of 36",
      "    gap 4    4 of 36",
      "    gap 5    2 of 36"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY ZERO LOSES. A gap of zero needs a double, and there are only six of those: 1-1, 2-2, and so on. A gap of one can be made from five different pairs — 1&2, 2&3, 3&4, 4&5, 5&6 — and each of those can land in either order, first die higher or second. Five pairs times two orders is ten, against six doubles."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That doubling is the whole thing. Every gap except zero gets counted twice, because the two dice are distinguishable even when they look identical. Zero is the only gap that cannot be reordered, and that is what costs it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SHAPE OF IT. After zero, the counts fall away steadily: 10, 8, 6, 4, 2. Each step up in gap removes one available pair. Gap 5 needs 1&6 and nothing else, so it has just two rolls out of 36 — you will see it about once in eighteen."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE TRAP is thinking \"same is the most likely single outcome\". Any INDIVIDUAL roll like 3-3 is as likely as 3-4. But a gap of one is a bigger bucket: it collects ten of the 36 rolls, where the doubles collect six. The question asks about the bucket, not the roll, and confusing the two is the mistake this question is built to catch."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT MATTERS BEYOND DICE. Grouping outcomes changes their probabilities even though the underlying rolls are unchanged. Every time you summarise data into buckets you are doing this, and the shape you get depends on the buckets rather than on the world."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_double_or_six",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "Two fair dice are thrown. What is the probability of a double OR at least one six? Give it as a decimal to three places."
   }
  },
  {
   "slug": "each_line_describes_the_last",
   "title": "Each line describes the one above",
   "ts": "2026-08-23T03:46:14+00:00",
   "date": "23 Aug 2026",
   "topic": "number_theory",
   "q": null,
   "a": "312211.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Read each line ALOUD as a description of the line above it, in runs."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1           \"one 1\"                 ->  11",
      "    11          \"two 1s\"                ->  21",
      "    21          \"one 2, one 1\"          ->  1211",
      "    1211        \"one 1, one 2, two 1s\"  ->  111221",
      "    111221      \"three 1s, two 2s, one 1\" -> 312211"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the whole rule: walk along the previous line, and for each run of identical figures write how many there were, then which figure it was. Nothing is being added or multiplied — the sequence is describing itself."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS HARD TO SPOT. Every other sequence you have met is arithmetic: you look for a difference, a ratio, a rule involving the VALUES. Here the values are irrelevant. 1211 does not mean one thousand two hundred and eleven; it is four symbols. People who solve this stop treating the lines as numbers."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A PROPERTY WORTH KNOWING. Starting from 1, no figure above 3 ever appears — not in the tenth line, not in the thousandth. A 4 would need a run of four identical figures, and you can check that the rule can never produce one. So the whole infinite sequence is written with just three symbols."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "CONWAY'S BIT. John Conway studied this and proved something odd: the LENGTH of each line grows by a fixed factor in the limit, about 1.303577, now called Conway's constant. It is the root of a degree-71 polynomial. A sequence anyone can define in one sentence turns out to have an irrational growth rate that needs seventy-one degrees to pin down."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS ASKED. It is a filter for whether you can drop an assumption. Every candidate tries differences first; the ones who get it are the ones who notice the assumption \"these are quantities\" was never given to them."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "three_shapes_that_tile",
   "title": "Three shapes that tile a floor",
   "ts": "2026-08-23T03:06:05+00:00",
   "date": "23 Aug 2026",
   "topic": "geometry",
   "q": null,
   "a": "Hexagons, and it is not close.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Give every cell the same floor area — say one square unit — and measure the wall each shape needs:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    triangle   4.56",
      "    square     4.00",
      "    hexagon    3.72"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The hexagon needs about 7% less wall than the square and about 18% less than the triangle. In a honeycomb every wall is shared between two cells, so halve all three: the ordering does not change."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY MORE SIDES IS BETTER. As you add sides, a regular polygon gets rounder, and roundness is what buys you area per unit of boundary. The extreme case is the circle, which needs only 3.54 — less than any of them:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    circle     3.54   (the true minimum, for ANY shape)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the hexagon lands within 5% of the best any shape could possibly do. That is the actual content of the answer: hexagons are not perfect, they are the closest you can get while still tiling."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY NOT JUST USE CIRCLES. Because circles do not tile. Pack them and you are left with gaps between them, which is wasted comb and wasted wax. Only three regular polygons tile the plane at all — triangles, squares and hexagons — and of those three the hexagon is roundest. Bees are choosing the best available option from a list of three, not solving an unconstrained problem."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THAT IT IS THE BEST OF ALL TILINGS, not merely of the regular ones, is a much harder statement. It is the Honeycomb Conjecture, stated for millennia and only proved by Thomas Hales in 1999: no partition of the plane into equal areas, by any shapes at all, beats the regular hexagon for total boundary. So the bees' answer is right for a reason nobody could prove until recently."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY WAX MATTERS. Bees eat roughly eight units of honey to make one of wax, so wall is the expensive part of a hive and floor space is the product. Any saving on boundary is a direct saving on food."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "add_the_digits_and_see",
   "title": "Add the digits and see",
   "ts": "2026-08-23T02:26:01+00:00",
   "date": "23 Aug 2026",
   "topic": "number_theory",
   "q": null,
   "a": "Because every power of ten is one more than a multiple of nine.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    10   =  9 + 1",
      "    100  = 99 + 1",
      "    1000 = 999 + 1"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and so on for ever. So when you write a number out in full:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    471,285,936 = 4x100,000,000 + 7x10,000,000 + 1x1,000,000 + ..."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "you can replace each power of ten by \"a pile of nines, plus one\". Every pile of nines is divisible by nine and can be set aside. What is left over from each term is the digit itself."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the number and the sum of its digits differ by a multiple of nine — which means one divides by nine exactly when the other does. Nothing about the order of the digits matters, and nothing about how long the number is."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    4+7+1+2+8+5+9+3+6 = 45,  and 45 = 9 x 5.  So 471,285,936 divides by nine."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY NINE AND NOT SEVEN. This works for nine because we write numbers in base ten, and nine is one less than ten. Try the same trick for seven and it collapses immediately — 10 is not one more than a multiple of seven, so the pile you set aside is not a pile of sevens. It works for THREE as well, for the same reason: three divides nine, so it divides every pile you set aside."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If we counted in base twelve, the digit-sum test would work for eleven instead. The rule is not a fact about nine; it is a fact about \"one less than the base\", which is a much less magical thing."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "CASTING OUT NINES is the old use of this. Before calculators, clerks checked a long addition by reducing both sides to their digit sums and comparing. It catches most slips instantly — though not a transposition, since swapping two digits leaves the sum untouched. That blind spot is worth knowing if you ever rely on it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_circle_becomes_a_rectangle",
   "title": "The circle becomes a rectangle",
   "ts": "2026-08-23T01:24:35+00:00",
   "date": "23 Aug 2026",
   "topic": "geometry",
   "q": null,
   "a": "One side is the radius. The other is half the way round.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Cut the circle into n wedges and interlock them, points alternating up and down. The bumpy top and bottom are made of the arcs, and every arc came from the circle's edge — half of them ended up on top and half underneath. So the length of the row is half the circumference:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    width  = half of 2(pi)r  =  (pi)r"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Each wedge is as tall as the circle's radius, so the row is r high:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    height = r"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Multiply, and you have the area of a circle:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    area = (pi)r x r = (pi)r^2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS NOT A CHEAT. The shape is not truly a rectangle — the edges are scalloped and the sides lean. But the thinner the wedges, the less they lean and the flatter the scallops get, and the figure closes on a true rectangle. With 8 wedges the row is already 97% of (pi)r wide; with 256 it is 99.997%. Nothing is being fudged: this is a limit, and it is the same limiting argument that underlies every area formula you were given at school."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT THE PICTURE IS REALLY SAYING is that a circle's area is the radius times half its perimeter — and that is not a fact about circles. Do the same to a regular polygon and you get (apothem x half-perimeter), the identical statement. The circle is the limit of those polygons, so it inherits the formula."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE STEP PEOPLE MISS is why the height is r rather than something smaller. It is the wedge's straight edge, which was a radius before you cut it, and cutting did not change its length. The scalloped edge is where the approximation lives; the straight edge is exact from the start."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "in_constant",
    "lesson": "i1",
    "unit": 4,
    "prompt": "Integrate 5 with respect to x. What is the coefficient of x?"
   }
  },
  {
   "slug": "no_fraction_fits_the_diagonal",
   "title": "No fraction fits the diagonal",
   "ts": "2026-08-23T00:39:27+00:00",
   "date": "23 Aug 2026",
   "topic": "number_theory",
   "q": null,
   "a": "No fraction works, and it is not that nobody has found one yet — none can exist.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "By Pythagoras the diagonal d satisfies d^2 = 1^2 + 1^2 = 2. So the question is whether any fraction, squared, gives exactly 2."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Suppose one did. Write it in LOWEST TERMS as p/q, meaning p and q share no common factor — every fraction can be written that way, so this costs nothing."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    p^2 / q^2 = 2",
      "    p^2 = 2 q^2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The right-hand side is two times a whole number, so p^2 is even. An odd number squared is odd, so p itself must be even. Write p = 2k:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    (2k)^2 = 2 q^2",
      "    4 k^2  = 2 q^2",
      "    2 k^2  = q^2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Now the same argument runs again on the other side: q^2 is even, so q is even."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "But p and q are both even — they share a factor of 2 — and we started by saying they share no common factor. The assumption is the only thing that can be wrong, so no such fraction exists."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE NEAR MISSES ARE MISLEADING. 7/5 squares to 1.96 and 1393/985 squares to about 1.99999949, so you can get as close as you like. Closeness is not the question. There are fractions arbitrarily near the diagonal and not one of them lands on it, which is the first time most people meet the idea that a set can be dense and still miss a point."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT IT COST. The Greeks are said to have found this genuinely disturbing, because it broke the assumption that any two lengths could be measured in common units — take a small enough unit and both become whole numbers of it. The square and its own diagonal cannot. That is what \"incommensurable\" means, and it is why the discovery mattered rather than being a curiosity about fractions."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SAME ARGUMENT does the same job for the square root of 3, of 5, and of any whole number that is not a perfect square. It fails, correctly, for 4 — try it and see where the parity step stops working."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "al_surd",
    "lesson": "a1",
    "unit": 2,
    "prompt": "Rationalise 6/√3 and give the coefficient of √3."
   }
  },
  {
   "slug": "the_power_that_ends_at_one",
   "title": "Two to the power of zero",
   "ts": "2026-08-22T23:59:41+00:00",
   "date": "22 Aug 2026",
   "topic": "number_theory",
   "q": null,
   "a": "One. Not zero.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Look at what the list is doing on the way down. Each step removes one factor of two, so each value is the one above divided by two:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2^4 = 16",
      "    2^3 =  8",
      "    2^2 =  4",
      "    2^1 =  2",
      "    2^0 =  1"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Sixteen, eight, four, two — the next one is one. That is the picture, and it is persuasive, but on its own it is only a pattern. Here is why it is forced."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE REASON IT CANNOT BE ANYTHING ELSE. The rule for dividing powers is that you subtract the indices:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    a^m / a^n = a^(m-n)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Set m and n equal. The left-hand side is a number divided by itself, which is 1 for any a that is not zero. The right-hand side is a^0. So a^0 = 1, for every base, and there is no choice in the matter — anything else breaks the index law that the rest of algebra is built on."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Same conclusion from the other direction: a^0 is the empty product, the result of multiplying no copies of a together. The sensible value for a product of nothing is the number that changes nothing when you multiply by it, and that is 1 — exactly as the sum of no numbers is 0."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE REAL EXCEPTION is 0^0, and anyone who tells you it is obviously 1 or obviously 0 is skipping something. Approaching it as 0^x gives 0; approaching it as x^0 gives 1. The two disagree, so in analysis it is left undefined. In combinatorics and in power series it is TAKEN as 1, because there is exactly one way to choose nothing and the series would need special-casing otherwise. Both conventions are correct in their own field, which is the actual answer."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT IS WORTH KNOWING. This is the smallest example of a habit that runs through mathematics: a definition is not a decision about what a symbol should feel like, it is whatever keeps the existing rules working. Zero factorial is 1 for the same reason."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "lg_log2",
    "lesson": "g1",
    "unit": 7,
    "prompt": "What is log₂32?"
   }
  },
  {
   "slug": "add_one_to_a_hundred",
   "title": "Add every number from 1 to 100",
   "ts": "2026-08-22T21:40:07+00:00",
   "date": "22 Aug 2026",
   "topic": "number_theory",
   "q": null,
   "a": "The total is 5,050, and you can get there in about ten seconds.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Do not add the numbers in the order they are written. Fold the list back on itself instead, and add from BOTH ENDS at once:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1 + 100 = 101",
      "    2 +  99 = 101",
      "    3 +  98 = 101",
      "    ...",
      "    50 + 51 = 101"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every one of those comes to the same thing, 101, because each step up on the left is matched by exactly one step down on the right. The two changes cancel, so the total cannot move."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "You have used up all hundred numbers, two at a time, so there are 50 of these sums. The answer is 50 x 101 = 5,050."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE GENERAL RULE. For 1 up to any number n, the same fold gives n/2 sums of (n + 1), so the total is n(n + 1)/2. For n = 100 that is 100 x 101 / 2 = 5,050."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WATCH OUT FOR ODD LISTS -- this is where people get it wrong. For 1 to 99 there is no \"99/2 pairs\"; the middle number, 50, has no partner and sits on its own. The formula still works -- 99 x 100 / 2 = 4,950 -- but the picture needs care, which is exactly why the formula is the thing worth remembering rather than the picture."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THIS ONE IS FAMOUS. The story is told about Carl Friedrich Gauss as a schoolboy, and whether or not it happened, it survives because it captures a real habit: before grinding through a calculation, look for structure in it. A hundred additions became one multiplication, not by being cleverer at adding, but by noticing the list is symmetrical."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SAME MOVE ELSEWHERE. It is why the sum of the first n odd numbers is exactly n squared, and it is the reason a trapezium's area uses the AVERAGE of the two parallel sides -- you are folding a run of evenly-spaced quantities in half and multiplying."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "al_indices",
    "lesson": "a1",
    "unit": 2,
    "prompt": "Simplify (2³)⁴ ÷ 2¹⁰ as a power of 2. What is the index?"
   }
  },
  {
   "slug": "three_east_three_north",
   "title": "Three east, three north",
   "ts": "2026-08-22T20:14:46+00:00",
   "date": "22 Aug 2026",
   "topic": "combinatorics",
   "q": null,
   "a": "Twenty.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every route is six blocks long, and each block is either an E or an N. So a route is just a string of six letters, three of each:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    EEENNN     ENENEN     NNEEEN     ..."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Counting the routes is therefore counting the ways to choose WHICH THREE of the six steps are the easts. The other three are forced."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    choose 3 of 6  =  6 x 5 x 4 / (3 x 2 x 1)  =  20"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the whole thing. No route-tracing, no diagram."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY THE REFRAME IS THE ANSWER. Drawn as a map this looks like a search problem, and people start tracing routes and losing count. Written as a string of letters it becomes a choosing problem, and choosing problems have a formula. Recognising that a messy-looking arrangement is really a selection is one of the most reused moves in interview maths."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "CHECK IT ON A SMALL CASE. One block east and one north: the strings are EN and NE, so two routes, and choose-1-of-2 is 2. Two by two gives choose-2-of-4 = 6. Draw those six if you like -- they are quick, and they confirm the method before you trust it on a bigger grid."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE GENERAL SHAPE. An n by n grid has choose-n-of-2n routes, and it grows fast: 3x3 gives 20, 4x4 gives 70, 5x5 gives 252, and a 10x10 city gives 184,756. That growth is why nobody counts these by drawing them, and why the interviewer asks."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "pb_pascal_row",
    "lesson": "pb1",
    "unit": 13,
    "prompt": "In Pascal's triangle, the top row is row 0. What do the entries in row 10 add up to?"
   }
  },
  {
   "slug": "sixty_in_the_pub_all_night",
   "title": "Sixty in the pub, all evening",
   "ts": "2026-08-22T18:53:54+00:00",
   "date": "22 Aug 2026",
   "topic": "estimation",
   "q": null,
   "a": "Eighty. More people pass through the door in an hour than the pub can hold at once, which is the part that catches people out.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ONE LINE. If the pub is never emptier or fuller, then for every person walking in, one walks out. The crowd is a queue that stays the same size, and there is a rule for exactly this:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    how many are in there  =  how fast they arrive  x  how long each one stays"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Put the numbers in. Sixty people in there. Each stays three quarters of an hour. So"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    60  =  rate x 0.75      ->      rate  =  60 / 0.75  =  80 an hour"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY IT FEELS WRONG. Sixty is the number you can see, so it anchors you, and eighty is larger than the thing it is measuring. But the sixty is a snapshot and the eighty is a flow, and the shorter the stay, the further apart those two numbers get. If people only stayed fifteen minutes, the same sixty-person pub would be serving 240 an hour."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    stay 3 hours    ->  20 an hour",
      "    stay 45 mins    ->  80 an hour",
      "    stay 15 mins    ->  240 an hour"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Same crowd, every time. You cannot tell how busy a place is from how full it looks."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THIS COMES UP. It is Little's law, and it is the same sum whether the queue holds people, orders, support tickets or messages in a buffer. Twenty tickets always open and each takes two days to close means you are closing ten a day — and if you want the backlog smaller, the only levers are arriving slower or finishing faster. Interviewers like it because it takes ten seconds if you see the structure and goes nowhere if you start trying to model arrivals."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A GOOD SANITY CHECK: the answer must be bigger than sixty whenever people stay less than an hour, and smaller than sixty whenever they stay longer. If your number falls the wrong side of that, you have the fraction upside down."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_distance",
    "lesson": "p1",
    "unit": 8,
    "prompt": "Same ball, same g = 10. How far has it fallen in 3 s, in metres?"
   }
  },
  {
   "slug": "two_kilometres_of_falling",
   "title": "Two kilometres of falling",
   "ts": "2026-08-22T17:30:25+00:00",
   "date": "22 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "About 24 kilometres an hour -- and it stopped speeding up after the first NINE METRES. The two kilometres in the question are almost entirely irrelevant.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT PEOPLE EXPECT. With no air, falling 2,000 metres gives"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    v = sqrt(2 g h) = sqrt(2 x 9.81 x 2000) = 198 m/s"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "which is 713 km/h. Rain would be lethal. It obviously is not, so something stops the drop accelerating -- and that something is drag."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE IT SETTLES. Drag grows with the SQUARE of speed, so the faster the drop goes the harder the air pushes back, until push balances weight:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    m g  =  (1/2) rho Cd A v^2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "For a 2 mm drop that gives 6.7 m/s, about 24 km/h. Bigger drops fall faster because weight grows with the CUBE of the radius while the area facing the air grows only with the SQUARE -- a 5 mm drop reaches 38 km/h, a 1 mm one only 17."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE PART THAT SURPRISES PEOPLE. Integrating the fall step by step, the drop passes 99% of its final speed after 9.1 metres, in 1.8 seconds. Everything after that is at constant speed. So a drop from 2 km and a drop from 20 metres hit you at the same speed, and the height in the question is a red herring you were meant to reach for."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is also why hail hurts and rain does not. Hail is far heavier for its frontal area, so its balance point is much higher up the speed scale -- a 2 cm hailstone lands at something like 70 km/h."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "me_suvat",
    "lesson": "p1",
    "unit": 8,
    "prompt": "A ball is dropped from rest. Taking g = 10 m/s², how fast is it moving after 3 s, in m/s?"
   }
  },
  {
   "slug": "heat_the_ring_watch_the_hole",
   "title": "Heat the ring, watch the hole",
   "ts": "2026-08-22T15:53:51+00:00",
   "date": "22 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "BIGGER. The hole expands by exactly the same proportion as everything else, precisely as though it were made of metal too.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE ARGUMENT THAT SETTLES IT, and it needs no formula. Take a SOLID steel disc and draw a circle on it with a marker. Heat the disc. Everything about it scales up together, so the drawn circle gets bigger along with the rest -- nobody finds that surprising."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Now cut along that circle and remove the middle. You have a ring. The metal that is left has no idea the middle is gone; it expands exactly as it did before. So the inner edge ends up in the same enlarged place, which means THE HOLE GREW."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the whole thing. A hole in a heated object grows because the material around it is moving outwards, and there is nothing in the middle to resist."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE NUMBERS, for steel: every length multiplies by (1 + alpha x temperature rise), with alpha about 12 millionths per kelvin. Heat a ring with a 100 mm hole by 200 degrees and the hole gains"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    100 mm x 12e-6 x 200  =  0.24 mm"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Small, but it is the sign that matters, and engineers rely on it. SHRINK FITTING is exactly this: a steel ring 0.02 mm too small to go over a shaft only needs heating by about 17 degrees to slip on, and it grips as it cools. Railway tyres, bearing races and gear hubs are all fitted that way."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHEN IT DOES NOT HOLD. The hole shrinks only if alpha is NEGATIVE -- which some materials genuinely have, over some temperature ranges. So this is a fact about steel, not a fact about holes."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "es_scale_area",
    "lesson": "es5",
    "unit": 12,
    "prompt": "You double every length of an object. By what factor does its surface area grow?"
   }
  },
  {
   "slug": "two_metres_looks_like",
   "title": "Two metres of water",
   "ts": "2026-08-22T14:54:33+00:00",
   "date": "22 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "About one and a half metres. Three quarters of the real depth -- the pool looks a full half-metre shallower than it is.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The rule is short: looking straight down, the apparent depth is the real depth divided by the refractive index of water."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2 m / 1.333  =  1.50 m"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY. Light from the coin leaves the water and bends AWAY from the vertical as it goes into the air, because it speeds up. Your eye does not know that. It assumes light travelled in a straight line, and traces the ray it receives back along that straight line -- which crosses the vertical higher up than the coin actually is. So the coin appears raised, and the whole floor with it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Nothing about the water is doing anything unusual. The mistake is entirely in the assumption your visual system makes, and cannot help making."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT IT MEANS IN PRACTICE, which is the part worth carrying. A pool that looks comfortably chest-deep is a third deeper again than it looks. That is not a curiosity: it is why \"it looked shallow\" appears in diving-accident reports, and why pool depths are painted on the side in numbers rather than left to the eye."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The same factor explains a straw looking snapped at the waterline, a spear-fisher aiming below the fish, and why a river always looks easier to wade than it is."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Checked by ray tracing rather than quoted: sending a ray from the coin at one degree off vertical, refracting it with Snell's law and back-projecting the emerging ray puts the image at 1.5002 m. The agreement loosens as the angle opens -- 1.4821 m at ten degrees -- which is exactly what \"looking straight down\" is doing in the question."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_snell",
    "lesson": "w2",
    "unit": 11,
    "prompt": "Light enters glass (n = 1.5) from air at 30° to the normal. What is the angle of refraction, in degrees, to the nearest degree?"
   }
  },
  {
   "slug": "heard_but_not_seen",
   "title": "Heard but not seen",
   "ts": "2026-08-22T13:53:54+00:00",
   "date": "22 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "Because a voice is about the SIZE of the corner, and light is nearly two million times smaller.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Waves bend round an obstacle when their wavelength is comparable to it. That is the whole story, and the two numbers could hardly be further apart."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    a mid voice, 340 Hz    sound travels 343 m/s, so the wavelength is 343/340 = 1.0 m",
      "    green light, 550 nm    0.00000055 m"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A corridor corner is roughly a metre across. So the voice arrives at an opening about ONE wavelength wide, and a wave that size spreads out through a huge angle once it gets past. Light arrives at the same opening about 1,600,000 wavelengths wide, and a wave that small compared with the gap carries straight on. Its spreading angle works out at about 0.00003 of a degree, which over a corridor is nothing at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE DETAIL THAT MAKES IT REAL. High notes bend less than low ones, because their wavelengths are shorter. At 3 kHz the wavelength is 11 cm, which is a small fraction of the corner, so the treble does NOT make it round. That is why a voice heard from round a corner sounds muffled and bass-heavy rather than just quieter — you are hearing the low frequencies that could bend and missing the high ones that could not. Most people have noticed that effect and never connected it to why they cannot see the speaker."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The same rule runs everywhere. Bass carries through walls from a party while the vocals do not. Radio reaches into valleys where line of sight does not. And it is why an optical microscope cannot resolve anything much smaller than the wavelength of light: you cannot see detail finer than the wave you are looking with."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "wa_speed",
    "lesson": "w1",
    "unit": 11,
    "prompt": "A wave has frequency 50 Hz and wavelength 6 m. What is its speed, in m/s?"
   }
  },
  {
   "slug": "four_corners_two_totals",
   "title": "Four corners, two totals",
   "ts": "2026-08-22T11:51:23+00:00",
   "date": "22 Aug 2026",
   "topic": "geometry",
   "q": null,
   "a": "NEITHER. The two totals are exactly equal, always — and it does not matter where you stand.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "This is the British flag theorem. Label the corners A, B, C, D going round, so A and C are opposite and B and D are opposite. Then for any point P,"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    PA^2 + PC^2  =  PB^2 + PD^2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY, in one line of algebra. Put the room on axes with A at the origin, so the corners are A = (0,0), B = (w,0), C = (w,h) and D = (0,h). Let P = (x,y). Then"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    PA^2 + PC^2  =  (x^2 + y^2) + ((x-w)^2 + (y-h)^2)",
      "    PB^2 + PD^2  =  ((x-w)^2 + y^2) + (x^2 + (y-h)^2)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Both sides expand to exactly the same thing:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2x^2 + 2y^2 - 2wx - 2hy + w^2 + h^2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The x and y terms are identical on both sides — they never had a chance to differ. Each side uses the SAME four ingredients, x^2, (x-w)^2, y^2 and (y-h)^2; the two pairings just bundle them up differently."
     ]
    },
    {
     "h": "THE PARTS THAT SURPRISE PEOPLE.",
     "t": "p",
     "lines": [
      "You do not have to be inside the room. Stand in the garden, a hundred metres away, and it still holds — nothing in that algebra assumed 0 < x < w."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "You do not have to be on the floor either. Lift P off the plane to (x, y, z) and every term gains the same z^2 twice on each side, so it cancels. The identity survives in three dimensions, which is why it also works for a point above a rectangular table."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "It fails the moment the shape stops being a rectangle. The proof leans on the corners sharing coordinates in pairs, which is exactly what \"rectangle\" buys you."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "fill_it_but_never_paint_it",
   "title": "Fill it but never paint it",
   "ts": "2026-08-22T11:11:09+00:00",
   "date": "22 Aug 2026",
   "topic": "calculus",
   "q": null,
   "a": "You can FILL it, and you can never PAINT it. The horn holds exactly pi cubic units of paint, and its inside surface is infinite.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is Gabriel's horn, and the two calculations sit side by side."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE VOLUME. Slice the horn into discs. At position x the disc has radius 1/x, so its area is pi/x^2, and the volume out to a cut at b is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    pi * integral_1^b  dx/x^2   =   pi [ -1/x ]_1^b   =   pi ( 1 - 1/b )"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Let the cut run off to infinity and that settles on exactly pi. Finite. A tin of paint holding pi cubic units fills the whole endless horn."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "THE SURFACE. The same slices give bands of area 2*pi*(1/x)*sqrt(1 + 1/x^4) dx. Throw away the square root -- it is always at least 1 -- and what is left is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2 * pi * integral_1^b  dx/x   =   2 * pi * ln(b)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "which grows without limit. So the surface is bigger than something that goes to infinity, and is therefore infinite. No amount of paint covers it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHY BOTH CAN BE TRUE, which is the part worth having. The volume adds up 1/x^2 and the surface adds up 1/x. Those two behave completely differently: the squares converge, the plain reciprocals do not. The horn narrows fast enough that the space inside runs out, and slowly enough that the skin never does."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "AND THE PARADOX DISSOLVES if you push it. \"Fill it, and the paint touches the whole inside surface, so you have painted it.\" True -- but only with a coat that gets thinner and thinner as the horn narrows, without limit. Real paint has a thickness, and a coat of constant thickness on an infinite surface needs infinite paint. The contradiction was never between the two integrals; it was in quietly assuming the coat had a fixed depth."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "in_power",
    "lesson": "i1",
    "unit": 4,
    "prompt": "Integrate 3x². What is the coefficient of x³ in the result?"
   }
  },
  {
   "slug": "the_trail_of_a_rolling_coin",
   "title": "The trail of a rolling coin",
   "ts": "2026-08-22T10:21:00+00:00",
   "date": "22 Aug 2026",
   "topic": "geometry",
   "q": null,
   "a": "FIVE pi r squared, where r is the radius of either coin.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The curve itself -- it is a CARDIOID -- encloses 6*pi*r^2. Take away the fixed coin it rolled around, pi*r^2, and the shaded region is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    6*pi*r^2  -  pi*r^2  =  5*pi*r^2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the shaded part is five times the area of a coin, and the whole curve is six times."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Getting there. Put the pole at the cusp, the point where the marked rim touched at the start. In polar the cardioid is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    rho  =  2r (1 + cos theta)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and the area of a polar curve is (1/2) * integral of rho^2 d theta over a full turn:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    (1/2) * integral_0^{2pi} 4r^2 (1 + cos theta)^2 d theta"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Expand (1 + cos)^2 = 1 + 2cos + cos^2. Over a full turn cos integrates to 0 and cos^2 integrates to pi, so the bracket gives 2pi + 0 + pi = 3pi, and the area is 2r^2 * 3pi = 6*pi*r^2."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Why you can just SUBTRACT the coin, which is the step most people skip. The fixed coin passes through the cusp, so in the same polar coordinates it is rho = 2r cos theta. And 2r(1 + cos theta) is greater than or equal to 2r cos theta for every theta. So the coin lies entirely inside the cardioid, touching only at the cusp -- there is no overlap to work out, and the subtraction is exact."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The bit worth knowing, and the bit that is easy to draw wrongly. Because the two coins are the same size, the rolling coin turns TWICE about its own centre while going once around. That is the coin-rotation paradox, and it is why the tracing point is at"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    ( 2r cos t - r cos 2t ,  2r sin t - r sin 2t )"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "with a 2t and not a t. Animate it with a single rotation and you draw a different curve altogether -- and get a different area."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "tr_soh",
    "lesson": "t1",
    "unit": 5,
    "prompt": "A right-angled triangle has hypotenuse 10 and an angle of 30°. How long is the side opposite that angle?"
   }
  },
  {
   "slug": "always_aiming_where_they_are",
   "title": "Always aiming where they are",
   "ts": "2026-08-22T09:36:38+00:00",
   "date": "22 Aug 2026",
   "topic": "calculus",
   "q": null,
   "a": "TWENTY metres. The runner covers twenty, the chaser covers forty, and then it is over.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The general result. If the runner keeps to a straight line and the chaser is k times faster, starting a perpendicular distance d away, the runner covers"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    d * k / (k^2 - 1)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "before being caught. Here d = 30 and k = 2, so the runner gets 30 * 2/3 = 20 metres."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Where that comes from, without the differential equation. Track two quantities: the distance s still separating them, and the amount w by which the chaser is \"behind\" along the road. Closing head-on would eat the gap at rate (k - 1)v, but the chaser is approaching at an angle, so the gap shrinks at rate (k - cos A)v while the along-road lag shrinks at rate (k*cos A - 1)v, where A is the angle of the line of sight. Add k times the second to the first and the angle cancels:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    d/dt [ k*s + w ]  =  -(k^2 - 1) v"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "so k*s + w falls at a CONSTANT rate no matter how the chase bends. It starts at k*d + d... and at capture both s and w are zero. Divide, and the time is d*k/(k^2-1)/v, which is the distance the runner covers."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Two things worth taking away."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The chase is always finite when k > 1. Being pointed at the wrong place costs you, but it never costs enough to save the runner."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "And the cost is large. Two thirds of the whole head start is given away by that one restriction -- aim where they ARE rather than where they will be. Aiming ahead, the chaser would intercept in a straight line after about 17.3 metres. Pure pursuit turns that into twenty, and turns a straight line into a curve."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "This is the \"pure pursuit\" or \"dog curve\" problem, and it is why guided things aim at where the target will be, not where it is."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "ve_add",
    "lesson": "v1",
    "unit": 6,
    "prompt": "(3, 4) + (1, −2) has components (a, b). What is b?"
   }
  },
  {
   "slug": "a_rolling_rectangles_trail",
   "title": "A rolling rectangle's trail",
   "ts": "2026-08-22T08:55:56+00:00",
   "date": "22 Aug 2026",
   "topic": "geometry",
   "q": null,
   "a": "For a rectangle with sides a and b, the area under one full revolution of the marked corner is",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    (pi/2)(a^2 + b^2)  +  ab"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and for the 4 by 5 that is 20.5*pi + 20, which is about 84.40 square units."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Where it comes from. Every tip is a quarter turn about whichever corner is touching the line, so the marked corner sweeps a quarter circle. Its radius is simply how far the marked corner is from the corner being pivoted on, and over one revolution those four distances are:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    the diagonal   sqrt(a^2 + b^2)     -> quarter circle of radius sqrt(41)",
      "    one side       a                   -> radius 4",
      "    ZERO                               -> the tip where the marked corner IS the pivot,",
      "                                          so it does not move at all",
      "    the other side b                   -> radius 5"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Adding the four quarter-circle sectors:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    (pi/4)(a^2 + b^2)  +  (pi/4)a^2  +  0  +  (pi/4)b^2  =  (pi/2)(a^2 + b^2)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "which for a=4, b=5 is (pi/2)(41) = 20.5*pi."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Then the wedges. Between consecutive arcs, the region down to the line is made of triangles that are copies of the rectangle's own halves, and they reassemble into exactly ONE rectangle -- area ab = 20. Not two, which is the guess most people make, and it is the part worth checking rather than believing. Simulating the roll and integrating under the traced points gives 84.4026; the sectors alone give 64.4026; the difference is 20.0000 on the nose."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The zero-radius tip is the nice part. One of the four tips does not move the marked corner at all -- it is the pivot itself -- so a rectangle's trail has only THREE arches per revolution, not four."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "a_tin_twice_as_big",
   "title": "A tin twice as tall and twice as wide",
   "ts": "2026-08-15T23:26:55+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 8 times as much.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Stack the old tins inside the new one and count: 2 along, 2 across, 2 high. That is 2 x 2 x 2 = 8."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2   doubled once, as if the tin were a length",
      "    4   squared it, which is the answer for a flat shape",
      "    6   added the three dimensions instead of multiplying them"
     ]
    },
    {
     "h": "WHY IT IS THE CUBE",
     "t": "p",
     "lines": [
      "\"Twice as big\" is a sentence about ONE direction, and a tin has three. Each doubling multiplies the contents by two, and they compound:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    twice as tall           2x the soup",
      "    and twice as wide       4x",
      "    and twice as deep       8x"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Triple every dimension and it is 27 times. Ten times the size is a THOUSAND times the volume. The rule is scale cubed, and it climbs frighteningly quickly."
     ]
    },
    {
     "h": "WHERE YOU MEET IT",
     "t": "p",
     "lines": [
      "The big tub of ice cream is rarely twice the price of the small one, and it is almost never twice the size — measure it and you often find the \"twice as big\" tub holds four or six times as much. That is why bulk looks like such a bargain on the shelf, and why the small one is so often better value per gram than its price suggests."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "It also runs the other way, which is the part worth keeping. A pizza with half the diameter has a QUARTER of the food. A parcel with sides 20% smaller holds half of what it did. Small reductions in size are large reductions in what fits, and everyone under-estimates them, in both directions."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "twenty_percent_off_three_years",
   "title": "£20,000 losing 20% a year for three years",
   "ts": "2026-08-15T22:08:34+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. £10,240.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Take it one year at a time, because that is how the car loses value:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    year 1    20% of £20,000 = £4,000    ->  £16,000",
      "    year 2    20% of £16,000 = £3,200    ->  £12,800",
      "    year 3    20% of £12,800 = £2,560    ->  £10,240"
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    8,000   added the percentages: 3 x 20% = 60% off",
      "   16,000   took one year off and stopped",
      "    5,000   halved it twice"
     ]
    },
    {
     "h": "WHY ADDING THE PERCENTAGES IS WRONG",
     "t": "p",
     "lines": [
      "Three years at 20% is not 60% off, because the second year's 20% is charged on a smaller car. £4,000 comes off in year one, but only £3,200 in year two and £2,560 in year three. The amounts shrink because the thing they are a percentage OF is shrinking."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Add those up and you have lost £9,760 — not the £12,000 that 60% would take."
     ]
    },
    {
     "h": "THE SHORT WAY",
     "t": "p",
     "lines": [
      "Each year multiplies by 0.8, so three years multiplies by"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    0.8 x 0.8 x 0.8 = 0.512"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and 0.512 x £20,000 = £10,240. Just over half, after losing \"60%\"."
     ]
    },
    {
     "h": "THE PART WORTH KEEPING",
     "t": "p",
     "lines": [
      "Repeated percentage loss never reaches zero. Ten years of this leaves £2,147. Twenty leaves £231. It always gets smaller and it never arrives, because you keep taking a fraction of what remains rather than a fixed amount."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is why a car depreciating 20% a year is still worth something at ten years old, and why \"it loses half its value in three years\" and \"it loses 20% a year\" describe roughly the same car — the second one just sounds worse."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "a_two_pound_ticket_worth_less",
   "title": "A £2 ticket, one in ten wins £15",
   "ts": "2026-08-15T09:55:05+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 150p — that is £1.50, for a ticket that costs £2.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Ten tickets are sold. One of them is worth £15 and nine are worth nothing. So across all ten tickets, £15 is shared out:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1500p / 10 tickets = 150p a ticket"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "You are paying 200p for something worth 150p. Every ticket loses 50p on average, and the raffle keeps £5 of the £20 it takes."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1500   gave the prize",
      "     200   gave the price printed on the ticket",
      "    1300   gave the profit you make IF you win"
     ]
    },
    {
     "h": "WHY BOTH OBVIOUS NUMBERS ARE WRONG",
     "t": "p",
     "lines": [
      "The question hands you two numbers, £2 and £15, and neither is the answer. One is what you pay and the other is what you might win, and the value of the ticket is neither: it is what you get on average, which is a number that appears nowhere in the question."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is what an expected value is. Write down every outcome, weight each by how often it happens, and add them up:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    (1/10) x 1500p  +  (9/10) x 0p  =  150p"
     ]
    },
    {
     "h": "WHERE THIS ACTUALLY MATTERS",
     "t": "p",
     "lines": [
      "Every raffle, lottery, extended warranty and insurance policy is this sum. The seller knows the expected value and prices above it — that gap is the whole business."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Which does not automatically make them bad deals. Insurance is worth MORE than its expected value to most people, because losing your house is not ten times worse than losing a tenth of it. A raffle is not: the prize is money, so the value of winning scales exactly with the amount, and paying 200p for 150p is simply paying 200p for 150p."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The test is whether the thing you might win is worth more to you than its face value. For money, it never is."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "forty_take_2_lots_of_a_bracket",
   "title": "40 - 2 x (8 + 2)",
   "ts": "2026-08-15T08:54:56+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 20.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 8 + 2 = 10. Then the multiply: 2 x 10 = 20. Then 40 - 20 = 20."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     380   worked straight across",
      "      26   dropped the brackets",
      "      22   multiplied inside first"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "forty_five_after_forty_off",
   "title": "£45 after 40% off",
   "ts": "2026-08-15T07:22:03+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. £75.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "£45 is what is LEFT after 40% came off, so £45 is 60% of the full price. Divide, do not add: 45 / 0.6 = 75. Check it forwards — 40% of 75 is 30, and 75 - 30 = 45."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      62   added 40% back on to the sale price",
      "      32   divided by 1.4 instead of by 0.6",
      "     112   read the £45 as the discount rather than the price paid"
     ]
    },
    {
     "h": "AND THE GAP GROWS WITH THE DISCOUNT",
     "t": "p",
     "lines": [
      "Adding the same percentage back never undoes taking it off, because the two are charged on different amounts. At 25% off the round trip lands about 6% short. At 40% off it lands 17% short — £62 against £75."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The reason is exactly this: taking p% off multiplies by (1-p), and adding p% back multiplies by (1+p). Do both and you have multiplied by 1 - p², which is always less than 1 and gets worse fast as p grows. At 40% that is 1 - 0.16, so you keep only 84% of what you started with."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "It is why a 50% fall needs a 100% rise to recover, and why \"we cut it 40% and put it back\" is never true."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "at_least_one_head_in_three_flips",
   "title": "At least one head in three flips",
   "ts": "2026-08-15T05:54:59+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 7.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Three flips give 2 x 2 x 2 = 8 equally likely outcomes. Exactly one of them — tails, tails, tails — has no head in it at all. So every other outcome has at least one head: 8 - 1 = 7."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     12   counted four outcomes with a head on the first flip, four on the",
      "          second, four on the third, and added them",
      "      4   took half of the eight",
      "      1   counted only the outcome that is all heads"
     ]
    },
    {
     "h": "WHY 12 IS THE INSTRUCTIVE ONE",
     "t": "p",
     "lines": [
      "There are genuinely four outcomes with a head on the first flip. Four with a head on the second. Four with a head on the third. Adding those gives twelve — out of eight possible outcomes. Twelve of eight is impossible, and that impossibility is the whole point: the three groups overlap heavily, and anything counted in two of them has been counted twice."
     ]
    },
    {
     "h": "THE MOVE WORTH KEEPING",
     "t": "p",
     "lines": [
      "For \"at least one\", count the outcomes with NONE and take them away. Here that is one line: only TTT has no head, so the answer is 8 - 1. On two dice rolls the same move gives 36 - 25 = 11. It works every time and there is no overlap to think about, because \"none of them\" is a single condition rather than a union of several."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "five_percent_a_month",
   "title": "5% a month — what is that a year",
   "ts": "2026-08-15T04:53:14+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 80%.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Each month charges 5% on what is owed at the time, and what is owed now includes last month's interest. So the debt is multiplied by 1.05 twelve times:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1.05 to the power of 12  =  1.796"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "£100 becomes £179.59, which is a rise of about 80%, not 60%."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     60   multiplied 5 by 12 — the answer if interest never compounded",
      "    100   assumed a rate that steep must double the debt in a year",
      "      5   gave the monthly rate back"
     ]
    },
    {
     "h": "WHY MULTIPLYING IS WRONG",
     "t": "p",
     "lines": [
      "5 x 12 = 60 would be right if every month's interest were charged on the ORIGINAL £100 and then set aside. It is not. Month two charges 5% of £105, month three 5% of £110.25, and the gap widens all year. Twenty of those eighty percentage points are interest charged on interest."
     ]
    },
    {
     "h": "IT DOES NOT QUITE DOUBLE",
     "t": "p",
     "lines": [
      "100% is the intuitive answer for a rate that high, and it is close but wrong: the debt reaches 1.796 times, not 2. To actually double inside a year you need 6% a month — one percentage point more, which tells you how sharply this curve climbs near the top."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "And 6% is worth remembering, because it doubles twice over. 6% a MONTH doubles a debt in twelve months. 6% a YEAR doubles savings in twelve years. Same rate, same twelve, two completely different speeds — the only thing that changed is how often the interest is charged."
     ]
    },
    {
     "h": "WHERE YOU MEET THIS",
     "t": "p",
     "lines": [
      "Anywhere a rate is quoted over a short period: monthly credit, weekly rent-to- own, daily overdraft charges. The advertised figure is always the small one, and the annual equivalent is always worse than twelve times it."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The law knows this, which is why lenders must publish an APR — a single yearly number that has already done this compounding for you. When a headline rate and an APR disagree, the APR is the honest one, and the size of the gap between them is a measure of how short the quoted period was."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "how_long_to_double_at_six",
   "title": "6% a year — how long to double",
   "ts": "2026-08-15T04:13:00+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 12 years.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Divide 72 by the interest rate. 72 / 6 = 12."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    72   the rule's own number, quoted as if it were the answer",
      "    17   assumed simple interest — 100 / 6, no compounding",
      "     6   gave the rate back"
     ]
    },
    {
     "h": "WHY 72 AND NOT 100",
     "t": "p",
     "lines": [
      "If interest were simple — 6% of the ORIGINAL amount every year, never on the interest — you would need the full 100%, so 100 / 6, about 17 years. But the interest earns interest, and that pulls the answer in to 12."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "72 is not magic and it is not exact. It is a number that happens to divide well: 72 has factors 2, 3, 4, 6, 8, 9 and 12, so the sum is usually one you can do without paper. That is the whole reason it is 72 and not 70 or 69.3."
     ]
    },
    {
     "h": "HOW GOOD IS IT",
     "t": "p",
     "lines": [
      "Counting whole years of compounding, against what the rule predicts:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     3%   24 years   rule says 24",
      "     4%   18 years   rule says 18",
      "     6%   12 years   rule says 12",
      "     8%   10 years   rule says 9",
      "    12%    7 years   rule says 6"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Exact or one year out across every rate people actually meet, and it only ever errs low — because your money passes double partway through a year and you have to wait for the year to finish."
     ]
    },
    {
     "h": "WHY THIS IS THE MOST USEFUL SUM ON THIS PAGE",
     "t": "p",
     "lines": [
      "It runs both ways. 3% growth doubles your money in 24 years. 3% inflation halves it in 24 years. A 6% fund and a 1% fee is really 5%, and 72/5 is about 14 years rather than 12 — that fee did not cost you 1%, it cost you two years of doubling."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Any time you are told a percentage per year, divide 72 by it. The answer tells you what that rate actually means in a human lifetime."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "ninety_five_percent_one_in_a_hundred",
   "title": "95% accurate, 1 in 100",
   "ts": "2026-08-15T03:32:22+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 16.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Take 10,000 people. One in a hundred has it, so 100 are ill and 9,900 are not."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Of the 100 who are ill, a 95% accurate test catches 95. Of the 9,900 who are not, it wrongly flags 5% — and 5% of 9,900 is 495 people."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So 590 people test positive and only 95 of them are ill. That is 95 / 590, about 16%."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     95   answered with the test's accuracy",
      "     50   treated it as a coin flip",
      "      5   gave the test's error rate"
     ]
    },
    {
     "h": "WHY THIS IS THE MORE ALARMING VERSION",
     "t": "p",
     "lines": [
      "A companion video uses a 99% test on a 1-in-1,000 disease and gets 9%. It is tempting to file that away as a quirk of very rare things."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "This one is ten times more common and the test is only slightly worse, and a positive result still leaves you five times more likely to be well than ill. There are 495 healthy people holding a positive result against 95 ill ones."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The reason is the same in both: the healthy group is so much larger that even a small error rate applied to it produces more wrong answers than the test produces right ones. 5% of 9,900 will beat 95% of 100 every time, and no improvement in accuracy short of perfection changes which of those two numbers is bigger."
     ]
    },
    {
     "h": "WHAT TO DO WITH THIS",
     "t": "p",
     "lines": [
      "Nothing about it says a positive result is meaningless — it moved you from 1 in 100 to about 1 in 6, which is a sixteenfold rise and worth acting on. It says the result is a reason to test again, not a diagnosis, and that is exactly why screening programmes are built around a second test rather than a first one."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "half_the_class_a_third_of_those",
   "title": "Half the class, a third of those",
   "ts": "2026-08-15T02:52:35+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 5.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Half of 30 is 15 girls. A third of those 15 is 5. The two fractions multiply: one half times one third is one sixth, and a sixth of 30 is 5."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     15   stopped after finding the girls",
      "     10   took a third of the whole class instead of a third of the girls",
      "     25   added a half of the class to a third of the class"
     ]
    },
    {
     "h": "WHY 25 IS THE ONE TO WATCH",
     "t": "p",
     "lines": [
      "Fifteen girls and ten pupils-who-are-a-third do not add. The ten are not a separate group standing next to the fifteen — most of them ARE some of the fifteen. Adding two overlapping fractions of the same thirty people gives 25, a number larger than either group, when the answer has to be smaller than both."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the tell: **a fraction of a fraction is always smaller than either fraction on its own.** Any answer bigger than 15 was going the wrong way before the arithmetic started, and noticing that is faster than checking the sum."
     ]
    },
    {
     "h": "WHERE IT TURNS UP",
     "t": "p",
     "lines": [
      "\"Sixty per cent of households have a car, and a quarter of those have two\" is 15% of households, not 85%. Discounts stack the same way — 20% off then 10% off is 28% off, not 30% — and so does anything described as a proportion of a proportion, which is most survey results quoted in a headline."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "doubles_your_risk_from_one",
   "title": "It doubles your risk",
   "ts": "2026-08-15T02:12:25+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 1.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Before: 1 person in 10,000. After: 2 people in 10,000. The difference is one extra person."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "        2   gave the new total rather than the increase",
      "      100   read \"doubles\" as a hundredfold rise",
      "    5,000   took doubling to mean a fifty per cent risk"
     ]
    },
    {
     "h": "WHY THIS IS THE MOST USEFUL SENTENCE IN A HEALTH HEADLINE",
     "t": "p",
     "lines": [
      "\"Doubles your risk\" is a ratio. It describes how the number changed and says nothing whatsoever about how big it was. The identical phrase covers a risk going from 1 in 10,000 to 2 in 10,000, and a risk going from 1 in 3 to 2 in 3. One of those is one extra person in a small town. The other is 3,333 extra people in the same town."
     ]
    },
    {
     "h": "THE QUESTION TO ASK",
     "t": "p",
     "lines": [
      "Whenever something doubles, triples or rises by 40%, ask what it was. The ratio is the part that makes a headline; the starting number is the part that decides whether it matters. A paper that reports only the relative change has published the half that cannot be acted on."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "This is not an argument that ratios are dishonest — a doubling IS the right measure if you want to compare two studies of different sizes. It is that the absolute figure is the one that tells a person what to do, and it is the one that usually goes missing."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "up_ten_then_down_ten",
   "title": "£100 up 10%, then down 10%",
   "ts": "2026-08-15T00:30:24+00:00",
   "date": "15 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. £99.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Up 10%: 100 becomes 110. Down 10%: ten per cent OF £110 is £11, not £10. So 110 - 11 = 99."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    100   assumed a rise and an equal fall cancel out",
      "    110   stopped after the rise",
      "     90   applied only the fall"
     ]
    },
    {
     "h": "WHY IT IS ALWAYS A LOSS",
     "t": "p",
     "lines": [
      "The percentages are charged on different amounts. The 10% that went on was a tenth of £100. The 10% that came off was a tenth of £110 — a bigger number — so more left than arrived."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Write it out and the whole thing collapses to one line. Going up by p and then down by p multiplies your money by"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    (1 + p) x (1 - p)  =  1 - p²"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "and p² is positive for every p that is not zero, so 1 - p² is always less than 1. You lose every time, whatever the percentage, and the order makes no difference: down first then up gives £99 too."
     ]
    },
    {
     "h": "HOW BIG THE LOSS GETS",
     "t": "p",
     "lines": [
      "At 10% it is 1%. At 20% it is 4%. At 50% it is 25% — a portfolio that halves and then doubles is back where it started, but one that rises 50% and then falls 50% has lost a quarter."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That last case is why \"it fell 50% but then rose 50%, so we recovered\" is wrong by a wide margin, and why recovery is always quoted as a bigger percentage than the fall it undoes."
     ]
    }
   ],
   "src": "answer",
   "road": {
    "qid": "lg_compound",
    "lesson": "g3",
    "unit": 7,
    "prompt": "£1000 grows at 5% a year for 10 years. What is it worth, to the nearest pound?"
   }
  },
  {
   "slug": "six_panels_how_many_posts",
   "title": "Six panels, how many posts",
   "ts": "2026-08-14T23:48:43+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 7.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Lay it out: post, panel, post, panel, post... Every panel needs a post at each end, and neighbouring panels share one. Six panels have five shared posts in the middle, plus one at each end of the fence. That is 5 + 2 = 7."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      6   counted the panels and gave that",
      "      5   took one away, which is the rule for CUTS",
      "     12   gave every panel its own two posts and forgot they share"
     ]
    },
    {
     "h": "WHY THIS IS THE OTHER HALF OF A PAIR",
     "t": "p",
     "lines": [
      "A companion video asks how many cuts make six pieces from one log. The answer there is five — one FEWER than the pieces. Here the answer is seven, one MORE than the panels. Same six, same off-by-one, opposite direction."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The direction is not arbitrary and it is not something to memorise. Cuts sit BETWEEN pieces, so there is one fewer of them. Posts sit at the ENDS of panels, and the fence has two ends, so there is one more."
     ]
    },
    {
     "h": "THE ONLY RULE WORTH KEEPING",
     "t": "p",
     "lines": [
      "Do not learn \"subtract one\". Learn to ask whether the thing you are counting sits between the others or at their ends, then draw three of them and count. Three panels is enough to see it: post, panel, post, panel, post, panel, post — four posts for three panels, and the pattern is settled."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every off-by-one in a calendar, a spreadsheet or a loop is this question answered without being asked."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "nine_on_twenty_one_on_a_million",
   "title": "Nine on £20k, one on £1m",
   "ts": "2026-08-14T23:08:02+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 118.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Add all ten salaries: nine lots of £20,000 is £180,000, plus £1,000,000 makes £1,180,000. Divide by ten people and the mean is £118,000."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      20   gave the MEDIAN — the middle salary — instead of the mean",
      "     510   averaged the two figures rather than the ten people",
      "     100   shared the million between ten and forgot the £20k salaries"
     ]
    },
    {
     "h": "THE POINT",
     "t": "p",
     "lines": [
      "£118,000 is larger than nine of the ten salaries in the room. It is not what anybody earns, not what a typical person earns, and not close to either. One value was big enough to drag it there on its own."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The median — line everybody up and take the middle — is £20,000, and that number does describe nine of the ten. Neither figure is wrong; they answer different questions, and only one of them survives a single unusual person."
     ]
    },
    {
     "h": "WHERE THIS BITES",
     "t": "p",
     "lines": [
      "Whenever an average is quoted for something with a long tail — salaries, house prices, time on a website, damages awarded — ask which average it is. \"Mean household wealth\" and \"median household wealth\" differ by a factor in most countries, and the gap between them IS the inequality, not a rounding disagreement."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The rule of thumb: if one member of the group could plausibly be a hundred times the others, the mean is a fact about that member and not about the group."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "six_pieces_how_many_cuts",
   "title": "Six pieces, how many cuts",
   "ts": "2026-08-14T22:27:54+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 5.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Lay the log out and mark where the pieces meet. Six pieces sit side by side, so there are five places where one ends and the next begins — and each of those is one cut."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Or count up: one cut gives 2 pieces, two cuts give 3, three give 4. Every cut adds exactly one piece to what you had, and you started with one whole log. So to reach 6 pieces you need 5 cuts."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      6   counted the pieces and gave that",
      "      7   added one instead of taking one away",
      "      3   halved it"
     ]
    },
    {
     "h": "WHY THIS ONE IS EASY TO GET WRONG AND HARD TO NOTICE",
     "t": "p",
     "lines": [
      "Five and six are both sensible-looking answers. Nothing about the question warns you that the number should come out smaller, and if you answer six nothing about six looks wrong. That is what separates this from most counting mistakes, where the wrong answer is obviously too big."
     ]
    },
    {
     "h": "THE SAME GAP, EVERYWHERE",
     "t": "p",
     "lines": [
      "A fence with 6 panels needs 7 posts, because the posts are the ends and there is one more end than there are gaps. A week from Monday to Saturday is 6 days apart but 7 days named. A ladder with 6 rungs has 5 spaces between them."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The rule: decide whether you are counting THINGS or the GAPS BETWEEN THINGS, because there is always exactly one more thing than gap. Almost every off-by-one in a spreadsheet, a schedule or a program is this same question answered without being asked."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_big_bottle_costs_more",
   "title": "500ml at £1 against 2L at £4.20",
   "ts": "2026-08-14T21:48:06+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 200.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The small bottle: 500ml for 100p is 200p per litre. The big bottle: 2,000ml for 420p is 210p per litre."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The small one is cheaper, by 10p a litre."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    210   assumed the big bottle was better value and gave its rate",
      "    420   gave the big bottle's total price",
      "    100   gave the small bottle's total price"
     ]
    },
    {
     "h": "WHY THIS ONE IS DIFFERENT FROM THE REST",
     "t": "p",
     "lines": [
      "Every other question on this page is a mistake in the arithmetic. This is a mistake made before any arithmetic happens: the answer comes from a rule of thumb — bigger pack, better value — and the division never gets done."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The rule of thumb is usually right, which is the whole problem. If bulk were dearer half the time everyone would check. Because it is cheaper most of the time, the exceptions are invisible, and shelf pricing is designed by people who know that."
     ]
    },
    {
     "h": "WHAT TO DO IN A SHOP",
     "t": "p",
     "lines": [
      "Divide once. Price divided by size, both packs, same units. It takes about four seconds and it is the only way to see a 5% difference, because 500ml at £1 and 2L at £4.20 look like obviously different deals and are not."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Supermarket shelf labels in the UK carry a unit price for exactly this reason. It is usually in small grey print underneath, and it is the only number on the label that lets you compare two things."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "a_hundred_at_ten_percent_twice",
   "title": "£100 at 10% for two years",
   "ts": "2026-08-14T21:03:20+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. £121.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Year one: 10% of 100 is 10, so you have 110. Year two: 10% of ONE HUNDRED AND TEN is 11, not 10. So 110 + 11 = 121."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     120   charged the second year's 10% on the original £100",
      "     110   stopped after one year",
      "     133   ran it for three years instead of two"
     ]
    },
    {
     "h": "THE POINT, AND WHY ONE POUND MATTERS",
     "t": "p",
     "lines": [
      "The extra pound is the 10% earned on the previous year's 10%. That is the whole of compounding, and at two years it looks like a rounding error."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Leave it running and the rounding error becomes the entire story. At ten years simple interest gives £200 and compounding gives £259. At forty years simple gives £500 and compounding gives £4,526 — nine times more, from the same rate on the same pound."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The reason is that simple interest adds a fixed amount each year while compounding multiplies, and anything that multiplies eventually outruns anything that adds. Nothing about 10% being large causes it; 1% does the same thing more slowly."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "It is also why fees hurt so much more than their headline suggests: a 1% annual fee is not 1% of your money, it is 1% of every year's balance, taken before the multiplying happens."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "ninety_nine_percent_accurate",
   "title": "A 99% accurate test",
   "ts": "2026-08-14T20:12:13+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 9.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Take 100,000 people. One in a thousand has the disease, so 100 are ill and 99,900 are not."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Test everybody. Of the 100 who are ill, the test catches 99. Of the 99,900 who are not, it wrongly flags 1% — and 1% of 99,900 is 999 people."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So 1,098 people test positive, and only 99 of them are ill. That is 99 / 1,098, which is about 9%."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     99   answered with the test's accuracy",
      "     50   treated it as a coin flip",
      "      1   gave the test's error rate — it is wrong 1% of the time, so",
      "          surely there is a 1% chance"
     ]
    },
    {
     "h": "THE POINT",
     "t": "p",
     "lines": [
      "There are 999 healthy people carrying a positive result and only 99 ill ones. The false alarms outnumber the real cases ten to one, and they do it because there are a thousand times more healthy people for the test to be wrong about."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A 99% accurate test is 99% accurate. It is just being asked about a population where being wrong 1% of the time still produces far more wrong answers than right ones."
     ]
    },
    {
     "h": "WHAT TO ASK NEXT TIME",
     "t": "p",
     "lines": [
      "The question gives you one number and invites you to answer with it. The number that decides the answer — how common the thing is — is not in the question at all. Whenever a test, a screen or an alert is described only by its accuracy, that is the missing figure, and without it the accuracy alone tells you almost nothing."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "one_three_two_over_2_plus_9_times_6",
   "title": "132 / (2 + 9) x 6",
   "ts": "2026-08-14T12:51:05+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 72.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 2 + 9 = 11. Then left to right: 132 / 11 = 12, then 12 x 6 = 72."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       2   multiplied before dividing",
      "     120   dropped the brackets",
      "     450   worked straight across"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "one_twenty_over_3_plus_2_times_6",
   "title": "120 / (3 + 2) x 6",
   "ts": "2026-08-14T12:11:37+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 144.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 3 + 2 = 5. Then left to right: 120 / 5 = 24, then 24 x 6 = 144."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       4   multiplied before dividing",
      "      52   dropped the brackets",
      "     252   worked straight across"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "pick_two_from_five",
   "title": "Pick two from five",
   "ts": "2026-08-14T11:32:00+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 10.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Line the five up. The first person can be paired with any of the other four, the second with any of the remaining three, and so on: 4 + 3 + 2 + 1 = 10."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     20   counted each pair twice — once as Alice-then-Bob and once as",
      "          Bob-then-Alice",
      "     25   multiplied 5 by 5, which counts pairing people with themselves",
      "      7   added the 5 and the 2"
     ]
    },
    {
     "h": "WHY 20 IS THE INTERESTING WRONG ANSWER",
     "t": "p",
     "lines": [
      "It is not careless. There are genuinely 20 ways to pick two people IN ORDER: five choices for the first, four left for the second. 5 x 4 = 20. That is the correct answer to a question one word away from this one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A pair has no order. Alice and Bob are the same pair however you name them, so every one of the 10 pairs was counted exactly twice, and 20 / 2 = 10."
     ]
    },
    {
     "h": "WHERE THE SAME HALVING TURNS UP",
     "t": "p",
     "lines": [
      "Five people in a room, everyone shakes hands once: 10 handshakes, not 20, because a handshake has two people and no direction. Five teams playing each other once: 10 fixtures. Five dots joined by every possible line: 10 lines."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The question to ask, every time, is whether swapping the two things over gives you something different. If it does not, you have counted everything twice."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "six_percent_to_four_percent",
   "title": "6% down to 4%",
   "ts": "2026-08-14T10:51:51+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 33.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The fall is 6 - 4 = 2. As a percentage OF WHAT IT WAS, that is 2 / 6 = 0.333, so about 33%."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      2   the fall in percentage POINTS, true but a different question",
      "     50   divided the fall by the NEW figure (2/4) instead of the old one",
      "     66   worked out 4 as a percentage of 6 and stopped there, instead of",
      "          taking it away from 100"
     ]
    },
    {
     "h": "THE POINT, AND IT IS NOT THE SAME AS THE RISE",
     "t": "p",
     "lines": [
      "Going 4% up to 6% is a 50% rise. Coming back 6% down to 4% is a 33% fall. Same two numbers, same two points of movement, and the percentages do not match."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is not a quirk of these figures. A percentage change is always measured against WHERE YOU STARTED, and the two journeys start from different places: the rise divides by 4, the fall divides by 6. Anything that goes up by x% and then down by x% does not come back to where it began, and the same asymmetry is why a portfolio that falls 50% needs 100% to recover."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So \"it went up 50% and then fell 50%, so we are level\" is wrong twice over, and the second half is where the money goes."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "four_percent_to_six_percent",
   "title": "4% to 6%",
   "ts": "2026-08-14T10:11:15+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 50.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The rise is 6 - 4 = 2. As a percentage OF WHAT IT WAS, that is 2 / 4 = 0.5, which is 50%."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      2   the rise in percentage POINTS, which is true but answers a",
      "          different question",
      "     33   divided the rise by the NEW figure (2/6) instead of the old one",
      "    150   worked out 6 as a percentage of 4 and forgot to subtract the",
      "          original 100%"
     ]
    },
    {
     "h": "THE POINT",
     "t": "p",
     "lines": [
      "Both 2 and 50 are correct statements about the same change. \"Up two points\" and \"up fifty per cent\" describe one event. They are not interchangeable, and the gap between them is not small: one sounds like a rounding error and the other sounds like a crisis."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is exactly why you see both in the wild. A rate moving from 4% to 6% will be reported as \"a two point rise\" by whoever wants it to sound minor and \"a fifty per cent increase\" by whoever wants it to sound severe. Neither is lying."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The habit worth keeping: when a percentage changes, ask whether the number quoted is a percentage of the ORIGINAL QUANTITY or a difference between two percentages. If it is the second, the word is POINTS, and anyone who drops that word is either being careless or making a case."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "one_oh_four_over_8_plus_5_times_2",
   "title": "104 / (8 + 5) x 2",
   "ts": "2026-08-14T09:31:36+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 16.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 8 + 5 = 13. Then left to right: 104 / 13 = 8, then 8 x 2 = 16."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       4   multiplied before dividing",
      "      23   dropped the brackets",
      "      36   worked straight across"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "at_least_one_six_in_two_rolls",
   "title": "At least one six in two rolls",
   "ts": "2026-08-14T08:51:18+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 11.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Roll a die twice and there are 6 x 6 = 36 equally likely outcomes. Six of them have a six on the first die. Six have a six on the second. But that is not twelve, because DOUBLE SIX is in both lists and has been counted twice. So 6 + 6 - 1 = 11."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     12   added the two sixes and never noticed the overlap",
      "      6   counted only the rolls where the FIRST die is a six",
      "     25   counted the outcomes with no six at all"
     ]
    },
    {
     "h": "THE CHECK THAT IS EASIER THAN THE COUNT",
     "t": "p",
     "lines": [
      "Go the other way round. For no six at all, each die has 5 safe faces, so there are 5 x 5 = 25 such outcomes. Everything else has at least one six: 36 - 25 = 11. Same answer, and no overlap to worry about — which is why \"at least one\" problems are almost always easier from the opposite side."
     ]
    },
    {
     "h": "WHERE THIS BITES",
     "t": "p",
     "lines": [
      "The instinct that two chances of one-in-six make a two-in-six is the same instinct that says two chances of one-in-two make a certainty. It does not: two coin flips give a head 3 times in 4, not 4 times in 4. Whenever you find yourself adding the ways something can happen, ask whether any of them can happen together."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "ninety_six_over_3_plus_5_times_3",
   "title": "96 / (3 + 5) x 3",
   "ts": "2026-08-14T08:11:21+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 36.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 3 + 5 = 8. Then left to right: 96 / 8 = 12, then 12 x 3 = 36."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       4   multiplied before dividing",
      "      47   dropped the brackets",
      "     111   worked straight across"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "thirty_take_3_lots_of_a_bracket",
   "title": "30 - 3 x (4 + 2)",
   "ts": "2026-08-14T07:31:29+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 12.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 4 + 2 = 6. Then the multiply: 3 x 6 = 18. Then 30 - 18 = 12."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     162   worked straight across",
      "      20   dropped the brackets",
      "      16   multiplied inside first"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "one_three_two_over_2_plus_9_times_2",
   "title": "132 / (2 + 9) x 2",
   "ts": "2026-08-14T06:50:53+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 24.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 2 + 9 = 11. Then left to right: 132 / 11 = 12, then 12 x 2 = 24."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       6   multiplied before dividing",
      "      84   dropped the brackets",
      "     150   worked straight across"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "root_of_nine_plus_sixteen",
   "title": "The root of 9 + 16",
   "ts": "2026-08-14T06:10:35+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 5.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Do what is inside the bracket first. 9 + 16 = 25, and the square root of 25 is 5."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      7   took the root of each number separately: 3 + 4",
      "     12   multiplied under the root instead of adding: root of 144",
      "     25   added correctly and then forgot to take the root"
     ]
    },
    {
     "h": "THE POINT",
     "t": "p",
     "lines": [
      "The tempting answer is 7, and it is tempting for a good reason: the rule it uses is true for multiplication. The root of 9 x 16 really is the root of 9 times the root of 16 — that is 3 x 4 = 12, and it is exactly right. So the habit of splitting a root across the numbers inside works, right up until the sign between them is a plus."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Roots do not distribute over addition. Neither do squares: (3 + 4)² is 49, not 9 + 16. Nor do most things you would want to — 1/(a+b) is not 1/a + 1/b either."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "There is a picture behind it. Root 9 and root 16 are the sides of a right angle, 3 and 4, and root (9+16) is the hypotenuse, 5. Walking 3 across and 4 up takes you 7 steps but leaves you only 5 from where you started. The gap between 5 and 7 is not an arithmetic slip; it is the whole reason the diagonal is shorter than going round."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "sixty_after_a_quarter_off",
   "title": "£60 after 25% off",
   "ts": "2026-08-14T05:30:15+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. £80.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "£60 is what is LEFT after a quarter came off, so £60 is 75% of the full price. Divide, do not add: 60 / 0.75 = 80. Check it forwards — a quarter of 80 is 20, and 80 - 20 = 60."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      75   added 25% back on to the sale price",
      "      48   divided by 1.25 instead of by 0.75",
      "     240   read the £60 as the discount rather than the price paid"
     ]
    },
    {
     "h": "THE POINT",
     "t": "p",
     "lines": [
      "Adding 25% back does not undo taking 25% off, and the reason is that the two percentages are charged on different bases. The quarter that came off was a quarter of £80 — that is £20. The quarter you would add back is a quarter of £60 — that is only £15. You end at £75 and you are £5 short, permanently."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "This is the same arithmetic behind a pay cut that is later \"restored\" by the same percentage, and behind why a portfolio that falls 25% needs to rise 33% to break even. The percentage that takes something away is always measured against the larger number, and the percentage that gives it back against the smaller one. That gap is not a rounding detail. It is the whole effect."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "ninety_over_3_plus_2_times_6",
   "title": "90 / (3 + 2) x 6",
   "ts": "2026-08-14T04:49:59+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 108.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 3 + 2 = 5. Then left to right: 90 / 5 = 18, then 18 x 6 = 108."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       3   multiplied before dividing",
      "      42   dropped the brackets",
      "     192   worked straight across"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "forty_eight_over_3_plus_5_times_3",
   "title": "48 / (3 + 5) x 3",
   "ts": "2026-08-14T04:04:58+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 18.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 3 + 5 = 8. Then left to right: 48 / 8 = 6, then 6 x 3 = 18."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       2   multiplied before dividing",
      "      31   dropped the brackets",
      "      63   worked straight across"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "fifty_six_over_2_plus_5_times_4",
   "title": "56 / (2 + 5) x 4",
   "ts": "2026-08-14T03:19:59+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 32.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 2 + 5 = 7. Then left to right: 56 / 7 = 8, then 8 x 4 = 32."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       2   multiplied before dividing",
      "      48   dropped the brackets",
      "     132   worked straight across"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "forty_take_3_lots_of_a_bracket",
   "title": "40 - 3 x (5 + 4)",
   "ts": "2026-08-14T02:36:02+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 13.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 5 + 4 = 9. Then the multiply: 3 x 9 = 27. Then 40 - 27 = 13."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     333   worked straight across",
      "      29   dropped the brackets",
      "      21   multiplied inside first"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "forty_five_take_7_lots_of_a_bracket",
   "title": "45 - 7 x (3 + 2)",
   "ts": "2026-08-14T01:45:03+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 10.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 3 + 2 = 5. Then the multiply: 7 x 5 = 35. Then 45 - 35 = 10."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     190   worked straight across",
      "      26   dropped the brackets",
      "      22   multiplied inside first"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "two_classes_one_average",
   "title": "Ten average 60, thirty average 80",
   "ts": "2026-08-14T01:05:09+00:00",
   "date": "14 Aug 2026",
   "topic": "",
   "q": null,
   "a": "D. 75.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Count the marks, not the averages. Ten students at 60 is 600 marks. Thirty students at 80 is 2,400 marks. That is 3,000 marks between 40 students, so 3,000 / 40 = 75."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      70   averaged the two averages",
      "      65   weighted them the wrong way round",
      "     140   added the averages"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "75 sits closer to 80 than to 60 because there are three times as many students in the second group. The average of two averages is only right when the groups are the same size — and the cases where this matters are exactly the cases where they are not."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "fifty_take_5_lots_of_a_bracket",
   "title": "50 - 5 x (2 + 4)",
   "ts": "2026-08-14T00:25:29+00:00",
   "date": "14 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 20.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 2 + 4 = 6. Then the multiply: 5 x 6 = 30. Then 50 - 30 = 20."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     270   worked straight across",
      "      44   dropped the brackets",
      "      36   multiplied inside first"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "two_point_five_hours_in_minutes",
   "title": "2.5 hours in minutes",
   "ts": "2026-08-13T23:45:31+00:00",
   "date": "13 Aug 2026",
   "topic": "",
   "q": null,
   "a": "C. 150.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Half an hour is 30 minutes, not 50. So 2.5 hours is 120 + 30 = 150."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     170   read the point five as fifty minutes",
      "     250   multiplied by a hundred instead of sixty",
      "     120   dropped the half altogether"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The trap is that \"2.5 hours\" and \"2 hours 50\" look almost identical written down and are twenty minutes apart. Decimals count in tens; clocks count in sixties. A decimal point in front of a unit that is not base ten is one of the few places where careful people still get caught."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "share_sixty_in_two_to_three",
   "title": "Share 60 in the ratio 2:3",
   "ts": "2026-08-13T23:05:59+00:00",
   "date": "13 Aug 2026",
   "topic": "",
   "q": null,
   "a": "B. 24.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The ratio 2 : 3 makes FIVE parts, not two. One part is 60 / 5 = 12. The smaller share is 2 parts, so 2 x 12 = 24, and the larger is 3 x 12 = 36. They add back to 60, which is the check."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      30   split it down the middle and ignored the ratio",
      "      20   divided by the 3 instead of by the total number of parts",
      "      40   gave away two thirds instead of two fifths"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every one comes from dividing by a number in the ratio rather than by their sum. Count the parts first and the rest is arithmetic."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "fifty_five_take_7_lots_of_a_bracket",
   "title": "55 - 7 x (2 + 3)",
   "ts": "2026-08-13T22:10:24+00:00",
   "date": "13 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 20.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 2 + 3 = 5. Then the multiply: 7 x 5 = 35. Then 55 - 35 = 20."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     240   worked straight across",
      "      44   dropped the brackets",
      "      38   multiplied inside first"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "five_plus_two_times_three_squared",
   "title": "5 + 2 x 3 squared",
   "ts": "2026-08-13T21:30:02+00:00",
   "date": "13 Aug 2026",
   "topic": "",
   "q": null,
   "a": "A. 23.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The power goes first: 3² = 9. Then the multiply: 2 x 9 = 18. Then the add: 5 + 18 = 23."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      41   squared the product: 5 + (2 x 3)²",
      "      17   read the little 2 as another multiply: 5 + 2 x 3 x 2",
      "      63   worked straight across: (5 + 2) x 3²"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The power is attached to the 3 and to nothing else. It is not sitting over the whole term, and it is not an instruction to multiply by two."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "six_take_minus_four_times_three",
   "title": "6 - (-4) x 3",
   "ts": "2026-08-13T20:50:19+00:00",
   "date": "13 Aug 2026",
   "topic": "",
   "q": null,
   "a": "D. 18.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Multiply before you subtract: (-4) x 3 = -12. Then 6 - (-12), and subtracting a negative adds, so 6 + 12 = 18."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      30   worked straight across: (6 + 4) x 3",
      "      -6   read it as plain subtraction: 6 - 4 x 3",
      "     -18   negated the whole thing"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The sign is the trap, not the order. Take away a debt of twelve and you are twelve better off — that is all \"minus a negative\" means."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "eight_inch_against_sixteen",
   "title": "8 inch against 16 inch",
   "ts": "2026-08-13T20:10:46+00:00",
   "date": "13 Aug 2026",
   "topic": "",
   "q": null,
   "a": "B. Four times.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Double the width and you double it in BOTH directions, so the area goes up by two times two. A 16 inch pizza is four 8 inch pizzas."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       2   twice as wide, so twice as much",
      "       8   cubed it, as if it were a volume",
      "      16   squared the four instead of the width"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "This is worth money. Two 8 inch pizzas are HALF a 16 inch one, so if the large costs less than double the small, the large is the better buy — and it almost always does."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "sixty_there_thirty_back",
   "title": "60 mph there, 30 mph back",
   "ts": "2026-08-10T03:26:52+00:00",
   "date": "10 Aug 2026",
   "topic": "",
   "q": null,
   "a": "A. 40 mph.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Say the leg is 60 miles. Out takes 1 hour, back takes 2 hours. That is 120 miles in 3 hours, which is 40 mph."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      45   averaged the two speeds",
      "      90   added them",
      "      30   took the slower leg"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Speeds do not average like ordinary numbers, because you spend TWICE AS LONG on the slow leg. Half the distance is at 30, not half the time — so the slow leg gets more of the trip than the fast one, and pulls the answer below 45."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "And it does not matter how far it is. Try 10 miles or 1,000: it is always 40."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "twenty_off_then_ten_off",
   "title": "200, -20%, -10%",
   "ts": "2026-08-10T02:45:56+00:00",
   "date": "10 Aug 2026",
   "topic": "",
   "q": null,
   "a": "C. 144.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Twenty per cent off 200 leaves 160. Ten per cent off 160 is 16, so you pay 144."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     140   added the percentages and took 30% off",
      "     160   took the 20% and forgot the second cut",
      "     170   took off 20 pounds and 10 pounds instead of per cent"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The second cut is ten per cent of the NEW price, not the old one. Adding the two percentages is the one that catches nearly everybody, because 30% off feels like it must be the same thing."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "sixty_take_a_bracket_of_five",
   "title": "Sixty, take a bracket of five",
   "ts": "2026-08-10T01:25:12+00:00",
   "date": "10 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 10.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 8 + 2 = 10. Then the multiply: 10 x 5 = 50. Then 60 - 50 = 10."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     250   worked straight across: (60 - (8 + 2)) * 5",
      "      62   dropped the brackets: 60 - 8 + 2 * 5",
      "      42   multiplied inside first: 60 - (8 + 2 * 5)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "nine_lots_then_take_twelve",
   "title": "Nine lots, then take twelve",
   "ts": "2026-08-10T00:39:41+00:00",
   "date": "10 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 15.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 7 - 4 = 3. Then the multiply: 9 x 3 = 27. Then 27 - 12 = 15."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      47   dropped the brackets: 9 * 7 - 4 - 12",
      "     -81   swept the twelve inside: 9 * (7 - 4 - 12)",
      "     135   moved the minus inside: 9 * (7 - (4 - 12))"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "twenty_five_take_three_lots",
   "title": "Twenty-five, take three lots",
   "ts": "2026-08-09T22:54:22+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 4.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 2 + 5 = 7. Then the multiply: 3 x 7 = 21. Then 25 - 21 = 4."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     154   worked straight across: (25 - 3) * (2 + 5)",
      "      24   dropped the brackets: 25 - 3 * 2 + 5",
      "      14   multiplied inside first: 25 - (3 * 2 + 5)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "seventy_two_over_a_gap",
   "title": "Seventy-two over a gap",
   "ts": "2026-08-09T22:14:00+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 24.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 9 - 3 = 6. Then left to right: 72 / 6 = 12, then 12 x 2 = 24."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       6   multiplied before dividing: 72 / ((9 - 3) * 2)",
      "       2   dropped the brackets: 72 / 9 - 3 * 2",
      "      10   worked straight across: (72 / 9 - 3) * 2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "fifty_take_six_lots",
   "title": "Fifty, take six lots",
   "ts": "2026-08-09T21:33:42+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 8.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 4 + 3 = 7. Then the multiply: 6 x 7 = 42. Then 50 - 42 = 8."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     308   worked straight across: (50 - 6) * (4 + 3)",
      "      29   dropped the brackets: 50 - 6 * 4 + 3",
      "      23   multiplied inside first: 50 - (6 * 4 + 3)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "a_hundred_over_a_product",
   "title": "A hundred over a product",
   "ts": "2026-08-09T20:51:51+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 20.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 2 x 5 = 10. Then 100 / 10 = 10. Then 10 + 10 = 20."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "     260   worked straight across: 100 / 2 * 5 + 10",
      "       5   added inside first: 100 / (2 * 5 + 10)",
      "     750   brackets round the wrong pair: 100 / 2 * (5 + 10)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "seven_lots_of_a_bracket",
   "title": "Seven lots of a bracket",
   "ts": "2026-08-09T20:12:43+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 20.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 9 - 5 = 4. Then the multiply: 7 x 4 = 28. Then 28 - 8 = 20."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      50   dropped the brackets: 7 * 9 - 5 - 8",
      "     -28   subtracted inside first: 7 * (9 - 5 - 8)",
      "      84   moved the minus inside: 7 * (9 - (5 - 8))"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "thirty_take_a_double_bracket",
   "title": "Thirty, take a double bracket",
   "ts": "2026-08-09T19:32:49+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 10.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 5 + 5 = 10. Then the multiply: 10 x 2 = 20. Then 30 - 20 = 10."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      40   worked straight across: (30 - (5 + 5)) * 2",
      "      35   dropped the brackets: 30 - 5 + 5 * 2",
      "      15   multiplied inside first: 30 - (5 + 5 * 2)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "forty_over_a_bracket",
   "title": "Forty over a bracket",
   "ts": "2026-08-09T18:52:56+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 16.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 4 + 1 = 5. Then left to right: 40 / 5 = 8, then 8 x 2 = 16."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       4   multiplied before dividing: 40 / ((4 + 1) * 2)",
      "      12   dropped the brackets: 40 / 4 + 1 * 2",
      "      22   worked straight across: (40 / 4 + 1) * 2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "fifteen_take_away_a_bracket",
   "title": "Fifteen take away a bracket",
   "ts": "2026-08-09T18:12:49+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "A. 9.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 6 - 3 = 3. Then the multiply: 2 x 3 = 6. Then 15 - 6 = 9."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      39   worked straight across: (15 - 2) * (6 - 3)",
      "       0   dropped the brackets: 15 - 2 * 6 - 3",
      "       6   multiplied inside first: 15 - (2 * 6 - 3)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_bracket_goes_first",
   "title": "The bracket goes first",
   "ts": "2026-08-09T17:34:04+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "D. 2.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 8 - 3 = 5. Then the multiply: 5 x 2 = 10. Then 12 - 10 = 2."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "      14   worked straight across: (12 - (8 - 3)) * 2",
      "      -2   dropped the brackets: 12 - 8 - 3 * 2",
      "      10   multiplied inside first: 12 - (8 - 3 * 2)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "divide_before_you_multiply",
   "title": "Divide before you multiply",
   "ts": "2026-08-09T16:55:06+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "B. 8.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 2 + 4 = 6. Then left to right: 24 / 6 = 4, then 4 x 2 = 8."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "       2   multiplied before dividing: 24 / ((2 + 4) * 2)",
      "      20   dropped the brackets: 24 / 2 + 4 * 2",
      "      32   worked straight across: (24 / 2 + 4) * 2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "four_ways_to_get_this_wrong",
   "title": "Four ways to get this wrong",
   "ts": "2026-08-09T16:14:28+00:00",
   "date": "9 Aug 2026",
   "topic": "quiz",
   "q": null,
   "a": "C. 0.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Brackets first: 3 + 2 = 5. Then the multiply: 4 x 5 = 20. Then the subtract: 20 - 20 = 0."
     ]
    },
    {
     "h": "WHY THE OTHER THREE ARE THERE",
     "t": "p",
     "lines": [
      "Each one is a real mistake, not a random number:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    80   worked straight across, left to right: (20 - 4) x (3 + 2)",
      "    10   dropped the brackets: 20 - 4 x 3 + 2",
      "    6    multiplied inside the bracket before adding: 20 - (4 x 3 + 2)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you picked one of those, you can see exactly which step did it."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_same_fee_paid_faster",
   "title": "The same fee, paid faster",
   "ts": "2026-08-09T15:34:51+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The one who cleared it in six months paid 4 times as much for each year they borrowed.",
   "why": [
    {
     "h": "WHY",
     "t": "p",
     "lines": [
      "The fee is £120 either way — 3% of £4,000, charged once, at the start. What changes is how long that one payment is spread over."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    over 24 months   £120 / 2 years = £60 a year",
      "    over 6 months    £120 / 0.5 years = £240 a year"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A fee is a price. A price only becomes a RATE once you say how long for, and paying early shortens the \"how long for\" without reducing the price."
     ]
    },
    {
     "h": "WHAT THIS IS NOT",
     "t": "p",
     "lines": [
      "It is not an argument for staying in debt. Clearing a card early is usually the right thing to do, and if the card charged interest the early payer would win easily. It is an argument about how to compare a one-off fee with a rate: they are not the same kind of number, and the only way to put them side by side is to say how long the money was borrowed for."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "up_to_half_price",
   "title": "Up to half price",
   "ts": "2026-08-09T14:41:50+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The reel leaves the average to you.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Add up what comes off all twelve, then share it out over twelve. That is all an average is."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The sign is not lying, and that is the point worth taking away. \"Up to\" quotes the best case on the shelf, and the best case can be one item out of twelve. A maximum tells you nothing at all about the typical."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_cheaper_one_you_threw_away",
   "title": "The cheaper one you threw away",
   "ts": "2026-08-09T13:37:55+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The reel leaves the last divide to you.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "Use the price paid for the big bag. Divide it by the kilos that were actually eaten. The bin does not count as eaten food."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the whole trick: the shelf ticket priced the kilos bought, but the question asks for the kilos eaten."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_phone_was_paid_off_a_year_ago",
   "title": "The phone was paid off a year ago",
   "ts": "2026-08-09T11:50:58+00:00",
   "date": "9 Aug 2026",
   "topic": "",
   "q": null,
   "a": "£30 a month, £360 a year, and £720 over two years of not noticing.",
   "why": [
    {
     "h": "WHAT THE FIRST TWO YEARS WERE DOING",
     "t": "p",
     "lines": [
      "The made-up phone deal is £45 a month. The same calls and data, bought on their own, are £15 a month."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the part paying for the phone is:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £45 - £15 = £30 a month"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Over the first 24 months:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £30 x 24 = £720"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the phone being paid for."
     ]
    },
    {
     "h": "WHAT CHANGES AFTER MONTH 24",
     "t": "p",
     "lines": [
      "The phone is now yours. The calls still cost £15 a month. If the payment stays at £45, the part above the calls-only price is still:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £45 - £15 = £30 each month"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So one unnoticed year is:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £30 x 12 = £360"
     ]
    },
    {
     "h": "THE SAME YEARLY NUMBER A SECOND WAY",
     "t": "p",
     "lines": [
      "List the months after the phone is paid:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    months 25 to 36 = 12 later payments"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Each later payment is £45. Each month of calls and data is £15. Summing the twelve differences gives:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    12 lots of (£45 - £15) = £360"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Two years of not noticing is:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £360 x 2 = £720"
     ]
    },
    {
     "h": "THE CONTROL",
     "t": "p",
     "lines": [
      "If the payment drops to £15 at month 25, the extra at month 25, month 26, and every later month is exactly £0. That is the check that proves the extra is not \"having a phone plan\". It is only the amount above the calls-and-data price after the phone has already been paid for."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_same_cover_two_prices",
   "title": "The same cover, two prices",
   "ts": "2026-08-09T10:36:02+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "£75.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The renewal is £260. The new-customer quote is £185."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £260 - £185 = £75"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "As a share of the price shown to someone new:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £75 / £185 = 40.5%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the renewal is 40.5% higher than the new-customer price, for the same car, same driver and same cover."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If that same gap came back every year for 5 years and was never checked:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    5 x £75 = £375"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The same total a second way:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    5 x £260 = £1300",
      "    5 x £185 = £925",
      "    £1300 - £925 = £375"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The control is important. If both quotes were £185, the gap would be exactly £0, the percentage gap would be exactly 0%, and the five-year total would be exactly £0 by both routes."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is all this video is doing. It is arithmetic, not advice. Staying put can be worth real time and hassle. The arithmetic only asks what the gap is."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_price_of_each_visit",
   "title": "The price of each visit",
   "ts": "2026-08-09T09:18:27+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The break-even is 5 visits in a month.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "At 5 visits, paying at the door costs 5 x £8.00 = £40.00. The membership also costs £40.00. Same total, to the penny."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Below that count, paying at the door is cheaper because the days you stay home cost nothing. Above that count, the membership is cheaper because it stays at £40.00."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A second way to get the same count is to divide the monthly membership by the door price: £40.00 / £8.00 = 5."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The transferable move: a fixed price has no cost per use until you say how often you use it. That divisor is the number most people forget to check."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "paying_monthly_is_a_loan",
   "title": "Paying monthly is a loan",
   "ts": "2026-08-09T08:04:25+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The headline difference is 10%, but the annual rate is about 19.5% if the twelve £55 payments start one month after the cover begins.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The totals are simple:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    paying it all at once:        £600",
      "    paying a bit each month:      12 x £55 = £660",
      "    extra paid for spreading it:  £60"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "£60 is 10% of £600. That is the tempting shortcut."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "But the shortcut measures the cost against the starting £600. The amount still owed is falling every month."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Solve the actual loan:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £600 = £55/(1+r) + £55/(1+r)^2 + ... + £55/(1+r)^12"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The monthly rate is 1.498%, which makes the annual rate 19.5%."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A second route gets the same number without the present-value formula. Start with £600 owed. Each month add r, then take off £55. The r that lands the final balance exactly on zero is again 1.498% a month, or 19.5% a year."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If the first £55 is paid today, the financed amount after that first payment is £545, repaid by eleven more £55 payments. That timing gives about 23.6% a year."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Control check: if the monthly price were exactly £50, the twelve payments would add to £600 and the solved rate would be exactly zero."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The transferable move: spreading a payment is borrowing. The price of borrowing is measured against the money you still owe, not against the money you started with."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_deposit_you_never_get_back",
   "title": "The deposit you never get back",
   "ts": "2026-08-09T06:43:41+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "You get it back at the end if nothing is broken. The cost is the money it could have earned while you could not use it.",
   "why": [
    {
     "h": "SETUP",
     "t": "pre",
     "lines": [
      "    advertised rent     £1,200 a month",
      "    deposit locked up   £1,385",
      "    time in the flat    24 months",
      "    savings rate        4% a year"
     ]
    },
    {
     "h": "WHAT THE DEPOSIT COULD HAVE EARNED",
     "t": "pre",
     "lines": [
      "    £1,385 x ((1 + 0.04) ** 2 - 1)",
      "    = £113.02"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is not extra rent paid to anyone else. It is the price of having your own money locked away instead of sitting in savings."
     ]
    },
    {
     "h": "WHAT THAT ADDS TO EACH MONTH",
     "t": "pre",
     "lines": [
      "    £113.02 / 24 months",
      "    = £4.71 per month"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the flat advertised at £1,200 a month really costs £1,204.71 per month on this arithmetic."
     ]
    },
    {
     "h": "THE SAME NUMBER, A SECOND WAY",
     "t": "p",
     "lines": [
      "Use the monthly rate that gives the same four per cent year:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    monthly rate = (1 + 0.04) ** (1 / 12) - 1"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Apply it for 24 months to £1,385. The final savings pot is the same as the two-year calculation, so the earned amount and the monthly add-on are the same."
     ]
    },
    {
     "h": "CONTROL",
     "t": "p",
     "lines": [
      "Set the savings rate to zero. Then the deposit earns £0.00, the monthly add-on is £0.00, and the real monthly cost is exactly the advertised £1,200. That is the check that this is arithmetic, not a complaint."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_tip_on_the_tip",
   "title": "The tip on the tip",
   "ts": "2026-08-09T05:29:16+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The two tips are £10 and £9.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The food and drink were £80. Service at 12.5% adds £10, so the bill becomes £90. The machine then takes 10% of £90, which is £9."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the total tip is £19 on £80 of food:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £19 / £80 = 23.75%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The overlap is £1. That is the part of the machine tip taken from the service line itself, because 10% of the £10 service charge is £1."
     ]
    },
    {
     "h": "THE SAME NUMBER A SECOND WAY",
     "t": "p",
     "lines": [
      "The bill first gets multiplied by 1 + 12.5%. The card machine then multiplies that new number by 1 + 10%. The total lift above the original food price is:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    (1 + 0.125) x (1 + 0.10) - 1 = 23.75%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the same 23.75%. A percentage taken from a total that already contains a percentage charges you twice on the same money. It is the same reason two discounts do not simply add when one is taken after the other."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_nineteen_pound_flight",
   "title": "The £19 flight is not the flight you pay for",
   "ts": "2026-08-09T04:33:59+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The poster price is £19.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "With a cabin bag and a picked seat, one person is at:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £19 + £25 + £12",
      "    = £56"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is 2.95 times the poster price. The poster price is 33.9% of that total."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If the airport check-in fee is added too, the desk total is:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £19 + £25 + £12 + £55",
      "    = £111"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is 5.84 times the poster price. The poster price is only 17.1% of that final total."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The same multiple a second way:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    final multiple = final total / poster price",
      "                   = 111 / 19",
      "                   = 5.84"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    poster share   = poster price / final total",
      "                   = 19 / 111",
      "                   = 17.1%"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1 / poster share = 5.84"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the poster price and the reciprocal of its share give the same multiple."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The mechanism: the price on the poster is for a thing without the parts you need, so the comparison you make between airlines is not a comparison of what you will actually spend."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_sale_price_was_the_plan",
   "title": "The sale price was the plan",
   "ts": "2026-08-09T03:25:20+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The coat was advertised as 50% off, but the real saving was 30%.",
   "why": [
    {
     "h": "THE NUMBER ON THE TICKET MOVED",
     "t": "pre",
     "lines": [
      "    the price for months       £100",
      "    the new ticket             £140",
      "    advertised discount        50%",
      "    shopper pays               £140 x 50% = £70"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So against the price it had been for months:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £100 - £70 = £30",
      "    £30 / £100 = 30%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the real saving: 30%, not 50%."
     ]
    },
    {
     "h": "THE SAME NUMBER, A SECOND WAY",
     "t": "p",
     "lines": [
      "The shop first moved the ticket from £100 to £140, which multiplies it by 1.4. Then it took half off, which multiplies by 0.5."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1.4 x 0.5 = 0.7"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The shopper pays 70% of the old price, so the real saving is 30%."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "CONTROL: NO TICKET MOVE"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If the ticket had stayed at £100, 50% off would be exactly:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £100 x 50% = £50"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That saves exactly £50, which is exactly 50%."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Because the shop moved the ticket first, the shopper paid £70 instead of £50. The moved ticket cost £20 while the sign shouted the bigger discount."
     ]
    },
    {
     "h": "TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When a sign says a percentage off, ask: off what? The percentage is not the whole deal. The number it is taken from is part of the deal too."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_free_year_that_was_not",
   "title": "The free sofa year that was not free",
   "ts": "2026-08-09T02:44:18+00:00",
   "date": "9 Aug 2026",
   "topic": "",
   "q": null,
   "a": "£298.80.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The last payment was only £100, and it was only a week late. If the shop had charged only that small late bit for seven days, the charge would be about £0.43."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is not what this deadline does. Once the sofa money is not finished inside the twelve months, the charge is worked on the original £1,200 from day one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Using a 24.9% effective annual rate:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £1,200 x 24.9% = £298.80"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The same number a second way:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    daily rate = (1 + 0.249)^(1/365) - 1",
      "    £1,200 x ((1 + daily rate)^365 - 1) = £298.80"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So missing the date by one day costs the same full-year charge as missing it by a week. Paying £1,100 on time does not shrink that charge, because the lost 0% deal looks back to the original sofa price."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The transferable move: a \"free\" year can be a deadline, not a discount. Ask what happens if you miss the finish date by one day, and ask whether the charge looks back to the original price or only to the money still unpaid."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "what_a_mile_actually_costs",
   "title": "Five things cost money in a car's year, and petrol is not the big one",
   "ts": "2026-08-09T01:22:17+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "About 15p for the mile, and about 49p a mile for the car. Both are right.",
   "why": [
    {
     "h": "THE YEAR, ADDED UP",
     "t": "pre",
     "lines": [
      "    worth less     £ 1,500   (12,000 to 4,500 over 5 years)",
      "    insurance      £   600",
      "    road tax       £   190",
      "    servicing      £   450",
      "    petrol         £ 1,172   (8,000 miles at 45 mpg, 1.45/litre)",
      "                   ----------",
      "                   £ 3,912  over 8,000 miles  =  49p a mile"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Petrol is only 30% of it. The thing most people call \"the cost of driving\" is the smallest line but one."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "ONE MORE MILE IS NOT 49p"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Drive an extra mile tomorrow and the lost value, the insurance and the tax do not move -- they already happened. Only the petrol changes: about 15p."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    the car, per mile        49p     <- the average",
      "    one more mile            15p     <- the extra"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "They differ by 3.3x, and each is the wrong answer to the other's question. Cost a trip at 49p and you will talk yourself out of journeys worth making. Judge whether to own the car at 15p and you will miss £2,740 a year that turns up whether you drive or not."
     ]
    },
    {
     "h": "WHY ONE MOVES AND THE OTHER DOES NOT",
     "t": "pre",
     "lines": [
      "    4,000 miles a year   83p a mile",
      "    8,000 miles a year   49p a mile",
      "   16,000 miles a year   32p a mile"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The costs that turn up anyway are spread over more miles, so the average falls. The cost of one more mile sits at 15p throughout, because it never contained them."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Before dividing a total by a quantity, ask which of the costs would still be there if the quantity were zero. Those belong to the DECISION TO OWN, not to the decision to use."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "paid_in_sixty_days",
   "title": "The tin is empty and the work was all done",
   "ts": "2026-08-09T00:37:37+00:00",
   "date": "9 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "£2,500 is in the tin. You put £3,000 in and you are £500 DOWN, after three months in which you earned £7,500.",
   "why": [
    {
     "h": "MONTH BY MONTH",
     "t": "pre",
     "lines": [
      "    month 1   bill 4,000 sent, pay 1,500    tin  1,500   earned  2,500",
      "    month 2   bill 4,000 sent, pay 1,500    tin      0   earned  5,000",
      "    month 3   month 1's bill is paid    tin  2,500   earned  7,500"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The costs leave on the day they arrive. The money comes back sixty days after the work. For the first two months money only goes one way, and the tin hits exactly zero at the end of month two."
     ]
    },
    {
     "h": "TWO DIFFERENT CLOCKS",
     "t": "p",
     "lines": [
      "What you EARNED counts the work when it is done. What is IN THE TIN counts money when it moves. Both are correct and they answer different questions."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    earned after 3 months     £7,500",
      "    still owed to you         £8,000",
      "    so in the tin             £3,000 + 7,500 - 8,000  =  £2,500"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is the whole of it: what you have = what you started with + what you earned - what you are owed. Two bills are always in flight, so £8,000 of it is permanently somewhere else."
     ]
    },
    {
     "h": "IT DOES NOT FIX ITSELF BY GROWING",
     "t": "p",
     "lines": [
      "Win more work and the gap gets WIDER, because every new bill adds sixty days of costs before it adds any money."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When money is owed to you, ask two separate questions: how much, and WHEN. An amount without a date is not an amount you can spend."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "spending_more_to_save_the_delivery",
   "title": "Spending more to save the delivery",
   "ts": "2026-08-08T21:27:30+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "You spent £7.01 more.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "The basket started at £38.00. The shop would bring it to your door for £4.99, so paying now was £42.99."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The shop drew its line at £50.00. The extra candle was £12.00, so the basket crossed the line and became £50.00."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That removed £4.99, but it added £12.00. The extra thing cost £7.01 more than the charge it removed."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "If you truly wanted the candle anyway, the maths flips. Then you are comparing £50.00 now with £54.99 for the same two things later, and the shop really did remove £4.99 from something you wanted."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The move is simple: ask what changed in the basket. If crossing the shop's line makes you add a thing you did not want, that thing is the price of the \"saving\"."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "five_percent_on_a_slice",
   "title": "5%, but only on the first £1,000",
   "ts": "2026-08-08T20:25:15+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "1.8% on five thousand, and 1.4% on ten thousand. Never 5%.",
   "why": [
    {
     "h": "WHAT YOU ACTUALLY EARN",
     "t": "pre",
     "lines": [
      "    £5,000   1,000 at 5% = 50  +  4,000 at 1% = 40  =  £90",
      "    £10,000   1,000 at 5% = 50  +  9,000 at 1% = 90  =  £140"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Turn each one back into a rate by dividing what you received by what you put in:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    90 / 5,000  =  1.8%",
      "    140 / 10,000 =  1.4%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "5% of 5,000 would have been £250. You get £90."
     ]
    },
    {
     "h": "WHY IT FALLS WHEN YOU SAVE MORE",
     "t": "p",
     "lines": [
      "The rate you receive is the weighted AVERAGE of the two tiers, and the weights are the shares of your money sitting in each."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £5,000    a fifth of it earns 5%      ->  1.80%",
      "    £10,000    a tenth of it earns 5%      ->  1.40%",
      "    £50,000    a fiftieth earns 5%       ->  1.08%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every extra pound goes into the 1% tier, so the average is dragged towards 1%. It gets closer for ever and never arrives, and it never turns back up."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "A headline rate attached to a SLICE is an upper bound, not a rate. It is the number you receive only if your whole balance sits inside the slice. Divide what you actually got by what you actually put in, and compare those numbers instead."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "six_pounds_on_thirty",
   "title": "A six pound late fee, and the rate it really is",
   "ts": "2026-08-08T19:45:40+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "520% a year, simple. Compounded, about 11,348%.",
   "why": [
    {
     "h": "WHAT THE FEE IS CHARGED ON",
     "t": "p",
     "lines": [
      "Not the £120 you spent. The £30 you were late with."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £6 / £30  =  20%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That 20% is the whole cost of the loan, and the loan was 14 days long."
     ]
    },
    {
     "h": "FROM A FORTNIGHT TO A YEAR",
     "t": "p",
     "lines": [
      "There are 26 two-week stretches in a year, so charging 20% once a fortnight, without compounding, is"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    20% x 26  =  520% a year"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Let it compound -- each fee charged on the balance the last one grew -- and £30 becomes £3,434 in a year:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1.20 ^ 26  =  114x   ->  about 11,348%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "520% is the honest headline; 11,348% is what it becomes if the fee keeps landing on the fee."
     ]
    },
    {
     "h": "WHY IT IS SO LARGE",
     "t": "p",
     "lines": [
      "A rate is pounds per pound per year. This fee had a small denominator twice over: a small amount of money, and a small amount of time. A flat fee is a rate DIVIDED BY TIME, so the shorter the borrowing, the bigger the rate -- and the fee itself never changes."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Same £6 on the same £30, held for different lengths:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    a year          20%",
      "    a month         260%",
      "    two weeks       520%",
      "    one day         7,280%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Nothing in that column is a different fee. It is the same £6 divided by less and less time."
     ]
    },
    {
     "h": "THE ROUNDING IS IN THE CONSERVATIVE DIRECTION",
     "t": "p",
     "lines": [
      "26 x 14 days is 364, one day short of a year, so 26 periods slightly UNDERSTATES it. On a 365-day year the simple rate is 521%."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_free_exchange_costs_more",
   "title": "The 0% commission booth is the expensive one",
   "ts": "2026-08-08T19:06:07+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The booth advertising 0% commission charged you 15%. The one advertising 3% charged you 3%.",
   "why": [
    {
     "h": "WHAT EACH BOOTH ACTUALLY HANDS OVER",
     "t": "pre",
     "lines": [
      "    booth A   0% off the top, so all £500 is changed",
      "              500 x 1.02  =  EUR 510"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    booth B   3% off the top leaves £485",
      "              485 x 1.20  =  EUR 582"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "EUR 72 apart, on the same £500, and the free one is the smaller pile."
     ]
    },
    {
     "h": "NOW PUT THEM ON THE SAME FOOTING",
     "t": "p",
     "lines": [
      "At the real rate of 1.20, £500 is worth EUR 600."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    booth A keeps  EUR 90   =  15%",
      "    booth B keeps  EUR 18   =  3%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Booth B's charge is exactly the number on its window. Booth A's is five times what its window says, because its window says nothing."
     ]
    },
    {
     "h": "THE SAME NUMBER, A SECOND WAY",
     "t": "p",
     "lines": [
      "Ask what commission a booth AT THE REAL RATE would have to charge to hand over EUR 510. Solve 500 x (1 - c) x 1.20 = 510 and c comes out at 15%. So \"0% commission at 1.02\" and \"15% commission at 1.20\" are the same offer wearing different words."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "A fee is quoted and a rate is not, so a price can always be moved out of the fee and into the rate. Two charges applied together come to c + s - c x s, not c + s -- so compare the ONE number that survives both: what you hand over, against what you get back."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_fee_that_pays_for_itself",
   "title": "The card with a fee, and the free one, and where they cross",
   "ts": "2026-08-08T18:25:15+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "£2,000 of spending a year, which is about £167 a month.",
   "why": [
    {
     "h": "WHAT EACH CARD ACTUALLY GIVES YOU",
     "t": "p",
     "lines": [
      "Cashback is a share of what you spend, handed back. So over a year:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    free card       0.5% of what you spend",
      "    £30 card    2% of what you spend, minus the £30 fee"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Two straight lines. One leaves the origin. The other starts £30 BELOW zero, because the fee is charged before you have earned anything, and climbs 4 times as steeply."
     ]
    },
    {
     "h": "WHERE THEY MEET",
     "t": "pre",
     "lines": [
      "    0.005 x  =  0.02 x - 30",
      "    0.015 x  =  30",
      "          x  =  £2,000"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    spend £1,000    free £    5    paid £  -10    free ahead",
      "    spend £2,000    free £   10    paid £   10    level",
      "    spend £10,000    free £   50    paid £  170    paid ahead by 120"
     ]
    },
    {
     "h": "WHY THE WORSE-LOOKING DEAL WINS IN THE END",
     "t": "p",
     "lines": [
      "The fee is FIXED. It does not grow when the spending does, so as a share of the spending it shrinks away to nothing, while the extra 1.5% a pound keeps arriving. A fixed cost spreads out; a proportional gain does not."
     ]
    },
    {
     "h": "THE PART WORTH KEEPING",
     "t": "pre",
     "lines": [
      "    crossing  =  the fee  /  the gap in the rates"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The fee is the smaller half of that. Halve the rate gap and the crossing doubles. The same £30 against a 1.5% gap needs £2,000; against a 0.50% gap it needs £6,000. So the question is never \"is there a fee\" -- it is how far apart the two rates are, and how much goes through."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_house_went_up_five",
   "title": "The house rises 5% - what happens to your deposit",
   "ts": "2026-08-08T17:29:34+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "+50%. The house moved 5%; your share of it moved ten times that -- and it does the same on the way down.",
   "why": [
    {
     "h": "THE MORTGAGE DOES NOT MOVE",
     "t": "pre",
     "lines": [
      "    house   £200,000  ->  £210,000     (+5%)",
      "    loan    £180,000  ->  £180,000     (unchanged)",
      "    yours   £20,000  ->  £30,000     (+50%)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The whole rise lands on your side of the balance sheet, because the debt is a fixed number of pounds and not a share of the house."
     ]
    },
    {
     "h": "THE MULTIPLIER IS ONE OVER YOUR DEPOSIT",
     "t": "pre",
     "lines": [
      "    deposit  10%   ->  multiplier 10x",
      "    deposit  25%   ->  multiplier 4x",
      "    deposit  50%   ->  multiplier 2x",
      "    deposit 100%   ->  multiplier 1x   (nothing borrowed, no amplification)"
     ]
    },
    {
     "h": "THE HALF NOBODY PUTS ON THE POSTER",
     "t": "p",
     "lines": [
      "The same house falling 5% takes your £20,000 to £10,000. Down 50%."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    house -5%   ->  yours £10,000",
      "    house  0%    ->  yours £20,000",
      "    house +5%   ->  yours £30,000"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A 10% fall would wipe the deposit out entirely. Leverage does not make a move bigger in your favour; it makes the SAME move matter ten times as much, whichever way it goes."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "A return only means something once you say what it is a return ON. The house returned 5%. Your money returned 50%. Both are true, and they are answers to different questions -- and borrowing is what pulls them apart."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "three_for_two_or_a_third_off",
   "title": "Three for two, or a third off - which is the better offer",
   "ts": "2026-08-08T16:49:11+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "Neither, at three items -- £18 both ways. At every other number, \"a third off\" wins.",
   "why": [
    {
     "h": "AT THREE THEY ARE THE SAME",
     "t": "pre",
     "lines": [
      "    3 for 2       pay for 2 of 3   =  £18",
      "    a third off   27 - a third    =  £18"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHAT \"3 FOR 2\" IS REALLY WORTH"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    buy 1    3-for-2    0%     a third off   33%",
      "    buy 2    3-for-2    0%     a third off   33%",
      "    buy 3    3-for-2   33%     a third off   33%",
      "    buy 4    3-for-2   25%     a third off   33%",
      "    buy 5    3-for-2   20%     a third off   33%",
      "    buy 6    3-for-2   33%     a third off   33%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "It sawtooths. The free item arrives in whole shirts, but the money you hand over does not, so the discount only climbs back to a third at 3, 6, 9 and so on, and sags in between. Buy two and the offer is worth nothing at all."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "\"A third off\" is a RATE -- it applies to whatever you spend. \"3 for 2\" is a rate only at every third item."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Across every basket size from 1 to 60, \"a third off\" is never once dearer, and is strictly cheaper except at multiples of three."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "An offer priced in ITEMS and an offer priced in PER CENT cannot be compared by how generous they sound. Convert the item offer into a percentage at the number you are actually buying -- not at the number that makes it look best."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "who_pays_for_the_taxi",
   "title": "Two share a taxi, one gets out early - who pays what",
   "ts": "2026-08-08T16:05:22+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "£5 and £15. Half each has Anna paying £5 towards miles she was not in the car for.",
   "why": [
    {
     "h": "PRICE EACH MILE BY WHO IS IN THE CAR",
     "t": "pre",
     "lines": [
      "    miles 0-5    both aboard    £10, split two ways   £5 each",
      "    miles 5-10   Ben alone      £10, all his"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    Anna  £5      Ben  £15      meter  £20"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Anna is in the car for half the distance but pays a quarter of the fare -- because for the part she IS there, she is sharing it, and for the part she is not, she owes nothing."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "\"HALF EACH\" IS A RULE ABOUT PEOPLE, NOT ABOUT MILES"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "It charges Anna for Ben's second leg. Reverse it and the unfairness is obvious: if Anna got out after one mile she would still be paying £10."
     ]
    },
    {
     "h": "THE HONEST COMPLICATION",
     "t": "p",
     "lines": [
      "\"Fair\" is not a definition, and a different rule gives a different answer. Splitting in proportion to distance travelled:"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    Anna 5/15 of £20 = £6.67      Ben £13.33"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That is also defensible. It differs because it ignores that the first 5 miles were SHARED -- it treats a mile with two people in the car as costing twice what a mile with one person costs, and the meter does not agree."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The leg-by-leg answer is the one economists call the Shapley value, and it is the only split where nobody can point at a mile and say \"I was not on that one\"."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When a cost is shared unevenly, split the COST ITEM by item, not the total by head. Ask of every pound: who was there when it was spent?"
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "which_voucher_first",
   "title": "Two vouchers, and the order changes the price",
   "ts": "2026-08-08T15:20:39+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "£70 one way, £72 the other. The 20% voucher first is the cheaper order, by £2.",
   "why": [
    {
     "h": "THE TWO ORDERS",
     "t": "pre",
     "lines": [
      "    20% first    £100 -> £80 -> £70",
      "    £10 first   £100 -> £90 -> £72"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A percentage takes a share of whatever number is in front of it. Put it first and it acts on the bigger number, so it takes more off. The £10 takes £10 whatever it is applied to."
     ]
    },
    {
     "h": "THE GAP DOES NOT DEPEND ON THE PRICE",
     "t": "pre",
     "lines": [
      "    gap  =  £10 x 20%  =  £2"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The coat's price cancels out entirely. Same two vouchers on a £500 coat: still exactly £2 apart. On a £40 coat: still £2."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £40 coat   £22 or £24",
      "    £100 coat   £70 or £72",
      "    £500 coat   £390 or £392"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Every row is £2 apart. That is why the rule is worth keeping rather than the example."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "\"Take 20% off\" and \"take £10 off\" are different KINDS of operation, and different kinds of operation rarely commute. Whenever a proportion and a fixed amount are applied one after the other -- discounts, fees, taxes, tips -- the order is a real question with a real answer, and the answer is always to let the proportion act on the larger number."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "two_percent_to_three_percent",
   "title": "One percent more on the rate, half again on the bill",
   "ts": "2026-08-08T14:34:50+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "50% more. £4,000 a year becomes £6,000 -- an extra £2,000, from a rate that moved by \"one percent\".",
   "why": [
    {
     "h": "TWO TRUE STATEMENTS, TWO DIFFERENT NUMBERS",
     "t": "pre",
     "lines": [
      "    the rate rose by   1 percentage point   (2% -> 3%)",
      "    the bill rose by   50%                 (0.03 / 0.02 = 1.5)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Both are correct. They are answers to different questions, and the words that separate them are \"percentage point\" versus \"per cent\"."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    at 2%   £200,000 x 0.02  =  £4,000 a year",
      "    at 3%   £200,000 x 0.03  =  £6,000 a year"
     ]
    },
    {
     "h": "THE SIZE OF THE LOAN IS IRRELEVANT",
     "t": "p",
     "lines": [
      "The 50% is a fact about 2% and 3%, not about £200,000. Borrow a tenth as much and the bill still rises by half -- only the pounds shrink. That is why the ratio is the part worth remembering."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    2% -> 3%   is +50%",
      "    3% -> 4%   is +33%",
      "    4% -> 5%   is +25%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Each further point hurts less in proportion, because the base it is measured against keeps growing. The first point is the expensive one."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When the thing that changes is itself a percentage, \"up one percent\" is ambiguous and the ambiguity is worth pounds. Ask which of the two it is: a point added, or a proportion of what was already there."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "(Interest only, to keep it to one idea -- a repayment mortgage moves less because the balance falls, but the direction is the same.)"
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "which_box_is_cheaper",
   "title": "The big box holds more and is worse value per gram",
   "ts": "2026-08-08T10:05:26+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "The small one. 40p per 100g against 45p -- the big box is 12.5% dearer per gram, not cheaper.",
   "why": [
    {
     "h": "DO THE DIVISION",
     "t": "pre",
     "lines": [
      "    small   £2.00 / 500g    =  40p per 100g",
      "    large   £5.40 / 1200g   =  45p per 100g"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "At the small box's rate, 1200g would cost £4.80. It is £5.40. The extra £0.60 buys nothing except a bigger box."
     ]
    },
    {
     "h": "WHY IT CATCHES PEOPLE",
     "t": "p",
     "lines": [
      "\"Bigger is cheaper per unit\" is a real tendency and a useful rule of thumb, and that is exactly what makes it worth pricing against. A rule everyone applies without checking is a rule you can be charged for. Surveys of supermarket shelves keep finding the same thing: the larger size is usually better value, and often enough it is not."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The heuristic is doing the job the arithmetic should do. The arithmetic is one division, and the shelf ticket has already done it for you -- the unit price is printed in small type under the big one, and it is the only number on the ticket that compares two packs of different sizes."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Whenever two things come in different sizes, the headline price cannot compare them and the unit price is the only figure that can. Any time a quantity changes between two options, divide before you decide."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "four_weeks_is_not_a_month",
   "title": "Rent per week times four is a month short every year",
   "ts": "2026-08-08T09:22:43+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "£1,083.33 a month. Not £1,000 -- and the gap comes to four extra weeks of rent every year.",
   "why": [
    {
     "h": "WHY FOUR IS THE WRONG NUMBER",
     "t": "p",
     "lines": [
      "Four weeks is 28 days. Only February is ever 28 days. Multiply by four and you are quietly pricing a 336-day year."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    a year        52 weeks  /  12 months",
      "    so a month    52/12 = 4.3333 weeks, not 4"
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £250 x 4          =  £1,000    <- what people read",
      "    £250 x 4.3333     =  £1,083.33 <- what it costs"
     ]
    },
    {
     "h": "THE MISSING MONTH",
     "t": "pre",
     "lines": [
      "    by the week   £250 x 52  =  £13,000",
      "    by the month  £1,000 x 12  =  £12,000",
      "                              difference  £1,000"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That £1,000 is exactly four weeks of rent -- because twelve months of \"four weeks\" is 48 weeks, and the year is 52. The four weeks you never counted are the four weeks you still pay for."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When two units are both familiar, nobody checks the conversion. Weeks and months are the worst pair for it: they feel like they nest, and they do not. Same trap in a salary paid every four weeks -- that is 13 payments a year, not 12."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "half_gone_half_back",
   "title": "Lose half, gain half back, still down a quarter",
   "ts": "2026-08-08T08:42:34+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "+100%. Not +50% -- you have to double what is left.",
   "why": [
    {
     "h": "WHY HALF BACK IS NOT ALL BACK",
     "t": "p",
     "lines": [
      "The two percentages are taken of different amounts. That is the whole thing."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    fall  50% of £100  =  £50   ->  £50",
      "    rise  50% of £50   =  £25   ->  £75"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Same 50%, half as much money underneath it, so half as many pounds come back. You land at £75, £25 short."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "To return to £100 you need £50 of gain on a base of £50 -- which is +100%. The gain is measured against what you have left, not against what you had."
     ]
    },
    {
     "h": "HOW FAST IT RUNS AWAY",
     "t": "pre",
     "lines": [
      "    lose 10%  ->  need  +11%",
      "    lose 20%  ->  need  +25%",
      "    lose 50%  ->  need +100%",
      "    lose 80%  ->  need +400%",
      "    lose 90%  ->  need +900%"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "A loss of L needs a gain of L/(1-L). Doubling the loss much more than doubles the climb back, because the base you are climbing from is shrinking at the same time as the distance is growing."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "A percentage is not a quantity, it is an instruction to multiply -- so it means nothing until you know what it is a percentage OF. Two equal percentages in opposite directions do not cancel, they multiply: 0.5 x 1.5 = 0.75, and it is 0.75 whichever order you do them in."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_same_years_shuffled",
   "title": "The same five years, shuffled",
   "ts": "2026-08-08T00:25:45+00:00",
   "date": "8 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "No. £335,872 one way, £202,528 the other — £133,344 apart.",
   "why": [
    {
     "h": "WHY ORDER CAN MATTER AT ALL",
     "t": "p",
     "lines": [
      "Multiplying does not care about order, so if the pot were left alone the answer would be the same either way. It is: £480,480 both ways, to the pound. Check that first, because it is the thing that tells you the returns are not the culprit."
     ]
    },
    {
     "h": "WHAT THE WITHDRAWALS DO",
     "t": "p",
     "lines": [
      "Taking £40,000 out during a bad year means selling when the pot is small, so those units are gone and cannot take part in the recovery. Do the bad years first and you spend five years shrinking a pot that then has less to grow. Do them last and the good years have already done their work."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    good years first    £  335,872",
      "    bad years first     £  202,528",
      "    no withdrawals      £  480,480  (either order)"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The average return is +2% a year in every case. An average is a summary that has thrown the order away, and once money is moving in or out, the order is the part that mattered."
     ]
    },
    {
     "h": "WHY IT IS WORTH KNOWING",
     "t": "p",
     "lines": [
      "It is the reason two people who retire a year apart, into the same fund, with the same plan, can end up in very different places. Nothing about the fund differs. The sequence they happened to meet does."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Whenever a quantity is being added to or taken from while it also grows, the average rate stops being enough to predict the end. Ask what the ORDER was."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_charge_before_you_use_anything",
   "title": "The charge before you use anything",
   "ts": "2026-08-07T23:24:03+00:00",
   "date": "7 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "Neither. It flips at 2,433 units a year, which is an ordinary amount to use.",
   "why": [
    {
     "h": "WHY THE UNIT RATE CANNOT SETTLE IT",
     "t": "p",
     "lines": [
      "A bill has two parts: a standing charge you pay whether or not you switch anything on, and a rate per unit. Tariff A charges 60p a day before you use anything -- £219 a year -- and then undercuts B by 6p a unit."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So A starts £146 behind and claws back 6p per unit used. It draws level once you have used £146 / 6p = 2,433 units, and wins after that."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    1,500 units    A £579    B £523    B cheaper",
      "    2,433 units    A £803    B £803    level",
      "    2,700 units    A £867    B £883    A cheaper"
     ]
    },
    {
     "h": "WHY THAT NUMBER MATTERS",
     "t": "p",
     "lines": [
      "A typical British home uses somewhere around 2,700 units of electricity a year, and plenty of flats use well under 1,500. The crossover sits between them. That is what makes this worth knowing rather than a curiosity: the same two tariffs really do swap places between one household and the next."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Any price with a fixed part and a per-unit part has a crossover, and the headline per-unit number never tells you which side of it you are on. Find the fixed difference, divide by the per-unit difference, and compare that to what you actually use. Phone plans, gym memberships, card processing and delivery subscriptions are all the same sum."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_same_fee_twice",
   "title": "The same fee, on the same money, twice",
   "ts": "2026-08-07T22:52:44+00:00",
   "date": "7 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "448%. The same £15, on the same £100, is 15% over a year.",
   "why": [
    {
     "h": "WHY ONE FEE HAS TWO RATES",
     "t": "p",
     "lines": [
      "An annual rate answers \"what if this carried on for a year?\". Held for 365 days, the £15 happens once: 15%. Held for 30 days it happens about twelve times, each time on a balance the previous fee already grew -- so it compounds, and lands at 448%. Same money, 30 times the rate, and the only thing that changed is the calendar."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    held   30 days     APR    448%",
      "    held  90 days     APR     76%",
      "    held 365 days     APR     15%"
     ]
    },
    {
     "h": "THE HONEST OTHER HALF",
     "t": "p",
     "lines": [
      "If you borrow £100 for 30 days and repay it on time, it costs you £15. Not £448. The 448% is what it would cost if you kept re-borrowing all year, which is exactly the thing that makes short borrowing dangerous -- but the headline rate is a statement about repetition, not about the pounds leaving your account this month."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "So the number is neither a lie nor the whole story. It is a rate, and a rate needs a period attached before it means anything."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Whenever a percentage is quoted, ask what period it is per. A fee is a number; a rate is a number divided by a time, and comparing two rates over different times is not comparing anything."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "two_stickers_one_price",
   "title": "Two stickers, one price",
   "ts": "2026-08-07T22:39:47+00:00",
   "date": "7 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "£32, not £24. The two stickers come to 60% off, never 70%.",
   "why": [
    {
     "h": null,
     "t": "p",
     "lines": [
      "WHERE THE £8 GOES"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The second sticker is not 20% of the price on the label. It is 20% of what is left after the first one. Half of £80 is £40, so the second discount is worth £8 — not the £16 it looks like on the ticket."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    label                 £   80",
      "    after 50%             £   40",
      "    after 20% of THAT     £   32"
     ]
    },
    {
     "h": "THE RULE, IN GENERAL",
     "t": "p",
     "lines": [
      "Two discounts of a and b together take off a + b - ab, never a + b. The missing piece is always exactly a x b — here 50% x 20% = 10% of the original, which is the £8. It is why \"an extra 20% off our sale prices\" is worth so much less than a straight 70% sale, and it is not a trick: it is what multiplying does."
     ]
    },
    {
     "h": "THE PART THAT SURPRISES PEOPLE THE OTHER WAY",
     "t": "p",
     "lines": [
      "The order makes no difference at all. Take the 20% first and the 50% second and it is still £32. The shop is not sequencing them cleverly — there is no sequence that helps or hurts."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Percentages of different things never add. Before adding two, check they are percentages OF the same number. Here the second is a percentage of a number the first one already changed."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "the_smaller_salary_keeps_less",
   "title": "The same rise, and the smaller salary keeps less",
   "ts": "2026-08-07T22:09:30+00:00",
   "date": "7 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "Less. £530 against £380 — the £100,000 earner keeps least.",
   "why": [
    {
     "h": "WHY THE LOWER SALARY IS PUNISHED HARDER",
     "t": "p",
     "lines": [
      "The tax-free allowance is withdrawn above £100,000, at £1 for every £2 earned. So a £1,000 rise there does not add £1,000 to taxable income. It adds £1,500: the rise itself, plus the £500 of allowance that stops being tax-free. All of it lands in the 40% band."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    £100,000   keeps £380 of 1,000   (62% gone)",
      "    £150,000   keeps £530 of 1,000   (47% gone)"
     ]
    },
    {
     "h": "WHY IT STOPS",
     "t": "p",
     "lines": [
      "By £125,140 the allowance has been withdrawn completely. There is nothing left to take away, so the extra bite disappears and the rate falls back to the headline 45% plus 2% National Insurance. The punishing zone is a band with a top and a bottom, not a slope that keeps getting worse."
     ]
    },
    {
     "h": "WHAT IT IS NOT",
     "t": "p",
     "lines": [
      "It is not a mistake and it is not a secret. It is what withdrawing a benefit gradually always does: the withdrawal is itself a tax, and it stacks on top of the tax already there. Every means test in the system has this shape somewhere."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Whenever something is taken away as you earn more, add the rate of withdrawal to the tax rate before deciding what a rise is worth. The headline band is never the whole story."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "paid_more_than_you_owed",
   "title": "Paid more than you owed, still owing",
   "ts": "2026-08-07T22:00:16+00:00",
   "date": "7 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "25 years, and £3,259 of interest on a £2,000 debt.",
   "why": [
    {
     "h": "WHAT GOES WRONG",
     "t": "p",
     "lines": [
      "The minimum payment is not a fixed sum. It is this month's interest plus 1% of what you still owe. So the moment the balance falls, the payment falls with it, and the balance shrinks by the same 1% every month for ever. That is a curve that approaches zero without reaching it, which is why the cash floor of £5 is the only reason it ever finishes at all."
     ]
    },
    {
     "h": "THE FIVE-YEAR MARK",
     "t": "p",
     "lines": [
      "After 60 months of never missing a payment you have handed over £2,475 -- more than you borrowed -- and you still owe £1,094."
     ]
    },
    {
     "h": "THE CONTROL, WHICH IS THE WHOLE POINT",
     "t": "p",
     "lines": [
      "Take the very first minimum, £54.66, and just keep paying that exact figure every month. Not a penny more, and it is a sum you have already proved you can afford, because you paid it in month one."
     ]
    },
    {
     "h": null,
     "t": "pre",
     "lines": [
      "    minimum, as billed     24.8 years    £3,259 interest",
      "    that same first sum     4.9 years    £1,199 interest"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Same debt, same rate, same opening payment. 5 times as long, and 2.7 times the interest, purely because one payment shrinks and the other does not."
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "When a payment is set as a percentage of what is left, it is engineered never to finish. Fix the amount and the maths changes shape entirely."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "one_percent_for_forty_years",
   "title": "One percent a year, for forty years",
   "ts": "2026-08-07T21:50:43+00:00",
   "date": "7 Aug 2026",
   "topic": "money",
   "q": null,
   "a": "31% of it. Not 1%, and not the 40% most people work out either.",
   "why": [
    {
     "h": "WHY IT IS NOT 1%",
     "t": "p",
     "lines": [
      "The fee is not charged on what you put in. It is charged on the whole pot, every year, including on growth you never contributed. After 40 years at 7% gross, a 1% charge leaves you with 68.7% of the pot you would otherwise have had."
     ]
    },
    {
     "h": "THE COMPARISON THAT SHOWS THE MECHANISM",
     "t": "p",
     "lines": [
      "Take that same 1% once, at the start, and never again. It costs you exactly 1%. The same headline number, charged repeatedly instead of once, does 31 times the damage. The size of the fee is not what is doing this. Repetition is."
     ]
    },
    {
     "h": "THE PART THAT GOES THE OTHER WAY",
     "t": "p",
     "lines": [
      "The obvious sum is 1% x 40 = 40%, and people usually assume the real answer must be worse, because compounding is supposed to make things worse. It is better: 31%. Each year's fee is taken from a pot that all the previous fees already shrank, so the losses compound downwards, not upwards. Being wrong in the unexpected direction is worth more than being roughly right."
     ]
    },
    {
     "h": "WHAT THE SHAPE LOOKS LIKE",
     "t": "pre",
     "lines": [
      "    after  1 year     0.93% gone",
      "    after 10 years    8.96% gone",
      "    after 20 years    17.12% gone",
      "    after 40 years    31.31% gone"
     ]
    },
    {
     "h": "THE TRANSFERABLE MOVE",
     "t": "p",
     "lines": [
      "Any percentage charged on a balance rather than on a payment should be multiplied by the number of times it will be charged before you judge whether it is small."
     ]
    }
   ],
   "src": "answer"
  },
  {
   "slug": "bridge_torch_17",
   "title": "Four people, one torch, seventeen minutes",
   "ts": "2026-08-07T21:38:45+00:00",
   "date": "7 Aug 2026",
   "topic": "puzzles",
   "q": null,
   "a": "Send the two slow ones across TOGETHER.",
   "why": [
    {
     "h": null,
     "t": "pre",
     "lines": [
      "1 and 2 cross                    2 min   → clock 2",
      "1 comes back with the torch      1 min   → clock 3",
      "5 and 10 cross together         10 min   → clock 13",
      "2 comes back with the torch      2 min   → clock 15",
      "1 and 2 cross                    2 min   → clock 17"
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "All four across in exactly 17 minutes."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "The whole puzzle turns on one idea: 5 and 10 must make their trip at the same time. A pair costs the SLOWER one's time, so if 5 and 10 ever cross separately you pay 10 minutes once and 5 minutes again — 15 minutes of walking for two people. Send them together and the 5 rides along inside the 10 for free. To set that up you need your two fast walkers already waiting on the far side to ferry the torch back, which is what the first two moves are for."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "Why the obvious approach fails: most people make the fastest person the escort and shuttle everyone over one at a time."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "1 and 10 cross (10) → 1 back (1) → 1 and 5 cross (5) → 1 back (1) → 1 and 2 cross (2). Total 19."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "That feels efficient because the return trips are as cheap as possible — only 1 ever walks back, costing 1 minute a time. But it makes the 10 cross alone with an escort, so the 10 and the 5 are paid for separately. The 17-minute answer deliberately spends a more expensive return trip (2 minutes instead of 1) to buy the chance to bundle the 5 and the 10 into a single crossing. Two minutes worse on returns, five minutes better on crossings."
     ]
    },
    {
     "h": null,
     "t": "p",
     "lines": [
      "And 17 really is the best possible. Exhaustive search over every legal sequence of crossings — any one or two people, torch always carried, pair priced at the slower walker — gives a minimum of exactly 17 minutes, and exactly two sequences achieve it: the one above, and the same thing with the first two return trips swapped (2 comes back at step 2, 1 comes back at step 4). Nothing in between 17 and 19 is even reachable: 18 minutes is impossible."
     ]
    }
   ],
   "src": "comment"
  }
 ],
 "featured": null
};
