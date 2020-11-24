// Genero la constante argv que contendrá lo que nosotros pasemos en la consola al ejecutar el programa.
const argv = require('yargs')
            // El command se utiliza para agrupar los flags dentro "de un contexto", que en este caso es
                        //agregarusuario
            .command(   'agregarusuario' ,
            // como segundo parámetro le pasas una descripción que nos brindará en caso de pedir ayuda 
                        "Esta funcion agrega un usuario",
            // y como tercer parámetro se le pasa un objeto con los flags que tendrá el agrupador
            //  en este caso los flags son: dni, nombre y trabaja
                        {
                            dni:{
                                // los atributos que se le pueden pasar al objeto son:
                                //  demand: true si quiero que sea obligatorio el ingreso
                                //  alias: para darle un shortcut (o "atajo de teclado")
                                //  defualt: En caso de no ser "demand" podes darle un valor por defecto
                                demand: true,
                                alias: 'd'
                            },
                            nombre: {
                                alias: 'n'
                            },
                            trabaja: {
                                alias: 't',
                                default: true
                            }
                        }
            )
            .command(   'listarusuarios' , 
                        "Listamos todos los usuarios",
                        { }
            )
            .command(   'modificarusuario' , 
                        "Esta funcion modifica el estado laboral del usuario",
            {
                dni:{
                    demand: true,
                    alias: 'd'
                },
                trabaja: {
                    demand: true,
                    alias: 't'
                }
            })
            .command(   'borrarusuario' , 
                        "Esta funcion borra usuario",

            {
                dni:{
                    demand: true,
                    alias: 'd'
                }
            })
            .argv;

module.exports = {
    argv
}