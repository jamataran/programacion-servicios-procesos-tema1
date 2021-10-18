class Animal {
    constructor(nombre) {
        this._nombre = nombre;
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }

    hablar() {
        return `Mi perro ${this._nombre} ladra`;
    }
}

const SIMBA = new Perro('Tobi');
console.log(SIMBA.hablar());
