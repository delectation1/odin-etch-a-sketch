const div = document.createElement('div');
const GRID_SIZE = 16;

for (let i = 0; i < GRID_SIZE; i++) {

    const container = document.createElement('div');
    container.classList.add("flex-container");
    console.log(container);
    for (let j = 0; j < GRID_SIZE; j++) {
        const div = document.createElement('div');
        div.classList.add("box");
        container.appendChild(div);
        console.log(div)
    }
    const body = document.querySelector("body");
    body.appendChild(container);
}