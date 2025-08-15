const callBtn = document.getElementById("callBtn");
const statusEl = document.getElementById("status");
const backgroundSound = document.getElementById("backgroundSound");

callBtn.addEventListener("click", () => {
  navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
      statusEl.textContent = "🔗 Соединение установлено… говори, тебя слышит пустота.";
      backgroundSound.src = "sounds/rain.mp3"; // замени на свой файл
      backgroundSound.play();
    })
    .catch(err => {
      statusEl.textContent = "🚫 Микрофон не доступен.";
      console.error(err);
    });
});