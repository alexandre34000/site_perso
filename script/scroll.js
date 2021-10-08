

/**
 * Used for scroll to anchor in smooth mode
 * @param {event} e 
 */
 export function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
  
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  export function isActive(bol){
    const scrollUp = document.querySelector("#container-scrollTop");
    const containerEntete = document.querySelector('#screen-top')
    if(bol){
      scrollUp.dataset.visible ="true";
     // scrollUp.style.display = "flex"
      containerEntete.dataset.visible ="false"
    }else{
     // scrollUp.style.display = "none"
     scrollUp.dataset.visible ="false";
      containerEntete.dataset.visible ="true"
    }
  }