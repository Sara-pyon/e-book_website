export const makingStars = (star) =>{
    let stars = ['<i class="ri-star-s-line"></i>',
                 '<i class="ri-star-s-line"></i>',
                 '<i class="ri-star-s-line"></i>',
                 '<i class="ri-star-s-line"></i>',
                 '<i class="ri-star-s-line"></i>']
    
    let starHTML =''

    for(let i= 0; i< Math.trunc(star); i++ ){
        stars[i] = '<i class="ri-star-s-fill"></i>'
    }
    if(Math.floor(star) === 0.5) stars[Math.trunc(star)] = '<i class="ri-star-half-fill"></i>';

    stars.forEach(item => starHTML += item)
    return starHTML
}