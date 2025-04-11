function findName(names, targetName) {
    const position = names.indexOf(targetName);
    if (position !== -1) {
        console.log(`El nombre "${targetName}" se encuentra en la posición ${position}.`);
    } else {
        console.log(`El nombre "${targetName}" no se encuentra en la lista.`);
    }
}

// Ejemplo de uso:
const names = ["Juan", "María", "Pedro", "Ana", "Luis"];
const targetName = "Pedro";
findName(names, targetName);
// Resultado: El nombre "Pedro" se encuentra en la posición 2.