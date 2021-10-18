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
        const completadas = this.listaTareas.filter((el) => el.state === true);
        console.log('');
        if(completadas.length !== 0) {
            completadas.forEach((el, index) => console.log(`${index + 1}. `.blue + el.description.white));
        } else {
            console.log('No hay tareas\n');
        }
    }
    get tareasPendientes() {
        const pendientes = this.listaTareas.filter((el) => el.state === false);
        console.log('');
        if(pendientes.length !== 0) {
            pendientes.forEach((el, index) => console.log(`${index + 1}. `.blue + el.description.white));
        } else {
            console.log('No hay tareas');
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