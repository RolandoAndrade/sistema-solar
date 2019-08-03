class Planet extends Circle
{
    constructor(radius, color,  speed, orbit, divisor = 1)
    {
        super(0, 0, radius, color);
        this.speed = speed;
        this.orbit = orbit;
        this.divisor = divisor;
        this.t = 0;
    }

    move()
    {
        this.x = WIDTH/2 + this.orbit * Math.cos(this.t);
        this.y = WIDTH/2 + this.orbit * Math.sin(this.t);
        this.t = (this.t + this.speed/this.divisor) % (2 * Math.PI);
    }
}