
const status = document.getElementById('guessAmount');


let numberOfTries = 4;
let numberOfGuesses = 1;


function isRight(guess, correctNumber) {

    if (guess < correctNumber) {
        numberOfTries--;
        numberOfGuesses++;
        status.textContent = numberOfTries;
        status.textContent = 'Your Guess Was Too Low! you have ' + numberOfTries + ' left!';
    
    } else if (guess > correctNumber) {
        numberOfTries--;
        numberOfGuesses++;
        status.textContent = numberOfTries;
        status.textContent = 'Your Guess Was Too High! you have ' + numberOfTries + ' left!';
        
    } else {
        status.textContent = 'NAILED IT! in ' + numberOfGuesses + ' tries!';
    }
    
}

function buttonCancel() {
    if (numberOfTries === 0) {
        document.getElementById('guessNumberButton').disabled = true;
    }
}

export default isRight;
export { buttonCancel };