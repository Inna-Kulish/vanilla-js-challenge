const keys = document.querySelector('.keys');
keys.addEventListener('transitionend', removeTransition);

function removeTransition(e) {
  if (!e.target.classList.contains('key')) return;
    
  if (e.propertyName !== 'transform') return;

    e.target.classList.remove('playing');
  }

window.addEventListener('keydown', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
  }

  // Another way to get list
  // const keys = Array.from(document.querySelectorAll('.key'));
  // keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  