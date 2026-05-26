function toggleNav() {
  const nav = document.getElementById('main-nav');
  const open = nav.classList.toggle('open');
  nav.querySelector('.nav-toggle').setAttribute('aria-expanded', open);
  nav.querySelector('.nav-toggle').setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

function closeNav() {
  const nav = document.getElementById('main-nav');
  nav.classList.remove('open');
  nav.querySelector('.nav-toggle').setAttribute('aria-expanded', 'false');
  nav.querySelector('.nav-toggle').setAttribute('aria-label', 'Open menu');
}

function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button');
  btn.textContent = "You're in!";
  btn.style.background = '#e07868';
  e.target.querySelector('input').value = '';
  setTimeout(() => {
    btn.textContent = 'Subscribe';
    btn.style.background = '';
  }, 3000);
}
