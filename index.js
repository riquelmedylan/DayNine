const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const div = document.querySelectorAll("button");

div.forEach((container, i) => {
  container.addEventListener("click", () => {
    const nameSound = sounds[i];
    const audio = new Audio(`./sounds/${nameSound}.mp3`);
    audio.play();
  });
});
