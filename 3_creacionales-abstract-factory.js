/*
        Creacionales 3: Abstract Factory
 Abstract Factory es un patrón de diseño 
creacional que nos permite producir 
familias de objetos relacionados sin 
especificar sus clases concretas.

    Ventajas
• Puedes tener la certeza de que los productos 
que obtienes de una fábrica son compatibles 
entre sí.

• Evitas un acoplamiento fuerte entre productos 
concretos y el código cliente.

• Principio de responsabilidad única. Puedes 
mover el código de creación de productos a un 
solo lugar, haciendo que el código sea más 
fácil de mantener.

• Principio de abierto/cerrado. Puedes 
introducir nuevas variantes de productos sin 
descomponer el código cliente existente.

    Contras
 Puede ser que el código se complique más de lo 
que debería por la cantidad de clases e 
interfaces que pueden ser añadidas.

    ¿Cuándo utilizarlo?
 Sirve cuando tu código deba funcionar con varias 
familias de productos relacionados. Es
especialmente útil en elementos de interfaz de
usuario.

    Implementación
 Los conceptos son los mismos que en factory method. 
Tenemos concrete products, concrete factories que 
devuelven estos products y un cliente que llama a 
estos concrete factories, pero a diferencia de factory 
method, en abstract factory devolvemos más de un 
producto por concrete factory, una familia de 
productos.
*/

// Creamos los productos
class Button {
    print() {
        console.log("I'm a button from lightmode")
    }
}

class DarkButton {
    print() {
        console.log("I'm a button from darkmode")
    }
}

class Input {
    print() {
        console.log("I'm an input from lightmode")
    }
}

class DarkInput {
    print() {
        console.log("I'm an input from darkmode")
    }
}

// Y las concrete factories que crearán estos productos
class Form {
    constructor() {
        this.button = new Button()
        this.input = new Input()
    }

    printButton() {
        this.button.print()
    }

    printInput() {
        this.input.print()
    }
}

// A los clientes no debería de importarles cuál factory es, los métodos deben ser los mismos
class DarkForm {
    constructor() {
        this.button = new DarkButton()
        this.input = new DarkInput()
    }

    printButton() {
        this.button.print()
    }

    printInput() {
        this.input.print()
    }
}

// Cliente
class Main {
    constructor() {
        this.form = new Form()
        this.dark_form = new DarkForm()
    }

    printLightMode() {
        this.form.printButton()
        this.form.printInput()
    }

    printDarkMode() {
        this.dark_form.printButton()
        this.dark_form.printInput()
    }
}

new Main().printLightMode()

/*
 De nuevo, si usamos un lenguaje que implemente
interfaces, deberiamos usar abstract factory y
product para indicar qué métodos son comunes en
todas las concrete factories y concrete products 
respectivamente.
*/