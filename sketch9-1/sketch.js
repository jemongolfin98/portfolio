// Week 8 - Day 9 (10/19/2022) Sketchbook
//
function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    background(75);
    var x = 50;
    var y = 50;
    var r = 25;
    for (let i = 0; i < 10; i++) {
        ellipse(x, y, r);

        for (let j = 0; j < 5; j++) {
            ellipse(x, y, r);
            x = x + 25;
            y = y + 25;
        }

        x = x + 50;
    }

}