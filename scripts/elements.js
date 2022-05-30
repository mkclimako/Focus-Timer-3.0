const body = document.querySelector('body');

const switchBtn = document.querySelector('.switch');
console.log(switchBtn);

const pomodoro = document.querySelector('.pomodoro');
const todo = document.querySelector('.to-do');
const sight = document.querySelector('.sight');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

const timerBar = document.querySelector('.fill');

const currentSession = document.querySelector('.current-session');
const totalSession = document.querySelector('.total-session');

const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');

const sessionD25 = document.querySelector('.d25');
const sessionD45 = document.querySelector('.d45');
const sessionD60 = document.querySelector('.d60');

const treeBtn = document.querySelector('.tree');
const treeVolume = document.querySelector('#tree-volume');

const rainBtn = document.querySelector('.rain');
const rainVolume = document.querySelector('#rain-volume');

const coffeeshopBtn = document.querySelector('.coffeeshop');
const coffeeshopVolume = document.querySelector('#coffeeshop-volume');

const fireBtn = document.querySelector('.fire');
const fireVolume = document.querySelector('#fire-volume');

export {
  body,
  switchBtn,
  pomodoro,
  todo,
  sight,
  minutesDisplay,
  secondsDisplay,
  timerBar,
  currentSession,
  totalSession,
  playBtn,
  pauseBtn,
  stopBtn,
  sessionD25,
  sessionD45,
  sessionD60,
  treeBtn,
  treeVolume,
  rainBtn,
  rainVolume,
  coffeeshopBtn,
  coffeeshopVolume,
  fireBtn,
  fireVolume,
};