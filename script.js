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
  hider.classList.remove('active');
}));
const projectDetails = [
  {
    name: 'Keeping track of hundreds of components #1',
    description: [
      'This is the description of first project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #2
  {
    name: 'Keeping track of hundreds of components #2',
    description: [
      'This is the description of second project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: 'i./Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'Tailwind'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  {
    name: 'Keeping track of hundreds of components #3',
    description: [
      'This is the description of third project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #4
  {
    name: 'Keeping track of hundreds of components #4',
    description: [
      'This is the description of forth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: 'i./Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #5
  {
    name: 'Keeping track of hundreds of components #5',
    description: [
      'This is the description of fifth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
  // Project #6
  {
    name: 'Keeping track of hundreds of components #6',
    description: [
      'This is the description of sixth project',
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    ],
    image: './Snapshoot Portfolio (2).png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tajulafreen.github.io/Portfolio/',
    source:
      'https://github.com/tajulafreen/Portfolio/blob/main/index.html',
  },
];
// Generate Cards Dynamically
const projectContainer = document.querySelector('.grid-container');
const createProject = (item) => {
  const card = document.createElement('div');
  card.classList = 'grid-item';
  card.innerHTML = `
    <div class="item image"></div> 
           <h2 class="title">${item.name}</h2>          
            <ul class="tagcontainer">
            ${item.technologies.map((i) => `<li class="label-project">${i}</li>`).join('')}
           </ul>
           
           <button class="see-post"><p class="see-button">see project</p></button>
    `;
  projectContainer.appendChild(card);
};
projectDetails.forEach((e) => {
  createProject(e);
});
const overlay = document.querySelector('.overlay');
const popUpWindow = document.querySelector('.pop-up');
const body = document.querySelector('body');

const deskbag = document.querySelector('.head-desktop-bg');
const mobbag = document.querySelector('.flexcontainer');
const showPopUp = () => {
  overlay.classList.toggle('hiddenn');
  deskbag.classList.toggle('hiddenn');
  mobbag.classList.toggle('hiddenn');
  popUpWindow.classList.remove('hidden');
  body.classList.add('hide-scroll');
};
const createModal = (i) => {
  const popUpWindow = document.querySelector('.pop-up');

  popUpWindow.innerHTML = `
      <img
    src="./Disabled (2).png"
    alt="Close btn"
    class="pop-up-close-btn"
  />
    <div class="pop-up-img-box">
     
      <!-- For Mobile -->
      <img
        src="./pop-mobile.png"
        alt="Backgroun image"
        class="pop-up-hero-img mobile-only"
      />
      <!-- For Desktop -->
      <img
        src="./Snapshoot Portfolio (2).png"
        alt="Backgroun image"
        class="pop-up-hero-img desktop-only"
      />
    </div>
    <h2 class="pop-up-heading">${projectDetails[i].name}</h2>
    <div class="pop-up-btn-box desktop-only">
        <button
          class="btn btn--seelive"
          href="https://tajulafreen.github.io/Portfolio/"
          target="_blank"
        >
          <span>See Live</span>
          <img src="./see live icon.png" alt="See live Icon" />
        </button>
        <button
          class="btn btn--source"
          target="_blank"
          href="https://tajulafreen.github.io/Portfolio/"
        >
          <span>See Source</span>
          <img src="./Vector.png" alt="Github icon" />
        </button>
      </div>
    <div class="pop-up-technologies">
    </div>
    <div class="pop-up-description"><p>${projectDetails[i].description}</p></div>
    <div class="pop-up-btn-box mobile-only">
      <button
        class="btn btn--seelive"
        href="https://tajulafreen.github.io/Portfolio/"
        target="_blank"
      >
        <span>See Live</span>
        <img src="./see live icon.png" alt="See live Icon" />
      </button>
      <button
        class="btn btn--source"
        target="_blank"
        href="https://tajulafreen.github.io/Portfolio/"
      >
        <span>See Source</span>
        <img src="./Vector.png" alt="Github icon" />
      </button>
    </div>
  `;

  showPopUp();
  const closePopUpBtn = document.querySelector('.pop-up-close-btn');
  const closePopUp = () => {
    overlay.classList.remove('hiddenn');
    deskbag.classList.remove('hiddenn');
    mobbag.classList.remove('hiddenn');
    popUpWindow.classList.add('hidden');
    body.classList.remove('hide-scroll');
  };
  closePopUpBtn.addEventListener('click', closePopUp);
  const livebtn = document.querySelector('.btn--seelive');
  const sourcebtn = document.querySelector('.btn--source');

  livebtn.addEventListener('click', () => {
    window.open(projectDetails[i].live);
  });

  sourcebtn.addEventListener('click', () => {
    window.open(projectDetails[i].source);
  });
};
const projectButtons = document.querySelectorAll('.see-post');
for (let i = 0; i < projectButtons.length; i += 1) {
  projectButtons[i].addEventListener('click', () => { createModal(i); });
}
