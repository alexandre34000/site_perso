
import {init, animate} from './script/map-monde.js'
import {clickHandler, isActive} from './script/scroll.js'
const links = document.querySelectorAll(".content-entete ul a");
const scrollTop = document.querySelector("#scroll-top");

/**
* add Event listener on domElements
*/
const addListener = () =>{
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
  scrollTop.addEventListener("click", clickHandler);
}


addListener();
init("#canvas", 25);
animate();

let oldValue =0;
window.addEventListener('scroll', function(e){
var newValue = window.pageYOffset || document.documentElement.scrollTop;
  if(newValue > oldValue){
    isActive(true)
} else if(newValue < oldValue){
    isActive(false)
}
oldValue = newValue <= 0 ? 0 : newValue;
}, false);


/**
*
* @param {*} name
* @returns
*
* ---javascript
* --- const toto = string;
*
*/
/*
function getSelectedMenu(name){
    const menuSelected = document.querySelectorAll(`input[name="${name}"]:checked`);
    let values = [];
    menuSelected.forEach((checkbox) => {
        values.push(checkbox.value);
    });
    return values;
}

function getSelectedLike(nameLike){
    const likeSelected = document.querySelectorAll(`input[name="${nameLike}"]:checked`)
    let likes = [];
    likeSelected.forEach((checkbox)=>{
        likes.push(checkbox.value)
    });
    return likes;
}

function toPlaceAnOrder(){
    alert("restaurant favori = "+ "" +getSelectedLike('iconLike')+" "+"entree =" +getSelectedMenu('entree')+" "+
    "plat ="+getSelectedMenu('plat')+" "+"desserts = "+getSelectedMenu('desserts'));
}
function toMakeALike(){
    alert("restaurant j'aime");

} */
