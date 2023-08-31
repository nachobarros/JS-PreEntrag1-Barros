function Menu(platoEntrada, platoPrincipal, platoEnsalada, bebestible, postre, total) {
    this.platoEntrada = platoEntrada;
    this.platoPrincipal = platoPrincipal;
    this.platoEnsalada = platoEnsalada;
    this.bebestible = bebestible;
    this.postre = postre;
    this.total = total;

    this.cobrar = function ()
}

function Mesa(mesa, personas, total) {
    this.mesa = mesa;
    this.personas = personas;
    this.total = total; 
}



// function Mesa(mesa, total) {
//     this.mesa = mesa;
//     this.total = total;
//     this.cobrar = function() { console.log("El total para la "+ this.mesa+" son " + this.total)}
// }

// const mesa = parseFloat(prompt('Ingrese numero de mesa'))

// const total = parseFloat(prompt('ingrese numero de mesa2'))

// const mesa1 = new Mesa ("Mesa 1", 5500);
// const mesa2 = new Mesa ("Mesa 2", 9000);

// mesa1.cobrar();
// mesa2.cobrar();

// // HACER ARRAY SOBRE SI EXISTE MESA O NO //

// // definir menu
// // mesa, numero de personas, menu.