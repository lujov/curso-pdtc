class Mueble {
    constructor (material= "madera", patas= 3, peso= 78){
        this.material = material;
        this.patas = patas;
        this.peso = peso;
    }

    get cantidadPatas () {
        return this.calculoPatas();
      }

    calculoPatas() {
        if (this.patas >= 1) {
            return `Tiene ${this.patas} patas`
        } else {
            return `No tiene patas`
        }
    }

    get cantidadPeso () {
        return this.calculoPeso ();
    }

    calculoPeso (){
       let pesoSilla= parseInt(prompt("Cuál es el peso?"))
        if (pesoSilla > 15) {
            return `Necesita llevar flete`
        } else {
            return `Puede llevarlo por si mismo`
        }
    }
}

// let mesa = new Mueble;
// console.log(mesa);
// console.log (mesa.cantidadPatas)
// let silla = new Mueble();
// console.log (silla.cantidadPeso)

class Mesa extends Mueble {
    constructor (espacio) {
        super(espacio);
        this.espacio = espacio;
    }

    get espacialidad() {
        return this.consultaEspacio();
    }

    consultaEspacio() {
        if (this.espacio==="patio" || this.espacio==="living") {
            return "La mesa puede usarse en el patio o living"
        } else {
            this.espacio = "";
            return "Error: Debe ingresar patio o living";
        }
    }
}

// let espacio = new Mesa("pati");
// console.log(espacio.espacialidad);

class Silla extends Mueble {
    constructor (respaldo, altura,patas) {
        super(respaldo, altura);
        this.respaldo = respaldo;
        this.altura = altura;
        this.patas = patas;
    }

    get taburete() {
        return this.consultaTaburete();
    }

    consultaTaburete() {
        if (this.respaldo==="no" && this.altura===100 && this.patas===1) {
            return "Es un taburete"
        } else {
            this.espacio = "";
            return "No es un taburete";
        }
    }
}

let taburete = new Silla("no",100,1);
console.log(taburete.taburete);