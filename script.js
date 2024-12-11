let div = null;
const container = document.querySelector("#container");
let flexContainer = null;

for (let i = 0; i < 4; i++) {
    flexContainer = document.createElement("div");
    flexContainer.classList.add("flexContainer");
    for (let j = 0; j < 4; j++) {
        div = document.createElement("div");
        div.classList.add("cell");
        div.addEventListener("mouseover", addColor);
        flexContainer.appendChild(div);
    }
    container.appendChild(flexContainer);
}

function addColor(e) {
    console.log(e.target);
    e.target.classList.add("color");
}