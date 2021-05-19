/*
        Comportamiento 1: Strategy
 Strategy es un patrón de diseño de comportamiento que te 
permite definir una familia de algoritmos, colocar cada 
uno de ellos en una clase separada y hacer sus objetos 
intercambiables.
 Permite separar la lógica algoritmica de la clase principal, 
permitiendo añadir algoritmos sin tener que modificar esta 
clase.

    Ventajas
• Divide los detalles de implementación de un algoritmo del 
código que lo utiliza.

•  Sustituye herencia por composición.

•  Principio de abierto/cerrado. Puedes introducir nuevas 
estrategias sin tener que cambiar el contexto.

    Contras
• Con pocos algoritmos que raramente cambien, no hay una razón 
real para complicar el sistema con este patrón.

• Los clientes deben conocer las diferencias entre estrategias 
para poder seleccionar la adecuada.

• Con programación funcional puedes implementar distintas 
versiones de un algoritmo dentro de un grupo de funciones 
anónimas. Entonces puedes utilizar estas funciones exactamente 
como habrías utilizado los objetos de estrategia, pero sin 
saturar tu código con clases e interfaces adicionales.

    ¿Cuándo utilizarlo?
 Sirve cuando quieras utilizar distintas variantes de un algoritmo 
dentro de un objeto y cambiar de un algoritmo a otro durante el 
tiempo de ejecución, cuando tengas muchas clases similares que 
sólo se diferencien en la forma en que ejecutan cierto 
comportamiento o  cuando quieras aislar la lógica de negocio de una 
clase.

    Implementación
1. Creamos clases concrete strategy para todas las variantes del 
algoritmo.

3. Implementamos estas clases en una clase contexto, que las reciba 
como parámetro y las ejecute de forma agnostica.

4. Como clientes, conectamos un concrete strategy a la clase contexto.
*/

// Concrete strategies
class getProductsBySearch {
    constructor(product_string) {
        this.product_string = product_string
    }

    getProducts() {
        return `Producto ${product_string} y similares`
    }
}

class getFavouriteProducts {
    getProducts() {
        return "Productos favoritos"
    }
}

class getHomeProducts {
    getProducts() {
        return "Productos del inicio"
    }
}

// Context class
class ProductsSection {
    constructor(request_products) {
        this.request_products = request_products
    }

    print() {
        const products = this.request_products.getProducts()
        console.log(`${products} mostrados en pantalla`)
    }
}

// Cliente
const products = new getHomeProducts()
const product_section = new ProductsSection(products)

product_section.print()

/*
 Es buena práctica utilizar una interfaz strategy para
definir los métodos comunes de los concrete strategies.
*/