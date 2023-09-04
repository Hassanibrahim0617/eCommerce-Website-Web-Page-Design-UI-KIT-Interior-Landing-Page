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



// PRODUCT
// let productsElem = '';
// products.forEach((product)=>{
//     productsElem +=`
    
//     `
// })



window.addEventListener('DOMContentLoaded', async () => imageDisplay())
