const productos = [];
const carrito = [];
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
productos.push(producto1, producto2, producto3);


//BUSCADOR
let buscador1 = document.getElementById('buscador');
buscador1.addEventListener('keyup', () => {
    let input = buscador1.value.toUpperCase ();
    //REMERA BOCA
    if (input == producto1.nombre) {
        productoEncontrado(producto1.nombre, producto1.precio, producto1);
    }
    //REMERA RIVER
    else if (input == producto2.nombre) {
        productoEncontrado(producto2.nombre, producto2.precio, producto2);
    }
    //REMERA RACING
    else if (input == producto3.nombre) {
        productoEncontrado(producto3.nombre, producto3.precio, producto3);
    }
    else {
        document.querySelectorAll('div').forEach(producto => {producto.remove()});
        document.getElementById('agregarCarrito').remove ();
    }
})

//TOTAL EN EL CARRITO
let btnComprar = document.getElementById('comprar');
btnComprar.addEventListener('click', () => {
    let total = carrito.reduce((acc, el) => acc + el.precio, 0);
    let pagar = document.createElement ('div');
    pagar.innerHTML = `<h4> CARRITO: $${total} </h4>
                       <input id="ingresarMonto" type="text" placeholder="Ingrese el monto">
                       <button id="pagar"> PAGAR </button>`;
    document.body.appendChild (pagar);
})

//FUNCIONES
function productoEncontrado(productoNombre, productoPrecio, producto) {
    let ingreso = document.createElement('div');
    ingreso.innerHTML = `<h3> PRODCUTO: ${productoNombre} </h3>
                       <p> PRECIO: $${productoPrecio} </p>`;
    document.body.appendChild(ingreso);
    let almacenadas = 0;
    let boton = document.createElement('button');
    boton.id = 'agregarCarrito';
    boton.innerHTML = 'CARRITO +';
    boton.addEventListener('click', () => {
        carrito.push(producto);
        boton.setAttribute('style', 'background-color: blue');
        btnComprar.innerText = `COMPRAR TOTAL ${almacenadas++ + 1}`;
    })
    document.body.appendChild(boton);
}