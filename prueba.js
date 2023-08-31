// let entrada = prompt("INGRESAR JUGADOR");
// const equipo = [];
// while (entrada != 'ESC') {
//     equipo.push(entrada);
//     entrada = prompt("INGRESAR JUGADOR");
// }
// for (let index = 0; index < equipo.length; index++) {
//     alert("POSICION " + index + " JUGADOR " + equipo[index]);
// }

function Combo(nombre, caracteristicas, total) {
        this.nombre = nombre.toUpperCase();
        this.caracteristicas = caracteristicas;
        this.total = parseFloat(total);
    }
    
    
const vegano = new Combo("vegano", "hamburguesa de soya con papas y bebida", 3000);
const carnivoro = new Combo("carnivoro", "hamburguesa de vacuno con papas y bebida", 3500);
const vegetarian = new Combo("vegetarian", "hamburguesa de champiñones con papas y bebida", 2500);

alert('Los menús disponibles son ' + vegano.nombre + '-' + carnivoro.nombre + '-' +  vegetarian.nombre)

console.log(vegano)
console.log(carnivoro)
console.log(vegetarian)


class Menu{
    constructor(nombre, combo, total) {
        this.nombre = prompt('Nombre de comensal')
        this.combo = prompt('Nombre de combo')
        this.total = parseFloat(prompt('Ingrese precio del combo'))
    }
}
const menus = [];
let numeroPersonas = parseInt(prompt('Ingrese numero de personas'))
for (let index = 0; index < numeroPersonas; index++) {

    menus.push(new Menu("BART","",15));
    for (const menu of menus){
        console.log(menu.nombre);
        console.log(menu.producto);
    }
}



alert('El total es ' + '$' + menus[numeroPersonas].total)
console.log(menus);