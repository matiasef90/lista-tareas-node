const { menu, pausa, input, list } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const  Tareas = require('./models/tareas');

(async() => {

    const listaTareas = new Tareas();
    let option;
    let choices;
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
            case 5:
                choices = listaTareas.lista.map((el) => ({ name: el.description, value: el.id, checked: false }));
                const ids = await list('checkbox', choices, 'Seleccione la tarea(s) completadas');
                console.log(ids);
                break;
            case 6:
                choices = listaTareas.lista.map((el) => ({ name: el.description, value: el.id }));
                const id = await list('list', choices, 'Seleccione la tarea a Eliminar');
                listaTareas.eliminarTarea(id);
            default:
                break;
        }
        if(option !== 0) await pausa();
    } while (option !== 0);
    console.clear();
})();
