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

    //  FUNCTION USE LIKE A HOVER EFFECT ON HEAD
head.addEventListener("mouseover", function () {
  hand.style.display = "inline";
  setTimeout(() => {
    hand.style.display = "none";
  }, 8000);
});

    //  FUNCTION WHICH REMOVE HOVER EFFECT WHEN CURSOR MOVEOUT ON HEAD
head.addEventListener("mouseout", function () {
  hand.style.display = "none";
});

// TALK CLICK FUNCTION

const talikingP = document.createElement("p"); // P-SPEECH ELEMENT WHICH APPEND IN SPEECH DIV

    // ARRAY WITH SPEECHS
const speechArr = [
  "Hello There.",
  "How are you my friend?",
  "I am good thanks.",
  "My name is Peter Monev. I have been studying JavaScript.",
  "My hobbies are music, workout and hiking. I also play the guitar",
  "Tell me about yourself.",
  "..........................................",
];
const speechDiv = document.querySelector(".speech");
const mouth = document.querySelector(".mouth");
let speechCount = 0; // SPEECH COUNTER

head.addEventListener("click", function (event) {
  event.preventDefault;

    // FOR LOOP WHICH ITERATE ALL SPEECH
  for (let i = speechCount; i <= speechCount; i++) {
    
    talikingP.classList.add = "speechP";
    talikingP.textContent = speechArr[i];
    speechDiv.appendChild(talikingP);
    speechDiv.style.display = "inline";

        // REMOVE NORMAL CLASS ON MOUTH AND ADDING ANIMATION CSS CLASS
    mouth.classList.remove("mouth");
    mouth.classList.add("mouth-animation");
  }

  speechCount++; // EVERY CLICK ON HEAD ADDS +1 AND MAKE FOR LOOP REACH NEXT SPEECH

    // STATEMENT WHO CHECH THE LIMIT OF SPEECHS
  if (speechCount === 8) {
    speechDiv.style.display = "none";
    speechCount = 0;
  }

      // FUNCTION WHICH STOP ANIMATION ON MOUTH CHANGE THE CLASSES ON MOUTH ELEMENT 
  mouth.addEventListener("animationend", () => {
    mouth.classList.remove("mouth-animation");
    mouth.classList.add("mouth");
  });
});

    // CLOSE BUTTON WHICH CAN REMOVE SPEECH DIV
const body = document.querySelector(".closeBtn");
body.addEventListener("click", () => {
  speechDiv.style.display = "none";
});
