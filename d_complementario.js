let producto1 = 'REMERA BOCA';
let producto2 = 'REMERA RIVER';
let producto3 = 'REMERA RIVER';


let precio1 = 10000;
let precio2 = 9700;
let precio3 = 9200;

let finalizarCompra = 'FINALIZAR COMPRA';

let carrito = ' ';

let buscador = prompt ('INGRESE UN PRODUCTO');

while (buscador !== finalizarCompra) {
    if (buscador == producto1) {
        alert ('$' + precio1);
    }
    else if (buscador == precio2) {
        alert ('$' + precio2);
    }
    else if (buscador == precio3) {
        alert ('$' + precio3);
    }
    carrito += buscador;
    buscador = prompt ('INGRESE UN NUEVO PRODUCTO O FINALICE LA COMPRA');
}

alert ('TOTAL DE LA COMPRA: ' + carrito);