const { v4: v4uuid } = require('uuid')

class Tarea {
    constructor(description) {
        this.id = v4uuid();
        this.description = description;
        this.state = false;
    }
}

module.exports = Tarea;