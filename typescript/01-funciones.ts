/**
 * Función en TS (con nombre)
 * @param m Mensaje
 */
function nombreDeLaFuncion(mensaje: String): void {
    console.log(mensaje);
}

/**
 * Funcion anonima.
 * @param m Mensaje
 */
var a = function (mensaje: string): void {
    console.log(mensaje);
}

/**
 * Función lambda
 * @param m Mensaje
 */
var b = (m: String) => console.log(m);

/**
 * Clase
 */
class MiClase {
    /**
     * Función en TS (con nombre) dentro de una clase.
     * @param m Mensaje
     */
    nombreDeLaFuncion(mensaje: String): void {
        console.log(mensaje);
    }
}


