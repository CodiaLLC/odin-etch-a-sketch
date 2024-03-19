const container = document.getElementById("container");

let size = 16;

const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", resetGrid);
document.body.insertBefore(resetButton, container);

const errorMessage = document.createElement("div");
errorMessage.textContent = "Something went wrong, input should be an integer 1-100";

function resetGrid () {
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
      }
    let gridSize = prompt("Input grid size, max 100");
    gridSize = parseInt(gridSize);
    if (isNaN(gridSize) || gridSize > 100 || gridSize < 1) {
        container.appendChild(errorMessage);
        console.log('input out of range or not a number');
    }
    else {
        setupGrid(gridSize);
    }
}

function setupGrid (size) {
    for (i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.className = "row";
        container.appendChild(row);
        for (j = 0; j < size; j++) {
            let box = document.createElement("div");
            box.className = "box";
            box.addEventListener('mouseover', (event) => {
                event.target.style.backgroundColor = 'black';
            });
            row.appendChild(box);
        }
    }
}

setupGrid(16);