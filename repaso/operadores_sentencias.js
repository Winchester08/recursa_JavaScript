//suma
//resta
//mult
//div
//exp
//modulo

let a=9, b=16;
let suma = a*b;
let resta = b/a;
//console.log("Los resultados son suma: "+ suma + " La resta:" + resta );
//console.log(`El resultado resultado de la mult es: ${suma} y la division tambien es: ${resta}`);
//console.log(a**5);
console.log(b%a);

// operadores de asignacion
//=
//==
//!=
//=== para comparaciones de tipo de datos
//incremento +=
//decremento -=
console.log(a!=b);

let x = 12;
let y = 145;
console.log(x!=y);
//x-=10
//console.log(x);

//operadores de comparacion
//menor que(<), mayor que(>), mayor igual(>=), menor igual(<=), diferente o distinto(!=, !==)
//console.log(x!=y);

//operadores logicos
//and(&&), or(||), not(!), ternario(?)
let x1 = 23, y1=23;
/*
console.log(!(x > y1 && y < x1));
console.log(x > y1 || y == x1);

let auto = false;
auto ? console.log("El auto esta encendido"): console.log("El auto esta apagado");

let foco = 0;
foco == 0 ? console.log("Esta prendido"): console.log("Esta apagado");
*/
//sentencias de control

if (x1 > y1){
    console.log(`El valor de ${x1} es mayor que el valor de ${y1}`);
}
else if (x1 < y1) {
    console.log("No cumple la condicion");
}
else {
    console.log("Ninguna de las anteriores");
}

//switch es como if anidado y con else

let v1 = 24;
switch (v1) {
    case 1:console.log(`El plantillo ${v1} corresponde a Mole Poblano`);
    break;
    case 2:console.log(`El plantillo ${v1} corresponde a Milanesa de Pork`);
    break;
    case 3:console.log(`El plantillo ${v1} corresponde a Costilla Asada`);
    break;
    case 4:console.log(`El plantillo ${v1} corresponde a Pollo en arroz`);
    break;
    case 5:console.log(`El plantillo ${v1} corresponde a Filete de Pescado`);
    break;
    default:
        console.log(`El plantillo ${v1} no esta disponible`);
        break;
}
