const container = document.getElementById('divContainer');
var gridNum = 100;
var gridBtn25= document.getElementById("z_25");
var gridBtn50= document.getElementById("z_50");
var gridBtn75= document.getElementById("z_75");
var gridBtn100= document.getElementById("z_100");


function createGrid(){

for (let row  = 0; row < gridNum; row++){
    const gridRow = document.createElement('div');
    gridRow.classList.add('grid-Row');
    container.appendChild(gridRow);

    for (i = 0; i < gridNum; i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridRow.appendChild(gridItem);
    
    }
}

  
    let isMouseDown = false;

    document.addEventListener('mousedown', function() {
        event.preventDefault(); // Prevent the default browser behavior
        isMouseDown = true; // Set the mouse button state to true when it is pressed down
    });
    
    document.addEventListener('mouseup', function() {
        isMouseDown = false; // Set the mouse button state to false when it is released
    });

    var divColor = document.getElementsByClassName('grid-item');
    
    for (let i = 0; i < divColor.length; i++) {
        divColor[i].addEventListener('mousemove', function() {
            if (isMouseDown) {

                this.style.backgroundColor = document.getElementById("colorPicker").value;

            }
        });
        divColor[i].addEventListener('mousedown', function() {
            
                this.style.backgroundColor = document.getElementById("colorPicker").value;
            
        });
    }
}   

//code starts here

    createGrid();

    gridBtn25.addEventListener("click",function(){
        destroyObject();
        gridNum= 25;
        createGrid();
    })

    
    gridBtn50.addEventListener("click",function(){
        destroyObject();
        gridNum= 50;
        createGrid();
    })

    
    gridBtn75.addEventListener("click",function(){
        destroyObject();
        gridNum= 75;
        createGrid();
    })

    
    gridBtn100.addEventListener("click",function(){
        destroyObject();
        gridNum= 100;
        createGrid();
    })
    
function destroyObject(){
    
  
    const divRow = document.getElementsByClassName('grid-Row');

    for (let i = divRow.length - 1; i >= 0; i--) {

        container.removeChild(divRow[i]);
        
    }
}
    
