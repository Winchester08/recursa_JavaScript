/**********1     ***********/

function Encontrarmayor (numeros){
    let mayor = numeros[0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros[i] > mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
}

let numeros = [3, 7, 2, 9, 5];
let mayor = Encontrarmayor(numeros);
console.log("El numero mayor es: " + mayor);



/***********Ejercios  para revisar en clase *******/
 function vocales (cadena)  {
    let contador =0;
    const palabra = "aeiou";
    const cadenaMinuscula = cadena.toLowerCase();
    for (let caracter of cadenaMinuscula) {
        if (palabra.includes(caracter)) {
            contador++;
        }
    }
    return contador;
 }

console.log("la cantidad de vocales son:"+vocales("otorrinolaringologo"));