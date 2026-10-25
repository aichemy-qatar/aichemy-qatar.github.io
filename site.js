// Shared by every page. The block keeps these names out of each page's own script.
{
  // Header: a soft shadow once the page scrolls; on small screens the menu
  // button shows the section links, and picking one closes it again.
  const header = document.querySelector('.site-header');
  const toggle = header.querySelector('.menu-toggle');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  const setMenu = open => {
    header.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open);
  };
  toggle.addEventListener('click', () => setMenu(!header.classList.contains('open')));
  header.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => e.key === 'Escape' && setMenu(false));
}
