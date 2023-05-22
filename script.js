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

  let gameFlow = [];
  let boardMatrix = [];
  for (let i = 0; i < 3; i++) {
    boardMatrix[i] = [];
    for (let j = 0; j < 3; j++) {
      boardMatrix[i][j] = [];
      for (let z = 0; z < 1; z++) {
        boardMatrix[i][j][z] = "X";
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
    gameFlow,
    translateInformation
  }
})();



let getInfoFromUser = (function () {

  // Pre-requisites

  const squares = document.querySelectorAll("div");
  const squaresArr = Array.from(squares);

  // Event Listeners
  
  // squaresArr.forEach((item) => {
  //   let marker = displayGameFlow.gameFlow.length % 2 === 0 ? "X" : "O";
  //   console.log(marker);
  //   item.addEventListener("click", pushToGameFlow(marker), {capture: true});
  //   item.addEventListener("click", substituteInfo(item, marker), {capture: true});
  // });

  // Manipulate Information
  
  function pushToGameFlow(marker) {
    displayGameFlow.gameFlow.push(marker);
  }

  function substituteInfo(square, marker) {
    const squareName = square.className
    const row = squareName.slice(0, 1);
    const column = squareName.slice(2, 3);
    displayGameFlow.boardMatrix[row][column].push(marker); 
  }; 

})();

let evaluateWinner = (function () {

  // Variables

  let board = displayGameFlow.boardMatrix;


  // Evaluation

  if (board[0 || 1 || 2] === "X, X, X" || board[0 || 1 || 2] === "O, O, O") {
    
  }
})();