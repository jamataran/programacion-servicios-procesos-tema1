class Poligono{
   // var altura; // Se puede omitir
    // var anchura; // Se puede omitir

    constructor(altura,anchura) {
        this._altura = altura;
        this._anchura = anchura;
    }

    get altura() {
        return this._altura;
    }

    set altura(value) {
        this._altura = value;
    }

    get anchura() {
        return this._anchura;
    }

    set anchura(value) {
        this._anchura = value;
    }

    getArea(){
        return this._altura * this._anchura;
    }
}

const CUADRADO = new Poligono(50,50);
console.log(CUADRADO.getArea());
