document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.nav-links a');
  const secciones = document.querySelectorAll('.seccion');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('data-section');

      secciones.forEach(sec => {
        sec.classList.remove('visible');
      });

      document.getElementById(targetId).classList.add('visible');
    });
  });
});
