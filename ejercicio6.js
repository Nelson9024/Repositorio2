function invertArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }

    return arr;
}

// Ejemplo de uso:
const originalArray = [1, 2, 3, 4, 5];
const invertedArray = invertArrayInPlace(originalArray);
console.log("Array invertido:", invertedArray);
// Resultado: Array invertido: [5, 4, 3, 2, 1]