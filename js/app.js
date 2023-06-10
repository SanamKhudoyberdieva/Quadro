$('.product-slick').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="img/ic_p.svg" class="img-fluid"/></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="img/ic_n.svg" class="img-fluid"/></button>',
    responsive: [{
    breakpoint: 1024, settings: {
        slidesToShow: 6, slidesToScroll: 1, infinite: true, dots: true
    }
    }, {
    breakpoint: 600, settings: {
        slidesToShow: 4, slidesToScroll: 1
    }
    }, {
    breakpoint: 480, settings: {
        slidesToShow: 2, slidesToScroll: 1
    }
    }]
})