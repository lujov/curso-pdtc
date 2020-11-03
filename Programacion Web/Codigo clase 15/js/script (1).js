window.addEventListener("load",function(){
    estiloParrafos();
})


// let precioProducto;
// let pago;

// function facturacion(montoProducto,medioDePago){
//     montoProducto = parseInt(prompt("Ingrese precio del producto"))
//     medioDePago = prompt("Ingrese medio de pago").toLowerCase();
//     let montoFinal;
//     // divide y vencerás
//     if(montoProducto < 200){
//         montoFinal = montoProducto;
//         return montoFinal;
//     }else if(montoProducto>=200 && montoProducto<=400){
//         if(medioDePago ==="e"){
//             montoFinal = montoProducto * 0.7;
//             return montoFinal;
//         }else if(medioDePago === "d"){
//             montoFinal = montoProducto * 0.8;
//             return montoFinal;
//         }else{
//             montoFinal = montoProducto * 0.9;
//             return montoFinal;
//         }
//     }else{
//         montoFinal = montoProducto * 0.6;
//         console.log(montoFinal);
//         return montoFinal;
//     }
// }
 ///                             410         e
// facturacion(precioProducto,pago);
//   console.log(facturacion(precioProducto,pago))


//  ejercicio 2

// saludar("Rosinni")



// function saludar(nombre){
//     alert(`Hola ${nombre}`)
// }



// funciones de expresión - ES5
//desventajas de las funciones de expresión:
//hoisting 
// const saludo = function(){
//     alert("Hola mundo");
// }

//ARROWS FUNCTIONS - ES6
//this
//bind
//funciones constructora
// const saludando = (parametro1,parametro2)=>{alert("Saludo desde una arrow funtions");}

// saludo();

// array1.forEach(function(element){
//     console.log(element)
// });

// arrays -["valores","valores"]
// objetos - {} : es una coleccion de datos al igual que los arrays


// sintaxis de un objeto
// let document ={
//    key/propiedades: valor,
//    key/propiedades: valor 
// }

// let persona1 = ["Rosinni","Profesora"];
// persona1[0]

// let persona = {
//     nombre: "Rosinni",
//     oficio: "Profesora"
// }

//consulta de objetos
// persona.nombre




// MANIPULACIÓN DEL DOM

// 1.obtener el elemento
//querySelector es un metodo o una función para nosotros obtener un elemento del DOM a través del selector CSS. Selectores de elementos h1, selectores de #id, selectores de .class
let h1 = document.querySelector("#titulo-principal");
let div = document.querySelector("div");

//2.manipulación del dom
//manipular los estilos: con propiedades JS, como style y classList
h1.classList.add("estilo-titulo");

//maniulación de html: con propiedades JS, como innerHTML, textContent, value
div.insertAdjacentHTML('beforeend', "<p>OTRO TEXTO</p>");


function obtenerDatos(e){
        e.preventDefault();
    // manipulación de DOM
    // 1. OBTENER NUESTROS ELEMENTOS
    let campoNombre = document.querySelector("#nombre"); // obtenemos el input nombre
    let campoUsuario = document.querySelector("#usuario"); // obtenemos el input usuario
    let campoPassword = document.querySelector("#password"); //obtenemos el input password
    let nombreSpan = document.querySelector("#nombreDato");
    let usuarioSpan = document.querySelector("#usuarioDato");
    
    // 2. MANIPULACIÓN DEL ELEMENTO
    nombreSpan.textContent = campoNombre.value;
    usuarioSpan.textContent = campoUsuario.value;
    campoNombre.value = "";
    campoUsuario.value = "";
    campoPassword.value = "";

}

let btn_enviar = document.querySelector("#btn-enviar");
btn_enviar.addEventListener("click",obtenerDatos);


// const persona = {
//     nombre: "Rosinni",
//     apellido: "Rodriguez"
// }

// const document = {

// }

// document.body.addEventListener("click",function(event){
//     console.log(event);
// })

// function saludo(nombre){
//     console.log(`Hola ${nombre}`)
// }

// saludo("Joaquin")
// saludo("Rosinni")
//this
function estiloParrafos(){
    let parrafos = document.querySelectorAll("p");

    for(let i=0; i< parrafos.length;i++){
        parrafos[i].addEventListener("click",function(){
        //este
            this.classList.toggle("estilos-parrafos");
        })
        // parrafos[i].classList.toggle("estilos-parrafos");
    }

}