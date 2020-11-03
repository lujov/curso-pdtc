// document.querySelector ("h1")
// <h1>​Manipulación del DOM​</h1>​
// let h1= document.querySelector ("h1")
// undefined
// h1
// <h1>​Manipulación del DOM​</h1>​
// h1.textContent
// "Manipulación del DOM"
// h1.textContent = "Estoy agregando un nuevo texto"
// "Estoy agregando un nuevo texto"
// document.querySelector ("p")
// <p id=​"primerParrafo">​…​</p>​
// let p = document.querySelector ("p")
// undefined
// p.insertAdjacentHTML('beforeend', '<span>Estoy aprendiendo a manipular el DOM</span>');
// undefined
// document.querySelector ("ul")
// <ul>​…​</ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

// EJERCICIO 3

// let boton = document.querySelector (".boton-rojo");

// function desactivar (){
//     boton.textContent="Desactivado";
// }

// boton.addEventListener ("click",function desactivar () {
//     boton.textContent="Desactivado";
// })

// boton.addEventListener ("mouseenter",function entrar () {
//     boton.style.backgroundColor = "green";
// })

// boton.addEventListener ("mouseleave",function salir () {
//     boton.style.backgroundColor = "red";
// })

// function entrar() {
//     boton.classList.toggle ("boton-verde");
// }

// function salir() {
//     boton.classList.toggle ("boton-verde");
// }

// EJERCICIO 4

function obtenerDatos(e){
    e.preventDefault();
// manipulación de DOM
// 1. OBTENER NUESTROS ELEMENTOS
let campoNombre = document.querySelector("#nombre"); // obtenemos el input nombre
let campoUsuario = document.querySelector("#usuario"); // obtenemos el input usuario
let campoMail = document.querySelector("#mail"); //obtenemos el input mail
let nombreSpan = document.querySelector("#nombreDato");
let usuarioSpan = document.querySelector("#usuarioDato");
let mailSpan = document.querySelector("#mailDato");

// 2. MANIPULACIÓN DEL ELEMENTO
nombreSpan.textContent = campoNombre.value;
usuarioSpan.textContent = campoUsuario.value;
mailSpan.textContent = campoMail.value;
campoNombre.value = "";
campoUsuario.value = "";
campoMail.value = "";

}

let btn_enviar = document.querySelector("#btn-enviar");
btn_enviar.addEventListener("click",obtenerDatos);

