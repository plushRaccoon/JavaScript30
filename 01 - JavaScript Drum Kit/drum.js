"use strict";

window.addEventListener("keydown", (e) => {
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; // stop the function from running all together
  audio.currentTime = 0; // it allows to play the sound multiple times pushing the same key
  audio.play();

  key.classList.add("playing");
  
  window.addEventListener('keyup', () => {
    key.classList.remove("playing");
  });
  
});
