/*
        Creacionales 2: factory method
 Factory Method es un patrón de diseño creacional 
que proporciona una interfaz para crear objetos 
en una superclase, mientras permite a las 
subclases alterar el tipo de objetos que se crearán.
 Factory Method sugiere que, en lugar de llamar al 
operador new para construir objetos directamente, 
se invoque a un método fábrica especial. Los objetos 
se siguen creando a través del operador new, pero se 
invocan desde el método fábrica. Los objetos 
devueltos por el método fábrica a menudo se 
denominan productos.

    Ventajas
• Separación entre el creador y los productos concretos.
	
• Ahorro de recursos del sistema
	
• Principio de responsabilidad única. Puedes mover el 
código de creación de producto a un lugar del programa, 
haciendo que el código sea más fácil de mantener.
	
• Principio de abierto/cerrado. Puedes incorporar nuevos 
tipos de productos en el programa sin descomponer el 
código cliente existente.

    
    Contras
 Puede ser que el código se complique, ya que debes 
incorporar una multitud de nuevas subclases para 
implementar el patrón.

    ¿Cuándo utilizarlo?
 Sirve cuando no sabemos cuántos productos vamos a añadir 
o cuando queremos ahorrar recursos del sistema mediante 
la reutilización de objetos existentes.


    Implementación
 Hay 2 conceptos que debemos tener en cuenta: concrete
creators, clases que devuelven los diferentes productos
que queremos permitiendo almacenarlas en memoria en vez
de instanciarla en cada uso, y concrete products, clases
que termina obteniendo el usuario.
*/

// Creamos el concrete creator que conecta los producto con el usuario
class PizzaFactory {
    getPizza() {
        return new Pizza()
    }
}

// Creamos los productos que el usuario solicita
class Pizza {
    constructor() {
        this.hasCheese = true
        this.hasTomato = false
    }
}

// Hacemos que el usuario se conecte con el concrete creator en vez de con el producto
const pizza = new PizzaFactory()
const cheese_pizza = pizza.getPizza() // Devuelve el producto: {hasCheese: true, hasTomato: false}

console.log(cheese_pizza)

/*
 De nuevo, parece que no pero cuando nuestra 
aplicación crece, estos cambios nos permiten no 
tener que modificar todo el código sino tener 
que sumar un producto y un concrete creator. Además,
facilita la implementación de códigos más complejos
a futuro, como abstract factory o builder.
 Hay otros dos conceptos que es bueno tener en mente:
creator y product. Son interfaces que definen los
métodos que utilizarán los concrete creators y
concrete products respectivamente, pero si aún no vieron 
POO con typescript u otro lenguaje, no se preocupen por 
esto, aunque les recomiendo que lo aprendan :)
*/