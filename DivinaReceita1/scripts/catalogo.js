var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });


  function toggleDislike(button) {
    button.classList.toggle('clicked');
    var emptyHeart = button.querySelector('.empty-heart');
    var filledHeart = button.querySelector('.filled-heart');
    emptyHeart.classList.toggle('hidden');
    filledHeart.classList.toggle('hidden');
}