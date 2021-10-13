class Tareas {
    constructor() {
        this.listaTareas = []
    };
    agregarTarea(tarea) {
        this.listaTareas.push(tarea);
    };
    get lista() {
        return this.listaTareas;
    }

}

exports.module = Tareas;