var countDownDate = new Date("Aug 22, 2025 0:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "🎉" + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s 🎉";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "THE BOOK IS OUT!";
  }
}, 1000);

document.addEventListener('DOMContentLoaded', function() {
    var lightbox = document.getElementById('lightbox');
    var lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;

    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    document.querySelectorAll('.photo-grid img').forEach(function(img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            lightboxImg.src = this.src;
            lightbox.classList.add('active');
        });
    });
});