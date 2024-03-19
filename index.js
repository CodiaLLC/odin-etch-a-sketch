const container = document.getElementById("container");

let size = 16;

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