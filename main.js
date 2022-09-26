let ventas = [];

function cargarPrecio() {
    let precio = parseInt(prompt("Ingrese el precio de la venta"));

    if (precio && precio > 0) {
        ventas.push(precio);
        alert("Su venta fue de " + precio + " pesos");
    } else {
        alert("Debes escribir un precio mayor a 0");
    }
}

function calcularTotal() {
    let sumaTotal = 0;

    for (var i = 0; i < ventas.length; i++) {
        sumaTotal += ventas[i];
    }

    alert("Total de vendido: " + sumaTotal + " pesos");
}
