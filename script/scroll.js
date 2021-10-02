

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
      scrollUp.style.display = "flex"
      containerEntete.style.display = "none"
    }else{
      scrollUp.style.display = "none"
      containerEntete.style.display = "block"
    }
  }