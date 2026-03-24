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

        "mod4-titulo": "Módulo 4: Gestión del tiempo en entornos digitales",

        sub1: "4.1 Herramientas de productividad",

        "sub1-texto": "El bienestar digital se refiere al uso equilibrado, saludable y consciente de la tecnología, buscando mantener el bienestar físico, mental y emocional.",

        p1: "1. Herramientas que te pueden ayudar: Sirven para programar clases, entregas, recordatorios para estudiar y descansos.",

        li1: "Calendarios digitales.",
        li2: "Google Calendar",
        li3: "Microsoft Outlook",

        p2: "2. Aplicaciones de listas de tareas (To-do): Permiten priorizar lo más importante, dividir tareas en bloques y marcar cuando está hecho.",

        li4: "Todoist",
        li5: "Microsoft To-Do",

        p3: "3. Temporizadores y métodos de enfoque: Ayudan a mantener la concentración y son útiles para combatir la procrastinación.",

        li6: "Técnica Pomodoro: trabaja 25 min y descansa 5 min",
        li7: "Forest (app): planta un árbol si no usas el smartphone.",

        p4: "4. Bloqueadores de distracciones: Son útiles para limitar el tiempo dedicado a redes sociales y aplicaciones no productivas.",

        li8: "StayFocusd (extensión)",
        li9: "Modo enfoque en smartphone.",

        sub2: "4.2 Evitar distracciones",

        "sub2-texto": "Las distracciones digitales se han convertido en una de las principales dificultades para estudiar o trabajar correctamente, ya sea por notificaciones, mensajes, redes sociales o videos, entre otros. Estrategias útiles para evitarlas:",

        li10: "Desactivar las notificaciones mientras estudia",
        li11: "Activar el modo No molestar",
        li12: "Estudiar en orden",
        li13: "Usar un temporizador para separar tiempos de estudio y descanso",
        li14: "Cerrar las pestañas o aplicaciones que no son necesarias para el estudio",

        sub3: "Para qué es importante: Organizar su tiempo digital le ayudará a:",

        li15: "Cumplir con las asignaciones",
        li16: "Evitar el estrés por dejar todo para el último momento",
        li17: "Mantener un equilibrio entre estudio y descanso",
        li18: "Ser productivo sin sentirse constantemente cansado",

        "footer-copy": "Bienestar Digital Universitario © 2026",

        "footer-contacto": `Contacto:
    <a href="mailto:cltibaganm@unadvirtual.edu.co">
    cltibaganm@unadvirtual.edu.co
    </a>`,

        "footer-referencias": `Referencias:<br>
    <a href="https://www.who.int/europe/news/item/25-09-2024-teens--screens-and-mental-health" target="_blank">
    World Health Organization. (2024, septiembre 25). Teens, screens and mental health. Organización Mundial de la Salud
    </a>
    <br><br>
    <a href="https://www.incibe.es/ciudadania/blog/contrasenas-seguras-te-explicamos-como-conseguirlo" target="_blank">
    Instituto Nacional de Ciberseguridad – INCIBE. (2024). ¿Contraseñas seguras? Te explicamos cómo conseguirlo.
    </a>`

    },
    en: {
        titulo: "Digital University Well-being",

        navInicio: "Home",
        navMod1: "Understanding digital well-being",
        navMod2: "Healthy online habits",
        navMod3: "Cybersecurity fundamentals",
        navMod4: "Digital time management",
        navMod5: "Social and emotional health on social media",
        navQuiz: "Quiz",

        mod4Titulo: "Module 4: Time management in digital environments",

        sub1: "4.1 Productivity tools",

        "sub1-texto":
            "Digital well-being refers to the balanced, healthy, and conscious use of technology, seeking to maintain physical, mental, and emotional well-being.",

        p1:
            "1. Tools that can help you: They are used to schedule classes, assignments, reminders for studying and breaks.",

        li1: "Digital calendars.",
        li2: "Google Calendar",
        li3: "Microsoft Outlook",

        p2:
            "2. To-do list applications: They allow prioritizing what is most important, breaking tasks into blocks, and marking them as completed.",

        li4: "Todoist",
        li5: "Microsoft To Do",

        p3:
            "3. Timers and focus methods: They help maintain concentration and are useful for fighting procrastination.",

        li6: "Pomodoro Technique: work 25 minutes and rest 5 minutes",
        li7: "Forest (app): plant a tree if you don’t use your smartphone.",

        p4:
            "4. Distraction blockers: They are useful for limiting the time spent on social networks and/or non-productive applications.",

        li8: "StayFocusd (extension)",
        li9: "Focus Mode on smartphones.",

        sub2: "4.2 Avoiding distractions",

        "sub2-texto":
            "Digital distractions have become one of the main difficulties for being able to study or work properly, whether they come from notifications, messages, social media, or videos, among others. Useful strategies to stop them:",

        li10: "Turn off notifications while studying",
        li11: "Enable Do Not Disturb mode",
        li12: "Study in an organized way",
        li13: "Use a timer to separate study and rest periods",
        li14: "Close tabs or applications that are not necessary for studying",

        sub3:
            "Why it is important: Organizing your digital time will help you to:",

        li15: "Meet assignments",
        li16: "Avoid stress from leaving everything to the last minute",
        li17: "Maintain a balance between study and rest",
        li18: "Be productive without feeling exhausted.",

        footerCopy: "Digital University Well-being © 2026",

        footerContacto: "Contact:",

        footerReferencias: "References:",

        ref1:
            "National Cyber Security Centre. (2023). Password guidance: Simplifying your approach. NCSC.",

        ref2:
            "National Cybersecurity Institute – INCIBE. (2024). Secure passwords? We explain how to achieve them."
    }
};

function cambiarIdioma(idioma) {
    document.documentElement.lang = idioma;

    for (const id in textos[idioma]) {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = textos[idioma][id];
        }
    }
}