
//import {init, animate} from './script/map-monde.js'
import { clickHandler, isActive } from './script/scroll.js'
import Menu from './script/header.js'

const links = document.querySelectorAll(".content-entete ul a");
const scrollTop = document.querySelector("#scroll-top");

new Menu();

/**
* add Event listener on DOMElements
*/
const addListener = () => {
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }
    scrollTop.addEventListener("click", clickHandler);
}

let oldValue = 0;
window.addEventListener('scroll', function (e) {
    var newValue = window.pageYOffset || document.documentElement.scrollTop;
    if (newValue > oldValue) {
        isActive(true)
    } else if (newValue < oldValue) {
        isActive(false)
    }
    oldValue = newValue <= 0 ? 0 : newValue;
}, false);

//const el = document.querySelector('#decouvrir');

//console.log(el.scrollLeft+" , "+el.scrollTop);
/* var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
var scrollTop=    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
console.log(scrollLeft,scrollTop); */




//toto.init();
/* const menu =document.getElementById("nav-icon");
menu.addEventListener("click", toogleMenu);

function toogleMenu(){
    if(menu.dataset.open === "false"){
    menu.dataset.open="true";
    }
    else{
        menu.dataset.open="false";
    }
} */

/* addListener();
init("#canvas", 25);
animate(); */
