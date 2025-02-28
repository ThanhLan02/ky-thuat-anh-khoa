const slides = document.querySelector('.slider');
const slideCount = document.querySelectorAll('.slide').length;
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
function updateSlidePosition() {
    currentTranslate = -currentIndex * 100;
    slides.style.transform = `translateX(${currentTranslate}%)`;
    slides.style.transition = 'transform 0.3s ease-out';
}

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

document.addEventListener('DOMContentLoaded', function () {
    const headerMobile = document.querySelector('.menu-mobile-icon');
    const menuMobile = document.querySelector('.menu-mobile');
    const overlayMobile = document.querySelector('.overlay-mobile');
    const cross = document.querySelector('.cross');
    const dropdownToggle = document.querySelector('.mobile-dropdown-toggle');
    const dropdownMenu = document.querySelector('.mobile-dropdown-menu');
    const dropdownSubToggle = document.querySelector('.mobile-dropdown-sub-toggle');
    const dropdownSubMenu = document.querySelector('.mobile-dropdown-sub-menu');
    // Show menu monile
    headerMobile.addEventListener('click', function (event) {
        event.preventDefault();
        menuMobile.classList.toggle('show-header-mobile');
        overlayMobile.classList.toggle('show-overlay-mobile');
    });
    // Hide menu mobile
    overlayMobile.addEventListener('click', function (event) {
        event.preventDefault();
        if (menuMobile.classList.contains('show-header-mobile') && overlayMobile.classList.contains('show-overlay-mobile')) {
            menuMobile.classList.remove('show-header-mobile');
            overlayMobile.classList.remove('show-overlay-mobile');
        }
    });
    cross.addEventListener('click', function (event) {
        event.preventDefault();
        if (menuMobile.classList.contains('show-header-mobile') && overlayMobile.classList.contains('show-overlay-mobile')) {
            menuMobile.classList.remove('show-header-mobile');
            overlayMobile.classList.remove('show-overlay-mobile');
        }
    });
    //show sub menu mobile
    dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownMenu.classList.toggle('show');
    });

    dropdownSubToggle.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownSubMenu.classList.toggle('show-sub');
    });
    //slide news feed
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
    //slide feedback
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
//Search mobile
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
