const imageContent = document.querySelector('.heading_image');



const imageDisplay = async () =>{
  let fetchImage = `http://localhost:3000/headingImages`;
try{
const response = await fetch(fetchImage)
const imageDisplay = await response.json()

let images ='';
imageDisplay.forEach((image) => {
    images += `
         <div class="image_content">
            <img src="${image.image}" alt="${image.title}?id=${image.id}"  />
            <p>${image.body}</p>
          </div>     
    `
    imageContent.innerHTML = images;
   
});

}catch(error){
console.log(error)
}
}



            /*PRODUCT SECTION*/
const productFrame = document.querySelector('#product-wrapper .product-frame');

      
  const products = async () =>{
    try{
        let productData =` http://localhost:3000/ourProduct`;
        
            const response = await fetch(productData);
            const products = await response.json();

                let productsElem ="";
                products.forEach((product) => {
                    let {image, title, body, initialPrice, discountedPrice, newProduct, percentage} = product;
                        
                        
                        productsElem +=` 
                        <div class="product-card">
                          <div class="product-image">
                            <img src="${image}" alt="${title}">
                            <div class="discount">${percentage}</div>
                            <div class="New">${newProduct}</div>
                          </div>  
                          <div class="product-meta"> 
                              
                                <h3>${title}</h3>
                                <h6>${body}</h6>
                                <h6 class="product-price">${discountedPrice}<span class="initial-price">${initialPrice}</span></h6>
                               
                          </div>

                          
                        </div>
                            
                            `
                productFrame.innerHTML = productsElem;
             });

    }catch(error) {
                console.log(error)
    }
              
        
   

}  
const showMore = document.querySelector('.showMore')
   showMore.addEventListener
('click',() => {
  window.location ='./shop.html'
});

window.addEventListener('DOMContentLoaded', async () => imageDisplay())
window.addEventListener('DOMContentLoaded',async () => products())
