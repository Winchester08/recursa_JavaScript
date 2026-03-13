let Personaje = {   // objeto es personaje
    nombre: 'Leon', // atributos del objeto
    edad: 32,
    apellido : 'Kennedy',
    disparar : function (){     // este ahora se convierte en metodo
        console.log("Este persona dispara con pistola y utiliza un cuchillo");
    },
    correr: function(){
        console.log("Este personaje tambien puede correr");
    }
}
console.log(Personaje);
console.log(Personaje.disparar);
console.log(Personaje.correr);

// console.log(Personaje)

// Personaje.nombre = "Ada";
// Personaje.apellido = "Wong";
// Personaje.edad = 29;

// console.log(`El nombre de mi personaje es: ${Personaje.nombre}, ${Personaje.apellido}`)

// delete Personaje.apellido

// Personaje.complexion = 'delgado';


// ###Ejercicio #1 crear 3 objeto figuras donde sus atributos sean tipo figura, num de lados, y sus metodos 
// sean calcular su perimetro y area
// que al final del ejercicio muestre la figura que es y que se calcule su perimentro y area con los datos propuestos

// ##Ejercicio #2 crear 2 objetos automoviles donde los atributos seran color, tipo, modelo y sus metodos sean arrancar,
// caminar y velocidad
// que al final del ejercicio muestre el auto que es y que muestre los metodos propuestos.
