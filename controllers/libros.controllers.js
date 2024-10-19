// libros.controllers.js
const { request, response } = require("express");
const { libros } = require("../libros");

const getLibros = (req, res) => {    
    return res.json({
        ok: true,
        statusCode: 200,
        libros
    });
}

const getLibroById = (req = request, res = response) => {    
    let id = parseInt(req.params.id);

    let libroABuscar = libros.find((libro) => {
        return libro.id === id;
    });

    if (libroABuscar) {
        return res.json({
            ok: true,
            statusCode: 200,
            libroABuscar
        });
    } else {
        return res.json({
            ok: true,
            statusCode: 404,
            msg: "No hay libros con ese ID"
        });
    }
}

module.exports = {
    getLibros,
    getLibroById
}
