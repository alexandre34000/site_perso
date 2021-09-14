
import {init, animate} from './script/map-monde.js'

const links = document.querySelectorAll(".content-entete ul a");

/**
* add Event listener
* @param {} itemName 
* @returns list of String 
*/
const addListener = () =>{
  for (const link of links) {
    link.addEventListener("click", clickHandler);
  }
}

/**
 * Used for scroll to anchor in smooth mode
 * @param {event} e 
 */
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

addListener();
init();
animate();



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
