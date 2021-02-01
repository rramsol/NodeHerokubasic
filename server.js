const express = require("express");
const app = express();
const hbs = require("hbs");

require("./hbs/helpers");

//configuracion para subir  a heroku obtiene el puerto disponible si esta subido a la nube y si esta local ponel el puerto 3000
const port = process.env.PORT || 3000;

//midleware es una instruccion que siempre se va a ejecutar,
app.use(express.static(__dirname + "/public"));

//express HBS engine
hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");

app.get("/", function(req, res) {
    res.render("home", {
        nombre: "Ramsol",
    });
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.listen(port, () => {
    console.log("Escuchando periciones en el puerto 3000");
});