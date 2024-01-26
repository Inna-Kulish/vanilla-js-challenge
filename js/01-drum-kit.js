const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.addEventListener('click', playOnClick)
});
  window.addEventListener('keydown', playOnKeydown);

function playOnClick(e) {
  const itemKey = e.currentTarget;
  const audio = document.querySelector(`audio[data-key="${itemKey.dataset.key}"]`);

  itemKey.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  }

function removeTransition(e) {
 if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

function playOnKeydown(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
 