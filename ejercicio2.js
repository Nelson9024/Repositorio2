function findMaxMin(numbers) {
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)
    };
}

// Ejemplo de uso:
const numbers = [5, 2, 9, 1, 7];
const result = findMaxMin(numbers);
console.log(`Máximo: ${result.max}, Mínimo: ${result.min}`);
// Resultado: Máximo: 9, Mínimo: 1