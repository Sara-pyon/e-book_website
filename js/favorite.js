import { products } from "./bookProducts.js";
import { favoriteCart, removeProduct } from "./FavoriteCart.js";

// ======================== ADD MENU SHADOW =====================
const addShadow = () =>{
    const header = document.querySelector('header');
    window.scrollY >= 50? header.classList.add('header-shadow') : header.classList.remove('header-shadow');
   }
   window. addEventListener('scroll', addShadow);

// ======================== FavoriteCart =====================

const showFavoriteBooks = (newArray) => {
    let favoriteCartHTML = '';
    let favoriteCard = document.getElementById('favorite-cards');
    let favoriteProducts = [];

    if(newArray.length === 0){

        favoriteCard.innerHTML = `
        <div class="favoriteCart__defaultMessage">
                <i class="ri-book-mark-line"></i>
                <span>No Bookmarks</span>
        </div>
        `
    }else if(newArray){
        newArray.forEach(item => {
            products.forEach(product => {
                if(item.id === product.id) favoriteProducts.push(product);
            })
        })

    if(favoriteProducts){
        favoriteProducts.forEach(item => {
            favoriteCartHTML += `
            
            <div class="favoriteCart__card">
                <div class="favoriteCart__img">
                    <img src="${item.image}" alt="images">
                </div>
                <div class="favoriteCart__data">
                    <h3 class="favoriteCart__title">${item.title}</h3>
                    <p class="favoriteCart__price">$${(Math.round(item.priceCents/100)).toFixed(2)}</p>
                    <p class="favoriteCart__discription">
                        A twisting, haunting true-life murder mystery about one of the most monstrous crimes in American history, from the author of The Wager and The Lost City of Z, “one of the preeminent adventure and true-crime writers working today."—New York Magazine • NATIONAL BOOK AWARD FINALIST • NOW A MARTIN SCORSESE PICTURE “A shocking whodunit…What more could fans of true-crime thrillers ask?”—USA Today“A masterful work of literary journalism crafted with the urgency of a mystery.” —The Boston GlobeIn the 1920s, the richest people per capita in the world were members of the Osage Nation in Oklahoma. After oil was discovered beneath their land, the Osage rode in chauffeured automobiles, built mansions, and sent their children to study in Europe.Then, one by one, the Osage began to be killed off. The family of an Osage woman, Mollie Burkhart, became a prime target. One of her relatives was shot. Another was poisoned. And it was just the beginning, as more and more Osage were dying under mysterious circumstances, and many of those who dared to investigate the killings were themselves murdered. As the death toll rose, the newly created FBI took up the case, and the young director, J. Edgar Hoover, turned to a former Texas Ranger named Tom White to try to unravel the mystery. White put together an undercover team, including a Native American agent who infiltrated the region, and together with the Osage began to expose one of the most chilling conspiracies in American history.Look for David Grann’s latest bestselling book, The Wager!
                    </p>
                </div>
                <i class="ri-close-line favoriteCart__close" id=${item.id}></i>
            </div>
            `
        });
        favoriteCard.innerHTML = favoriteCartHTML;
    }}
}

showFavoriteBooks(favoriteCart);


//RemoveProducts
let closeButton = document.querySelectorAll(".favoriteCart__close");

closeButton.forEach(item => {
    item.addEventListener('click', () => {
        const itemId = item.getAttribute('id');
    
        removeProduct(itemId);
        showFavoriteBooks(favoriteCart);
        console.log(itemId);
        closeButton = document.querySelectorAll(".favoriteCart__close");
        upDateCloseButton(closeButton);
})
})

const upDateCloseButton = (closeButton) => {
    closeButton.forEach(item => {
        item.addEventListener('click', () => {
            const itemId = item.getAttribute('id');
        
            removeProduct(itemId);
            showFavoriteBooks(favoriteCart);
            console.log(itemId);
            closeButton = document.querySelectorAll(".favoriteCart__close");
            upDateCloseButton(closeButton);
    })
    })
}

