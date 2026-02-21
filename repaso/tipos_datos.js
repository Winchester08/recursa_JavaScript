//tipos de datos en JS
// tipo cadena
// tipo int
// tipo booleano
// tipo float
// tipo objeto

let a = "JavaScript es un lenguaje tipado";//tipo cadena

console.log(a.toLocaleUpperCase()); 
console.log(a.toLowerCase());
//console.log(a.length);
let a1 = a.slice(0, 32);
console.log(a1.replace(" ", "_"));

let x = "colibri ";
console.log(x.length);
let p = x.toLocaleUpperCase();

console.log(a.replace("lenguaje", p));
//console.log(a.includes("perro"));

console.log(a.slice(11, 25));

let edad = 34;// tipo entero

let impuesto = 15.6; // tipo flotante

console.log(typeof(edad));
console.log(typeof(impuesto));

let decision = false //tipo de dato booleano
console.log(typeof(decision)); 

let arreglo = ["perro", "caballo", "borrego", "gallo"]; //tipo de dato objeto
console.log(typeof(arreglo));

