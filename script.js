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
                <p>Apasionado por el <em>desarrollo de software</em> y la <em>ciberseguridad</em>.</p>
                <p>Actualmente estudio <strong>Ingeniería de Software</strong> en la Universidad de Oviedo.</p>
            `,
            'experience1': `
                <h3>09/2021 - 09/2024 <br> Universidad de Oviedo</h3>
                <p>Comencé mis estudios en Ingeniería de Software, desarrollando habilidades en programación,
                bases de datos y ciberseguridad.</p>
            `,
            'experience2': `
                <h3>09/2024 - 09/2025 <br> Vilnius Business College, Lituania</h3>
                <p>Comencé mis estudios en Ingeniería de Software, desarrollando habilidades en programación,
                bases de datos y ciberseguridad.</p>
            `,
            'experience3': `
                <h3>09/2025 - 06/2027 <br> Universidad de Oviedo</h3>
                <p>Comencé mis estudios en Ingeniería de Software, desarrollando habilidades en programación,
                bases de datos y ciberseguridad.</p>
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

            // Nuevas traducciones para el formulario de contacto
            'namePlaceholder': '  Full Name',
            'emailPlaceholder': '  Email',
            'subjectPlaceholder': '  Subject',
            'messagePlaceholder': ' Message',
            'sendButton': 'Send',

            // Mensajes de error en Inglés
            'nameError': 'Please enter your full name.',
            'emailError': 'Please enter a valid email address.',
            'subjectError': 'Please enter a subject.',
            'messageError': 'Please write your message.',

            'aboutMeText': `
                <p>Hi, I'm <strong>Alberto Ramírez Farfán</strong>.</p>
                <p>Passionate about <em>software development</em> and <em>cybersecurity</em>.</p>
                <p>Currently studying <strong>Software Engineering</strong> at the University of Oviedo.</p>
            `,
            'experience1': `
                <h3>09/2021 - 09/2024 <br> University of Oviedo</h3>
                <p>I started my studies in Software Engineering, developing skills in programming,
                databases, and cybersecurity.</p>
            `,
            'experience2': `
                <h3>09/2024 - 09/2025 <br> Vilnius Business College, Lithuania</h3>
                <p>I started my studies in Software Engineering, developing skills in programming,
                databases, and cybersecurity.</p>
            `,
            'experience3': `
                <h3>09/2025 - 06/2027 <br> University of Oviedo</h3>
                <p>I continued my studies in Software Engineering, focusing on advanced programming,
                databases, and cybersecurity.</p>
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




