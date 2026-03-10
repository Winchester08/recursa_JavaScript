// Función para encontrar el número mayor
function encontrarMayor(numeros) {
    var mayor = numeros[0]; // Empezamos con el primer número
    for (var i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
}

// Función para contar vocales
function contarVocales(texto) {
    var vocales = "aeiouAEIOU";
    var contador = 0;
    for (var i = 0; i < texto.length; i++) {
        if (vocales.indexOf(texto[i]) !== -1) {
            contador = contador + 1;
        }
    }
    return contador;
}

// Función para sumar solo números pares
function sumarPares(numeros) {
    var suma = 0;
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            suma = suma + numeros[i];
        }
    }
    return suma;
}


// Función flecha: Números al cuadrado
const elevarAlCuadrado = (numeros) => {
    var nuevosNumeros = [];
    for (var i = 0; i < numeros.length; i++) {
        nuevosNumeros.push(numeros[i] * numeros[i]);
    }
    return nuevosNumeros;
};