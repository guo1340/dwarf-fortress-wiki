(function () {
  const D = window.WikiData;
  const main = document.getElementById('main');
  const leftNav = document.getElementById('leftNav');
  const rightNav = document.getElementById('rightNav');
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const menuToggle = document.getElementById('menuToggle');

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const category = (id) => D.categories.find((c) => c.id === id);
  const pagesIn = (id) => D.pages.filter((p) => p.category === id);
  const page = (cat, id) => D.pages.find((p) => p.category === cat && p.id === id);
  const route = () => (location.pathname.replace(/\/$/, '') || '/').replace('/index.html', '/');

  const icons = {
    mug: 'M24 30h42v34c0 13-9 22-21 22S24 77 24 64zM66 38h10c8 0 12 6 12 14s-4 14-12 14H66M32 22h26',
    fortress: 'M16 82h68V34L50 14 16 34zM30 82V54h40v28M25 38h50',
    anvil: 'M16 58h42c12 0 17-12 26-12v-9H60L52 25H26l8 12H16zM31 69h38v13H31z',
    shield: 'M50 12l30 14v24c0 20-12 33-30 42-18-9-30-22-30-42V26z',
    dragon: 'M18 70c18-34 43-48 74-42-18 6-24 17-20 32 3 13-7 24-22 24H24zM44 46l-18-18M60 42l18-22',
    mountain: 'M10 82l30-52 16 26 12-18 24 44z',
    sword: 'M68 12l14 14-42 42H28V56zM30 70l-14 14M22 62l16 16',
    gear: 'M50 20l8 9 12-2 4 12-9 8 3 13-11 7-8-9-10 9-11-7 3-13-9-8 4-12 12 2z',
    scroll: 'M30 18h40c7 0 10 5 10 11s-4 10-10 10H36v43c-8 0-14-5-14-13V27c0-5 3-9 8-9z',
    grid: 'M18 18h64v64H18zM18 39h64M18 61h64M39 18v64M61 18v64',
    horn: 'M16 60h20l38-24v48L36 60M72 44c10 3 16 9 18 18'
  };
  const icon = (name) => `<svg viewBox="0 0 100 100" aria-hidden="true"><path d="${icons[name] || icons.fortress}" fill="none" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  function adSlot(kind) {
    const banner = kind === 'banner';
    return `<div class="ad-slot ad-${esc(kind)}" role="complementary" aria-label="Advertisement"><span class="ad-label">Guild Notice</span><ins class="adsbygoogle" style="display:block;${banner ? 'width:100%;height:90px;' : ''}" data-ad-client="ca-pub-1319817671788428" data-ad-slot="6141169453" ${banner ? '' : 'data-ad-format="auto"'} data-full-width-responsive="true"></ins></div>`;
  }
  function loadAds() {
    if (!window.adsbygoogle) return;
    document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])').forEach(() => {
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) {}
    });
  }
  function sourceNotes(entity) {
    const list = (entity && entity.sources || ['communityWiki', 'bay12']).map((k) => D.sourceRegistry[k]).filter(Boolean);
    return `<aside class="source-notes"><div class="src-head">Sources &amp; Update Notes</div><div class="src-meta"><span><strong>Last updated:</strong> ${esc(D.site.lastUpdated)}</span><span><strong>Build focus:</strong> ${esc(D.site.buildStatus)}</span></div><ul>${list.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.label)}</a> - ${esc(s.note)}</li>`).join('')}</ul><p>Exact mechanics, interface names and DFHack commands can vary by version. Verify fragile details before building a fortress around them.</p></aside>`;
  }
  function relatedBlock(p) {
    const related = relatedPages(p);
    if (!related.length) return '';
    return `<nav class="related" aria-label="Related guides"><h3>Related Guides</h3><div class="related-grid">${related.map((r) => `<a href="${esc(r.href)}">${esc(r.label)}</a>`).join('')}</div></nav>`;
  }
  function relatedPages(p, count = 5) {
    const sameCategory = D.pages
      .filter((candidate) => candidate.category === p.category && candidate.id !== p.id)
      .slice(0, count)
      .map((candidate) => ({ label: candidate.title, href: `/${candidate.category}/${candidate.id}` }));
    const explicit = (p.related || [])
      .filter((r) => r && r.href && r.href !== `/${p.category}`)
      .map((r) => ({ label: r.label, href: r.href }));
    const seen = new Set();
    return [...explicit, ...sameCategory].filter((item) => {
      if (seen.has(item.href)) return false;
      seen.add(item.href);
      return true;
    }).slice(0, count);
  }
  function sectionsHTML(sections) {
    return sections.map((s) => `<section class="article-section"><h3>${esc(s.h)}</h3>${s.body || ''}${s.list ? `<ul>${s.list.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</section>`).join('');
  }
  function setMeta(attr, key, value) {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.content = value || '';
  }
  function applySeo(r) {
    if (!window.WikiMeta || !document.head) return;
    const seo = window.WikiMeta.seoFor(r);
    document.title = seo.title;
    setMeta('name', 'description', seo.description);
    setMeta('name', 'keywords', seo.keywords.join(', '));
    setMeta('property', 'og:title', seo.ogTitle);
    setMeta('property', 'og:description', seo.ogDescription);
    setMeta('property', 'og:type', seo.ogType);
    setMeta('property', 'og:url', seo.canonical);
    setMeta('property', 'og:image', seo.ogImage);
    setMeta('name', 'twitter:title', seo.ogTitle);
    setMeta('name', 'twitter:description', seo.ogDescription);
    setMeta('name', 'twitter:image', seo.ogImage);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'canonical';
      document.head.appendChild(link);
    }
    link.href = seo.canonical;
    let ld = document.getElementById('dfw-jsonld');
    if (!ld) {
      ld = document.createElement('script');
      ld.type = 'application/ld+json';
      ld.id = 'dfw-jsonld';
      document.head.appendChild(ld);
    }
    ld.textContent = JSON.stringify(window.WikiMeta.jsonLdFor(r));
  }

  function renderLeftNav(active) {
    leftNav.innerHTML = `<h3>Fortress Wings</h3><ul>${D.categories.map((c) => `<li><a href="/${esc(c.id)}" data-r="/${esc(c.id)}"><span>${esc(c.title.slice(0, 2).toUpperCase())}</span>${esc(c.title)}</a></li>`).join('')}</ul><h3>Site Info</h3><ul><li><a href="/about" data-r="/about"><span>AB</span>About</a></li><li><a href="/privacy-policy" data-r="/privacy-policy"><span>PP</span>Privacy Policy</a></li><li><a href="/contact" data-r="/contact"><span>CT</span>Contact</a></li></ul>`;
    leftNav.querySelectorAll('a').forEach((a) => {
      const r = a.getAttribute('data-r');
      if (active === r || (r !== '/' && active.startsWith(r + '/'))) a.classList.add('active');
    });
  }
  function renderRightNav() {
    const tip = D.tips[Math.floor(Math.random() * D.tips.length)];
    rightNav.innerHTML = `<h3>Popular Orders</h3><ul><li><a href="/beginner-guide/first-fortress-tutorial"><span>01</span>First Fortress Tutorial</a></li><li><a href="/industry/steel-production"><span>02</span>How Steel Production Works</a></li><li><a href="/guides/best-fortress-layouts"><span>03</span>Best Fortress Layouts</a></li><li><a href="/guides/survive-first-winter"><span>04</span>Survive First Winter</a></li><li><a href="/military/squad-setup"><span>05</span>Military Guide</a></li><li><a href="/world/aquifers"><span>06</span>Aquifer Guide</a></li><li><a href="/mods/dfhack-commands"><span>07</span>Best DFHack Commands</a></li></ul><h3>Overseer Note</h3><p class="overseer-note">${esc(tip)}</p>`;
  }

  function renderHome() {
    const featured = ['first-fortress-tutorial', 'fortress-design', 'farming', 'squad-setup', 'steel-production', 'best-embark-locations', 'dfhack-commands'].map((id) => D.pages.find((p) => p.id === id)).filter(Boolean);
    main.innerHTML = `<section class="hero"><img src="/assets/images/hero/homepage-hero.svg" alt="Dwarf Fortress tile-map mountainhome with halls, workshops, magma and carved records" /><div class="hero-content"><span class="hero-kicker">Strike the earth // overseer ledger</span><h1>Dwarf Fortress Wiki</h1><p>A carved engineering archive for fortress management, dwarven industry, military disasters, world generation, megaprojects and the glorious machinery of losing.</p><div class="hero-buttons"><a class="btn" href="/beginner-guide/getting-started">Start Playing</a><a class="btn" href="/fortress">Fortress Guides</a><a class="btn" href="/beginner-guide/first-fortress-tutorial">Beginner Tutorials</a><a class="btn" href="/industry/industry-chains">Industry Chains</a></div></div></section>${adSlot('banner')}<h2 class="section-head">Featured Categories</h2><div class="cards cat-cards">${D.categories.map((c) => `<a class="card cat-card" href="/${esc(c.id)}"><span class="ico">${icon(c.icon)}</span><h4>${esc(c.title)}</h4><p>${esc(c.summary)}</p><div class="tags"><span>Simulation</span><span>${esc(c.title.split(' ')[0])}</span></div></a>`).join('')}</div><div class="home-grid"><section class="page"><h2>High-Value Guides</h2><div class="breadcrumb">The pages overseers come back to.</div><ul class="link-list">${featured.map((p) => `<li><a href="/${esc(p.category)}/${esc(p.id)}">${esc(p.title)}<span>${esc(p.summary)}</span></a></li>`).join('')}</ul></section><section class="page"><h2>First Fortress Checklist</h2><div class="breadcrumb">Before the first winter.</div><ol><li>Dig bedrooms, dining space and stockpile rooms.</li><li>Start farming and brewing before drink runs low.</li><li>Assign manager, bookkeeper, broker and militia commander.</li><li>Build a trade depot and prepare export goods.</li><li>Seal dangerous paths before breaching caverns.</li><li>Train a small squad before the first siege.</li></ol></section></div>${adSlot('in-article')}`;
  }
  function renderCategory(id) {
    const c = category(id);
    if (!c) return render404(id);
    const pages = pagesIn(id);
    main.innerHTML = `${adSlot('banner')}<section class="page"><h1>${esc(c.title)}</h1><div class="breadcrumb">Home / ${esc(c.title)}</div><p class="lead">${esc(c.summary)}</p><div class="cards">${pages.map((p) => `<a class="card" href="/${esc(p.category)}/${esc(p.id)}"><h4>${esc(p.title)}</h4><p>${esc(p.summary)}</p></a>`).join('')}</div></section>${adSlot('in-article')}`;
  }
  function renderDetail(cat, id) {
    const c = category(cat);
    const p = page(cat, id);
    if (!c || !p) return render404(cat + '/' + id);
    main.innerHTML = `${adSlot('banner')}<article class="page article"><div class="breadcrumb"><a href="/${esc(c.id)}">${esc(c.title)}</a> / ${esc(p.title)}</div><h1>${esc(p.title)}</h1><p class="lead">${esc(p.summary)}</p><div class="info-grid"><div>${sectionsHTML(p.sections)}${relatedBlock(p)}${sourceNotes(p)}</div><aside class="infobox"><div class="infobox-head">Requirements</div><dl>${p.stats.map((x, i) => `<dt>${String(i + 1).padStart(2, '0')}</dt><dd>${esc(x)}</dd>`).join('')}</dl></aside></div></article>${adSlot('in-article')}`;
  }
  function renderInfo(slug) {
    const p = D.infoPages[slug];
    if (!p) return render404(slug);
    main.innerHTML = `${adSlot('banner')}<section class="page legal-page"><h1>${esc(p.title)}</h1><div class="breadcrumb">Home / ${esc(p.title)}</div>${p.body}${sourceNotes(null)}</section>`;
  }
  function render404(slug) {
    main.innerHTML = `<section class="page"><h1>Archive Page Missing</h1><p>No engraved record found for <code>${esc(slug)}</code>.</p><p><a href="/">Return to the mountainhome</a></p></section>`;
  }
  function navigate() {
    const r = route();
    renderLeftNav(r);
    renderRightNav();
    const seg = r.split('/').filter(Boolean);
    if (r === '/') renderHome();
    else if (seg.length === 1 && category(seg[0])) renderCategory(seg[0]);
    else if (seg.length === 1 && D.infoPages[seg[0]]) renderInfo(seg[0]);
    else if (seg.length === 2) renderDetail(seg[0], seg[1]);
    else render404(r);
    applySeo(r);
    setTimeout(loadAds, 100);
  }
  function go(path) {
    const clean = path.replace(/\/$/, '') || '/';
    if (clean === route()) return;
    history.pushState({}, '', clean);
    leftNav.classList.remove('open');
    navigate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const searchIndex = Array.isArray(D.searchIndex) ? D.searchIndex : [
    ...D.categories.map((c) => ({ title: c.title, sub: 'Category', href: '/' + c.id })),
    ...D.pages.map((p) => ({ title: p.title, sub: category(p.category).title, href: '/' + p.category + '/' + p.id, tags: p.stats.join(' ') })),
    ...Object.entries(D.infoPages).map(([k, p]) => ({ title: p.title, sub: 'Site Info', href: '/' + k }))
  ];
  function runSearch(q) {
    if (!q) {
      searchResults.classList.remove('open');
      return;
    }
    const low = q.toLowerCase();
    const matches = searchIndex.filter((x) => (x.title + ' ' + x.sub + ' ' + (x.tags || '')).toLowerCase().includes(low)).slice(0, 12);
    searchResults.innerHTML = matches.length ? matches.map((m) => `<a href="${esc(m.href)}">${esc(m.title)}<span>${esc(m.sub)}</span></a>`).join('') : '<div class="empty">No fortress records match.</div>';
    searchResults.classList.add('open');
  }
  searchInput.addEventListener('input', () => runSearch(searchInput.value.trim()));
  searchInput.addEventListener('focus', () => runSearch(searchInput.value.trim()));
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href]');
    if (!a) {
      if (!e.target.closest('.search')) searchResults.classList.remove('open');
      return;
    }
    const href = a.getAttribute('href');
    if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) return;
    const url = new URL(href, location.origin);
    if (url.origin !== location.origin) return;
    if (!window.__GW_PRERENDER__) {
      searchInput.value = '';
      searchResults.classList.remove('open');
      return;
    }
    e.preventDefault();
    searchInput.value = '';
    searchResults.classList.remove('open');
    go(url.pathname);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape') searchResults.classList.remove('open');
  });
  window.addEventListener('popstate', () => { if (window.__GW_PRERENDER__) navigate(); });
  if (menuToggle) menuToggle.onclick = () => leftNav.classList.toggle('open');
  if (window.__GW_PRERENDER__) {
    navigate();
  } else {
    setTimeout(loadAds, 100);
  }
})();
