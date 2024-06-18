let scaleSlider;
let waveFunctionSelect;
let focusSlider;
let concentrationSlider;

const amplitude = 300;

function setupCanvasParams() {
    scaleSlider = createSlider(0.3, 2, 0.95, 0.01);
    scaleSlider.position(20, 20);

    waveFunctionSelect = createSelect();
    waveFunctionSelect.position(22, 50);
    waveFunctionSelect.option("bell_wave");
    waveFunctionSelect.option("swordfish");
}

function setupWaveParams() {
    focusSlider = createSlider(0, 1, 0, 0.01);
    focusSlider.position(width / 2, 20);

    concentrationSlider = createSlider(0, 1, 0, 0.01);
    concentrationSlider.position(width / 2, 50);
}

function setup() {
    const containerID = "canvas-container";
    const container = document.querySelector(`#${containerID}`);

    const canvas = createCanvas(container.clientWidth - 20, container.clientHeight - 20);
    canvas.parent(containerID);

    setupCanvasParams();
    setupWaveParams();
}

function draw() {
    const scaleValue = scaleSlider.value();
    const selectedWaveFunction = waveFunctionSelect.selected();
    const focusValue = focusSlider.value();
    const concentrationValue = concentrationSlider.value();
    const wave = WaveFunctions[selectedWaveFunction];

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
        const time = Date.now() / 100;
        const y = -wave(x, time, focusValue, concentrationValue);
        vertex(x / PI * width, y * amplitude);
    }

    endShape();
    pop();

    strokeWeight(1);
    textSize(15);
    stroke(255);
    textAlign(LEFT, CENTER);
    text(`Scale: ${scaleValue}x`, 150, 20);
    text(`Focus: ${focusValue}`, width / 2 + 130, 20);
    text(`Concentration: ${concentrationValue}`, width / 2 + 130, 50);
}
