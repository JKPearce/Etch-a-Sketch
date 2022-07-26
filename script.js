const gridContainer = document.querySelector('.grid-container');

createGrid();

//add mouseover listener for every grid element and change the color
const gridElement = document.querySelectorAll('.grid-element');
gridElement.forEach(element => element.addEventListener('mouseover', changeColor));

function changeColor(e){
    this.style.backgroundColor = "black";
}

function createGrid(){
    //create grid of certain size (add user input later)
    for(let i = 0; i <= 16; i++){
        for(let j = 0; j <= 16; j++){
            let gridDiv = document.createElement('div');
            gridDiv.classList.add("grid-element");
            gridContainer.appendChild(gridDiv);
        }
    }
}