const hbs = require("hbs");

//helppers

hbs.registerHelper("getanio", () => {
    return new Date().getFullYear();
});

hbs.registerHelper("pasarMayusculas", (texto) => {
    return texto.toUpperCase();
});