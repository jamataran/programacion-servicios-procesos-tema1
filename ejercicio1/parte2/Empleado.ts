import {Persona} from './Persona';

class Empleado extends Persona {

    private sueldo: number;

    constructor(nombre: string, edad: number, sueldo: number) {
        super(nombre, edad);
        this.sueldo = sueldo;
    }

    getSueldo(): number {
        return this.sueldo;
    }

    setSueldo(sueldo: number) {
        this.sueldo = sueldo;
    }

    pagarImpuestos(): string {
        return this.sueldo > 5000 ? `debe pagar ${(Math.round((this.sueldo * 0.20) * 100) / 100).toFixed(2)} en impuestos` : "no debe pagar impuestos";
    }

    imprimir() {
        console.log(`${super.getNombre()}, cobra un sueldo de ${this.sueldo} € al año y ${this.pagarImpuestos()}`);
    }

}

export {Empleado}
