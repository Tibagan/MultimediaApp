//MODULO INDEX
let nombre = prompt("¿Cómo te llamas?");
if (nombre) {
    document.getElementById("bienvenido").innerHTML = "Bienvenido, " + nombre;
}
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

        //HERO (AGREGADO)
        "hero-titulo": "Controla tu vida digital",
        "hero-texto": "Aprende a usar la tecnología de forma equilibrada y saludable en tu vida universitaria.",
        "hero-btn": "Comenzar curso",

        bienvenido: "Bienvenido",
        descripcion: "Esta aplicación educativa tiene como objetivo promover el uso responsable y saludable de la tecnología. A través de diferentes módulos, aprenderás sobre hábitos digitales, ciberseguridad, gestión del tiempo y el impacto emocional de las redes sociales.",
        contenido_curso: "Contenido del curso",
        "mod1-list": "Módulo 1: Comprendiendo el bienestar digital",
        "mod2-list": "Módulo 2: Hábitos saludables en línea",
        "mod3-list": "Módulo 3: Fundamentos de ciberseguridad",
        "mod4-list": "Módulo 4: Gestión del tiempo digital",
        "mod5-list": "Módulo 5: Salud emocional y redes sociales",
        "video-text": "Aprende sobre Bienestar Digital viendo el video oficial:",
        "video-btn": "▶ Mirar el video en YouTube",
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

        // HERO (AGREGADO)
        "hero-titulo": "Take control of your digital life",
        "hero-texto": "Learn to use technology in a balanced and healthy way in your university life.",
        "hero-btn": "Start course",

        bienvenido: "Welcome",
        descripcion: "This educational application aims to promote the responsible and healthy use of technology. Through different modules, you will learn about digital habits, cybersecurity, time management, and the emotional impact of social media.",
        contenido_curso: "Course content",
        "mod1-list": "Module 1: Understanding digital wellbeing",
        "mod2-list": "Module 2: Healthy online habits",
        "mod3-list": "Module 3: Cybersecurity fundamentals",
        "mod4-list": "Module 4: Digital time management",
        "mod5-list": "Module 5: Emotional health and social media",
        "video-text": "Learn about Digital Wellbeing by watching the official video:",
        "video-btn": "▶ Watch the video on YouTube",
        "footer-copy": "University Digital Wellbeing © 2026",

        "footer-contacto": `Contact:
            <a href="mailto:cltibaganm@unadvirtual.edu.co">
                cltibaganm@unadvirtual.edu.co
            </a>`,

        "footer-referencias": `References:<br>
            <a href="https://www.who.int/europe/news/item/25-09-2024-teens--screens-and-mental-health" target="_blank">
                World Health Organization. (2024). Teens, screens and mental health.
            </a>
            <br><br>
            <a href="https://www.incibe.es/ciudadania/blog/contrasenas-seguras-te-explicamos-como-conseguirlo" target="_blank">
                National Cybersecurity Institute – INCIBE. (2024). Secure passwords? We explain how to achieve it.
            </a>`
    }
};

function cambiarIdioma(idioma) {
    for (const id in textos[idioma]) {
        const el = document.getElementById(id);
        if (el) {
            el.innerHTML = textos[idioma][id];
        }
    }
}