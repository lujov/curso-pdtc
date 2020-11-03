// Datos superheroes

function peticionSuperHeroes() {
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
    .then (function (response) {
        return response.json();
    })
    .then (function (respuesta){
        mostrarSuperHeroes(respuesta);
        console.log (respuesta);
    })
}

// Boton datos
let btnEnviar = document.querySelector(".btn-warning");
btnEnviar.addEventListener("click", peticionSuperHeroes);

// ingresar datos superheroes en navegador

function mostrarSuperHeroes(respuesta) {
    
    // obtengo elementos
        // Heroe 1
        const heroe1_1 = document.querySelector("#heroe1-1");
        const heroe1_2 = document.querySelector("#heroe1-2");
        const heroe1_3 = document.querySelector("#heroe1-3");

        // Heroe 2
        const heroe2_1 = document.querySelector("#heroe2-1");
        const heroe2_2 = document.querySelector("#heroe2-2");
        const heroe2_3 = document.querySelector("#heroe2-3");

        // Heroe 3
        const heroe3_1 = document.querySelector("#heroe3-1");
        const heroe3_2 = document.querySelector("#heroe3-2");
        const heroe3_3 = document.querySelector("#heroe3-3");

    // manipulo el elemento

        // Heroe 1
        heroe1_1.textContent = respuesta.members[0].secretIdentity;
        heroe1_2.textContent = respuesta.members[0].age;
        heroe1_3.textContent = respuesta.members[0].powers[0] +' / '+ respuesta.members[0].powers[1] +' / '+ respuesta.members[0].powers[2];

        // Heroe 2
        heroe2_1.textContent = respuesta.members[1].secretIdentity;
        heroe2_2.textContent = respuesta.members[1].age
        heroe2_3.textContent = respuesta.members[1].powers[0] +' / '+ respuesta.members[1].powers[1] +' / '+ respuesta.members[1].powers[2];

        // Heroe 2
        respuesta.members[2].secretIdentity = "Bill Smith"
        respuesta.members[2].age = 28
        heroe3_1.textContent = respuesta.members[2].secretIdentity;
        heroe3_2.textContent = respuesta.members[2].age
        heroe3_3.textContent = respuesta.members[2].powers[0] +' / '+ respuesta.members[2].powers[1] +' / '+ respuesta.members[2].powers[2] +' / '+ respuesta.members[2].powers[3] +' / '+ respuesta.members[2].powers[4];
}