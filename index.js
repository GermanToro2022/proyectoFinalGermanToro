import { mostrarProductos } from "./App.js";
import { pintarCarrito } from "./src/accionesCarrito.js";
import { actualizarTotalesCarrito } from "./src/actualizarCarrito.js";
import { obtenerCarritoStorage } from "./src/storage.js";


// Cuando se carga el DOM se cargan los productos 
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();

// Si la key esta en el storage se llena de productos el carrito     
    if (localStorage.getItem('carrito')) {
        const carrito = obtenerCarritoStorage();
        pintarCarrito(carrito);
        actualizarTotalesCarrito(carrito);
    };
});