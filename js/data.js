
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
const formPayment = document.querySelector('forminput');
const countryRegion = document.querySelector(".rectangle-539")
const firstname = document.querySelector('.rectangle-53');
const lastname = document.querySelector('.rectangle-532');
const companyName = document.querySelector('.rectangle-54');
const streetAddress = document.querySelector('.rectangle-533');
const zipCode = document.querySelector('.rectangle-534');
const phoneNumber = document.querySelector('.rectangle-536');
const emailAddress = document.querySelector('.rectangle-537');
const town = document.querySelector('.rectangle-535');
const bankTransfer = document.querySelector('#ellipse-12');
const directBank = document.querySelector('#ellipse-13');
const displayError = ''
const footerForm = document.querySelector('.footer-form');
const smallMsg = document.querySelector('small');


    formPayment.addEventListener('submit', (e) => {
        try {
            e.preventDefault()
            if (
                e.currentTarget.firstname.value.trim() === '' ||
                e.currentTarget.lastname.value.trim() === '' ||
                e.currentTarget.companyName.value.trim() === '' ||
                e.currentTarget.streetAddress - address.value.trim() === '' ||
                e.currentTarget.zipCode.value.trim() === '' ||
                e.currentTarget.town.value.trim() === '' ||
                e.currentTarget.phoneNumber.value.trim() === '' ||
                e.currentTarget.emailAddress.value.trim() === '' ||
                e.currentTarget.countryRegion.value.trim() === '' ||
                e.currentTarget.bankTransfer.value === '' ||
                e.currentTarget.directBank.value === ''
            ) {

                displayError.textContent = 'fill this space';
                
            } else {
                displayError.textContent = 'click on the place order';
            }
          
            let formData = new FormData(formPayment);
            let formDataObj = Object.fromEntries(formData);
            localStorage.setItem("input", JSON.stringify(formDataObj));

        } catch (error) {
            console.log(error)
        };
    });

let countriesName = ` http://localhost:3000/countries`
const country = async () => {
    try {
        const response = await fetch(countriesName)
        const country = await response.json()
        countries = ''
        countries += `
         for (var i = 0; i < country.length; i++) {
            country[i].image = 'https://www.countryflags.io/' + country[i].value.toLowerCase() + '/shiny/24.png';
        }
        `

        countryRegion.innerHTML = countries
        console.log(countries)

    } catch (error) {
        console.log(error)
    }
};

//  FOOTER FORM
footerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.currentTarget.emailaddress.value.trim() === '') {
        smallMsg.textContent = 'Please enter your valid email address';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './contact.html';
        }, 3000);
    }
    else if (!e.currentTarget.emailaddress.value.trim() === '') {

        smallMsg.textContent = 'email address is not valid';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './contact.html';
        }, 3000);
    } else {
        smallMsg.style.color = 'green';
        smallMsg.textContent = 'succes!';

    };

    let footerEmail = new FormData(footerForm);
    let subscribeMail = Object.fromEntries(footerEmail);
    localStorage.setItem('mail', JSON.stringify(subscribeMail));
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



window.addEventListener('DOMContentLoaded', async () => postlists())
window.addEventListener('DOMContentLoaded', async () => postlists2())