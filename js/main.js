let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


const WIDTH = 700;
const SUN_RADIUS = 50;
const FACTOR = 0.3;
let back = new Rectangle(0,0,WIDTH, WIDTH,"#424242");
let saturn = 2 * Math.PI * Math.random();
let planets = [
    new Planet(FACTOR * 2.4, "#e34e3e",87.97, 55,),
    new Planet(FACTOR * 6, "#e38c1e",224.7, 65),
    new Planet(FACTOR * 6.3, "#2d9be3",365.25, 78),
    new Planet(FACTOR * 3.3, "#e30020",686.98, 90),
    new Planet(FACTOR * 71.49, "#e3c966",11.86*365, 150),
    new Planet(FACTOR * 60, "#e3e3cd",29.46*365, 200, saturn),
    new Planet(FACTOR * 50, "#424242",29.46*365, 200, saturn),
    new Planet(FACTOR * 40, "#e3e3cd",29.46*365, 200, saturn),
    new Planet(FACTOR * 25.5, "#51d9e3",84.01*365, 240),
    new Planet(FACTOR * 24.7, "#2284e3",164.8*365, 270),
    new Planet(FACTOR * 1.2, "#9b9693",248.54*365, 300),
];
function fillAsteroids(i)
{
    let asteroids = [];
    while(i--)
    {
        asteroids.push(new Planet(0.8+(Math.random()-0.5),"#a6a6a6", 5*365, 105+(Math.random()*10-5)));
        asteroids.push(new Planet(0.8+(Math.random()-0.5),"#a6a6a6", 200*365, 285+(Math.random()*10-5)));
    }
    return asteroids;
}

function fillStars(i)
{
    let stars = [];
    while(i--)
    {
        stars.push(new Rectangle(Math.random()*WIDTH,Math.random()*WIDTH, 0.7,0.7,"#fff"));
    }
    return stars;
}

let asteroids = fillAsteroids(100);
let stars =fillStars(500);



function loop()
{
    back.draw();
    stars.forEach((e)=>
    {
        e.draw();
    });
    new Circle(WIDTH/2,WIDTH/2,SUN_RADIUS, "#fff13d").draw();
    planets.forEach((e)=>
    {
        e.move();
        e.draw();
    });

    asteroids.forEach((e)=>
    {
        e.move();
        e.draw();
    });
}


window.setInterval(loop,8);