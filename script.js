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
  let marker = "X";
  // Event Listeners
  
//while (filled != 9) {
  //squaresArr.forEach((item) => {
    // let marker = displayGameFlow.gameFlow.length % 2 === 0 ? "X" : "O";
    // console.log(marker);
    // squaresArr[filled].addEventListener("mouseover", pushToGameFlow(marker));
    // item.addEventListener("mouseover", substituteInfo(item, marker));
  //});

  for (let i = 0; i < squaresArr.length; i++) {
    squaresArr[i].addEventListener("click", pushToGameFlow);
    squaresArr[i].addEventListener("click", () => {
      substituteInfo(squaresArr[i])
    })
    // squaresArr[i].addEventListener("click", () => {
    //   console.log("Chika gay!");
    //   pushToGameFlow(marker);
    //   console.log(displayGameFlow.gameFlow);
    // });
  }
//}
  

  // Manipulate Information
  
  function pushToGameFlow() {
    console.log(marker);
    displayGameFlow.gameFlow.push(marker);
    if (marker == "X") marker = "O";
    else marker = "X";
    }

  function substituteInfo(square) {
    const squareName = square.className
    const row = squareName.slice(0, 1);
    const column = squareName.slice(2, 3);
    displayGameFlow.boardMatrix[row][column].push(marker); 
    displayGameFlow.translateInformation(row, column);
    evaluateWinner.evaluateS();
  }; 

  return {
  }

})();

let evaluateWinner = (function () {

  // Pre-requisites

  let board = displayGameFlow.boardMatrix;
  const player1 = [["X"], ["X"], ["X"]];
  const player2 = [["O"], ["O"], ["O"]];
  console.log(board);
  function arrayEquals(a, b) {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  // Evaluation

  function evaluateS () { 
  if (arrayEquals(board[0], player1) ||
      arrayEquals(board[1], player1) ||
      arrayEquals(board[2], player1)) {
      return console.log("Player1 wins!");
  } else if (
      arrayEquals(board[0][0], ["X"]) &&
      arrayEquals(board[1][0], ["X"]) && 
      arrayEquals(board[2][0], ["X"]) ||
      arrayEquals(board[0][1], ["X"]) &&
      arrayEquals(board[1][1], ["X"]) && 
      arrayEquals(board[2][1], ["X"]) ||
      arrayEquals(board[0][2], ["X"]) &&
      arrayEquals(board[1][2], ["X"]) && 
      arrayEquals(board[2][2], ["X"])) {
      return console.log("Player1 wins!");
  } else if (arrayEquals(board[0], player2) ||
      arrayEquals(board[1], player2) ||
      arrayEquals(board[2], player2)) {
      return console.log("Player2 wins!");
  } else if (
      arrayEquals(board[0][0], ["O"]) &&
      arrayEquals(board[1][0], ["O"]) && 
      arrayEquals(board[2][0], ["O"]) ||
      arrayEquals(board[0][1], ["O"]) &&
      arrayEquals(board[1][1], ["O"]) && 
      arrayEquals(board[2][1], ["O"]) ||
      arrayEquals(board[0][2], ["O"]) &&
      arrayEquals(board[1][2], ["O"]) && 
      arrayEquals(board[2][2], ["O"])) {
      return console.log("Player2 wins!");
  } else if (arrayEquals(board[0][0], ["X"]) && 
      arrayEquals(board[1][1], ["X"]) &&
      arrayEquals(board[2][2], ["X"]) ||
      arrayEquals(board[0][2], ["X"]) &&
      arrayEquals(board[1][1], ["X"]) &&
      arrayEquals(board[2][0], ["X"])) {
      return console.log("Player1 wins!");
  } else if (arrayEquals(board[0][0], ["O"]) && 
      arrayEquals(board[1][1], ["O"]) &&
      arrayEquals(board[2][2], ["O"]) ||
      arrayEquals(board[0][2], ["O"]) &&
      arrayEquals(board[1][1], ["O"]) &&
      arrayEquals(board[2][0], ["O"])) {
      return console.log("Player2 wins!");
  };
}

  return {
    player1,
    board,
    evaluateS
  }
})();

