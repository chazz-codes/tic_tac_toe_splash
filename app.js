const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
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


const cellElements = document.getElementsByClassName("gamecell");
const boardElements = document.getElementsByClassName("gameboard");
const winningMessageTextElement = document.getElementById("popup");


let circleTurn

startGame()

function startGame(){

cellElements.forEach(cell =>{
    gamecell.addEventListener('click', handleClick, {once: true})
})

function handleClick(e) {
const cell = e.target
const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
placeMark(gamecell, currentClass)
if (checkWin(currentClass)) {
    endGame(false)
}




swapTurns()
setBoardHoverClass()
}

function endGame(draw){
    if (draw) {

    } else {
        winningMessageTextElement
    }
}

function placeMark(gamecell, currentClass){
    if (checkWin(currentClass)){
 gamecell.classList.add(currentClass)
}}

function swapTurns(){
    circleTurn = !circleTurn
}

function setBoardHoverClass() {
gameboard.classList.remove(X_CLASS)
gameboard.classList.remove(CIRCLE_CLASS)
if (circleTurn) {
    gameboard.classList.add(CIRCLE_CLASS)
} else {
    gameboard.classList.add(X_CLASS)
    }
}

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}}

