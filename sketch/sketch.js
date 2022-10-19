// Week 5 - Day 4 (10/3/2022) Sketchbook
// Fractal Patterns

function setup() {
    createCanvas(windowWidth, windowHeight);
    //rectDraw();
}
function draw() {
    background(204);
    rectDraw();
}
function rectDraw(x, y, l, h) {
    var x = 10;
    var y = 200;
    var x1 = 200;
    var y1 = 10;

    for (let i = 0; i < 5; i++) {
        //let x = 10;
        //let y = 200;
        rect(x, y, 5, 40);

        //var x1 = 200;
        //var y1 = 10;

        if (i < 0) {
            //var x1 = 200;
            //var y1 = 10;
            rectDraw(x1, y1, 40, 5);
        }

        x = (x * 2);
    }
}
