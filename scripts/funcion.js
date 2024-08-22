function generarTarjetasDeProductos() {
    const contenedorProductos = document.getElementById('productos-contenedor');

    productos.forEach(producto => {
        const cardHTML = `
            <div class="col-md-4 ">
                <div class="card mb-4 box-shadow card  mx-auto cardShop ">
                    <img class="card-img-top" src="${producto.imagen}" alt="${producto.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text descriptionProcducto">${producto.descripcion}</p>
                        <p> Talla: ${producto.talla} </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn cartBtn" data-producto="${producto.nombre}" data-precio="${producto.precio}">
                                ${producto.botonTexto}
                            </button>
                            <small class="text-muted precioProducto ">$${producto.precio}</small>
                        </div>
                    </div>
                </div>
            </div>
        `;

        contenedorProductos.innerHTML += cardHTML;
    });

    document.querySelectorAll('.cartBtn').forEach(button => {
        button.addEventListener('click', function() {
            const producto = this.getAttribute('data-producto');
            const precio = this.getAttribute('data-precio');

            Swal.fire({
                title: '¿Quieres información de este producto?',
                text: `Producto: ${producto} \nPrecio: $${precio}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Contactar',
                cancelButtonText: 'Volver',
                confirmButtonColor: '#111',
                cancelButtonColor: 'gray',



            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = `https://wa.me/584126581304?text=Quiero%20este%20producto:%20${producto}`;
                }
            });
        });
    });
}

// Llama a la función para generar las tarjetas de productos
generarTarjetasDeProductos();

