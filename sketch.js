function setup() {
    const containerID = "canvas-container";
    const container = document.querySelector(`#${containerID}`);

    const canvas = createCanvas(container.clientWidth - 20, container.clientHeight - 20);
    canvas.parent(containerID);

    background(0);
}

function draw() {

}
