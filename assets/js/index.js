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

  // Configuração global do ScrollReveal com reset desabilitado
  const sr = ScrollReveal({
    reset: false,        // Desabilita o reset
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

const apiUrl = `https://www.alura.com.br/api/dashboard/e5f088528111a094993d30275832d215e7b63eb80bdd73c61360b0db5d8e0cbf`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const dashboardContent = document.getElementById('dashboard-content');
    if (data.courseProgresses && data.courseProgresses.length > 0) {
      data.courseProgresses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
          <h3>${course.name}</h3>
          <p>Progresso: ${course.progress}%</p>
        `;
        dashboardContent.appendChild(courseItem);
      });
    } else {
      dashboardContent.innerHTML = '<p>Nenhum curso encontrado.</p>';
    }
  })
  .catch(error => {
    console.error('Erro ao buscar os dados da API Alura:', error);
    const dashboardContent = document.getElementById('dashboard-content');
    dashboardContent.innerHTML = '<p>Não foi possível carregar os dados do dashboard.</p>';
});