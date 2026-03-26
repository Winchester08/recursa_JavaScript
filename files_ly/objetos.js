let empleado = {
    nombre: "Hermenegildo",
    profesion: "Ing Industrial",
    departamento: "Calidad",
    revisor: function(){
        
        console.log("Esta persona se dedica a revisar carpetas y reportes de sus empleados");
    },
    supervisar: function(){
        
        console.log("Esta persona se dedica a supervisar las tareas de los empleados a su cargo");
    },
    documentar: function(){
        
        console.log("Esta persona se dedica a documentar los procesos de trabajo y los resultados obtenidos");
    },
}
console.log(empleado);
empleado.revisor();
empleado.supervisar();
empleado.documentar();
empleado.nombre = "Florencio";
empleado.profesion = "Ing Informatica";
empleado.departamento = "Sistemas";
console.log(empleado.nombre);
console.log(empleado.profesion);
console.log(empleado.departamento);

/* #Ejercicio #1 crear 3 objeto figuras donde sus atributos sean tipo figura, num de lados, y sus metodos 
// sean calcular su perimetro y area
// que al final del ejercicio muestre la figura que es y que se calcule su perimentro y area con los datos propuestos*/

let triangulo = {
    tipo_figura: "triangulo",
    num_lados: 3,

    area: function(){
        x = 5;
        y = 10;
        console.log("El area del triangulo es:"  );
        return (x*y)/2;
    },
    perimetro: function(){
        l1 = 5;
        l2 = 5;
        l3 = 5;
        console.log("El perimetro del triangulo es:" );
        return (l1 + l2 + l3);
    },

}
console.log(triangulo);
console.log(triangulo.area());
console.log(triangulo.perimetro());

let cuadrado = {
    tipo_figura: "cuadrado",
    num_lados: 4,

    area: function(){
        x = 5;
        y = 5;
        console.log("El area del cuadrado es:"  );
        return (x*y);
    },
    perimetro: function(){
        l1 = 5;
        l2 = 5;
        l3 = 5;
        l4 = 5;
        console.log("El perimetro del cuadrado es:" );
        return (l1 + l2 + l3 + l4);
    },

}
console.log(cuadrado);
console.log(cuadrado.area());
console.log(cuadrado.perimetro());

let hexa = {
    tipo_figura: "hexagono",
    num_lados: 6,

    area: function(){
        x = 5;
        y = 10;
        console.log("El area del hexagono es:"  );
        return (x*y)/2;
    },
    perimetro: function(){
        l1 = 5;

        console.log("El perimetro del hexagono es:" );
        return (l1 * 6);
    },

}
console.log(hexa);
console.log(hexa.area());
console.log(hexa.perimetro());



/*Ejercicio #2 crear 2 objetos automoviles donde los atributos seran color, tipo, modelo y sus metodos sean arrancar,
// caminar y velocidad
// que al final del ejercicio muestre el auto que es y que muestre los metodos propuestos.*/

let auto1 ={
    color: "morado",
    tipo: "mazda",
    modelo: "2020",

    arrancar: function(){
        console.log("El auto esta arrancando de forma suave");
    },
    caminar: function(){
        console.log("El auto esta caminando a una velocidad moderada");
    },
    velocidad: function(){
        console.log("El auto esta alcanzando una velocidad de 120 km/h");
    },
}
console.log(auto1);
auto1.arrancar();
auto1.caminar();
auto1.velocidad();  

let auto2 ={
    color: "rojo",
    tipo: "ferrari",
    modelo: "2022",
    arrancar: function(){
        console.log("El auto esta arrancando de forma veloz");
    },
    caminar: function(){
        console.log("El auto esta caminando a una velocidad alta");
    },
    velocidad: function(){
        console.log("El auto esta alcanzando una velocidad de 300 km/h");
    },
}
console.log(auto2);
auto2.arrancar();
auto2.caminar();
auto2.velocidad();  