const descripcion = {
    demand: true,
    alias: 'd'
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado completado a una tarea', {
        descripcion,
        completado
    })
    .command('eliminar', 'Elimina la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}