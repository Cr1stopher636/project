// class Lista { 
//     constructor() {
//         this.lista = [];
//     }

//     funcionCreada(parametro) {
//         this.lista.push(parametro);
//     }
// }

// // 1. Usamos 'new' para crear el objeto
// let objeto = new Lista();

// // 2. Usamos el método
// objeto.funcionCreada("Ricardo");
// objeto.funcionCreada("Yañez");

// console.log(objeto.lista)


class Pila { 
    constructor() {
        this.items = [];
    }

    // Agregar un elemento arriba de todo
    push(elemento) {
        this.items.push(elemento);
    }

    // Quitar el elemento que está arriba de todo
    pop() {
        if (this.items.length === 0) return "La pila está vacía";
        return this.items.pop();
    }

    // Ver cuál es el que está arriba sin quitarlo
    peek() {
        return this.items.length - 1;
    }
}

let miPila = new Pila();
miPila.push("Plato 1");
miPila.push("Plato 2");

console.log(miPila.pop()); // Devuelve "Plato 2" (porque fue el último en entrar)