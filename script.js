document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLocaleLowerCase());
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);

  if (audioElement) {
    audioElement.play();
  }
}
