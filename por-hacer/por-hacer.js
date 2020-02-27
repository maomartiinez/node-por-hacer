const fs = require("fs");

let listadoPorHacer = [];

const crear = descripcion => {
    cargarDB();
    let porhacer = {
        descripcion, //en escm6 es redundante decir descripcion:descripcion
        completado: false
    };
    listadoPorHacer.push(porhacer);
    guardarDB();
    return porhacer;
};

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile("db/data.json", data, err => {
        if (err) throw new Error("No se pudo grabar", err);
    });
};

const cargarDB = () => {
    try {
        listadoPorHacer = require("../db/data.json");
    } catch (error) {
        listadoPorHacer = [];
    }
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};
const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(
        tarea => tarea.descripcion === descripcion
    );
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion;
    });
    if (listadoPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
};

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};