const grid = document.querySelector('.grid-container')
let slider = document.getElementById('range');
let gridValue = document.getElementById('gridValue');
gridValue.textContent = `${slider.value} x ${slider.value}`;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function gridGenerator(gridNumber) {
    if (gridNumber >= 1) {
        for (i = 1; i <= (gridNumber * gridNumber); i++) {
            document.getElementById("grid").style.gridTemplateColumns = `repeat(${gridNumber},1fr)`
            document.getElementById("grid").style.gridTemplateRows = `repeat(${gridNumber},1fr)`
            let div = document.createElement('div')
            div.classList.add('column')
            grid.appendChild(div)
        }
    }
    else{
        removeAllChildNodes(grid)
    }

}



slider.oninput = function (e) {
    gridValue.textContent = `${this.value} x ${this.value}`;
    gridGenerator(0);
    gridGenerator(this.value);
    colorChanger("green")
}
const column = document.getElementsByClassName('column');
function colorChanger (x){
    for(i=0; i< Array.from(column).length; i++){
        column[i].addEventListener("mouseover", (e) => e.target.style.backgroundColor = `${x}`)
    }
}
gridGenerator(slider.value);
colorChanger("green")


