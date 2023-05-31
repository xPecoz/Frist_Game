const hero = document.querySelector(".hero"),
  heroBoy = document.querySelector(".heroBoy"),
  vilan = document.querySelector(".vilan");

function jump() {
  if (hero.classList != "animate") {
    hero.classList.add("animate");
    vilan.style.animation = "move 1s infinite linear";
  }

  setTimeout(function () {
    hero.classList.remove("animate");
  }, 300);
}

document.addEventListener("keydown", function (e) {
  if (e.code == "Space") jump();
});

// Check If Hero Is Alive

let isAlive = setInterval(function () {
  let heroTop = parseInt(getComputedStyle(hero).getPropertyValue("top"));
  let vilanLeft = parseInt(getComputedStyle(vilan).getPropertyValue("left"));

  if (vilanLeft < 30 && vilanLeft > 10 && heroTop >= 280) {
    vilan.style.animation = "none";
    alert("Game Over. Press Spacebar To Restart");
  }
}, 10);
