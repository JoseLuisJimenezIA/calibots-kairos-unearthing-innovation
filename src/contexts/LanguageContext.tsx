import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Language = "es" | "en" | "jp";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
};

// ─── Translations ───────────────────────────────────────────────
const translations: Record<Language, Record<string, string>> = {
  es: {
    // Navbar
    "nav.inicio": "Inicio",
    "nav.quienes": "Quiénes Somos",
    "nav.proyecto": "Proyecto Innovador",
    "nav.juego": "Juego del Robot",
    "nav.galeria": "Galería",
    "nav.contacto": "Contacto",

    // Back button
    "back": "Volver",
    "back.home": "Inicio",

    // Index Hero
    "hero.badge": "Temporada UNEARTHED · FIRST LEGO League",
    "hero.title1": "Explorando cuevas, ",
    "hero.title.highlight": "protegiendo arqueólogos",
    "hero.title2": " con robótica",
    "hero.subtitle1": "Conoce a ",
    "hero.subtitle2": ", nuestro robot explorador diseñado para la seguridad en espeleología y arqueología",
    "hero.cta1": "Conoce ARGOS",
    "hero.cta2": "Nuestro equipo",

    // Index Stats
    "stats.members": "Integrantes",
    "stats.weeks": "Semanas de trabajo",
    "stats.sensors": "Sensores integrados",
    "stats.prototypes": "Prototipos",

    // Index ScrollStack
    "scroll.title1": "Cómo Vivimos ",
    "scroll.title2": "FIRST LEGO League",
    "scroll.subtitle": "Nuestra experiencia integra investigación, robótica, valores y aprendizaje",
    "scroll.card1.title": "Proyecto Innovador",
    "scroll.card1.desc": "ARGOS nació de una investigación real sobre los riesgos en la exploración arqueológica subterránea.",
    "scroll.card2.title": "Juego del Robot",
    "scroll.card2.desc": "Diseñamos, construimos y programamos soluciones robóticas para los desafíos de la temporada UNEARTHED.",
    "scroll.card3.title": "Valores FIRST",
    "scroll.card3.desc": "Descubrimiento, innovación, impacto, inclusión, trabajo en equipo y diversión guían cada paso.",
    "scroll.card4.title": "Aprendizaje del Equipo",
    "scroll.card4.desc": "Cada integrante crece en habilidades técnicas, sociales y de liderazgo a lo largo de la temporada.",

    // Index ¿Qué hacemos?
    "what.title1": "¿Qué ",
    "what.title2": "hacemos",
    "what.title3": "?",
    "what.card1.title": "Espeleología & Arqueología",
    "what.card1.desc": "Investigamos los desafíos que enfrentan los arqueólogos al explorar cuevas y cavidades naturales con fósiles y restos históricos.",
    "what.card2.title": "Proyecto ARGOS",
    "what.card2.desc": "Desarrollamos un robot terrestre explorador que analiza zonas peligrosas antes de que los arqueólogos ingresen, siendo sus ojos en la oscuridad.",
    "what.card3.title": "Seguridad Primero",
    "what.card3.desc": "Nuestro robot integra sensores para detectar gases tóxicos, inestabilidad estructural y condiciones adversas en cuevas y cavernas.",

    // Index Bento
    "bento.title1": "Nuestras ",
    "bento.title2": "Fortalezas",
    "bento.safe.title": "Exploración Segura",
    "bento.safe.desc": "ARGOS analiza cuevas antes de que los arqueólogos ingresen, detectando peligros invisibles.",
    "bento.safe.label": "Seguridad",
    "bento.sensors.title": "Sensores Avanzados",
    "bento.sensors.desc": "Gases tóxicos, temperatura, humedad e inestabilidad estructural monitoreados en tiempo real.",
    "bento.sensors.label": "Tecnología",
    "bento.research.title": "Espeleología & Arqueología",
    "bento.research.desc": "Investigamos los riesgos reales que enfrentan los profesionales en exploración subterránea.",
    "bento.research.label": "Investigación",
    "bento.team.title": "Trabajo en Equipo",
    "bento.team.desc": "10 integrantes colaborando con roles definidos, desde programación hasta comunicación.",
    "bento.team.label": "Equipo",
    "bento.values.title": "Valores FIRST",
    "bento.values.desc": "Descubrimiento, innovación, impacto, inclusión y diversión guían cada decisión.",
    "bento.values.label": "Valores",
    "bento.robot.title": "Robot Explorador",
    "bento.robot.desc": "Diseñado con LEGO SPIKE Prime, programado para navegar terrenos irregulares de forma autónoma.",
    "bento.robot.label": "Robótica",

    // Footer
    "footer.nav": "Navegación",
    "footer.social": "Redes Sociales",
    "footer.rights": "Todos los derechos reservados.",
    "footer.club": "Club de Robótica · Colegio Comfandi El Prado",

    // Quienes Somos
    "qs.title1": "Quiénes ",
    "qs.title2": "Somos",
    "qs.subtitle": "Conoce al equipo detrás de CaliBots Kairos",
    "qs.essence1": "Nuestra ",
    "qs.essence2": "Esencia",
    "qs.essence.p1": "Somos CaliBots Kairos, un equipo de FIRST LEGO League Challenge de Cali, Colombia. Representamos a nuestro colegio Comfandi El Prado con una propuesta que une investigación, robótica, diseño y trabajo en equipo. Nuestro nombre refleja una idea que nos identifica: el kairos, el momento oportuno para aprender, crear y actuar frente a un desafío real.",
    "qs.essence.p2": "En la temporada UNEARTHED, decidimos conectar tecnología y patrimonio desde una pregunta concreta: ¿cómo puede la robótica ayudar a explorar primero, reducir riesgos y aportar información antes del ingreso humano?",
    "qs.team1": "Nuestro ",
    "qs.team2": "Equipo",
    "qs.team3": " y ",
    "qs.team4": "Coaches",
    "qs.team.drag.desktop": "Arrastra para girar · Pasa el cursor para pausar",
    "qs.team.drag.mobile": "Desliza para girar",
    "qs.journey1": "Nuestro ",
    "qs.journey2": "Recorrido",
    "qs.timeline.1.phase": "Entrenamientos",
    "qs.timeline.1.desc": "Formación en programación, construcción y valores FIRST.",
    "qs.timeline.2.phase": "Preparación",
    "qs.timeline.2.desc": "Desarrollo del proyecto innovador ARGOS y diseño del robot.",
    "qs.timeline.3.phase": "Competencias",
    "qs.timeline.3.desc": "Participación en torneos regionales y nacionales FLL.",
    "qs.values.title1": "Valores FIRST en ",
    "qs.values.title2": "Acción",
    "qs.values.subtitle": "Haz clic en cada valor para descubrir cómo lo vivimos",
    "qs.role.coach": "Profesor / Coach",
    "qs.role.member": "Integrante",

    // Valores FIRST
    "val.discovery": "Descubrimiento",
    "val.innovation": "Innovación",
    "val.impact": "Impacto",
    "val.inclusion": "Inclusión",
    "val.teamwork": "Trabajo en Equipo",
    "val.fun": "Diversión",
    "val.discovery.desc": "Exploramos nuevas habilidades, ideas y conceptos.",
    "val.innovation.desc": "Usamos creatividad y perseverancia para resolver problemas.",
    "val.impact.desc": "Aplicamos lo aprendido para mejorar nuestro mundo.",
    "val.inclusion.desc": "Nos respetamos y valoramos nuestras diferencias.",
    "val.teamwork.desc": "Somos más fuertes cuando trabajamos juntos.",
    "val.fun.desc": "¡Disfrutamos y celebramos lo que hacemos!",

    // ValorFIRST page
    "vf.notfound": "Valor no encontrado",
    "vf.back": "Volver",
    "vf.subtitle": "Valores FIRST en Acción",
    "vf.meaning": "¿Qué significa este valor?",
    "vf.apply": "Cómo lo aplicamos en CaliBots Kairos",
    "vf.evidence": "Evidencia Visual",
    "vf.backqs": "Volver a Quiénes Somos",
    "vf.discovery.desc": "Exploramos nuevas habilidades, ideas y conceptos. En FIRST LEGO League, el descubrimiento es el motor que impulsa a los equipos a investigar problemas reales y encontrar soluciones creativas.",
    "vf.discovery.apply": "En CaliBots Kairos, cada temporada es una oportunidad para descubrir algo nuevo. Con ARGOS, descubrimos el fascinante mundo de la espeleología, la arqueología y los desafíos que enfrentan los científicos en cuevas. Investigamos con expertos, visitamos museos y aprendimos sobre sensores y robótica aplicada.",
    "vf.discovery.quote": "\"Descubrir es ver lo que todos han visto y pensar lo que nadie ha pensado.\" — Albert Szent-Györgyi",
    "vf.innovation.desc": "Usamos creatividad y perseverancia para resolver problemas. La innovación en FIRST LEGO League significa pensar diferente y atreverse a crear soluciones que no existían antes.",
    "vf.innovation.apply": "ARGOS nació de una pregunta: ¿cómo proteger a los arqueólogos en cuevas peligrosas? Iteramos desde un prototipo V1 básico hasta un V2 con mejor suspensión y sensores de gas. Cada versión fue mejor porque aprendimos de nuestros errores y buscamos retroalimentación de expertos.",
    "vf.innovation.quote": "\"La innovación distingue a un líder de un seguidor.\" — Steve Jobs",
    "vf.impact.desc": "Aplicamos lo que aprendemos para mejorar nuestro mundo. En FIRST LEGO League, el impacto va más allá de la competencia: se trata de crear cambio real en nuestras comunidades.",
    "vf.impact.apply": "Nuestro proyecto busca impactar la seguridad de arqueólogos y espeleólogos en todo el mundo. Además, creamos un juego educativo para que niños más pequeños aprendan sobre la importancia de preservar el patrimonio arqueológico. Queremos que nuestra solución trascienda la competencia.",
    "vf.impact.quote": "\"El verdadero impacto se mide en las vidas que tocamos.\"",
    "vf.inclusion.desc": "Nos respetamos unos a otros y valoramos nuestras diferencias. FIRST LEGO League celebra la diversidad y cree que todos merecen la oportunidad de participar y contribuir.",
    "vf.inclusion.apply": "En CaliBots Kairos, cada integrante aporta algo único. Valoramos las ideas de todos, sin importar su experiencia previa. Trabajamos para que cada voz sea escuchada y cada talento sea aprovechado. La diversidad de nuestro equipo es nuestra mayor fortaleza.",
    "vf.inclusion.quote": "\"La fortaleza está en las diferencias, no en las similitudes.\" — Stephen Covey",
    "vf.teamwork.desc": "Somos más fuertes cuando trabajamos juntos. En FIRST LEGO League, ningún logro es individual: todo se construye como equipo, desde la investigación hasta la presentación final.",
    "vf.teamwork.apply": "Nuestros 10 estudiantes y 2 coaches trabajan como una unidad. Dividimos tareas según fortalezas: algunos investigan, otros programan, otros diseñan y construyen. Nos reunimos semanalmente para compartir avances y tomar decisiones juntos. El éxito de ARGOS es el éxito de todo el equipo.",
    "vf.teamwork.quote": "\"Ninguno de nosotros es tan inteligente como todos nosotros juntos.\" — Ken Blanchard",
    "vf.fun.desc": "¡Disfrutamos y celebramos lo que hacemos! En FIRST LEGO League, aprender debe ser emocionante. La diversión es el combustible que mantiene viva la pasión por la ciencia y la tecnología.",
    "vf.fun.apply": "En CaliBots Kairos nos divertimos en cada paso del proceso. Desde las sesiones de lluvia de ideas hasta las pruebas del robot, cada momento es una oportunidad para reír, celebrar y disfrutar juntos. Porque cuando te diviertes, aprendes más y mejor.",
    "vf.fun.quote": "\"La diversión es la forma más elevada de investigación.\" — Albert Einstein",

    // Proyecto Innovador Hero
    "pi.badge": "Proyecto Innovador · Temporada UNEARTHED",
    "pi.subtitle": "Robot explorador para seguridad en espeleología — los ojos de los arqueólogos en la oscuridad",

    // FiveKeys
    "fk.title1": "ARGOS en ",
    "fk.title2": "5 Claves",
    "fk.what": "Qué",
    "fk.what.text": "Un robot terrestre explorador llamado ARGOS, equipado con sensores para analizar cuevas y cavidades naturales antes del ingreso humano.",
    "fk.why": "Por qué",
    "fk.why.text": "Los arqueólogos enfrentan riesgos como derrumbes, gases tóxicos y zonas estructuralmente inestables al explorar cuevas con valor histórico.",
    "fk.how": "Cómo",
    "fk.how.text": "ARGOS integra sensores como el MQ-7 (monóxido de carbono), cámaras y plataformas como Arduino para monitorear condiciones en tiempo real.",
    "fk.where": "Dónde",
    "fk.where.text": "En cuevas, cavernas y sitios arqueológicos subterráneos donde las condiciones pueden ser peligrosas para las personas.",
    "fk.impact": "Impacto",
    "fk.impact.text": "Proteger vidas humanas, preservar patrimonio cultural y democratizar el acceso tecnológico en la exploración arqueológica.",

    // Justificacion
    "just.title": "Justificación",
    "just.p1": "En la actualidad existen diferentes tipos de herramientas tecnológicas que aportan a la exploración de restos arqueológicos y detección de minerales, herramientas que suelen ser muy accesibles en la minería (por su retribución económica) pero poco accesibles en la arqueología.",
    "just.p2": "ARGOS, desde la tecnología, no solo aporta a esta exploración, sino que también es de fácil acceso para diferentes arqueólogos, desde aficionados o principiantes hasta profesionales, democratizando el uso de herramientas tecnológicas en el campo arqueológico.",

    // Concepto
    "con.title1": "Concepto Central: ",
    "con.title2": "Espeleología",
    "con.p1": "La espeleología (del griego σπηλαιου spelaiou que significa «cueva» y -logía, tratado) es la práctica de explorar y/o estudiar las cavidades naturales del subsuelo.",
    "con.p2": "A partir de sus raíces griegas, se considera a la espeleología como el estudio científico que, apoyado en la geología, analiza el desarrollo, evolución y formaciones geológicas de las cavidades naturales (espeleotemas o espeleolitos).",
    "con.p3": "Desde el punto de vista geológico, forma parte de la geomorfología y sirve de apoyo a la hidrogeología.",
    "con.excavation.title": "⛏️ Excavaciones en cueva",
    "con.excavation.desc": "Derrumbes de zanjas, derrumbes, caídas, caída de cargas, atmósferas peligrosas y contacto con líneas eléctricas aéreas son los principales riesgos.",

    // Nombre
    "nom.title": "Significado del Nombre",
    "nom.argos.title": "ARGOS 👁️",
    "nom.argos.desc": "Hace referencia al gigante de cien ojos de la mitología griega que todo lo ve. Nuestro robot busca convertirse en los ojos de los arqueólogos en zonas peligrosas.",
    "nom.kairos.title": "KAIROS ⏳",
    "nom.kairos.desc": "Kairos es una palabra del griego antiguo que significa \"el momento oportuno\". Juntos, ARGOS y Kairos representan la visión y el momento perfecto para innovar.",

    // Objetivos
    "obj.title": "Objetivos",
    "obj.general.title": "Objetivo General",
    "obj.general.desc": "Aportar a la exploración y seguridad de los arqueólogos por medio del desarrollo de un Bot terrestre que permita la exploración en zonas de difícil acceso como cuevas inexploradas, entre otros.",
    "obj.specific.title": "Objetivos Específicos",
    "obj.specific.1": "Analizar las principales problemáticas que hay hoy en día en la exploración para los arqueólogos, determinando en cuál de ellas podemos intervenir directamente (desde lo tecnológico).",
    "obj.specific.2": "Diseñar un Bot terrestre que permita la exploración, verificación y análisis de las zonas difíciles de exploración para los arqueólogos.",
    "obj.specific.3": "Implementar un Bot terrestre eléctrico radiocontrolado con la implementación de IA que permita garantizar condiciones seguras a los arqueólogos.",

    // Problematicas
    "prob.title1": "Problemáticas en ",
    "prob.title2": "Arqueología",
    "prob.subtitle": "Desafíos que enfrentan los arqueólogos en la exploración subterránea",
    "prob.cultural.area": "Cultural",
    "prob.cultural.desc": "Aquí surge un desafío ético fundamental: desde la intervención de sitios arqueológicos que las comunidades locales consideran sagrados, donde el manejo de restos humanos y objetos ancestrales no es solo un proceso técnico, sino una acción que impacta directamente en la identidad y las creencias de poblaciones.",
    "prob.economic.area": "Económica",
    "prob.economic.desc": "Este es otro de los grandes desafíos, ya que desde el ámbito de la minería sí se efectúa buena inversión debido a la retribución, sin embargo la arqueología no cuenta con mucha inversión debido a la retribución económica que puede generar.",
    "prob.security.area": "Seguridad",
    "prob.security.desc": "Dentro de las excavaciones podemos encontrar materiales poco rígidos con precipitaciones, lugares de difícil acceso y también con condiciones de aire contaminado por diferentes tipos de gases, ocasionando problemas respiratorios.",
    "prob.tech.area": "Tecnológica",
    "prob.tech.desc": "Aunque existen herramientas como el LIDAR o el Georradar (GPR), estas tecnologías enfrentan dificultades en terrenos con alta densidad de vegetación, humedad extrema o suelos con alta mineralización.",
    "prob.from": "Desde lo ",
    "prob.mining.title": "¿Qué problemas puede causar la minería?",
    "prob.mining.1": "Desertización: deforestación, erosión, pérdida de suelo fértil",
    "prob.mining.2": "Modificación del relieve, impacto visual, alteración de la dinámica de los procesos de ladera",
    "prob.mining.3": "Aumento de la escorrentía y erosión",
    "prob.mining.4": "Alteraciones en el nivel freático",

    // Paleontologia
    "paleo.title": "Paleontología",
    "paleo.p1": "Los fósiles son valiosos archivos del pasado. Conservan detalles sobre los seres vivos de hace miles o cientos de millones de años. Su estudio nos ayuda a comprender la evolución de las especies a lo largo del tiempo.",
    "paleo.p2": "También pueden revelar las dietas o los patrones migratorios de especies desaparecidas hace mucho tiempo, incluidos nuestros antepasados.",
    "paleo.social.title": "Impacto Social",
    "paleo.social.p1": "La arqueología tiene un impacto importante en la sociedad porque nos ayuda a conocer cómo vivían las personas en el pasado y a entender mejor nuestra historia.",
    "paleo.social.p2": "Muchos sitios arqueológicos atraen turistas, lo que puede generar trabajo y beneficios para las comunidades locales.",

    // Casos Reales
    "cases.title1": "Problemática en el ",
    "cases.title2": "Mundo",
    "cases.subtitle": "Casos reales que evidencian la necesidad de innovar",
    "cases.1.title": "Tumba de Tutankamón",
    "cases.1.location": "Egipto 🇪🇬",
    "cases.1.desc": "El cambio climático ha hecho que cambien las condiciones de este sitio arqueológico. Un aumento en la humedad ha creado un ambiente propicio para el crecimiento de hongos que podrían dañar las pinturas y ornamentos de la tumba.",
    "cases.2.title": "Pompeya",
    "cases.2.location": "Italia 🇮🇹",
    "cases.2.desc": "La arqueología en Pompeya enfrenta una crisis continua de preservación, marcada por el rápido deterioro de sus estructuras expuestas a la intemperie, la humedad y el turismo masivo.",
    "cases.3.title": "Machu Picchu",
    "cases.3.location": "Perú 🇵🇪",
    "cases.3.desc": "El cambio climático y la gestión de turismo masivo son los retos mayores a los que tendrá que enfrentarse la ciudadela inca en los próximos años.",

    // Evolucion
    "evo.title1": "Evolución del Robot ",
    "evo.title2": "ARGOS",
    "evo.v1.title": "Prototipo V1",
    "evo.v1.desc": "Primer modelo conceptual utilizado para analizar la forma general del robot y sus posibilidades de exploración.",
    "evo.v2.title": "Prototipo V2",
    "evo.v2.desc": "Versión mejorada con ruedas más grandes, suspensión y mejor estabilidad para terrenos irregulares.",

    // Tecnologia
    "tech.title": "Tecnología",
    "tech.sensors.title": "Sensores y Plataformas",
    "tech.sensors.p1": "El robot integra sensores para analizar el entorno de las cuevas y garantizar la seguridad antes del ingreso humano.",
    "tech.sensors.p2": "Uno de los sensores evaluados es el sensor MQ-7 para detección de monóxido de carbono.",
    "tech.sensors.p3": "Compatible con Arduino y Raspberry Pi para monitoreo en tiempo real.",
    "tech.mq7.title": "🔬 ¿Por qué el sensor MQ-7?",
    "tech.mq7.p1": "Para comprobar la calidad del oxígeno se usan analizadores de pureza para gas o sensores de oxígeno disuelto, usando tecnologías como láseres (TDL) o fluorescencia.",
    "tech.mq7.p2": "Se optó por un sensor electroquímico: el Paradisetronic.com MQ-7, un módulo de sensor de CO a 5V con salida analógica y digital.",

    // Juego Section (proyecto)
    "game.title": "Juego Educativo",
    "game.p1": "Como parte de nuestro proyecto, también creamos un juego educativo diseñado para sensibilizar a una población más joven sobre la importancia de la arqueología y la preservación del patrimonio cultural.",
    "game.p2": "Este juego busca que los niños aprendan de forma interactiva y divertida sobre los desafíos que enfrentan los arqueólogos.",
    "game.cta": "Conoce el Juego del Robot",

    // Timeline
    "tl.title1": "Avances del ",
    "tl.title2": "Proyecto",
    "tl.subtitle": "Línea de tiempo de nuestro desarrollo",
    "tl.pending": "Pendiente",
    "tl.w1": "Organización del equipo de trabajo. Se da a conocer el enfoque de temporada, escuchando ideas de cada miembro.",
    "tl.w2": "Contextualización y asignación de funciones de consulta. Recopilación de información desde Google Académico.",
    "tl.w3": "Socialización sobre los diferentes problemas en excavaciones hoy día, enfocados hacia la arqueología y cuevas.",
    "tl.w4": "Análisis del enfoque del proyecto. Se plantea una solución desde lo innovador, tecnológico y la seguridad.",
    "tl.w5": "Retroalimentación por parte del arqueólogo. Se validan 4 problemáticas fundamentales en el proceso.",
    "tl.w6": "Llega la pista. Se procede al armado y cada una de las misiones. El grupo se separa en dos frentes.",
    "tl.w7": "Pista terminada. Elaboración de attachments y primeros lanzamientos. Inicio de prototipado.",
    "tl.w8": "Después de dos lanzamientos hay que modificar el attachment. Información adicional sobre otras tecnologías.",
    "tl.w9": "Mejora del attachment en el juego del robot. Determinación de tecnologías a emplear desde el proyecto.",
    "tl.w10": "Primeros resultados en el juego del robot. Investigación de sensores. Bot de desplazamiento terrestre.",
    "tl.w14": "Preparación de la presentación, cartelera y exposición para la competencia.",

    // Juego del Robot page
    "jr.title1": "Juego del ",
    "jr.title2": "Robot",
    "jr.subtitle": "Diseño, construcción y estrategia de nuestro robot",
    "jr.tab.construccion": "Construcción",
    "jr.tab.misiones": "Misiones",
    "jr.tab.attachments": "Attachments",
    "jr.tab.desarrollo": "Desarrollo Tecnológico",
    "jr.construccion.hardware": "Hardware",
    "jr.construccion.hardware.desc": "Describe los componentes de hardware utilizados: motores, estructura, materiales.",
    "jr.construccion.sensores": "Sensores",
    "jr.construccion.sensores.desc": "Detalla los sensores implementados y su función en el robot.",
    "jr.construccion.3d": "Diseño 3D",
    "jr.construccion.3d.desc": "Explica las piezas diseñadas en 3D, software utilizado y proceso de impresión.",
    "jr.misiones.estrategia": "Estrategia",
    "jr.misiones.estrategia.desc": "Describe la estrategia general del equipo para abordar las misiones del tapete.",
    "jr.misiones.plan": "Plan de Juego",
    "jr.misiones.plan.desc": "Detalla el plan de juego: orden de misiones, tiempo estimado, puntuación objetivo.",
    "jr.attachments.funcion": "Función",
    "jr.attachments.funcion.desc": "Explica la función de cada aditamento y qué misión resuelve.",
    "jr.attachments.diseno": "Diseño",
    "jr.attachments.diseno.desc": "Detalla el proceso de diseño de los attachments.",
    "jr.attachments.uso": "Uso en Misiones",
    "jr.attachments.uso.desc": "Describe cómo se utilizan los attachments durante el juego del robot.",
    "jr.desarrollo.software": "Software",
    "jr.desarrollo.software.desc": "Describe el entorno de programación, lenguajes y lógica utilizada.",
    "jr.desarrollo.hardware": "Hardware",
    "jr.desarrollo.hardware.desc": "Componentes tecnológicos adicionales del robot.",

    // Galeria
    "gal.title": "Galería",
    "gal.subtitle": "Momentos, logros y registros de CaliBots Kairos",
    "gal.all": "Todo",
    "gal.proyecto": "Proyecto",
    "gal.equipo": "Equipo",
    "gal.robot": "Robot",
    "gal.competencia": "Competencia",
    "gal.investigacion": "Investigación",

    // Contacto
    "ct.title": "Contacto",
    "ct.subtitle": "¿Quieres saber más? ¡Escríbenos!",
    "ct.form.title": "Envíanos un mensaje",
    "ct.form.name": "Nombre",
    "ct.form.name.ph": "Tu nombre",
    "ct.form.email": "Correo electrónico",
    "ct.form.email.ph": "tu@correo.com",
    "ct.form.message": "Mensaje",
    "ct.form.message.ph": "Escribe tu mensaje...",
    "ct.form.submit": "Enviar mensaje",
    "ct.info.title": "Información",
    "ct.info.school": "Colegio Comfandi El Prado",
    "ct.info.club": "Club de Robótica Calibots Kairos",
    "ct.info.city": "Cali, Colombia",
    "ct.social.title": "Redes Sociales",
    "ct.location.title": "Ubicación",
    "ct.location.map": "🗺️ Mapa de Google Maps aquí",
  },
  jp: {
    // Navbar
    "nav.inicio": "ホーム",
    "nav.quienes": "チーム紹介",
    "nav.proyecto": "革新プロジェクト",
    "nav.juego": "ロボットゲーム",
    "nav.galeria": "ギャラリー",
    "nav.contacto": "お問い合わせ",

    // Back button
    "back": "戻る",
    "back.home": "ホーム",

    // Index Hero
    "hero.badge": "シーズン UNEARTHED · FIRST LEGO League",
    "hero.title1": "洞窟を探検し、",
    "hero.title.highlight": "考古学者を守る",
    "hero.title2": "ロボティクス",
    "hero.subtitle1": "",
    "hero.subtitle2": " — 洞窟学と考古学の安全のために設計された探査ロボットをご紹介します",
    "hero.cta1": "ARGOSを知る",
    "hero.cta2": "チーム紹介",

    // Index Stats
    "stats.members": "メンバー",
    "stats.weeks": "作業週間",
    "stats.sensors": "搭載センサー",
    "stats.prototypes": "プロトタイプ",

    // Index ScrollStack
    "scroll.title1": "私たちの ",
    "scroll.title2": "FIRST LEGO League",
    "scroll.subtitle": "研究、ロボティクス、価値観、学びを統合した体験",
    "scroll.card1.title": "革新プロジェクト",
    "scroll.card1.desc": "ARGOSは地下考古学探査のリスクに関する実際の研究から生まれました。",
    "scroll.card2.title": "ロボットゲーム",
    "scroll.card2.desc": "UNEARTHEDシーズンの課題に対するロボティクスソリューションを設計・構築・プログラミングします。",
    "scroll.card3.title": "FIRST価値観",
    "scroll.card3.desc": "発見、革新、影響、包括性、チームワーク、楽しさが私たちの全てを導きます。",
    "scroll.card4.title": "チームの学び",
    "scroll.card4.desc": "各メンバーがシーズンを通して技術的、社会的、リーダーシップのスキルを成長させます。",

    // Index ¿Qué hacemos?
    "what.title1": "私たちの",
    "what.title2": "活動",
    "what.title3": "",
    "what.card1.title": "洞窟学と考古学",
    "what.card1.desc": "化石や歴史的遺物のある洞窟や自然の空洞を探索する際に考古学者が直面する課題を調査しています。",
    "what.card2.title": "プロジェクト ARGOS",
    "what.card2.desc": "考古学者が入る前に危険な区域を分析する地上探査ロボットを開発しています。暗闇での彼らの目となります。",
    "what.card3.title": "安全第一",
    "what.card3.desc": "私たちのロボットは有毒ガス、構造的不安定性、洞窟内の悪条件を検出するセンサーを搭載しています。",

    // Index Bento
    "bento.title1": "私たちの",
    "bento.title2": "強み",
    "bento.safe.title": "安全な探査",
    "bento.safe.desc": "ARGOSは考古学者が入る前に洞窟を分析し、目に見えない危険を検出します。",
    "bento.safe.label": "安全性",
    "bento.sensors.title": "先進センサー",
    "bento.sensors.desc": "有毒ガス、温度、湿度、構造的不安定性をリアルタイムで監視します。",
    "bento.sensors.label": "技術",
    "bento.research.title": "洞窟学と考古学",
    "bento.research.desc": "地下探査で専門家が直面する実際のリスクを調査しています。",
    "bento.research.label": "研究",
    "bento.team.title": "チームワーク",
    "bento.team.desc": "プログラミングからコミュニケーションまで、明確な役割で10人のメンバーが協力します。",
    "bento.team.label": "チーム",
    "bento.values.title": "FIRST価値観",
    "bento.values.desc": "発見、革新、影響、包括性、楽しさが全ての決定を導きます。",
    "bento.values.label": "価値観",
    "bento.robot.title": "探査ロボット",
    "bento.robot.desc": "LEGO SPIKE Primeで設計され、不整地を自律的にナビゲートするようプログラムされています。",
    "bento.robot.label": "ロボティクス",

    // Footer
    "footer.nav": "ナビゲーション",
    "footer.social": "ソーシャルメディア",
    "footer.rights": "全著作権所有。",
    "footer.club": "ロボティクスクラブ · コレヒオ・コンファンディ・エル・プラド",

    // Quienes Somos
    "qs.title1": "私たちに",
    "qs.title2": "ついて",
    "qs.subtitle": "CaliBots Kairosのチームをご紹介します",
    "qs.essence1": "私たちの",
    "qs.essence2": "エッセンス",
    "qs.essence.p1": "私たちはCaliBots Kairos、コロンビア・カリのFIRST LEGO League Challengeチームです。研究、ロボティクス、デザイン、チームワークを融合した提案で、コレヒオ・コンファンディ・エル・プラドを代表しています。私たちの名前「カイロス」は、学び、創造し、本当の挑戦に立ち向かう適切な瞬間を意味します。",
    "qs.essence.p2": "UNEARTHEDシーズンでは、具体的な問いからテクノロジーと遺産をつなぐことにしました：ロボティクスはどのように先に探査し、リスクを減らし、人間が入る前に情報を提供できるでしょうか？",
    "qs.team1": "私たちの",
    "qs.team2": "チーム",
    "qs.team3": "と",
    "qs.team4": "コーチ",
    "qs.team.drag.desktop": "ドラッグで回転 · ホバーで一時停止",
    "qs.team.drag.mobile": "スワイプで回転",
    "qs.journey1": "私たちの",
    "qs.journey2": "歩み",
    "qs.timeline.1.phase": "トレーニング",
    "qs.timeline.1.desc": "プログラミング、構築、FIRST価値観の研修。",
    "qs.timeline.2.phase": "準備",
    "qs.timeline.2.desc": "革新プロジェクトARGOSの開発とロボット設計。",
    "qs.timeline.3.phase": "大会",
    "qs.timeline.3.desc": "地域・全国FLLトーナメントへの参加。",
    "qs.values.title1": "FIRST価値観の",
    "qs.values.title2": "実践",
    "qs.values.subtitle": "各価値観をクリックして、私たちの実践方法をご覧ください",
    "qs.role.coach": "教師 / コーチ",
    "qs.role.member": "メンバー",

    // Valores FIRST
    "val.discovery": "発見",
    "val.innovation": "革新",
    "val.impact": "影響",
    "val.inclusion": "包括性",
    "val.teamwork": "チームワーク",
    "val.fun": "楽しさ",
    "val.discovery.desc": "新しいスキル、アイデア、コンセプトを探求します。",
    "val.innovation.desc": "創造性と粘り強さで問題を解決します。",
    "val.impact.desc": "学んだことを世界の改善に活かします。",
    "val.inclusion.desc": "互いを尊重し、違いを大切にします。",
    "val.teamwork.desc": "一緒に働くとき、私たちはより強くなります。",
    "val.fun.desc": "私たちは楽しみ、やることを祝います！",

    // ValorFIRST page
    "vf.notfound": "価値観が見つかりません",
    "vf.back": "戻る",
    "vf.subtitle": "FIRST価値観の実践",
    "vf.meaning": "この価値観の意味は？",
    "vf.apply": "CaliBots Kairosでの実践方法",
    "vf.evidence": "ビジュアルエビデンス",
    "vf.backqs": "チーム紹介に戻る",
    "vf.discovery.desc": "新しいスキル、アイデア、コンセプトを探求します。FIRST LEGO Leagueでは、発見がチームを駆り立て、実際の問題を調査し、創造的な解決策を見つけるエンジンです。",
    "vf.discovery.apply": "CaliBots Kairosでは、毎シーズンが新しい発見の機会です。ARGOSを通じて、洞窟学、考古学、科学者が洞窟で直面する課題の魅力的な世界を発見しました。専門家と調査し、博物館を訪問し、センサーと応用ロボティクスについて学びました。",
    "vf.discovery.quote": "「発見とは、誰もが見たものを見て、誰も考えなかったことを考えることだ。」— アルベルト・セント＝ジェルジ",
    "vf.innovation.desc": "創造性と粘り強さで問題を解決します。FIRST LEGO Leagueでのイノベーションとは、異なる考え方をし、以前存在しなかった解決策を生み出す勇気を持つことです。",
    "vf.innovation.apply": "ARGOSは一つの問いから生まれました：危険な洞窟で考古学者をどう守るか？基本的なV1プロトタイプから、より良いサスペンションとガスセンサーを備えたV2へと反復しました。エラーから学び、専門家のフィードバックを求めたため、各バージョンが改善されました。",
    "vf.innovation.quote": "「イノベーションはリーダーとフォロワーを区別する。」— スティーブ・ジョブズ",
    "vf.impact.desc": "学んだことを世界の改善に活かします。FIRST LEGO Leagueでは、インパクトは大会を超えます：コミュニティに真の変化を生み出すことです。",
    "vf.impact.apply": "私たちのプロジェクトは世界中の考古学者と洞窟探検家の安全に影響を与えることを目指しています。また、小さな子供たちが考古学遺産の保存の重要性を学べる教育ゲームも作りました。私たちの解決策が大会を超えることを望んでいます。",
    "vf.impact.quote": "「真のインパクトは、私たちが触れる命で測られる。」",
    "vf.inclusion.desc": "互いを尊重し、違いを大切にします。FIRST LEGO Leagueは多様性を称え、誰もが参加し貢献する機会に値すると信じています。",
    "vf.inclusion.apply": "CaliBots Kairosでは、各メンバーがユニークな貢献をします。経験に関係なく、全員のアイデアを大切にします。すべての声が聞かれ、すべての才能が活かされるよう努めています。チームの多様性が最大の強みです。",
    "vf.inclusion.quote": "「強さは違いにあり、類似性にはない。」— スティーブン・コヴィー",
    "vf.teamwork.desc": "一緒に働くとき、私たちはより強くなります。FIRST LEGO Leagueでは、個人の成果はありません：研究から最終プレゼンテーションまで、すべてをチームとして構築します。",
    "vf.teamwork.apply": "10人の生徒と2人のコーチが一つのユニットとして働きます。強みに応じてタスクを分担：調査する人、プログラムする人、設計・構築する人。毎週集まって進捗を共有し、一緒に決定を下します。ARGOSの成功はチーム全体の成功です。",
    "vf.teamwork.quote": "「私たち一人一人は、全員一緒ほど賢くない。」— ケン・ブランチャード",
    "vf.fun.desc": "私たちは楽しみ、やることを祝います！FIRST LEGO Leagueでは、学びはワクワクするものでなければなりません。楽しさは科学と技術への情熱を維持する燃料です。",
    "vf.fun.apply": "CaliBots Kairosでは、プロセスの各ステップで楽しんでいます。ブレインストーミングからロボットのテストまで、すべての瞬間が笑い、祝い、一緒に楽しむ機会です。楽しんでいるとき、より多く、より良く学べるからです。",
    "vf.fun.quote": "「楽しさは最も高度な研究形態である。」— アルバート・アインシュタイン",

    // Proyecto Innovador Hero
    "pi.badge": "革新プロジェクト · シーズン UNEARTHED",
    "pi.subtitle": "洞窟学の安全のための探査ロボット — 暗闇での考古学者の目",

    // FiveKeys
    "fk.title1": "ARGOSの",
    "fk.title2": "5つのキー",
    "fk.what": "何を",
    "fk.what.text": "ARGOSと呼ばれる地上探査ロボット。人間が入る前に洞窟と自然の空洞を分析するセンサーを装備。",
    "fk.why": "なぜ",
    "fk.why.text": "考古学者は歴史的価値のある洞窟を探索する際、崩落、有毒ガス、構造的に不安定な区域などのリスクに直面します。",
    "fk.how": "どのように",
    "fk.how.text": "ARGOSはMQ-7（一酸化炭素）などのセンサー、カメラ、Arduinoなどのプラットフォームを統合してリアルタイムで条件を監視します。",
    "fk.where": "どこで",
    "fk.where.text": "条件が人にとって危険な洞窟、洞穴、地下の考古学遺跡で。",
    "fk.impact": "インパクト",
    "fk.impact.text": "人命を守り、文化遺産を保存し、考古学探査における技術アクセスを民主化します。",

    // Justificacion
    "just.title": "正当性",
    "just.p1": "現在、考古学的遺物の探査や鉱物検出に貢献するさまざまな技術ツールが存在します。これらのツールは鉱業では（経済的な見返りにより）非常にアクセスしやすいですが、考古学ではアクセスが困難です。",
    "just.p2": "ARGOSは技術を通じて、この探査に貢献するだけでなく、アマチュアや初心者からプロまで、さまざまな考古学者にとってアクセスしやすく、考古学分野での技術ツールの使用を民主化します。",

    // Concepto
    "con.title1": "中心概念：",
    "con.title2": "洞窟学",
    "con.p1": "洞窟学（ギリシャ語のσπηλαιου spelaiou「洞窟」と-logía「論」に由来）は、地下の自然の空洞を探索し研究する実践です。",
    "con.p2": "ギリシャ語の語源から、洞窟学は地質学に基づいて自然の空洞（鍾乳石やスペレオリス）の発達、進化、地質学的形成を分析する科学的研究と考えられています。",
    "con.p3": "地質学的観点からは、地形学の一部を形成し、水文地質学を支援します。",
    "con.excavation.title": "⛏️ 洞窟での発掘",
    "con.excavation.desc": "溝の崩壊、崩落、転落、荷物の落下、危険な大気、架空電線との接触が主なリスクです。",

    // Nombre
    "nom.title": "名前の意味",
    "nom.argos.title": "ARGOS 👁️",
    "nom.argos.desc": "全てを見るギリシャ神話の百眼の巨人を指します。私たちのロボットは危険な区域で考古学者の目になることを目指しています。",
    "nom.kairos.title": "KAIROS ⏳",
    "nom.kairos.desc": "カイロスは「適切な時」を意味する古代ギリシャ語です。ARGOSとカイロスは共に、革新するためのビジョンと完璧なタイミングを表しています。",

    // Objetivos
    "obj.title": "目標",
    "obj.general.title": "総合目標",
    "obj.general.desc": "未探索の洞窟などのアクセス困難な区域での探査を可能にする地上ボットの開発を通じて、考古学者の探査と安全に貢献すること。",
    "obj.specific.title": "具体的目標",
    "obj.specific.1": "現在の考古学者の探査における主要な問題を分析し、技術的に直接介入できるものを特定する。",
    "obj.specific.2": "考古学者のための探査困難区域の探索、検証、分析を可能にする地上ボットを設計する。",
    "obj.specific.3": "考古学者の安全な条件を保証するためにAIを実装した電動無線操縦地上ボットを実装する。",

    // Problematicas
    "prob.title1": "考古学の",
    "prob.title2": "問題点",
    "prob.subtitle": "地下探査で考古学者が直面する課題",
    "prob.cultural.area": "文化",
    "prob.cultural.desc": "ここで根本的な倫理的課題が生じます：地域コミュニティが神聖と見なす考古学遺跡への介入から、人間の遺骨や祖先の遺物の取り扱いは技術的プロセスだけでなく、人々のアイデンティティと信仰に直接影響を与える行動です。",
    "prob.economic.area": "経済",
    "prob.economic.desc": "これも大きな課題の一つです。鉱業分野では見返りにより良い投資が行われますが、考古学では経済的見返りが生み出せるものが限られるため、多くの投資がありません。",
    "prob.security.area": "安全",
    "prob.security.desc": "発掘現場では、降水による脆い材料、アクセス困難な場所、さまざまなガスによる汚染された空気の条件があり、呼吸器の問題を引き起こします。",
    "prob.tech.area": "技術",
    "prob.tech.desc": "LIDARや地中レーダー（GPR）などのツールは存在しますが、これらの技術は高密度の植生、極端な湿度、高い鉱化度の土壌を持つ地形で困難に直面します。",
    "prob.from": "",
    "prob.mining.title": "鉱業がもたらす問題とは？",
    "prob.mining.1": "砂漠化：森林破壊、浸食、肥沃な土壌の喪失",
    "prob.mining.2": "地形の変更、視覚的影響、斜面プロセスのダイナミクスの変化",
    "prob.mining.3": "流出と浸食の増加",
    "prob.mining.4": "地下水位の変化",

    // Paleontologia
    "paleo.title": "古生物学",
    "paleo.p1": "化石は過去の貴重な記録です。何千年、何億年も前の生物についての詳細を保存しています。その研究は時間の経過に伴う種の進化を理解するのに役立ちます。",
    "paleo.p2": "また、私たちの祖先を含む、ずっと昔に絶滅した種の食事や移動パターンを明らかにすることもできます。",
    "paleo.social.title": "社会的インパクト",
    "paleo.social.p1": "考古学は社会に重要な影響を与えます。過去の人々がどのように暮らしていたかを知り、私たちの歴史をより良く理解するのに役立つからです。",
    "paleo.social.p2": "多くの考古学遺跡は観光客を引き付け、地域コミュニティに仕事と利益を生み出すことができます。",

    // Casos Reales
    "cases.title1": "世界の",
    "cases.title2": "問題",
    "cases.subtitle": "革新の必要性を示す実際のケース",
    "cases.1.title": "ツタンカーメンの墓",
    "cases.1.location": "エジプト 🇪🇬",
    "cases.1.desc": "気候変動により、この考古学遺跡の条件が変化しました。湿度の上昇により、墓の絵画や装飾品を損傷する可能性のあるカビの成長に適した環境が作られました。",
    "cases.2.title": "ポンペイ",
    "cases.2.location": "イタリア 🇮🇹",
    "cases.2.desc": "ポンペイの考古学は、風雨、湿度、大量の観光にさらされた構造物の急速な劣化に特徴づけられる、継続的な保存危機に直面しています。",
    "cases.3.title": "マチュピチュ",
    "cases.3.location": "ペルー 🇵🇪",
    "cases.3.desc": "気候変動と大量観光の管理が、今後数年間でインカの城塞が直面しなければならない最大の課題です。",

    // Evolucion
    "evo.title1": "ロボットの進化 ",
    "evo.title2": "ARGOS",
    "evo.v1.title": "プロトタイプ V1",
    "evo.v1.desc": "ロボットの一般的な形状と探査の可能性を分析するために使用された最初の概念モデル。",
    "evo.v2.title": "プロトタイプ V2",
    "evo.v2.desc": "不整地のためにより大きな車輪、サスペンション、より良い安定性を備えた改良版。",

    // Tecnologia
    "tech.title": "技術",
    "tech.sensors.title": "センサーとプラットフォーム",
    "tech.sensors.p1": "ロボットはセンサーを統合して洞窟環境を分析し、人間が入る前に安全を保証します。",
    "tech.sensors.p2": "評価されたセンサーの1つは、一酸化炭素検出用のMQ-7センサーです。",
    "tech.sensors.p3": "リアルタイム監視のためにArduinoとRaspberry Piに対応しています。",
    "tech.mq7.title": "🔬 なぜMQ-7センサーなのか？",
    "tech.mq7.p1": "酸素品質を確認するために、レーザー（TDL）や蛍光などの技術を使用したガス純度分析器や溶存酸素センサーが使用されます。",
    "tech.mq7.p2": "電気化学センサーが選択されました：Paradisetronic.com MQ-7、アナログおよびデジタル出力を持つ5V COセンサーモジュール。",

    // Juego Section (proyecto)
    "game.title": "教育ゲーム",
    "game.p1": "プロジェクトの一環として、考古学と文化遺産の保存の重要性について若い世代に意識を高めるための教育ゲームも作りました。",
    "game.p2": "このゲームは、子供たちが考古学者が直面する課題についてインタラクティブで楽しい方法で学べるようにすることを目指しています。",
    "game.cta": "ロボットゲームを見る",

    // Timeline
    "tl.title1": "プロジェクトの",
    "tl.title2": "進捗",
    "tl.subtitle": "開発のタイムライン",
    "tl.pending": "保留中",
    "tl.w1": "チームの組織化。シーズンの焦点を紹介し、各メンバーのアイデアを聞きました。",
    "tl.w2": "状況把握と調査機能の割り当て。Google Scholarからの情報収集。",
    "tl.w3": "今日の発掘における様々な問題について、考古学と洞窟に焦点を当てた共有。",
    "tl.w4": "プロジェクトのアプローチ分析。革新的、技術的、安全の観点からソリューションを提案。",
    "tl.w5": "考古学者からのフィードバック。プロセスにおける4つの基本的な問題を検証。",
    "tl.w6": "トラックが到着。組み立てと各ミッションの進行。グループは2つのフロントに分かれました。",
    "tl.w7": "トラック完成。アタッチメントの作成と最初のランチ。プロトタイピングの開始。",
    "tl.w8": "2回のランチ後、アタッチメントの修正が必要。他の技術に関する追加情報。",
    "tl.w9": "ロボットゲームのアタッチメントの改善。プロジェクトで使用する技術の決定。",
    "tl.w10": "ロボットゲームでの最初の結果。センサーの調査。地上移動ボット。",
    "tl.w14": "大会に向けたプレゼンテーション、ポスター、展示の準備。",

    // Juego del Robot page
    "jr.title1": "ロボット",
    "jr.title2": "ゲーム",
    "jr.subtitle": "ロボットの設計、構築、戦略",
    "jr.tab.construccion": "構築",
    "jr.tab.misiones": "ミッション",
    "jr.tab.attachments": "アタッチメント",
    "jr.tab.desarrollo": "技術開発",
    "jr.construccion.hardware": "ハードウェア",
    "jr.construccion.hardware.desc": "使用したハードウェアコンポーネント：モーター、構造、材料について説明します。",
    "jr.construccion.sensores": "センサー",
    "jr.construccion.sensores.desc": "ロボットに実装されたセンサーとその機能を詳述します。",
    "jr.construccion.3d": "3Dデザイン",
    "jr.construccion.3d.desc": "3Dで設計されたパーツ、使用したソフトウェア、印刷プロセスを説明します。",
    "jr.misiones.estrategia": "戦略",
    "jr.misiones.estrategia.desc": "マットのミッションに取り組むためのチームの全体戦略を説明します。",
    "jr.misiones.plan": "ゲームプラン",
    "jr.misiones.plan.desc": "ゲームプランの詳細：ミッションの順序、推定時間、目標スコア。",
    "jr.attachments.funcion": "機能",
    "jr.attachments.funcion.desc": "各アタッチメントの機能とどのミッションを解決するかを説明します。",
    "jr.attachments.diseno": "デザイン",
    "jr.attachments.diseno.desc": "アタッチメントの設計プロセスを詳述します。",
    "jr.attachments.uso": "ミッションでの使用",
    "jr.attachments.uso.desc": "ロボットゲーム中にアタッチメントがどのように使用されるかを説明します。",
    "jr.desarrollo.software": "ソフトウェア",
    "jr.desarrollo.software.desc": "プログラミング環境、言語、使用したロジックを説明します。",
    "jr.desarrollo.hardware": "ハードウェア",
    "jr.desarrollo.hardware.desc": "ロボットの追加技術コンポーネント。",

    // Galeria
    "gal.title": "ギャラリー",
    "gal.subtitle": "CaliBots Kairosの瞬間、成果、記録",
    "gal.all": "すべて",
    "gal.proyecto": "プロジェクト",
    "gal.equipo": "チーム",
    "gal.robot": "ロボット",
    "gal.competencia": "大会",
    "gal.investigacion": "研究",

    // Contacto
    "ct.title": "お問い合わせ",
    "ct.subtitle": "もっと知りたいですか？ご連絡ください！",
    "ct.form.title": "メッセージを送る",
    "ct.form.name": "お名前",
    "ct.form.name.ph": "あなたの名前",
    "ct.form.email": "メールアドレス",
    "ct.form.email.ph": "your@email.com",
    "ct.form.message": "メッセージ",
    "ct.form.message.ph": "メッセージを入力してください...",
    "ct.form.submit": "メッセージを送信",
    "ct.info.title": "情報",
    "ct.info.school": "コレヒオ・コンファンディ・エル・プラド",
    "ct.info.club": "ロボティクスクラブ Calibots Kairos",
    "ct.info.city": "カリ、コロンビア",
    "ct.social.title": "ソーシャルメディア",
    "ct.location.title": "所在地",
    "ct.location.map": "🗺️ Google マップはこちら",
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("es");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "es" ? "en" : prev === "en" ? "jp" : "es"));
  }, []);

  const t = useCallback(
    (key: string) => translations[lang][key] ?? key,
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
