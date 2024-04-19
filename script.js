/*============================================toggle icon navbar================================================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');

}
/*============================================Scroll section active link================================================*/

let sections = document.querySelectorAll('section');
let sectionnavLinks = document.querySelectorAll('header nav a');

windows.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + '').classList.add('active');
            })
        }
    })

    /*============================================Sticky Navbar================================================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    /*============================================Remove toggle icon and navbar================================================*/
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
  /*============================================Scroll reveal================================================*/
  ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
    });
g
    ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'buttom' })
    ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-contact p, about-content', { origin: 'right' });

    /*============================================Circle JS================================================*/
    // const circles = document.querySelectorAll('.circle');
    // circles.forEach(elem=>{
    //     var dots = elem.getAttribute("data-dots");
    //     var marked = elem.getAttribute("data-percent");
    //     var percent = Math.floor(dots*marked/100);
    //     var points = "";
    //     var rotate = 360 / dots;


    //     for(let i = 0; i < dots ; i++){
    //     points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
    //     }
    //     elem.innerHTML = points;
    // })
