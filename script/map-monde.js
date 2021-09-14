import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports,min/optimized/three.js'
var camera, scene, renderer;
var mesh;


export function init() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, 1, 1, 100);
// alpha : true pour passer du noir au transparent
renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#canvas"), alpha: true});
 //render.setClearColor(0xBDBDBD, 0)

camera.position.z = 18;


//scene.background =transparent;

var geometry = new THREE.SphereGeometry(10, 100, 100);
var material  = new THREE.MeshPhongMaterial();

THREE.ImageUtils.crossOrigin = '';
//material.map    = THREE.ImageUtils.loadTexture('earthmap1k.jpg')
material.map = THREE.ImageUtils.loadTexture('./dist/pictures/earthmap1k.jpg')
/* material.bumpMap = THREE.ImageUtils.loadTexture('./dist/pictures/day-by-nasa.jpg')
material.bumpScale = 0.05; */

  mesh = new THREE.Mesh(geometry, material);
  mesh.rotation.x += 0.5;
  scene.add(mesh);

  //var light1 = new THREE.AmbientLight( 0xffffff );
  var light1 = new THREE.AmbientLight( 0xffffff );
  light1.position.set(100, 50, 100);
  scene.add(light1);
}

function resize() {
  var width = renderer.domElement.clientWidth;
  var height = renderer.domElement.clientHeight;
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix(); 
}

export function animate() {
  resize();
  mesh.rotation.y += 0.001;
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
