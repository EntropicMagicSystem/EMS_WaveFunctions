let scaleSlider;

const timeSpeed = 0.05;
let time = 0;

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
    translate(width / 2, height);
    beginShape();

    for (
        let x = -width / 2 / scale;
        x * scale < width / 2;
        x += 0.01
    ) {
        const y = -WaveFunctions.gaus_wave(x, time);
        vertex(x * scale, y * scale);
    }

    endShape();
    pop();

    strokeWeight(1);
    textSize(15);
    stroke(255);
    textAlign(LEFT, CENTER);
    text(`Scale: ${scale / 100}x`, 150, 20);

    time += timeSpeed;
}
