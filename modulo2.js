const textos = {
    es: {
        titulo: "Bienestar Digital Universitario",

        "nav-inicio": "Inicio",
        "nav-mod1": "Comprensión del bienestar digital",
        "nav-mod2": "Hábitos saludables en línea",
        "nav-mod3": "Fundamentos de ciberseguridad",
        "nav-mod4": "Gestión del tiempo digital",
        "nav-mod5": "Salud emocional y redes sociales",
        "nav-quiz": "Quiz",

        "mod2-titulo": "Módulo 2: Hábitos saludables en línea",

        sub1: "2.1 Sueño y uso digital",

        "sub1-texto": "El uso de dispositivos electrónicos antes de irse a dormir (como el celular, el computador, la tablet...) puede afectar el sueño, en la medida en que la luz de las pantallas provoca una disminución de la producción de melatonina, la hormona que ayuda al cuerpo a dormir. Cuando hay problemas para dormir bien, pueden aparecer dificultades tales como:",

        li1: "Cansancio durante el día: La falta de sueño hace que la persona se sienta con poca energía, con sueño en clases o sin ganas de realizar sus actividades.",
        li2: "Dificultades de concentración: Dormir pocas horas afecta la memoria y la atención, por lo que se vuelve más difícil entender los temas o realizar tareas.",
        li3: "Poco rendimiento académico: El cansancio y la falta de concentración hacen que el estudio sea menos efectivo y que los resultados no sean los esperados.",
        li4: "Irritabilidad o estrés: Cuando no se descansa lo suficiente, es más fácil sentirse de mal humor, ansioso o estresado sin razón aparente.",

        sub2: "2.2 Recomendaciones para mejorar el descanso:",

        li5: "Evitar las pantallas por lo menos 30-60 minutos antes de ir a dormir.",
        li6: "Activar el 'modo noche' o el filtro de luz azul.",
        li7: "Evitar dormir con el celular cerca de la cama.",
        li8: "Mantener horarios de sueño.",
        li9: "El descanso nocturno es fundamental en relación con el aprendizaje, la memoria y el bienestar.",

        "footer-copy": "Bienestar Digital Universitario © 2026",

        "footer-contacto": `Contacto:
    <a href="mailto:cltibaganm@unadvirtual.edu.co">
    cltibaganm@unadvirtual.edu.co
    </a>`,

        "footer-referencias": `Referencias:<br>
    <a href="https://www.ncsc.gov.uk/guidance/password-guidance-simplifying-your-approach" target="_blank">
    National Cyber Security Centre. (2023). Password guidance: Simplifying your approach. NCSC.
    </a>
    <br><br>    
    <a href="https://www.incibe.es/ciudadania/blog/contrasenas-seguras-te-explicamos-como-conseguirlo" target="_blank">
    Instituto Nacional de Ciberseguridad – INCIBE. (2024). ¿Contraseñas seguras? Te explicamos cómo conseguirlo.
    </a>`

    },
    en: {
        titulo: "University Digital Wellbeing",

        "nav-inicio": "Home",
        "nav-mod1": "Understanding digital wellbeing",
        "nav-mod2": "Healthy online habits",
        "nav-mod3": "Cybersecurity fundamentals",
        "nav-mod4": "Digital time management",
        "nav-mod5": "Emotional health and social media",
        "nav-quiz": "Quiz",

        "mod2-titulo": "Module 2: Healthy Online Habits",

        sub1: "2.1 Sleep and digital use",

        "sub1-texto": "The use of electronic devices before going to sleep (such as mobile phones, computers, or tablets) can affect sleep, since the light emitted by screens reduces the production of melatonin, the hormone that helps the body sleep. When there are sleep problems, difficulties such as the following may appear:",

        li1: "Daytime fatigue: Lack of sleep causes low energy, sleepiness in class, or lack of motivation to perform activities.",
        li2: "Concentration difficulties: Sleeping few hours affects memory and attention, making it harder to understand topics or complete tasks.",
        li3: "Low academic performance: Fatigue and lack of concentration make studying less effective and results may not meet expectations.",
        li4: "Irritability or stress: When you do not rest enough, it is easier to feel in a bad mood, anxious, or stressed without apparent reason.",

        sub2: "2.2 Recommendations to improve rest:",

        li5: "Avoid screens at least 30–60 minutes before going to sleep.",
        li6: "Activate night mode or blue light filter.",
        li7: "Avoid sleeping with the phone near the bed.",
        li8: "Maintain consistent sleep schedules.",
        li9: "Night rest is essential for learning, memory, and wellbeing.",

        "footer-copy": "University Digital Wellbeing © 2026",

        "footer-contacto": `Contact:
    <a href="mailto:cltibaganm@unadvirtual.edu.co">
    cltibaganm@unadvirtual.edu.co
    </a>`,

        "footer-referencias": `References:<br>
    <a href="https://www.who.int/europe/news/item/25-09-2024-teens--screens-and-mental-health" target="_blank">
    World Health Organization. (2024, septiembre 25). Teens, screens and mental health. Organización Mundial de la Salud. 
    </a>
    <br><br>
    <a href="https://www.incibe.es/ciudadania/blog/contrasenas-seguras-te-explicamos-como-conseguirlo" target="_blank">
    National Cybersecurity Institute – INCIBE. (2024). Secure passwords? We explain how to achieve it.
    </a>`
    }
}

function cambiarIdioma(idioma) {
    document.documentElement.lang = idioma;

    for (const id in textos[idioma]) {
        const el = document.getElementById(id);
        if (el) {
            // Se usar innerHTML para no borrar etiquetas
            el.innerHTML = textos[idioma][id];
        }
    }
}