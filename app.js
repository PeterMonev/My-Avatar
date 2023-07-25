// EYES FOOLLOW FUCNTION 

const pupils = document.querySelectorAll('.pupil');
const eyeBrigth = document.querySelectorAll('.eye-bright');
document.querySelector('body').addEventListener('mousemove', eyesFollow)

function eyesFollow(){
    const x = event.clientX * 100 / window.innerWidth + "%";
    const y = event.clientY * 100 / window.innerHeight + "%";

    for (let i = 0; i < 2; i++){
        pupils[i].style.left = x;
        pupils[i].style.top = y;
        eyeBrigth[i].style.left = x;
        eyeBrigth[i].style.top = y;       
     }
}

