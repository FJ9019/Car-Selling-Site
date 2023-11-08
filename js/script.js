/*== Navbar Toggle ==*/
let navBar = document.querySelector('.navlink');
let menuBar = document.querySelector('#menuBtn');

menuBar.onclick = () => {
    navBar.classList.toggle('active');
}


/*== Scroll Section And Sticky Navbar ==*/
window.onscroll = () => {
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

}

/*== Swiper JS ==*/
    var swiper = new Swiper(".myHome", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });