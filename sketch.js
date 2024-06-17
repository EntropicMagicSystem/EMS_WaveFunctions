let scale = 100;

function setup() {
    const containerID = "canvas-container";
    const container = document.querySelector(`#${containerID}`);

    const canvas = createCanvas(container.clientWidth - 20, container.clientHeight - 20);
    canvas.parent(containerID);

    background(0);
}

function draw() {
    translate(width / 2, height / 2);
    strokeWeight(5);
    stroke("#1597fe");

    beginShape(POINTS);

    let x = -width / 2 / scale;
    while (x * scale < width / 2) {
        vertex(x * scale, sin(x) * scale);
        x += 0.01;
    }

    endShape();
}
