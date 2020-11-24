// Requiero del módulo de file System para el manejo de archivos
const fs = require('fs');
// Cada vez que se corra el desarollo se instanciará un array que (si bien se inicializa como vacio)
// contendrá la sincronía con el contenido de datos.json
let agenda = [];


// El primero de los parámetros que se corren es agregarusuario. Debemos pasarle dni, nombre y trabaja.
const agregarUsuario = (dni, nombre, trabaja) => {
    // Obtiene los datos del JSON y los guarda en el array "agenda"
    obtenerDatosDelJson();

    //Generamos un array con los datos que le pasamos por parámetro
    let registro = {
        dni: dni,
        nombre: nombre,
        trabaja : trabaja
    };

    // Y los pusheamos en agenda.
    //  Nota: El método push toma un objeto y lo mete en la ultima posición del array indicado
    //        en este caso "agenda"
    agenda.push(registro);

    // Llamo a la función escribirJson 
    escribirJson();

};

// Esta función se encargará de obtener los datos de "agenda" y agregarlos al archivo datos.json
const escribirJson= () => {
    // JSON.stringify transforma en una cadena el array ya que writeFile solo acepta cadenas y buffers
    let data = JSON.stringify(agenda);
    // Genero el archivo con los datos de agenda.
    // Nota: Si necesitas recordar los conceptos de file system mira este ejemplo explicado paso a paso
    //       https://github.com/fernandomatiasdv/pdc-clase22-ejercicio-de-clase-explicado
    fs.writeFile('db/datos.json', data,
    (error) => {
        if(error) {
            throw new Error("No se pudo escribir el archivo ", error)
        }
    })
}

// Obtiene los datos que tenemos en datos.json y los almacena en el array agenda.
const obtenerDatosDelJson = () => {
    agenda = require('../db/datos.json')
    return agenda;
}

// Lo usamos cuando se lanza la ejecución del programa y éste le setea el valor listarusuarios
const listarUsuarios = () => {
    try{
        // En caso que existan datos en datos.json que los devuelva
        return (obtenerDatosDelJson());
    }
    catch{
        //Sino encontró datos que devuelva un array vacio
        return []
    };
}

// Cuando lanzamos el valor modificarusuario le pasamos un dni y si trabaja, que será 
// el valor a modificar
const modificarUsuario = (dni, trabaja) => {
    // Cargamos el array agenda
    obtenerDatosDelJson();
    // el findIndex retorna:
    // -1 : Sino encuentra el valor
    // posición dentro del vector del dni
    const index = agenda.findIndex(a => a.dni === dni);
    // preguntamos si el índice es mayor a -1, es decir, si existe ese índice.
    if(index > -1){
        // En caso de existir reemplaza el valor de trabaja en la posición de la agenda 
        // encontrada 
        agenda[index].trabaja = trabaja;
        // Y vuelve a escribir el archivo
        escribirJson();       
    }else{
        // En caso de no encontrar el DNI lanza un error. 
        throw new Error("No encontró el DNI que busca");
    }
}

const borrarUsuario = (dni) => {
    obtenerDatosDelJson();
    const registroNuevo = agenda.filter(a => a.dni!==dni);

    agenda = registroNuevo;
    escribirJson();

}

module.exports = {
    agregarUsuario,
    listarUsuarios,
    modificarUsuario,
    borrarUsuario
}