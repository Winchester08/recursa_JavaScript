//los sets son un tipo de arreglo que no son inmutables 

let datos = new Set([12, "oscuro", "hamburguesa", false, 41])
datos.add("tostadas")
console.log(datos);
console.log(datos.has("eucalipto"));
datos.delete("eucalipto")
console.log(datos);

let p = Array.from(datos)
//console.log(p);
p[5]="helado napolitano";
console.log(p);

let ns = new Set(p)
console.log(ns);
