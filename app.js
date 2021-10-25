const { menu, pausa, input, list } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const  Tareas = require('./models/tareas');
const fs = require('fs');

(async() => {
    const pathTareas= fs.existsSync('./db/listaTareas.txt');
    const listaTareas = new Tareas();
    if(pathTareas) {
        const tareasGuardadas = JSON.parse(fs.readFileSync('./db/listaTareas.txt'));
        tareasGuardadas.forEach((el) => listaTareas.agregarTarea(el));
    }
    let option;
    let choices;
    do {
        console.clear();
        console.log(`${'=============================================\n'.green}${'            LISTA   DE   TAREAS              \n'.white}${'============================================='.green}`);
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
            case 3:
                listaTareas.tareasCompletadas;
                break;
            case 4:
                listaTareas.tareasPendientes;
                break;
            case 5:
                choices = listaTareas.lista.filter((el) => el.state === false)
                    .map((el, index) => ({
                        name: `${index + 1}. ${el.description}`,
                        value: el.id,
                        checked: false,
                    }));
                const ids = await list('checkbox', choices, 'Seleccione la tarea(s) completadas');
                ids.forEach((el) => {listaTareas.marcarCompletada(el)});
                break;
            case 6:
                choices = listaTareas.lista.map((el, index) => ({ name: `${index + 1}. ${el.description}`, value: el.id }));
                const id = await list('list', choices, 'Seleccione la tarea a Eliminar');
                listaTareas.eliminarTarea(id);
            default:
                break;
        }
        if(option !== 0) await pausa();
    } while (option !== 0);
    fs.writeFileSync('./db/listaTareas.txt', JSON.stringify(listaTareas.lista));
    console.clear();
})();
