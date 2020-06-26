function Stars() {
    // this.x = cnv.width * 2 / 5 + Math.floor(Math.random() * cnv.width / 5);
    // this.y = cnv.height * 2 / 5 + Math.floor(Math.random() * cnv.height / 5);
    this.bornx = Math.floor(Math.random() * cnv.width);
    this.borny = Math.floor(Math.random() * cnv.height);
    this.x = this.bornx;
    this.y = this.borny;
    this.radius = 0.02 * Math.floor(Math.pow((Math.pow((this.x - this.bornx), 2) + Math.pow((this.y - this.borny), 2)), 0.5));
    this.thinness = 4;

    this.show = function() {
        ctx.beginPath();
        ctx.moveTo(this.x - this.radius, this.y);
        ctx.lineTo(this.x - this.radius / this.thinness, this.y - this.radius / this.thinness);
        ctx.lineTo(this.x, this.y - this.radius);
        ctx.lineTo(this.x + this.radius / this.thinness, this.y - this.radius / this.thinness);
        ctx.lineTo(this.x + this.radius, this.y);
        ctx.lineTo(this.x + this.radius / this.thinness, this.y + this.radius / this.thinness);
        ctx.lineTo(this.x, this.y + this.radius);
        ctx.lineTo(this.x - this.radius / this.thinness, this.y + this.radius / this.thinness);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x - (this.x - this.bornx) / 5, this.y - (this.y - this.borny) / 5);
        ctx.strokeStyle = "white";
        ctx.stroke();
    }

    this.update = function() {
        this.xv = (this.x - cnv.width / 2) * 1;
        this.yv = (this.y - cnv.height / 2) * 1;
        this.x += speed / 50 * this.xv;
        this.y += speed / 50 * this.yv;
        this.radius = 0.02 * Math.floor(Math.pow((Math.pow((this.x - this.bornx), 2) + Math.pow((this.y - this.borny), 2)), 0.5));
    }
}