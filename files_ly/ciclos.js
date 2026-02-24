const numeros = [1,2,3,4,5,6,7,8];
for (let x = 0; x < nuevos_numeros.length; x++){
    console.log(`Elemento: ${nuevos_numeros[x]}`);
}

console.log("nuevos_numeros.length");

let menu = ["pizza", "hamburguesa", "hot dog", "tacos"];
let vacio = [];
for ( datos of menu){
    let mayus = datos.charAt(0).toUpperCase() + datos.slice(1);
    vacio.push(mayus);
    //poner las primeras letras en mayuscula ya quedo
}
console.log(vacio);




/***********************Conteo del 1 al 50*****************************/




for(let contar=1; contar<=50; contar++){
    console.log(contar);
    if (contar == 50){
        console.log("felicidades has llegado al numero 50");
    }
}


/***********************Tabla de multiplicar del 5 usando while*****************************/
let c = 5 //numero a multiplicar
let i = 1 //contador inicial

console.log(`Tabla de multiplicar del ${c}:`);
while (i <= 10) {
    let resultado = c * i; //multiplicacio de numero por contador
    console.log(`${c} x ${i} = ${resultado}`);
    i++; //incremento para el contador
} 


/******************Imprimir los nombres de un array con ayuda de un while************************/
let nombres = ["pancracio", "heriberto", "tiburcio", "macario", "jacinto", "teresa", "yolanda", "gertrudis", "benjamin", "floripandia", "chuchita", "savina", "honoria", "candido", "jerbacio",];
let contador = 0;
while (contador < nombres.length) {
    console.log(nombres[contador]);
    contador++;
}


