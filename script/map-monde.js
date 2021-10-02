import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports,min/optimized/three.js'

var scene, renderer;
var camera;
var earthMesh;
var containerEarth;
var cloudMesh;

export function init(getId, posCamera) {

  renderer = new THREE.WebGLRenderer({ canvas: document.querySelector(getId), alpha: true, antialias: true });//alpha: true
  renderer.shadowMap.enabled = true;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(70, 1, 1, 1000);
  camera.position.set(0, 0, posCamera)//25

  var lightAmb = new THREE.AmbientLight(0x888888, 0.8);
  // lightAmb.position.set(100, 50, 100);
  scene.add(lightAmb);

  var light = new THREE.DirectionalLight(0xffffff, 1)//...color, intensity, range
  //const helper = new THREE.DirectionalLightHelper( light, 8 );
  light.position.set(5, 5, 5)
  scene.add(light)

  light.castShadow = true
  light.shadow.camera.near = 0.01
  light.shadow.camera.far = 15
  light.shadow.camera.fov = 45

  light.shadow.camera.left = -1
  light.shadow.camera.right = 1
  light.shadow.camera.top = 1
  light.shadow.camera.bottom = -1
  //light.shadowCameraVisible	= true

  light.shadow.bias = 0.001
  light.shadow.darkness = 0.01

  light.shadow.mapSize.width = 1024
  light.shadow.mapSize.height = 1024


  containerEarth = new THREE.Object3D();


  scene.add(containerEarth);

  earthMesh = createEarth();
  earthMesh.receiveShadow = true
  earthMesh.castShadow = true
  earthMesh.rotation.x += 0.5;
  containerEarth.add(earthMesh);

  /* cloudMesh = createCloud();
  cloudMesh.rotation.x +=0.5
containerEarth.add(cloudMesh) */

  /* let sphereMesh = createSphere();
  sphereMesh.rotation.x += 0.5
  containerEarth.add(sphereMesh) */

}

function createEarth() {
  const loader = new THREE.TextureLoader();
  var geometry = new THREE.SphereGeometry(8, 128, 128);//(rayon, segment largeur, segment hauteur)
  var material = new THREE.MeshPhongMaterial({
    map: loader.load('./dist/pictures/mapmonde/earthmap1k.jpg'),
    bumpMap: loader.load('./dist/pictures/mapmonde/earthbump1k.png'),
    bumpScale: 1,
    specularMap: loader.load('./dist/pictures/mapmonde/earthspec1k.jpg'),
    specular: new THREE.Color('grey'),
    shininess : 15 // 30 defaut value
  });
  return new THREE.Mesh(geometry, material);

}

function createCloud() {
  const loader1 = new THREE.TextureLoader();
  var material = new THREE.MeshPhongMaterial({
    map: loader1.load('./dist/pictures/mapmonde/earthcloudmaptrans.jpg'),
    transparent: true,
    opacity: 0.2

  })
  var geometry = new THREE.SphereGeometry(8.5, 128, 128)
  return new THREE.Mesh(geometry, material)
}

function createSphere() {
  var geometry = new THREE.SphereGeometry(9, 128, 128)
  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.2
  });
  return new THREE.Mesh(geometry, material);
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
  earthMesh.rotation.y += 0.001;
  // cloudMesh.rotation.y +=0.001
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

