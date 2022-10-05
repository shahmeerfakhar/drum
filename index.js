function removeTransition(e) {
    if (e.propertName !== 'tranform') return;
//e.target.classList.remove('playing');
console.log(e.propertName);
};

function playSound(e) {
    const audio = document.querySelector('audio[data-key="${e.keyCode}"]');
    const key = document.querySelector('div[data-key="${e.keyCode}"]');
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();

};


const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
