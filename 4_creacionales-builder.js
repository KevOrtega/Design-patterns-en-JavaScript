/*
        Creacionales 4: Builder
 El patrón builder propone crear un objeto más 
simple a partir de uno más complejo, 
permitiendo construir objetos complejos paso 
a paso. Es especialmente útil cuando debemos 
crear un objeto con muchas opciones posibles 
de configuración.

    Ventajas
• Puedes construir objetos paso a paso, 
aplazar pasos de la construcción o ejecutar 
pasos de forma recursiva.

• Puedes reutilizar el mismo código de 
construcción al construir varias 
representaciones de productos.

• Principio de responsabilidad única. Puedes 
aislar un código de construcción complejo de 
la lógica de negocio del producto.

• Soluciona el problema de tener una clase 
con muchos párametros, al cambiar los 
valores de los atributos mediante métodos.

    Contras
• La complejidad general del código aumenta, 
ya que el patrón exige la creación de varias 
clases nuevas.

• Duplicidad de atributos que deben estar en 
la clase destino y en el builder.

    ¿Cuándo utilizarlo?
 Normalmente se utiliza cuando necesitamos 
instanciar objetos similares y tienen muchos 
atributos por definir.

    Implementación
 Personalmente, defino dos formas de 
utilizar este patrón: la forma simplificada 
o la compleja.
 Primero veremos la simplificada en la cual
definimos en el constructor los valores por 
defecto de los atributos de la clase y creamos 
métodos setting para cada atributo. Luego, 
creamos un método específico de 
construcción (puede llamarse build) 
que devuelva un objeto, llamamos a los métodos 
settings para definir los valores de los 
atributos y llamamos al método build para 
obtener el producto final.
 Puede que se vea complejo pero veamoslo en
el código
*/

// Builder simplificado
class Pizza {
    constructor() {
        this.isThinDough = false
        this.hasCheese = false
        this.baconSlices = 0
    }

    setThinDough() {
        this.isThinDough = true
        return this // Devolvemos this para poder encadenar métodos
    }

    setCheese() {
        this.hasCheese = true
        return this
    }

    addBaconSlices(slices) {
        this.baconSlices = slices
        return this
    }

    // Constructor
    build() {
        // Producto
        return {
            isThinDough: this.isThinDough,
            hasCheese: this.hasCheese,
            baconSlices: this.baconSlices
        }
    }
}

const PizzaWithBacon = new Pizza()
PizzaWithBacon.setCheese().addBaconSlices(10) // En vez de pasarle parámetros ilegibles, ejecutamos métodos descriptivos

console.log(PizzaWithBacon.build()) // Devuelve el producto: {isThinDough: false, hasCheese: true, baconSlices: 10}

const PizzaThinDough = new Pizza() // Utilizamos la misma clase para objetos distintos
PizzaThinDough.setThinDough().setCheese() // La personalizamos

console.log(PizzaThinDough.build()) // Devuelve el producto: {isThinDough: true, hasCheese: true, baconSlices: 0}

/*
 Ahora que ya hemos visto la forma simplificada,
podemos adentrarnos en la compleja, más optima para
clases más complejas ya que separamos, pero para 
comprender el patrón builder en su totalidad 
debemos repasar 3 conceptos: director, concrete builder 
y producto. 
 La clase directora define en qué orden se 
ejecutará los pasos de construcción, los
concrete builder definen cómo se implementarán 
estos pasos y el producto es el objeto resultante. 
Una vez que implementamos estos 3 conceptos, un cuarto, 
el cliente, asocia uno de los objetos constructores a 
la clase directora.
*/

class ConcreteBuilder {
    // Creamos un atributo y le asignamos la clase de nuestro producto 
    product

    constructor() {
        this.reset()
    }

    reset() {
        this.product = new Product()
    }

    // Creamos métodos de producción que modifiquen la clase producto
    buildThinDough() {
        this.product.isThinDough = true
        return this 
    }

    buildCheese() {
        this.product.hasCheese = true
        return this
    }

    buildBacon(slices) {
        this.product.baconSlices = slices
        return this
    }

    // Creamos un método que devuelva el producto
    getProduct() {
        const result = this.product
        /*
        Usualmente después de devolver el producto
        final queremos que la instancia esté lista
        para producir otro producto por lo que se
        suele llamar al método reset.
        */
        this.reset() 
        return result
    }
}

class Product {
    constructor() {
        this.isThinDough = false
        this.hasCheese = false
        this.baconSlices = 0
    }
}

class Director {
    Builder

    setBuilder(builder) {
        this.builder = builder
    }

    buildThinDoughPizza() {
        this.builder.buildThinDough()
        this.builder.buildCheese()
    }

    buildBaconPizza() {
        this.builder.buildCheese()
        this.builder.buildBacon(10)
    }
}

// Client code
const builder = new ConcreteBuilder()
const director = new Director()

director.setBuilder(builder)
director.buildThinDoughPizza()

console.log(builder.getProduct()) // Devuelve el producto: {isThinDough: true, hasCheese: true, baconSlices: 0}

director.buildBaconPizza()

console.log(builder.getProduct()) // Devuelve el producto: {isThinDough: false, hasCheese: true, baconSlices: 10}

/*
 Tal vez se vea poco práctica esta forma pero 
al tener clases complejas nos permite tener
separado la especificación de la construcción.
 Además, aunque no lo podamos probar en JavaScript
porque no admite el uso de interfaces, podemos 
utilizar abstract builders para definir métodos
que los concrete builders tengan en común.
 Veamos cómo tendríamos que crear una clase
pizza sin este patrón:
*/

class PizzaWithoutBuilder {
    constructor(isThinDough, hasCheese, baconSlices) {
        this.isThinDough = isThinDough || false
        this.hasCheese = hasCheese || false
        this.baconSlices = baconSlices || 0
    }
}

const baconPizza = new PizzaWithoutBuilder(false, true, 10) // parámetros inentendibles a menos que veamos la clase

console.log(baconPizza) 