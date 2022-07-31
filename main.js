// INTERSECTION OBSERVER
var headerTl = gsap.timeline();
var projectCardTl = gsap.timeline();
var experienceCardTl = gsap.timeline();
var skillsTextTl = gsap.timeline();
var skillsCardTl = gsap.timeline();
var contactFormTl = gsap.timeline();

// INTERSECTION OBSERVER FOR HEADERS

const headerAnimations = document.querySelectorAll('.header-animation');
const projectCardAnimations = document.querySelectorAll('.project-card-animation');
const projectCardAirplanePaths = document.querySelectorAll('.st3');
const experienceCardAnimations = document.querySelectorAll('.experience-card-animation');
const skillsTextAnimations = document.querySelectorAll('.skills-text-animation');
const skillsCardAnimations = document.querySelectorAll('.skills-card-animation');
const contactFormAnimation = document.querySelector('.contact-form-animation');


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

// contactFormAnimation.style.opacity = 0;

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
    threshold: 1,
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
    threshold: 1,
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
    threshold: 1,
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
    threshold: 1,
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

contactFormObserver.observe(contactFormAnimation);

// GSAP ANIMATION

var headerTl = gsap.timeline();

gsap.fromTo("#logo", {opacity: 0, y: -50}, {opacity: 1, duration: 1, y: 0});
gsap.fromTo(".nav-link", {opacity: 0, y: -50}, {opacity: 1, duration: 1, y: 0});

gsap.fromTo('.st3', {opacity: 0}, {opacity: 1, stagger: .2, duration: 2});



headerTl.fromTo(".hero-image-text", {opacity: 0, y: 100}, {opacity: 1, duration: 1, y: 0});
headerTl.fromTo(".cta", {opacity: 0, y: 100}, {opacity: 1, duration: 1, y: 0});

// Hamburger Menu and Close Menu

let open = document.querySelector('.hamburger-menu');
let close = document.querySelector('.hamburger-menu-close');

let menuOpen = true;

let closeMenuOne = document.querySelector('.line-1');
let closeMenuTwo = document.querySelector('.line-2');
let closeMenuThree = document.querySelector('.line-3');

let randomBox = document.getElementById('random-box');

let visible = 'visible';

function openMenu() {
    open.classList.toggle('open-menu');
    close.style.visibility = "visible";
    randomBox.classList.toggle('random-animation');
}

  function closeMenu() {
    closeMenuOne.classList.toggle('close-menu-one');
    closeMenuTwo.classList.toggle('close-menu-two');
    closeMenuThree.classList.toggle('close-menu-three');
    close.classList.toggle('close-menu');
    open.classList.toggle('open-menu');
    randomBox.classList.toggle('random-animation-reverse');
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