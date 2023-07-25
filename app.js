// EYES FOOLLOW FUCNTION

const pupils = document.querySelectorAll(".pupil");
const eyeBrigth = document.querySelectorAll(".eye-bright");
document.querySelector("body").addEventListener("mousemove", eyesFollow);

function eyesFollow() {
  const x = (event.clientX * 100) / window.innerWidth + "%";
  const y = (event.clientY * 100) / window.innerHeight + "%";

  for (let i = 0; i < 2; i++) {
    pupils[i].style.left = x;
    pupils[i].style.top = y;
    eyeBrigth[i].style.left = x;
    eyeBrigth[i].style.top = y;
  }
}

// HAND MOVE FUNCTION

const head = document.querySelector(".head");
const hand = document.querySelector(".hand");

head.addEventListener("mouseover", function () {
  hand.style.display = "inline";
  setTimeout(() => {
    hand.style.display = "none";
  }, 6000);
});

head.addEventListener("mouseout", function () {
  hand.style.display = "none";
});
