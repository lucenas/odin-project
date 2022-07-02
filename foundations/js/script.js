let sum = (a, b) => a + b;

function capitalise(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function lastLetter(str) {
    return str[str.length - 1];
}

console.log("Hello, World!");
console.log("" + sum(2, 3) + " is the sum of 2 and 3.");
console.log(capitalise("nothing"));
console.log(lastLetter("This should only return 1"));

let button = document.querySelector('#btn');
button.addEventListener('click', (e) => {
    alert("Hello, World!");
    console.log(e);
    if (e.altKey) {
        console.log("Alt key used");
    }
});

// ---------- Rock, Paper, Scissors code ----------
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';
const GUESSES = [ROCK, PAPER, SCISSORS];

const PLAYER_WINS = 0;
const COMPUTER_WINS = 1;
const DRAW = 2;

const ARGUMENT_ERROR_MESSAGE = 'ERROR';

// Return either 'rock', 'paper', or 'scissors'.
function computerGuess() {
    let num = Math.floor(Math.random() * 3);
    console.log("Random: " + num);
    return GUESSES[num];
}

// Return 0 if the player wins, 1 if comuter wins, 2 if they draw.
// computerGuess and playerGuess should be strings of 'rock', 'paper',
// or 'scissors', otherwise 'ERROR' is returned.
function winCalculator(computerGuess, playerGuess) {
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
function playRPS(playerGuess) {
    let cGuess = computerGuess();
    let result = winCalculator(cGuess, playerGuess);
    console.log("Computer: " + cGuess + " Player: " + playerGuess + " Result: " + result);

    if (result == PLAYER_WINS) {
        numWins += 1;
    } else if (result == COMPUTER_WINS) {
        numLosses += 1;
    }

    scoreTrackertextContent = 'Player wins/losses: ' + wins + '/' + losses + '.';
}

// Add wins/losses counter.
let gameContainer = document.querySelector('#rps-game');
let scoreTracker = document.createElement('p');
gameContainer.insertBefore(scoreTracker, gameContainer.children[0]);

let numWins = 0;
let numLosses = 0;
updateWins(scoreTracker, numWins, numLosses);

// Modify buttons.
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => {
    playRPS(ROCK);
});
paperBtn.addEventListener('click', () => {
    playRPS(PAPER);
});
scissorsButton.addEventListener('click', () => {
    playRPS(SCISSORS);
});

