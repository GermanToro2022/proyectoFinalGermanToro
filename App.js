import { validarProductoRepetido } from "./src/accionesCarrito.js";
import { obtenerProductos } from "./src/obtenerProductos.js";


// Ingresamos al DOM mediante su ID de los productos y asincronizamos
const mostrarProductos = async () => {
  const contenedorProductos = document.getElementById("producto-contenedor");

  const productos = await obtenerProductos();
   
//  Recorre cada elemento con el bucle forEach, creamos un div llamada card con su img, nombre del producto y precio    
   
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>${producto.desc}</p>
                          <p>${producto.precio}</p>
                      </div>
                     `
    contenedorProductos.appendChild(div);


    // Ingresamos al DOM mediante su ID y se crea un evento para escuchar al usuario agregando el/los productos al carrito
    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      validarProductoRepetido(producto.id);
      Toastify({
        text: "Producto añadido",
        duration: "3000"
      }).showToast();
    })
  });
};

export { mostrarProductos };