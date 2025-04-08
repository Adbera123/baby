const startBtn = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const text = document.getElementById("text");
const tgButton = document.getElementById("tg-button");

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none";
  loader.style.display = "block";

  const audio = new Audio("babulky.mp3"); // Замінити на реальний файл
  audio.loop = true;
  audio.volume = 1;

  audio.play().then(() => {
    loader.style.display = "none";
    text.style.opacity = "1";
    tgButton.classList.add("show");
  }).catch(() => {
    document.addEventListener("click", () => {
      audio.play().then(() => {
        loader.style.display = "none";
        text.style.opacity = "1";
        tgButton.classList.add("show");
      });
    }, { once: true });
  });
});
