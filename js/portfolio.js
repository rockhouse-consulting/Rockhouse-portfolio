/* Rockhouse portfolio: renders the portfolio and case-study pages from
   data/projects.js. You should not need to edit this file to add work. */
(function () {
  'use strict';

  var MAIN = 'https://rockhouse-consulting.com/';

  /* ---- Mobile navigation ---- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var D = window.ROCKHOUSE_PORTFOLIO;
  if (!D || !D.projects) { return; }

  /* ---- Helpers ---- */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function param(name) { return new URLSearchParams(window.location.search).get(name) || ''; }
  function typeInfo(key) { return D.types[key] || { label: key, blurb: '' }; }
  function pillClass(key) { return key === 'client' ? 'pill pill--client' : 'pill pill--other'; }
  function projectHref(p) { return 'project.html?id=' + encodeURIComponent(p.id); }
  function tagHref(tag) { return 'index.html?tag=' + encodeURIComponent(tag) + '#work'; }
  function byOrder(a, b) { return (a.order || 99) - (b.order || 99); }
  function metricClass(m) { return 'metric' + (String((m || {}).value || '').length > 9 ? ' metric--long' : ''); }

  function tile(p) {
    var t = typeInfo(p.type);
    var m = p.metric || {};
    var caps = (p.capabilities || []).slice(0, 3).map(function (c) {
      return '<li>' + esc(c) + '</li>';
    }).join('');
    return '<a class="tile' + (p.type === 'client' ? ' tile--client' : '') + '" href="' + projectHref(p) + '">' +
      '<div class="tile-top">' +
        '<p class="tile-ind">' + esc(p.industry) + '</p>' +
        '<p class="' + metricClass(m) + '">' + esc(m.value) + '</p>' +
        '<p class="metric-label">' + esc(m.label) + '</p>' +
      '</div>' +
      '<div class="tile-body">' +
        '<h3>' + esc(p.title) + '</h3>' +
        '<p class="sum">' + esc(p.summary) + '</p>' +
        (caps ? '<ul class="caps">' + caps + '</ul>' : '') +
      '</div>' +
      '<div class="tile-foot">' +
        '<span class="' + pillClass(p.type) + '">' + esc(t.label) + '</span>' +
        '<span class="tile-cta">View case study</span>' +
      '</div>' +
    '</a>';
  }

  /* ---- Portfolio page ---- */
  function renderIndex() {
    var groupsEl = document.getElementById('groups');
    var chipsEl = document.getElementById('sector-chips');
    var noteEl = document.getElementById('filter-note');
    var emptyEl = document.getElementById('empty');
    var keyEl = document.getElementById('type-key');
    var countEl = document.getElementById('count');

    if (countEl) { countEl.textContent = D.projects.length; }
    if (keyEl) {
      keyEl.innerHTML = Object.keys(D.types).map(function (k) {
        var t = D.types[k];
        return '<div><dt><span class="' + pillClass(k) + '">' + esc(t.label) + '</span></dt><dd>' + esc(t.blurb) + '</dd></div>';
      }).join('');
    }

    var state = { sector: param('sector'), tag: param('tag'), type: param('type') };
    if (D.sectors.indexOf(state.sector) === -1) { state.sector = ''; }
    if (!D.types[state.type]) { state.type = ''; }

    function matches(p) {
      if (state.sector && p.sector !== state.sector) { return false; }
      if (state.type && p.type !== state.type) { return false; }
      if (state.tag && (p.capabilities || []).indexOf(state.tag) === -1) { return false; }
      return true;
    }

    function syncUrl() {
      var q = [];
      if (state.sector) { q.push('sector=' + encodeURIComponent(state.sector)); }
      if (state.type) { q.push('type=' + encodeURIComponent(state.type)); }
      if (state.tag) { q.push('tag=' + encodeURIComponent(state.tag)); }
      try {
        history.replaceState(null, '', window.location.pathname + (q.length ? '?' + q.join('&') : '') + window.location.hash);
      } catch (e) { /* file:// previews can refuse this; harmless */ }
    }

    function render() {
      var visible = D.projects.filter(matches);

      chipsEl.innerHTML = ['<button class="chip" type="button" data-sector="" aria-pressed="' + (state.sector === '') + '">All sectors</button>']
        .concat(D.sectors.map(function (s) {
          return '<button class="chip" type="button" data-sector="' + esc(s) + '" aria-pressed="' + (state.sector === s) + '">' + esc(s) + '</button>';
        })).join('');

      var notes = [];
      if (state.tag) { notes.push('capability: ' + esc(state.tag)); }
      if (state.type) { notes.push('type: ' + esc(typeInfo(state.type).label)); }
      if (notes.length) {
        noteEl.hidden = false;
        noteEl.innerHTML = '<span>Filtered by ' + notes.join(' and ') + '.</span><button class="link-btn" type="button" data-clear>Clear all filters</button>';
      } else {
        noteEl.hidden = true;
        noteEl.innerHTML = '';
      }

      groupsEl.innerHTML = D.groups.map(function (g) {
        var items = visible.filter(function (p) { return g.types.indexOf(p.type) !== -1; }).sort(byOrder);
        if (!items.length) { return ''; }
        return '<section class="group">' +
          '<div class="group-head"><h3>' + esc(g.title) + '</h3><p>' + esc(g.note) + '</p></div>' +
          '<div class="grid">' + items.map(tile).join('') + '</div>' +
        '</section>';
      }).join('');

      emptyEl.hidden = visible.length > 0;
    }

    document.addEventListener('click', function (e) {
      var chip = e.target.closest('[data-sector]');
      if (chip && chipsEl.contains(chip)) {
        state.sector = chip.getAttribute('data-sector');
        syncUrl(); render();
        return;
      }
      if (e.target.closest('[data-clear]')) {
        state = { sector: '', tag: '', type: '' };
        syncUrl(); render();
      }
    });

    render();
  }

  /* ---- Case-study page ---- */
  function renderProject() {
    var main = document.getElementById('main');
    var id = param('id');
    var p = null;
    D.projects.forEach(function (x) { if (x.id === id) { p = x; } });

    if (!p) {
      document.title = 'Case study not found | Rockhouse Consulting';
      main.innerHTML = '<div class="wrap not-found"><h1>We could not find that case study.</h1>' +
        '<p>The link may be out of date. <a href="index.html">See all Rockhouse work</a>.</p></div>';
      return;
    }

    var t = typeInfo(p.type);
    var m = p.metric || {};
    document.title = p.title + ' | Rockhouse Consulting';
    var desc = document.querySelector('meta[name="description"]');
    if (desc) { desc.setAttribute('content', String(p.summary).slice(0, 158)); }

    var points = (p.highlights || []).map(function (h) { return '<li>' + esc(h) + '</li>'; }).join('');
    var caps = (p.capabilities || []).map(function (c) {
      return '<li><a href="' + tagHref(c) + '">' + esc(c) + '</a></li>';
    }).join('');

    var facts = '<div><dt>Engagement type</dt><dd>' + esc(t.label) + '</dd></div>' +
      '<div><dt>Sector</dt><dd>' + esc(p.sector) + '</dd></div>' +
      '<div><dt>Industry</dt><dd>' + esc(p.industry) + '</dd></div>' +
      (p.role ? '<div><dt>Rockhouse role</dt><dd>' + esc(p.role) + '</dd></div>' : '') +
      (p.context ? '<div><dt>Context</dt><dd>' + esc(p.context) + '</dd></div>' : '') +
      (caps ? '<div><dt>Capabilities shown</dt><dd><ul class="caps">' + caps + '</ul></dd></div>' : '');

    var primary = p.deck
      ? '<a class="btn btn--primary" href="' + esc(p.deck) + '">Open the full case study</a>'
      : '<a class="btn btn--primary" href="' + MAIN + 'contact.html">Request the full case study</a>';

    var others = D.projects.filter(function (x) { return x.id !== p.id; }).sort(function (a, b) {
      return ((b.sector === p.sector) - (a.sector === p.sector)) || byOrder(a, b);
    }).slice(0, 3);

    main.innerHTML =
      '<section class="case-head on-dark"><div class="wrap">' +
        '<p class="crumbs"><a href="index.html">Portfolio</a> / ' + esc(p.industry) + '</p>' +
        '<div class="case-head-grid">' +
          '<div><span class="' + pillClass(p.type) + '">' + esc(t.label) + '</span>' +
            '<h1>' + esc(p.title) + '</h1></div>' +
          '<div class="case-metric"><p class="' + metricClass(m) + '">' + esc(m.value) + '</p>' +
            '<p class="metric-label">' + esc(m.label) + '</p></div>' +
        '</div>' +
      '</div></section>' +
      '<div class="wrap case-body">' +
        '<div class="prose">' +
          '<h2>Summary</h2><p>' + esc(p.summary) + '</p>' +
          (points ? '<h2>Key points</h2><ul class="points">' + points + '</ul>' : '') +
          '<div class="case-actions">' + primary +
            '<a class="btn btn--ghost" href="index.html#work">Back to all work</a></div>' +
        '</div>' +
        '<aside class="facts" aria-label="Engagement details"><dl>' + facts + '</dl></aside>' +
      '</div>' +
      (others.length
        ? '<section class="related"><div class="wrap"><h2>More work</h2><div class="grid">' + others.map(tile).join('') + '</div></div></section>'
        : '');
  }

  if (document.body.getAttribute('data-page') === 'project') { renderProject(); }
  else { renderIndex(); }
})();
