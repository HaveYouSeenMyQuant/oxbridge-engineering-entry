/* Topics — browse the whole bank by subject rather than along the road.
 *
 * WHY THIS EXISTS. The road is a path: it decides what you meet next, and that
 * is right for someone starting out. Somebody revising for an entrance exam in
 * three weeks does not want a path — they want matrices, now, from the
 * beginning to the hardest thing that could come up. This screen is that door.
 *
 * It owns no content and no lesson logic. The bank is the single source of
 * truth, the ladder is the order lessons already appear in, and opening one
 * goes through QQApp.openLesson so a locked lesson meets exactly the same wall
 * it would meet on the road. If this file were deleted the site would still
 * work; only the shortcut would be gone.
 */
(function (global) {
  'use strict';

  var D = global.QQ_DATA;
  if (!D || !D.units) return;

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  /* Every lesson, tagged with the topics its questions carry. A lesson can
   * legitimately span two topics; it is listed under each. */
  function index() {
    var byTopic = {};
    D.units.forEach(function (u) {
      (u.lessons || []).forEach(function (l, i) {
        var topics = {};
        (l.questions || []).forEach(function (q) {
          if (q.topic) topics[q.topic] = (topics[q.topic] || 0) + 1;
        });
        Object.keys(topics).forEach(function (t) {
          (byTopic[t] = byTopic[t] || []).push({
            unit: u, lesson: l, step: i + 1, of: u.lessons.length,
            count: topics[t]
          });
        });
      });
    });
    return byTopic;
  }

  function done(lessonId) {
    try {
      return !!(global.QQStore && QQStore.isLessonDone && QQStore.isLessonDone(lessonId));
    } catch (e) { return false; }
  }

  /* Display names for topic keys. A key with no entry here falls back to the
   * key itself, which renders as raw lowercase -- so every topic the bank uses
   * needs a line, and the check below fails loudly in the console if one is
   * missing rather than shipping 'trigonometry' in lower case. */
  var TITLES = {
    matrices: 'Matrices',
    algebra: 'Algebra and functions',
    calculus: 'Differentiation',
    integration: 'Integration',
    trigonometry: 'Trigonometry',
    vectors: 'Vectors',
    logs: 'Logarithms and exponentials',
    mechanics: 'Mechanics',
    electricity: 'Electricity',
    waves: 'Waves and optics',
    estimation: 'Estimation'
  };


  /* ------------------------------------------------------------ MOCK PAPER
   * The road teaches one topic at a time and the topic screen revises one at a
   * time. Neither is what the exam is: ESAT and PAT are MIXED papers, and the
   * skill they test that nothing else here does is recognising which topic a
   * question belongs to before you can start it. On a single-topic page you
   * always already know.
   *
   * This builds a paper on the fly and hands it to the ordinary lesson runner,
   * so hearts, XP and explanations all behave exactly as they do everywhere
   * else. It owns no question of its own.
   */
  var PAPER_N = 10;

  function examTopics() {
    /* Weighted toward what is actually examinable: a unit tagged "enrichment"
     * (matrices, at the owner's request) is included but cannot dominate. */
    var pool = [];
    D.units.forEach(function (u) {
      var isExam = (u.syllabus || '').toLowerCase().indexOf('esat') !== -1 ||
                   (u.syllabus || '').toLowerCase().indexOf('pat') !== -1;
      (u.lessons || []).forEach(function (l) {
        (l.questions || []).forEach(function (q) {
          pool.push({ q: q, unit: u, weight: isExam ? 3 : 1 });
        });
      });
    });
    return pool;
  }

  function buildPaper(n) {
    var pool = examTopics(), picked = [], seenTopic = {};
    /* Spread across topics first, then fill at random. A "mixed paper" that
     * happened to draw nine calculus questions would not be mixed. */
    var byTopic = {};
    pool.forEach(function (r) { (byTopic[r.q.topic] = byTopic[r.q.topic] || []).push(r); });
    var topics = Object.keys(byTopic);
    topics.sort(function () { return Math.random() - 0.5; });
    topics.forEach(function (t) {
      if (picked.length >= n) return;
      var bucket = byTopic[t];
      var r = bucket[Math.floor(Math.random() * bucket.length)];
      if (picked.indexOf(r.q) === -1) { picked.push(r.q); seenTopic[t] = 1; }
    });
    var guard = 0;
    while (picked.length < n && guard++ < 500) {
      var r2 = pool[Math.floor(Math.random() * pool.length)];
      if (Math.random() * 3 >= r2.weight) continue;      // apply the weighting
      if (picked.indexOf(r2.q) === -1) picked.push(r2.q);
    }
    return picked.slice(0, n);
  }

  function startPaper() {
    var qs = buildPaper(PAPER_N);
    if (!qs.length) return;
    var topics = {};
    qs.forEach(function (q) { topics[q.topic] = 1; });
    if (global.QQA && QQA.track) {
      QQA.track('mock_paper_started', {
        questions: qs.length, topics: Object.keys(topics).length
      });
    }
    var unit = { id: 'u_mock', index: 0, title: 'Mixed paper',
                 subtitle: 'Every topic, in no order.', colour: '#f0883e',
                 free: true, lessons: [] };
    /* A fresh id each time, so a paper is never treated as a lesson already
     * completed and never overwrites road progress. */
    var lesson = { id: 'mock_' + Date.now(), title: 'Mixed paper', questions: qs };
    unit.lessons = [lesson];
    if (global.QQApp && QQApp.startLesson) QQApp.startLesson(unit, lesson);
  }

  function paperCard() {
    var card = el('section', 'topic-card mock-card');
    var head = el('div', 'topic-head');
    var dot = el('span', 'topic-dot'); dot.style.background = '#f0883e';
    head.appendChild(dot);
    head.appendChild(el('h3', null, 'Mixed paper'));
    head.appendChild(el('span', 'topic-count', PAPER_N + ' questions · every topic'));
    card.appendChild(head);
    card.appendChild(el('p', 'topic-sub',
      'The real papers do not tell you which topic a question is. This one does not either.'));
    var b = el('button', 'topic-open mock-open');
    b.type = 'button';
    b.appendChild(el('span', 'topic-step-n', '▶'));
    b.appendChild(el('span', 'topic-step-t', 'Start a mixed paper'));
    b.appendChild(el('span', 'topic-step-q', PAPER_N + 'q'));
    b.addEventListener('click', startPaper);
    card.appendChild(b);
    return card;
  }

  function render() {
    var host = document.getElementById('topicsList');
    if (!host) return;
    var unnamed = Object.keys(index()).filter(function (t) { return !TITLES[t]; });
    if (unnamed.length && global.console) {
      console.warn('topics.js: no display name for ' + unnamed.join(', ') +
                   ' — they will render as raw keys');
    }
    host.innerHTML = '';
    host.appendChild(paperCard());
    var byTopic = index();

    Object.keys(byTopic).sort(function (a, b) {
      /* Matrices first: it is the topic this site was asked to lead with. */
      if (a === 'matrices') return -1;
      if (b === 'matrices') return 1;
      return a < b ? -1 : 1;
    }).forEach(function (topic) {
      var rows = byTopic[topic];
      var unit = rows[0].unit;
      var card = el('section', 'topic-card');

      var head = el('div', 'topic-head');
      var bar = el('span', 'topic-dot');
      bar.style.background = unit.colour || '#58a6ff';
      head.appendChild(bar);
      head.appendChild(el('h3', null, TITLES[topic] || topic));
      var nq = rows.reduce(function (s, r) { return s + r.count; }, 0);
      var nd = rows.filter(function (r) { return done(r.lesson.id); }).length;
      head.appendChild(el('span', 'topic-count',
        nd + '/' + rows.length + ' lessons · ' + nq + ' questions'));
      card.appendChild(head);

      if (unit.syllabus) {
        card.appendChild(el('p', 'topic-syllabus', unit.syllabus));
      }
      if (unit.subtitle) card.appendChild(el('p', 'topic-sub', unit.subtitle));

      /* THE LADDER. The order is the order in the bank, which is authored to
       * run from the introduction to exam standard -- so the first row is
       * where a beginner starts and the last is what the exam actually asks. */
      var list = el('ol', 'topic-ladder');
      rows.forEach(function (r, i) {
        var li = el('li', 'topic-step' + (done(r.lesson.id) ? ' is-done' : ''));
        var b = el('button', 'topic-open');
        b.type = 'button';
        b.appendChild(el('span', 'topic-step-n', String(i + 1)));
        b.appendChild(el('span', 'topic-step-t', r.lesson.title));
        b.appendChild(el('span', 'topic-step-q', r.count + 'q'));
        b.addEventListener('click', function () {
          if (global.QQA && QQA.track) {
            QQA.track('topic_lesson_opened', {
              topic: topic, lessonId: r.lesson.id, step: i + 1
            });
          }
          if (global.QQApp && QQApp.openLesson) QQApp.openLesson(r.lesson.id);
        });
        li.appendChild(b);
        list.appendChild(li);
      });
      card.appendChild(list);
      host.appendChild(card);
    });
  }

  function show() {
    if (global.QQA && QQA.track) QQA.track('topics_viewed', {});
    render();
    if (global.QQApp && QQApp.go) QQApp.go('topics');
  }

  function boot() {
    var tab = document.getElementById('tabTopics');
    if (tab) {
      tab.hidden = false;
      tab.addEventListener('click', show);
    }
    var road = document.getElementById('tabRoad');
    if (road) {
      road.addEventListener('click', function () {
        if (global.QQApp && QQApp.go) QQApp.go('path');
      });
    }
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  global.QQTopics = { render: render, show: show, index: index,
                      buildPaper: buildPaper, startPaper: startPaper };
})(window);
