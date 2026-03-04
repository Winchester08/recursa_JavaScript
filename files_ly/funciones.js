const pregunta = (r1, p) => {
    console.log(p);
    if (r1 == "si"){
        console.log("la respuesta es: De acauerdo");
    }
    if (r1 == "no"){
        console.log("No esta de acuerdo");
    }
    else if(r1 != "si" && r1 != "no"){
        console.log("No reconoce la respuesta no valida");
    }
}
pregunta ("no", "Esta usted de acuerdo con estas funciones??");



/**********Funcion flecha que escriba mii nombre***********/
const persona = (p1, con) => {
    console.log(con);
    if (p1 == "v1"){
        console.log("La persona es: Emily");
    }
    if (p1 == "v2"){
        console.log("No, es : Andres");
    }
    else if(p1 != "v1" && p1 != "v2"){
        console.log("entonces usted es el profe Rigo");
    }
}
persona ("v1", "¿Cual es su nombre?");



/***********Ejercios  para revisar en clase *******/
 function vocales (cadena)  {
    let contador =0;
    const palabra = "aeiou";
    const cadenaMinuscula = cadena.toLowerCase();
    for (let caracter of cadenaMinuscula) {
        if (palabra.includes(caracter)) {
            contador++;
        }
    }
    return contador;
 }

console.log("la cantidad de vocales son:"+vocales("otorrinolaringologo"));

