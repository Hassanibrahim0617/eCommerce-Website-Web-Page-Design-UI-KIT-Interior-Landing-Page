const shopPage = document.querySelector('.shopFrame');
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
const footerForm = document.querySelector('.footer-form');
const smallMsg = document.querySelector('small');
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
        // rightNav.innerHTML = listDiv;
        })
    });

};
 

function cart() {
    const shopCart = document.querySelector('.shop-cart');
    const closeCart = document.querySelector('.shopping_heading button');
    const shoppingCart = document.querySelector('.shopping_wrapper');
   
    shopCart.addEventListener('click', (e) => {
        e.stopPropagation();
        shoppingCart.classList.add('create')
        shoppingCart.classList.contains('create')
      
    });
  
    //  CLOSE ICON
    closeCart.addEventListener('click', (e) => {
        e.stopPropagation();
        shoppingCart.classList.remove('create')
    });
  
    const cartBtn = document.querySelector('.cartbtn');
    cartBtn.addEventListener('click', () => {
        window.location = './cart.html';
    });
  
    const checkoutBtn = document.querySelector('.checkoutbtn');
    checkoutBtn.addEventListener('click', () => {
        window.location = './checkout.html';
    });
  
    const comparisonBtn = document.querySelector('.comparisonbtn');
    comparisonBtn.addEventListener('click', () => {
        window.location = './compare.html';
    });
  };
  cart()

// FOOTER FORM
footerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.currentTarget.emailaddress.value.trim() === '') {
        smallMsg.textContent = 'Please enter your valid email address';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './cart.html'
        }, 3000);
    }
    else if (!e.currentTarget.emailaddress.value.trim() === '') {

        smallMsg.textContent = 'email address is not valid';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './cart.html'
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
    };

};





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
    };

};



// PRODUCT
const products = async () => {
    try {
        let productData = `http://localhost:3000/shop`;

        const response = await fetch(productData);
        const products = await response.json();

        let elem = "";
        products.forEach((product) => {
            let { id, image, title, body, price, discountedPrice, newProduct, percentage } = product;


            elem += ` 
                       

                        <div class="product_card">
                            <div class="product_image">
                                <img src="${image}" alt="${title}">
                                <div class="discount">${percentage}</div>
                                <!--<div class="new">${newProduct}</div>-->

                            </div>
                            <div class="product_meta">
                                <h3>${title}</h3>
                                <h6>${body}</h6>
                                <h6 class="price">${discountedPrice} <small>${price}</small> </h6>
                                
                            </div>
                                            
    
                        </div>  
                         
                       
                                                     
                    `


            shopPage.innerHTML = elem;


        });
        shopPage.addEventListener('click', () =>{
            window.location = './singleshop.html';
        })

    } catch (error) {
        console.log(error)
    }




};

window.addEventListener('DOMContentLoaded', async () => products());
window.addEventListener('DOMContentLoaded', async () => postlists());
window.addEventListener('DOMContentLoaded', async () => postlists2());
window.addEventListener('DOMContentLoaded', async () => fetchNav());
window.addEventListener('DOMContentLoaded', async () => rightNavLinks());