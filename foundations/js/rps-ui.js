const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const GUESSES = [ROCK, PAPER, SCISSORS];

const PLAYER_WINS = 0;
const COMPUTER_WINS = 1;
const DRAW = 2;

const ARGUMENT_ERROR_MESSAGE = 'ERROR';

// Return either 'rock', 'paper', or 'scissors'.
function computerPlay() {
    return GUESSES[Math.floor(Math.random() * 3)];
}

// Return 0 if the player wins, 1 if comuter wins, 2 if they draw.
// computerGuess and playerGuess should be strings of 'rock', 'paper',
// or 'scissors', otherwise 'ERROR' is returned.
function winCalculator(computerGuess = computerPlay(), playerGuess) {
    if (typeof (computerGuess) != 'string' || typeof (playerGuess) != 'string'
        || arguments.length != 2) {
        return ARGUMENT_ERROR_MESSAGE;
    }

    switch (computerGuess) {
        case ROCK:
            if (playerGuess == PAPER) {
                return PLAYER_WINS;
            } else if (playerGuess == SCISSORS) {
                return COMPUTER_WINS;
            } else if (playerGuess == ROCK) {
                return DRAW;
            }
            break;

        case PAPER:
            if (playerGuess == SCISSORS) {
                return PLAYER_WINS;
            } else if (playerGuess == ROCK) {
                return COMPUTER_WINS;
            } else if (playerGuess == PAPER) {
                return DRAW;
            }
            break;

        case SCISSORS:
            if (playerGuess == ROCK) {
                return PLAYER_WINS;
            } else if (playerGuess == PAPER) {
                return COMPUTER_WINS;
            } else if (playerGuess == SCISSORS) {
                return DRAW;
            }
            break;
    }

    // If we reach here, an input is wrong.
    return ARGUMENT_ERROR_MESSAGE;
}

// Updates scoreTracker according to whether playerGuess beats a
// randomised computer guess.
function playRound(playerGuess) {
    let cGuess = computerPlay();
    let result = winCalculator(cGuess, playerGuess);

    // Add game info line.
    let info = document.createElement('li');
    info.textContent = "Computer: " + cGuess + ", Player: " + playerGuess + ".";
    infoContainer.insertBefore(info, infoContainer.children[0]);

    if (result == PLAYER_WINS) {
        winCounter.textContent = parseInt(winCounter.textContent) + 1;
        info.style.color = 'green';
    } else if (result == COMPUTER_WINS) {
        lossCounter.textContent = parseInt(lossCounter.textContent) + 1;
        info.style.color = 'red';
    } else if (result == DRAW) {
        drawCounter.textContent = parseInt(drawCounter.textContent) + 1;
        info.style.color = 'blue';
    }

    // Update scores.
}

let gameContainer = document.querySelector('#rps-game');
let winCounter = document.querySelector("#wins #score");
let lossCounter = document.querySelector("#losses #score");
let drawCounter = document.querySelector("#draws #score");

let infoContainer = document.createElement('ul');
gameContainer.appendChild(infoContainer);

// Modify buttons.
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRound(ROCK);
});
paperBtn.addEventListener('click', () => {
    playRound(PAPER);
});
scissorsButton.addEventListener('click', () => {
    playRound(SCISSORS);
});

