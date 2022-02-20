//Condicionales

let numero = Number(prompt("Insertar numero"));
let saludo = prompt("Ingrese un saludo");


if (numero > 1000) {
    alert("El numero es mayor a mil");
} else {
    alert("El numero es menor a mil");
}

if (numero > 10 && numero < 100) {
    alert("Este numero esta entre 10 y 100")
} else {
    alert("Este numero no esta entre 10 y 100")
}

if (saludo == "hola") {
    alert("Dijiste hola Felicitaciones!")
} else {
    alert("No dijiste hola Adios!")
}

// Algoritmo para chequear el auto antes de un viaje
debugger 

let lista = "";
let item;


do {
    item = prompt("Ingresa un item que ya hayas chequeado de tu auto antes del viaje - Escribi ESC cuando termines");
    if (item != "ESC") {
        lista = lista + item + "\n";
    }
} while (item != "ESC");

console.log("Tu auto está casi listo :");
console.log(lista);