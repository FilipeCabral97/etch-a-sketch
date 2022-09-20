const container = document.querySelector(".container");
const button = document.querySelector(".prompt-btn");

let squares = [];

// ---------------------------------------------

const setEventListeners = () => {
  // HOVER EVENT LISTENER
  squares.forEach((square) => {
    square.addEventListener(
      "mouseover",
      () => (square.style.backgroundColor = "rgb(41, 13, 66)")
    );
  });
};

const getSquares = () => {
  let numOfSquares;

  // GET NUMBER OF SQUARES PER SIDE
  while (true) {
    numOfSquares = parseInt(
      prompt("Select a number of squares per side. (max 100)", "64")
    );

    if (numOfSquares < 1) {
      alert("Positive numbers only");
    } else if (numOfSquares > 100) {
      alert("Max 100");
    } else {
      break;
    }
  }

  // REMOVE SQUARES BEFORE RENDER NEW ONES
  squares.forEach((square) => square.remove());
  squares = [];

  // RENDER NEW SQUARES
  for (let i = 0; i < numOfSquares; i++) {
    for (let j = 0; j < numOfSquares; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      squares.push(square);
    }
  }
  squares.forEach((square) => container.appendChild(square));
  container.style = `grid-template-columns: repeat(${numOfSquares}, 1fr)`;
  setEventListeners();
};

const render = () => {
  for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      squares.push(square);
    }
  }
  squares.forEach((square) => container.appendChild(square));
  button.addEventListener("click", getSquares);

  // HOVER EVENT LISTENER
  setEventListeners();
};

// ---------------------------------------------

render();
