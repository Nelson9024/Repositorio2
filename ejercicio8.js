function sumPositiveNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    console.log(`La suma de los números positivos es: ${sum}`);
}

// Ejemplo de uso:
const numbers = [-1, 2, -3, 4, 0, 5];
sumPositiveNumbers(numbers);
// Resultado: La suma de los números positivos es: 11