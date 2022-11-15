import { eliminarProductoCarrito, pintarCarrito } from "./accionesCarrito.js";



// Creamos variables e ingresamos al DOM mediante sus ID correspondientes
const modalContenedor = document.querySelector('.modal-contenedor');
const abrirCarrito = document.getElementById('cesta-carrito');
const cerrarCarrito = document.getElementById('btn-cerrar-carrito');
const modalCarrito = document.querySelector('.modal-carrito');
const botonVaciar = document.getElementById('vaciar-carrito');
const botonComprar = document.getElementById('boton-comprar');



// Le agregamos eventos a las variables para que los botones cumplan con sus respectivos funciones

abrirCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')

});

cerrarCarrito.addEventListener('click', () => {
    modalContenedor.classList.toggle('modal-active')
});

modalContenedor.addEventListener('click', () => {
    cerrarCarrito.click()
});




modalCarrito.addEventListener('click', (e) => {
    e.stopPropagation();

    if (e.target.classList.contains('boton-eliminar')) {
        eliminarProductoCarrito(e.target.value)
    };
});





botonVaciar.addEventListener('click', () => {
    Swal.fire({
        title: 'Estas seguro de vaciar el carrito?',
        text: "No se podra revertir esta acción!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#008F39',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, estoy seguro/a!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Pedidos eliminados!',
                'Su carrito ha sido removido con éxito.',
                'success',
                localStorage.removeItem('carrito'),
                setTimeout(() =>{
                    location.reload(true);
                }, 2000),
            )
        }
    })
});

botonComprar.addEventListener('click', () => {
    Swal.fire(
        'Compra realizada con éxito!',
        'Has realizado la compra exitosamente!',
        'success',
        localStorage.removeItem('carrito'),
        setTimeout(() =>{
            location.reload(true);
        }, 2500),
      )
});










