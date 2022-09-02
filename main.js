

// INTERSECTION OBSERVER
var headerTl = gsap.timeline();
var projectCardTl = gsap.timeline();
var experienceCardTl = gsap.timeline();
var skillsTextTl = gsap.timeline();
var skillsCardTl = gsap.timeline();
var contactFormTl = gsap.timeline();
var aboutMeTl = gsap.timeline();

var mediaQuery = window.matchMedia("(max-width: 743px)");

// INTERSECTION OBSERVER FOR HEADERS

const headerAnimations = document.querySelectorAll('.header-animation');
const projectCardAnimations = document.querySelectorAll('.project-card-animation');
const projectCardAirplanePaths = document.querySelectorAll('.st3');
const experienceCardAnimations = document.querySelectorAll('.experience-card-animation');
const skillsTextAnimations = document.querySelectorAll('.skills-text-animation');
const skillsCardAnimations = document.querySelectorAll('.skills-card-animation');
const contactFormAnimations = document.querySelectorAll('.contact-form-animation');
const aboutMeAnimations = document.querySelectorAll('.about-me-animation');

headerAnimations.forEach(header => {
    header.style.opacity = 0;
})

projectCardAnimations.forEach(card => {
    card.style.opacity = 0;
})

projectCardAirplanePaths.forEach(path => {
    path.style.opacity = 0;
})

experienceCardAnimations.forEach(card => {
    card.style.opacity = 0;
})

skillsTextAnimations.forEach(text => {
    text.style.opacity = 0;
})

skillsCardAnimations.forEach(card => {
    card.style.opacity = 0;
})

aboutMeAnimations.forEach(section => {
    section.style.opacity = 0;
})

// INTERSECTION OBSERVERS

const headerObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            headerTl.fromTo(entry.target, {opacity: 0, y: -50}, {opacity: 1, duration: .5, y: 0});
            headerObserver.unobserve(entry.target)
        }
    })
}, 
    {
    threshold: .5,
    })

const projectCardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            projectCardTl.fromTo(entry.target, {opacity: 0, y: 100}, {opacity: 1, duration: .6, y: 0, stagger: .2});
            projectCardObserver.unobserve(entry.target)
        }
    })
}, 
    {
    threshold: 0,
    })


const experienceCardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            experienceCardTl.fromTo(entry.target, {opacity: 0, x: -50}, {opacity: 1, duration: .6, x: 0, stagger: .2});
            experienceCardObserver.unobserve(entry.target)
        }
    })
}, 
    {
    threshold: .25,
    })

const skillsTextObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            skillsTextTl.fromTo(entry.target, {opacity: 0, y: 50}, {opacity: 1, duration: .6, y: 0, stagger: .2});
            skillsTextObserver.unobserve(entry.target)
        }
    })
}, 
    {
    threshold: 1,
    })

const skillsCardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            skillsCardTl.fromTo(entry.target, {opacity: 0, y: 50}, {opacity: 1, duration: .6, y: 0, stagger: .2});
            skillsCardObserver.unobserve(entry.target)
        }
    })
}, 
    {
    threshold: .5,
    })

const contactFormObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            contactFormTl.fromTo(entry.target, {opacity: 0, y: 50}, {opacity: 1, duration: 1, y: 0, stagger: .2, ease: Bounce.easeOut});
            contactFormObserver.unobserve(entry.target)
        }
    })
}, 
    {
    threshold: 1,
    })

const aboutMeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            aboutMeTl.fromTo(entry.target, {opacity: 0, y: 50}, {opacity: 1, duration: 1, y: 0, stagger: .2});
            aboutMeObserver.unobserve(entry.target)
        }
    })
}, 
    {
    threshold: 1,
    })

// OBSERVING

headerAnimations.forEach(header => {
    headerObserver.observe(header);
})

projectCardAnimations.forEach(card => {
    projectCardObserver.observe(card);
})

experienceCardAnimations.forEach(card => {
    experienceCardObserver.observe(card);
})

skillsTextAnimations.forEach(text => {
    skillsTextObserver.observe(text);
})

skillsCardAnimations.forEach(text => {
    skillsCardObserver.observe(text);
})

contactFormAnimations.forEach(el => {
    contactFormObserver.observe(el);
})

aboutMeAnimations.forEach(el => {
    contactFormObserver.observe(el);
})

// contactFormObserver.observe(contactFormAnimation);

// MEDIA QUERIES

let projectCardContainer = document.querySelectorAll('.project-card-container');

// if(mediaQuery.matches) {
//     projectCardObserver.disconnect();
//     projectCardAnimations.forEach(card => {
//         card.style.opacity = '1';
//     })
// }

// GSAP ANIMATION

var headerTl = gsap.timeline();

gsap.fromTo("#logo", {opacity: 0, y: -50}, {opacity: 1, duration: 1, y: 0});
gsap.fromTo(".nav-link", {opacity: 0, y: -50}, {opacity: 1, duration: 1, y: 0});

gsap.fromTo('.st3', {opacity: 0}, {opacity: 1, stagger: .2, duration: 2});



headerTl.fromTo(".hero-image-text", {opacity: 0, y: 100}, {opacity: 1, duration: 1, y: 0});
headerTl.fromTo(".cta", {opacity: 0, y: 100}, {opacity: 1, duration: 1, y: 0});

// Hamburger Menu and Close Menu

let open = document.querySelector('.hamburger-menu');
let menuOpen = true;
let sideNav = document.getElementById('side-nav');

function openMenu() {
    sideNav.classList.toggle('side-nav-animation');
    open.classList.toggle('hamburger-menu-focus');
}

  function closeMenu() {
    sideNav.classList.toggle('side-nav-animation-reverse');
    open.classList.toggle('hamburger-menu-focus');
  }

function menuSwitch() {
    if(menuOpen) {
        openMenu();
    }
    else {
        closeMenu();
    }
    menuOpen = false;
}

let navBar = document.querySelector('.nav-bar');
let navBarHeight = navBar.offsetHeight;
let lastScrollPos = 0;
let currentScrollPos = 0;

var lastScrollTop = 0;

// Project Side Nav Item No Pointer Event When OpenMenu = True

let projectMobileNavItem = document.getElementById('projects-nav-item-mobile');


if(menuSwitch == true) {
    projectMobileNavItem.style.pointerEvents = "none";
}


window.addEventListener("scroll", function(){
   var st = window.scrollY;
     if (st > lastScrollTop){
        // scroll down
        navBar.classList.add('nav-bar-mobile-animation-backwards');
        navBar.classList.remove('nav-bar-mobile-animation-forwards');
     }
     else {
        // scroll up
        navBar.classList.add('nav-bar-mobile-animation-forwards');
        navBar.classList.remove('nav-bar-mobile-animation-backwards');
     }
     lastScrollTop = st <= 0 ? 0 : st; 
}, false);

