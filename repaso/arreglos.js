let datos = ["Francia", 23, "sucio", true, false, 25.8]
datos.unshift("tigre")
datos.push("Paris")
console.log(datos);

datos.shift()

console.log(datos);

let d2 = datos.slice(1,5)
console.log(d2);

let d3 = datos.splice(2,5)
console.log(d3);

let na = ["caballo", 23, "tucan", "pantera", "conejo", "raton"]
console.log(na, datos);
na.push("therian");

let total = na.concat(datos);
console.log(total);

let nombre ="rigo"
nombre.to
//push ingresa un nuevo elemento al array
//pop elimina el ultimo elemento
//shift elimina el primer elemento del array
//unshift inserta el primer elemento del array y mueve el estaba
//slice nos devuelve una copia de un intervalo del arreglo
//splice nos elimina un intervalo del arreglo