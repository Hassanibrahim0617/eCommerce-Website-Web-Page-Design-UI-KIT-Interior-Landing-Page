
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
const formPayment = document.querySelectorAll('form');
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
footerForm = document.querySelector('.footre-form')

formPayment.forEach(forms => {
    forms.addEventListener('submit', async (e) => {
        try {
            e.preventDefault()
            if (
                firstname.value.trim() === '' ||
                lastname.value.trim() === '' ||
                companyName.value.trim() === '' ||
                streetAddress - address.value.trim() === '' ||
                zipCode.value.trim() === '' ||
                town.value.trim() === '' ||
                phoneNumber.value.trim() === '' ||
                emailAddress.value.trim() === '' ||
                countryRegion.value.trim() === '' ||
                bankTransfer.value === '' ||
                directBank.value === ''
            ) {
                displayError.textContent = 'fill this space';
                console.log(forms)
            } else {
                displayError.textContent = 'click on the place order';
            }
          
            let formData = new FormData(forms);
            let formDataObj = Object.fromEntries(formData);
            localStorage.setItem("input", JSON.stringify(formDataObj));

//             footerForm.addEventListener('submit',(event)=>{
// event.preventDefault()
// console.log(footerForm)
// let footerFormData = new FormData(footerForm);
//             let formDataObj = Object.fromEntries(footerFormData);
//             localStorage.setItem("input", JSON.stringify(formDataObj));
// })

        } catch (error) {
            console.log(error)
        }
    })
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
}

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