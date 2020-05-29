const colors = require('colors');

const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];
let resp;
let mensaje;

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('====== Por hecer ==========='.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado);
            console.log('============================'.green);
        }
        break;

    case 'actualizar':
        resp = porHacer.actualizar(argv.descripcion, argv.completado);
        mensaje = (resp) ? 'Actualización exitosa' : 'no se encontró información';
        console.log(mensaje);
        break;

    case 'eliminar':
        resp = porHacer.eliminar(argv.descripcion);
        mensaje = (resp) ? 'Eliminación exitosa' : 'no se encontró información';
        console.log(mensaje);
        break;

    default:
        console.log('Comando no es reconocido');

}