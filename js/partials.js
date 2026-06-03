(function () {
  function include(el) {
    const url = el.getAttribute('data-partial');
    if (!url) return;
    const req = new XMLHttpRequest();
    req.open('GET', url, false);
    try {
      req.send(null);
      if (req.status >= 200 && req.status < 300) {
        el.innerHTML = req.responseText;
      }
    } catch (e) {}
  }

  document.querySelectorAll('[data-partial]').forEach(include);
  window.__GW_PARTIALS_READY__ = true;
  document.dispatchEvent(new CustomEvent('gamewikihub:partials-ready'));
})();
