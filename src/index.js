import { headingImages } from "./link";
import { products } from "./link";
console.log(products)
const imageContent = document.querySelector('.heading_image');


let images ='';
headingImages.forEach((image) => {
    images += `
         <div class="image_content">
            <img src="${image.image}" alt="${image.title}"  />
            <p>${image.body}</p>
          </div>     
    `
    imageContent.innerHTML = images;
   
});

// PRODUCT
let productsElem = '';
products.forEach((product)=>{
    productsElem +=`
    
    `
})

