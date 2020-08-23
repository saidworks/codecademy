const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
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
const determineWinner = (userChoice) => {
    if (userChoice === computerChoice()) {
        return console.log("The game was a tie!");
    } else if (userChoice === 'rock') {
        if (computerChoice() === "paper") {
            return console.log("Computer Won!");
        } else {
            return console.log("You won!")
        }
    } else if (userChoice === 'paper') {
        if (computerChoice() === "scissors") {
            return console.log("Computer Won!");
        } else {
            return console.log("You won!")
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice() === "rock") {
            return console.log("Computer Won!");
        } else {
            return console.log("You won!")
        }
    }
}

function playGame() {
    const userChoice = getUserChoice('scissors');
    const getComputerChoice = computerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + getComputerChoice);
    console.log(determineWinner(userChoice));
};
playGame()