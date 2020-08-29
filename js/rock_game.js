const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('Your choice is not incorrect, please try again!')
    }
};
const computerChoice = () => {
    const r = Math.floor(Math.random() * 3);
    if (r === 0) {
        return 'rock'
    } else if (r === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "The game was a tie!";
    } else if (userChoice === 'bomb') {
        return "You win!";
    } else if (userChoice === 'rock') {
        if (computerChoice === "paper") {
            return "Computer Won!";
        } else {
            return "You won!";
        }
    } else
    if (userChoice === 'paper') {
        if (computerChoice === "scissors") {
            return "Computer Won!";
        } else {
            return "You won!";
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === "rock") {
            return "Computer Won!";
        } else {
            return "You won!";
        }
    }
}

function playGame() {
    const userChoice = getUserChoice('paper');
    const getComputerChoice = computerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + getComputerChoice);
    console.log(determineWinner(userChoice, getComputerChoice));
};