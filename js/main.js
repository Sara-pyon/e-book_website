import { products } from "./bookProducts.js";
import { makingStars } from "./stars.js";
import { reviews } from "./review.js";
import ScrollReveal from './scroll.reveral.min.js'
import { favoriteCart,activeHeart,activeHeartDefault,makeFavoriteCart } from "./FavoriteCart.js";
import { book1, book10, book2, book3, book4, book5, book6, book7, book8, book9, discountbook1, discountbook2, favicon, homebook1, homebook2, homebook3, homebook4, joinbg, testimonialperfil1, testimonialperfil2, testimonialperfil3, testimonialperfil4 } from '../images/index.js'

// Featured Books
const featured = document.querySelector('.featured__images');
let featuredHTML = '';
featuredHTML += '<div class="swiper-wrapper">'

products.forEach(item => {
    if(item.discount){

        featuredHTML += 
        `
        <div class="featured__card grid swiper-slide">
            <img src="${item.image}" alt="" class="featured__card-img">
            <h3 class="featured__card-title">${item.title}</h3>
            <p class="featured__card-price price">
                <span class="featured__price original">$${(Math.round(item.priceCents*(1-item.discount)/100)).toFixed(2)}</span>
                <span class="featured__discount price-discount">$${(Math.round(item.priceCents/100)).toFixed(2)}</span>
            </p>
            <button class=" featured__btn btn">Add To Cart</button>
            <div class="featured__card-icons">
                <i class="ri-search-line"></i>
                <i class="ri-heart-3-line favorite" id=${item.id}></i>
                <i class="ri-eye-line"></i>
            </div>
        </div>
        `

    }

    
})
featuredHTML += `</div>`
//Add Swiper Button
featuredHTML += `<div class="swiper-button-prev featured__swiper-btn">
<i class="ri-arrow-left-s-line"></i>
</div>
<div class="swiper-button-next featured__swiper-btn">
<i class="ri-arrow-right-s-line"></i>
</div>`;
if(featuredHTML){
    featured.innerHTML = featuredHTML;
}


//New Books
const newbooks = document.querySelectorAll('.newbooks__images');
let newbooksHTML1 = '';
let newbooksHTML2 = '';
newbooksHTML1 += '<div class="swiper-wrapper">'
newbooksHTML2 += '<div class="swiper-wrapper">'

let product1,product2;
let newBooksProducts = [];

products.forEach(item=> (item.discount) ? '': newBooksProducts.push(item));

newBooksProducts.forEach((item,index) => {
    if(Number(index) % 2 === 0){
        newbooksHTML1 += 
        `
        <div class="newbooks__card swiper-slide">
            <i class="ri-heart-3-line favorite" id=${item.id}></i>
            <img src="${item.image}" alt="" class="newbooks__img">
            <div class="newbooks__data">
                <h4 class="newbooks__card-title">${item.title}</h4>
                <p class="newbooks__card-price price">
                    <span class="newbooks__price original">$${(Math.round(item.priceCents/100)).toFixed(2)}</span>
                    <span class="newbooks__discount price-discount"></span>
                </p>
                <div class="newbooks__stars">
                    ${makingStars(item.rating.stars)}
                </div>
            </div>
        </div>
        `
    }else{
        newbooksHTML2 += 
        `
        <div class="newbooks__card swiper-slide">
            <i class="ri-heart-3-line favorite" id=${item.id}></i>
            <img src="${item.image}" alt="" class="newbooks__img">
            <div class="newbooks__data">
                <h4 class="newbooks__card-title">${item.title}</h4>
                <p class="newbooks__card-price price">
                    <span class="newbooks__price original">$${(Math.round(item.priceCents/100)).toFixed(2)}</span>
                    <span class="newbooks__discount price-discount"></span>
                </p>
                <div class="newbooks__stars">
                    ${makingStars(item.rating.stars)}   
                </div>
            </div>
        </div>
        `
    }
})

newbooksHTML1 += `</div>`
newbooksHTML2 += `</div>`

document.querySelector('.newbooks__images1').innerHTML = newbooksHTML1;
document.querySelector('.newbooks__images2').innerHTML = newbooksHTML2;


//Testimonial
const testimonial = document.querySelector('.testimonial__cards');
let testimonialHTML = '';
testimonialHTML += '<div class="swiper-wrapper">';

reviews.forEach(item => {

        testimonialHTML += 
        `
        <div class="testimonial__card swiper-slide">
            <img src="${item.image}" alt="customer" class="testimonial__img">
            <div class="testimonial__review">
                <h4 class="testimonial__name">${item.name}</h4>
                <p href="" class="testimonial__text">
                    ${item.text}
                </p>
                <div class="testimonial__stars">
                   ${makingStars(item.stars)}
                </div>
            </div>
        </div>

        `
})
testimonial.innerHTML= testimonialHTML;
testimonialHTML += `</div>`




// Toggle
const searchOpen = document.getElementById('search-open'),
    searchClose = document.getElementById('search-close'),
    searchContent = document.getElementById('search');

    searchOpen.addEventListener('click', () => searchContent.classList.add('show-form'));
    searchClose.addEventListener('click', () => searchContent.classList.remove('show-form'));
    
//Login
const loginOpen = document.getElementById('login-open'),
        loginClose = document.getElementById('login-close'),
        loginContent = document.getElementById('login');


loginOpen.addEventListener('click', () => loginContent.classList.add('show-form'));
loginClose.addEventListener('click', () => loginContent.classList.remove('show-form'));
// 
// HOME SWIPER
const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -30,
    grapCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


  });

//   Featured Swiper
const swiperFeatured = new Swiper('.featured__swiper', {
    loop: false,
    spaceBetween: 25,
    grapCursor: 'true',
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    touchStartPreventDefault: false,
    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        } 
    }

  });

//   NewBooks Swiper
const swiperNewbooks = new Swiper('.newbooks__swiper', {
    loop: false,
    spaceBetween: 10,
    grapCursor: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {
        1120: {
            slidesPerView: 3,
        }
    }

  });

//   Testimonial Swiper
const swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 10,
    grapCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

  });

  // ======================== ADD MENU SHADOW =====================
   const addShadow = () =>{
    const header = document.querySelector('header');
    window.scrollY >= 50? header.classList.add('header-shadow') : header.classList.remove('header-shadow');
   }
   window. addEventListener('scroll', addShadow);

// ======================== ACTIVE LINK =====================
const sections = document.querySelectorAll('.section');

const scrollActive = () => {
    sections.forEach(section => {
        const sectionTop = section.offsetTop -50,
              sectionHeight = section.offsetHeight,
              sectionId = section.getAttribute('id'),
              sectionClass = document.querySelector('.header__list a[href *=' + sectionId + ']');
    (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) ?
            sectionClass.classList.add('active-link'):
            sectionClass.classList.remove('active-link');
    })
}

window.addEventListener('scroll', scrollActive);

// ======================== SCROLL UP BAR =====================
const scrollUp = () => {
    const scrollUp = document.getElementById('scrollUp');
    window.scrollY >= 100 ? scrollUp.classList.add('show-scrollUp'):
                            scrollUp.classList.remove('show-scrollUp');
}
window.addEventListener('scroll', scrollUp);

// ======================== LIGHT DARK THEME =====================
const themeButton = document.getElementById('theme-button'),
      darkTheme = 'dark-theme',
      iconTheme = 'ri-sun-line';

//Previously elected Topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme'),
      selectedIcon = localStorage.getItem('selected-icon');

//We obtainthe current themethat the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ?
                              'dark' : 'light',
      getCurrentIcon = () => themeButton.classList.contains(iconTheme) ?
                              'ri-moon-line' :'ri-sun-line';
//We validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

//Active / deactive the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// ======================== SCROLL LEAVEAL ANIMATION =====================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: false
});

sr.reveal('.home__header');
sr.reveal('.home__images', {delay: 600});
sr.reveal('.home__group', {interval: 100});

// ======================== Favorite =====================
const favoriteButton = document.querySelectorAll('.favorite'); 
document.querySelector('.favorite-number').innerHTML = favoriteCart.length;
activeHeartDefault(favoriteCart);

makeFavoriteCart(favoriteButton);


