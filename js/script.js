//'use strict'; En modulos se pone solo en modo estricto.

import {Persona} from '../js/persona.js';
import {Trabuco} from '../js/trabuco.js';
import {M16} from '../js/m16.js';
import {Arma} from '../js/arma.js';

class App {
    constructor() {
        //Cuando haya terminado de cargar todo, llama al metodo iniciar.
        window.onload = this.iniciar.bind(this);
    }
    iniciar() {
        let p1 = new Persona("Ana");
        let p2 = new Persona("Blas");

        //Ana tiene un nuevo arma
        //al atributo arma se la puede llamar como quisiera.
        p1.arma = new Trabuco();
        p1.arma.disparar();

        p2.arma = new M16();
        p2.arma.disparar();

        console.log("Hay "+Arma.contador + " armas");
        //Arma.numArmas(); //Con esta llamamos a una función estática de la clase arma, pero no tendría en
        //este caso mucho sentido utilizarla

        // =====================================================================================================

        let a1 = new Trabuco();
        let a2 = new M16();
        let a3 = new Trabuco();
        let a4 = new Persona();

        //la clase trabuco hereda,deriba o extiende de la clase arma

        //La clase persona que no hereda, deriba o extiende de nadie, usa la clase arma
    }
}

new App();