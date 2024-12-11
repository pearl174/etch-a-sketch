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
    e.target.classList.add("color");
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
    const size = prompt("Number of squares per side: ");
    deleteGrid();
    createGrid(size);
});

createGrid(4);