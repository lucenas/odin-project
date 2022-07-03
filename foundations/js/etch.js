// Add a grid of size numRows * numCols inside the html element
// container. This grid will have a background colour of 
// color and each will be given class etch-box and give any 
// hover events to boxHover().
// Container is first cleared of all children.
function makeGrid(container, numRows = 10, numCols = 10, color = '#857E7B') {
    // Clear the current children.
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    // Create grid of styled boxes.
    for (i = 0; i < numRows; i++) {
        for (j = 0; j < numCols; j++) {

            let box = document.createElement('div');
            box.classList.add('etch-box');
            // box.style.backgroundColor = color;
            box.style.width = `${100 / numRows}%`;
            box.style.height = `${100 / numCols}%`;
            box.addEventListener('click', (e) => {
                console.log(e);
            });
            container.appendChild(box);
        }
    }
}

let etchContainer = document.querySelector('#etch-container');

// Make default 10 x 10 grid.
makeGrid(etchContainer);