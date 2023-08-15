function toggleContenido(id) {
    var contenido = document.getElementById(id);
    var contenidosOcultos = document.querySelectorAll('.contenido-oculto');

    // Ocultar todos los contenidos ocultos
    contenidosOcultos.forEach(function(element) {
      element.style.display = 'none';
    });

    // Mostrar el contenido correspondiente al div clickeado
    contenido.style.display = (contenido.style.display === 'block') ? 'none' : 'block';
  }