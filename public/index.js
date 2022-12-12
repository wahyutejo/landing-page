// Count date
const countDownDate = new Date("Dec 31, 2022 00:00:00").getTime();
const interval = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " hari " + hours + " jam " + minutes + " menit ";
  document.getElementById("countdown-detik").innerHTML = seconds + " detik";

  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
