require('colors');

class Tareas {
    listaTareas = [];
    agregarTarea(tarea) {
        this.listaTareas.push(tarea);
    };
    get lista() {
        return this.listaTareas;
    };
    get listaTareasConsola() {
        this.listaTareas.forEach((el, index) => {
            const estado = el.state ? 'Completada'.green : 'Pendiente'.red;
            console.log(
                `${index + 1}. `.green + `${el.description} :: ` + estado
            );
        });
    };
    eliminarTarea(id) {
        this.listaTareas = this.listaTareas.filter((el) => el.id !== id);
    }
}

module.exports = Tareas;