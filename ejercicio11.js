function generateFibonacci(n) {
    let a = 0;
    let b = 1;
    const fibonacciSequence = [a]; // Inicializamos con el primer número 0

    for (let i = 1; i < n; i++) {
        const next = a + b;
        a = b;
        b = next;
        fibonacciSequence.push(a); // Añadimos el siguiente número a la secuencia
    }

    return fibonacciSequence;
}

// Ejemplo de uso:
const sequence = generateFibonacci(10);
console.log(sequence);
