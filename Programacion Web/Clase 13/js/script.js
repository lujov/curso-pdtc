// EJERCICIO 1

// let operacion = prompt("¿Qué operación querés realizar?: suma, resta, multiplicación, división");

// while (!operacion) {
//     alert ("Hey, no ingresaste nada")
//     operacion= prompt ("Ingresa algo, por favor")
// }

// let numero1 = prompt ("ingresa un número")

// while (!numero1) {
//     alert ("Hey, no ingresaste nada")
//     numero1= prompt ("Ingresa algo, por favor")
// }

// let numero2 = prompt ("Ingersa otro número")

// while (!numero2) {
//     alert ("Hey, no ingresaste nada")
//     numero2= prompt ("Ingresa algo, por favor")
// }

// let resultado 

// switch (operacion) {
//     case "suma":
//         resultado = parseInt(numero1) + parseInt(numero2)
//         document.write(`<p>Tu resultado es ${resultado}</p>`)
//     break;
//     case "resta":
//         resultado = parseInt(numero1) - parseInt(numero2)
//         document.write(`<p>Tu resultado es ${resultado}</p>`)
//     break;
//     case "multiplicación":
//         resultado = parseInt(numero1) * parseInt(numero2)
//         document.write(`<p>Tu resultado es ${resultado}</p>`)
//     break;
//     case "división":
//         resultado = parseInt(numero1) / parseInt(numero2)
//         document.write(`<p>Tu resultado es ${resultado}</p>`)
//     break;
// }

// EJERCIO 2

// let numero = -20

// while (numero <= 30){
//     console.log (numero);
//     numero ++;
// }

// let numero = 20

// while (numero <= 60) {
//     console.log (numero);
//     numero +=2;
// }

// let numero = 601

// while (numero < 666) {
//     console.log (numero);
//     numero +=2;
// }

// EJERCICIO 3

// let sexoPersona = prompt ("¿Cuál es tu sexo?: F (femenino) o M (masculino)").toUpperCase();
// let edad

// while ((!sexoPersona) && (sexoPersona !== "F") && (sexoPersona !== "M" )) {
//     alert ("¡No ingresaste nada!");
//     sexoPersona= prompt ("Ingresa algo, por favor").toUpperCase();
// }

// switch (sexoPersona) {
//     case "F":
//         edad = parseInt(prompt ("¿Cuál es tu edad?"));
//         if (edad >= 60) {
//             alert ("Podes Jubilarte");
//         } else {
//             alert ("Lo siento, no podes jubilarte");
//         }
//         break;
//     case "M":
//         edad = parseInt(prompt ("¿Cuál es tu edad?"));
//         if (edad>=65) {
//             alert ("Podes Jubilarte");
//         } else {
//             alert ("Lo siento, no podes jubilarte");
//         }
//         break;
// }


// EJERCICIO 4 
// let contraseña = "lucia123"
// let respuestaContraseña = prompt ("Ingresa tu contraseña");
// let intentos

// if (respuestaContraseña === contraseña) {
//     alert ("Tu contraseña es correcta")
// } else {
//     intentos = 1
//     while (respuestaContraseña !== contraseña && intentos<3) {
//         alert ("Tu contraseña es incorrecta");
//         respuestaContraseña = prompt ("Intentalo nuevamente");
//         if (respuestaContraseña === contraseña) {
//             alert ("Tu contraseña es correcta");
//         } else {
//             intentos++;
//         }

//     }
// }

// if (intentos === 3) {
//     alert ("Lo lamento, fueron demasiados intentos")
// }

// EJERCICIO 6

// let numero = prompt ("ingrese un numero entre el 1 y el 10" );
// let multiplicador = 1;
// let resultado;

// while (multiplicador <= 10 && 1 <= numero && numero <= 10) {
//     resultado = parseInt(numero)*multiplicador;
//     document.write(`<p>${numero} x ${multiplicador} = ${resultado}</p>`);
//     multiplicador++;
// }

// ------------- CLASE 13----------------

// EJERCICIO 1

// let ensaladaDeFrutas = ["banana","manzana","naranja","kiwi","ananá"];

// for (let i = 0; i < ensaladaDeFrutas.length; i++) {
//     console.log (ensaladaDeFrutas[i]);
    
// }

// EJERCICIO 2

// let toDoList = ["limpiar el baño","limpiar la cocina","hacer las compras", "cambiar las sabanas","sacar la basura"];

// // document.write (toDoList.indexOf ("hacer las compras"))
// let item = toDoList.indexOf ("hacer las compras");
// console.log (item);
// let popped = toDoList.pop(); 
// console.log (popped);
// for (let i = 0; i< toDoList.length; i++) {
//     console.log (toDoList[i]);
// }

// EJERCICIO 3 A

// let edades = [9,17,38,23,75,42,53,61,15];
// let divisor= edades.length

// for (let i = 0; i < edades.length; i++) {
//     console.log (edades[i]);
// }

// edades = [9,17,38,23,75,42,53,61,15].reduce(function (a,b) { return a+b});
// console.log (edades);

// let promedio = edades/divisor;
// console.log(promedio);

// EJERCICIO 3 A

// let edades = [9,17,38,23,75,42,53,61,15];
// let numero = 0;

// for (let i = 0; i < edades.length; i++) {
//     numero = numero + edades[i];
// }

// console.log (numero/edades.length)

// EJERCICIO 4

// let listaSuper = []

// for (let i = -1; i < 4; i++) {
//    let item = listaSuper.push(prompt("ingresa 5 items a la lista"));
//    console.log(listaSuper)     
// }

// EJERCICIO 5
let nombres = ["joey","rachel","phoebe","chandler","monica","ross"];
let nombreLargo;
let letrasNombre = 0

for (let i = 0; i < nombres.length; i++) {
    if (letrasNombre < nombres[i].length) {
        nombreLargo = nombres[i];
        letrasNombre = nombres[i].length;
    }
    
}

console.log(nombreLargo)