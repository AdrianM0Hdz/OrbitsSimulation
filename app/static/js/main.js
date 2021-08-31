let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;
window.addEventListener('resize', (event) => {
    //update the window measurements each time it is resized
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
    sun.style.top = (window.innerHeight / 2) - (sun.offsetHeight / 2) + 'px';
    sun.style.left = (window.innerWidth / 2) - (sun.offsetWidth / 2) + 112 + 'px';
});

const planet = document.querySelector('#planet');
const sun = document.querySelector('#sun');
const sunMass = 1000;
const planetMass = 1;

let angle = Math.PI;
const RADIUS = 100; // radius of the orbit
sun.style.top = (window.innerHeight / 2) - (sun.offsetHeight / 2) + 'px';
sun.style.left = (window.innerWidth / 2) - (sun.offsetWidth / 2) + 112 + 'px';

const getAngularVelocity = (distance) => {
    return Math.sqrt(6 * (9999 / Math.pow(distance, 2)));
}

const getDistance = () => {
    let x_1 = parseInt(sun.style.left);
    let x_2 = parseInt(planet.style.left);
    let y_1 = parseInt(sun.style.top);
    let y_2 = parseInt(planet.style.top); 

    return Math.sqrt(Math.pow(x_2-x_1, 2) + Math.pow(y_2-y_1, 2))
}

const animate = (time, lastTime) => {
    if (lastTime != null) {
        angle += (lastTime - time) * getAngularVelocity(getDistance()) * 0.001; 
    }
    planet.style.top = (Math.sin(angle) * RADIUS) + (window.innerHeight / 2) - (planet.offsetHeight / 2) + 'px';
    planet.style.left = (Math.cos(angle) * RADIUS) * 1.5 + (window.innerWidth / 2) - (planet.offsetWidth / 2) + 'px';
    requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate);