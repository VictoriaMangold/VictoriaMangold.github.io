// One page-load reveal for the hero, a hairline on the nav once you scroll,
// and the copyright year. That's the whole script.

requestAnimationFrame(function () {
  document.body.classList.add('loaded');
});

var nav = document.getElementById('nav');
if (nav) {
  var onScroll = function () {
    nav.dataset.scrolled = window.scrollY > 8 ? 'true' : 'false';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

var year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
