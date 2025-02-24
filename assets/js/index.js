document.addEventListener("DOMContentLoaded", function() {
  // Inicializa o particlesJS
  particlesJS('particles-js', {
    particles: {
      number: { value: 100 },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: 2 },
      move: { speed: 1 }
    }
  });

  // Configuração global do ScrollReveal com reset habilitado
  const sr = ScrollReveal({
    reset: true,        
    distance: '50px',     
    duration: 1000,       
    easing: 'ease-out',   
    origin: 'bottom',     
    viewFactor: 0.2       
  });

  sr.reveal('.inicioTitulo', { delay: 200 });
  sr.reveal('.inicioSubtitulo', { delay: 400 });
  sr.reveal('#curriculoBtn', { delay: 600 });
  sr.reveal('.sobreMim', { delay: 800 });
  sr.reveal('.habilidades', { delay: 1000 });
  sr.reveal('.projetos', { delay: 1200 });
  sr.reveal('.contato', { delay: 1400 });
});
