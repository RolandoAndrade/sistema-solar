let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");


const WIDTH = 700;
let back = new Rectangle(0,0,WIDTH, WIDTH,"#424242");
let planet = new Planet(5, "#e34e3e",0.01, 50);

function loop()
{
    back.draw();
    new Circle(WIDTH/2,WIDTH/2,40, "#fff13d").draw();
    planet.move();
    planet.draw();
}


window.setInterval(loop,8);