const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingrese un número para contar regresivamente: ', number => {
    number = parseInt(number);
    let i = number;
    while (i >= 0) {
        console.log(i);
        i--;
    }
    rl.close();
});
