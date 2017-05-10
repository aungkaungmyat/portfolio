$(document).ready(function() {
  $('.open-menu').on('click', function() {
     $('.overlay-panel').addClass('open');
     $('#name-box').addClass('open');
  });

  $('.close-menu').on('click', function() {
    $('.overlay-panel').removeClass('open');
    $('#name-box').removeClass('open');
  });
});






/*var target = document.querySelector(‘.open-menu’);
var overlay = document.querySelector(‘.overlay’);
target.addEventListener(‘click’, toggleClass, false);

function toggleClass() {
overlay.classList.toggle(‘open’);
}*/
