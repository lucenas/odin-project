DEFAULT_COLOR = '#857E7B';

// Add a grid of size numRows * numCols inside the html element
// container. This grid will have a background colour of 
// color() and each will be given class etch-box and give any 
// hover events to boxHover().
// Container is first cleared of all children.
function makeGrid(container, numRows = 10, numCols = 10, 
        color = () => {return DEFAULT_COLOR}) {
    // Clear the current children.
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    // Create grid of styled boxes.
    for (i = 0; i < numRows; i++) {
        for (j = 0; j < numCols; j++) {

            let box = document.createElement('div');
            box.classList.add('etch-box');
            box.style.backgroundColor = color();
            box.style.width = `${100 / numRows}%`;
            box.style.height = `${100 / numCols}%`;
            box.addEventListener('mouseover', (e) => {
                let source = e.target || e.srcElement;
                source.style.backgroundColor = 'green';
            });
            container.appendChild(box);
        }
    }
}

// Set the style.backgroundColor of each child of container to color.
function resetColors(container, color) {
    for (i = 0; i < container.children.length; i++) {
        container.children[i].style.backgroundColor = color;
    }
}

// Make default 10 x 10 grid.
let etchContainer = document.querySelector('#etch-container');
makeGrid(etchContainer);

// Settings buttons
let resetButton = document.querySelector('#etch-reset');
resetButton.addEventListener('click', () => resetColors(etchContainer, 
        DEFAULT_COLOR));