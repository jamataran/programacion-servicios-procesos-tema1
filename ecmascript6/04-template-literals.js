var lyrics = 'Never gonna give you up'

// Antiguo: no usar
var html = `<div>`+ lyrics + '</div>';
console.log(html);

// Nuevo: buena practica
console.log(`<div>${lyrics}</div>`);
