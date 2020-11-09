// const puerto= 2020;
// const saludo= "Hola";

// module.exports = puerto;

// function mostrarNumeros(){
//     let retorno = "";
//     for (let i=0; i<10; i++){
//         retorno = retorno + "Numero : "+ i+ "\n";
//     }
//     return retorno;
// }
// const numeros2 = 3;

// module.exports = {mostrarNumeros,numeros2};


// -------------- EJERCICIO CLASE 22 -------------------

// Funcion crear crearArchivo
function crearArchivo() {
    const fs = require ('fs');
    fs.writeFile("Nombre.txt", "Contenido", (error)=> {
        if(error) throw error;
        console.log("El archivo se genero exitosamente")}
    )
}

// Funcion eliminar archivo
function eliminarArchivo () {
    const fs = require('fs');
    fs.unlink("Nombre.txt", 
        (error) => {
            if(error) throw error;
            console.log ("El archivo se elimino correctamente");
        }
    )
}

module.exports = {crearArchivo,eliminarArchivo};