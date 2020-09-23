
// EJERCICIO 2
// declaracion de variables de usuario
// let nombre = prompt ("Ingresa tu nombre");
// let apellido = prompt ("Ingresa tu apellido");
// alert ("Bienvenido a nuestra página " +nombre+" "+apellido);

// EJERCICIO 3

// creación de variables
// let numero1;
// let numero2;
// let resultado;

// // ingreso de datos
// numero1 = parseInt(prompt("Ingresa el primer numero"));
// numero2 = parseInt(prompt("Ingresa el segundo numero"));
// resultado = numero1+numero2;
// alert("El resultado es "+resultado);               

// EJERCICIO 4

// declaración de variables
// let numero;
// let numerotriple;

// Ingreso de valores
// numero = parseInt(prompt("Ingresa el numero a multiplicar"));
// numerotriple = numero*3;
// alert("El resultado es "+numerotriple);

// EJERCICIO 5

// Declaracion de variables

// let texto

// texto = prompt("Ingresa tu texto")

// ---------------CLASE 11----------------

// EJERCICIO 1

let respuesta = prompt ("Ingresa tu nombre");

if (!respuesta) {
    alert ("No ha introducido su nombre");
    respuesta = prompt ("Ingresa tu nombre, insisto");
}else{
    alert ("BIENVENIDA/O " +respuesta);
}