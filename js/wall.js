// Filters the home page wall by the URL hash: #all, #projects or #stories.
// Without JavaScript the wall simply shows everything.
(function () {
  var wall = document.getElementById('wall');
  if (!wall) return;
  var tiles = wall.querySelectorAll('[data-kind]');
  var links = document.querySelectorAll('.site-nav [data-filter]');
  var empty = document.querySelector('.wall-empty');

  function apply() {
    var filter = (window.location.hash || '#all').slice(1);
    if (filter !== 'projects' && filter !== 'stories') filter = 'all';

    var shown = 0;
    Array.prototype.forEach.call(tiles, function (tile) {
      var show = filter === 'all' || tile.getAttribute('data-kind') === filter;
      tile.hidden = !show;
      if (show) shown++;
    });

    Array.prototype.forEach.call(links, function (link) {
      if (link.getAttribute('data-filter') === filter) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (empty) empty.hidden = shown > 0;
  }

  window.addEventListener('hashchange', apply);
  apply();
})();
