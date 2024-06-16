// Loading Animation
window.addEventListener('load', () => {
    const load = document.querySelector('.loader');
    load.classList.add('load-finish');
});

// like/dislike
function likeDislike(x) {
    x.classList.add("active");
}

// Toggle dark/light mode
function lightDark() {
    const element = document.body;
    const element1 = document.querySelector('.fa-toggle-off');
    element.classList.toggle("dark-mode");
    element1.classList.toggle('fa-toggle-on');
}


// Intro Animation
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.intro-content', {y: "0%", duration: 1, stagger: 0.25});
tl.to('.slider', {y: "-100%", duration: 1.25, delay: 0.25});
tl.to('.intro', {y: "-100%", duration: 1, delay: -1});
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 0.25});

$(document).ready(function(){
    //Animation based in scrolling
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Toggle menu button
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Editor.", "Developer.", "Coder.", "Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Editor.", "Developer.", "Coder.", "Designer.", "Freelancer."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });    
    

});