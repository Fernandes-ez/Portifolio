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

// ScrollReveal configuration
ScrollReveal().reveal('.inicioTitulo', { delay: 200 });
ScrollReveal().reveal('.inicioSubtitulo', { delay: 400 });
ScrollReveal().reveal('#curriculoBtn', { delay: 600 });
ScrollReveal().reveal('.sobreMim', { delay: 800 });
ScrollReveal().reveal('.habilidades', { delay: 1000 });
ScrollReveal().reveal('.projetos', { delay: 1200 });
ScrollReveal().reveal('.contato', { delay: 1400 });