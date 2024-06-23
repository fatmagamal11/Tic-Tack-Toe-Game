var g0 = document.getElementById("g0");
var g1 = document.getElementById("g1");
var g2 = document.getElementById("g2");
var g3 = document.getElementById("g3");
var g4 = document.getElementById("g4");
var g5 = document.getElementById("g5");
var g6 = document.getElementById("g6");
var g7 = document.getElementById("g7");
var g8 = document.getElementById("g8");

// /////////////
const modal = document.getElementById("congratulation-modal");
const closeButton = document.querySelector(".close-button");
var out = document.getElementById("print");
var button = document.getElementById("reset");
let v0, v1, v2, v3, v4, v5, v6, v7, v8;
var arrayG = [g0, g1, g2, g3, g4, g5, g6, g7, g8];

flag = 0;
// Here, Printing X Turn at first
document.getElementById("print").innerHTML = "Player X Turn";
button.addEventListener("click", () => {
  location.reload();
});
function addO(index) {
  arrayG[index].innerHTML = "O";
  flag = 0;
  document.getElementById("print").innerHTML = "Player X Turn";
}
function addX(index) {
  arrayG[index].innerHTML = "X";
  flag = 1;
  document.getElementById("print").innerHTML = "Player O Turn";
}

function check() {
  v0 = g0.innerHTML;
  v1 = g1.innerHTML;
  v2 = g2.innerHTML;
  v3 = g3.innerHTML;
  v4 = g4.innerHTML;
  v5 = g5.innerHTML;
  v6 = g6.innerHTML;
  v7 = g7.innerHTML;
  v8 = g8.innerHTML;
  if (v0 == "X" && v1 == "X" && v2 == "X") {
    document.getElementById("print").innerHTML = "Player X won";

    g0.style.color = "red";
    g1.style.color = "red";
    g2.style.color = "red";
  } else if (v0 == "X" && v3 == "X" && v6 == "X") {
    document.getElementById("print").innerHTML = "Player X won";

    g0.style.color = "red";
    g3.style.color = "red";
    g6.style.color = "red";
  } else if (v6 == "X" && v7 == "X" && v8 == "X") {
    document.getElementById("print").innerHTML = "Player X won";

    g6.style.color = "red";
    g7.style.color = "red";
    g8.style.color = "red";
  } else if (v2 == "X" && v5 == "X" && v8 == "X") {
    document.getElementById("print").innerHTML = "Player X won";

    g2.style.color = "red";
    g5.style.color = "red";
    g8.style.color = "red";
  } else if (v0 == "X" && v4 == "X" && v8 == "X") {
    document.getElementById("print").innerHTML = "Player X won";

    g0.style.color = "red";
    g4.style.color = "red";
    g8.style.color = "red";
  } else if (v2 == "X" && v4 == "X" && v6 == "X") {
    document.getElementById("print").innerHTML = "Player X won";

    g2.style.color = "red";
    g4.style.color = "red";
    g6.style.color = "red";
  } else if (v1 == "X" && v4 == "X" && v7 == "X") {
    document.getElementById("print").innerHTML = "Player X won";

    g1.style.color = "red";
    g4.style.color = "red";
    g7.style.color = "red";
  } else if (v3 == "X" && v4 == "X" && v5 == "X") {
    document.getElementById("print").innerHTML = "Player X won";

    g3.style.color = "red";
    g4.style.color = "red";
    g5.style.color = "red";
  }
  if (v0 == "O" && v1 == "O" && v2 == "O") {
    document.getElementById("print").innerHTML = "Player O won";

    g0.style.color = "red";
    g1.style.color = "red";
    g2.style.color = "red";
  } else if (v0 == "O" && v3 == "O" && v6 == "O") {
    document.getElementById("print").innerHTML = "Player O won";

    g0.style.color = "red";
    g3.style.color = "red";
    g6.style.color = "red";
  } else if (v6 == "O" && v7 == "O" && v8 == "O") {
    document.getElementById("print").innerHTML = "Player O won";

    g6.style.color = "red";
    g7.style.color = "red";
    g8.style.color = "red";
  } else if (v2 == "O" && v5 == "O" && v8 == "O") {
    document.getElementById("print").innerHTML = "Player O won";

    g2.style.color = "red";
    g5.style.color = "red";
    g8.style.color = "red";
  } else if (v0 == "O" && v4 == "O" && v8 == "O") {
    document.getElementById("print").innerHTML = "Player O won";

    g0.style.color = "red";
    g4.style.color = "red";
    g8.style.color = "red";
  } else if (v2 == "O" && v4 == "O" && v6 == "O") {
    document.getElementById("print").innerHTML = "Player O won";

    g2.style.color = "red";
    g4.style.color = "red";
    g6.style.color = "red";
  } else if (v1 == "O" && v4 == "O" && v7 == "O") {
    document.getElementById("print").innerHTML = "Player O won";

    g1.style.color = "red";
    g4.style.color = "red";
    g7.style.color = "red";
  } else if (v3 == "O" && v4 == "O" && v5 == "O") {
    document.getElementById("print").innerHTML = "Player O won";

    g3.style.color = "red";
    g4.style.color = "red";
    g5.style.color = "red";
  } else if (
    (v0 == "X" || v0 == "O") &&
    (v1 == "X" || v1 == "O") &&
    (v2 == "X" || v2 == "O") &&
    (v3 == "X" || v3 == "0") &&
    (v4 == "X" || v4 == "O") &&
    (v5 == "X" || v5 == "O") &&
    (v6 == "X" || v6 == "O") &&
    (v7 == "X" || v7 == "O") &&
    (v8 == "X" || v8 == "O")
  ) {
    document.getElementById("print").innerHTML = "Match Tie";
  }
}
// Function to congratulate the user when they win
function congratulateUser() {
  modal.style.display = "block";

  startConfetti();
}

function startConfetti() {
  const confettiElement = document.querySelector(".confetti");
  for (let i = 0; i < 100; i++) {
    const confetto = document.createElement("div");
    confetto.classList.add("confetto");
    confetto.style.left = Math.random() * 100 + "vw";
    confetto.style.animationDelay = Math.random() * 3 + "s";
    confettiElement.appendChild(confetto);
  }
}
function game() {
  arrayG.forEach((element) => {
    element.addEventListener("click", function () {
      // Update the active index
      activeIndex = this.getAttribute("data-index");

      if (flag == 0 && arrayG[activeIndex].innerHTML == "") {
        addX(activeIndex);
        check();
        win();
      } else if (flag == 1 && arrayG[activeIndex].innerHTML == "") {
        addO(activeIndex);
        check();
        win();
        flag = 0;
      }
    });
  });
}
function win() {
  if (out.innerHTML == "Player O won" || out.innerHTML == "Player X won") {
    congratulateUser();
  }
}
// Close the modal if user clicks outside of it
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload(); // Reload the page to reset the game
  }
});
game();
