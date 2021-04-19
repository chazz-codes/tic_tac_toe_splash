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
    const squareArray = Array.from(squares)
    
    let currentPlayer = "playerX"


    startGame()
    restartButton.addEventListener('click', startGame)

    function startGame(){
        squares.forEach(square => {
            square.classList.remove("playerX")
            square.classList.remove("playerO")
            square.removeEventListener('click', clickOutcome)
            square.addEventListener('click', clickOutcome, { once: true })
          })
          
        }
        
    



        // add a click event listener to every grid div   
        squares.forEach(square => {
            square.addEventListener('click', clickOutcome, {once: true})
        })



        // logic to populate square with an icon 
        function clickOutcome(e) { 
            const cell = e.target

        
        // processes running everytime a square is clicked
            const index = squareArray.indexOf(cell) //provides numerical output of click location 
            console.log(index)
            playerDisplay.innerHTML = currentPlayer  //displays current player at player display area

            
        //logic to determine which icon gets added to clicked square
            if (currentPlayer === "playerX"){
                squares[index].classList.add('playerX') //adds x value to current index/clicked box


        // check win conditional 
                // if (checkWin(currentPlayer)) {
                //     endGame(false)
                //     } else if (isDraw()) {
                //     endGame(true)
                //     } else {
                //     setBoardHoverClass()
                //     }
                currentPlayer = "playerO"  //immeadiately changes current Player to O
            } else {
                squares[index].classList.add('playerO')
        

        // check win conditional 
                // if (checkWin(currentPlayer)) {
                //     endGame(false)
                // } else if (isDraw()) {
                //     endGame(true)
                // } else {
                //     setBoardHoverClass()
                // }
                currentPlayer = "playerX"
            } //closing to else statement
            

        // check for winning outcome function --- run this every time user clicks
            function checkWin(currentClass) {
                return WINNING_COMBINATIONS.some(combination => {
                    return combination.every(index => {
                    return squareArray[index].classList.contains(currentClass)
                    })})} //closing to check win function 
                    
        // // game is draw function
        //                 function isDraw() {
        //                     return [squareArray].every(cell => {
        //                         return cell.classList.contains("playerX") || cell.classList.contains("playerO")
        //                     })
        //                     }
        // // end Game function 
        //         function endGame(draw) {
        //             if (draw) {
        //             winningMessageTextElement.innerText = 'Draw!'
        //             } else {
        //             winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
        //             }
        //             winningMessageElement.classList.add('show')
        //         }
        } // closing to click outcome function 

        })  // closing to dom content loaded function

