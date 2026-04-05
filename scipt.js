// Nav : ombre au scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,.4)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Bouton header → scroll vers #products
document.querySelector('header button').addEventListener('click', () => {
  document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
});