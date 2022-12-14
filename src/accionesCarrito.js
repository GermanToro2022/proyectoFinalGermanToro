import { actualizarTotalesCarrito } from './actualizarCarrito.js';
import { obtenerProductos } from './obtenerProductos.js';
import { obtenerCarritoStorage } from './storage.js';



// Creamos una variable con el array vacio
let carrito = [];


const validarProductoRepetido = (productoId) => {

    if (localStorage.getItem('carrito')) {
        carrito = obtenerCarritoStorage();
    }

    const productoRepetido = carrito.find(producto => producto.id === productoId);

    if (productoRepetido) {
        productoRepetido.cantidad++;
        const cantidadProducto = document.getElementById(`cantidad${productoRepetido.id}`);
        cantidadProducto.innerText = `cantidad: ${productoRepetido.cantidad}`;
        actualizarTotalesCarrito(carrito);
    } else {
        agregarAlCarrito(productoId);
    }
};

const agregarAlCarrito = async (productoId) => {
    const productos = await obtenerProductos();
    const contenedor = document.getElementById('carrito-contenedor');
    const producto = productos.find(producto => producto.id === productoId);
    carrito.push(producto);



    const div = document.createElement('div');
    div.classList.add('productoEnCarrito');
    div.innerHTML = `<p>${producto.nombre}</p>
                    <p>Precio: ${producto.precio}</p>
                    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                    <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                    `;
    contenedor.appendChild(div);
    actualizarTotalesCarrito(carrito);
};

// pintarCarrito recibe por parámetro un array de objetos
const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor');

    contenedor.innerHTML = '';

    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('productoEnCarrito');
        div.innerHTML = `<p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
                        <button id=eliminar${producto.id} value='${producto.id}' class='btn waves-effect waves-ligth boton-eliminar'>X</button>
                        `;
        contenedor.appendChild(div);
    });
};

const eliminarProductoCarrito = (productoId) => {
    const carritoStorage = obtenerCarritoStorage();
    const carritoActualizado = carritoStorage.filter(producto => producto.id != productoId);
    Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Producto eliminado con éxito',
        showConfirmButton: false,
        timer: 1500
    });



    actualizarTotalesCarrito(carritoActualizado);
    pintarCarrito(carritoActualizado);
};

export { agregarAlCarrito, validarProductoRepetido, pintarCarrito, eliminarProductoCarrito };