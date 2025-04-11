function findFirstMultipleOfFive(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 5 === 0) {
            return numbers[i];
        }
    }
    return undefined; // Si no se encuentra ningún múltiplo de 5
}
