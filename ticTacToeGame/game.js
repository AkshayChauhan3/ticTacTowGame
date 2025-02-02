var boxes = document.querySelectorAll(".box");
let turnO = true;
let rstbtn = document.querySelector("#resetBtn");
let winmsg = document.querySelector("#winmsg");
let para = document.querySelector("#para");
let newgame = document.querySelector("#newgame");
let winner;

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2],
]

const winnerShow = () => {
    para.innerText = `Winner is ${winner}`;
    winmsg.style.display = "block";
}

newgame.addEventListener("click", () => {
    winmsg.style.display = "none";
    for (box of boxes) {
        box.innerText = "";
        enableBox();

    }

})

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        cheakWinner();

        //diff color for O and X
        if (box.innerText === "O") {
            box.style.color = "#0077B6";
        } else {
            box.style.color = "#00B4D8";
        }
    });
});

const cheakWinner = () => {
    for (let ptrn of winPatterns) {
        let pos1 = boxes[ptrn[0]].innerText;
        let pos2 = boxes[ptrn[1]].innerText;
        let pos3 = boxes[ptrn[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                winner = pos1;
                disableBox();
                winnerShow();
            }
        }
    }

}

const disableBox = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}

const enableBox = () => {
    for (box of boxes) {
        box.disabled = false;
    }
}

rstbtn.addEventListener("click", () => {
    for (box of boxes) {
        box.innerText = "";
        enableBox();

    }
})

