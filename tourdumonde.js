import { init, animate } from './script/map-monde.js'
var winHeight = window.innerHeight;
var winWidth = window.innerWidth;
var size;
console.log(winHeight + " " + winWidth)
if (winWidth > 650) {
    size = 18;
} else {
    size = 24;
}
init("#canvasmain", size);//16
animate();
