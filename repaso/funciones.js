//funcion simple function 
//------------------------------------------------------------------
//function prueba1(nombre, profesion) {
function prueba1() {
   let a = "Prueba";
   let b= "Error"
    let x = 'Ejecutando funcion en JS';
    // utilizando parametros
    //return (`El alumno seleccionado fue: ${nombre},  ${profesion}`);
    return (`La programacion es : ${a},  ${b}`);
    //console.log(`El alumno seleccionado fue: ${nombre}, edad:${edad} y su profesion
      //  es: ${profesion} `);
}
//------------------------------------------------------------------
//funcion anonima 
//utilizando los argumentos
//let resultado = prueba1("Karla", "Chef");
let resultado = prueba1();
console.log(resultado);

//------------------------------------------------------------------
//funcion flecha ES6 

const flecha = (nombre) => {
    return(`${nombre}, Ejecutando la funcion flecha`);
}

//flecha("RW");
console.log(flecha("RW"));

const vocales = () => {
    let palabra = "parangaricutirimicuaro";
    let vocales = "aeiou";
    conteo = 0;
    for (letra of palabra){
        //console.log(letra);
        
        if (vocales.includes(letra)){   
            conteo++
            
    }
}
console.log("la palabra fue", palabra);
console.log("El total de vocales fueron", conteo);

}

vocales();

//---------------------------
const cuadrados = () => {

    let n1 = [2, 4, 6, 21 ,8 ,10, 15, 12, 99, 150];
    let n2 = [];

    for (r of n1){
        n2.push(r*r);
    }
    console.log("El nuevo arreglo es ahora:", n2);
    
}
cuadrados();