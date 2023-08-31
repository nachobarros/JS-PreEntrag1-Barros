function instrucciones() {
    alert('Hola, recuerda colocar el número de mesa que atendiste, al colocar el precio de cada item porfavor no utilizar puntos ni signos, si el cliente no consumio el item colocar una N y en el precio de este un 0, gracias por tu tiempo.')
}

instrucciones()

const numeroMesa = parseFloat(prompt('Ingrese número de mesa'))

let numeroPersonas = parseFloat(prompt('¿Cuantas personas comeran?'))


for (let index = 0; index < numeroPersonas; index++) {
    let menu = parseInt(prompt('Ingrese número de menú'))

    let persona = parseFloat(prompt('Ingrese número de comensal'))
    
    function Comensal(menu, persona) {
        this.menu = menu
        this.persona = persona
        this.cobrar = function () {
            console.log(this.menu + this.persona)
    
        }
    
    const comensal = new Comensal(menu, persona,);
    

    comensal.cobrar ();
    }
}


// for (let i = 0; i < numeroPersonas; i++) {

//     let comensal[] = new Comensal(menu, persona);
    
//     comensal[i].cobrar();
// }






// function Mesa(mesa, personas, total) {
//     this.mesa = numeroMesa;
//     this.personas = numeroPersonas;
//     this.total = total;

//     this.cobrar = function() { console.log("El total de la mesa" + this.mesa+ " para " + this.personas + " personas es " +this.total)}
// }





// const mesa1 = new Mesa(numeroMesa, numeroPersonas, total);

// mesa1.cobrar();

// // FUNCIONO EL TOTAL DE MESA //

// for (let i = 0; i < numeroPersonas; i++) {
//     console.log("hola mundo")
// }