require('colors');

class Tareas {
    constructor (){
        this.listaTareas = [];
    }
    agregarTarea(tarea) {
        if(tarea) this.listaTareas.push(tarea);
    };
    get lista() {
        return this.listaTareas;
    };
    get listaTareasConsola() {
        if(this.listaTareas.length !== 0){
            this.listaTareas.forEach((el, index) => {
                const estado = el.state ? 'Completada'.green : 'Pendiente'.red;
                console.log(
                    `${index + 1}. `.blue + `${el.description} :: `.white + estado
                );
            });
        } else {
            console.log('No hay tareas\n');
        }
    };
    get tareasCompletadas() {
        const tareas = this.listaTareas.filter((el) => el.state === true);
        if(tareas.length !== 0) {
            tareas.forEach((el, index) => `${index + 1}`.blue + el.description.white);
        } else {
            console.log('No hay tareas\n');
        }
    }
    get tareasPendientes() {
        const tareas = this.listaTareas.filter((el) => el.state === false);
        if(tareas.length !== 0) {
            tareas.forEach((el, index) => `${index + 1}`.blue + el.description.white);
        } else {
            console.log('No hay tareas\n');
        }
    }
    marcarCompletada(id) {
        const tarea = this.listaTareas.find((el) => el.id === id)
        this.eliminarTarea(id);
        tarea.state = true;
        this.listaTareas.push(tarea);

    }
    eliminarTarea(id) {
        this.listaTareas = this.listaTareas.filter((el) => el.id !== id);
    }
}

module.exports = Tareas;