const menu = document.querySelector('.#menu');
const nav = document.querySelector('nav');

menu.addEventListener('click', () => {
    console.log("was called");
    nav.classList.remove('hide-element');
})