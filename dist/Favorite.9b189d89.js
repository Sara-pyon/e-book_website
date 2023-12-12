function e(e,t,i,r){Object.defineProperty(e,t,{get:i,set:r,enumerable:!0,configurable:!0})}var t=globalThis,i={},r={},o=t.parcelRequire4c6f;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return i[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire4c6f=o);var a=o.register;a("5fEqa",function(t,i){e(t.exports,"products",()=>r);let r=[{id:"3iy5peu",image:"images/book-1.png",title:"The Lord Of The King",rating:{stars:4,count:230},priceCents:1090},{id:"u53txii",image:"images/book-2.png",title:"Simple & Minimalist",rating:{stars:4.5,count:190},priceCents:2090},{id:"3f67bi5z",image:"images/book-3.png",title:"Muted color posted template",rating:{stars:2,count:80},priceCents:1240},{id:"qfseoft",image:"images/book-4.png",title:"Poring Dreams",rating:{stars:4.5,count:450},priceCents:3060},{id:"2j4sgwa",image:"images/book-5.png",title:"Customize Your Autumn Clothes",rating:{stars:3.5,count:130},priceCents:1e3},{id:"pmamsvo",image:"images/book-6.png",title:"Designed For Work",rating:{stars:2.9,count:8},priceCents:1e3,discount:.2},{id:"nj4yddm",image:"images/book-7.png",title:"Plant Tree For The Future",rating:{stars:3,count:180},priceCents:2030},{id:"i24sz6w",image:"images/book-8.png",title:"Modern Abstract Poster",rating:{stars:4.5,count:1030},priceCents:3020},{id:"kmmx5ix",image:"images/book-9.png",title:"Bird Park",rating:{stars:5,count:2040},priceCents:3500},{id:"9gsxgkh",image:"images/book-10.png",title:"Memories of The Sword",rating:{stars:2.5,count:30},priceCents:2800},{id:"u37wcro",image:"images/discount-book-1.png",title:"Idea For Interior",rating:{stars:4.5,count:1900},priceCents:1499,discount:.2},{id:"nin79fw",image:"images/discount-book-2.png",title:"Classic Blue",rating:{stars:4.5,count:140},priceCents:1200,discount:.2},{id:"33bmic9",image:"images/home-book-1.png",title:"Diana & Jack",rating:{stars:5,count:30},priceCents:2800,position:"home"},{id:"9ip9mkk",image:"images/home-book-2.png",title:"Christmas has come",rating:{stars:5,count:30},priceCents:2800,position:"home"},{id:"vsqhcfy",image:"images/home-book-3.png",title:"True & Tony",rating:{stars:5,count:30},priceCents:2800,position:"home",discount:.2},{id:"d9auhde",image:"images/home-book-4.png",title:"Celtic Tales",rating:{stars:5,count:30},priceCents:2800,position:"home"}]}),a("iqUot",function(t,i){e(t.exports,"favoriteCart",()=>r),e(t.exports,"activeHeartDefault",()=>o),e(t.exports,"makeFavoriteCart",()=>s),e(t.exports,"removeProduct",()=>n);let r=JSON.parse(localStorage.getItem("favorite-cart"))||[],o=e=>{e&&e.forEach(e=>{let t=document.getElementById(e.id);t.classList.remove("ri-heart-3-line"),t.classList.add("ri-heart-3-fill")})},a=(e,t)=>{let i="ri-heart-3-fill",r="ri-heart-3-line";e.forEach(e=>{let t=e.id,o=document.getElementById(t);o.classList.remove(i),o.classList.add(r)}),t.forEach(e=>{let t=e.id,o=document.getElementById(t);o.classList.remove(r),o.classList.add(i)})},s=e=>{e.forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("id");document.getElementById(t);let i=[];r&&r.forEach(e=>{e.id!==t&&i.push({id:e.id})}),r.length===i.length&&i.push({id:t}),a(r,i),r=i,document.querySelector(".favorite-number").innerHTML=r.length,localStorage.setItem("favorite-cart",JSON.stringify(r))})})},n=e=>{let t=[];r.forEach(i=>{i.id!==e&&t.push({id:i.id})}),r=t,localStorage.setItem("favorite-cart",JSON.stringify(r))}});var s=o("5fEqa"),n=o("iqUot");window.addEventListener("scroll",()=>{let e=document.querySelector("header");window.scrollY>=50?e.classList.add("header-shadow"):e.classList.remove("header-shadow")});const c=e=>{let t="",i=document.getElementById("favorite-cards"),r=[];0===e.length?i.innerHTML=`
        <div class="favoriteCart__defaultMessage">
                <i class="ri-book-mark-line"></i>
                <span>No Bookmarks</span>
        </div>
        `:e&&(e.forEach(e=>{(0,s.products).forEach(t=>{e.id===t.id&&r.push(t)})}),r&&(r.forEach(e=>{t+=`
            
            <div class="favoriteCart__card">
                <div class="favoriteCart__img">
                    <img src="${e.image}" alt="images">
                </div>
                <div class="favoriteCart__data">
                    <h3 class="favoriteCart__title">${e.title}</h3>
                    <p class="favoriteCart__price">$${Math.round(e.priceCents/100).toFixed(2)}</p>
                    <p class="favoriteCart__discription">
                        A twisting, haunting true-life murder mystery about one of the most monstrous crimes in American history, from the author of The Wager and The Lost City of Z, \u{201C}one of the preeminent adventure and true-crime writers working today."\u{2014}New York Magazine \u{2022} NATIONAL BOOK AWARD FINALIST \u{2022} NOW A MARTIN SCORSESE PICTURE \u{201C}A shocking whodunit\u{2026}What more could fans of true-crime thrillers ask?\u{201D}\u{2014}USA Today\u{201C}A masterful work of literary journalism crafted with the urgency of a mystery.\u{201D} \u{2014}The Boston GlobeIn the 1920s, the richest people per capita in the world were members of the Osage Nation in Oklahoma. After oil was discovered beneath their land, the Osage rode in chauffeured automobiles, built mansions, and sent their children to study in Europe.Then, one by one, the Osage began to be killed off. The family of an Osage woman, Mollie Burkhart, became a prime target. One of her relatives was shot. Another was poisoned. And it was just the beginning, as more and more Osage were dying under mysterious circumstances, and many of those who dared to investigate the killings were themselves murdered. As the death toll rose, the newly created FBI took up the case, and the young director, J. Edgar Hoover, turned to a former Texas Ranger named Tom White to try to unravel the mystery. White put together an undercover team, including a Native American agent who infiltrated the region, and together with the Osage began to expose one of the most chilling conspiracies in American history.Look for David Grann\u{2019}s latest bestselling book, The Wager!
                    </p>
                </div>
                <i class="ri-close-line favoriteCart__close" id=${e.id}></i>
            </div>
            `}),i.innerHTML=t))};c(n.favoriteCart);let l=document.querySelectorAll(".favoriteCart__close");l.forEach(e=>{e.addEventListener("click",()=>{let t=e.getAttribute("id");(0,n.removeProduct)(t),c(n.favoriteCart),console.log(t),d(l=document.querySelectorAll(".favoriteCart__close"))})});const d=e=>{e.forEach(t=>{t.addEventListener("click",()=>{let i=t.getAttribute("id");(0,n.removeProduct)(i),c(n.favoriteCart),console.log(i),d(e=document.querySelectorAll(".favoriteCart__close"))})})};
//# sourceMappingURL=Favorite.9b189d89.js.map
