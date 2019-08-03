let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


const WIDTH = 700;
const SUN_RADIUS = 50;
const FACTOR = 0.3;
let back = new Rectangle(0,0,WIDTH, WIDTH,"#424242");

let planets = [
    new Planet(FACTOR * 2.4, "#e34e3e",87.97, 55),
    new Planet(FACTOR * 6, "#e38c1e",224.7, 65),
    new Planet(FACTOR * 6.3, "#2d9be3",365.25, 78),
    new Planet(FACTOR * 3.3, "#e30020",686.98, 90),
    new Planet(FACTOR * 71.49, "#e3c966",11.86*365, 150),
    new Planet(FACTOR * 60, "#e3e3cd",29.46*365, 200),
    new Planet(FACTOR * 50, "#424242",29.46*365, 200),
    new Planet(FACTOR * 40, "#e3e3cd",29.46*365, 200),
    new Planet(FACTOR * 25.5, "#51d9e3",84.01*365, 240),
    new Planet(FACTOR * 24.7, "#2284e3",164.8*365, 270),
    new Planet(FACTOR * 1.2, "#9b9693",248.54*365, 300),
]
function loop()
{
    back.draw();
    new Circle(WIDTH/2,WIDTH/2,SUN_RADIUS, "#fff13d").draw();
    planets.forEach((e)=>
    {
        e.move();
        e.draw();
    })
}


window.setInterval(loop,8);