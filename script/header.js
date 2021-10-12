
/* export default class Menu{
    constructor(){
        const menu =document.getElementById("nav-icon");
        const toogleMenu = document.getElementById("toogleMenu");
        var dataOpen = menu.dataset.open;
       // var toogleM = toogleMenu.dataset.toogle;
        menu.addEventListener("click", function(){
            if(dataOpen === "false"){
                dataOpen = "true";
                toogleMenu.dataset.toogle = "true";
                }
                else{
                    dataOpen="false";
                    toogleMenu.dataset.toogle="false";
                }
        });
    }
} */

export default class Menu {
    constructor() {
        const menu = document.getElementById("nav-icon");
        const toogleMenu = document.getElementById("toogleMenu");
        menu.addEventListener("click", function () {
            if (toogleMenu.getAttribute("data-toogle") == "open") {
                toogleMenu.setAttribute("data-toogle", "close");
                menu.setAttribute("data-open", "false");
            }
            else {
                menu.setAttribute("data-open", "true");
                toogleMenu.setAttribute("data-toogle", "open");
            }
        });
    }
}