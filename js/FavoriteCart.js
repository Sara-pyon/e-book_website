export let favoriteCart = JSON.parse(localStorage.getItem('favorite-cart')) || [];

export const activeHeartDefault = (favoriteCart) => {
    const liked = 'ri-heart-3-fill',
          unliked = 'ri-heart-3-line';
    if(favoriteCart){
        favoriteCart.forEach(item => {
            const itemClass = document.getElementById(item.id);
            itemClass.classList.remove(unliked);
            itemClass.classList.add(liked);
        })
    }
}

//Favorite Number


//Active heart
export const activeHeart = (array,newarray) => {
    const liked = 'ri-heart-3-fill',
          unliked = 'ri-heart-3-line';

    array.forEach(item => {
        const arrayId = item.id,
              arrayClass = document.getElementById(arrayId);
        arrayClass.classList.remove(liked);
        arrayClass.classList.add(unliked);
    })

    newarray.forEach(item => {
        const arrayId = item.id,
              arrayClass = document.getElementById(arrayId);
        arrayClass.classList.remove(unliked);
        arrayClass.classList.add(liked);
    })
    
}

//add and remove item from favariteCart

export const makeFavoriteCart = (Button) => {
    Button.forEach(item => {
        item.addEventListener('click', () => {
            const Id = item.getAttribute('id'),
                  Class = document.getElementById(Id);
            let newFavoriteCart = [];
            
        
            if(favoriteCart){
                favoriteCart.forEach(list => {
                    if(list.id !== Id) newFavoriteCart.push({id: list.id})
                })
            }
            if(favoriteCart.length === newFavoriteCart.length) newFavoriteCart.push({id: Id});
    
            activeHeart(favoriteCart,newFavoriteCart);
    
            favoriteCart = newFavoriteCart;
    
            document.querySelector('.favorite-number').innerHTML = favoriteCart.length;
            localStorage.setItem('favorite-cart',JSON.stringify(favoriteCart));
        })
        
    })
}

//remove from favoriteCart
export const removeProduct = (closeProductId) =>{
    let newFavoriteCart = [];
    favoriteCart.forEach(item => {
        if(item.id !== closeProductId) newFavoriteCart.push({id: item.id});
    })

    favoriteCart = newFavoriteCart;
    localStorage.setItem('favorite-cart',JSON.stringify(favoriteCart));
}