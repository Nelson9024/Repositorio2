function bubbleSort(numbers) {
    const n = numbers.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                // Intercambiar números
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }
    return numbers;
}

// Ejemplo de uso:
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original:", numbers);
console.log("Array ordenado:", bubbleSort(numbers));
