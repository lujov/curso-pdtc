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

function facturacion (monto,medioPago) {
    if (monto<200) {
        alert ("No se aplica descuento");
    } else if ((monto>200) && (monto<400) && (medioPago==="E")) {
        alert ("Se aplica 30% de descuento");
    } else if (medioPago==="D") {
        alert ("Se aplica 20% de descuento");
    } else if (medioPago==="C") {
        alert ("Se aplica 10% de descuento"); 
    } else if (monto > 400) {
        alert ("Se aplica 40% de descuento");
    } 
}

facturacion (parseInt(prompt ("Ingrese un monto")),prompt ("Ingrese el medio de pago: C (tarjeta de credito), D (tarjeta de debito) o E (efectivo)").toUpperCase);