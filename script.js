const hambur = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-section');
hambur.onclick = function myfunction() {
  menu.classList.toggle('active');
  hambur.classList.toggle('active');
};
document.querySelectorAll('.navbar-item').forEach((n) => n.addEventListener('click', () => {
  hambur.classList.remove('active');
  menu.classList.remove('active');
}));