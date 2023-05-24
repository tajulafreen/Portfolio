const hambur = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-section');
const nav = document.querySelector('.flexcontainer');
const hide = document.querySelector('.hide');
const see = document.querySelector('.seebutton');
const hider = document.querySelector('.hider');
hambur.onclick = function myfunction() {
  menu.classList.toggle('active');
  hambur.classList.toggle('active');
  nav.classList.toggle('active');
  hide.classList.toggle('active');
  see.classList.toggle('active');
  hider.classList.toggle('active');
};
document.querySelectorAll('.nav-item').forEach((n) => n.addEventListener('click', () => {
  hambur.classList.remove('active');
  menu.classList.remove('active');
  nav.classList.remove('active');
  hide.classList.remove('active');
  see.classList.remove('active');
}));