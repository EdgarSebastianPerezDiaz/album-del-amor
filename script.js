/*
 * Experiencia romántica local-first.
 * Todo vive en JS puro para que el proyecto funcione abriendo index.html.
 */

const APP_CONFIG = {
  startDate: new Date('2026-06-07T19:00:00'),
  musicPath: 'assets/music/',
  imagePath: 'assets/img/',
  defaultTrackIndex: 0,
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
};

const APP_DATA = {
  songs: [
    { title: 'Mi Suerte', file: 'Mi Suerte.mp3' },
    { title: 'Estar Contigo', file: 'Alex Ubago - Estar contigo ft. La oreja de Van Gogh (Videoclip Oficial).mp3' },
    { title: 'Solo Para Ti', file: 'Camila - Solo Para Ti (Alt. Version).mp3' },
    { title: 'Amor del Bueno', file: 'Reyli Barba - Amor del Bueno (Video).mp3' },
    { title: 'Para Tu Amor', file: 'Juanes - Para Tu Amor (Official Music Video).mp3' },
    { title: 'Prometo', file: 'Fonseca - Prometo (LyricLetra).mp3' },
    { title: 'Lo poco que yo quiero', file: 'Morat, Silvestre Dangond - Lo poco que yo quiero (Video Oficial).mp3' },
    { title: 'Me Cambiaste la Vida', file: 'Río Roma - Me Cambiaste la Vida (Videoclip).mp3' },
    { title: 'Sabrás', file: 'Sabrás, Herencia de Timbiquí - Video Oficial.mp3' },
    { title: 'The Reason', file: 'Hoobastank - The Reason (Official Music Video).mp3' },
  ],
  timeline: [
    {
      date: '07 junio 2026 - 7:00 p.m.',
      title: 'El si que nos cambio para siempre',
        story: '"Hay momentos que se quedan como un acorde largo: se repiten dentro del pecho y nunca terminan. Contigo cada nota tiene sentido, y esa tarde en que dije que si, todo sonaba distinto —como si el mundo entero hubiera afinado para nuestras voces. Guardare siempre ese instante como una cancion que se repite en loop, suave y eterna."',
      image: '6.jpeg',
      fallback: 'Nuestro si',
    },
    {
      date: 'Nuestras madrugadas',
      title: 'Conversaciones que nos hicieron hogar',
      story: '"A las tres de la manana tu voz era abrigo, y cada mensaje tuyo parecia una puerta abierta para seguirnos eligiendo aun con los ojos cansados."',
      image: '1.jpeg',
      fallback: 'Madrugada',
    },
    {
      date: 'Tunja y nuestros lugares',
      title: 'Misas, biblioteca y promesas',
      story: '"Entre iglesias, biblioteca y calles nuevas, aprendi que amar tambien es caminar despacio, reir bajito y sentir que lo simple se vuelve eterno."',
      image: '12.jpeg',
      fallback: 'Tunja',
    },
    {
      date: 'Nuestro presente',
      title: 'Una historia que sigue creciendo',
      story: '"Si el tiempo insiste en avanzar, que avance con nosotros; porque contigo hasta el futuro parece una carta de amor escrita sin final."',
      image: '20.jpeg',
      fallback: 'Presente',
    },
  ],
  gallery: [
    {
      date: 'Foto 01',
      title: 'Foto 01',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '1.jpeg',
      fallback: 'Foto 01',
    },
    {
      date: 'Foto 02',
      title: 'Foto 02',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '2.jpeg',
      fallback: 'Foto 02',
    },
    {
      date: 'Foto 03',
      title: 'Foto 03',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '3.jpeg',
      fallback: 'Foto 03',
    },
    {
      date: 'Foto 04',
      title: 'Foto 04',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '4.jpeg',
      fallback: 'Foto 04',
    },
    {
      date: 'Foto 05',
      title: 'Foto 05',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '5.jpeg',
      fallback: 'Foto 05',
    },
    {
      date: 'Foto 06',
      title: 'Foto 06',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '6.jpeg',
      fallback: 'Foto 06',
    },
    {
      date: 'Foto 07',
      title: 'Foto 07',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '7.jpeg',
      fallback: 'Foto 07',
    },
    {
      date: 'Foto 08',
      title: 'Foto 08',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '8.jpeg',
      fallback: 'Foto 08',
    },
    {
      date: 'Foto 09',
      title: 'Foto 09',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '9.jpeg',
      fallback: 'Foto 09',
    },
    {
      date: 'Foto 10',
      title: 'Foto 10',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '10.jpeg',
      fallback: 'Foto 10',
    },
    {
      date: 'Foto 11',
      title: 'Foto 11',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '11.jpeg',
      fallback: 'Foto 11',
    },
    {
      date: 'Foto 12',
      title: 'Foto 12',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '12.jpeg',
      fallback: 'Foto 12',
    },
    {
      date: 'Foto 13',
      title: 'Foto 13',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '13.jpeg',
      fallback: 'Foto 13',
    },
    {
      date: 'Foto 14',
      title: 'Foto 14',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '14.jpeg',
      fallback: 'Foto 14',
    },
    {
      date: 'Foto 15',
      title: 'Foto 15',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '15.jpeg',
      fallback: 'Foto 15',
    },
    {
      date: 'Foto 16',
      title: 'Foto 16',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '16.jpeg',
      fallback: 'Foto 16',
    },
    {
      date: 'Foto 17',
      title: 'Foto 17',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '17.jpeg',
      fallback: 'Foto 17',
    },
    {
      date: 'Foto 18',
      title: 'Foto 18',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '18.jpeg',
      fallback: 'Foto 18',
    },
    {
      date: 'Foto 19',
      title: 'Foto 19',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '19.jpeg',
      fallback: 'Foto 19',
    },
    {
      date: 'Foto 20',
      title: 'Foto 20',
      caption: 'Espacio reservado para el enunciado de esta foto.',
      image: '20.jpeg',
      fallback: 'Foto 20',
    },
  ],
  reasons: [
    'Porque tu manera de existir vuelve más suave incluso los días difíciles.',
    'Porque cuando sonríes, el mundo parece quedarse en silencio para verte mejor.',
    'Porque contigo aprendí que el amor puede sentirse elegante, íntimo y sereno al mismo tiempo.',
    'Porque tus palabras tienen el poder de volver casa cualquier lugar.',
    'Porque incluso en lo pequeño siempre dejas algo bonito.',
    'Porque tu mirada tiene la capacidad de cambiar el clima de un día entero.',
    'Porque contigo cada plan parece una promesa y cada recuerdo, un tesoro.',
    'Porque me inspiras a ser más tierno, más atento y más valiente.',
    'Porque tu forma de amar se siente real, cálida y profundamente humana.',
    'Porque cada vez que te pienso, algo dentro de mí se ordena.',
    'Porque contigo el futuro deja de dar miedo y empieza a ilusionar.',
    'Porque te amo en una cantidad que no cabe en una sola razón.',
  ],
  memories: [
    {
      date: '07 junio 2026',
      title: 'El primer sí',
      description: 'La tarjeta se abre como un pequeño cofrecito: esa fue la puerta que cambió el mapa entero.',
      image: 'memory-01.svg',
      fallback: 'Sí',
    },
    {
      date: '11 junio 2026',
      title: 'La tarde infinita',
      description: 'Una tarde que se extendió dentro del pecho mucho más de lo que dura el reloj.',
      image: 'memory-02.svg',
      fallback: 'Tarde',
    },
    {
      date: '18 junio 2026',
      title: 'La risa compartida',
      description: 'Hay momentos en los que reírse juntos se vuelve una forma de decir te quiero sin palabras.',
      image: 'memory-03.svg',
      fallback: 'Risa',
    },
    {
      date: '23 junio 2026',
      title: 'La foto favorita',
      description: 'Esa imagen merece abrirse despacio porque ahí vive una versión preciosa de nosotros.',
      image: 'memory-04.svg',
      fallback: 'Foto',
    },
    {
      date: '30 junio 2026',
      title: 'El detalle inesperado',
      description: 'No era grande, pero fue suficiente para recordarme que el amor también se escribe en miniaturas.',
      image: 'memory-05.svg',
      fallback: 'Detalle',
    },
    {
      date: '07 julio 2026',
      title: 'El primer mes',
      description: 'Este bloque guarda la emoción de celebrar algo chiquito en tiempo, enorme en significado.',
      image: 'memory-06.svg',
      fallback: 'Mes',
    },
  ],
  dreams: [
    'Viajar contigo y convertir cada ciudad en una postal con nuestro idioma secreto.',
    'Despertar a tu lado con música suave, café y una ventana abierta al futuro.',
    'Celebrar aniversarios con cartas, fotos nuevas y un montón de recuerdos viejos.',
    'Reírnos de nuestras propias anécdotas y descubrir que el tiempo nos volvió más cómplices.',
    'Seguir construyendo una historia donde lo cotidiano también se sienta extraordinario.',
    'Guardar cada versión de nosotros como si fueran capítulos de una novela bonita.',
  ],
  poems: [
    'Poema I — Mañanas que elegimos:\nDespertar contigo no es un deseo, es mi proyecto favorito. Imagino cafés compartidos, ventanas que se abren al mismo sol y la costumbre de decirte buenos días hasta que la vida nos lo haga automático. Te quiero para las mañanas que no se apresuran.',
    'Poema II — Mapas con tu nombre:\nTe prometo giras sin prisa, escapadas sin itinerario y volver siempre a la misma esquina donde tus manos me reconocen. Llevaré tu risa en la maleta y construiremos recuerdos que sepan a regreso.',
    'Poema III — La casa de los pequeños milagros:\nQuiero un rincón con plantas, una mesa donde escribir cartas y un patio con dos perros que confundan nuestros pasos con alegría. Allí haremos de lo cotidiano algo sagrado, y cada tarde será un poema más en nuestra historia.',
    'Poema IV — Aprender y envejecer contigo:\nPrometo aprender tus canciones, tus silencios y las recetas que te abrazan. Prometo equivocarme a tu lado y perdonarte despacio; prometo envejecer siendo tu compañero de aventuras y platillos compartidos.',
    'Poema V — Promesas simples, firmes:\nNo prometo un mundo perfecto, pero sí días llenos de atención: responder tus mensajes aunque esté ocupado, sorprenderte con flores sin fecha, y construir planes que respeten tus sueños tanto como los míos.',
    'Poema VI — Futuro a dos voces:\nQuiero que hablemos del mañana como se habla del postre favorito: con ganas y sin apuro. Quiero inventar tradiciones, aprender de tus miedos y celebrar tus victorias; quiero ser el lugar al que siempre quieras volver.',
  ],
  loveLetters: [
    {
      title: 'Carta I - El destino nos hizo jurados',
      text: 'Dicen que el destino no avisa, que llega vestido de casualidad, quizas por eso escogio un salon de votacion para presentarnos, como si la democracia misma necesitara testigos de lo que iba a nacer ahi. Llegaste con una sonrisa que parecia haber sido guardada durante anos solo para ese dia, y una mirada que hizo que las urnas, las actas y los formularios perdieran toda su importancia. Yo, que apenas te conocia, ya buscaba pretextos para estar cerca, para escuchar tu voz, para molestarte con tus letras torcidas de maestra que ensena a los ninos a escribir bonito pero que a mi me hacia reir con ternura. Tal vez ahi, entre firmas y listas de sufragantes, el universo decidio que ese seria el primer renglon de nuestra historia.',
    },
    {
      title: 'Carta II - Las madrugadas de Instagram',
      text: 'Hubo un tiempo en que las dos y las tres de la manana dejaron de ser horas de insomnio para convertirse en horas nuestras, ya que el sueno no lograba competir con las ganas de seguir hablando. Cada notificacion se volvio una pequena fiesta, cada audio tuyo una melodia que yo guardaba como quien guarda algo valioso en un cofre invisible. Quizas nunca entendi bien como el cansancio se transformaba en felicidad apenas veia tu nombre en la pantalla, pero asi fue, asi ocurrio sin que yo lo planeara: esperar tus mensajes se convirtio en mi manera favorita de esperar la vida.',
      image: '1.jpeg',
    },
    {
      title: 'Carta III - La primera cita',
      text: 'El tiempo, esa cosa que normalmente pesa tanto, decidio volverse liquido esa tarde, y se nos escapo entre las manos sin que lo notaramos, ya que hablar contigo nunca se sintio como hablar sino como reconocer algo que ya conocia de otra vida. Ese dia te tome de la mano, y desde entonces decidi, casi sin decirlo, que no pensaba soltarla. Tal vez fue ahi, en ese gesto tan simple, donde empezo de verdad todo lo demas.',
      image: '2.jpeg',
    },
    {
      title: 'Carta IV - El primer beso',
      text: 'Hubo una noche que anhele tanto que cuando por fin llego, casi no supe como sostenerla entre los brazos, quizas porque los deseos cumplidos siempre asustan un poco antes de volverse alegria. Ese beso que tanto imagine se sintio como si el aire mismo se hubiera puesto de acuerdo para quedarse quieto un segundo, solo para nosotros. Por fin pude abrazarte, acariciarte, sentir que la distancia entre lo imaginado y lo real podia cerrarse con un solo instante. Esa noche no fue una noche mas: fue la noche en que empezo a escribirse otra parte de esta historia.',
      image: '3.jpeg',
    },
    {
      title: 'Carta V - La primera misa juntos',
      text: 'Hay lugares que cargan un peso distinto, y la iglesia siempre ha sido, para mi, uno de esos sitios donde todo se vuelve mas real, mas importante. Ir a misa contigo por primera vez fue como presentarte ante lo que mas respeto, ya que estar ahi, cerca de ti, en silencio compartido, me hizo sentir que por fin tenia a la mujer indicada en el lugar indicado. Quizas no hicieron falta palabras esa manana, porque el simple hecho de estar juntos en ese espacio ya era una oracion completa.',
      image: '4.jpeg',
    },
    {
      title: 'Carta VI - Tunja, tu salon, tu saco',
      text: 'Fui a Tunja con la excusa de un trabajo de la universidad que, al final, deje sin terminar, ya que verte de lejos en tu salon de clase, tan juiciosa, tan hermosa sin proponerselo, me parecio mucho mas importante que cualquier nota academica. Te regale el saco que mas me gustaba usar, aquel que sentia como una segunda piel, porque queria que tuvieras una parte de mi cerca cuando yo no pudiera estarlo. Quizas fue una manera de decirte, sin decirlo, que ya eras de lo mas importante en mi vida.',
      image: '5.jpeg',
    },
    {
      title: 'Carta VII - El dia que te pedi que fueras mi novia',
      text: 'Lo anhele tanto que lo planee con la misma dedicacion con la que se planea algo sagrado. Le dije a mi corazon que ese era el momento, y le crei. Te escribi una carta acompanada de canciones de Morat, porque a veces las palabras propias necesitan ayuda de otras voces para decir lo que sienten. Pasaste todo el dia conmigo, con mi familia, compartiendo risas y nervios, mientras yo, por dentro, temblaba como quien esta a punto de cruzar un puente importante. Tal vez nunca estuve tan nervioso en mi vida, pero tambien nunca estuve tan seguro de algo.',
      image: '6.jpeg',
    },
    {
      title: 'Carta VIII - El lugar, el llanto, el alma llena',
      text: 'Cuentame tu que recuerdas de ese dia, porque yo lo llevo grabado como una fotografia que no se borra: el lugar fue importante, todo lo fue, pero sobre todo lo fuiste tu. Verte llorar, no de tristeza sino de esas lagrimas que solo salen cuando el corazon esta demasiado lleno para quedarse callado, fue quizas el instante mas humano que he vivido contigo. Pasar todo el dia a tu lado me lleno el alma de una forma que todavia hoy me cuesta explicar con palabras exactas.',
      image: '7.jpeg',
    },
    {
      title: 'Carta IX - El lugar favorito y la comida espectacular',
      text: 'Ese mismo dia, como si el universo quisiera regalarnos una jornada completa, terminamos en nuestro lugar favorito, compartiendo una comida que supo distinta, mas especial, ya que todo lo que como contigo sabe distinto. Estaba asombrado de que todo se hubiera dado tal cual lo habia imaginado, y mas asombrado aun de poder compartir ese rato tranquilo con la mujer que amo. Quizas la felicidad simple, la de una comida y una conversacion, es la mas dificil de olvidar.',
      image: '8.jpeg',
    },
    {
      title: 'Carta X - Risas de toda una semana',
      text: 'Anhelo verte todas las veces que la vida me lo permite, ya que cada encuentro contigo se ha convertido en de mis dias mas felices, incluso los que compartimos con tu mama entre charlas y sobremesas. Conocer a tus perritos, jugar con ellos, verlos correr hacia ti como si supieran que eres su persona favorita del mundo, me enseno que el amor tambien se mide en esas pequenas alegrias compartidas, en las risas que se acumulan sin que nos demos cuenta, semana tras semana.',
      image: '9.jpeg',
    },
    {
      title: 'Carta XI - El primer helado',
      text: 'Un domingo cualquiera se volvio memorable solo porque estuvimos juntos, compartiendo un helado que quizas no recuerdo de que sabor era, pero si recuerdo tu risa mientras lo comiamos. Tal vez el amor no necesita grandes escenarios: a veces basta un helado y una tarde de domingo para sentir que todo esta bien, que todo esta en su lugar.',
      image: '10.jpeg',
    },
    {
      title: 'Carta XII - Segundo viaje a Tunja',
      text: 'Volvi a Tunja, esta vez para conocer tu universidad, tu biblioteca, los rincones donde te vuelves tu misma sin que nadie te mire. Escuche tus historias, conoci tus lugares favoritos, y entendi que cada espacio que me mostrabas era, en realidad, un pedazo de tu memoria que decidias compartir conmigo. Quizas no hay regalo mas grande que alguien abriendote las puertas de sus recuerdos.',
      image: '11.jpeg',
    },
    {
      title: 'Carta XIII - La biblioteca, tu belleza, tu cercania',
      text: 'Estar contigo en la biblioteca de tu universidad, admirando tu belleza sin necesidad de decir nada, sintiendote cerca mientras el silencio del lugar nos envolvia, fue de esos momentos que se quedan grabados como una fotografia importante. Me gusta leer, siempre me ha gustado, y estar con la persona indicada en uno de los sitios mas importantes para mi fue como si dos partes de mi vida se hubieran encontrado por fin en un mismo lugar.',
      image: '12.jpeg',
    },
    {
      title: 'Carta XIV - El atardecer que cerro el viaje',
      text: 'Terminamos ese viaje con una vista de atardecer que parecia pintada solo para nosotros, entre iglesias hermosas donde oramos juntos, entre sushi y pizza compartidos como quien comparte mas que comida, y con nuestros primeros collares comprados como simbolo de algo que ya no tenia vuelta atras. Hubo un momento en que te puse nerviosa, ya que algo imprevisto ocurrio mientras jugabamos, pero recuerdo que me calme solo con sentirte cerca, solo con saber que estabas a mi lado. Quizas asi funciona esto: contigo hasta los imprevistos se sienten mas livianos.',
      image: '13.jpeg',
    },
    {
      title: 'Carta XV - La excusa de visitar a mi suegra',
      text: 'Siempre anhelo ir a visitar a tu mama, ir a recogerla, y si soy honesto, se que esa es apenas una excusa hermosa para estar mas cerca de ti. Tal vez no hay estrategia mas sincera que esa: inventar motivos pequenos para no dejar de verte.',
      image: '14.jpeg',
    },
    {
      title: 'Carta XVI - El camino tarde por hablar de mas',
      text: 'Jajaja, tambien recuerdo esos caminos a recoger a tu mama donde el tiempo se nos iba entre risas y conversaciones, y a veces llegabamos tarde solo por no querer dejar de hablar. Quizas la impuntualidad, cuando es por hablar contigo, deja de ser un defecto y se vuelve una prueba mas de que no me canso de tu voz.',
      image: '15.jpeg',
    },
    {
      title: 'Carta XVII - Misa, pareja ideal, y unas medias por unos botines',
      text: 'Fuimos a misa una vez mas, y esa manana nos vimos como la pareja ideal que aun hoy seguimos siendo. Despues, entre risas, salimos a comprar unas medias porque tus botines nuevos te habian dejado heridas en los pies, y ese detalle tan pequeno, tan humano, tambien se volvio parte de nuestra historia: hasta el dolor compartido, cuando se resuelve juntos, se convierte en anecdota bonita.',
      image: '16.jpeg',
    },
    {
      title: 'Carta XVIII - Poesia pura I',
      text: 'Tal vez el amor no se explica, solo se vive, y contigo he vivido instantes que se sienten como versos escritos por alguien que nos observa desde lejos. Tu risa tiene la costumbre de llegar sin avisar y quedarse instalada en mi pecho durante dias. Ya que cada momento contigo se siente prestado del tiempo, como si la vida nos regalara minutos extra solo para nosotros.',
      image: '17.jpeg',
    },
    {
      title: 'Carta XIX - Poesia pura II',
      text: 'Quizas nadie me explico nunca que el amor tambien huele a mananas compartidas, a mensajes de buenos dias, a la certeza tranquila de que hay alguien pensando en uno incluso en el silencio. Contigo aprendi que la felicidad no siempre grita, a veces solo susurra, y ese susurro se parece mucho a tu nombre.',
      image: '18.jpeg',
    },
    {
      title: 'Carta XX - Poesia pura III',
      text: 'Ya que el tiempo insiste en pasar, prefiero que pase contigo, entre risas, entre misas, entre viajes a Tunja y helados de domingo. Tal vez lo magico de esta historia no esta en los grandes gestos sino en la suma silenciosa de todos los dias pequenos que decidimos compartir sin darnos cuenta de que estabamos construyendo algo que ya no se puede deshacer.',
      image: '19.jpeg',
    },
    {
      title: 'Carta XXI - El futuro que espero contigo',
      text: 'Quizas todavia no se como se ve el futuro con exactitud, pero se que quiero que tenga tu risa dentro, tus perritos corriendo por algun patio, tu mama cerca, tus historias de maestra contadas antes de dormir. Espero que seas mi futuro, ya que ya eres, sin proponertelo, mi presente favorito. Tal vez el destino que nos reunio como jurados de votacion sabia, desde ese primer dia, que estaba escribiendo el comienzo de algo que merecia llegar hasta el final. Continuara.',
      image: '20.jpeg',
    },
  ],
};

const state = {
  galleryIndex: 0,
  letterStarted: false,
  letterBookIndex: 0,
  finalShown: false,
  musicPlaying: false,
  countersReady: false,
  currentTrackIndex: APP_CONFIG.defaultTrackIndex,
};

const elements = {
  body: document.body,
  startCurtain: document.getElementById('startCurtain'),
  startButton: document.getElementById('startButton'),
  musicButton: document.getElementById('musicButton'),
  musicStatus: document.getElementById('musicStatus'),
  topbarCounterValue: document.getElementById('topbarCounterValue'),
  counterMonths: document.getElementById('counterMonths'),
  counterDays: document.getElementById('counterDays'),
  counterHours: document.getElementById('counterHours'),
  counterMinutes: document.getElementById('counterMinutes'),
  counterSeconds: document.getElementById('counterSeconds'),
  timelineGrid: document.getElementById('timelineGrid'),
  galleryGrid: document.getElementById('galleryGrid'),
  letterSection: document.getElementById('letterSection'),
  letterText: document.getElementById('letterText'),
  letterBookProgress: document.getElementById('letterBookProgress'),
  letterBookSong: document.getElementById('letterBookSong'),
  letterPrev: document.getElementById('letterPrev'),
  letterNext: document.getElementById('letterNext'),
  letterPlaySong: document.getElementById('letterPlaySong'),
  letterOpenPhoto: document.getElementById('letterOpenPhoto'),
  letterPetals: document.getElementById('letterPetals'),
  letterRail: document.getElementById('letterRail'),
  galleryModal: document.getElementById('galleryModal'),
  modalImage: document.getElementById('modalImage'),
  modalDate: document.getElementById('modalDate'),
  modalSong: document.getElementById('modalSong'),
  modalTitle: document.getElementById('modalTitle'),
  modalCaption: document.getElementById('modalCaption'),
  modalPrev: document.getElementById('modalPrev'),
  modalNext: document.getElementById('modalNext'),
  loveButton: document.getElementById('loveButton'),
  fxLayer: document.getElementById('fxLayer'),
  skyCanvas: document.getElementById('skyCanvas'),
};

const audio = new Audio();
audio.preload = 'metadata';
audio.loop = false;

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function createPlaceholderDataUri(title, subtitle, tone = '#d8b45c') {
  const safeTitle = title.replace(/&/g, '&amp;');
  const safeSubtitle = subtitle.replace(/&/g, '&amp;');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#161218" />
          <stop offset="100%" stop-color="#08080c" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stop-color="${tone}" stop-opacity="0.42" />
          <stop offset="100%" stop-color="${tone}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="900" fill="url(#bg)" />
      <rect width="1200" height="900" fill="url(#glow)" />
      <circle cx="170" cy="180" r="160" fill="${tone}" fill-opacity="0.16" />
      <circle cx="1040" cy="700" r="210" fill="#cf9ca5" fill-opacity="0.12" />
      <rect x="80" y="620" width="1040" height="150" rx="36" fill="#ffffff" fill-opacity="0.04" />
      <text x="80" y="170" fill="#f4f0e8" font-size="66" font-family="Georgia, serif" font-weight="700">${safeTitle}</text>
      <text x="80" y="248" fill="#d8b45c" font-size="30" letter-spacing="4" font-family="Segoe UI, Arial, sans-serif">${safeSubtitle}</text>
    </svg>`;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getImageSrc(fileName) {
  return `${APP_CONFIG.imagePath}${fileName}`;
}

function getTrackSrc(fileName) {
  return `${APP_CONFIG.musicPath}${fileName}`;
}

function getTrackForPhotoIndex(photoIndex) {
  const trackIndex = Math.floor(photoIndex / 2);
  return APP_DATA.songs[trackIndex] || APP_DATA.songs[0];
}

function getTrackForLetterIndex(letterIndex) {
  if (letterIndex <= 0) {
    return null;
  }

  const trackIndex = Math.floor((letterIndex - 1) / 2);
  return APP_DATA.songs[clamp(trackIndex, 0, APP_DATA.songs.length - 1)];
}

function hydrateGalleryCaptionsFromLetters() {
  APP_DATA.gallery.forEach((photo, photoIndex) => {
    const letter = APP_DATA.loveLetters[photoIndex + 1];
    if (!letter) {
      return;
    }

    // Prefer a shorter, meaningful title derived from the letter title
    const rawTitle = letter.title || `Carta ${pad(photoIndex + 2)}`;
    // Remove a leading "Carta X - " if present, producing a concise enunciado
    const cleanedTitle = rawTitle.replace(/^Carta\s+[^-]+-\s*/i, '').trim();

    photo.title = cleanedTitle || `Recuerdo ${pad(photoIndex + 1)}`;
    // Use the letter title as the date/meta if available (gives more context than "Foto XX")
    photo.date = letter.title || `Recuerdo ${pad(photoIndex + 1)}`;
    // Store the full letter text as the caption so the modal shows the complete enunciado
    photo.caption = letter.text || photo.caption;
  });
}

function setCurrentTrack(trackIndex, shouldPlay = false) {
  const safeIndex = clamp(trackIndex, 0, APP_DATA.songs.length - 1);
  const track = APP_DATA.songs[safeIndex];

  state.currentTrackIndex = safeIndex;
  audio.src = getTrackSrc(track.file);
  audio.load();
  elements.musicStatus.textContent = shouldPlay ? `Cargando: ${track.title}` : `Listo: ${track.title}`;

  if (shouldPlay) {
    return audio.play().then(() => {
      updateMusicUI(true);
    });
  }

  updateMusicUI(false);
  return Promise.resolve();
}

function playCurrentTrack() {
  return setCurrentTrack(state.currentTrackIndex, true);
}

function playTrack(trackIndex) {
  return setCurrentTrack(trackIndex, true);
}

function setImageWithFallback(img, item) {
  img.alt = item.title;
  img.src = getImageSrc(item.image);
  img.addEventListener(
    'error',
    () => {
      img.src = createPlaceholderDataUri(item.title, item.fallback || 'Recuerdo');
    },
    { once: true }
  );
}

function createSparkle(parent) {
  const sparkle = document.createElement('span');
  sparkle.className = 'sparkle';
  sparkle.style.left = `${Math.random() * 100}%`;
  sparkle.style.top = `${Math.random() * 80}%`;
  sparkle.style.transform = `translateY(0) scale(${0.7 + Math.random() * 0.6})`;
  sparkle.style.opacity = '0.95';
  parent.appendChild(sparkle);
  window.setTimeout(() => sparkle.remove(), 950);
}

function createHeartParticle(x, y, drift = 0) {
  const heart = document.createElement('span');
  heart.className = 'heart-particle';
  heart.textContent = '❤';
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.setProperty('--drift', `${drift}px`);
  heart.style.fontSize = `${14 + Math.random() * 18}px`;
  heart.style.animationDuration = `${2200 + Math.random() * 1800}ms`;
  elements.fxLayer.appendChild(heart);
  window.setTimeout(() => heart.remove(), 4200);
}

function createConfettiPiece(x, y, color) {
  const confetti = document.createElement('span');
  confetti.className = 'confetti-piece';
  confetti.style.left = `${x}px`;
  confetti.style.top = `${y}px`;
  confetti.style.background = color;
  confetti.style.setProperty('--drift', `${(Math.random() - 0.5) * 220}px`);
  confetti.style.animationDuration = `${1800 + Math.random() * 1600}ms`;
  elements.fxLayer.appendChild(confetti);
  window.setTimeout(() => confetti.remove(), 4200);
}

function celebrateBurst({ hearts = 60, confetti = 44, sparkles = 18, duration = 2600 } = {}) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const heartInterval = window.setInterval(() => {
    createHeartParticle(Math.random() * viewportWidth, viewportHeight - 40, (Math.random() - 0.5) * 220);
  }, 60);

  const confettiInterval = window.setInterval(() => {
    const palette = ['#d8b45c', '#cf9ca5', '#ffffff', '#7e2336'];
    createConfettiPiece(Math.random() * viewportWidth, -20, palette[Math.floor(Math.random() * palette.length)]);
  }, 90);

  const sparkleInterval = window.setInterval(() => {
    createSparkle(elements.fxLayer);
  }, 120);

  window.setTimeout(() => {
    window.clearInterval(heartInterval);
    window.clearInterval(confettiInterval);
    window.clearInterval(sparkleInterval);
  }, duration);
}

function celebrateLoveStorm() {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  const endTime = Date.now() + 4200;

  const storm = window.setInterval(() => {
    const heartsBatch = APP_CONFIG.prefersReducedMotion ? 3 : 9;
    const confettiBatch = APP_CONFIG.prefersReducedMotion ? 2 : 6;

    for (let index = 0; index < heartsBatch; index += 1) {
      createHeartParticle(Math.random() * viewportWidth, viewportHeight - 30, (Math.random() - 0.5) * 280);
    }

    for (let index = 0; index < confettiBatch; index += 1) {
      const colors = ['#d8b45c', '#cf9ca5', '#fff5e6', '#7e2336'];
      createConfettiPiece(Math.random() * viewportWidth, -20, colors[index % colors.length]);
    }

    createSparkle(elements.fxLayer);

    if (Date.now() >= endTime) {
      window.clearInterval(storm);
    }
  }, APP_CONFIG.prefersReducedMotion ? 150 : 70);
}

function formatElapsedTime(start, end = new Date()) {
  let cursor = new Date(start.getTime());
  let months = 0;

  while (true) {
    const nextMonth = new Date(cursor.getTime());
    nextMonth.setMonth(nextMonth.getMonth() + 1);

    if (nextMonth <= end) {
      months += 1;
      cursor = nextMonth;
    } else {
      break;
    }
  }

  const remainderMs = Math.max(0, end.getTime() - cursor.getTime());
  const totalDays = Math.floor(remainderMs / 86_400_000);
  const hours = Math.floor((remainderMs % 86_400_000) / 3_600_000);
  const minutes = Math.floor((remainderMs % 3_600_000) / 60_000);
  const seconds = Math.floor((remainderMs % 60_000) / 1000);

  return {
    months,
    days: totalDays,
    hours,
    minutes,
    seconds,
  };
  // Ensure poems render after full page load as a fallback
  window.addEventListener('load', () => {
    try {
      window.setTimeout(() => { if (typeof renderPoemsGlobal === 'function') renderPoemsGlobal(); }, 160);
    } catch (e) { /* ignore */ }
  });
}

function drawHeart(ctx, x, y, size, alpha = 1) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(size / 32, size / 32);
  ctx.globalAlpha = alpha;
  ctx.beginPath();
  ctx.moveTo(0, 10);
  ctx.bezierCurveTo(0, 2, -10, 0, -16, 6);
  ctx.bezierCurveTo(-24, 14, -18, 28, 0, 38);
  ctx.bezierCurveTo(18, 28, 24, 14, 16, 6);
  ctx.bezierCurveTo(10, 0, 0, 2, 0, 10);
  ctx.closePath();
  ctx.fillStyle = 'rgba(217, 118, 138, 0.45)';
  ctx.fill();
  ctx.restore();
}

function createBackgroundCanvas() {
  const canvas = elements.skyCanvas;
  const ctx = canvas.getContext('2d', { alpha: true });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const stars = [];
  const particles = [];
  const hearts = [];

  let width = 0;
  let height = 0;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    stars.length = 0;
    particles.length = 0;
    hearts.length = 0;

    const starCount = APP_CONFIG.prefersReducedMotion ? 72 : 120;
    const particleCount = APP_CONFIG.prefersReducedMotion ? 24 : 42;
    const heartCount = APP_CONFIG.prefersReducedMotion ? 8 : 18;

    for (let index = 0; index < starCount; index += 1) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 0.6 + Math.random() * 1.8,
        speed: 0.01 + Math.random() * 0.025,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.22 + Math.random() * 0.6,
      });
    }

    for (let index = 0; index < particleCount; index += 1) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: -0.08 + Math.random() * 0.16,
        vy: -0.04 + Math.random() * 0.08,
        size: 0.8 + Math.random() * 1.9,
        hue: index % 2 === 0 ? 'rgba(216, 180, 92, 0.26)' : 'rgba(207, 156, 165, 0.18)',
        twirl: Math.random() * Math.PI * 2,
      });
    }

    for (let index = 0; index < heartCount; index += 1) {
      hearts.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: -0.12 + Math.random() * 0.24,
        vy: -0.05 - Math.random() * 0.08,
        size: 9 + Math.random() * 12,
        alpha: 0.12 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
      });
    }
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(10, 10, 16, 0.9)');
    gradient.addColorStop(0.5, 'rgba(8, 8, 12, 0.7)');
    gradient.addColorStop(1, 'rgba(5, 5, 7, 0.92)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    for (const star of stars) {
      star.phase += star.speed;
      const twinkle = 0.5 + Math.sin(star.phase) * 0.5;
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha * twinkle})`;
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();
    }

  function renderPoems() {
    const container = document.querySelector('.final-copy');
    if (!container || !Array.isArray(APP_DATA.poems)) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'final-poems';
    const poemsHtml = APP_DATA.poems
      .map((p, i) => `
        <article class="poem-card glass-panel">
          <h4>Poema ${i + 1}</h4>

        </article>
      `)
      .join('');

    wrapper.innerHTML = `
      <h3>Poemas del futuro</h3>
      <div class="poem-list">${poemsHtml}</div>
    `;

    container.appendChild(wrapper);
  }
  // expose a safer global that does not sit inside canvas render scope
  window.renderPoemsGlobal = function renderPoemsGlobal() {
    try {
      const container = document.querySelector('.final-copy');
      if (!container || !Array.isArray(APP_DATA.poems)) return;
      // Avoid rendering twice
      if (container.querySelector('.final-poems') || container.querySelector('.future-plans')) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'final-poems';
      const poemsHtml = APP_DATA.poems
        .map((p) => {
          // p is a string like "Poema I — Mañanas que elegimos:\nTexto..."
          const parts = String(p).split('\n');
          let title = parts[0] || '';
          // remove leading 'Poema' or numbering if present
          title = title.replace(/^Poema\s*\w*\s*[\u2014:-]?\s*/i, '').trim() || 'Poema';
          const body = parts.slice(1).join('\n') || '';
          return `
            <article class="poem-card glass-panel">
              <h4>${title}</h4>
              <p class="poem-text">${body.replace(/\n/g, '<br/>')}</p>
            </article>
          `;
        })
        .join('');

      wrapper.innerHTML = `
        <h3>Poemas del futuro</h3>
        <div class="poem-list">${poemsHtml}</div>
      `;

      // Insert poems before the existing content (so they appear before "Gracias por elegirme")
      container.insertBefore(wrapper, container.firstChild);

      // Also render future plans / dreams just after the poems
      if (Array.isArray(APP_DATA.dreams) && APP_DATA.dreams.length) {
        const plans = document.createElement('div');
        plans.className = 'future-plans';
        const plansHtml = APP_DATA.dreams.map(d => `<li>${d}</li>`).join('');
        plans.innerHTML = `
          <h3>Lo que quiero hacer contigo</h3>
          <ul class="plans-list">${plansHtml}</ul>
        `;
        container.insertBefore(plans, wrapper.nextSibling);
      }
    } catch (e) {
      /* ignore */
    }
  };
    for (const particle of particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.twirl += 0.01;
      if (particle.x < -20) particle.x = width + 20;
      if (particle.x > width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = height + 20;
      if (particle.y > height + 20) particle.y = -20;
      ctx.beginPath();
      ctx.fillStyle = particle.hue;
      ctx.arc(particle.x + Math.sin(particle.twirl) * 8, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    }

    for (const heart of hearts) {
      heart.x += heart.vx;
      heart.y += heart.vy;
      heart.phase += 0.04;
      if (heart.y < -30) heart.y = height + 30;
      if (heart.x < -30) heart.x = width + 30;
      if (heart.x > width + 30) heart.x = -30;
      drawHeart(ctx, heart.x, heart.y, heart.size, heart.alpha + Math.sin(heart.phase) * 0.06);
    }

    requestAnimationFrame(render);
  }

  resize();
  window.addEventListener('resize', resize);
  requestAnimationFrame(render);
}

function applySectionReveal() {
  const sections = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          if (entry.target.id === 'letterSection' && !state.letterStarted) {
            state.letterStarted = true;
            celebrateBurst({ hearts: 24, confetti: 12, sparkles: 6, duration: 1600 });
          }

          if (entry.target.id === 'finalSection' && !state.finalShown) {
            state.finalShown = true;
            document.body.classList.add('final-mode');
            celebrateBurst({ hearts: 36, confetti: 28, sparkles: 8, duration: 2200 });
            // Render poems when the final section becomes visible
            try { if (typeof renderPoemsGlobal === 'function') renderPoemsGlobal(); } catch (e) { /* ignore */ }
          }
        }
      }
    },
    { threshold: 0.24, rootMargin: '0px 0px -10% 0px' }
  );

  sections.forEach((section) => observer.observe(section));
}

function updateCounter() {
  const current = formatElapsedTime(APP_CONFIG.startDate);

  elements.counterMonths.textContent = pad(current.months);
  elements.counterDays.textContent = pad(current.days);
  elements.counterHours.textContent = pad(current.hours);
  elements.counterMinutes.textContent = pad(current.minutes);
  elements.counterSeconds.textContent = pad(current.seconds);
  elements.topbarCounterValue.textContent = `${pad(current.months)}m ${pad(current.days)}d ${pad(current.hours)}h ${pad(current.minutes)}m ${pad(current.seconds)}s`;
}

function startCounter() {
  updateCounter();
  window.setInterval(updateCounter, 1000);
}

function createSectionCard({ date, title, description, image, fallback, mode }) {
  const article = document.createElement(mode === 'gallery' ? 'button' : 'article');
  article.className = mode === 'gallery' ? 'gallery-card' : mode === 'memory' ? 'memory-card glass-panel' : 'timeline-card glass-panel';
  if (mode === 'gallery') {
    article.type = 'button';
  }

  const media = document.createElement('div');
  media.className = `${mode === 'gallery' ? 'gallery-card__media' : mode === 'memory' ? 'memory-card__media' : 'timeline-media'}`;
  const img = document.createElement('img');
  setImageWithFallback(img, { title, image, fallback });
  media.appendChild(img);

  const body = document.createElement('div');
  body.className = `${mode === 'gallery' ? 'gallery-card__body' : mode === 'memory' ? 'memory-card__body' : 'timeline-card__body'}`;
  body.innerHTML = `
    <span class="card-meta">${date}</span>
    <h3>${title}</h3>
    <p>${description}</p>
  `;

  article.appendChild(media);
  article.appendChild(body);
  return article;
}

function buildLetterRail() {
  elements.letterRail.innerHTML = '';

  APP_DATA.loveLetters.forEach((entry, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'letter-rail__item';
    button.textContent = index === 0 ? 'Intro' : `${pad(index)}`;
    button.setAttribute('aria-label', entry.title);
    button.addEventListener('click', () => {
      renderLetterBook(index);
    });
    elements.letterRail.appendChild(button);
  });
}

function renderLetterBook(index) {
  const safeIndex = clamp(index, 0, APP_DATA.loveLetters.length - 1);
  const letter = APP_DATA.loveLetters[safeIndex];
  const track = getTrackForLetterIndex(safeIndex);
  const photoIndex = safeIndex - 1;

  state.letterBookIndex = safeIndex;
  elements.letterBookProgress.textContent = `Carta ${safeIndex + 1} de ${APP_DATA.loveLetters.length}`;
  elements.letterBookSong.textContent = track ? `Cancion asociada: ${track.title}` : 'Cancion asociada: Introduccion';

  elements.letterText.innerHTML = `
    <article class="letter-card">
      <h3>${letter.title}</h3>
      <p>${letter.text}</p>
      <p class="letter-card__signature">Para ella, desde la memoria.</p>
      <!-- removed explicit attribution line per user preference -->
    </article>
  `;

  elements.letterPrev.disabled = safeIndex === 0;
  elements.letterNext.disabled = safeIndex === APP_DATA.loveLetters.length - 1;
  elements.letterOpenPhoto.disabled = photoIndex < 0;
  elements.letterPlaySong.disabled = !track;

  const railButtons = elements.letterRail.querySelectorAll('.letter-rail__item');
  railButtons.forEach((button, railIndex) => {
    button.classList.toggle('is-active', railIndex === safeIndex);
  });

  if (!APP_CONFIG.prefersReducedMotion) {
    elements.letterText.classList.remove('is-fading');
    void elements.letterText.offsetWidth;
    elements.letterText.classList.add('is-fading');
  }
}

function showNextLetter() {
  renderLetterBook(state.letterBookIndex + 1);
}

function showPrevLetter() {
  renderLetterBook(state.letterBookIndex - 1);
}

function initLetterBook() {
  buildLetterRail();
  renderLetterBook(0);

  elements.letterPrev.addEventListener('click', showPrevLetter);
  elements.letterNext.addEventListener('click', showNextLetter);

  elements.letterPlaySong.addEventListener('click', () => {
    const track = getTrackForLetterIndex(state.letterBookIndex);
    if (!track) {
      return;
    }

    const trackIndex = APP_DATA.songs.findIndex((song) => song.file === track.file);
    if (trackIndex >= 0) {
      playTrack(trackIndex);
    }
  });

  elements.letterOpenPhoto.addEventListener('click', () => {
    const photoIndex = state.letterBookIndex - 1;
    if (photoIndex >= 0) {
      openGallery(photoIndex);
    }
  });

  elements.letterPetals.addEventListener('click', () => {
    celebrateLoveStorm();
  });
}

function renderTimeline() {
  elements.timelineGrid.innerHTML = '';
  APP_DATA.timeline.forEach((item) => {
    const card = createSectionCard({
      date: item.date,
      title: item.title,
      description: item.story,
      image: item.image,
      fallback: item.fallback,
      mode: 'timeline',
    });
    elements.timelineGrid.appendChild(card);
  });
}

function renderGallery() {
  elements.galleryGrid.innerHTML = '';
  const chapters = [];

  for (let photoIndex = 0; photoIndex < APP_DATA.gallery.length; photoIndex += 2) {
    chapters.push({
      index: photoIndex / 2,
      track: getTrackForPhotoIndex(photoIndex),
      photos: APP_DATA.gallery.slice(photoIndex, photoIndex + 2),
    });
  }

  chapters.forEach((chapter) => {
    const chapterCard = document.createElement('article');
    chapterCard.className = 'chapter-card glass-panel';

    const header = document.createElement('div');
    header.className = 'chapter-card__header';
    header.innerHTML = `
      <div>
        <span class="card-meta">Bloque ${pad(chapter.index + 1)}</span>
        <h3>${chapter.track.title}</h3>
      </div>
      <button class="chapter-card__play" type="button">Reproducir canción</button>
    `;

    const trackButton = header.querySelector('button');
    trackButton.addEventListener('click', () => {
      playTrack(chapter.index);
    });

    const prompt = document.createElement('p');
    prompt.className = 'chapter-card__prompt';
    prompt.textContent = 'Cada foto guarda un recuerdo completo de nosotros, sin recortes.';

    const photoGrid = document.createElement('div');
    photoGrid.className = 'chapter-photo-grid';

    chapter.photos.forEach((photo, offset) => {
      if (!photo) {
        return;
      }

      const photoButton = document.createElement('button');
      photoButton.type = 'button';
      photoButton.className = 'chapter-photo';
      photoButton.setAttribute('aria-label', photo.title);
      photoButton.dataset.photoIndex = String(chapter.index * 2 + offset);

      photoButton.innerHTML = `
        <div class="chapter-photo__media">
          <img alt="${photo.title}" />
        </div>
        <div class="chapter-photo__body">
          <span class="card-meta">${photo.date}</span>
          <h4>${photo.title}</h4>
          <p>${photo.caption}</p>
        </div>
      `;

      const img = photoButton.querySelector('img');
      setImageWithFallback(img, photo);

      photoButton.addEventListener('click', () => openGallery(chapter.index * 2 + offset));
      photoGrid.appendChild(photoButton);
    });

    const trackNote = document.createElement('div');
    trackNote.className = 'chapter-card__track';
    trackNote.textContent = `Canción asociada: ${chapter.track.title}`;

    chapterCard.appendChild(header);
    chapterCard.appendChild(trackNote);
    chapterCard.appendChild(prompt);
    chapterCard.appendChild(photoGrid);
    elements.galleryGrid.appendChild(chapterCard);
  });
}

function renderMemories() {
  elements.memoryGrid.innerHTML = '';
  APP_DATA.memories.forEach((item) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'memory-card glass-panel';
    card.setAttribute('aria-expanded', 'false');

    card.innerHTML = `
      <div class="memory-card__media">
        <img alt="${item.title}" />
      </div>
      <div class="memory-card__body">
        <div class="memory-card__toggle">
          <div>
            <span class="card-meta">${item.date}</span>
            <strong>${item.title}</strong>
          </div>
          <span class="memory-card__chevron" aria-hidden="true">⌄</span>
        </div>
        <div class="memory-card__details">
          <p>${item.description}</p>
        </div>
      </div>
    `;

    const img = card.querySelector('img');
    setImageWithFallback(img, item);

    card.addEventListener('click', () => {
      const isOpen = card.classList.toggle('is-open');
      card.setAttribute('aria-expanded', String(isOpen));
    });

    elements.memoryGrid.appendChild(card);
  });
}

function renderDreams() {
  elements.dreamList.innerHTML = '';
  APP_DATA.dreams.forEach((dream, index) => {
    const card = document.createElement('article');
    card.className = 'dream-card glass-panel';
    card.innerHTML = `
      <div class="dream-card__top">
        <div class="dream-card__index">${pad(index + 1)}</div>
        <div>
          <span class="card-meta">Sueño ${index + 1}</span>
          <h3>${dream}</h3>
        </div>
      </div>
      <p>Este sueño aparece como una promesa discreta: algo que quiero construir contigo.</p>
    `;
    elements.dreamList.appendChild(card);
  });
}

function renderReasonCard(index) {
  const total = APP_DATA.reasons.length;
  const position = index % total;
  const reason = APP_DATA.reasons[position];
  const title = `Razón ${pad(position + 1)}`;

  elements.reasonProgress.textContent = `Razón ${position + 1} de ${total}`;
  elements.reasonCard.classList.remove('is-flipping');
  elements.reasonCard.innerHTML = `
    <span class="reason-card__counter">${title}</span>
    <h3>${reason}</h3>
    <p>Toca para descubrir la siguiente razón y seguir abriendo esta carta.
    </p>
  `;

  void elements.reasonCard.offsetWidth;
  elements.reasonCard.classList.add('is-flipping');
}

function showNextReason() {
  state.reasonIndex = (state.reasonIndex + 1) % APP_DATA.reasons.length;
  renderReasonCard(state.reasonIndex);
}

function initReasons() {
  renderReasonCard(state.reasonIndex);
  elements.reasonButton.addEventListener('click', showNextReason);
  elements.reasonCard.addEventListener('click', showNextReason);
}

function createModalSlide(index) {
  const item = APP_DATA.gallery[index];
  const track = getTrackForPhotoIndex(index);
  state.galleryIndex = index;
  elements.modalDate.textContent = item.date;
  if (elements.modalSong) {
    elements.modalSong.textContent = `Canción: ${track.title}`;
  }
  elements.modalTitle.textContent = item.title;
  elements.modalCaption.textContent = item.caption;
  elements.modalImage.alt = item.title;
  elements.modalImage.src = getImageSrc(item.image);
  // adjust modal layout after image loads so the right-side copy has space
  const onImgReady = () => {
    try {
      const panel = document.querySelector('.gallery-modal__panel');
      if (panel) {
        const panelH = panel.clientHeight;
        const imgH = elements.modalImage.clientHeight || elements.modalImage.naturalHeight || 0;
        // If the image is taller than the panel (causing the copy to be squished), stack the modal vertically
        if (imgH > panelH - 80) {
          elements.galleryModal.classList.add('gallery-modal--stacked');
        } else {
          elements.galleryModal.classList.remove('gallery-modal--stacked');
        }

        // compute a sensible maxHeight for the copy area so long enunciados can scroll
        const copy = panel.querySelector('.gallery-modal__copy');
        if (copy) {
          const available = Math.max(120, panel.clientHeight - 120);
          copy.style.maxHeight = `${available}px`;
        }
      }
    } catch (e) {
      // silently ignore measurement errors
    }
  };

  elements.modalImage.addEventListener(
    'load',
    onImgReady,
    { once: true }
  );

  elements.modalImage.addEventListener(
    'error',
    () => {
      elements.modalImage.src = createPlaceholderDataUri(item.title, item.fallback || 'Recuerdo');
      window.setTimeout(onImgReady, 120);
    },
    { once: true }
  );
  // also call measurement shortly after assigning src to handle cached images
  window.setTimeout(onImgReady, 40);
}

function openGallery(index) {
  createModalSlide(index);
  elements.galleryModal.classList.add('is-open');
  elements.galleryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeGallery() {
  elements.galleryModal.classList.remove('is-open');
  elements.galleryModal.setAttribute('aria-hidden', 'true');
  elements.galleryModal.classList.remove('gallery-modal--stacked');
  document.body.style.overflow = '';
}

function nextGallerySlide(direction) {
  const total = APP_DATA.gallery.length;
  const nextIndex = (state.galleryIndex + direction + total) % total;
  createModalSlide(nextIndex);
}

function initGalleryModal() {
  elements.modalPrev.addEventListener('click', () => nextGallerySlide(-1));
  elements.modalNext.addEventListener('click', () => nextGallerySlide(1));
  elements.galleryModal.addEventListener('click', (event) => {
    if (event.target.matches('[data-modal-close]')) {
      closeGallery();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!elements.galleryModal.classList.contains('is-open')) {
      return;
    }

    if (event.key === 'Escape') {
      closeGallery();
    }

    if (event.key === 'ArrowLeft') {
      nextGallerySlide(-1);
    }

    if (event.key === 'ArrowRight') {
      nextGallerySlide(1);
    }
  });
}

function initStartCurtain() {
  elements.startButton.addEventListener('click', () => {
    elements.startCurtain.classList.add('is-hidden');
    document.body.classList.add('story-started');
    window.setTimeout(() => {
      document.getElementById('introSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, APP_CONFIG.prefersReducedMotion ? 0 : 220);
  });
}

function updateMusicUI(playing) {
  state.musicPlaying = playing;
  document.body.classList.toggle('music-playing', playing);
  elements.musicButton.setAttribute('aria-pressed', String(playing));
  const track = APP_DATA.songs[state.currentTrackIndex];
  const suffix = track ? `: ${track.title}` : '';
  elements.musicStatus.textContent = playing ? `Sonando${suffix}` : `Pausada${suffix}`;
}

function initMusic() {
  setCurrentTrack(APP_CONFIG.defaultTrackIndex, false);

  elements.musicButton.addEventListener('click', async () => {
    try {
      if (audio.paused) {
        await playCurrentTrack();
      } else {
        audio.pause();
        updateMusicUI(false);
      }
    } catch (error) {
      elements.musicStatus.textContent = 'Añade tu canción en assets/music';
      updateMusicUI(false);
    }
  });

  audio.addEventListener('ended', () => updateMusicUI(false));
  audio.addEventListener('pause', () => {
    if (!audio.ended) {
      updateMusicUI(false);
    }
  });
  audio.addEventListener('play', () => updateMusicUI(true));
  audio.addEventListener('error', () => {
    elements.musicStatus.textContent = 'Revisa las canciones en assets/music';
    updateMusicUI(false);
  });
}

function initGlobalControls() {
  elements.loveButton.addEventListener('click', () => {
    celebrateLoveStorm();
  });
}

function boot() {
  hydrateGalleryCaptionsFromLetters();
  createBackgroundCanvas();
  applySectionReveal();
  renderTimeline();
  renderGallery();
  // Render poems about our future (delayed to ensure section exists)
  if (typeof renderPoemsGlobal === 'function') {
    window.setTimeout(() => {
      try { renderPoemsGlobal(); } catch(e) { /* ignore */ }
    }, 240);
  }
  // Retry mechanism: try a few times in case sections load later
  (function ensureRenderPoemsRetries() {
    if (typeof renderPoemsGlobal !== 'function') return;
    let attempts = 0;
    const timer = window.setInterval(() => {
      attempts += 1;
      try { renderPoemsGlobal(); } catch (e) { /* ignore */ }
      if (document.querySelector('.final-poems') || attempts > 6) {
        window.clearInterval(timer);
      }
    }, 350);
  })();
  initLetterBook();
  initGalleryModal();
  initMusic();
  initStartCurtain();
  initGlobalControls();
  startCounter();

  window.setTimeout(() => {
    const heroBlock = document.getElementById('introSection');
    heroBlock.classList.add('is-visible');
  }, 220);
}

boot();
