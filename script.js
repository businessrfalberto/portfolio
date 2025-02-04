document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const languageSwitcher = document.querySelectorAll('.flag');
    const currentFlag = document.querySelector('.language-switcher > img');  // Bandera actual en el botón
    const dropdown = document.querySelector('.dropdown');                   // Menú desplegable de idiomas
    const languageSwitcherContainer = document.querySelector('.language-switcher'); // Contenedor de la bandera principal

    const translations = {
        'es': {
            'inicio': 'Inicio',
            'experience': 'Experiencia',
            'about': 'Sobre Mí',
            'projects': 'Proyectos',
            'contact': 'Contacto',
            'welcome': 'Bienvenido 👋, soy',
            'aboutMeText': 'Contenido sobre mí...',
            'projectsText': 'Contenido de proyectos...',
            'contactText': 'Contenido de contacto...',
            'experienceText': 'Contenido de experiencia...',
            'dynamicPhrases': ['Desarrollador de Software', 'Apasionado por la Ciberseguridad']
        },
        'en': {
            'inicio': 'Home',
            'experience': 'Experience',
            'about': 'About Me',
            'projects': 'Projects',
            'contact': 'Contact',
            'welcome': 'Welcome 👋, I am',
            'aboutMeText': 'About me content...',
            'projectsText': 'Projects content...',
            'contactText': 'Contact content...',
            'experienceText': 'Experience content...',
            'dynamicPhrases': ['Software Developer', 'Passionate about Cybersecurity']
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
        currentLanguage = selectedLang;

        // Cambiar textos de los enlaces de navegación
        document.querySelectorAll('.nav-links a').forEach(link => {
            const key = link.dataset.key;
            if (translations[currentLanguage][key]) {
                link.textContent = translations[currentLanguage][key];
            }
        });

        // Traducir todos los elementos que tengan data-key
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;
            if (translations[currentLanguage][key]) {
                console.log(`Cambiando ${key} a: ${translations[currentLanguage][key]}`);
                element.textContent = translations[currentLanguage][key];
            }
        });

        // Traducir el texto de bienvenida (¡Bienvenido 👋, soy)
        const staticText = document.querySelector('.static-text');
        if (staticText && translations[currentLanguage]['welcome']) {
            staticText.textContent = translations[currentLanguage]['welcome'];
        }

        // Reiniciar el texto dinámico
        phraseIndex = 0;
        dynamicText.textContent = translations[currentLanguage].dynamicPhrases[phraseIndex];

        // Cambiar la bandera del botón principal
        currentFlag.src = selectedFlag.src;

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

