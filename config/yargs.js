const descripcion = {
    demand: true,
    alias: "d",
    desc: "Descripcion de las tareas por hacer"
};

const completado = {
    default: true,
    alias: "c",
    desc: "Marca como completado o pendiente la tarea"
};

const argv = require("yargs")
    .command("crear", "Crear un elemento por hacer", {
        descripcion
    })
    .command("actualizar", "actualiza el estado completado de una tarea", {
        descripcion,
        completado
    })
    .command("borrar", "Borra tareas por hacer", {
        descripcion
    })
    .help().argv;

module.exports = {
    argv
};