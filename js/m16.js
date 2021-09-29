import {Arma} from '../js/arma.js';

export class M16 extends Arma {

    constructor() {
        //Es obligatorio llamar al constructor de la clase padre antes de hacer nada.
        super();
        //Solo tiene 1 disparo
        this.cargador = 1/0; //Number.POSITIVE_INFINITY;

        //Si quisiera utilizar el cargador de la clase padre: super().cargador;

    }

    //Si no tuviera este metodo no tendria mucho sentido
    //usar esta clase, así que, sobreescribimos el metodo disparar de ARMA.
    disparar(){
        console.log("¡¡TA-ta-ta-ta-ta!!");
    }

}