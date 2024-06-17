let scaleSlider;
let time = 0;

const amplitude = 300;
const timeSpeed = 0.05;

function setupCanvasParams() {
    scaleSlider = createSlider(0.3, 2, 0.95, 0.01);
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
    const scaleValue = scaleSlider.value();

    background(0);
    noFill();

    push();

    translate(width / 2, height / 2);
    scale(scaleValue);

    translate(-width / 2, height * 0.4);
    line(0, 0, width, 0);

    strokeWeight(5);
    stroke("#1597fe");
    beginShape();

    for (let x = 0; x < PI; x += 0.01) {
        const y = -WaveFunctions.gaus_wave(x, time);
        vertex(x / PI * width, y * amplitude);
    }

    endShape();
    pop();

    strokeWeight(1);
    textSize(15);
    stroke(255);
    textAlign(LEFT, CENTER);
    text(`Scale: ${scaleValue}x`, 150, 20);

    time += timeSpeed;
}
