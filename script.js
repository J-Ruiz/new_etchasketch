let input = 16;
let container = document.getElementById("container");

function createGrid() {
    container.style.gridTemplateColumns = `repeat(${input}, 1fr)`
    container.style.gridTemplateRows = `repeat(${input}, 1fr)`
    //container.style.gap = "2px 2px";

    for (let i = 1; i <= input; i++) {
        for (let j = 1; j <= input; j++) {
            const box = document.createElement('div')
            box.classList.add("gridbox")
            box.setAttribute('id', `${i}` + "-" + `${j}`)
            box.addEventListener("mouseenter", function (event) {
                event.target.style.backgroundColor = "black"
            })
            container.appendChild(box);


        }
    }
    return;
}


function newGrid() {
    input = prompt("Would you like to change the size of the black dots? Enter a number greater than 0 and less than or equal to 100. The default is 16! ");
    if (input > 0 && input <= 100) {
        let removeThisBox = container.lastElementChild;
        while (removeThisBox) {
            container.removeChild(removeThisBox);
            removeThisBox = container.lastElementChild;
        }
        createGrid();
    }
    else {
        newGrid();
    }
}


let erase = document.getElementById('erase');
erase.addEventListener('click', function (event) {
    newGrid();
})


createGrid();