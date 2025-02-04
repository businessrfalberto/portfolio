document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const languageSwitcher = document.querySelectorAll('.flag');
    const currentFlag = document.querySelector('.language-switcher > img');
    const dropdown = document.querySelector('.dropdown');
    const languageSwitcherContainer = document.querySelector('.language-switcher');

    const translations = {
        es: {
            home: "Inicio",
            about: "Sobre Mí",
            projects: "Proyectos",
            contact: "Contacto",
            welcome: "¡Bienvenido 👋, soy",
            sectionTitles: {
                about: "Sobre Mí",
                projects: "Proyectos Destacados",
                contact: "Contacto"
            },
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
            sectionTitles: {
                about: "About Me",
                projects: "Highlighted Projects",
                contact: "Contact"
            },
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

    function switchLanguage(selectedLang, selectedFlag) {
        if (currentLanguage !== selectedLang) {
            currentLanguage = selectedLang;

            document.querySelectorAll('.nav-links a').forEach(link => {
                const key = link.dataset.key;
                link.textContent = translations[currentLanguage][key];
            });

            document.querySelector('.static-text').textContent = translations[currentLanguage].welcome;
            document.getElementById('sobre-mi').querySelector('p').textContent = translations[currentLanguage].aboutMeText;
            document.getElementById('proyectos').querySelector('p').textContent = translations[currentLanguage].projectsText;
            document.getElementById('contacto').querySelector('p').textContent = translations[currentLanguage].contactText;

            document.querySelector('#sobre-mi h2').textContent = translations[currentLanguage].sectionTitles.about;
            document.querySelector('#proyectos h2').textContent = translations[currentLanguage].sectionTitles.projects;
            document.querySelector('#contacto h2').textContent = translations[currentLanguage].sectionTitles.contact;

            phraseIndex = 0;
            dynamicText.textContent = translations[currentLanguage].dynamicPhrases[phraseIndex];

            currentFlag.src = selectedFlag.src;
        }

        dropdown.style.display = 'none';
    }

    languageSwitcher.forEach(flag => {
        flag.addEventListener('click', (e) => {
            const selectedLang = e.target.dataset.lang;
            switchLanguage(selectedLang, e.target);
        });
    });

    // Mostrar el menú desplegable al hacer clic en la bandera principal
    languageSwitcherContainer.addEventListener('click', (e) => {
        e.stopPropagation(); // Evitar que el clic se propague al documento
        dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
    });

    // Ocultar el menú desplegable al hacer clic fuera de él
    document.addEventListener('click', () => {
        dropdown.style.display = 'none';
    });

    // Evitar que el menú desplegable se cierre al hacer clic dentro de él
    dropdown.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});