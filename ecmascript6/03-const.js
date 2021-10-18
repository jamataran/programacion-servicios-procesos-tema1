const CONSTANTE = 10;
function f(){
    CONSTANTE = 20; // Error: esto no esta permitido.
    return CONSTANTE;
}

console.log(f());
