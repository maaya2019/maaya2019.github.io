function toggleDetails() {
  var event = this.parentElement.parentElement;
  var details = event.querySelector('.details');

  details.classList.toggle('visible');
}

document.querySelectorAll('.event .btn.secondary').forEach(function(button) {
  button.addEventListener('click', toggleDetails);
});

function toggleMenu() {
  var btn = document.getElementById('mobileMenu');
  var nav = document.querySelector('header');

  btn.classList.toggle('ion-ios-menu');
  btn.classList.toggle('ion-md-close');
  nav.classList.toggle('visible');
}