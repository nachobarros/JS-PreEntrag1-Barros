
const numeroMesa = parseFloat(prompt('Ingrese número de mesa'))

const platoEntrada = prompt('Nombre plato de entrada')
const precioPlatoEntrada = parseFloat(prompt('Ingrese precio sin puntos ni signos'))

const platoPrincipal = prompt('Nombre de plato principal')
const precioPlatoPrincipal = parseFloat(prompt('Ingrese precio sin puntos ni signos'))

const ensalada = prompt('Ingrese nombre de la ensalada')
const precioEnsalada = parseFloat(prompt('Ingrese precio sin puntos ni signos'))

const bebestible = prompt('Ingrese nombre de bebestible consumido')
const precioBebestible = parseFloat(prompt('Ingrese precio sin puntos ni signos'))

const postre = prompt ('Ingrese nombre de postre')
const precioPostre = parseFloat(prompt('Ingrese precio sin puntos ni signos'))

total = (precioPlatoEntrada + precioPlatoPrincipal + precioEnsalada + precioBebestible + precioPostre)  

const propina = prompt('¿Desea agregar propina?')
if (propina == 'si'){
    (totalfinal = total * 1.1)
} else {
    (totalfinal = total * 1)
}

const resumen = prompt('¿Desea el resumen de la mesa?')
if (resumen == 'si') {
    alert('Mesa número ' + (numeroMesa) + ', ' + '-Plato entrada: ' + (platoEntrada) + ' $'+ (precioPlatoEntrada) + ', ' + '-Plato Principal: ' + (platoPrincipal) + ' $'+ (precioPlatoPrincipal) + ', ' + '-Plato Ensalada: ' + (ensalada) + ' $'+ (precioEnsalada) + ', ' + '-Bebestible: ' + (bebestible) + ' $'+ (precioBebestible) + ', ' + '-Postre: ' + (postre) + ' $'+ (precioPostre) + '; El total asciende a $ ' + (totalfinal) + ' pesos argentinos')
} else {
    alert('El total de la mesa ' + (numeroMesa)  +  ' son ' + '' + (parseInt(totalfinal)) + ' pesos agentinos')
}


