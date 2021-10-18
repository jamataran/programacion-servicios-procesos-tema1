class Cliente{
    nombre: String;
    dni: String;
    direccion: String;
    creado: Date;

    constructor(nombre: String, dni: String, direccion: String, creado: Date) {
        this.nombre = nombre;
        this.dni = dni;
        this.direccion = direccion;
        this.creado = creado;
    }
}

interface Modelo{
    id: number;
    code: String;
}

var prueba:Modelo = {id: 1, code: '10'};
console.log(JSON.stringify(prueba));

