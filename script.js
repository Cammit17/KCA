let menuOpenButton = document.querySelector('.menu-opener')
let menuCloseButton = document.querySelector('.menu-closer')
let menu = document.querySelector('.menu-container')
let body = document.querySelector('body')
// menuItems.forEach(el => {
//     el.addEventListener('click', ev => {
//         el.style.background = 'black'
//     })
// });

var tl = gsap.timeline();


//opening menu
menuOpenButton.addEventListener("click", ev =>{
    tl.to('.menu-opener', {duration: .3, scale: 0, display: 'none',ease: "power2.out"})
        .to('.menu-closer', {duration:.3, scale:1, display: 'block',ease: "power2.out"
    })
    if(menu.classList.contains('close')){
        menu.classList.remove('close');
        menu.classList.add('open');
        body.style.overflowY = 'hidden';

        // gsap.from('.menu-container', {duration: .5, y:"100%", ease: "power3.out"});
        gsap.to('.menu-container', {duration:1.2, y:0, ease: "power4.out"})
    }
})


//closing menu
menuCloseButton.addEventListener("click", ev=>{
    tl.to('.menu-closer', {duration: .3, scale: 0, display: 'none', ease: "power2.out"})
        .to('.menu-opener', {duration:.3, scale:1, display:'block', ease: "power2.out"})

    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        menu.classList.add('close');
        body.style.overflowY = 'auto';

        gsap.to('.menu-container', {duration: .7, y:"100%", ease: "power2.out"})
    }    
})


