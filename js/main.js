
new Swiper('#main-visual .swiper', {
    direction: 'horizontal',
    centeredSlides: true,
    loop: true, 
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction"
    }
});
new Swiper('#promotion .swiper', {
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        300: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        360: {
            slidesPerView: 2.25,
            spaceBetween: 20
        }
    }
});


// to-top
const toTopEl = document.querySelector('#to-top');

toTopEl.addEventListener('click',function(e){
    e.preventDefault();
    window.scrollTo({
        top:0, behavior:'smooth'
    })
});