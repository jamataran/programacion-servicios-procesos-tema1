requirejs.config({
    baseUrl: "modules",
    paths: {
        "constantes": "constantes.js",
        "log": 'logs.js'
    },
});

requirejs.onError = function (err){
    console.error('Require error');
    console.error(JSON.stringify(err));
    throw err;
}
