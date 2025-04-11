let suma = 0;

// Usamos un bucle for para recorrer los números del 1 al 50
for (let i = 1; i <= 50; i++) {
    // Usamos if para comprobar si el número es impar
    if (i % 2 !== 0) {
        suma += i;
    }

    // Usamos while para verificar si la suma supera 500
    while (suma > 500) {
        console.log("La suma ha superado 500, el proceso se detiene.");
        break; // Si la suma supera 500, detenemos el proceso
    }

    // Si la suma ya ha superado 500, salimos del bucle
    if (suma > 500) {
        break;
    }
}

// Imprimimos el resultado final
console.log("La suma de los números impares entre 1 y 50 es: " + suma);