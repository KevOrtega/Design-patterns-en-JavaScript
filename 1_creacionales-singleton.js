/*
        Creacionales 1: Singleton
 Singleton es el primer patrón de diseño que aprendemos 
puesto a que es el más fácil de implementar.
Propone que cada clase solo tenga una instancia y 
proporcionar un punto de acceso global a ella. 
Es fácil de implementar pero tiene algunos inconvenientes, 
por lo que es considerado una mala práctica.

    Ventajas 	
• Mejora el consumo de memoria.

    Contras 	
• Solo vamos a poder crear una unica instancia por clase.

• Exponemos una instancia al contexto global por lo que 
podría ser modificada en cualquier momento,
y acabamos perdiendo el control.

• Rompe con la S de solid (single responsability) 
porque nuestra clase va a comprobar que solo tenga una 
instancia de sí misma y a parte ejecutará la función 
para la que esté pensada.

• Es complicado hacer unit test.

• Tampoco se pueden hacer Mocks.

    ¿Cuándo utilizarlo?
 Normalmente se utiliza en clases de bases de datos o logs, 
ya que nos permite tener un solo canal reutilizable y 
consumir poco espacio en memoria.

    Implementación
 Comprobamos si la instancia de la clase existe. Si es así,
devolvemos esa instancia; si no, almacenamos el valor de
la instancia y lo devolvemos.
*/

// Con singleton
class Logs {
    constructor(data) {
        this._data = data

        if(typeof Logs.instance === "object") {
            return Logs.instance
        }

        Logs.instance = this
    }

    getData() {
        return this._data
    }
}

console.log(new Logs("Hello world").getData()) // Devuelve "hello world"
console.log(new Logs("Hello world 2").getData()) // Devuelve "hello world" de nuevo

/*
 Así, aunque intentemos crear una nueva instancia, 
siempre nos devolverá la primera.
 Puede que en este ejemplo no se note, pero en una
aplicación real. y en especial en una clase que
ejecute peticiones a una api. este patrón cambia
mucho el tiempo de ejecución.
*/

// Sin singleton
class LogsWithoutSingleton {
    constructor(data) {
        this._data = data
    }

    getData() {
        return this._data
    }
}

console.log(new LogsWithoutSingleton("Hello world").getData()) // Devuelve "hello world"
console.log(new LogsWithoutSingleton("Hello world 2").getData()) // Devuelve "hello world 2"