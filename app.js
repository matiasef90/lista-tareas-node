const { menu, pausa, input, list } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const  Tareas = require('./models/tareas');

(async() => {

    const listaTareas = new Tareas();
    let option;
    do {
        console.clear();
        console.log(`
        ${'============================================='.green}
        ${'            LISTA   DE   TAREAS              '.white}
        ${'============================================='.green}
        `);
        option = await menu();
        switch (option) {
            case 1:
                const nuevaTarea = await input('Ingresa la siguiente tarea: ');
                const tarea = new Tarea(nuevaTarea);
                listaTareas.agregarTarea(tarea);
                break;
            case 2:
                listaTareas.listaTareasConsola;
                break;
            case 6:
                const choices = listaTareas.lista.map((el) => ({ name: el.description, value: el.id }));
                const id = await list(choices, 'Seleccione la tarea a Eliminar');
                listaTareas.eliminarTarea(id);
            default:
                break;
        }
        if(option !== 0) await pausa();
    } while (option !== 0);
    console.clear();
})();
