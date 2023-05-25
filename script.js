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
      'https://tajulafreen.github.io/Portfolio/',
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
      'https://tajulafreen.github.io/Portfolio/',
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
      'https://tajulafreen.github.io/Portfolio/',
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
      'https://tajulafreen.github.io/Portfolio/',
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
      'https://tajulafreen.github.io/Portfolio/',
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
      'https://tajulafreen.github.io/Portfolio/',
  },
];

// General Variables
const projectButtons = document.querySelectorAll('.see-post');
const overlay = document.querySelector('.overlay');
const popUpWindow = document.querySelector('.pop-up');
const closePopUpBtn = document.querySelector('.pop-up-close-btn');
const livebtn = document.querySelector('.btn--seelive');
const sourcebtn = document.querySelector('.btn--source');
const body = document.querySelector('body');

// Pop-up Variables
const projectName = document.querySelector('.pop-up-heading');
const description = document.querySelector('.pop-up-description');
const technologies = document.querySelector('.pop-up-technologies');

// Functions
const showPopUp = () => {
  overlay.classList.remove('hidden');
  popUpWindow.classList.remove('hidden');
  body.classList.add('hide-scroll');
};

const closePopUp = () => {
  overlay.classList.add('hidden');
  popUpWindow.classList.add('hidden');
  body.classList.remove('hide-scroll');
};

// Actions
for (let i = 0; i < projectButtons.length; i += 1) {
  projectButtons[i].addEventListener('click', () => {
    const currentProject = projectDetails[i];
    projectName.innerHTML = currentProject.name;
    technologies.innerHTML = '';
    description.innerHTML = '';

    for (let n = 0; n < currentProject.technologies.length; n += 1) {
      const tech = document.createElement('button');
      tech.innerHTML = currentProject.technologies[n];
      technologies.append(tech);
    }

    for (let n = 0; n < currentProject.description.length; n += 1) {
      const para = document.createElement('p');
      para.innerHTML = currentProject.description[n];
      description.append(para);
    }

    showPopUp();
  });
}
closePopUpBtn.addEventListener('click', closePopUp);

livebtn.addEventListener('click', () => {
  window.open(projectDetails[0].live);
});

sourcebtn.addEventListener('click', () => {
  window.open(projectDetails[0].source);
});