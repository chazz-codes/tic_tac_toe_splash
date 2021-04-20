// establish global contants
document.addEventListener('DOMContentLoaded', () =>{
    const squares = document.querySelectorAll('.grid div') 
    const playerDisplay = document.querySelector('#player')
    const WINNING_COMBINATIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    let gameState = ["", "", "", "", "", "", "", "", ""];
    const winningMessageElement = document.getElementById('winning-msg')
    const winningMessageTextElement = document.getElementsByClassName('winning-msg-txt')
    const squareArray = Array.from(squares) // array not filled with values, empty cells
    console.log(squareArray) 
    var currentPlayer
 
    startGame()
    restartButton.addEventListener('click', startGame)

    function startGame(){
        squares.forEach(square => {
            square.classList.remove("playerX")
            square.classList.remove("playerO")
            square.removeEventListener('click', clickOutcome)
            square.addEventListener('click', clickOutcome, { once: true })
        currentPlayer = "playerX"
        playerDisplay.innerHTML = "X's Turn"
        })
        
        }
    



    // logic to populate square with an icon  --- Works
    function clickOutcome(e) { 
        playerDisplay.innerHTML = currentPlayer === "playerX" ? "O's Turn" : "X's Turn"  //displays current player at player display area
        const cell = e.target
        const index = squareArray.indexOf(cell) //provides numerical output of click location 
        
        console.log(index)
        console.log(e.target.classList)
        cell.classList.add(currentPlayer)
                
    //logic to determine which icon gets added to clicked square
            if (currentPlayer === "playerX"){
                squares[index].classList.add('playerX') //adds x value to current index/clicked box
                currentPlayer = "playerO"  //immeadiately changes current Player to O
                
            } else {
                squares[index].classList.add('playerO')
                currentPlayer = "playerX"
            } //closing to else statement


            function handleResultValidation() {
                let roundWon = false;
                for (let i = 0; i <= 7; i++) {
                    const winCondition = WINNING_COMBINATIONS[i];
                    let a = gameState[winCondition[0]];
                    let b = gameState[winCondition[1]];
                    let c = gameState[winCondition[2]];
                    if (a === '' || b === '' || c === '') {
                        continue;
                    }
                    if (a === b && b === c) {
                        roundWon = true;
                        break
                    }
                }
            
                if (roundWon) {
                    statusDisplay.innerHTML = winningMessage();
                    gameActive = false;
                    return;
                }
            
                let roundDraw = !gameState.includes("");
                if (roundDraw) {
                    statusDisplay.innerHTML = drawMessage();
                    gameActive = false;
                    return;
                }
        
 
                
    } // closing to click outcome function 

})  // closing to dom content loaded function

