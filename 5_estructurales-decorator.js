/*
        Estructurales 1: Decorator
 Decorator es un patrón de diseño estructural 
que te permite añadir funcionalidades a 
objetos colocando estos objetos dentro de 
objetos encapsuladores especiales que contienen 
estas funcionalidades, como capas de una cebolla. 
Esto permite que los objetos encapsuladores 
puedan alterar el resultado.
 Cuando tenemos que alterar la funcionalidad de 
una clase, simplemente añadir subclases que 
añadan esas funcionalidades inflaría el código en 
gran medida. La herencia no es muy útil en este 
caso, así que la mejor solución es la composición. 
 En la herencia una clase toma de referencia el 
comportamiento de su superclase, mientras que en 
la composición sustituimos esta primera clase por 
una clase vinculada que le delegue tareas.
 La composición es el principio clave que se 
esconde tras muchos patrones de diseño, 
incluyendo el Decorator.

    Ventajas
• Cambiar el comportamiento sin agregar una 
nueva subclase.

• Puedes añadir o eliminar responsabilidades de 
un objeto durante el tiempo de ejecución.

• Puedes combinar varios comportamientos 
envolviendo un objeto con varios decoradores.

• Principio de responsabilidad única. Puedes 
dividir una clase monolítica que implementa 
muchas variantes posibles de comportamiento, en 
varias clases más pequeñas.

    Contras
• Resulta difícil eliminar un decorator 
específico de la pila de decorators.

•  El orden en la pila de decoradores influye en el 
resultado.

    ¿Cuándo utilizarlo?
 Utiliza el patrón Decorator cuando necesites asignar 
funcionalidades adicionales sin descomponer el código 
que utiliza esos objetos.

    Implementación
• Crea un componente concreto.

• Crea las clases decoradoras concretas que reciban el 
componente concreto u otras clases como parámetro y 
modifiquen su resultado con métodos.

• El cliente utiliza los métodos de la o las clases 
decoradoras que quieras utilizar pasándoles el componente 
concreto u otros decoradores concretos.
*/

// Concrete component
class Button {
    print() {
        return "Botón agregado"
    }
}

// Concrete decorators
class ButtonRed {
    constructor(button) {
        this.button = button
    }

    print() {
        return this.button.print() + ", es rojo"
    }
}

class ButtonWithBorder {
    constructor(button) {
        this.button = button
    }

    print() {
        return this.button.print() + ", tiene bordes"
    }
}


// Cliente
const button = new Button()
const button_red = new ButtonRed(button)
const button_with_border = new ButtonWithBorder(button_red)

console.log(button_with_border.print())

/*
 Así, podemos hacer distintas combinaciones de funcionalidades,
sin tener que crear una subclase para ello.
 Estando en un lenguaje que admita interfaces, es una buena 
práctica crear una interfaz componente que defina los métodos que 
son comunes entre los componentes concretos y un decorador base
que haga lo propio con los decoradores concretos.
*/