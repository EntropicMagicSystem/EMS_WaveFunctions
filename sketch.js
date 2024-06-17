let scaleSlider;

function setupCanvasParams() {
    scaleSlider = createSlider(1, 500, 100);
    scaleSlider.position(20, 20);
}

function setup() {
    const containerID = "canvas-container";
    const container = document.querySelector(`#${containerID}`);

    const canvas = createCanvas(container.clientWidth - 20, container.clientHeight - 20);
    canvas.parent(containerID);

    setupCanvasParams();
}

function draw() {
    const scale = scaleSlider.value();

    background(0);
    strokeWeight(5);
    stroke("#1597fe");
    noFill();

    push();
    translate(width / 2, height * 0.7);
    beginShape();

    let x = -width / 2 / scale;
    while (x * scale < width / 2) {
        vertex(x * scale, sin(x) * scale);
        x += 0.01;
    }

    endShape();
    pop();

    strokeWeight(1);
    textSize(15);
    stroke(255);
    textAlign(LEFT, CENTER);
    text(`Scale: ${scale / 100}x`, 150, 20);
}
