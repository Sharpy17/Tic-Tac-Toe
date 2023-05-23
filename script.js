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
      substituteInfo(squaresArr[i]);
      evaluateWinner.evaluateS();
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
    squaresArr
  }

})();

let evaluateWinner = (function () {

  // Pre-requisites

  let board = displayGameFlow.boardMatrix;
  const player1 = [["X"], ["X"], ["X"]];
  const player2 = [["O"], ["O"], ["O"]];
  const squares = displayGameFlow.boardMatrix;
  console.log(board);
  // function arrayEquals(a, b, c) {
  //   return JSON.stringify(a) === JSON.stringify(b) && JSON.stringify(a) === JSON.stringify(c);

  // }

  function squaresEquals(i1, j1, i2, j2, i3, j3) {
    if (i2 === -1 || j2 === -1 || i3 === -1 || j3 === -1 ||
        i2 === 3 || j2 === 3 || i3 === 3 || j3 === 3)
      return false;
      return JSON.stringify(squares[i1][j1]) === JSON.stringify(squares[i2][j2]) && 
             JSON.stringify(squares[i1][j1]) === JSON.stringify(squares[i3][j3])
  }

  function determineWinner(i, j) {
    if (squares[i][j] === "X") {
      console.log("Player1 wins!");
    } else if (squares[i][j] === "O") {
      console.log("Player2 wins!");
    } else {
      console.log(squares[i][j]);
    }
  }

  // Evaluation

  function evaluateS () { 
   for (let i = 0; i < squares.length; i++) {
    for (let j = 0; j < squares.length; j++) {
      if (squares[i][j] !== []) {
        if (squaresEquals(i, j, i, j - 1, i, j + 1) ||
            squaresEquals(i, j, i + 1, j, i - 1, j) || 
            squaresEquals(i, j, i + 1, j + 1, i - 1, j - 1) || 
            squaresEquals(i, j, i + 1, j - 1, i - 1, j + 1)) {
            determineWinner(i, j);
          }
    } else {
      console.log("Your mom is dead");
    }
   }
}}

  return {
    player1,
    board,
    evaluateS
  }
})();

