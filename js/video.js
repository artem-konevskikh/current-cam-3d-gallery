// play video when user enters room. Pause when leaving
const video1 = document.getElementById('current-research');
video1.pause();
const video2 = document.getElementById('current-film');
video2.pause();
const video3 = document.getElementById('gan-video');
video3.pause();

AFRAME.registerComponent('listener', {
  tick: function () {
    const userPosition = this.el.getAttribute('position');
    // console.log(userPosition);
    if ((userPosition["z"] <= -16) && (userPosition["x"] > -25.8) && (userPosition["x"] < -16.2)) {
      video1.play();
    } else {
      video1.pause();
    }

    if ((userPosition["z"] <= -16) && (userPosition["x"] > -7.86) && (userPosition["x"] < 4.86)) {
      video2.play();
    } else {
      video2.pause();
    }

    if ((userPosition["z"] <= -16) && (userPosition["x"] > 13.2) && (userPosition["x"] < 22.77)) {
      video3.play();
    } else {
      video3.pause();
    }
  }
});

// Workaround for mobile video
// uses the splash screen button to trigger video play/pause so that the
// video will auto play when the user enters the theater room
const enterButton = document.querySelector('.splash__button')
const splash = document.querySelector('.splash');

enterButton.addEventListener('click', () => {
  video1.play();
  video1.pause();
  video2.play();
  video2.pause();
  video3.play();
  video3.pause();
  splash.style.display = 'none';
});
