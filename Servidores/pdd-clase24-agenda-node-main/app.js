// Funciones que utilizo dentro del menú.
// Fueron generadas en el archivo  /src/archivo.js
const {agregarUsuario, listarUsuarios, modificarUsuario, borrarUsuario} = require('./src/archivos');
// Llamo a los comandos y flags que les pasaré en la llamar en la consola
// al correr la aplicación
const argv = require('./utils/yargs').argv;

// argv toma como primer parámetro (dentro de _[]) un valor cuando llamamos al comando node:
// Ej: Si el comando es 
//              node app agregarusuario
// argv._[0] retornará 'agregarusuario'
const opcion = argv._[0];

// Los flags vienen en argv(.dni .nombre .trabaja) por lo que las guardamos en
// las variables dni, nombre y trabaja
// También, para no mostrar 3 renglones podemos hacer una destructuración:
// const {dni, nombre, trabaja} = argv;
const dni = argv.dni;
const nombre = argv.nombre;
const trabaja = argv.trabaja;

// Para chequear que lo anterior funciona podes descomentar la siguiente linea:
// console.log(`dni: ${dni} - nombre : ${nombre} - trabaja: ${trabaja}`)

// switch sustituye una seguidilla de "if"
// 'opcion' tendrá el valor de _[0]. Leé la linea 8 de este doc.
switch(opcion){
    // Si opción es 'agregarusuario', llama a la función agregarUsuario y le paso dni, nombre y trabaja.
    case 'agregarusuario':
        agregarUsuario(dni, nombre, trabaja)
        //Debemos agregarle el break sino pasa a la siguiente linea aunque no hayamos ingresado listarusuarios.
        break;
    // Si opción es 'listarusuarios', llama a la función listarUsuarios. No lleva parámetros.
    case 'listarusuarios': 
        // listarUsuarios es una función que retorna un array con todos los valores que contiene datos.json 
        const listado = listarUsuarios();
        // La función 'map' se aplica sobre cada registro del array que llama. Retorna un element (igualmente
        // nosotros le ponemos el nombre que querramos) que contiene todas las entradas del vector
        listado.map(element =>{
            // Listado recorre por cada registro y nos retorna, por cada key (dni, nombre, trabaja), un valor.
            console.log(`dni: ${element.dni} - nombre: ${element.nombre} - trabaja: ${element.trabaja}` )
        } )
        break;
    // Si opción es 'modificarusuario', llama a la función modificarUsuario y le paso dni y trabaja.
    case 'modificarusuario': 
        // modificarUsuario buscará el registro que coincida con DNI y le cambiará el valor a trabaja, con el
        // que le hayamos pasado dentro de la llamada por consola
        try{
            // Utilizo el try-catch ya que hemos definido un Error custom dentro de la función,
            modificarUsuario(dni, trabaja);
        }
            // que lo devuelve en caso que la misma haya fallado.
        catch{
            error => console.log(error)
        }
        break;
    // TAREA: Acá deberás generar una función que se llame borrarUsuario. Le tenes que pasar un DNI y el registro
    // completo deberá borrarse de datos.json
    case 'borrarusuario': 
        borrarUsuario(dni)
        

        break;
    // En caso de haber seteado mal argv._[0] saldrá un cartel por console.log que nos indicará que 
    // escribiste mal la palabra. 
    default:
        console.log("te equivocaste de item");
}
