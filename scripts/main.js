$(function () {

  var mixer = mixitup('.blog__list');

  $('.heading__list button').on('click', function () {
    $('.blog__list').css('grid-template', 'repeat(1, 1fr) / repeat(3, 1fr)')
  })

  $('.offer__item').on('click', function () {
    $('.offer__item').removeClass('offer__item-active')
    $(this).addClass('offer__item-active');
  })
  $('.offer__item').on('click', function (e) {
    e.preventDefault('click');
  });


  $('.about__slider').slick({
    arrows: false,
    appendArrows: $('.about__arrows'),
    dots: true,
    appendDots: ('.about__dots'),
  })

  $('.about__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.about__slider').slick('slickPrev')
  })
  $('.about__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.about__slider').slick('slickNext')
  })

  $('.asked__acc-item-inner').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('asked__acc-item-inner--active')) {
      $(this).removeClass('asked__acc-item-inner--active')
      $(this).children('.asked__acc-text').slideUp()
    } else {
      $('.asked__acc-item-inner').removeClass('asked__acc-item-inner--active')
      $('.asked__acc-text').slideUp()
      $(this).toggleClass('asked__acc-item-inner--active')
      $(this).children('.asked__acc-text').slideToggle()
    }
  })

  $(".header__nav-list a, .footer__nav-item a").on("click", function (event) {
    event.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 700)
  });
});
