// function saludar(nombre, apellido) {
//     return nombre + apellido
// }

// console.log(saludar("juan ", " olvera"))

class persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre}`)
    }
}

const variable = new persona('ricardo');
variable.saludar();





