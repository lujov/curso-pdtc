// EJERCICIO 1

// function saludo(){
//     alert ("Bienvenido")
// }

// EJERCICIO 2 

// function calculoMayor (num1,num2){
//     if (num1>num2) {
//         alert (`El ${num1} es el mayor`)
//     } else if (num2>num1) {
//         alert (`El ${num2} es el mayor`)
//     }else{
//         alert ("Ambos números son iguales")
//     }
// }
 
// calculoMayor (prompt("Ingrese un numero"),prompt("Ingrese otro numero"));

// EJERCICIO 3 

// function facturacion (monto,medioPago) {
//     if (monto<200) {
//         alert ("No se aplica descuento");
//         alert (`El monto a abonar es de $${monto}`);
//     } else if ((monto>200) && (monto<400) && (medioPago.toUpperCase()==="E")) {
//         alert ("Se aplica 30% de descuento");
//         monto=monto*0.7;
//         alert (`El monto a abonar es de $${monto}`);
//     } else if (medioPago.toUpperCase()==="D") {
//         alert ("Se aplica 20% de descuento");
//         monto=monto*0.8;
//         alert (`El monto a abonar es de $${monto}`);
//     } else if (medioPago.toUpperCase()==="C") {
//         alert ("Se aplica 10% de descuento");
//         monto=monto*0.9;
//         alert (`El monto a abonar es de $${monto}`); 
//     } else if (monto > 400) {
//         alert ("Se aplica 40% de descuento");
//         monto=monto*0.6;
//         alert (`El monto a abonar es de $${monto}`); 
//     } else {
//         alert ("No se aplica ningún descuento");
//         alert (`El monto a abonar es de $${monto}`);
//     }
// }

// facturacion (parseInt(prompt ("Ingrese un monto")),prompt ("Ingrese el medio de pago: C (tarjeta de credito), D (tarjeta de debito) o E (efectivo)"));

// EJERCICIO 4

// function iterArray (array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log (array[i]);  
//     }
// }
// iterArray (["queso","salame","jamon crudo","jamon cocido"]);
// iterArray (["Fede","Lu","Gal","Franco"]);
// iterArray (["Caballo","Elefante","Cebra","Flamenco"]);

// function iterArray (pepito) {
//     pepito.forEach(element => {
//         console.log (element)
//     });
// }
// iterArray (["queso","salame","jamon crudo","jamon cocido"]);
// iterArray (["Fede","Lu","Gal","Franco"]);
// iterArray (["Caballo","Elefante","Cebra","Flamenco"]);

// EJERCICIO 5

// function tirarDados(min,max) {
//     min = 1;
//     max = 7;
//     let random = Math.floor(Math.random() * (max - min)) + min;
//     alert ("Tu numero es " + random)
// }

// EJERCICIO 6

let clicks = 0;

function contadorDeClick() {
    clicks++;
    console.log(clicks);
}                        