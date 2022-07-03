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
    if (typeof(computerGuess) != 'string' || typeof(playerGuess) != 'string'
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
        numWins += 1;
        info.style.color = 'green';
    } else if (result == COMPUTER_WINS) {
        numLosses += 1;
        info.style.color = 'red';
    } else if (result == DRAW) {
        info.style.color = 'blue';
    }

    // Update score tracker.
    scoreTracker.textContent = 'Player wins/losses: ' + numWins + '/' + numLosses + '.';
}

// Add wins/losses counter.
let gameContainer = document.querySelector('#rps-game');
let scoreTracker = document.createElement('p');
gameContainer.insertBefore(scoreTracker, gameContainer.children[0]);

let numWins = 0;
let numLosses = 0;
scoreTracker.textContent = 'Player wins/losses: 0/0.';

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

