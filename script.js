const gridContainer = document.querySelector('.grid-container');

//create initial grid of size 10x10
createGrid(10);

console.log(document.getElementById("reset-btn").addEventListener("click", getUserInput));

function getUserInput(){
    let keepGoing = true;
    let input = 0;
    do{
       input = prompt("Please enter a number between 1 and 100", "16");
       if(input < 0 || input > 100){
        input = prompt("Please enter a number between 1 and 100", "16");
       }else{
        keepGoing = false;
       }
    }while(keepGoing);

    createGrid(input);
}

function changeColor(e){
    var r = Math.floor(Math.random() * 256); // range is 0-255
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    //get the current rgb value
    let rgb = window.getComputedStyle(this, null)['backgroundColor'];

    //if the current background is white then change background to random color
    if(rgb === `rgb(255, 255, 255)`){
        this.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
        this.style.opacity = "0.1";
    }else{
        //increase current alpha by 10%
        let opacity = parseFloat(this.style.opacity);
        opacity = opacity + 0.1;
        this.style.opacity = opacity;
        this.style.backgroundColor = rgb;
    } 
}

function createGrid(size){
    //set the size of the grid in css
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //get current grid and delete it to reset page, check if grid exists first
    let gridElements = document.querySelectorAll('.grid-element');
    if(gridElements != null){
        gridElements.forEach(ele => {
            ele.remove();
        });
    }

    //create new grid with user size from user input
    for(let i = 0; i <= size; i++){
        for(let j = 0; j <= size; j++){
            let gridDiv = document.createElement('div');
            gridDiv.classList.add("grid-element");
            gridContainer.appendChild(gridDiv);
        }
    }

    //add mouseover listener for every grid element and change the color
    const gridElement = document.querySelectorAll('.grid-element');
    gridElement.forEach(element => element.addEventListener('mouseover', changeColor));
}