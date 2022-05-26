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

let opcion = buscador().toUpperCase();

if (opcion == producto1.nombre) {
    let ingreso = document.createElement ('div');
    ingreso.innerHTML = `<h3> PRODCUTO: ${producto1.nombre} </h3>
                         <p> ID: ${producto1.id} </p>
                         <p> PRECIO: $${producto1.precio} </p>`;
    document.body.appendChild (ingreso);
} else if (opcion == producto2.nombre) {
    let ingreso = document.createElement ('div');
    ingreso.innerHTML = `<h3> PRODCUTO: ${producto2.nombre} </h3>
                         <p> ID: ${producto2.id} </p>
                         <p> PRECIO: $${producto2.precio} </p>`;
    document.body.appendChild (ingreso);
} else if (opcion == producto3.nombre) {
    let ingreso = document.createElement ('div');
    ingreso.innerHTML = `<h3> PRODCUTO: ${producto3.nombre} </h3>
                         <p> ID: ${producto3.id} </p>
                         <p> PRECIO: $${producto3.precio} </p>`;
    document.body.appendChild (ingreso);
} else {
    let ingreso =  document.createElement ('div');
    ingreso.innerHTML = '<h3> PRODCUTO NO EXISTENTE, REFRESQUE LA PAGINA </h3>';
    document.body.append (ingreso);
}

//FUNCONES
function buscador() {
      return prompt('QUE PRODUCTO BUSCABAS....');
}