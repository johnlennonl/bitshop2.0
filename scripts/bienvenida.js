// Función para mostrar el mensaje de bienvenida
function mostrarMensajeBienvenida() {
    Swal.fire({
      title: '¡Bienvenidos!',
      imageUrl: 'https://github.com/johnlennonl/BitshopVE/blob/main/img/bitshop%20(8).png?raw=true', // Reemplaza con la ruta completa a tu imagen
      imageWidth: 170, // Ajusta el ancho de la imagen según sea necesario
      imageHeight: 170, // Ajusta la altura de la imagen según sea necesario
      imageAlt: 'Imagen del producto',
      text: '¡Estás en el lugar correcto! En Bitshop Venezuela encontrarás prendas de calidad y diseño para cualquier ocasión. ¡Renueva tu armario hoy mismo!',
      
      confirmButtonText: '¡Empezar a explorar!',
      confirmButtonColor: '#111',
      textColor: '#111',
      textFontSize: '16px',
      textFontFamily: 'Poppins',
    });
  
    // Almacenar en localStorage para no mostrar el mensaje nuevamente
    localStorage.setItem('mensajeBienvenidaMostrado', 'true');
  }
  
  // Verificar si el mensaje ya se mostró
  if (!localStorage.getItem('mensajeBienvenidaMostrado')) {
    mostrarMensajeBienvenida();
  }