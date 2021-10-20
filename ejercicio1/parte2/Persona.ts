class Persona {

    private nombre: String;
    private edad: Number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    }

    getNombre(): String {
        return this.nombre
    }

    setNombre(nombre: string) {
        this.nombre = nombre
    }


    getEdad(): Number {
        return this.edad
    }

    setEdad(edad: number) {
        this.edad = edad
    }

    imprimir() {
        console.log(`${this.nombre} tiene ${this.edad} años`);
    }

}

export {Persona}
