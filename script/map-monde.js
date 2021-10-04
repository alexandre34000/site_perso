import * as THREE from 'https://cdn.skypack.dev/pin/three@v0.132.2-1edwuDlviJO0abBvWgKd/mode=imports,min/optimized/three.js'
//import { DoubleSide } from 'three';

var scene, renderer;
var camera;
var earthMesh;
var containerEarth;
var cloudMesh;
var dotMesh

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

  earthMesh = createEarth();
  earthMesh.receiveShadow = true
  earthMesh.castShadow = true
  earthMesh.rotation.x += 0.5;
  scene.add(earthMesh)

  var dotMeshParis = addObject();
  var dotMeshNewYork = addObject();
  var dotMeshShanghai = addObject();
  let coordonate = {
    paris: {
      lat: 48.856614,
      long: 2.3522219
    },
    newyork: {
      lat: 40.712784,
      long: -74.005941
    },
    shanghai:{
      lat: 31.224361,
      long : 121.469170
    }
  }
  let cartesianParis = convertLatLongToCartesian(coordonate.paris);
  dotMeshParis.position.set(cartesianParis.x, cartesianParis.y, cartesianParis.z);
  earthMesh.add(dotMeshParis);

  let cartesianNewYork = convertLatLongToCartesian(coordonate.newyork);
  dotMeshNewYork.position.set(cartesianNewYork.x, cartesianNewYork.y, cartesianNewYork.z);
  earthMesh.add(dotMeshNewYork);

  let cartesianShanghai = convertLatLongToCartesian(coordonate.shanghai);
  dotMeshShanghai.position.set(cartesianShanghai.x, cartesianShanghai.y, cartesianShanghai.z);
  earthMesh.add(dotMeshShanghai);

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
    shininess: 15 // 30 defaut value
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
  earthMesh.rotation.y += 0.01;//0.001
  // dotMesh.rotation.y += 0.001;
  // cloudMesh.rotation.y +=0.001
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

function addObject() {
  let geometry = new THREE.SphereBufferGeometry(0.3, 20, 20);
  let material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  return new THREE.Mesh(geometry, material);
}

function convertLatLongToCartesian(p) {
  let radius = 8
  let phi = ((p.lat) * (Math.PI / 180));
  let theta = (-(p.long) * (Math.PI / 180));
  let x = radius * Math.cos(theta) * Math.cos(phi);
  let z = radius * Math.sin(theta) * Math.cos(phi);
  let y = radius * Math.sin(phi);
  return { x, y, z }
}
