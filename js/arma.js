//Las herencias se utilizan para crear una clase que es un TIPO de la clase padre
export class Arma {
    constructor() {
        this.cargador = 6;
        this.balas = 0;
        Arma.contador++; //Con esto sabemos el numero de armas que llaman a la clase, así que sabemos cuantas hay.
    }
    cargar(balas) {
        this.balas += balas; //Incrementador
        if(this.balas > this.cargador)
            this.balas = this.cargador;
    }
    disparar() {
        console.log("Pum");
    }
    static numArmas() {
        console.log("Hay "+Arma.contador + " armas");
    }
}

Arma.contador = 0; //Atributo estático, en JS se define fuera de la clase, en JAVA dentro.