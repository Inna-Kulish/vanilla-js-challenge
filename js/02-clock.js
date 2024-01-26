const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  if (secondsDegrees === 90) {
    secondHand.style.transition = "none";
  } else if (secondsDegrees >= 91) {
    secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
  }

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  console.log(minHand.style.transform);
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
