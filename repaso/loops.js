//ciclos o loops
//while
//do while
//for

//while evalua primero y ejecuta el ciclo
let x = 0
while (x<=8) {
    console.log("El valor actual es: ", x);
    x = x + 1;
}

//do while hace el ciclo primero y evalua despues
y=1;
do {
    console.log("Valor a Imprimir de:", y);
    y=y+1;
} while (y<=11);

//for evalua dentro del mismo ciclo
let mi_nombre = 'RW';
for(let valor=0; valor<=5; valor++){
    console.log(`Mi nombre es: ${mi_nombre} y sera repetido ${valor} veces `);
}

//programa bomba temporizador del 7,6,5,4,3,2,1,0 boom
let explota = 'boom';
let temp = 7

if (temp > 7){
    console.log("La bomba no sirve");
}

else {
for(let inicio=7; inicio>=0; inicio--){
    console.log("la bomba explota en:", inicio);
    if (inicio == 0){
console.log(explota,"!!");
}
}
}

//for of itera elementos de arreglos, objetos y elementos con indices y llaves

let lenguajes = new Map([
    ["lenguaje1", "Python" ],
    ["valor", 8 ],
    ["bool", false ],
    ["comunidad", "Positivo" ],
]);
let personas = new Map([
    ['p1', "Romeo"],
    ['edad', 22],
    ['direccion', "melchor Ocampo"],
])
let personas2 = new Map([
    ['p2', "Alexa"],
    ['edad', 21],
    ['direccion', "Fco Villa"],
])
console.log(personas.values());
console.log(personas2.values());

for (leng of lenguajes.keys()){
    console.log("Los resultados son:", leng);
}

