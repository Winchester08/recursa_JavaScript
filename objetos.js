//ejercicio de animal (en clase)

let animal = {
  nombre: "Electrico",
  especie: "perro",
  edad: 5,

  hacerSonido: function () {
    console.log(this.nombre + " hace guau guau");
  },

  dueño: {
    nombre: "Andres",
    ubicacion: "Mexico",
    accion: function () {
      console.log("El dueño está cuidando al animal");
    },
  },
};

console.log(animal.nombre);
animal.hacerSonido();

animal.dueño.accion();

// ejercicio de tarea
// Objeto Cuadrado
let cuadrado = {
  tipo: "Cuadrado",
  lados: 4,
  medidaLado: 5,
  calcularPerimetro: function () {
    return this.medidaLado * 4;
  },
  calcularArea: function () {
    return this.medidaLado * this.medidaLado;
  },
};

// Objeto Triángulo (Equilátero)
let triangulo = {
  tipo: "Triángulo",
  lados: 3,
  base: 6,
  altura: 8,
  calcularPerimetro: function () {
    return this.base * 3;
  },
  calcularArea: function () {
    return (this.base * this.altura) / 2;
  },
};

// Objeto Rectángulo
let rectangulo = {
  tipo: "Rectángulo",
  lados: 4,
  base: 10,
  altura: 5,
  calcularPerimetro: function () {
    return this.base * 2 + this.altura * 2;
  },
  calcularArea: function () {
    return this.base * this.altura;
  },
};

console.log("--- EJERCICIO 1: FIGURAS ---");
console.log(
  "Figura: " +
    cuadrado.tipo +
    " | Perímetro: " +
    cuadrado.calcularPerimetro() +
    " | Área: " +
    cuadrado.calcularArea(),
);
console.log(
  "Figura: " +
    triangulo.tipo +
    " | Perímetro: " +
    triangulo.calcularPerimetro() +
    " | Área: " +
    triangulo.calcularArea(),
);
console.log(
  "Figura: " +
    rectangulo.tipo +
    " | Perímetro: " +
    rectangulo.calcularPerimetro() +
    " | Área: " +
    rectangulo.calcularArea(),
);

//EJERCICIO 2 TEREA

// Objeto Auto 1
let autoDeportivo = {
  color: "Rojo",
  tipo: "Sedán",
  modelo: "Civic Type R",
  arrancar: function () {
    return "El " + this.modelo + " ha encendido el motor...";
  },
  caminar: function () {
    return "El auto " + this.color + " se aventó un drift mamalónsn.";
  },
  velocidad: function (km) {
    return "Velocidad actual: " + km + " km/h.";
  },
};

// Objeto Auto 2
let autoCamioneta = {
  color: "Negro",
  tipo: "SUV",
  modelo: "Grand Cherokee",
  arrancar: function () {
    return "La " + this.modelo + " arrancó silenciosamente.";
  },
  caminar: function () {
    return "La camioneta tipo " + this.tipo + " está en movimiento.";
  },
  velocidad: function (km) {
    return "Velocidad de crucero: " + km + " km/h.";
  },
};

// Resultados Ejercicio 2
console.log("\n--- EJERCICIO 2: AUTOS ---");
console.log("Auto: " + autoDeportivo.modelo);
console.log(autoDeportivo.arrancar());
console.log(autoDeportivo.caminar());
console.log(autoDeportivo.velocidad(120));

console.log("\nAuto: " + autoCamioneta.modelo);
console.log(autoCamioneta.arrancar());
console.log(autoCamioneta.caminar());
console.log(autoCamioneta.velocidad(80));
