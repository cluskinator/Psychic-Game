//alphabet and letter choice.
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var psychicletter = "";

//variable init.  used let per gabe's instruction cause let is a little more flexible.  not sure if it matter in this case.
let wins = 0;
let losses = 0;
let guesses = 9;
let guessesRemaining = 9;
let guessedLetters = [];


//Lets the computer select a random letter from the available choices
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

function updateguessesRemaining() {
    document.querySelector('#guesses-remaining').innerHTML = guessesRemaining;
};

function updatepsychicletter() {
    this.psychicletter = this.alphabet[Math.floor(Math.random() * this.alphabet.length)];
};

function updateGuessesSoFar() {
    // Here we take the guesses the user has tried -- then display it as letters separated by commas. 
    document.querySelector("#wrong-guesses").innerHTML = guessedLetters.join(', ');
};
// reset game function.  sets values to their original state and updates the variables in above functions.
var resetgame = function() {
    totalGuesses = 9;
    guessesRemaining = 9;
    guessedLetters = [];
    updatepsychicletter();
    updateguessesRemaining();
    updateGuessesSoFar();
}

updatepsychicletter();
updateguessesRemaining();

//game function.
document.onkeyup = function (event) {
    var guess = String.fromCharCode(event.keyCode).toLowerCase();

    guessesRemaining--;
    guessedLetters.push(guess);
    updateguessesRemaining();
    updateGuessesSoFar();

//stack overflow people recommended queryselector.  had been having an issue with wins being null due to scope/ordering of text.
    if (guessesRemaining > 0) {
        if (guess == psychicletter) {
        wins++;
        document.querySelector('#wins').innerHTML = wins;
        
        resetgame();
        }
    } else if (guessesRemaining == 0) {
        //increment losses.
        losses++;
        document.querySelector('#losses').innerHTML = losses;
        
        //reset game to start over.
        resetgame();

    }
} 

