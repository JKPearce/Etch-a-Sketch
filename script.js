const gridContainer = document.querySelector('.grid-container');

createGrid();

function createGrid(){
    for(let i = 0; i <= 16; i++){
        for(let j = 0; j <= 16; j++){
            let gridElement = document.createElement('div');
            gridElement.classList.add("grid-element");
            gridContainer.appendChild(gridElement);
        }
    }
}