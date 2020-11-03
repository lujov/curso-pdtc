function peticionClima() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=buenos%20aires&appid=32e793f438a6d4b1ecbd5be85e985653')
    .then (function (response) {
        return response.json();
    })
    .then (function (respuesta){
        console.log (respuesta);
        mostrarClima(respuesta);
    })
}

// llamo datos

window.addEventListener("load", peticionClima);

// ingreso datos en el navegador

function mostrarClima(respuesta) {
    
    // obtengo elementos
    const ciudad = document.querySelector ("#ciudad");
    const temperatura = document.querySelector ("#temperatura");
    const imagen = document.querySelector ("#imagen");
    const estado = document.querySelector ("#estado");

    // manipulo elementos
    ciudad.textContent = respuesta.name;

}
