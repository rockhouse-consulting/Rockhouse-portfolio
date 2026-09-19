/* Rockhouse portfolio embed
   Drop a "Selected work" band onto any page of rockhouse-consulting.com.
   It reads the same data file as the portfolio, so new work appears
   on the main site the moment you mark a project `featured: true`.

   Usage on a main-site page:
     <div id="rockhouse-selected-work"></div>
     <script src="https://portfolio.rockhouse-consulting.com/embed.js"
             data-limit="3"></script>

   Optional attributes on the <script> tag:
     data-limit="3"                    how many projects to show
     data-ids="cpg-decision-rights"    show specific projects (comma list) instead of featured ones
     data-tag="KPI architecture & governance"   show projects with this capability
     data-heading="Selected work"      heading text ("" hides it)
     data-target="#my-div"             a different container than #rockhouse-selected-work
*/
(function () {
  'use strict';
  var script = document.currentScript;
  if (!script) { return; }

  var base = script.src.replace(/[^\/]*$/, '');           // folder that holds embed.js
  var target = document.querySelector(script.getAttribute('data-target') || '#rockhouse-selected-work');
  if (!target) { return; }

  var limit = parseInt(script.getAttribute('data-limit') || '3', 10);
  var ids = (script.getAttribute('data-ids') || '').split(',').map(function (s) { return s.trim(); }).filter(Boolean);
  var tag = script.getAttribute('data-tag') || '';
  var heading = script.hasAttribute('data-heading') ? script.getAttribute('data-heading') : 'Selected work';

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function injectStyle() {
    if (document.getElementById('rhx-style')) { return; }
    var css =
      '.rhx{font-family:"IBM Plex Sans",-apple-system,"Segoe UI",Roboto,Arial,sans-serif;color:#16263B;line-height:1.5}' +
      '.rhx *{box-sizing:border-box}' +
      '.rhx-head{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:.5rem 1.5rem;margin:0 0 1.25rem}' +
      '.rhx-head h2{margin:0;font-size:1.75rem;line-height:1.2;color:#002554}' +
      '.rhx-all{font-weight:600;font-size:.95rem;color:#0A6F78}' +
      '.rhx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,290px),1fr));gap:1.25rem}' +
      '.rhx-card{display:flex;flex-direction:column;background:#fff;border:1px solid #D9E2EA;border-radius:2px;overflow:hidden;color:inherit;text-decoration:none}' +
      '.rhx-card:hover{border-color:#0E8A94}' +
      '.rhx-top{background:#002554;color:#fff;padding:1rem 1.15rem 1.15rem;border-left:6px solid #8FDCE2}' +
      '.rhx-ind{margin:0 0 .5rem;font-size:.82rem;color:#B9D3E6}' +
      '.rhx-metric{margin:0;font-family:"IBM Plex Sans Condensed","Arial Narrow",Arial,sans-serif;font-weight:600;font-size:2.4rem;line-height:1;color:#8FDCE2}' +
      '.rhx-metric.rhx-long{font-size:1.7rem;line-height:1.1}' +
      '.rhx-label{margin:.5rem 0 0;font-size:.88rem;line-height:1.4;color:#E3EDF6}' +
      '.rhx-body{padding:1rem 1.15rem 1.15rem;flex:1}' +
      '.rhx-body h3{margin:0 0 .4rem;font-size:1.05rem;line-height:1.3;color:#002554}' +
      '.rhx-cta{display:block;margin-top:.7rem;font-size:.9rem;font-weight:600;color:#0A6F78}' +
      '.rhx-card:hover .rhx-cta{text-decoration:underline}';
    var st = document.createElement('style');
    st.id = 'rhx-style';
    st.appendChild(document.createTextNode(css));
    document.head.appendChild(st);
  }

  function render(D) {
    var list = D.projects.filter(function (p) {
      if (ids.length) { return ids.indexOf(p.id) !== -1; }
      if (tag) { return (p.capabilities || []).indexOf(tag) !== -1; }
      return p.featured;
    });
    if (ids.length) {
      list.sort(function (a, b) { return ids.indexOf(a.id) - ids.indexOf(b.id); });
    } else {
      list.sort(function (a, b) { return (a.order || 99) - (b.order || 99); });
    }
    list = list.slice(0, limit);
    if (!list.length) { return; }

    injectStyle();
    target.innerHTML =
      '<div class="rhx">' +
        '<div class="rhx-head">' + (heading ? '<h2>' + esc(heading) + '</h2>' : '<span></span>') +
          '<a class="rhx-all" href="' + base + 'index.html">See the full portfolio</a></div>' +
        '<div class="rhx-grid">' + list.map(function (p) {
          var m = p.metric || {};
          var long = String(m.value || '').length > 9 ? ' rhx-long' : '';
          return '<a class="rhx-card" href="' + base + 'project.html?id=' + encodeURIComponent(p.id) + '">' +
            '<div class="rhx-top"><p class="rhx-ind">' + esc(p.industry) + '</p>' +
              '<p class="rhx-metric' + long + '">' + esc(m.value) + '</p>' +
              '<p class="rhx-label">' + esc(m.label) + '</p></div>' +
            '<div class="rhx-body"><h3>' + esc(p.title) + '</h3>' +
              '<span class="rhx-cta">View case study</span></div>' +
          '</a>';
        }).join('') + '</div>' +
      '</div>';
  }

  if (window.ROCKHOUSE_PORTFOLIO) {
    render(window.ROCKHOUSE_PORTFOLIO);
  } else {
    var s = document.createElement('script');
    s.src = base + 'data/projects.js';
    s.onload = function () { if (window.ROCKHOUSE_PORTFOLIO) { render(window.ROCKHOUSE_PORTFOLIO); } };
    document.head.appendChild(s);
  }
})();
