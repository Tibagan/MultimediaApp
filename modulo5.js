const textos = {
    es: {
        titulo: "Bienestar Digital Universitario",

        "mod5-titulo": "Módulo 5: Salud emocional y redes sociales",

        "selected-item": "Salud emocional y redes sociales",

        sub1: "5.1 Impacto en la autoestima",

        p1: "Las redes sociales son un común denominador que acompaña la vida cotidiana del alumnado, sin embargo, un abuso de su uso puede provocar trastornos emocionales y errores en la forma de percibirse. Las redes sociales muestran a los otros en muchas ocasiones lo que puede ser \"una vida ideal\", lo que puede determinar:",

        li1: "Comparaciones constantes: Ver la vida de otras personas todo el tiempo puede hacer que alguien sienta que los demás están mejor o tienen más éxito.",
        li2: "Sentimientos de inseguridad o insatisfacción: La persona puede pensar que no es suficiente o que debería ser diferente para sentirse aceptada.",
        li3: "Baja autoestima: Cuando se depende mucho de los comentarios o “me gusta”, la confianza en uno mismo puede disminuir.",
        li4: "Ansiedad o estrés: Estar pendiente de las redes todo el tiempo puede generar preocupación, presión por publicar o miedo a perderse algo.",

        p2: "En otro plano, al dedicar un tiempo elevado a las redes sociales puede afectar tanto la atención como el manejo de ciertas emociones y el rendimiento escolar. Es importante resaltar que lo que vemos en las redes sociales no siempre es real y que en ningún caso el bienestar personal debe depender de los \"likes\" o comentarios.",

        sub2: "5.2 Uso responsable de las redes sociales",

        p3: "El uso responsable de las redes sociales consiste en encontrar un equilibrio entre el uso que se hace de estas, es decir, aprovechar todos los beneficios que nos ofrecen sin perjudicar la salud emocional.",

        li5: "Recomendaciones de uso responsable",
        li6: "Establecer límites horarios para el uso diario de las redes.",
        li7: "Evitar revisar constantemente las redes mientras se estudia.",
        li8: "Seguir las cuentas que nos aportan contenido positivo o educativo.",
        li9: "No hacer comparaciones con otras personas.",
        li10: "Desconectarse cuando se perciba que esto genera estrés o malestar.",
        li11: "Priorizar actividades más allá de la pantalla (deporte, descanso, tiempo con la familia o los amigos).",

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

        "mod5-titulo": "Module 5: Emotional health and social media",

        "selected-item": "Emotional health and social media",

        sub1: "5.1 Impact on self-esteem",

        p1: "Social media is a common element in students' daily lives; however, excessive use can lead to emotional disorders and distortions in self-perception. Social media often shows what appears to be an \"ideal life\", which can lead to:",

        li1: "Constant comparisons: Seeing other people's lives all the time can make someone feel that others are better off or more successful.",
        li2: "Feelings of insecurity or dissatisfaction: A person may think they are not enough or should be different to feel accepted.",
        li3: "Low self-esteem: When someone depends heavily on comments or “likes”, their self-confidence may decrease.",
        li4: "Anxiety or stress: Constantly checking social media can create worry, pressure to post, or fear of missing out.",

        p2: "Additionally, spending too much time on social media can affect attention, emotional management, and academic performance. It is important to highlight that what we see on social media is not always real, and personal wellbeing should never depend on \"likes\" or comments.",

        sub2: "5.2 Responsible use of social media",

        p3: "Responsible use of social media means finding a balance in its use, taking advantage of its benefits without harming emotional health.",

        li5: "Recommendations for responsible use",
        li6: "Set time limits for daily social media use.",
        li7: "Avoid constantly checking social media while studying.",
        li8: "Follow accounts that provide positive or educational content.",
        li9: "Avoid comparing yourself with others.",
        li10: "Disconnect when you feel it is causing stress or discomfort.",
        li11: "Prioritize activities beyond the screen (sports, rest, time with family or friends).",

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
National Cybersecurity Institute – INCIBE. (2024). Secure passwords? We explain how to achieve them.
</a>`
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