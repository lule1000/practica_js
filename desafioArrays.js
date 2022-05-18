const productos = [];

class Producto {
      constructor(id, nombre, precio) {
            this.id = id;
            this.nombre = nombre;
            this.precio = precio;
      }
}

const producto1 = new Producto(1, 'REMERA BOCA', 10000);
const producto2 = new Producto(2, 'REMERA RIVER', 9700);
const producto3 = new Producto(3, 'REMERA RACING', 9200);


let opcion = buscador();


//REMERA DE BOCA
if (opcion == 'REMERA BOCA') {
      alert('REMERA OFICIAL BOCA JR: ' + '$' + producto1.precio);
      let finalizar = comoContinuar();
      if (finalizar == 1) {
            productos.push(producto1);
            alert('REMERA OFICIAL BOCA JR EN EL CARRITO DE COMPRAS');
            let continuar = continuarComprando();
            if (continuar == 1) {
                  opcion = buscador();
                  if (opcion == 'REMERA BOCA') {
                        alert('YA TIENES ESTE PRODCUTO EN EL CARRITO DE COMPRAS');
                  } else if (opcion == 'REMERA RIVER') {
                        alert('REMERA OFICIAL RIVER PLATE: ' + '$' + producto2.precio);
                        finalizar = comoContinuar();
                        if (finalizar == 1) {
                              productos.push(producto2);
                              alert('REMERA OFICIAL BOCA JR Y REMERA OFICIAL RIVER PLATE EN EL CARRITO DE COMPRAS');
                        } else if (finalizar == 2) {
                              alert('PRODUCTO NO AGREGADO');
                        } else {
                              alert('ERROR');
                        }
                  } else if (opcion == 'REMERA RACING') {
                        alert('REMERA OFICAL RACING FC: ' + '$' + producto3.precio);
                        finalizar = comoContinuar();
                        if (finalizar == 1) {
                              productos.push (producto3);
                              alert ('REMERA OFICIAL BOCA JR Y REMERA OFICIAL RACING FC EN EL CARRITO DE COMPRAS');
                        } else if (finalizar == 2) {
                              alert ('PRODUCTO NO AGREGADO');
                        } else {
                              alert ('ERROR');
                        }
                  } else {
                        alert ('ERROR EN LA BUSQUEDA DEL ARTICULO');
                  }
            }
      } else if (finalizar == 2) {
            alert('COMPRA CANCELADA');
      } else {
            alert('ERROR EN LA COMPRA');
      }
}
//REMERA DE RIVER
else if (opcion == 'REMERA RIVER') {
      alert('REMERA OFICIAL RIVER PLATE: ' + '$' + producto2.precio);
      let finalizar = comoContinuar();
      if (finalizar == 1) {
            productos.push(producto2);
            alert('REMERA RIVER PLATE EN EL CARRITO DE COMPRAS');
            let continuar = continuarComprando ();
            if (continuar == 1) {
                  opcion = buscador ();
                  if (opcion == 'REMERA BOCA') {
                        alert('REMERA OFICIAL BOCA JR: ' + '$' + producto1.precio);
                        finalizar = comoContinuar();
                        if (finalizar == 1) {
                              productos.push(producto1);
                              alert('REMERA OFICIAL RIVER PLATE Y REMERA OFICIAL BOCA JR EN EL CARRITO DE COMPRAS');
                        } else if (finalizar == 2) {
                              alert('PRODUCTO NO AGREGADO');
                        } else {
                              alert('ERROR');
                        }
                  } else if (opcion == 'REMERA RIVER') {
                        alert ('YA TIENES ESTE PRODUCTO EN EL CARRITO DE COMPRAS');
                  } else if (opcion == 'REMERA RACING') {
                        alert('REMERA OFICAL RACING FC: ' + '$' + producto3.precio);
                        finalizar = comoContinuar();
                        if (finalizar == 1) {
                              productos.push (producto3);
                              alert ('REMERA OFICIAL BOCA JR Y REMERA OFICIAL RACING FC EN EL CARRITO DE COMPRAS');
                        } else if (finalizar == 2) {
                              alert ('PRODUCTO NO AGREGADO');
                        } else {
                              alert ('ERROR');
                        }
                  } else {
                        alert ('ERROR EN LA BUSQUEDA DEL ARTICULO');
                  }
            }
      } else if (finalizar == 2) {
            alert('COMPRA CANCELADA');
      } else {
            alert('ERROR EN LA COMPRA');
      }
}
//REMERA DE RACING
else if (opcion == 'REMERA RACING') {
      alert('REMERA OFICAL RACING FC: ' + '$' + producto3.precio);
      let finalizar = comoContinuar();
      if (finalizar == 1) {
            productos.push(producto3);
            alert('REMERA OFICIAL RACING FC EN EL CARRITO DE COMPRAS');
            let continuar = continuarComprando ();
            if (continuar == 1) {
                  opcion = buscador ();
                  if (opcion == 'REMERA BOCA') {
                        alert('REMERA OFICIAL BOCA JR: ' + '$' + producto1.precio);
                        finalizar = comoContinuar();
                        if (finalizar == 1) {
                              productos.push(producto1);
                              alert('REMERA OFICIAL RIVER PLATE Y REMERA OFICIAL BOCA JR EN EL CARRITO DE COMPRAS');
                        } else if (finalizar == 2) {
                              alert('PRODUCTO NO AGREGADO');
                        } else {
                              alert('ERROR');
                        }
                  } else if ('REMERA RIVER') {
                        alert('REMERA OFICIAL RIVER PLATE: ' + '$' + producto2.precio);
                        finalizar = comoContinuar();
                        if (finalizar == 1) {
                              productos.push(producto2);
                              alert('REMERA OFICIAL BOCA JR Y REMERA OFICIAL RIVER PLATE EN EL CARRITO DE COMPRAS');
                        } else if (finalizar == 2) {
                              alert('PRODUCTO NO AGREGADO');
                        } else {
                              alert('ERROR');
                        }
                  } else if (opcion == 'REMERA RACING') {
                        alert ('YA TIENES ESTE PRODUCTO EN EL CARRITO DE COMPRAS');
                  }
            }
      } else if (finalizar == 2) {
            alert('COMPRA CANCELADA');
      } else {
            alert('ERROR EN LA COMPRA');
      }
}
//PRODUCTO NO ENCONTRADO
else if (opcion != 'REMERA BOCA' && opcion != 'REMERA RIVER' && opcion != 'REMERA RACING') {
      alert('PRODUCTO NO ENCONTRADO, REFRESQUE LA PAGINA');
}
//TOTAL EN EL CARRITO
let total = productos.reduce((acc, el) => acc + el.precio, 0);
alert('CARRITO: ' + '$' + total);
opcion = Number(prompt('INGRESE EL MONTO A PAGAR: $' + total));
while (opcion != total) {
      alert('MONTO INVALIDO');
      alert('INGRESE EL MONTO CORRECTAMENTE')
      opcion = Number(prompt('INGRESE EL MONTO A PAGAR: $' + total));
}
if (opcion == total) {
      alert('GRACIAS POR SU COMPRA!');
}

//FUNCONES
function buscador() {
      return prompt('QUE PRODUCTO BUSCABAS....');
}

function comoContinuar() {
      return Number(prompt('DESEA COMPRAR EL PRODCUTO? 1 (SI) 2 (NO)'))
}

function continuarComprando() {
      return Number(prompt('DESEA CONTINUAR COMPRANDO? 1 (SI) 2 (NO)'));
}