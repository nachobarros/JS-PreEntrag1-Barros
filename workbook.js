class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUppercCase();
        this.precio = parseFloat(precio);
    } 
}

const productos = [];
productos.push(new Producto("arroz", 125));
productos.push(new Producto("fideo", 70));
productos.push(new Producto("pan", 50));

const productPrices = productos.map(producto => producto.precio);

const totalPrice = productPrices.reduce((a, b) => a + b, 0);

return totalPrice;
