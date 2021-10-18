function holaMundo() {
    var message = 'Hola mundo';
    return message;
}

function f() {
    var a = 10;
    return function g() {
        var b = a + 5;
        return b;
    }
}

var g = f();

console.log(holaMundo());
console.log('f()=' + f());
console.log(g);
