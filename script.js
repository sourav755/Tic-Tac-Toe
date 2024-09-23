let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset_btn");
let winnerText = document.querySelector(".winnerText");

let count = 0;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let turnX = true;

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
    box.style.backgroundColor = "grey";
  });
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("Winner ", pos1val);

        disableBoxes();

        // Winner print
        winnerText.innerText = "Winner: " + pos1val;
      } else {
        // if (count == 9) {
        //   disableBoxes();
        //   winnerText.innerText = "GAME DRAW";
        // }
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button clicked");
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    count++;
    checkWinner();
  });
});

resetBtn.addEventListener("click", () => {
  location.reload();
});
