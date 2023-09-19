const imageContent = document.querySelector('.heading_image');
const footerForm = document.querySelector('.footer-form');
const smallMsg = document.querySelector('.error');
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
const pageList = document.querySelector('ul');
const rightNav = document.querySelector('.right');
function fetchNav() {
    let url = ` http://localhost:3000/navUl`;
    fetch(url).then((response) => response.json())
    .then((navs) =>{
        let navUlist = '';
       

        navs.forEach((nav) =>{
             let {id, path, title} = nav;
            navUlist += `
       
            <li><a href="${path}?id=${id}">${title}</a></li>
        
        `
        pageList.innerHTML = navUlist;
        })
    });

}

function rightNavLinks() {
    let url = ` http://localhost:3000/navLinks`;
    fetch(url).then((response) => response.json())
    .then((links) =>{
        let listDiv = '';
       

        links.forEach((link) =>{
             let {id, path, image, alt} = link;
            listDiv += `
            <div>
            <a href="${path}">
                <img src="${image}?id=${id}"  alt="${alt}" />
            </a>
            </div>
        `
        rightNav.innerHTML = listDiv;
        })
    });

};
// HEADER STOP//








let singleProduct = new URLSearchParams(window.location.search).get('id')
let baseUrl = `http://localhost:3000/shop/${singleProduct}`
console.log(singleProduct);
//1.



// 2
let fullProductImage=document.querySelector('.fullProduct_details');

async function getimage(){
    baseUrl;
    try {let response = await fetch(baseUrl);
            let data = await response.json()
           
          let { id,image,title,price,discountedPrice,product_detail,
             description:{ product_description1, product_description2},
            Tag,category, rating:{rate,review}}=data;



            let elem = ""
            elem += `
            <div class="fullProduct_image">
            <img  src="${image}" alt="${title}">
        </div>
        <div class="product_details">
            <div class = "product_heading">
                <h1 class="product_name">${title}</h1>
                <h6 class="price">${discountedPrice} <small>${price}</small> </h6>
            </div>

            <div class="product_review">
                <div class="rate">
                    <div>
                        <i class='fa fa-star'></i>
                        <i class='fa fa-star'></i>
                        <i class='fa fa-star'></i>
                        <i class='fa fa-star'></i>
                        <i class='fa fa-star-half' ></i>
                    </div>
                    <span class="reviews"> 5 reviews

                    </span>
                </div>
                <p class="product_description">
                    ${product_detail}

                </p>
                <div class="size">
                    <p>size</p>
                    <button type="submit">L</button>
                    <button type="submit">XL</button>
                    <button type="submit">XS</button>
                </div>
                <div class="color">
                    <p >Color</p>
                    <div class="color_type">
                        <div class=" black"></div>
                        <div class="purple"></div>
                        <div class=" gold"></div>
                
                    </div>
                </div>
                <div class="addToCart">
                    <button class="quantity" type="submit">  -   1   + </button>
                    <button class="cart" type="submit">  Add to Cart</button>
                    <button  class="compare" type="submit">  + Compare </button>
                </div>

                <div class="product_category">
                    <p class="product_code">Sku:SS0${id}</p>
                    <p class="category">Category: ${category}</p>
                    <p class="tag">Tags: ${Tag}</p>
                    <p class="share">Share:
                    </p>
            
            
                </div>
            </div>
        </div>
            

`
            

        fullProductImage.innerHTML = elem;
    } catch (error) {console.log(error);
        
    }
}

window.addEventListener('DOMContentLoaded', getimage())

// let sizebtn = document.querySelectorAll(".size button")

// sizebtn.addEventListener('click', ()=>{
// sizebtn.style.background="gold";
// });



    

// let addToCart = document.querySelector('.addToCart .quantity');
// addToCart.addEventListener('click', ()=>{
//     window.location='./cart.html';
// });

// let compareProduct = document.querySelector('.addToCart .compare');
// addToCart.addEventListener('click', ()=>{
//     window.location='./compare.html';
// });






    // SECTION 2 
// let fullProductNav = document.querySelector('section.additional_Info');

// async function getNav(){
//     let Url = `http://localhost:3000/shop`

//     try {let response = await fetch(Url);
//             let data = await response.json()
//           let { title,
//              description:{ product_description1, product_description2},
//              rating:{rate,review}, showCaseImage:{image1,image2}} = data;



//             let elem = ""
//             elem += `
//             <ul class="detailsNav">
//                     <li>Description</li>
//                     <li>Additional info</li>
//                     <li>reviews</li>
//                 </ul>
//                 <p>${data.description.product_description1}
//                 </p>
//                 <p>${description.product_description2}</p>
//                 <div class="productImage">
//                     <img src="${showCaseImage.image1}" alt="${title}">
//                     <img src="${showCaseImage.image2}" alt="${title}">
//                 </div>

// `
//             console.log(elem);

//         fullProductNav.innerHTML = elem;
//     } catch (error) {console.log(error);
        
//     }
// }

// window.addEventListener('DOMContentLoaded', getNav())








// SECTION 3 OTHER RELATED PRODUCT

const shopPage = document.querySelector('.shopFrame');

      
    const products = async () =>{
        try{
            let productData =`http://localhost:3000/shop/`;
        console.log(productData)
            const response = await fetch(productData);
            const products = await response.json();

                let elem ="";
                 products.forEach((product) => {
                    let {id,image, title, body, price, discountedPrice, newProduct, percentage} = product;
                        
                        
                elem +=` 
                       
                <a href=./singleProduct2.html?id=${id}>
                    <div class="product_card">
                                <div class="product_image">
                                    <img src="${image}" alt="${title}">
                                    <div class="discount">${percentage}</div>
                                    <!--<div class="new">${newProduct}</div>-->
                                <!-- overlay start-->
                            <div class="product-pop-up">
                                <div class="overlay">
                                    <div class="button-container">
                                        <button type="submit">Add to cart
                                    
                                        </button>
                                    </div>
                                    <div class="overlay-frame">
                                        <div class="overlay-icons">
                                            <a href="#">
                                                <i class='fa fa-share-alt'></i>                   
                                                <div class="share">Share</div>
                                            </a>
                                        </div>
                                        <div class="overlay-icons">
                                            <a href="#">
                                                <i class='fa fa-exchange' ></i>

                                    
                                                <div class="compare">Compare</div>
                                            </a>
                                        </div>
                                        <div class="overlay-icons">
                                            <a href="#">
                                                <i class='fa fa-heart-o'></i>
                                                <div class="like">Like</div>
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                                
                                
                                <div class="product_meta">
                                    <h3>${title}</h3>
                                    <h6>${body}</h6>
                                    <h6 class="price">${discountedPrice} <small>${price}</small> </h6>
                                    
                                </div>
                                                
        
                </div>  
                         
                </a>       
                                                     
                    `
                          
                    
                shopPage.innerHTML = elem;
                

                }) 

                              
                }catch(error) {
                    console.log(error)
                }
                  
            
       

    } 

      window.addEventListener('DOMContentLoaded',async () => products())

// FOOTER
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
//   window.addEventListener('DOMContentLoaded', async () => imageDisplay());
 
  
  window.addEventListener('DOMContentLoaded', async () => fetchNav());
  window.addEventListener('DOMContentLoaded', async () => rightNavLinks());
