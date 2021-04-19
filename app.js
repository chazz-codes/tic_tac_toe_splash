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
                
    //logic to determine which icon gets added to clicked square
            if (currentPlayer === "playerX"){
                squares[index].classList.add('playerX') //adds x value to current index/clicked box
                currentPlayer = "playerO"  //immeadiately changes current Player to O
                
            } else {
                squares[index].classList.add('playerO')
                currentPlayer = "playerX"
            } //closing to else statement
        
            if (checkWin(currentPlayer)){
                
            }

        

    // check for winning outcome function --- run this every time user clicks
        function checkWin(currentPlayer) {
            return WINNING_COMBINATIONS.some(combination => {
                // if some array in combinations has every index filled with currentPlayer, function is true
                return combination.every(index => {
                return squareArray[index].classList.contains(currentPlayer)
                })})} //closing to check win function 
                
    } // closing to click outcome function 

})  // closing to dom content loaded function

