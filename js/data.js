
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
const formPayment = document.querySelector('.forminput');
const firstName = document.querySelector('.rectangle-53');
const lastName = document.querySelector('.rectangle-532');
const companyName = document.querySelector('.rectangle-54');
const streetAddress = document.querySelector('.rectangle-533');
const zipCode = document.querySelector('.rectangle-534');
const phoneNumber = document.querySelector('.rectangle-536');
const emailAddress = document.querySelector('.rectangle-537');
const town = document.querySelector('.rectangle-535');
const bankTransfer = document.querySelector('#ellipse-12');
const province = document.querySelector('.rectangle-5310');
const directBank = document.querySelector('#ellipse-13');
const displayError = document.querySelector('.small');
const footerForm = document.querySelector('.footer-form');
const smallMsg = document.querySelector('small');
const pageList = document.querySelector('ul');
const rightNav = document.querySelector('.right');
const countryRegion = document.querySelector(".rectangle-539");
const shoppingCart = document.querySelector('.shopping_wrapper')

// NAV LINKS
function fetchNav() {
    let url = ` http://localhost:3000/navUl`;
    fetch(url).then((response) => response.json())
        .then((navs) => {
            let navUlist = '';


            navs.forEach((nav) => {
                let { id, path, title } = nav;
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
        .then((links) => {
            let listDiv = '';

            links.forEach((link) => {
                let { id, path, image, alt, classname } = link;

                listDiv += `
                <div>
                <a href="${path}">
                    <img class="${classname}" src="${image}?id=${id}"  alt="${alt}" />
                </a>
                </div>
                 `


                // rightNav.innerHTML = listDiv;
            });
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

// FORM PAYMENT AND COUNTRY LIST
formPayment.addEventListener('submit', (e) => {
    e.preventDefault()

    if (
        firstName.value.trim() === '' ||
        lastName.value.trim() === '' ||
        countryRegion.value.trim() === '' ||
        companyName.value.trim() === '' ||
        streetAddress.value.trim() === '' ||
        zipCode.value.trim() === '' ||
        town.value.trim() === '' ||
        phoneNumber.value.trim() === '' ||
        emailAddress.value.trim() === '' ||
        province.value.trim() === '' ||
        bankTransfer.value === '' ||
        directBank.value === ''

    ) {

        displayError.textContent = 'Fill the apropriate information';
        setTimeout(function () {
            displayError.style.display = 'none';
            window.location = ' ./checkout.html'
        }, 3000);

    } else {
        displayError.style.color = 'green';
        displayError.textContent = 'successful';
    };

    //    let formInput = new FormData(formPayment);

    //     let formDataObj = Object.fromEntries(formInput);

    localStorage.setItem('payment', JSON.stringify(formPayment));

    fetch(`http://localhost:3000/checkout`, {
        method: 'POST',
        body: JSON.stringify(formPayment),
        headers: { 'content-type': 'application/json' }
    });



});


// COUNTRY LIST

const country = async () => {
    let countriesName = ` http://localhost:3000/countries`;
    try {
        const response = await fetch(countriesName)
        const countryLists = await response.json()
        countries = ''
        countryLists.forEach((list) => {
            let { text, value } = list;
            countries += `
        <option value="${value}">${text}</option>
        `

            countryRegion.innerHTML = countries

        });


    } catch (error) {
        console.log(error)
    }

};
country()

//  FOOTER FORM
footerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.currentTarget.emailaddress.value.trim() === '') {
        smallMsg.textContent = 'Please enter your valid email address';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './checkout.html';
        }, 4000);
    }
    else if (!e.currentTarget.emailaddress.value.trim() === '') {

        smallMsg.textContent = 'email address is not valid';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './checkout.html';
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
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailaddress);
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

};







window.addEventListener('DOMContentLoaded', async () => postlists());
window.addEventListener('DOMContentLoaded', async () => postlists2());
window.addEventListener('DOMContentLoaded', async () => fetchNav());
window.addEventListener('DOMContentLoaded', async () => rightNavLinks());
