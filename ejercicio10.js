readline.question('Ingrese un número: ', number => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
    readline.close();
});

