import * as THREE from '../modules/three.module.js';
import {OrbitControls} from '../modules/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 6);
scene.add(camera);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(2, 5, 1);
camera.add(directionalLight);


function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}
render();

const material = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    emissive: 0xffffff,
    emissiveIntensity: 0.1
});
const box = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(box, material);
scene.add(cube);