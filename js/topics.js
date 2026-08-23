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

  function render() {
    var host = document.getElementById('topicsList');
    if (!host) return;
    var unnamed = Object.keys(index()).filter(function (t) { return !TITLES[t]; });
    if (unnamed.length && global.console) {
      console.warn('topics.js: no display name for ' + unnamed.join(', ') +
                   ' — they will render as raw keys');
    }
    host.innerHTML = '';
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

  global.QQTopics = { render: render, show: show, index: index };
})(window);
