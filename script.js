let stars;
let speed;
window.onload = function() {
    setup();
    setInterval(draw, 1000 / 24);
}

function setup() {
    cnv = document.querySelector("#canvas");
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
    cnv.style.backgroundColor = "black";
    ctx = cnv.getContext("2d");

    stars = new Array(200);
    for (let i = 0; i < stars.length; i++) {
        stars[i] = new Stars();
    }
}

function draw() {
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;

    speed = document.querySelector("#speed").value;

    ctx.clearRect(0, 0, cnv.width, cnv.height);

    for (let i = 0; i < stars.length; i++) {
        stars[i].show();
        stars[i].update();
        if (stars[i].x < 0 || stars[i].x > cnv.width ||
            stars[i].y < 0 || stars[i].y > cnv.height) {
            stars[i] = new Stars();
        }
    }

}