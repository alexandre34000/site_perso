
export default class Menu{
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
}