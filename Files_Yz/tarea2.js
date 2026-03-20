// Ejercicio de Condicionales: Par o Impar
let numero = 1; 
if (numero % 2 === 0) {
    console.log("El número " + numero + " es Par");
} else {
    console.log("El número " + numero + " es Impar");
}

// Ejercicio de Ciclos: Tabla del 5
let tabla = 5;

console.log("--- Tabla del " + tabla + " ---");
for (let i = 1; i <= 10; i++) {
    let resultado = tabla * i;
    console.log(tabla + " x " + i + " = " + resultado);
}

// Ejercicio de Lógica: Clasificación de edad
let edad = 20;

if (edad < 13) {
    console.log("Eres un niño.");
} else if (edad >= 13 && edad < 18) {
    console.log("Eres un adolescente.");
} else {
    console.log("Eres un adulto.");
}