import isRight from './isRight.js';

const button = document.getElementById('guessNumberButton');
//const status = document.getElementById('guessAmount');
//const input = document.getElementById('number-guesser');
const correctNumber = Math.ceil(Math.random() * 10); 

button.addEventListener('click', () => {
    const guess = document.getElementById('number-guesser').value;
    isRight(guess, correctNumber);
});