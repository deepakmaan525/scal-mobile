import './src/index.css'
import { register } from 'swiper/element/bundle';
register();
import 'flowbite';
let mobileView = document.querySelector(".mobileView");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");
let navlinks = document.querySelector("ul");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");

menu.addEventListener("click", function () {
    mobileView.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
})
navlinks.addEventListener("click", function () {
    navlinks.classList.toggle("show");
    body.classList.remove("overflow-hidden");
    span1.classList.toggle("rotate1");
    span2.classList.toggle("rotate2");
    span3.classList.toggle("rotate3");
});

// let mobileView = document.querySelector(".mobileView");
// let menu = document.querySelector(".menu");
// let body = document.querySelector("body");
// let navlinks = document.querySelector("ul");
// let span1 = document.querySelector(".span1");
// let span2 = document.querySelector(".span2");
// let span3 = document.querySelector(".span3");

// menu.addEventListener("click", function () {
//     mobileView.classList.toggle("show");
//     body.classList.toggle("overflow-hidden");
//     span1.classList.toggle("rotate1");
//     span2.classList.toggle("rotate2");
//     span3.classList.toggle("rotate3");
// })
// navlinks.addEventListener("click", function () {
//     navlinks.classList.toggle("show");
//     body.classList.remove("overflow-hidden");
//     span1.classList.toggle("rotate1");
//     span2.classList.toggle("rotate2");
//     span3.classList.toggle("rotate3");
// });

// back to top //
// back to top //
let backToTop = document.getElementById('backToTop')
 function  goToTop(){
    window.scrollTo(0, 0,{behavior: 'smooth'})
     } 
     document.getElementById('backToTop').addEventListener('click',goToTop)
window.addEventListener('scroll', function () {
    if (window.scrollY > 700) {
        backToTop.classList.remove('hidden');
        backToTop.classList.add('flex');
    } else {
        backToTop.classList.remove('flex');
        backToTop.classList.add('hidden');
    }
});
// preloader
const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloader").classList.add("hidden");
    document.body.classList.remove("overflow_hidden")
}, 2000);
