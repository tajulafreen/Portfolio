const hambur = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-section');
hambur.onclick = function myfunction() {
  menu.classList.toggle('active');
  hambur.classList.toggle('active');
};
