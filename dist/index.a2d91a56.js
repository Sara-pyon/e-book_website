function e(e,t,i,s){Object.defineProperty(e,t,{get:i,set:s,enumerable:!0,configurable:!0})}var t=globalThis,i={},s={},a=t.parcelRequire4c6f;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in s){var t=s[e];delete s[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){s[e]=t},t.parcelRequire4c6f=a);var r=a.register;r("5fEqa",function(t,i){e(t.exports,"products",()=>s);let s=[{id:"3iy5peu",image:"images/book-1.png",title:"The Lord Of The King",rating:{stars:4,count:230},priceCents:1090},{id:"u53txii",image:"images/book-2.png",title:"Simple & Minimalist",rating:{stars:4.5,count:190},priceCents:2090},{id:"3f67bi5z",image:"images/book-3.png",title:"Muted color posted template",rating:{stars:2,count:80},priceCents:1240},{id:"qfseoft",image:"images/book-4.png",title:"Poring Dreams",rating:{stars:4.5,count:450},priceCents:3060},{id:"2j4sgwa",image:"images/book-5.png",title:"Customize Your Autumn Clothes",rating:{stars:3.5,count:130},priceCents:1e3},{id:"pmamsvo",image:"images/book-6.png",title:"Designed For Work",rating:{stars:2.9,count:8},priceCents:1e3,discount:.2},{id:"nj4yddm",image:"images/book-7.png",title:"Plant Tree For The Future",rating:{stars:3,count:180},priceCents:2030},{id:"i24sz6w",image:"images/book-8.png",title:"Modern Abstract Poster",rating:{stars:4.5,count:1030},priceCents:3020},{id:"kmmx5ix",image:"images/book-9.png",title:"Bird Park",rating:{stars:5,count:2040},priceCents:3500},{id:"9gsxgkh",image:"images/book-10.png",title:"Memories of The Sword",rating:{stars:2.5,count:30},priceCents:2800},{id:"u37wcro",image:"images/discount-book-1.png",title:"Idea For Interior",rating:{stars:4.5,count:1900},priceCents:1499,discount:.2},{id:"nin79fw",image:"images/discount-book-2.png",title:"Classic Blue",rating:{stars:4.5,count:140},priceCents:1200,discount:.2},{id:"33bmic9",image:"images/home-book-1.png",title:"Diana & Jack",rating:{stars:5,count:30},priceCents:2800,position:"home"},{id:"9ip9mkk",image:"images/home-book-2.png",title:"Christmas has come",rating:{stars:5,count:30},priceCents:2800,position:"home"},{id:"vsqhcfy",image:"images/home-book-3.png",title:"True & Tony",rating:{stars:5,count:30},priceCents:2800,position:"home",discount:.2},{id:"d9auhde",image:"images/home-book-4.png",title:"Celtic Tales",rating:{stars:5,count:30},priceCents:2800,position:"home"}]}),r("iqUot",function(t,i){e(t.exports,"favoriteCart",()=>s),e(t.exports,"activeHeartDefault",()=>a),e(t.exports,"makeFavoriteCart",()=>o),e(t.exports,"removeProduct",()=>n);let s=JSON.parse(localStorage.getItem("favorite-cart"))||[],a=e=>{e&&e.forEach(e=>{let t=document.getElementById(e.id);t.classList.remove("ri-heart-3-line"),t.classList.add("ri-heart-3-fill")})},r=(e,t)=>{let i="ri-heart-3-fill",s="ri-heart-3-line";e.forEach(e=>{let t=e.id,a=document.getElementById(t);a.classList.remove(i),a.classList.add(s)}),t.forEach(e=>{let t=e.id,a=document.getElementById(t);a.classList.remove(s),a.classList.add(i)})},o=e=>{e.forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("id");document.getElementById(t);let i=[];s&&s.forEach(e=>{e.id!==t&&i.push({id:e.id})}),s.length===i.length&&i.push({id:t}),r(s,i),s=i,document.querySelector(".favorite-number").innerHTML=s.length,localStorage.setItem("favorite-cart",JSON.stringify(s))})})},n=e=>{let t=[];s.forEach(i=>{i.id!==e&&t.push({id:i.id})}),s=t,localStorage.setItem("favorite-cart",JSON.stringify(s))}});var o=a("5fEqa");const n=e=>{let t=['<i class="ri-star-s-line"></i>','<i class="ri-star-s-line"></i>','<i class="ri-star-s-line"></i>','<i class="ri-star-s-line"></i>','<i class="ri-star-s-line"></i>'],i="";for(let i=0;i<Math.trunc(e);i++)t[i]='<i class="ri-star-s-fill"></i>';return .5===Math.floor(e)&&(t[Math.trunc(e)]='<i class="ri-star-half-fill"></i>'),t.forEach(e=>i+=e),i};var l=a("uglRj"),c=a("iqUot");const d=document.querySelector(".featured__images");let m="";m+='<div class="swiper-wrapper">',(0,o.products).forEach(e=>{e.discount&&(m+=`
        <div class="featured__card grid swiper-slide">
            <img src="${e.image}" alt="" class="featured__card-img">
            <h3 class="featured__card-title">${e.title}</h3>
            <p class="featured__card-price price">
                <span class="featured__price original">$${Math.round(e.priceCents*(1-e.discount)/100).toFixed(2)}</span>
                <span class="featured__discount price-discount">$${Math.round(e.priceCents/100).toFixed(2)}</span>
            </p>
            <button class=" featured__btn btn">Add To Cart</button>
            <div class="featured__card-icons">
                <i class="ri-search-line"></i>
                <i class="ri-heart-3-line favorite" id=${e.id}></i>
                <i class="ri-eye-line"></i>
            </div>
        </div>
        `)}),(m+=`</div><div class="swiper-button-prev featured__swiper-btn">
<i class="ri-arrow-left-s-line"></i>
</div>
<div class="swiper-button-next featured__swiper-btn">
<i class="ri-arrow-right-s-line"></i>
</div>`)&&(d.innerHTML=m),document.querySelectorAll(".newbooks__images");let p="",u="";p+='<div class="swiper-wrapper">',u+='<div class="swiper-wrapper">';let g=[];(0,o.products).forEach(e=>e.discount?"":g.push(e)),g.forEach((e,t)=>{Number(t)%2==0?p+=`
        <div class="newbooks__card swiper-slide">
            <i class="ri-heart-3-line favorite" id=${e.id}></i>
            <img src="${e.image}" alt="" class="newbooks__img">
            <div class="newbooks__data">
                <h4 class="newbooks__card-title">${e.title}</h4>
                <p class="newbooks__card-price price">
                    <span class="newbooks__price original">$${Math.round(e.priceCents/100).toFixed(2)}</span>
                    <span class="newbooks__discount price-discount"></span>
                </p>
                <div class="newbooks__stars">
                    ${n(e.rating.stars)}
                </div>
            </div>
        </div>
        `:u+=`
        <div class="newbooks__card swiper-slide">
            <i class="ri-heart-3-line favorite" id=${e.id}></i>
            <img src="${e.image}" alt="" class="newbooks__img">
            <div class="newbooks__data">
                <h4 class="newbooks__card-title">${e.title}</h4>
                <p class="newbooks__card-price price">
                    <span class="newbooks__price original">$${Math.round(e.priceCents/100).toFixed(2)}</span>
                    <span class="newbooks__discount price-discount"></span>
                </p>
                <div class="newbooks__stars">
                    ${n(e.rating.stars)}   
                </div>
            </div>
        </div>
        `}),p+="</div>",u+="</div>",document.querySelector(".newbooks__images1").innerHTML=p,document.querySelector(".newbooks__images2").innerHTML=u;const h=document.querySelector(".testimonial__cards");let v="";v+='<div class="swiper-wrapper">',[{name:"Rial Loz",image:"images/testimonial-perfil-1.png",text:"The best website to buy books,the purchase is very easy to make and has great discounts.",stars:4},{name:"Trey Alguire",image:"images/testimonial-perfil-2.png",text:"The best website to buy books,the purchase is very easy to make and has great discounts.",stars:5},{name:"Sara Komatsu",image:"images/testimonial-perfil-3.png",text:"The best website to buy books,the purchase is very easy to make and has great discounts.",stars:4.5},{name:"Daniel John",image:"images/testimonial-perfil-4.png",text:"The best website to buy books,the purchase is very easy to make and has great discounts.",stars:3.5}].forEach(e=>{v+=`
        <div class="testimonial__card swiper-slide">
            <img src="${e.image}" alt="customer" class="testimonial__img">
            <div class="testimonial__review">
                <h4 class="testimonial__name">${e.name}</h4>
                <p href="" class="testimonial__text">
                    ${e.text}
                </p>
                <div class="testimonial__stars">
                   ${n(e.stars)}
                </div>
            </div>
        </div>

        `}),h.innerHTML=v,v+="</div>";const w=document.getElementById("search-open"),_=document.getElementById("search-close"),b=document.getElementById("search");w.addEventListener("click",()=>b.classList.add("show-form")),_.addEventListener("click",()=>b.classList.remove("show-form"));const f=document.getElementById("login-open"),k=document.getElementById("login-close"),y=document.getElementById("login");f.addEventListener("click",()=>y.classList.add("show-form")),k.addEventListener("click",()=>y.classList.remove("show-form")),new Swiper(".home__swiper",{loop:!0,spaceBetween:-30,grapCursor:!0,slidesPerView:"auto",centeredSlides:"auto",autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),new Swiper(".featured__swiper",{loop:!1,spaceBetween:25,grapCursor:"true",slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},touchStartPreventDefault:!1,breakpoints:{1150:{slidesPerView:4,centeredSlides:!1}}}),new Swiper(".newbooks__swiper",{loop:!1,spaceBetween:10,grapCursor:!0,slidesPerView:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{1120:{slidesPerView:3}}}),new Swiper(".testimonial__swiper",{loop:!0,spaceBetween:10,grapCursor:!0,slidesPerView:"auto",centeredSlides:"auto",navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),window.addEventListener("scroll",()=>{let e=document.querySelector("header");window.scrollY>=50?e.classList.add("header-shadow"):e.classList.remove("header-shadow")});const E=document.querySelectorAll(".section");window.addEventListener("scroll",()=>{E.forEach(e=>{let t=e.offsetTop-50,i=e.offsetHeight,s=e.getAttribute("id"),a=document.querySelector(".header__list a[href *="+s+"]");window.scrollY>=t&&window.scrollY<t+i?a.classList.add("active-link"):a.classList.remove("active-link")})}),window.addEventListener("scroll",()=>{let e=document.getElementById("scrollUp");window.scrollY>=100?e.classList.add("show-scrollUp"):e.classList.remove("show-scrollUp")});const L=document.getElementById("theme-button"),C="dark-theme",x="ri-sun-line",S=localStorage.getItem("selected-theme"),T=localStorage.getItem("selected-icon"),$=()=>document.body.classList.contains(C)?"dark":"light",I=()=>L.classList.contains(x)?"ri-moon-line":"ri-sun-line";S&&(document.body.classList["dark"===S?"add":"remove"](C),L.classList["ri-moon-line"===T?"add":"remove"](x)),L.addEventListener("click",()=>{document.body.classList.toggle(C),L.classList.toggle(x),localStorage.setItem("selected-theme",$()),localStorage.setItem("selected-icon",I())});const q=(0,l.default)({origin:"top",distance:"60px",duration:2500,delay:400,reset:!1});q.reveal(".home__header"),q.reveal(".home__images",{delay:600}),q.reveal(".home__group",{interval:100});const B=document.querySelectorAll(".favorite");document.querySelector(".favorite-number").innerHTML=c.favoriteCart.length,(0,c.activeHeartDefault)(c.favoriteCart),(0,c.makeFavoriteCart)(B);
//# sourceMappingURL=index.a2d91a56.js.map