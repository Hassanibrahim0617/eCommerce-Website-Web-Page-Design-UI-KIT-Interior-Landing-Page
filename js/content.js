const backButton = document.querySelector('#Back');
const singleblog = new URLSearchParams(window.location.search).get('id')

let url = `http://localhost:3000/blog/${singleblog}`