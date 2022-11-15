import { guardarCarritoStorage } from "./storage.js";

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    const totalCompra = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);

    pintarTotalesCarrito(totalCantidad, totalCompra);
    guardarCarritoStorage(carrito);
};

// Le damos la utilizad a los botones 'vaciar carrito' y 'comprar' 
const pintarTotalesCarrito = (totalCantidad, totalCompra) => {
    const contadorCarrito = document.getElementById('contador-carrito');
    const precioTotal = document.getElementById('precioTotal');
    const botonVaciar = document.getElementById('vaciar-carrito');
    const botonComprar = document.getElementById('boton-comprar');




    if (totalCompra <= 0) {
        precioTotal.innerText = 'Tu carrito de compras esta vacio';
        botonVaciar.classList.remove('btnShow');
        botonComprar.classList.remove('btnShow');
    } else {
        contadorCarrito.innerText = totalCantidad;
        precioTotal.innerText = 'Total: $' + totalCompra;
        botonVaciar.classList.add('btnShow');
        botonComprar.classList.add('btnShow');
    }

};




export { actualizarTotalesCarrito };