const hambur = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-section');
const nav = document.querySelector('.flexcontainer');
hambur.onclick = function myfunction() {
  menu.classList.toggle('active');
  hambur.classList.toggle('active');
  nav.classList.toggle('active');
};
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hambur.classList.remove('active');
  menu.classList.remove('active');
  nav.classList.remove('active');
}));