$(function () {

  $('.slider__inner').slick({
    arrows: true,
    asNavFor: '.thumbs'
  });

  $('.thumbs').slick({
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 751,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 611,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 471,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  //Код относится к адаптивному меню

  $('.header__menu-btn').on('click', function () {
    $('.header__menu ul').slideToggle();
  });

  //Конец кода адаптивного меню

});