
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
const formPayment = document.querySelectorAll('form');
const countryRegion = document.querySelector(".rectangle-539")

formPayment.forEach(forms => {
    forms.addEventListener('submit', async (e) => {
        try {
            e.preventDefault()
localStorage.setItem('user', JSON.stringify(formPayment))
            
            // for (var i = 0; i < countries.length; i++) {
            //     // countries[i].image = 'https://www.countryflags.io/' + countries[i].value.toLowerCase() + '/shiny/24.png';
            // }
            // console.log(countries)
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

        let inputCountry = ''
        inputCountry += `
        `

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
            console.log(footer1)
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
        console.log(postlists2)
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