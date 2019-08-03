class Planet extends Circle
{
    constructor(radius, color,  days, orbit, t = 0)
    {
        super(0, 0, radius, color);
        this.speed = 2*Math.PI/days;
        this.orbit = orbit;
        this.t = t;
    }

    move()
    {
        this.x = WIDTH/2 + this.orbit * Math.cos(this.t);
        this.y = WIDTH/2 + this.orbit * Math.sin(this.t);
        this.t = (this.t + this.speed) % (2 * Math.PI);
    }
}