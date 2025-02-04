document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const languageSwitcher = document.querySelectorAll('.flag');
    const currentFlag = document.querySelector('.language-switcher > img');  // Bandera actual en el botón
    const dropdown = document.querySelector('.dropdown');                   // Menú desplegable de idiomas
    const languageSwitcherContainer = document.querySelector('.language-switcher'); // Contenedor de la bandera principal

    const translations = {
        es: {
            home: "Inicio",
            about: "Sobre Mí",
            projects: "Proyectos",
            contact: "Contacto",
            welcome: "¡Bienvenido 👋, soy",
            dynamicPhrases: [
                "Desarrollador de Software",
                "Apasionado por la Ciberseguridad",
                "Ingeniero de Software en Formación",
                "Construyendo Proyectos Innovadores"
            ],
            aboutMeText: "Soy estudiante de Ingeniería de Software en la Universidad de Oviedo, con interés en ciberseguridad, desarrollo de aplicaciones y proyectos de software innovadores.",
            projectsText: "Aquí irán los proyectos más importantes en los que he trabajado.",
            contactText: "¿Quieres ponerte en contacto conmigo? Aquí tienes mis datos."
        },
        en: {
            home: "Home",
            about: "About Me",
            projects: "Projects",
            contact: "Contact",
            welcome: "Welcome 👋, I am",
            dynamicPhrases: [
                "Software Developer",
                "Passionate About Cybersecurity",
                "Software Engineering Student",
                "Building Innovative Projects"
            ],
            aboutMeText: "I am a Software Engineering student at the University of Oviedo, interested in cybersecurity, app development, and innovative software projects.",
            projectsText: "Here are the most important projects I've worked on.",
            contactText: "Want to get in touch with me? Here are my details."
        }
    };

    let currentLanguage = 'es';
    let phraseIndex = 0;

    function changeText() {
        dynamicText.style.opacity = 0;
        setTimeout(() => {
            const phrases = translations[currentLanguage].dynamicPhrases;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            dynamicText.textContent = phrases[phraseIndex];
            dynamicText.style.opacity = 1;
        }, 500);
    }

    setInterval(changeText, 3000);

    // Función para cambiar el idioma y cerrar el menú desplegable
    function switchLanguage(selectedLang, selectedFlag) {
        if (currentLanguage !== selectedLang) {
            currentLanguage = selectedLang;

            // Actualizar los textos del menú de navegación
            document.querySelectorAll('.nav-links a').forEach(link => {
                const key = link.dataset.key;
                link.textContent = translations[currentLanguage][key];
            });

            // Cambiar textos estáticos
            document.querySelector('.static-text').textContent = translations[currentLanguage].welcome;
            document.getElementById('sobre-mi').querySelector('p').textContent = translations[currentLanguage].aboutMeText;
            document.getElementById('proyectos').querySelector('p').textContent = translations[currentLanguage].projectsText;
            document.getElementById('contacto').querySelector('p').textContent = translations[currentLanguage].contactText;

            // Reiniciar el texto dinámico
            phraseIndex = 0;
            dynamicText.textContent = translations[currentLanguage].dynamicPhrases[phraseIndex];

            // Cambiar la bandera del botón principal
            currentFlag.src = selectedFlag.src;
        }

        // Cerrar el menú desplegable después de hacer clic
        dropdown.style.display = 'none';
    }

    // Evento para cada bandera en el desplegable
    languageSwitcher.forEach(flag => {
        flag.addEventListener('click', (e) => {
            const selectedLang = e.target.dataset.lang;
            switchLanguage(selectedLang, e.target);
        });
    });

    // Mostrar el menú desplegable al pasar el cursor por la bandera principal
    languageSwitcherContainer.addEventListener('mouseenter', () => {
        dropdown.style.display = 'flex';
    });

    // Ocultar el menú cuando el cursor salga del área del menú desplegable
    languageSwitcherContainer.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });
});

document.getElementById('download-cv').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text("Currículum Vitae", 20, 20);

    doc.setFontSize(14);
    doc.text("Nombre: Alberto Ramírez Farfán", 20, 40);
    doc.text("Correo: alberto@example.com", 20, 50);
    doc.text("Teléfono: +34 123 456 789", 20, 60);
    doc.text("Experiencia:", 20, 80);
    doc.text("- Desarrollador de Software en proyectos web.", 30, 90);
    doc.text("- Estudiante de Ingeniería de Software en la Universidad de Oviedo.", 30, 100);

    doc.save('holamundo.pdf');
});
