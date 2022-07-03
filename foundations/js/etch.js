DEFAULT_COLOR = '#857E7B';
HIGHLIGHT_ONE = '#FFA500';

// Add a grid of size numRows * numCols inside the html element
// container. This grid will have a background colour of 
// color() and each will be given class etch-box and give any 
// hover events to boxHover().
// Container is first cleared of all children.
function makeGrid(container, numRows = 10, numCols = 10,
    color = () => { return HIGHLIGHT_ONE; }) {
    // Clear the current children.
    while (container.lastChild) {
        container.removeChild(container.lastChild);
    }

    // Create grid of styled boxes.
    for (i = 0; i < numRows; i++) {
        for (j = 0; j < numCols; j++) {

            let box = document.createElement('div');
            box.classList.add('etch-box');
            box.style.backgroundColor = DEFAULT_COLOR;
            box.style.width = `${100 / numRows}%`;
            box.style.height = `${100 / numCols}%`;
            box.addEventListener('mouseover', (e) => {
                let source = e.target || e.srcElement;
                source.style.backgroundColor = color();
            });
            container.appendChild(box);
        }
    }
}

// Set the style.backgroundColor of each child of container to color().
function resetColors(container, color) {
    for (i = 0; i < container.children.length; i++) {
        container.children[i].style.backgroundColor = color();
    }
}

// Return random whole number in range [start, end].
function randInt(start, end) {
    return Math.floor(Math.random() * 255);
}

function randRGB() {
    return `rgb(${randInt(1, 255)}, ${randInt(1, 255)}, ${randInt(1, 255)})`;
}

// Make default 10 x 10 grid.
let etchContainer = document.querySelector('#etch-container');
makeGrid(etchContainer);

let numRows = 10;
let numCols = 10;

// Settings buttons
let resetButton = document.querySelector('#etch-reset');
resetButton.addEventListener('click', () => resetColors(etchContainer,
    () => { return DEFAULT_COLOR; }));

let randomButton = document.querySelector('#etch-random');
let randomEnabled = false;
randomButton.addEventListener('click', () => {
    randomEnabled = !randomEnabled;
    if (!randomEnabled) {
        randomButton.classList.remove('enabled');
        makeGrid(etchContainer, numRows, numCols);
    } else {
        randomButton.classList.add('enabled');
        makeGrid(etchContainer, numRows, numCols, randRGB);
    }
});