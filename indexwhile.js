
function instrucciones() {
    alert('Hola, recuerda colocar el número de mesa que atendiste, al colocar el precio de cada item porfavor no utilizar puntos ni signos, si el cliente no consumio el item colocar una N y en el precio de este un 0, gracias por tu tiempo.')
}

instrucciones()

function Combo(nombre, caracteristicas, total) {
    this.nombre = nombre.toUpperCase();
    this.caracteristicas = caracteristicas;
    this.total = parseFloat(total);
}

const vegano = new Combo("vegano", "hamburguesa de soya con papas y bebida", 3000);
const carnivoro = new Combo("carnivoro", "hamburguesa de vacuno con papas y bebida", 3500);
const vegetarian = new Combo("vegetarian", "hamburguesa de champiñones con papas y bebida", 2500);

alert('Los menús disponibles son ' + (vegano.nombre + " CON " + vegano.caracteristicas  + " CUESTA " + vegano.total) + '-' + (carnivoro.nombre  + " CON " + carnivoro.caracteristicas  + " CUESTA " + carnivoro.total) + '-' +  (vegetarian.nombre  + " CON " + vegetarian.caracteristicas  + " CUESTA " + vegetarian.total))

const numeroMesa = parseFloat(prompt('Ingrese número de mesa'))

class Menu{
    constructor(nombre) {
        this.nombre = prompt('Nombre de comensal')
        this.combo = prompt('Nombre de combo')
        this.precio = parseInt(prompt('Ingrese precio'))
    }
}
const menus = [];
let numeroPersonas = parseInt(prompt('Ingrese numero de personas'))
for (let index = 0; index < numeroPersonas; index++) {

    menus.push(new Menu("BART"));
    for (const menu of menus){
        console.log(menu.nombre);
        console.log(menu.combo);
        console.log(menu.precio);

        const suma = menus.reduce((previous, current) => {
            return previous + current.precio;
        }, 0);
        console.log(suma)
        alert('El total es ' + suma)
    }
}

// no pude colocar console.log(suma) en el if que viene a continuacion para que le sume agregue la propina del 10%, debe ser porque esta dentro del for o no?

const ingreseTotal = (parseInt(prompt('Ingrese el total')))

let totalfinal = 0

const propina = prompt('¿Desea agregar propina?')
if (propina == 'si') {
    (totalfinal = ingreseTotal * 1.1)
} else {
    (totalfinal = ingreseTotal)
}

function siResumen() {
    for (const menu of menus){
        comidaPedida = alert('Los menus pedidos fueron ' + menu.combo + ' de ' + menu.nombre + ' con un precio de ' + menu.precio)
    }
    alert('Siendo un total de ' + (parseInt(totalfinal)) + ' pesos argentinos')
}

function noResumen() {
    alert('El total de la mesa ' + (numeroMesa) + ' son ' + '' + (parseInt(totalfinal)) + ' pesos agentinos')
}

const resumen = prompt('¿Desea el resumen de la mesa?')
if (resumen == 'si') {
    siResumen();
} else {
    noResumen();
}

