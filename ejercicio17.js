const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const correctPassword = 'password123';
let attempts = 0;

async function loginAttempt() {
    while (attempts < 3) {
        const password = await new Promise(resolve => {
            readline.question('Ingrese la contraseña: ', resolve);
        });

        attempts++;

        if (password === correctPassword) {
            console.log('¡Acceso concedido!');
            readline.close();
            return;
        }

        console.log(`Contraseña incorrecta. Intento ${attempts} de 3.`);
    }

    console.log('Acceso denegado. Número máximo de intentos alcanzado.');
    readline.close();
}

loginAttempt(); // Iniciar el proceso de inicio de sesión
