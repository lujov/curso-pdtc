// const puerto = require('./externo')
// console.log(`puerto: ${saludo}`);

// const {mostrarNumeros, numeros2} = require('./externo');

// console.log(numeros2);

// mostrarNumeros();

//el nombre de la variable tiene que coincidir con el que esta en el module.exports en el archivo externo
// el require siempre va arriba de todo

// const fs = require ('fs');
// fs.writeFile("Nombre.txt", "Contenido", (error)=> {
//     if(error) throw error;
//     console.log("El archivo se genero exitosamente")}
// )

// const fs = require('fs');
// const contenido = mostrarNumeros();
//  fs.writeFile("Nombre.txt", contenido, (error) => {
//      if (error) throw error; 
//      console.log ("El archivo se genero exitosamente")
//     }
//  ) 

//  (El primer parametro es el nombre del archivo ("Nombre.txt") y el segundo es lo que contiene)



//  ----------PARA ELIMINAR ARCHIVOS---------

//  const fs = require('fs');
//  fs.unlink("Nombre.txt", 
//     (error) => {
//         if(error) throw error;
//         console.log ("El archivo se elimino correctamente");
//     }
//  )



// ------------ ESTADO DE ARCHIVOS ------------

//  const fs = require('fs');
//  fs.stat("Nombre.txt", 
//     (error) => {
//         if(error) throw error;
//         console.log ("El archivo fue encontrado");
//     }
//  )

//  const fs = require('fs');
//  fs.stat("Nombre.txt", 
//     (error) => {
//         if(error) {
//             const contenido = mostrarNumeros();
//             fs.writeFile("Nombre.txt", contenido, 
//                (error) => {
//                   if (error) throw error; 
//                   console.log ("El archivo se genero exitosamente")
//                 }
//             ) 
//          console.log ("El archivo fue encontrado");
//         }
//     }
// )

// -------------- EJERCICIO CLASE 22 -------------------
const {crearArchivo, eliminarArchivo} = require('./externo');
const fs = require('fs');
fs.stat("Nombre.txt",
    (error) => {
        if (error) {
            throw crearArchivo()
        }
        eliminarArchivo()
    }
)

