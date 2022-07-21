
let x = 1;
let y = 1;
let div = 0;
let rowLimit = 0;
const container = document.getElementById("gridContainer");
let colour = "black";

let currentColour = "black";


// currently not working
function tests(x) { 
    x.style.backgroundColor = "red";
}

// currently not working

function exit(x){
    x.style.backgroundColor = "white";

}


function colourChanger(x){

    if (colour == "black"){
        x.style.backgroundColor = "black";
    }

    else if (colour == "white"){
        x.style.backgroundColor = "white";
    }

    else if (colour == "red"){
        x.style.backgroundColor = "red";
    }

    else if (colour == "blue"){
        x.style.backgroundColor = "blue";
    }






}

document.getElementById("whiteButton").onclick = function(){
    colour = "white";

    console.log("colour");
    console.log(colour);

}

document.getElementById("blackButton").onclick = function(){
    colour = "black";

}



document.getElementById("redButton").onclick = function(){
    colour = "red";

}

document.getElementById("blueButton").onclick = function(){
    colour = "blue";
    console.log("colour");

}


document.getElementById("submitButton").onclick = function(){
    numberOfCells = document.getElementById("inputBox").value;
    numberOfCells = numberOfCells * numberOfCells;


    rowLimit = document.getElementById("inputBox").value;
    rowLimit = rowLimit * 1 + 1; // multiply by 1 on row limit to cast it into a number instead of a string


    // For now it just takes number of cells, not in int x int format, so 16 x 16 doesnt work but 256 does work
    for(let i = 0; i < numberOfCells; i++){
            div = document.createElement("div");
            div.innerHTML = "&nbsp";
            div.style.backgroundColor = "white";
            div.style.borderStyle = "solid";
            div.classList.add("gridCell");




            div.addEventListener("click", function(){
                colourChanger(this);
    
            });

            div.addEventListener("onmouseenter", function(){
                tests(this);
            });

            div.addEventListener("onmouseleave", function(){
                exit(this);
            });
            

        
        
            //Sets the div into the correct grid fromat
            div.style.gridColumnStart = x;
            div.style.gridColumnEnd = x;
            div.style.gridRowStart = y;
            div.style.gridRowEnd = y;
            x++;
        
        
        if(x == rowLimit){
                y++;
                x = 1;
            }
        
            
            container.appendChild(div);
        }

}











