


const variable = [1, 2, 3, 4];

function doblarRecursivo(arreglo) {
    // CASO BASE: Si el arreglo está vacío, terminamos
    if (arreglo.length === 0) {
        return [];
    }

    // CASO RECURSIVO:
    // Tomamos el primer número, lo doblamos, y lo unimos
    // al resultado de llamar a la función de nuevo con el resto del arreglo.
    const primeroDoblado = arreglo[0] * 2;
    const restoDelArreglo = arreglo.slice(1);

    return [primeroDoblado, ...doblarRecursivo(restoDelArreglo)];
}

const Resultado = doblarRecursivo(variable);
console.log(Resultado); // [2, 4, 6, 8]