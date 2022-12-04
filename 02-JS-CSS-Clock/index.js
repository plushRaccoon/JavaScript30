const secondHand = document.querySelector(".second-hand"),
  minuteHand = document.querySelector(".min-hand"),
  hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds(),
    secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes(),
    minsDegree = (mins / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours(),
    hoursDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(setDate, 1000);
