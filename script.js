document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = document.getElementById('dynamic-text');
    const languageSwitcher = document.querySelectorAll('.flag');
    const currentFlag = document.querySelector('.language-switcher > img');
    const dropdown = document.querySelector('.dropdown');
    const languageSwitcherContainer = document.querySelector('.language-switcher');

    const translations = {
        'es': {
            'home': 'Inicio',
            'experience': 'Experiencia',
            'about': 'Sobre Mí',
            'projects': 'Proyectos y Habilidades',
            'contact': 'Contacto',
            'welcome': 'Bienvenido 👋, soy',
            'projectsText': 'Contenido de proyectos...',
            'contactText': 'Contenido de contacto...',
            'experienceText': 'Contenido de experiencia...',
            'dynamicPhrases': ['Desarrollador de Software', 'Apasionado por la Ciberseguridad'],
            'footerCopyright': '© 2025 Alberto Ramírez Farfán. Todos los derechos reservados.',

            // Nuevas traducciones para el formulario de contacto
            'namePlaceholder': '  Nombre Completo',
            'emailPlaceholder': '  Email',
            'subjectPlaceholder': '  Asunto',
            'messagePlaceholder': ' Mensaje',
            'sendButton': 'Enviar',

            // Mensajes de error en Español
            'nameError': 'Por favor, introduzca su nombre completo.',
            'emailError': 'Por favor, introduzca un email válido.',
            'subjectError': 'Por favor, introduzca un asunto.',
            'messageError': 'Por favor, escriba su mensaje.',

            'aboutMeText': `
                <p>Hola, soy <strong>Alberto Ramírez Farfán</strong>.</p>
                <p>Apasionado por el <em>desarrollo de software</em>, el <em>desarrollo web</em> y la <em>ciberseguridad</em>.</p>
                <p>Actualmente estudio <strong>Ingeniería de Software</strong> en la Universidad de Oviedo.</p>
                <p>Hablo <strong>español nativo, inglés C1 y francés B1</strong>.
            `,
            'experience1': `
                <h3>09/2021 - 09/2024 <br> Universidad de Oviedo</h3>
                <p>Comencé mis estudios en Ingeniería de Software, desarrollando habilidades en programación,
                bases de datos y ciberseguridad.</p>
            `,
            'experience2': `
                <h3>09/2024 - 09/2025 <br> Vilnius Business College, Lituania</h3>
                <p>Durante un año completo estuve estudiando en Vilna, Lituania. Esto me ayudó a mejorar considerablemente
                mi nivel de inglés y a entender una cultura diferente así como enfocar el desarrollo software a los negocios.</p>
            `,
            // 'experience3': `
            //     <h3>09/2025 - 06/2027 <br> Universidad de Oviedo</h3>
            //     <p>En estos últimos años de universidad terminé de consalidar mis habilidades en desarrollo software, ciberseguridad, arquitecturas... De igual forma,
            //     entendí más profundamente la legislación con respecto a la informática y el seguimiento de patrones adecuados</p>
            // `,
            'project1': `
                <h3>Aplicación Reserva de hoteles con Java y plug-in Window Builder</h3>
                    <p>Este proyecto fue creado usando el entorno eclipse y usando el plug-in window builder. Se diseña el backend, el service y el frontend.
                        Todas las ventanas son redimensionables usando los layouts adecuados. De igual forma, se guardan en archivos locales los datos de los usuarios, reservas y otros.
                    </p>
            `,
            'project2': `
                <h3>Filtro de colores con C++ desde una máquina virtual Linux</h3>
                    <p>A través de un programa creado en una máquina virtual linux, al pasarle una imagen como parámetro podría aplicar diferentes filtros: sepia, blanco y negro...
                    </p>
            `,
            'project3': `
                <h3>Diseño del portfolio con HTML, CSS y JavaScript</h3>
                    <p>Este portfolio fue creado usando estos 3 lenguajes, cada uno cumpliendo un rol correspondiente: estructura, estilo y manejo de eventos.
                    </p>
            `
        },
        'en': {
            'home': 'Home',
            'experience': 'Experience',
            'about': 'About Me',
            'projects': 'Projects and Skills',
            'contact': 'Contact',
            'welcome': 'Welcome 👋, I am',
            'projectsText': 'Projects content...',
            'contactText': 'Contact content...',
            'experienceText': 'Experience content...',
            'dynamicPhrases': ['Software Developer', 'Passionate about Cybersecurity'],
            'footerCopyright': '© 2025 Alberto Ramírez Farfán. All rights reserved.',

            // New translations for the contact form
            'namePlaceholder': '  Full Name',
            'emailPlaceholder': '  Email',
            'subjectPlaceholder': '  Subject',
            'messagePlaceholder': '  Message',
            'sendButton': 'Send',

            // Error messages in English
            'nameError': 'Please enter your full name.',
            'emailError': 'Please enter a valid email address.',
            'subjectError': 'Please enter a subject.',
            'messageError': 'Please write your message.',

            'aboutMeText': `
        <p>Hi, I'm <strong>Alberto Ramírez Farfán</strong>.</p>
        <p>Passionate about <em>software development</em>, <em>web development</em>, and <em>cybersecurity</em>.</p>
        <p>Currently studying <strong>Software Engineering</strong> at the University of Oviedo.</p>
        <p>I speak <strong>native Spanish, C1 English, and B1 French</strong>.</p>
    `,
            'experience1': `
        <h3>09/2021 - 09/2024 <br> University of Oviedo</h3>
        <p>I began my studies in Software Engineering, developing skills in programming,
        databases, and cybersecurity.</p>
    `,
            'experience2': `
        <h3>09/2024 - 09/2025 <br> Vilnius Business College, Lithuania</h3>
        <p>During a full year, I studied in Vilnius, Lithuania. This helped me significantly improve
        my English skills, understand a different culture, and approach software development from a business perspective.</p>
    `,
            // Uncomment when you want to display this experience
            // 'experience3': `
            //     <h3>09/2025 - 06/2027 <br> University of Oviedo</h3>
            //     <p>In these final years of university, I consolidated my skills in software development, cybersecurity, and system architectures.
            //     I also gained a deeper understanding of IT legislation and the importance of following proper design patterns.</p>
            // `,

            'project1': `
        <h3>Hotel Reservation Application using Java and Window Builder Plugin</h3>
        <p>This project was created using the Eclipse environment and the Window Builder plugin. 
        The backend, service layer, and frontend were all designed. All windows are resizable 
        using appropriate layouts. Additionally, user data, reservations, and other information are 
        stored in local files.</p>
    `,
            'project2': `
        <h3>Color Filter with C++ on a Linux Virtual Machine</h3>
        <p>This project involved creating a program on a Linux virtual machine that applies different filters to an image 
        passed as a parameter. Available filters include sepia, black and white, among others.</p>
    `,
            'project3': `
        <h3>Portfolio Design with HTML, CSS, and JavaScript</h3>
        <p>This portfolio was created using these three languages, each serving its role: structure, styling, and event handling.</p>
    `
        },
        'fr': {
            'home': 'Accueil',
            'experience': 'Expérience',
            'about': 'Sur Moi',
            'projects': 'Projets et Compétences',
            'contact': 'Contact',
            'welcome': 'Bienvenue 👋, je suis',
            'projectsText': 'Contenu des projets...',
            'contactText': 'Contenu du contact...',
            'experienceText': 'Contenu de l’expérience...',
            'dynamicPhrases': ['Développeur de Logiciels', 'Passionné par la Cybersécurité'],
            'footerCopyright': '© 2025 Alberto Ramírez Farfán. Tous droits réservés.',

            // Nouvelles traductions pour le formulaire de contact
            'namePlaceholder': '  Nom Complet',
            'emailPlaceholder': '  Email',
            'subjectPlaceholder': '  Sujet',
            'messagePlaceholder': ' Message',
            'sendButton': 'Envoyer',

            // Messages d'erreur en français
            'nameError': 'Veuillez entrer votre nom complet.',
            'emailError': 'Veuillez entrer une adresse email valide.',
            'subjectError': 'Veuillez entrer un sujet.',
            'messageError': 'Veuillez écrire votre message.',

            'aboutMeText': `
        <p>Bonjour, je suis <strong>Alberto Ramírez Farfán</strong>.</p>
        <p>Passionné par le <em>développement de logiciels</em>, le <em>développement web</em> et la <em>cybersécurité</em>.</p>
        <p>Je suis actuellement des études en <strong>Génie Logiciel</strong> à l'Université d'Oviedo.</p>
        <p>Je parle <strong>espagnol natif, anglais C1 et français B1</strong>.</p>
    `,
            'experience1': `
        <h3>09/2021 - 09/2024 <br> Université d'Oviedo</h3>
        <p>J'ai commencé mes études en Génie Logiciel, développant des compétences en programmation,
        bases de données et cybersécurité.</p>
    `,
            'experience2': `
        <h3>09/2024 - 09/2025 <br> Vilnius Business College, Lituanie</h3>
        <p>Pendant une année complète, j'ai étudié à Vilnius, en Lituanie. Cela m'a beaucoup aidé à améliorer
        mon niveau d'anglais, à comprendre une culture différente et à orienter le développement logiciel vers les affaires.</p>
    `,
            // 'experience3': `
            //     <h3>09/2025 - 06/2027 <br> Université d'Oviedo</h3>
            //     <p>Au cours de ces dernières années d'université, j'ai consolidé mes compétences en développement logiciel, cybersécurité et architectures systèmes.
            //     J'ai également acquis une compréhension plus approfondie de la législation informatique et de l'importance de suivre des modèles de conception appropriés.</p>
            // `,

            'project1': `
        <h3>Application de Réservation d'Hôtels utilisant Java et le Plugin Window Builder</h3>
        <p>Ce projet a été créé en utilisant l'environnement Eclipse et le plugin Window Builder.
        Le backend, la couche de service et le frontend ont été conçus. Toutes les fenêtres sont redimensionnables 
        en utilisant des dispositions appropriées. De plus, les données des utilisateurs, des réservations et d'autres informations sont 
        stockées dans des fichiers locaux.</p>
    `,
            'project2': `
        <h3>Filtre de Couleurs avec C++ sur une Machine Virtuelle Linux</h3>
        <p>Ce projet consistait à créer un programme sur une machine virtuelle Linux qui applique différents filtres à une image 
        passée en paramètre. Les filtres disponibles incluent sépia, noir et blanc, entre autres.</p>
    `,
            'project3': `
        <h3>Conception du Portfolio avec HTML, CSS et JavaScript</h3>
        <p>Ce portfolio a été créé en utilisant ces trois langages, chacun jouant son rôle : structure, style et gestion des événements.</p>
    `
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
        currentLanguage = selectedLang;

        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.dataset.key;

            if (translations[currentLanguage][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[currentLanguage][key];
                } else if (element.tagName === 'BUTTON') {
                    element.textContent = translations[currentLanguage][key];
                } else {
                    element.innerHTML = translations[currentLanguage][key];
                }
            }
        });

        // Actualiza el enlace del currículum según el idioma
        const cvLink = document.getElementById('cv-link');
        if (currentLanguage === 'es') {
            cvLink.href = 'assets/docs/CV_es.pdf';
            cvLink.download = 'Curriculum_Alberto_Ramirez_Farfan_ES.pdf';
        } else if (currentLanguage === 'en') {
            cvLink.href = 'assets/docs/CV_en.pdf';
            cvLink.download = 'Curriculum_Alberto_Ramirez_Farfan_EN.pdf';
        } else if (currentLanguage === 'fr') {
            cvLink.href = 'assets/docs/CV_fr.pdf';
            cvLink.download = 'Curriculum_Alberto_Ramirez_Farfan_FR.pdf';
        }

        // Actualizar el texto estático de bienvenida
        const staticText = document.querySelector('.static-text');
        if (staticText && translations[currentLanguage]['welcome']) {
            staticText.textContent = translations[currentLanguage]['welcome'];
        }

        // Reiniciar el texto dinámico
        phraseIndex = 0;
        dynamicText.textContent = translations[currentLanguage].dynamicPhrases[phraseIndex];

        // Cambiar la bandera activa
        currentFlag.src = selectedFlag.src;

        // Ocultar el menú desplegable después de seleccionar el idioma
        dropdown.style.display = 'none';
    }


    languageSwitcher.forEach(flag => {
        flag.addEventListener('click', (e) => {
            const selectedLang = e.target.dataset.lang;
            switchLanguage(selectedLang, e.target);
        });
    });

    languageSwitcherContainer.addEventListener('mouseenter', () => {
        dropdown.style.display = 'flex';
    });

    languageSwitcherContainer.addEventListener('mouseleave', () => {
        dropdown.style.display = 'none';
    });

    switchLanguage('es', document.querySelector('.flag[data-lang="es"]'));

    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll('.carousel-images img');
        const prevBtn = carousel.querySelector('.prev-btn');
        const nextBtn = carousel.querySelector('.next-btn');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach(img => img.classList.remove('active'));
            images[index].classList.add('active');
        }

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
            showImage(currentIndex);
        });

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
            showImage(currentIndex);
        });

        showImage(currentIndex);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Inicializar EmailJS con tu User ID
    emailjs.init("GseYnAW_Ye8pgXr-Q");

    const form = document.getElementById('contactForm');
    const languageSwitcher = document.querySelector('.language-switcher');
    let currentLanguage = 'es';  // Idioma predeterminado

    // Diccionario de mensajes para cada idioma
    const messages = {
        es: {
            nameError: "Por favor, introduce tu nombre completo.",
            emailError: "Por favor, introduce un correo electrónico válido.",
            subjectError: "Por favor, introduce el asunto.",
            messageError: "Por favor, escribe un mensaje.",
            successMessage: "¡Mensaje enviado correctamente!"
        },
        en: {
            nameError: "Please enter your full name.",
            emailError: "Please enter a valid email address.",
            subjectError: "Please enter the subject.",
            messageError: "Please write a message.",
            successMessage: "Message sent successfully!"
        }
    };

    // Cambiar idioma al seleccionar una bandera
    languageSwitcher.addEventListener('click', (e) => {
        if (e.target.classList.contains('flag')) {
            currentLanguage = e.target.dataset.lang;
        }
    });

    // Función para mostrar errores
    const setError = (input, errorKey) => {
        input.classList.add('input-error');
        const errorMsg = input.parentElement.querySelector(`[data-key="${errorKey}"]`);
        errorMsg.textContent = messages[currentLanguage][errorKey];
        errorMsg.classList.add('show-error');
    };

    // Función para limpiar errores
    const clearError = (input, errorKey) => {
        input.classList.remove('input-error');
        const errorMsg = input.parentElement.querySelector(`[data-key="${errorKey}"]`);
        errorMsg.textContent = "";
        errorMsg.classList.remove('show-error');
    };

    // Agregar eventos para limpiar errores cuando el usuario escribe
    const attachInputListeners = (input, errorKey) => {
        input.addEventListener('input', () => clearError(input, errorKey));
    };

    // Aplicar eventos a los campos con los `name` actualizados para EmailJS
    attachInputListeners(form.elements['from_name'], 'nameError');
    attachInputListeners(form.elements['from_email'], 'emailError');
    attachInputListeners(form.elements['subject'], 'subjectError');
    attachInputListeners(form.elements['message'], 'messageError');

    // Validación del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();  // Prevenir el envío tradicional

        let isValid = true;

        const nameInput = form.elements['from_name'];
        const emailInput = form.elements['from_email'];
        const subjectInput = form.elements['subject'];
        const messageInput = form.elements['message'];

        // Validación de campos
        if (nameInput.value.trim() === "") {
            setError(nameInput, 'nameError');
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            setError(emailInput, 'emailError');
            isValid = false;
        }

        if (subjectInput.value.trim() === "") {
            setError(subjectInput, 'subjectError');
            isValid = false;
        }

        if (messageInput.value.trim() === "") {
            setError(messageInput, 'messageError');
            isValid = false;
        }

        // Si todo está correcto, enviar el formulario con EmailJS
        if (isValid) {
            emailjs.sendForm('service_rv07r7b', 'template_ocnv25a', form)
                .then(() => {
                    alert(messages[currentLanguage].successMessage);
                    form.reset();  // Limpiar el formulario después del envío
                })
                .catch((error) => {
                    alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
                    console.error('Error:', error);
                });
        }
    });
});




