/**
 * 
 * @param {*} name 
 * @returns
 * 
 * ---javascript
 * --- const toto = string;
 * 
 */
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

}
