const searchImage = document.querySelector('.searchimage');
const leftContainer = document.querySelector(".leftcontainer");
const rightCat = document.querySelector('.rightcatalog');
const footerGroup24 = document.querySelector('.group-24');
const footerGroup25 = document.querySelector('.group-25');
const rightPost = document.querySelector(".rightposts");
const button1 = document.querySelector('.one');
const button2 = document.querySelector('.two');
const button3 = document.querySelector('.three');
const buttonNext = document.querySelector('.next');
const footerForm = document.querySelector('.footer-form');
const smallMsg = document.querySelector('small');
const pageList = document.querySelector('ul');
const rightNav = document.querySelector('.right');


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
                let { id, path, image, alt } = link;
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

  function searchNav() {
    const searchIconBtn = document.querySelector('.icon-search');
    const closeIconBtn = document.querySelector('.fa-solid');
    const searchInput = document.querySelector('.search_modal');
   
    searchIconBtn.addEventListener('click', (e) => {
      e.stopPropagation();
     
      searchInput.classList.add('createmodal')
      searchInput.style.display = 'block';
     
    });
  
    // CLOSE BUTTON 
    closeIconBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      searchInput.classList.remove('createmodal')
      searchInput.style.display = 'none';
    });
  
  };
  searchNav();
  

// BLOGS
const blogContentWrapper = async (term) => {
    let blogData = `http://localhost:3000/blog`;
    
    if(term){
         blogData += `/category/${term}`;
    }
 
    try {
        
        const response = await fetch(blogData)
        const blogContentWrapper = await response.json()

        let elem = ''
        blogContentWrapper.forEach((blog) => {
            let { id, title, body, link, image, category: { portfolio, store }, date: { calender, availability }, personel: { name, statute } } = blog;

            elem += `
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
                        <a href="${link}?id=${id}">Read more</a>
                    </div>
                </div>
            `
            leftContainer.innerHTML = elem;

            button1.addEventListener('click', () => {
                window.location = './blog.html';
            })
            button2.addEventListener('click', () => {
                window.location = './blog2.html';
            })
            button3.addEventListener('click', () => {
                window.location = './blog3.html';
            })
            buttonNext.addEventListener('click', () => {
                window.location = './blognext.html';
            })

        })
    } catch (error) {
        console.log(error)
    };
};

// SEARCH BAR
searchImage.addEventListener("submit", async (e) => {
    e.preventDefault();
     const term  = e.currentTarget.search.value;
     
     search(term);
 });

 const search = async (term) => {
    let searchFind  = `http://localhost:3000/blog`;
    let searchbar = document.querySelector('#search')
    if (term) {
      searchFind += `/category/${term}`;
      window.style.display = 'block';
    }
    try {
        const response = await fetch(searchFind)
        const searchLists = await response.json()
        searchPage = ''
        searchLists.forEach((list) => {
            let {id , category:{store, portfolio} } = list;
            searchPage += `
        <option value="${id}">${store}</option>
        `
  
            // searchbar.innerHTML = searchPage
  
        });
  
  
    } catch (error) {
        console.log(error)
    }
  
  };
  search()

const catalogs = async () => {
    let catalogData = `http://localhost:3000/categories`
   
    try {
        
        const response = await fetch(catalogData)
        const catalogs = await response.json()

        let div = ''
        catalogs.forEach((catalog) => {
            let { id, title, number } = catalog;

            div += `
             
        <div>
             <p class="letter">${title}</p>
             <p class="number">${number}</p>
         </div>
            `
            rightCat.innerHTML = div;

        })
    } catch (error) {
        console.log(error)
    };
};




const posts = async () => {
    try {
        let postData = ` http://localhost:3000/postsData`
        const response = await fetch(postData)
        const posts = await response.json()

        let container = ''
        posts.forEach((post) => {
            let { id, title, image, span } = post;

            container += `
            <div class="post">
                        <img src="${image}?id=${id}"
                            alt="${title}">
                        <div class="title">
                            <h6>
                            ${title} 
                            </h6>
                            <p>
                               ${span}
                            </p>
                        </div>
                    </div>
            `

            rightPost.innerHTML = container;

        })
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
            window.location = './blog.html'
        }, 3000);
    }
    else if (!e.currentTarget.emailaddress.value.trim() === '') {

        smallMsg.textContent = 'email address is not valid';
        setTimeout(function () {
            smallMsg.style.display = 'none';
            window.location = './blog.html'
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


window.addEventListener('DOMContentLoaded', async () => postlists());
window.addEventListener('DOMContentLoaded', async () => postlists2());
window.addEventListener('DOMContentLoaded', async () => blogContentWrapper());
window.addEventListener('DOMContentLoaded', async () => catalogs());
window.addEventListener('DOMContentLoaded', async () => posts());
window.addEventListener('DOMContentLoaded', async () => fetchNav());
window.addEventListener('DOMContentLoaded', async () => rightNavLinks());