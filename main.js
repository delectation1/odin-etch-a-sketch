
// default size of sketchbook is 16
const div = document.createElement('div');
let GRID_SIZE = 16;
makeGrid(GRID_SIZE);

const button = document.querySelector("button");
button.addEventListener('click', () => {
    GRID_SIZE = getGridSize();
    clearGrid();
    makeGrid(GRID_SIZE);
})


function getGridSize() {
    let userInput;

    do {
        userInput = prompt("Please enter how many squares you want per side");
    } 
    while (parseInt(userInput) > 100 || isNaN(parseInt(userInput)) == true);
    return parseInt(userInput);
}

function makeGrid(GRID_SIZE) {
    
    for (let i = 0; i < GRID_SIZE; i++) {
        const container = document.createElement('div');
        container.classList.add("flex-container");
    
        for (let j = 0; j < GRID_SIZE; j++) {
            const div = document.createElement('div');
            div.classList.add("box");
    
            // create hover effect
            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "red";
            })
            div.addEventListener('mouseout', () => {
                div.style.backgroundColor = "white";
            })
    
            container.appendChild(div);
        }
        const mainContainer = document.querySelector(".main-container");
        mainContainer.appendChild(container);
    }
}

function clearGrid() {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.replaceChildren();
}