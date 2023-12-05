// Selecciona el elemento que quieres animar
const animatedSection = document.getElementById('animated-section');

// Función para manejar la animación
function handleAnimation(entries, observer) {
  entries.forEach(entry => {
    // Si el elemento está en el campo de visión
    if (entry.isIntersecting) {
      // Reinicia la animación eliminando y volviendo a agregar la clase
      animatedSection.classList.remove('animated');
      setTimeout(() => {
        animatedSection.classList.add('animated');
      }, 0);
    }
  });
}

// Crea una instancia de IntersectionObserver y configúrala
const observer = new IntersectionObserver(handleAnimation, {
  threshold: 0.5, // ajusta según tus necesidades
});

// Observa el elemento
observer.observe(animatedSection);
