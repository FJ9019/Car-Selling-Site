/*== Navbar Toggle ==*/
let navBar = document.querySelector('.navlink');
let menuBar = document.querySelector('#menuBtn');

menuBar.onclick = () => {
    navBar.classList.toggle('active');
}