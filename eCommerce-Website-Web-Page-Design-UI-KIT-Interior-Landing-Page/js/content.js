const backButton = document.querySelector('#Back');
const singleblog = new URLSearchParams(window.location.search).get('id');
const blogContent = document.querySelector('.blogcontent');
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
const footerForm = document.querySelector('.footer-form');
const smallMsg = document.querySelector('small');

let url = `http://localhost:3000/blog/${singleblog}`;

fetch(url).then(function (response) {
    return response.json()
 }).then(function (blog) {
    let elemDiv = '';
    let {id, title, body,  image, category:{portfolio, store}, date:{calender, availability}, personel:{name, statute}} = blog;
           
    elemDiv += `
        <div class="blogcontainer">
            <img class="blog-img"
                src="${image}"
                alt="${title}">
            <div class="leftsmall">
                <small>
                    <img src="${statute}"
                        alt="${name}">
                        ${name}
                </small>
                <small>
                    <img src="${calender}"
                        alt="${availability}">
                        ${availability}
                </small>
                <small>
                    <img src="${portfolio}"
                        alt="${store}">
                        ${store}
                </small>
            </div>
            <div class="leftbody">
                <h1>
                    ${title}
                </h1>
                <p>
                ${body}
                </p>
                
            </div>
        </div>
    `

    blogContent.innerHTML = elemDiv;

    backButton.addEventListener('click', () =>{
        window.location = './blog.html';
    });

 }).catch((error)=>console.log(error));

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


// FOOTER FORM
footerForm.addEventListener('submit', (e) => {
    e.preventDefault()
    if (e.currentTarget.emailaddress.value.trim() === '') {
        smallMsg.textContent = 'Please enter your valid email address';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './blogcontent.html'
        }, 3000);
    }
    else if (!e.currentTarget.emailaddress.value.trim() === '') {

        smallMsg.textContent = 'email address is not valid';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './blogcontent.html'
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


window.addEventListener('DOMContentLoaded', async () => postlists());
window.addEventListener('DOMContentLoaded', async () => postlists2());