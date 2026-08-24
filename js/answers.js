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
 "count": 131,
 "entries": [
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
    "unit": 10,
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
    "qid": "me_graph_area",
    "lesson": "p1",
    "unit": 10,
    "prompt": "On a velocity-time graph, a body goes from 0 to 12 m/s in 4 s at constant acceleration. What distance does it cover, in metres?"
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
    "unit": 12,
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
    "unit": 10,
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
    "unit": 13,
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
   "src": "answer"
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
   "src": "comment"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
  },
  {
   "slug": "heard_but_not_seen",
   "title": "Heard but not seen",
   "ts": "2026-08-22T13:53:54+00:00",
   "date": "22 Aug 2026",
   "topic": "physics",
   "q": null,
   "a": "Because a voice is about the SIZE of the corner, and light is about a million times smaller.",
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
   "src": "answer"
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
