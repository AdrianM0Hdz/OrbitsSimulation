const planet = document.querySelector('#planet');
const sun = document.querySelector('#sun');
const RADIUS = 100; // radius of the orbit
let angle = Math.PI;

sun.style.top = (window.innerHeight / 2) - (sun.offsetHeight / 2) + 'px';
sun.style.left = (window.innerWidth / 2) - (sun.offsetWidth / 2) + 'px';

function animate(time, lastTime) {
    if (lastTime != null) {
        angle += (lastTime - time) * 0.001; 
    }
    planet.style.top = (Math.sin(angle) * RADIUS) + (window.innerHeight / 2) - 50 + 'px';
    planet.style.left = (Math.cos(angle) * RADIUS)*2.5 + (window.innerWidth / 2) - 50 + 'px';
    requestAnimationFrame(newTime => animate(newTime, time));
}

requestAnimationFrame(animate)