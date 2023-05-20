let displayGameFlow = (function () {
  // Cache DOM
  const gameBoard = document.querySelector(".game-board");
  // Game information
  let boardMatrix = [];
  for (let i = 0; i < 3; i++) {
    boardMatrix[i] = [];
    for (let j = 0; j < 3; j++) {
      boardMatrix[i][j] = [];
      for (let z = 0; z < 1; z++) {
        boardMatrix[i][j][z] = "x";
      }
    }
  }
  // Translate information
  function translateInformation(row, column) {
    boardMatrix[row][column] = 
  }

  // Create Grid
    function createGrid() {
    for (let row = 0; row < 3; row++) {
      for (let column = 0; column < 3; column++) {
        const square = document.createElement("div");
        square.classList.add(`${row}, ${column}`)
        gameBoard.appendChild(square);
      }
    }
  };
  return {
    boardMatrix,
    createGrid,
    translateInformation
  }
})();
