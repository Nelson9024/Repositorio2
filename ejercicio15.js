const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function askMenu() {
    return new Promise(resolve => {
        readline.question(`
        --- Menú ---
        1. Opción 1
        2. Opción 2
        3. Opción 3
        4. Salir
        Elija una opción: `, resolve);
    });
}

async function showMenu() {
    let userChoice;

    do {
        userChoice = await askMenu();

        switch (userChoice) {
            case '1':
                console.log('Has elegido la Opción 1');
                break;
            case '2':
                console.log('Has elegido la Opción 2');
                break;
            case '3':
                console.log('Has elegido la Opción 3');
                break;
            case '4':
                console.log('Saliendo del programa...');
                break;
            default:
                console.log('Opción no válida. Por favor, elige una opción válida.');
        }
    } while (userChoice !== '4');

    readline.close();
}

showMenu();
