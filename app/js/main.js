// const { active } = require("browser-sync");

$(function () {
  $('.warn__close').on('click',function (e) {
    e.preventDefault();
    $('.warn').toggleClass('none');
  });

  $('.question__spoiler').on('click',function(event) {
    $('.question__spoiler').not($(this)).removeClass('active').next().slideUp(300);
    $(this).toggleClass('active').next().slideToggle(300);
    $('.question__box').not($(this)).removeClass('active');
    $(this).parent().addClass('active');
  });
  $('.question__spoiler-1').trigger('click');
  // $('.question__box').on('click', function (event) {
  //   $(this).toggleClass('active');
  // });

})