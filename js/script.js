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

/*== Counter Section Start ==*/
    let valueDisplay = document.querySelectorAll('.num');
    let interval = 1000;

    valueDisplay.forEach((valueDisplay) => {

        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-value"));

        let duration = Math.floor(interval/endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if(startValue == endValue) {
                clearInterval(counter);         
            }
        }, duration);
    });