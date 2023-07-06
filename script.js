let createGrid = (function () {

  // Cache DOM

  const gameBoard = document.querySelector(".game-board");

  // Create Grid

  for (let row = 0; row < 3; row++) {
    for (let column = 0; column < 3; column++) {
      const square = document.createElement("div");
      gameBoard.appendChild(square);
      square.classList.add(`${row}-${column}`);
    }
  }
})();



let displayGameFlow = (function () {

  // Game information

  let boardMatrix = [];
  for (let i = 0; i < 3; i++) {
    boardMatrix[i] = [];
    for (let j = 0; j < 3; j++) {
      boardMatrix[i][j] = [];
      for (let z = 0; z < 1; z++) {
      }
    }
  }

  // Translate information

  function translateInformation(row, column) {
    const squares = document.getElementsByClassName(`${row}-${column}`);
    const squaresArr = Array.from(squares); 
    squaresArr[0].textContent = boardMatrix[row][column];
  };

  return {
    boardMatrix,
    translateInformation
  }
})();



let evaluateWinner = (function () {

  // Pre-requisites

  const board = displayGameFlow.boardMatrix;
  const winner = document.querySelector(".winner");
  const squaresNode = document.querySelectorAll("div");
  const squares = Array.from(squaresNode);

  function arrayEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  function squaresEqual(i1, j1, i2, j2, i3, j3) {
    if (i2 === -1 || j2 === -1 || i3 === -1 || j3 === -1 ||
        i2 === 3 || j2 === 3 || i3 === 3 || j3 === 3) {
      return false; 
    } else {
      return JSON.stringify(board[i1][j1]) === JSON.stringify(board[i2][j2]) && 
             JSON.stringify(board[i1][j1]) === JSON.stringify(board[i3][j3])
  }}

  // Evaluation

  function evaluate () { 
   for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (!arrayEquals(board[i][j], [])) {
        if (squaresEqual(i, j, i, j - 1, i, j + 1) ||
            squaresEqual(i, j, i + 1, j, i - 1, j) || 
            squaresEqual(i, j, i + 1, j + 1, i - 1, j - 1) || 
            squaresEqual(i, j, i + 1, j - 1, i - 1, j + 1)) {
          winner.textContent = `Player ${board[i][j]} wins!`;
      }
    }
  }
}}

// function findDraw () {
//   squares.every(square => {
//     return square.textContent !== "" ? winner.textContent = "It's a draw" : false;
//   })
// };

 function findDraw (square) {
    return square.textContent !== "";
 }




  return {
    evaluate,
    findDraw,
    winner,
    squares,
    arrayEquals
  }
})();



let getInfoFromUser = (function () {

  // Pre-requisites

  const squaresArr = evaluateWinner.squares;
  const reset = document.querySelector(".reset");
  const board = displayGameFlow.boardMatrix;
  let marker = "X";

  // Event Listeners
  
  for (let i = 0; i < squaresArr.length; i++) {
    squaresArr[i].addEventListener("click", () => {
      substituteInfo(squaresArr[i]);
      if (squaresArr.every(evaluateWinner.findDraw)) {
        evaluateWinner.winner.textContent = "It's a draw!";
      }
    });
  };

  reset.addEventListener("click", clearSquare);

  // Manipulate Information

  function substituteInfo(square) {
    const squareName = square.className
    const row = squareName.slice(0, 1);
    const column = squareName.slice(2, 3);
    if (evaluateWinner.arrayEquals(board[row][column], [])) {
      board[row][column].push(marker); 
      displayGameFlow.translateInformation(row, column);
      if (marker === "X") marker = "O";
      else marker = "X";
      evaluateWinner.evaluate();
    } else {
      return "Your mom is gay!";
    }
  }; 

  function clearSquare() {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        board[i][j].pop();
      }
    }
    for (let i = 0; i < squaresArr.length; i++) {
      squaresArr[i].textContent = "";
    }
    evaluateWinner.winner.textContent = "";
  }

  return {
    squaresArr
  }

})(); 


