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
  }, 8000);
});

head.addEventListener("mouseout", function () {
  hand.style.display = "none";
});


// TALK FUNCTION

const talikingP = document.createElement('p'); 
const speechArr = ['Hello There.','How are you my friend?','I am good thanks.' ,'My name is Peter Monev. I have been studying JavaScript.', 'My hobbies are music, workout and hiking. I also play the guitar', 'Tell me about yourself.',".........................................."];
let speechCount = 0;
const speechDiv = document.querySelector('.speech');

head.addEventListener('click', function(event) {
    event.preventDefault;
   
   for(let i = speechCount; i <= speechCount; i++){
    talikingP.classList.add = 'speechP';
    talikingP.textContent = speechArr[i];
    speechDiv.appendChild(talikingP);
    speechDiv.style.display = 'inline';
   }
   speechCount++;

   if(speechCount === 8){
    speechDiv.style.display = 'none';
    speechCount = 0;
   }
})

const body = document.querySelector('.closeBtn');
body.addEventListener('click', () => {
    speechDiv.style.display = 'none';
})