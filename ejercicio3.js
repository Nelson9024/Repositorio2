function countEvenNumbers(numbers) {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            count++;
        }
    }
    
    console.log(`Hay ${count} números pares.`);
}

// Ejemplo de uso:
const numbers = [1, 2, 3, 4, 5, 6];
countEvenNumbers(numbers);