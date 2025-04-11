const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false // Desactiva el eco del input
});

let sum = 0;

async function sumNumbers() {
    let input = '';
    while (input !== '0') {
        input = await new Promise(resolve => {
            readline.question('Ingrese un número (0 para terminar): ', resolve);
        });

        const number = parseFloat(input);

        if (isNaN(number)) {
            console.log('Entrada inválida. Por favor, ingrese un número.');
            continue; // Vuelve al inicio del bucle
        }

        sum += number;
        console.log(`Suma parcial: ${sum}`);
    }

    console.log(`La suma total es: ${sum}`);
    readline.close();
}

sumNumbers(); // Iniciar el proceso de suma
