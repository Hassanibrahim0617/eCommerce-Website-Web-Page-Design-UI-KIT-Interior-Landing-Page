const imageContent = document.querySelector('.heading_image');
const productFrame = document.querySelector('#product-wrapper .product-frame');
const footerForm = document.querySelector('.footer-form');
const smallMsg = document.querySelector('.error');
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
console.log(smallMsg)

const imageDisplay = async () => {
  let fetchImage = `http://localhost:3000/headingImages`;
  try {
    const response = await fetch(fetchImage)
    const imageDisplay = await response.json()

    let images = '';
    imageDisplay.forEach((image) => {
      images += `
         <div class="image_content">
            <img src="${image.image}" alt="${image.title}?id=${image.id}"  />
            <p>${image.body}</p>
          </div>     
    `
      imageContent.innerHTML = images;

    });

  } catch (error) {
    console.log(error)
  }
}


// PRODUCT SECTION



const products = async () => {
  try {
    let productData = ` http://localhost:3000/ourProduct`;

    const response = await fetch(productData);
    const products = await response.json();

    let productsElem = "";
    products.forEach((product) => {
      let { image, title, body, initialPrice, discountedPrice, newProduct, percentage } = product;


      productsElem += ` 
            <div class="product-card">
                   <div class="product-image">
                          <img src="${image}" id="image" alt="${title}">
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



  } catch (error) {
    console.log(error)
  }




}
const showMore = document.querySelector('.showMore')
showMore.addEventListener
  ('click', () => {
    // window.location = './shop.html'
  });



  // FURNIRO FORNITURE SHOWROOM AND

  const furnitureShowroom = document.querySelector('.images');
 

  furniturepPosts = async () => {
    let furnitureUrl = `http://localhost:3000/displayFurniture`
    try{
      const response = await fetch(furnitureUrl)
      const furniturepPosts = await response.json()

      let elemDiv = ''
      furniturepPosts.forEach((furniture) =>{
        let {id, image} = furniture;
        elemDiv += `
        
           <img class="" src="${image}?id=${id}" />
        
        `
        // furnitureShowroom.innerHTML = elemDiv;
        
      })
    }catch(error){
      console.log(error)
    };
  };

//  FOOTER FORM
footerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (e.currentTarget.emailaddress.value.trim() === '') {
      smallMsg.textContent = 'Please enter your valid email address';
      setTimeout(function () {
          smallMsg.style.display = 'none';
          window.location = './index.html';
      }, 4000);
  }
  else if (!e.currentTarget.emailaddress.value.trim() === '') {

      smallMsg.textContent = 'email address is not valid';
      setTimeout(function () {
          smallMsg.style.display = 'none';
          window.location = './index.html';
      }, 3000);
  } else {
      smallMsg.style.color = 'green';
      smallMsg.textContent = 'success!';

  };

  let footerEmail = new FormData(footerForm);
  let subscribeMail = Object.fromEntries(footerEmail);
  localStorage.setItem('mail', JSON.stringify(subscribeMail));

  fetch(`http://localhost:3000/subscribeMail`, {
      method: 'POST',
      body: JSON.stringify(subscribeMail),
      headers: { 'content-type': 'application/json' }
  });
});

function isValidMail(emailaddress) {
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailaddress);
};


// FOOTER LI 1

let footer1 = 'http://localhost:3000/footerLi';

const postlists = async () => {
  try {
      const response = await fetch(footer1)
      const postlists = await response.json()

      let footerLi = ``
      postlists.forEach((list) => {
          let { id, title, source } = list;
          footerLi += `
      <li class="links"><a href="${source}?id=${id}">${title}</a></li>
      `
          footerGroup24.innerHTML = footerLi;

      });
  } catch (error) {
      console.log(error)
  }

}



// FOOTER LI 2
let footer2 = `http://localhost:3000/footerLi2`;

const postlists2 = async () => {

  try {
      const response = await fetch(footer2)
      const postlists2 = await response.json()

      let footerList = ``
      postlists2.forEach((list2) => {
          let { id, title, source } = list2;
          footerList += `
      <li class="links"><a href="${source}?id=${id}">${title}</a></li>
      `

          footerGroup25.innerHTML = footerList;

      });
  } catch (error) {
      console.log(error)
  }

}



window.addEventListener('DOMContentLoaded', async () => postlists());
window.addEventListener('DOMContentLoaded', async () => postlists2());
window.addEventListener('DOMContentLoaded', async () => imageDisplay());
window.addEventListener('DOMContentLoaded', async () => products());
window.addEventListener('DOMContentLoaded', async () => furniturepPosts());