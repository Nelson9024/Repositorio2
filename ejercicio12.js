const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const numberToGuess = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function askQuestion(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function guessNumber() {
    while (attempts < 3) {
        const guess = await askQuestion('Adivine un número entre 1 y 10: ');
        const parsedGuess = parseInt(guess);
        attempts++;

        if (parsedGuess === numberToGuess) {
            console.log('¡Correcto!');
            rl.close();
            return;
        } else if (attempts === 3) {
            console.log(`Lo siento, el número era ${numberToGuess}.`);
            rl.close();
            return;
        } else {
            console.log('Incorrecto, intente nuevamente.');
        }
    }
}

guessNumber();
