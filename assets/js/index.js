const slides = document.querySelector('.slider');
const slideCount = document.querySelectorAll('.slide').length;
console.log(slideCount);
const btnLeft = document.querySelector('.btn-slide-left');
const btnRight = document.querySelector('.btn-slide-right');
let currentIndex = 0;

let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
function showNextSlide() {
    currentIndex++;
    if (currentIndex === slideCount) {
        currentIndex = 0;
    }
    updateSlidePosition();
}

function showPrevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slideCount - 1;
    }
    updateSlidePosition();
}
//-------Nút bấm sliders 
btnLeft.addEventListener('click', function () {
    showPrevSlide();
});
btnRight.addEventListener('click', function () {
    showNextSlide();
});
//--------Kéo thả sliders
slides.addEventListener('dragstart', (e) => {
    e.preventDefault();
});
function updateSlidePosition() {
    currentTranslate = -currentIndex * 100;
    slides.style.transform = `translateX(${currentTranslate}%)`;
    slides.style.transition = 'transform 0.3s ease-out';
}

slides.addEventListener('mousedown', (e) => {
    e.preventDefault();
    isDragging = true;
    startX = e.clientX;
    prevTranslate = currentTranslate;
    slides.style.transition = 'none';
});

slides.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + (deltaX / slides.offsetWidth) * 100;
    slides.style.transform = `translateX(${currentTranslate}%)`;
});

slides.addEventListener('mouseup', () => {
    isDragging = false;
    const threshold = 20;
    const diff = currentTranslate - prevTranslate;
    if (diff > threshold) {
        showPrevSlide();
    } else if (diff < -threshold) {
        showNextSlide();
    } else {
        slides.style.transform = `translateX(${prevTranslate}%)`;
    }
});

slides.addEventListener('mouseleave', () => {
    if (isDragging) {
        isDragging = false;
        slides.style.transform = `translateX(${prevTranslate}%)`;
    }
});
//---------Kéo thả cho mobile---------
slides.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    prevTranslate = currentTranslate;
    slides.style.transition = 'none';
});

slides.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = prevTranslate + (deltaX / slides.offsetWidth) * 100;
    slides.style.transform = `translateX(${currentTranslate}%)`;
});

slides.addEventListener('touchend', () => {
    isDragging = false;
    const threshold = 20;
    const diff = currentTranslate - prevTranslate;
    if (diff > threshold) {
        showPrevSlide();
    } else if (diff < -threshold) {
        showNextSlide();
    } else {
        slides.style.transform = `translateX(${prevTranslate}%)`;
    }
});
setInterval(showNextSlide, 5000);


// Header fixed 
window.addEventListener('scroll', function () {
    var header = document.getElementById('header-menu');
    if (window.scrollY > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});

// Scroll to top
var mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    }

    else {
        mybutton.style.display = "none";
    }
};
mybutton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

//sick slide company card 
$(document).ready(function () {
    $('.company').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        variableWidth: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });

    // Use event delegation for custom navigation buttons
    $(document).on('click', '.btn-company-left', function () {
        $('.company').slick('slickPrev');
    });

    $(document).on('click', '.btn-company-right', function () {
        $('.company').slick('slickNext');
    });
});

//Menu mobile 
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.mobile-dropdown-toggle');
    const dropdownMenu = document.querySelector('.mobile-dropdown-menu');
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggle = document.querySelector('.mobile-dropdown-sub-toggle');
    const dropdownMenu = document.querySelector('.mobile-dropdown-sub-menu');
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show-sub');
    });
});

document.querySelector('.icon-search-moblie').addEventListener('click', function () {
    const searchBar = document.querySelector('.search-mobile-content');
    if (searchBar.classList.contains('show')) {
        searchBar.classList.remove('show');
    } else {
        searchBar.classList.add('show');
    }
});
document.querySelector('.overlay-search-mobile').addEventListener('click', function () {
    const searchBar = document.querySelector('.search-mobile-content');
    if (searchBar.classList.contains('show')) {
        searchBar.classList.remove('show');
    }
});
// slide news feed 
document.addEventListener("DOMContentLoaded", function () {
    var swiper2 = new Swiper(".swiper-container-news", {
        direction: "vertical",
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        autoHeight: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        }, on: {
            slideChangeTransitionEnd: function () {
                updateNewsActive();
            },
        },
    });

    function updateNewsActive() {
        let activeSlide = document.querySelector(".news-list .swiper-slide-active");
        let newsActiveImg = document.querySelector(".news-active-img img");
        // let newsActiveContent = document.querySelector(".news-active-content p");
        if (activeSlide) {
            let imgSrc = activeSlide.querySelector(".news-list-item-left img").src;
            // let content = activeSlide.querySelector(".news-list-item-right p").innerText;

            newsActiveImg.src = imgSrc;
            // newsActiveContent.innerText = content;
        }
    }
    updateNewsActive();
    var swiper = new Swiper(".swiper-container", {
        loop: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".btn-feedback-left-next",
            prevEl: ".btn-feedback-left-prev",
        },
        slidesPerView: 1,
        effect: "slide",
        spaceBetween: 0,
    });
});
