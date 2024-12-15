function createGrid(gridSize) {
    let div = null;
    const container = document.querySelector("#container");
    let flexContainer = null;

    for (let i = 0; i < gridSize; i++) {
        flexContainer = document.createElement("div");
        flexContainer.classList.add("flexContainer");
        for (let j = 0; j < gridSize; j++) {
            div = document.createElement("div");
            div.classList.add("cell");
            div.addEventListener("mouseover", addColor);
            flexContainer.appendChild(div);
        }
        container.appendChild(flexContainer);
    }
}

function addColor(e) {
    console.log(e.target);
    // e.target.classList.add("color");
    const red = Math.ceil(Math.random() * 255);
    const green = Math.ceil(Math.random() * 255);
    const blue = Math.ceil(Math.random() * 255);
    e.target.style.backgroundColor = `RGB(${red}, ${green}, ${blue})`;
}

function deleteGrid() {
    const container = document.querySelector("#container");
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

// button logic
const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = prompt("Number of squares per side: ");
    while (size > 100 || size < 1) {
        if (size > 100) {
            size = prompt("Size cannot be larger than 100. Please try again");
        } else if (size < 1) {
            size = prompt("Size cannot be negative or zero");
        }
    }
    deleteGrid();
    createGrid(size);
});

createGrid(4);