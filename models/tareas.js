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
    get listaPendientes() {
            return this.listaTareas.filter((el) => el.state === false);
    };
    get listaTareasConsola() {
        this.listaTareas.forEach((el, index) => {
            const estado = el.state ? 'Completada'.green : 'Pendiente'.red;
            console.log(
                `${index + 1}. `.green + `${el.description} :: ` + estado
            );
        });
    };
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