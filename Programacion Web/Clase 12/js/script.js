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

let numero = prompt ("ingrese un numero entre el 1 y el 10" );
let multiplicador = 1;
let resultado;

while (multiplicador <= 10 && 1 <= numero && numero <= 10) {
    resultado = parseInt(numero)*multiplicador;
    document.write(`<p>${numero} x ${multiplicador} = ${resultado}</p>`);
    multiplicador++;
}