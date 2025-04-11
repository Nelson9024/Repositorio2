const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber() {
    return new Promise(resolve => {
        readline.question('Por favor, ingrese un número mayor que 0: ', resolve);
    });
}

async function validateInput() {
    let number;

    do {
        const input = await askNumber();
        number = parseFloat(input);

        // Verificamos que el número sea válido y mayor que 0
        if (isNaN(number) || number <= 0) {
            console.log('Entrada no válida. Debe ser un número mayor que 0.');
        }
    } while (isNaN(number) || number <= 0);

    console.log(`Número ingresado correctamente: ${number}`);
    readline.close();
}

validateInput();
