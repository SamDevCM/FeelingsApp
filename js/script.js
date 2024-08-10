const frases = {
    feliz: [
        "Eres mi alegría en cada día.",
        "Contigo, cada momento es mágico.",
        "Tu felicidad es mi mayor tesoro.",
        "Sonríe, amor, que el mundo se ilumina contigo.",
        "Siempre estaré aquí para celebrar tu alegría.",
        "Verte feliz es mi mejor recompensa.",
        "Mi amor por ti crece con cada sonrisa tuya.",
        "Tu risa es mi melodía favorita.",
        "Gracias por llenar mi vida de color.",
        "Eres la razón por la que sonrío todos los días.",
        "No hay nada más bello que verte sonreír.",
        "Tu felicidad es mi misión de vida.",
        "Cuando estás feliz, el mundo es perfecto.",
        "Tu alegría es contagiosa, amor.",
        "Cada sonrisa tuya me hace amarte más.",
        "Eres mi sol en los días nublados.",
        "Me haces feliz solo con existir.",
        "Tu risa ilumina mi vida.",
        "No hay nada más bonito que verte feliz.",
        "Tu felicidad me hace sentir completo.",
        "¿Estarás más feliz, Si te hago el amor?"
    ],
    triste: [
        "Estoy aquí para abrazarte en los días grises.",
        "No estás sola, amor, siempre estaré a tu lado.",
        "Es normal sentirse triste a veces, y aquí estoy para ti.",
        "Eres fuerte, y juntos superaremos cualquier tristeza.",
        "Permíteme ser tu refugio en estos momentos difíciles.",
        "Puedes llorar si lo necesitas, yo estaré aquí para ti.",
        "La tristeza es temporal, pero mi amor por ti es eterno.",
        "Estoy aquí para ti, incluso en los días más oscuros.",
        "Vamos a superar esto juntos, te lo prometo.",
        "Tu dolor es mi dolor, y no dejaré que enfrentes esto sola.",
        "Siempre puedes contar conmigo, amor.",
        "Te amo, incluso en tus momentos más tristes.",
        "No dejes que la tristeza te gane, aquí estoy yo.",
        "Me duele verte triste, pero estaré aquí para apoyarte.",
        "Juntos podemos con todo, incluso con la tristeza.",
        "Eres más fuerte de lo que crees, y estoy aquí para recordártelo.",
        "Cuando estés lista, hablemos, amor.",
        "Mi amor por ti es más grande que cualquier tristeza.",
        "Te amo, y juntos superaremos esta tristeza.",
        "Siempre encontrarás consuelo en mis brazos.",
        "¿Si te hago el amor se te quita?"
    ],
    enojada: [
        "Sé que estás molesta, pero estoy aquí para escucharte.",
        "Respira, amor, vamos a resolverlo juntos.",
        "Tu enojo no cambia lo mucho que te amo.",
        "Hablemos cuando estés lista, te amo.",
        "Estoy aquí para apoyarte, incluso cuando estás enojada.",
        "Es normal sentirse enojada a veces, y estoy contigo.",
        "Vamos a encontrar una solución juntos, amor.",
        "Puedes contar conmigo, incluso en los días difíciles.",
        "Te amo, incluso cuando estás enfadada.",
        "Estoy aquí para ayudarte a calmarte.",
        "Eres importante para mí, y quiero que te sientas mejor.",
        "Vamos a superar esto juntos.",
        "Siempre podemos hablar y resolverlo.",
        "Te amo, sin importar cuán enojado estés.",
        "Tu bienestar es lo más importante para mí.",
        "No dejes que el enojo nos separe, amor.",
        "Estoy aquí para ti, en todo momento.",
        "Quiero que estés bien, amor.",
        "Te amo más de lo que las palabras pueden expresar.",
        "Hablemos y encontremos una solución juntos.",
        "Hasta Enojada te vez preciosa.",
        "¿Si te hago el amor se te quita?"
    ],
    preocupada: [
        "Estoy aquí para aliviar tus preocupaciones.",
        "Todo estará bien, te lo prometo.",
        "Tienes mi apoyo incondicional, siempre.",
        "Eres más fuerte de lo que crees, confía en ti misma.",
        "No tienes que enfrentar esto sola, estoy contigo.",
        "Tus preocupaciones también son mías, y juntos podemos con ellas.",
        "Respira, amor, estoy aquí para ayudarte.",
        "Vamos a resolver esto juntos, paso a paso.",
        "No estás sola en esto, estoy contigo.",
        "Tienes la fortaleza para superar cualquier obstáculo.",
        "Confío en ti, y sé que saldremos adelante.",
        "No permitas que las preocupaciones te consuman, aquí estoy yo.",
        "Eres mi prioridad, y siempre lo serás.",
        "Te amo, y siempre te apoyaré.",
        "Estoy aquí para hacerte sentir segura.",
        "Todo estará bien, no estás sola.",
        "Juntos superaremos cualquier preocupación.",
        "No dejes que las preocupaciones te ganen, te amo.",
        "Estoy contigo, en cada paso del camino.",
        "Vamos a resolver esto juntos, confía en mí.",
        "¿Si te hago el amor se te quita?"
    ],
    desmotivada: [
        "Eres increíble, y estoy aquí para recordártelo.",
        "No pierdas la fe en ti misma, amor.",
        "Juntos encontraremos la motivación que necesitas.",
        "Confío en ti, y sé que puedes lograrlo.",
        "Estoy aquí para apoyarte, siempre.",
        "No te rindas, tienes mucho potencial.",
        "Te amo, y creo en ti.",
        "Eres capaz de grandes cosas, no lo olvides.",
        "Estoy aquí para ayudarte a levantarte.",
        "No estás sola, estoy contigo en cada paso.",
        "Tienes la fortaleza para superar cualquier desafío.",
        "Estoy aquí para apoyarte en todo momento.",
        "Recuerda que eres valiosa y capaz.",
        "Te amo, y juntos superaremos cualquier obstáculo.",
        "No te rindas, amor, estoy aquí contigo.",
        "Eres mi inspiración, no lo olvides.",
        "Confío en tu capacidad para superar cualquier cosa.",
        "Estoy aquí para ayudarte a encontrar tu motivación.",
        "Juntos podemos lograr todo lo que te propongas.",
        "Eres fuerte, y estoy aquí para recordártelo.",
        "¿Si te hago el amor se te quita?"
    ]
};

function mostrarFrase(emocion) {
    const frasesEmocion = frases[emocion];
    const fraseAleatoria = frasesEmocion[Math.floor(Math.random() * frasesEmocion.length)];
    document.getElementById('frase').textContent = fraseAleatoria;
    document.getElementById('emotion-header').textContent = emocion.charAt(0).toUpperCase() + emocion.slice(1);
    document.getElementById('header-text').style.display = 'none';
    document.getElementById('frase-container').style.display = 'block';
    document.querySelector('.buttons').style.display = 'none';
}

function volver() {
    document.getElementById('frase-container').style.display = 'none';
    document.querySelector('.buttons').style.display = 'block';
    document.getElementById('header-text').style.display = 'block';
}
