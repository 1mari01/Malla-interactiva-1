const malla = [
  {
    ciclo: "I Ciclo (22 créditos)",
    cursos: [
      { nombre: "Biología", requisito: "Sin requisito" },
      { nombre: "Química General", requisito: "Sin requisito" },
      { nombre: "Matemática General", requisito: "Sin requisito" },
      { nombre: "Desempeño Universitario", requisito: "Sin requisito" },
      { nombre: "Introducción a la Farmacia y Bioquímica", requisito: "Sin requisito" },
      { nombre: "Lengua y Comunicación", requisito: "Sin requisito" }
    ]
  },
  {
    ciclo: "II Ciclo (22 créditos)",
    cursos: [
      { nombre: "Educación Ambiental", requisito: "Sin requisito" },
      { nombre: "Introducción a la Investigación", requisito: "Introducción a la Farmacia y Bioquímica / Lengua y Comunicación" },
      { nombre: "Física", requisito: "Matemática General" },
      { nombre: "Realidad Nacional", requisito: "Lengua y Comunicación / Desempeño Universitario" },
      { nombre: "Técnicas Instrumentales de Laboratorio Químico", requisito: "Introducción a la Farmacia y Bioquímica / Química General" },
      { nombre: "Química Inorgánica", requisito: "Introducción a la Farmacia y Bioquímica / Química General" },
      { nombre: "Inglés", requisito: "Sin requisito" },
      { nombre: "Ética y Deontología Farmacéutica", requisito: "Introducción a la Farmacia y Bioquímica / Lengua y Comunicación" }
    ]
  },
  {
    ciclo: "III Ciclo (18 créditos)",
    cursos: [
      { nombre: "Bioestadística", requisito: "Matemática General / Ética y Deontología Farmacéutica" },
      { nombre: "Bioquímica I", requisito: "Biología / Química Inorgánica" },
      { nombre: "Química Orgánica I", requisito: "Química Inorgánica / Técnicas Instrumentales de Laboratorio Químico" },
      { nombre: "Anatomía General", requisito: "Biología / Introducción a la Farmacia y Bioquímica" },
      { nombre: "Botánica Farmacéutica", requisito: "Química Inorgánica / Técnicas Instrumentales de Laboratorio Químico" }
    ]
  },
  // --- Continuar con los ciclos 4, 5, 6, 7, 8, 9 y 10
];

const contenedor = document.getElementById('malla');

malla.forEach(c => {
  const cicloDiv = document.createElement('div');
  cicloDiv.classList.add('ciclo');
  cicloDiv.innerHTML = `<h2>${c.ciclo}</h2>`;

  c.cursos.forEach(curso => {
    const cursoDiv = document.createElement('div');
    cursoDiv.classList.add('curso');
    cursoDiv.innerHTML = `
      ${curso.nombre}
      <div class="info">Requisito: ${curso.requisito}</div>
    `;
    cursoDiv.onclick = () => {
      const info = cursoDiv.querySelector('.info');
      info.style.display = info.style.display === 'block' ? 'none' : 'block';
    };
    cicloDiv.appendChild(cursoDiv);
  });

  contenedor.appendChild(cicloDiv);
});
