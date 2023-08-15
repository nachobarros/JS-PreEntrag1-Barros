
function instrucciones() {
    alert('Hola, recuerda colocar el número de mesa que atendiste, al colocar el precio de cada item porfavor no utilizar puntos ni signos, si el cliente no consumio el item colocar una N y en el precio de este un 0, gracias por tu tiempo.')
}

instrucciones()

const numeroMesa = parseFloat(prompt('Ingrese número de mesa'))

const platoEntrada = prompt('Nombre plato de entrada')
const precioPlatoEntrada = parseFloat(prompt('Ingrese precio de plato de entrada'))

const platoPrincipal = prompt('Nombre de plato principal')
const precioPlatoPrincipal = parseFloat(prompt('Ingrese precio de plato principal'))

const ensalada = prompt('Ingrese nombre de la ensalada')
const precioEnsalada = parseFloat(prompt('Ingrese precio de la ensalada'))

const bebestible = prompt('Ingrese nombre de bebestible consumido')
const precioBebestible = parseFloat(prompt('Ingrese precio de bebestible'))

const postre = prompt('Ingrese nombre de postre')
const precioPostre = parseFloat(prompt('Ingrese precio de postre'))

total = (precioPlatoEntrada + precioPlatoPrincipal + precioEnsalada + precioBebestible + precioPostre)

let totalfinal = 0

const propina = prompt('¿Desea agregar propina?')
if (propina == 'si') {
    (totalfinal = total * 1.1)
} else {
    (totalfinal = total)
}

function siResumen() {
    alert('Mesa número ' + (numeroMesa) + ', ' + '-Plato entrada: ' + (platoEntrada) + ' $' + (precioPlatoEntrada) + ', ' + '-Plato Principal: ' + (platoPrincipal) + ' $' + (precioPlatoPrincipal) + ', ' + '-Plato Ensalada: ' + (ensalada) + ' $' + (precioEnsalada) + ', ' + '-Bebestible: ' + (bebestible) + ' $' + (precioBebestible) + ', ' + '-Postre: ' + (postre) + ' $' + (precioPostre) + '; El total asciende a $ ' + (parseInt(totalfinal)) + ' pesos argentinos')
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

