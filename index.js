// index.js
const express = require("express");
const app = express();
const cors = require("cors");
const puerto = 2006;

// Importar los datos de los libros y controladores
const { libros } = require("./libros");
const { getLibros, getLibroById } = require("./controllers/libros.controllers");

// Middleware
app.use(cors());

// Rutas
app.get("/", getLibros); // Obtener todos los libros
app.get("/:id", getLibroById); // Obtener libro por ID

// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`Servidor arriba ok en el puerto ${puerto}`);
});
