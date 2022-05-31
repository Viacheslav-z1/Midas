$(function () {
  $('.warn__close').on('click',function (e) {
    e.preventDefault();
    $('.warn').toggleClass('none');
  })

})