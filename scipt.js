document.addEventListener('DOMContentLoaded', () => {

  // Nav shadow on scroll
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.boxShadow = window.scrollY > 10 ? '0 4px 30px rgba(0,0,0,.4)' : 'none';
  });

  // Burger menu toggle
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    });

    // Fermer le menu au clic sur un lien
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  }

});