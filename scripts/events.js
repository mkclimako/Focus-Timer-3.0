const Events = ({
  controls,
  timer,
  sounds,
  theme,
  range,
  view,
  turnOffSound,
  playBtn,
  pauseBtn,
  stopBtn,
  currentSound,
  switchBtn,
  sessionD25,
  sessionD45,
  sessionD60,
  treeBtn,
  rainBtn,
  coffeeshopBtn,
  fireBtn,
}) => {
  playBtn.addEventListener('click', () => {
    controls.play();
    timer.counter();
    timer.timeBarFill();
    sounds.buttonClickSound();
  });

  pauseBtn.addEventListener('click', () => {
    controls.pause();
    timer.pauseCounter();
    sounds.buttonClickSound();
  });

  stopBtn.addEventListener('click', () => {
    controls.resetControls();
    timer.resetCounter();
    timer.resetSession();
    sounds.buttonClickSound();
  });

  sessionD25.addEventListener('click', () => {
    controls.session25();
    sounds.buttonClickSound();
  });

  sessionD45.addEventListener('click', () => {
    controls.session45();
    sounds.buttonClickSound();
  });

  sessionD60.addEventListener('click', () => {
    controls.session60();
    sounds.buttonClickSound();
  });

  switchBtn.addEventListener('click', () => {
    theme.themes();
    theme.changeThemeName();
    sounds.buttonClickSound();
  });

  view.addEventListener('click', () => {
    controls.changeView();
    sounds.buttonClickSound();
  });

  treeBtn.addEventListener('click', () => {
    controls.forestSound();
    currentSound = 'nature';
    sounds.playSound(currentSound);
    sounds.buttonClickSound();
    range.value = 50;
    sounds.rangeSlide(range);
    sounds.handleRangeSlide(range,false)
    sounds.volumeControl(range, currentSound);
  });

  rainBtn.addEventListener('click', () => {
    controls.rainSound();
    currentSound = 'rain';
    sounds.playSound(currentSound);
    sounds.buttonClickSound();
    range.value = 50;
    sounds.rangeSlide(range);
    sounds.handleRangeSlide(range,false)
    sounds.volumeControl(range, currentSound);
  });

  coffeeshopBtn.addEventListener('click', () => {
    controls.coffeeshopSound();
    currentSound = 'coffeeshop';
    sounds.playSound(currentSound);
    sounds.buttonClickSound();
    range.value = 50;
    sounds.rangeSlide(range);
    sounds.handleRangeSlide(range,false)
    sounds.volumeControl(range, currentSound);
  });

  fireBtn.addEventListener('click', () => {
    controls.fireSound();
    currentSound = 'fire';
    sounds.playSound(currentSound);
    sounds.buttonClickSound();
    range.value = 50;
    sounds.rangeSlide(range);
    sounds.handleRangeSlide(range,false)
    sounds.volumeControl(range, currentSound);
  });

  turnOffSound.addEventListener('click', () => {
    controls.soundOff();
    sounds.stopSound();
    sounds.handleRangeSlide(range,true)
    range.value = 50
    sounds.rangeSlide(range);

  });

  range.addEventListener('change', () => {
    sounds.volumeControl(range, currentSound);
    sounds.rangeSlide(range);
  });
};

export default Events;
