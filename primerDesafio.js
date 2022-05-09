const producto1 = 'REMERA BOCA';
const producto2 = 'REMERA RIVER';
const producto3 = 'REMERA RACING';

let precio1 = 10000;
let precio2 = 9700;
let precio3 = 9200;

function buscador() {
      return prompt('QUE PRODUCTO BUSCABAS....');
}

let opcion = buscador();

if (opcion == 'REMERA BOCA') {
      alert('REMERA OFICIAL BOCA JR: ' + '$' + precio1);
      opcion = carrito (precio1);
}
else if (opcion == 'REMERA RIVER') {
      alert('REMERA OFICIAL RIVER PLATE: ' + '$' + precio2);
      opcion = carrito (precio2);
}
else if (opcion == 'REMERA RACING') {
      alert('REMERA OFICAL RACING FC: ' + '$' + precio3);
      opcion = carrito (precio3);
}
else if (opcion != 'REMERA BOCA' && opcion != 'REMERA RIVER' && opcion != 'REMERA RACING') {
      alert ('PRODUCTO NO ENCONTRADO, REFRESQUE LA PAGINA');
}

function carrito(precio) {
      let finalizar = Number(prompt('DESEA COMPRAR EL PRODCUTO? 1 (SI) 2 (NO)'));
      if (finalizar == 1) {
            alert('PRODCUTO EN EL CARRITO DE COMPRAS');
            alert('CARRITO: $' + precio);
            opcion = Number(prompt('INGRESE EL MONTO A PAGAR: $' + precio));
            while (opcion != precio) {
                  alert('MONTO INVALIDO');
                  alert ('INGRESE EL MONTO CORRECTAMENTE')
                  opcion = Number(prompt('INGRESE EL MONTO A PAGAR: $' + precio));
            }
            if (opcion == precio) {
                  alert('GRACIAS POR SU COMPRA!');
            }
      }
      else if (finalizar == 2) {
            alert('COMPRA CANCELADA');
      }
}