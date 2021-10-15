
const inquirer = require('inquirer');
require('colors');

const menu = async() => {
    const question = {
        type: 'list',
        name: 'option',
        message: 'Seleccione una Opción',
        choices: [
            { name: `${ '1.'.blue } ${'Agregar tarea nueva'.green}`,value: 1 },
            { name: `${ '2.'.blue } ${'Listar tareas'.green}`,value: 2 },
            { name: `${ '3.'.blue } ${'Listar tereas terminadas'.green}`,value: 3 },
            { name: `${ '4.'.blue } ${'Listar tareas incompletas'.green}`,value: 4 },
            { name: `${ '5.'.blue } ${'Completar tarea(s)'.green}`,value: 5 },
            { name: `${ '6.'.blue } ${'Borrar tarea'.green}`,value: 6 },
            { name: `${ '0.'.blue } ${'Salir'.green}`,value: 0 },
        ]
    }
    const { option } = await inquirer.prompt(question);
    return option;
}
const pausa = async() => {
    const question = {
        type: 'input',
        name: 'pausa',
        message: `${'Presione'.green} ${'ENTER'.grey} ${'para continuar'.green}`,
    }
    const pausa = await inquirer.prompt(question);
    return pausa;
}

const input = async (mensaje) => {
    const question = {
        type: 'input',
        name: 'text',
        message: mensaje,
        validate: (msg) => {
            if(!msg) return 'Debe ingresar una tarea valida';
            return true;
        },
    }
    const { text } = await inquirer.prompt(question);
    return text;
}

const list = async(choices, message) => {
    const question = {
        type: 'list',
        name: 'response',
        message: message,
        choices: choices,
    }
    const { response } = await inquirer.prompt(question);
    return response;
}


module.exports = {
    menu,
    pausa,
    input,
    list
}