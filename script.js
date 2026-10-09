/* =====================================================
   Karen Julieth & Edgar Sebastian — Album de Amor
   ===================================================== */
'use strict';

/* ─────────────── DATA ─────────────── */
const APP_DATA = {
  startDate: new Date('2026-06-07T19:00:00'),

  songs: [
    /* 0 */ { title: 'Solo Para Ti',              artist: 'Camila',                           src: 'assets/music/Camila - Solo Para Ti (Alt. Version).mp3' },
    /* 1 */ { title: 'Prometo',                   artist: 'Fonseca',                          src: 'assets/music/Fonseca - Prometo (LyricLetra).mp3' },
    /* 2 */ { title: 'Para Tu Amor',              artist: 'Juanes',                           src: 'assets/music/Juanes - Para Tu Amor (Official Music Video).mp3' },
    /* 3 */ { title: 'Estar Contigo',             artist: 'Alex Ubago ft. La Oreja de Van Gogh', src: 'assets/music/Alex Ubago - Estar contigo ft. La oreja de Van Gogh (Videoclip Oficial).mp3' },
    /* 4 */ { title: 'Lo Poco Que Yo Quiero',     artist: 'Morat & Silvestre Dangond',        src: 'assets/music/Morat, Silvestre Dangond - Lo poco que yo quiero (Video Oficial).mp3' },
    /* 5 */ { title: 'Me Cambiaste la Vida',      artist: 'Río Roma',                         src: 'assets/music/Río Roma - Me Cambiaste la Vida (Videoclip).mp3' },
    /* 6 */ { title: 'Amor del Bueno',            artist: 'Reyli Barba',                      src: 'assets/music/Reyli Barba - Amor del Bueno (Video).mp3' },
    /* 7 */ { title: 'Sabrás',                    artist: 'Herencia de Timbiquí',             src: 'assets/music/Sabrás, Herencia de Timbiquí - Video Oficial.mp3' },
    /* 8 */ { title: 'Mi Suerte',                 artist: '',                                 src: 'assets/music/Mi Suerte.mp3' },
    /* 9 */ { title: 'The Reason',                artist: 'Hoobastank',                       src: 'assets/music/Hoobastank - The Reason (Official Music Video).mp3' },
    /*10 */ { title: 'Tengo Ganas',               artist: 'Andrés Cepeda',                    src: 'assets/music/Tengo Ganas - Andrés Cepeda (Cover Audio)(mp3j.cc).mp3' },
    /*11 */ { title: 'Afuera del Planeta',        artist: 'Manuel Medrano',                   src: 'assets/music/Manuel Medrano - Afuera del Planeta (Lyric Video)(mp3j.cc).mp3' },
    /*12 */ { title: 'El Amor Más Grande del Planeta', artist: 'Felipe Peláez ft. Zabaleta',  src: 'assets/music/Felipe Peláez, Zabaleta - El Amor Más Grande del Planeta (Cover Audio)(mp3j.cc).mp3' },
    /*13 */ { title: 'Te Amo y Te Amo',           artist: 'Felipe Peláez ft. Zabaleta',       src: 'assets/music/Felipe Pelaez, Zabaleta - Te Amo y te amo (Video Oficial)(mp3j.cc).mp3' },
    /*14 */ { title: 'Ella Es Mi Todo',           artist: 'Kaleth Morales',                   src: 'assets/music/Kaleth Morales - Ella Es Mi Todo (Letra).mp3' },
    /*15 */ { title: 'La Mujer Perfecta',         artist: 'Kurt',                             src: 'assets/music/Kurt - La Mujer Perfecta (Lyric Video)(mp3j.cc).mp3' },
    /*16 */ { title: 'Sonreír',                   artist: 'Kurt',                             src: 'assets/music/Kurt - Sonreír (Versión Acústica)(mp3j.cc).mp3' },
    /*17 */ { title: 'Coincidir',                 artist: 'Macaco',                           src: 'assets/music/Macaco - Coincidir (Official Music Video)(mp3j.cc).mp3' },
    /*18 */ { title: 'Lo Quiero Todo',            artist: 'Macaco',                           src: 'assets/music/Macaco - Lo Quiero Todo(mp3j.cc).mp3' },
    /*19 */ { title: 'Tan Fácil',                 artist: 'CNCO',                             src: 'assets/music/CNCO - Tan Fácil (Official Video)(mp3j.cc).mp3' },
    /*20 */ { title: 'Eres',                      artist: 'Café Tacvba',                      src: 'assets/music/Café Tacvba - Eres (Video Oficial)(mp3j.cc).mp3' },
    /*21 */ { title: 'Día Tras Día',              artist: '',                                 src: 'assets/music/Día Tras Día(mp3j.cc).mp3' },
    /*22 */ { title: 'Bonita',                    artist: '',                                 src: 'assets/music/Bonita(mp3j.cc).mp3' },
    /*23 */ { title: 'Ven',                       artist: '',                                 src: 'assets/music/Ven.mp3' },
    /*24 */ { title: 'Y Si Te Quedas, ¿Qué?',    artist: '',                                 src: 'assets/music/Y Si Te Quedas, ¿Qué(mp3j.cc).mp3' },
  ],

  gallery: [
    { date:'El primer beso', title:'El primer beso', image:'assets/img/3.jpeg', rarity:'legendario', type:'Amor', hp:100, songIndex:0,
      text:'Hubo una noche que anhelé tanto que cuando por fin llegó, casi no supe cómo sostenerla entre los brazos, quizás porque los deseos cumplidos siempre asustan un poco antes de volverse alegría. Ese beso que tanto imaginé se sintió como si el aire mismo se hubiera puesto de acuerdo para quedarse quieto un segundo, solo para nosotros.' },

    { date:'Las madrugadas de Instagram', title:'Las madrugadas de Instagram', image:'assets/img/1.jpeg', rarity:'raro', type:'Memoria', hp:70, songIndex:1,
      text:'Hubo un tiempo en que las dos y las tres de la mañana dejaron de ser horas de insomnio para convertirse en horas nuestras, ya que el sueño no lograba competir con las ganas de seguir hablando. Cada notificación se volvió una pequeña fiesta, cada audio tuyo una melodía que yo guardaba como quien guarda algo valioso en un cofre invisible. Quizás nunca entendí bien cómo el cansancio se transformaba en felicidad apenas veía tu nombre en la pantalla, pero así fue, así ocurrió sin que yo lo planeara: esperar tus mensajes se convirtió en mi manera favorita de esperar la vida.' },

    { date:'La primera foto juntos', title:'La primera cita', image:'assets/img/2.jpeg', rarity:'ultra', type:'Historia', hp:85, songIndex:2,
      text:'El tiempo, esa cosa que normalmente pesa tanto, decidió volverse líquido esa tarde, y se nos escapó entre las manos sin que lo notáramos, ya que hablar contigo nunca se sintió como hablar sino como reconocer algo que ya conocía de otra vida. Ese día te tomé de la mano, y desde entonces decidí, casi sin decirlo, que no pensaba soltarla. Tal vez fue ahí, en ese gesto tan simple, donde empezó de verdad todo lo demás.' },

    { date:'Nuestro primer plan', title:'La primera misa juntos', image:'assets/img/4.jpeg', rarity:'raro', type:'Aventura', hp:75, songIndex:3,
      text:'Hay lugares que cargan un peso distinto, y la iglesia siempre ha sido, para mí, uno de esos sitios donde todo se vuelve más real, más importante. Ir a misa contigo por primera vez fue como presentarte ante lo que más respeto, ya que estar ahí, cerca de ti, en silencio compartido, me hizo sentir que por fin tenía a la mujer indicada en el lugar indicado.' },

    { date:'Cuando me dijiste que sí', title:'Tunja, tu salón, tu saco', image:'assets/img/5.jpeg', rarity:'legendario', type:'Amor', hp:100, songIndex:4,
      text:'Fui a Tunja con la excusa de un trabajo de la universidad que, al final, dejé sin terminar, ya que verte de lejos en tu salón de clase, tan juiciosa, tan hermosa sin proponérselo, me pareció mucho más importante que cualquier nota académica. Te regalé el saco que más me gustaba usar porque quería que tuvieras una parte de mí cerca cuando yo no pudiera estarlo.' },

    { date:'La primera vez que cocinamos', title:'El día que te pedí que fueras mi novia', image:'assets/img/6.jpeg', rarity:'comun', type:'Hogar', hp:60, songIndex:6,
      text:'Lo anhelé tanto que lo planeé con la misma dedicación con la que se planea algo sagrado. Te escribí una carta acompañada de canciones de Morat, porque a veces las palabras propias necesitan ayuda de otras voces para decir lo que sienten. Tal vez nunca estuve tan nervioso en mi vida, pero tampoco nunca estuve tan seguro de algo.' },

    { date:'Ese atardecer inolvidable', title:'El lugar, el llanto, el alma llena', image:'assets/img/7.jpeg', rarity:'ultra', type:'Magia', hp:90, songIndex:5,
      text:'Cuéntame tú que recuerdas de ese día, porque yo lo llevo grabado como una fotografía que no se borra: verte llorar, no de tristeza sino de esas lágrimas que solo salen cuando el corazón está demasiado lleno para quedarse callado, fue quizás el instante más humano que he vivido contigo.' },

    { date:'La noche de estrellas', title:'El lugar favorito y la comida', image:'assets/img/8.jpeg', rarity:'ultra', type:'Magia', hp:88, songIndex:7,
      text:'Ese mismo día, como si el universo quisiera regalarnos una jornada completa, terminamos en nuestro lugar favorito, compartiendo una comida que supo distinta, más especial, ya que todo lo que como contigo sabe distinto.' },

    { date:'Nuestro primer viaje', title:'Risas de toda una semana', image:'assets/img/9.jpeg', rarity:'legendario', type:'Aventura', hp:95, songIndex:8,
      text:'Anhelo verte todas las veces que la vida me lo permite, ya que cada encuentro contigo se ha convertido en de mis días más felices, incluso los que compartimos con tu mamá entre charlas y sobremesas. Conocer a tus perritos, jugar con ellos, verlos correr hacia ti como si supieran que eres su persona favorita del mundo, me enseñó que el amor también se mide en esas pequeñas alegrías compartidas.' },

    { date:'La llamada de medianoche', title:'El primer helado', image:'assets/img/10.jpeg', rarity:'raro', type:'Conexión', hp:72, songIndex:9,
      text:'Un domingo cualquiera se volvió memorable solo porque estuvimos juntos, compartiendo un helado que quizás no recuerdo de qué sabor era, pero sí recuerdo tu risa mientras lo comíamos. Tal vez el amor no necesita grandes escenarios: a veces basta un helado y una tarde de domingo.' },

    { date:'Bailando bajo la lluvia', title:'Segundo viaje a Tunja', image:'assets/img/11.jpeg', rarity:'ultra', type:'Alegría', hp:87, songIndex:10,
      text:'Volví a Tunja, esta vez para conocer tu universidad, tu biblioteca, los rincones donde te vuelves tú misma sin que nadie te mire. Escuché tus historias, conocí tus lugares favoritos, y entendí que cada espacio que me mostrabas era, en realidad, un pedazo de tu memoria que decidías compartir conmigo.' },

    { date:'El día que lloramos juntos', title:'La biblioteca, tu belleza, tu cercanía', image:'assets/img/12.jpeg', rarity:'raro', type:'Verdad', hp:80, songIndex:11,
      text:'Estar contigo en la biblioteca de tu universidad, admirando tu belleza sin necesidad de decir nada, sintiéndote cerca mientras el silencio del lugar nos envolvía, fue de esos momentos que se quedan grabados como una fotografía importante.' },

    { date:'Nuestra canción favorita', title:'El atardecer que cerró el viaje', image:'assets/img/13.jpeg', rarity:'comun', type:'Música', hp:65, songIndex:12,
      text:'Terminamos ese viaje con una vista de atardecer que parecía pintada solo para nosotros, entre iglesias hermosas donde oramos juntos, entre sushi y pizza compartidos como quien comparte más que comida, y con nuestros primeros collares comprados como símbolo de algo que ya no tenía vuelta atrás.' },

    { date:'El cumpleaños especial', title:'La excusa de visitar a mi suegra', image:'assets/img/14.jpeg', rarity:'ultra', type:'Celebración', hp:92, songIndex:13,
      text:'Siempre anhelo ir a visitar a tu mamá, ir a recogerla, y si soy honesto, sé que esa es apenas una excusa hermosa para estar más cerca de ti. Tal vez no hay estrategia más sincera que esa: inventar motivos pequeños para no dejar de verte.' },

    { date:'La promesa del futuro', title:'El camino tarde por hablar de más', image:'assets/img/15.jpeg', rarity:'legendario', type:'Amor', hp:100, songIndex:14,
      text:'También recuerdo esos caminos a recoger a tu mamá donde el tiempo se nos iba entre risas y conversaciones, y a veces llegábamos tarde solo por no querer dejar de hablar. Quizás la impuntualidad, cuando es por hablar contigo, deja de ser un defecto.' },

    { date:'Nuestro lugar secreto', title:'Misa, pareja ideal, y unas medias', image:'assets/img/16.jpeg', rarity:'ultra', type:'Refugio', hp:88, songIndex:15,
      text:'Fuimos a misa una vez más, y esa mañana nos vimos como la pareja ideal que aún hoy seguimos siendo. Después, entre risas, salimos a comprar unas medias porque tus botines nuevos te habían dejado heridas en los pies, y ese detalle tan pequeño, tan humano, también se volvió parte de nuestra historia.' },

    { date:'La sorpresa perfecta', title:'Poesía pura I', image:'assets/img/17.jpeg', rarity:'raro', type:'Magia', hp:78, songIndex:16,
      text:'Tal vez el amor no se explica, solo se vive, y contigo he vivido instantes que se sienten como versos escritos por alguien que nos observa desde lejos. Tu risa tiene la costumbre de llegar sin avisar y quedarse instalada en mi pecho durante días.' },

    { date:'Nuestro primer año', title:'Poesía pura II', image:'assets/img/18.jpeg', rarity:'legendario', type:'Hito', hp:100, songIndex:17,
      text:'Quizás nadie me explicó nunca que el amor también huele a mañanas compartidas, a mensajes de buenos días, a la certeza tranquila de que hay alguien pensando en uno incluso en el silencio. Contigo aprendí que la felicidad no siempre grita, a veces solo susurra, y ese susurro se parece mucho a tu nombre.' },

    { date:'La selfie del corazón', title:'Poesía pura III', image:'assets/img/19.jpeg', rarity:'comun', type:'Cotidiano', hp:62, songIndex:18,
      text:'Ya que el tiempo insiste en pasar, prefiero que pase contigo, entre risas, entre misas, entre viajes a Tunja y helados de domingo. Tal vez lo mágico de esta historia no está en los grandes gestos sino en la suma silenciosa de todos los días pequeños que decidimos compartir sin darnos cuenta de que estábamos construyendo algo que ya no se puede deshacer.' },

    { date:'Hoy y siempre', title:'El futuro que espero contigo', image:'assets/img/20.jpeg', rarity:'legendario', type:'Amor', hp:100, songIndex:0,
      text:'Quizás todavía no sé cómo se ve el futuro con exactitud, pero sé que quiero que tenga tu risa dentro, tus perritos corriendo por algún patio, tu mamá cerca, tus historias de maestra contadas antes de dormir. Espero que seas mi futuro, ya que ya eres, sin proponértelo, mi presente favorito.' },
  ],

  timeline: [
    { date:'Junio 2026',       title:'El comienzo oficial',    image:'assets/img/3.jpeg',  text:'El día que dijimos sí y el mundo adquirió un nuevo significado.' },
    { date:'Antes de nosotros', title:'Las madrugadas previas', image:'assets/img/1.jpeg',  text:'Mensajes a deshoras, risa fácil, el presentimiento de que algo grande estaba naciendo.' },
    { date:'La primera foto',   title:'Primera imagen juntos',  image:'assets/img/2.jpeg',  text:'El universo quiso dejar constancia visual de que éramos reales.' },
    { date:'En construcción',   title:'Todo lo que viene',      image:'assets/img/4.jpeg',  text:'El futuro lleno de planes y aventuras que todavía no existen pero ya los esperamos.' },
  ],
};

const RARITY_STARS  = { comun:'♡', raro:'♡♡', ultra:'♡♡♡', legendario:'♡♡♡♡' };
const RARITY_LABELS = { comun:'Dulce', raro:'Especial', ultra:'Mágico', legendario:'Para Siempre' };

/* ─────────────── BOULEVARD QUOTES ─────────────── */
const BOULEVARD_QUOTES = [
  { text: '"A veces hay que caminar por el boulevard más oscuro para encontrar la luz que siempre estuvo dentro de ti."',          attr: '— Boulevard, 2014' },
  { text: '"No es tarde para empezar a vivir la vida que siempre soñaste. Nunca lo es."',                                          attr: '— Boulevard, 2014' },
  { text: '"El amor verdadero no busca el camino más corto. Busca el camino correcto, aunque sea largo y tortuoso."',              attr: '— Boulevard, 2014' },
  { text: '"Hay quienes sueñan con ojos cerrados y quienes construyen el sueño con ojos abiertos. Sé de los segundos."',          attr: '— Boulevard, 2014' },
  { text: '"Cada paso en el boulevard es una historia. Cada historia es una vida. Cada vida merece ser vivida completamente."',    attr: '— Boulevard, 2014' },
  { text: '"El futuro pertenece a quienes creen en la belleza de sus sueños y tienen el valor de perseguirlos."',                  attr: '— Eleanor Roosevelt' },
  { text: '"Los sueños son el mapa del alma: te dicen a dónde ir cuando el mundo intenta decirte que te quedes quieto."',         attr: '— Anónimo' },
  { text: '"Soñar juntos no es duplicar el sueño. Es multiplicarlo por infinito."',                                                attr: '— Karen & Sebastian' },
];

/* ─────────────── STATE ─────────────── */
const state = {
  carouselIndex: 0, carouselTotal: 0, allCards: [],
  modalIndex: 0, quoteIndex: 0,
  selectedColor: 'yellow',
  audio: null, currentSongIndex: -1, audioPlaying: false,
};

/* ─────────────── ELEMENTS ─────────────── */
const $ = id => document.getElementById(id);
const el = {
  startCurtain: $('startCurtain'), startButton: $('startButton'),
  carouselRing: $('carouselRing'), carouselPrev: $('carouselPrev'), carouselNext: $('carouselNext'),
  carouselCounter: $('carouselCounter'), carouselCardName: $('carouselCardName'), carouselViewport: $('carouselViewport'),
  cardModal: $('cardModal'), cardModalClose: $('cardModalClose'), cardModalBackdrop: $('cardModalBackdrop'),
  cardModalCard: $('cardModalCard'), cardModalTitle: $('cardModalTitle'), cardModalText: $('cardModalText'),
  cardModalRarityLabel: $('cardModalRarityLabel'), cardModalSong: $('cardModalSong'),
  cardModalPrev: $('cardModalPrev'), cardModalNext: $('cardModalNext'), cardModalInfo: $('cardModalInfo'),
  addMemoryModal: $('addMemoryModal'), addMemoryClose: $('addMemoryClose'), addMemoryBackdrop: $('addMemoryBackdrop'),
  addMemoryForm: $('addMemoryForm'), addMemoryFile: $('addMemoryFile'),
  fileUploadContent: $('fileUploadContent'), filePreview: $('filePreview'),
  addMemorySongSelect: $('addMemorySongSelect'), addMemoryAudio: $('addMemoryAudio'), audioUploadName: $('audioUploadName'),
  addDreamModal: $('addDreamModal'), addDreamClose: $('addDreamClose'), addDreamBackdrop: $('addDreamBackdrop'),
  addDreamForm: $('addDreamForm'), dreamText: $('dreamText'),
  boulevardAddBtn: $('boulevardAddBtn'), boulevardNotes: $('boulevardNotes'), boulevardStrings: $('boulevardStrings'),
  boulevardQuoteText: $('boulevardQuoteText'), boulevardQuoteAttr: $('boulevardQuoteAttr'),
  musicButton: $('musicButton'), musicTitle: $('musicTitle'), musicStatus: $('musicStatus'),
  loveButton: $('loveButton'),
  topbarCounterValue: $('topbarCounterValue'), skyCanvas: $('skyCanvas'), fxLayer: $('fxLayer'),
};

/* ─────────────── UTILS ─────────────── */
function isVideoFile(src) { return src && /\.(mp4|webm|ogg|mov|avi)$/i.test(src); }
function isVideoSrc(src) {
  if (!src) return false;
  if (src.startsWith('idb:vid_')) return true;
  return /\.(mp4|webm|ogg|mov|avi)$/i.test(src);
}
function loadUserMemories() { try { return JSON.parse(localStorage.getItem('userMemories') || '[]'); } catch { return []; } }
function saveUserMemories(arr) { try { localStorage.setItem('userMemories', JSON.stringify(arr)); } catch {} }
function loadBoulevardDreams() { try { const d = localStorage.getItem('boulevardDreams2'); return d ? JSON.parse(d) : null; } catch { return null; } }
function saveBoulevardDreams(arr) { try { localStorage.setItem('boulevardDreams2', JSON.stringify(arr)); } catch {} }
function loadGalleryOverrides() { try { return JSON.parse(localStorage.getItem('galleryOverrides') || '{}'); } catch { return {}; } }
function saveGalleryOverrides(obj) { try { localStorage.setItem('galleryOverrides', JSON.stringify(obj)); } catch {} }

/* ─────────────── MEDIADB — IndexedDB para fotos grandes ─────────────── */
const MediaDB = (() => {
  let _db = null;
  function open() {
    if (_db) return Promise.resolve(_db);
    return new Promise((res, rej) => {
      const r = indexedDB.open('albumMediaV1', 1);
      r.onupgradeneeded = e => e.target.result.createObjectStore('media');
      r.onsuccess = e => { _db = e.target.result; res(_db); };
      r.onerror = () => rej(r.error);
    });
  }
  return {
    save(key, file) {
      return open().then(d => new Promise((res, rej) => {
        const tx = d.transaction('media','readwrite');
        tx.objectStore('media').put(file, key);
        tx.oncomplete = () => res(); tx.onerror = () => rej(tx.error);
      }));
    },
    load(key) {
      return open().then(d => new Promise((res, rej) => {
        const req = d.transaction('media').objectStore('media').get(key);
        req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error);
      }));
    },
  };
})();

function resolveIdbSrc(src, cb) {
  if (!src || !src.startsWith('idb:')) { cb(src); return; }
  MediaDB.load(src.slice(4)).then(blob => cb(blob ? URL.createObjectURL(blob) : '')).catch(() => cb(''));
}

const IDB_PLACEHOLDER = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

function getCardMedia(card) {
  if (card.media && card.media.length) return card.media;
  return card.image ? [card.image] : [];
}

/* Gradient fallback per rarity for missing images */
const RARITY_GRADIENT = {
  comun:     'linear-gradient(145deg,#1a1a2a,#0d0d18)',
  raro:      'linear-gradient(145deg,#0d1a2e,#071020)',
  ultra:     'linear-gradient(145deg,#1a0d2e,#0d0720)',
  legendario:'linear-gradient(145deg,#2a1a00,#1a0e00)',
};

/* ─────────────── SKY CANVAS ─────────────── */
function initSky() {
  const canvas = el.skyCanvas; if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, t = 0;

  const isMobile = () => window.innerWidth < 760;
  const mobile = isMobile();

  // Stars — fewer on mobile
  const starCount = mobile ? 80 : 280;
  const stars = Array.from({length:starCount}, () => ({
    x:Math.random(), y:Math.random(),
    r:Math.random()*(mobile?1.2:1.6)+0.2,
    a:Math.random(), da:(Math.random()-0.5)*0.004,
  }));

  // Constellations — skip on mobile
  const constellations = mobile ? [] : [
    { pts:[{x:0.08,y:0.12},{x:0.14,y:0.09},{x:0.19,y:0.14},{x:0.17,y:0.20},{x:0.11,y:0.22}] },
    { pts:[{x:0.72,y:0.07},{x:0.78,y:0.05},{x:0.82,y:0.10},{x:0.79,y:0.15},{x:0.73,y:0.13},{x:0.72,y:0.07}] },
    { pts:[{x:0.42,y:0.05},{x:0.47,y:0.03},{x:0.52,y:0.06},{x:0.50,y:0.11},{x:0.45,y:0.12}] },
    { pts:[{x:0.60,y:0.18},{x:0.65,y:0.15},{x:0.70,y:0.19},{x:0.68,y:0.25}] },
    { pts:[{x:0.25,y:0.22},{x:0.30,y:0.18},{x:0.35,y:0.22},{x:0.32,y:0.28},{x:0.27,y:0.27}] },
  ];

  // Satellites — skip on mobile
  const satellites = mobile ? [] : Array.from({length:3}, () => ({
    x: Math.random(), y: Math.random() * 0.5,
    vx:(Math.random()*0.0006+0.0003) * (Math.random()<0.5?1:-1),
    vy:(Math.random()*0.0002+0.0001) * (Math.random()<0.5?1:-1),
    trail:[],
  }));

  // Astronaut — skip on mobile
  const astro = mobile ? null : { x:0.15, y:0.35, vx:0.00025, vy:0.00012, angle:0 };

  // Petals — fewer on mobile
  const petalCount = mobile ? 4 : 12;
  const petals = Array.from({length:petalCount}, () => ({
    x:Math.random(), y:Math.random()*0.8+0.1,
    vx:(Math.random()-0.5)*0.0004,
    vy:-Math.random()*0.0003-0.0001,
    a:Math.random()*Math.PI*2, va:(Math.random()-0.5)*0.015,
    opacity:Math.random()*0.5+0.2,
    symbol:['🌸','🌺','🌼','🌹','💐'][Math.floor(Math.random()*5)],
  }));

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);

  // Throttle to 30fps on mobile
  let lastFrame = 0;
  const targetInterval = mobile ? 33 : 0;

  (function tick(now) {
    requestAnimationFrame(tick);
    if (mobile && now - lastFrame < targetInterval) return;
    lastFrame = now;
    t += 0.01;
    ctx.clearRect(0, 0, W, H);

    // Constellations (desktop only)
    constellations.forEach(c => {
      ctx.beginPath();
      c.pts.forEach((p, i) => {
        const cx = p.x * W, cy = p.y * H;
        if (i === 0) ctx.moveTo(cx, cy); else ctx.lineTo(cx, cy);
      });
      ctx.strokeStyle = `rgba(200,180,255,${0.12 + 0.04 * Math.sin(t*0.7)})`;
      ctx.lineWidth = 0.8; ctx.stroke();
      c.pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x*W, p.y*H, 1.6, 0, Math.PI*2);
        ctx.fillStyle = `rgba(220,210,255,${0.7+0.2*Math.sin(t)})`; ctx.fill();
      });
    });

    // Stars
    stars.forEach(s => {
      s.a = Math.max(0.06, Math.min(1, s.a + s.da));
      if (s.a <= 0.06 || s.a >= 1) s.da *= -1;
      ctx.beginPath(); ctx.arc(s.x*W, s.y*H, s.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(255,240,200,${s.a*0.6})`; ctx.fill();
    });

    // Satellites (desktop only)
    satellites.forEach(sat => {
      sat.x += sat.vx; sat.y += sat.vy;
      if (sat.x < 0) sat.x = 1; if (sat.x > 1) sat.x = 0;
      if (sat.y < 0) sat.y = 0.5; if (sat.y > 0.5) sat.y = 0;
      sat.trail.push({x:sat.x*W, y:sat.y*H});
      if (sat.trail.length > 18) sat.trail.shift();
      sat.trail.forEach((pt, i) => {
        ctx.beginPath(); ctx.arc(pt.x, pt.y, 0.8, 0, Math.PI*2);
        ctx.fillStyle = `rgba(180,230,255,${(i/sat.trail.length)*0.5})`; ctx.fill();
      });
      ctx.beginPath(); ctx.arc(sat.x*W, sat.y*H, 2, 0, Math.PI*2);
      ctx.fillStyle = 'rgba(180,230,255,0.9)'; ctx.fill();
    });

    // Astronaut (desktop only)
    if (astro) {
      astro.x += astro.vx; astro.y += astro.vy;
      astro.angle = Math.sin(t*0.3)*0.3;
      if (astro.x > 1.05) astro.x = -0.05;
      if (astro.y < 0.05) astro.vy *= -1;
      if (astro.y > 0.6)  astro.vy *= -1;
      ctx.save(); ctx.translate(astro.x*W, astro.y*H); ctx.rotate(astro.angle);
      ctx.font = '18px serif'; ctx.globalAlpha = 0.55;
      ctx.fillText('👨‍🚀', -9, 9); ctx.globalAlpha = 1; ctx.restore();
    }

    // Petals
    petals.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.a += p.va;
      if (p.x < -0.02) p.x = 1.02; if (p.x > 1.02) p.x = -0.02;
      if (p.y < -0.05) p.y = 1.05; if (p.y > 1.05) p.y = -0.05;
      ctx.save(); ctx.translate(p.x*W, p.y*H); ctx.rotate(p.a);
      ctx.globalAlpha = p.opacity;
      ctx.font = `${14+4*Math.sin(t+p.x*6)}px serif`;
      ctx.fillText(p.symbol, -8, 8); ctx.restore();
    });
  })(0);
}

/* ─────────────── COUNTER ─────────────── */
function initCounter() {
  function update() {
    const diff = Date.now() - APP_DATA.startDate.getTime();
    if (diff < 0) { if (el.topbarCounterValue) el.topbarCounterValue.textContent = 'Muy pronto...'; return; }
    const tot = Math.floor(diff / 1000);
    const months = Math.floor(tot / (30.44 * 24 * 3600));
    const days   = Math.floor((tot % (30.44 * 24 * 3600)) / (24 * 3600));
    const hours  = Math.floor((tot % (24 * 3600)) / 3600);
    const mins   = Math.floor((tot % 3600) / 60);
    const secs   = tot % 60;
    const f = n => String(n).padStart(2, '0');
    if (el.topbarCounterValue) el.topbarCounterValue.textContent = `${f(months)}m ${f(days)}d ${f(hours)}h ${f(mins)}m ${f(secs)}s`;
    if ($('counterMonths'))  $('counterMonths').textContent  = f(months);
    if ($('counterDays'))    $('counterDays').textContent    = f(days);
    if ($('counterHours'))   $('counterHours').textContent   = f(hours);
    if ($('counterMinutes')) $('counterMinutes').textContent = f(mins);
    if ($('counterSeconds')) $('counterSeconds').textContent = f(secs);
  }
  update(); setInterval(update, 1000);
}

/* ─────────────── TIMELINE ─────────────── */
function initTimeline() {
  const grid = $('timelineGrid'); if (!grid) return;
  APP_DATA.timeline.forEach(item => {
    const card = document.createElement('article');
    card.className = 'timeline-card glass-panel';
    card.innerHTML = `
      <div class="timeline-media">
        <img src="${item.image}" alt="${item.title}" loading="lazy"
             onerror="this.style.display='none';this.parentElement.style.background='linear-gradient(145deg,#1a1220,#0d0a18)'"/>
      </div>
      <div class="timeline-card__body">
        <span class="card-meta">${item.date}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>`;
    grid.appendChild(card);
  });
}

/* ═══════════════════════════════════════════════════════
   ★★★  COVERFLOW CAROUSEL  ★★★
   ═══════════════════════════════════════════════════════ */

function getCoverflowTransform(offset) {
  const abs = Math.abs(offset), sign = Math.sign(offset) || 1;
  const mob = window.innerWidth < 760;
  if (abs === 0) return { x:0,        z:0,    ry:0,       scale:mob?1.0:1.06, opacity:1,    filter:'none',              zi:100 };
  if (abs === 1) return { x:sign*(mob?148:258), z:-80,  ry:-sign*44, scale:mob?0.82:0.86,opacity:0.78, filter:'brightness(0.82)',  zi:80  };
  if (abs === 2) return { x:sign*(mob?258:470), z:-200, ry:-sign*62, scale:mob?0.65:0.69,opacity:0.52, filter:'brightness(0.58)',  zi:60  };
  if (abs === 3) return { x:sign*(mob?330:620), z:-340, ry:-sign*75, scale:0.50,           opacity:0.18, filter:'brightness(0.3)',   zi:40  };
  return { x:sign*800, z:-500, ry:-sign*85, scale:0.32, opacity:0, filter:'brightness(0.1)', zi:20 };
}

function circularOffset(i, active, total) {
  let off = i - active;
  if (off > total / 2) off -= total;
  if (off < -total / 2) off += total;
  return off;
}

function buildAllCards() {
  const memories = loadUserMemories();
  const overrides = loadGalleryOverrides();
  const gallery = APP_DATA.gallery.map((card, i) => overrides[i] ? { ...card, ...overrides[i] } : card);
  state.allCards = [...gallery, ...memories];
}

function createPokeCardElement(cardData, index, isAdd) {
  const slot = document.createElement('div');
  slot.className = `poke-card-slot${isAdd?' add-card':''} rarity-${cardData.rarity||'comun'}`;
  slot.setAttribute('data-slot-index', index);

  if (isAdd) {
    slot.innerHTML = `<div class="poke-card-roulette"><span class="pcr-add-icon">✦</span><p class="pcr-add-text">Agregar<br/>nuevo recuerdo</p></div>`;
    return slot;
  }

  const rarity = cardData.rarity || 'comun';
  const stars  = RARITY_STARS[rarity];
  const num    = String(index + 1).padStart(3, '0');
  const bg     = RARITY_GRADIENT[rarity];

  const rawSrc = getCardMedia(cardData)[0] || '';
  const thumbSrc = rawSrc.startsWith('idb:') ? IDB_PLACEHOLDER : rawSrc;
  let mediaHtml = isVideoSrc(rawSrc)
    ? `<video src="${rawSrc.startsWith('idb:') ? '' : thumbSrc}" class="pcr-photo" autoplay muted loop playsinline></video>`
    : `<img src="${thumbSrc}" class="pcr-photo" alt="${cardData.title}" loading="lazy"
            onerror="this.style.display='none'"/>`;

  slot.innerHTML = `
    <div class="poke-card-roulette" style="background:${bg}">
      <div class="pcr-photo-wrap">${mediaHtml}</div>
      <div class="pcr-top">
        <span class="pcr-num">#${num}</span>
        <span class="pcr-type-badge">${cardData.type||'Memoria'}</span>
      </div>
      <div class="pcr-overlay">
        <span class="pcr-name">${cardData.title}</span>
        <div class="pcr-bottom-row">
          <span class="pcr-stars">${stars}</span>
          <span class="pcr-hp">♥ ${cardData.hp||60} HP</span>
        </div>
      </div>
      <div class="pcr-corner pcr-corner--tl"></div><div class="pcr-corner pcr-corner--tr"></div>
      <div class="pcr-corner pcr-corner--bl"></div><div class="pcr-corner pcr-corner--br"></div>
      <div class="pcr-holo"></div><div class="pcr-sparkle"></div>
    </div>`;
  return slot;
}

function updateCoverflowPositions(animate = true) {
  const isMob = window.innerWidth < 760;
  const slots = el.carouselRing.querySelectorAll('.poke-card-slot');
  // On mobile use faster transition
  const transitionCss = animate
    ? (isMob
        ? 'transform 0.32s ease,opacity 0.32s ease'
        : 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94),opacity 0.65s ease,filter 0.65s ease')
    : 'none';

  slots.forEach((slot, i) => {
    const off = circularOffset(i, state.carouselIndex, state.carouselTotal);
    const cfg = getCoverflowTransform(off);
    slot.style.transition = transitionCss;

    if (isMob) {
      // Simplified mobile layout: only show -2..+2, hide the rest
      if (Math.abs(off) > 2) {
        slot.style.opacity = '0';
        slot.style.pointerEvents = 'none';
        slot.style.transform = `translateX(${cfg.x}px) scale(0.1)`;
        slot.style.zIndex = '0';
      } else {
        // Flat 2D transform on mobile (no rotateY = much faster)
        const mobileX = off * (window.innerWidth * 0.44);
        const mobileScale = off === 0 ? 1 : 0.72;
        slot.style.transform  = `translateX(${mobileX}px) scale(${mobileScale})`;
        slot.style.opacity    = off === 0 ? '1' : '0.45';
        slot.style.filter     = off === 0 ? 'none' : 'brightness(0.55)';
        slot.style.zIndex     = off === 0 ? '10' : String(5 - Math.abs(off));
        slot.style.pointerEvents = Math.abs(off) <= 1 ? 'auto' : 'none';
      }
    } else {
      slot.style.transform  = `translateX(${cfg.x}px) translateZ(${cfg.z}px) rotateY(${cfg.ry}deg) scale(${cfg.scale})`;
      slot.style.opacity    = cfg.opacity;
      slot.style.filter     = cfg.filter;
      slot.style.zIndex     = cfg.zi;
      slot.style.pointerEvents = Math.abs(off) <= 3 ? 'auto' : 'none';
    }

    if (off === 0) slot.classList.add('is-center');
    else slot.classList.remove('is-center');
  });
}

function updateCarouselCounter() {
  const i = state.carouselIndex;
  if (el.carouselCounter) el.carouselCounter.textContent = `${i+1} / ${state.carouselTotal}`;
  const card = state.allCards[i];
  if (el.carouselCardName) el.carouselCardName.textContent = card ? card.title : 'Agregar recuerdo';
}

function renderCarousel() {
  buildAllCards();
  el.carouselRing.innerHTML = '';
  const total = state.allCards.length + 1;
  state.carouselTotal = total;

  state.allCards.forEach((card, i) => {
    const slot = createPokeCardElement(card, i, false);
    slot.addEventListener('click', () => handleCardClick(i));
    const firstSrc = getCardMedia(card)[0] || '';
    if (firstSrc.startsWith('idb:')) {
      resolveIdbSrc(firstSrc, url => {
        if (!url) return;
        const m = slot.querySelector('.pcr-photo');
        if (m) { m.src = url; m.style.display = ''; }
      });
    }
    el.carouselRing.appendChild(slot);
  });

  const addSlot = createPokeCardElement({rarity:'comun'}, state.allCards.length, true);
  addSlot.addEventListener('click', openAddMemoryModal);
  el.carouselRing.appendChild(addSlot);

  updateCoverflowPositions(false);
  updateCarouselCounter();
  if (window.innerWidth >= 760) initHolographicEffects();
}

function handleCardClick(i) {
  if (i === state.carouselIndex) openCardModal(i);
  else { state.carouselIndex = i; updateCoverflowPositions(true); updateCarouselCounter(); }
}

function initHolographicEffects() {
  el.carouselRing.querySelectorAll('.poke-card-slot:not(.add-card)').forEach(slot => {
    const inner = slot.querySelector('.poke-card-roulette'); if (!inner) return;
    inner.addEventListener('mousemove', e => {
      const r = inner.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI);
      inner.style.setProperty('--holo-angle', `${angle+135}deg`);
      inner.style.setProperty('--holo-opacity', '0.55');
      inner.style.setProperty('--sparkle-x', `${x*100}%`);
      inner.style.setProperty('--sparkle-y', `${y*100}%`);
      inner.style.setProperty('--sparkle-opacity', '0.65');
    });
    inner.addEventListener('mouseleave', () => {
      const isLeg = slot.className.includes('legendario');
      inner.style.setProperty('--holo-opacity', isLeg ? '0.45' : '0');
      inner.style.setProperty('--sparkle-opacity', isLeg ? '0.55' : '0');
    });
  });
}

function initCarouselNav() {
  el.carouselPrev.addEventListener('click', () => { state.carouselIndex = (state.carouselIndex - 1 + state.carouselTotal) % state.carouselTotal; updateCoverflowPositions(true); updateCarouselCounter(); });
  el.carouselNext.addEventListener('click', () => { state.carouselIndex = (state.carouselIndex + 1) % state.carouselTotal; updateCoverflowPositions(true); updateCarouselCounter(); });

  /* Touch swipe */
  let tx0 = 0, ty0 = 0;
  el.carouselViewport.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; ty0 = e.touches[0].clientY; }, {passive:true});
  el.carouselViewport.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx0, dy = e.changedTouches[0].clientY - ty0;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 38) {
      state.carouselIndex = (state.carouselIndex + (dx < 0 ? 1 : -1) + state.carouselTotal) % state.carouselTotal;
      updateCoverflowPositions(true); updateCarouselCounter();
    }
  }, {passive:true});

  /* Mouse drag */
  let mx0 = 0, dragging = false;
  el.carouselViewport.addEventListener('mousedown', e => { mx0 = e.clientX; dragging = false; });
  el.carouselViewport.addEventListener('mousemove', e => { if (Math.abs(e.clientX - mx0) > 5) dragging = true; });
  el.carouselViewport.addEventListener('mouseup', e => {
    const dx = e.clientX - mx0;
    if (dragging && Math.abs(dx) > 40) {
      state.carouselIndex = (state.carouselIndex + (dx < 0 ? 1 : -1) + state.carouselTotal) % state.carouselTotal;
      updateCoverflowPositions(true); updateCarouselCounter();
    }
    dragging = false;
  });

  document.addEventListener('keydown', e => {
    if (el.cardModal.classList.contains('is-open')) return;
    if (e.key === 'ArrowLeft') el.carouselPrev.click();
    if (e.key === 'ArrowRight') el.carouselNext.click();
  });
  window.addEventListener('resize', () => updateCoverflowPositions(false));
}

/* ═══════════════════════════════════════════════════════
   CARD MODAL
   ═══════════════════════════════════════════════════════ */

function buildFullCard(cardData, index) {
  const rarity = cardData.rarity || 'comun';
  const stars  = RARITY_STARS[rarity];
  const num    = String(index + 1).padStart(3, '0');
  const bg     = RARITY_GRADIENT[rarity];
  const mediaList = getCardMedia(cardData);
  const primarySrc = mediaList[0] || '';
  const primaryDisp = primarySrc.startsWith('idb:') ? IDB_PLACEHOLDER : primarySrc;
  const mainMedia = isVideoSrc(primarySrc)
    ? `<video src="${primarySrc.startsWith('idb:') ? '' : primaryDisp}" class="pcr-photo" autoplay muted loop playsinline></video>`
    : `<img src="${primaryDisp}" class="pcr-photo" alt="${cardData.title}"
            onerror="if(this.getAttribute('src')!==IDB_PLACEHOLDER)this.style.display='none'"/>`;
  const extraStrip = mediaList.length > 1
    ? `<div class="pcr-media-strip">${mediaList.slice(1,5).map((s,i) => {
        const d = s.startsWith('idb:') ? IDB_PLACEHOLDER : s;
        return isVideoSrc(s)
          ? `<video src="${s.startsWith('idb:')?'':d}" class="pcr-media-thumb" muted playsinline></video>`
          : `<img src="${d}" class="pcr-media-thumb" alt=""/>`;
      }).join('')}</div>`
    : '';

  return `
    <div class="pcr-photo-wrap" style="background:${bg}">${mainMedia}${extraStrip}</div>
    <div class="pcr-top">
      <span class="pcr-num">#${num}</span>
      <span class="pcr-type-badge">${cardData.type||'Memoria'}</span>
    </div>
    <div class="pcr-overlay">
      <span class="pcr-name">${cardData.title}</span>
      <div class="pcr-bottom-row"><span class="pcr-stars">${stars}</span><span class="pcr-hp">♥ ${cardData.hp||60} HP</span></div>
    </div>
    <div class="pcr-corner pcr-corner--tl"></div><div class="pcr-corner pcr-corner--tr"></div>
    <div class="pcr-corner pcr-corner--bl"></div><div class="pcr-corner pcr-corner--br"></div>
    <div class="pcr-holo" style="--holo-opacity:0.35"></div><div class="pcr-sparkle"></div>`;
}

function openCardModal(index) {
  const card = state.allCards[index]; if (!card) return;
  state.modalIndex = index;

  const rarity = card.rarity || 'comun';
  el.cardModalCard.className = `poke-card-full rarity-${rarity}`;
  el.cardModalCard.style.background = RARITY_GRADIENT[rarity];
  el.cardModalCard.innerHTML = buildFullCard(card, index);
  // Resolve all idb: media sources
  getCardMedia(card).forEach((src, i) => {
    if (!src.startsWith('idb:')) return;
    resolveIdbSrc(src, url => {
      if (!url) return;
      if (i === 0) {
        const m = el.cardModalCard.querySelector('.pcr-photo');
        if (m) { m.src = url; m.style.display = ''; }
      } else {
        const thumbs = el.cardModalCard.querySelectorAll('.pcr-media-thumb');
        if (thumbs[i-1]) { thumbs[i-1].src = url; thumbs[i-1].style.display = ''; }
      }
    });
  });

  el.cardModalRarityLabel.className = `card-modal__rarity-label rarity-${rarity}`;
  el.cardModalRarityLabel.textContent = `${RARITY_STARS[rarity]} ${RARITY_LABELS[rarity]||rarity} • ${card.type||'Memoria'}`;
  el.cardModalTitle.textContent = card.title;
  el.cardModalText.textContent = card.text || '';

  /* Song info + play button */
  const si = card.songIndex ?? card.songBlobIndex ?? -1;
  const song = (si >= 0 && si < APP_DATA.songs.length) ? APP_DATA.songs[si] : null;
  const customSrc = card.customSongSrc || null;

  if (el.cardModalSong) {
    if (song || customSrc) {
      const label = customSrc ? (card.customSongName || 'Canción adjunta') : `♪ ${song.title}${song.artist?' — '+song.artist:''}`;
      el.cardModalSong.innerHTML = `<span>♪</span> ${label} <small style="opacity:0.6;margin-left:8px;">Toca para escuchar</small>`;
      el.cardModalSong.style.display = 'flex';
      el.cardModalSong.onclick = () => {
        const src = customSrc || (song ? song.src : '');
        if (src) playAudio(src, si, song);
      };
    } else {
      el.cardModalSong.innerHTML = '';
      el.cardModalSong.style.display = 'none';
    }
  }

  // Auto-play card song on open
  if (song || customSrc) {
    const autoSrc = customSrc || (song ? song.src : '');
    if (autoSrc) playAudio(autoSrc, si, song);
  }

  // Edit / delete for user-added memories
  const infoScroll = el.cardModalInfo.querySelector('.card-modal__info-scroll');
  let editRow = el.cardModalInfo.querySelector('.card-modal__edit-row');
  if (!editRow) { editRow = document.createElement('div'); editRow.className = 'card-modal__edit-row'; infoScroll.appendChild(editRow); }
  const isUserMemory = index >= APP_DATA.gallery.length;
  editRow.innerHTML = `
    <button class="ghost-button" style="width:100%;justify-content:center;gap:6px;margin-top:8px;">✏️ ${isUserMemory ? 'Editar recuerdo' : 'Editar carta'}</button>
    ${isUserMemory ? '<button class="ghost-button" style="width:100%;justify-content:center;gap:6px;color:rgba(255,120,120,0.85);">🗑️ Eliminar recuerdo</button>' : ''}`;
  if (isUserMemory) {
    const memIndex = index - APP_DATA.gallery.length;
    editRow.children[0].onclick = () => { closeCardModal(); openEditMemory(memIndex, card); };
    if (editRow.children[1]) editRow.children[1].onclick = () => deleteUserMemory(memIndex);
  } else {
    editRow.children[0].onclick = () => { closeCardModal(); openEditGalleryCard(index, card); };
  }

  el.cardModal.classList.add('is-open');
  el.cardModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.body.classList.add('card-modal-open');
  initFullCardHolo(el.cardModalCard, rarity);
}

function initFullCardHolo(cardEl, rarity) {
  if (!cardEl) return;
  // En móvil táctil no hay hover y el giroscopio compite con el scroll → skip
  if (window.matchMedia('(max-width:760px)').matches) return;
  const holo = cardEl.querySelector('.pcr-holo'), sparkle = cardEl.querySelector('.pcr-sparkle');
  if (!holo || !sparkle) return;
  cardEl.addEventListener('mousemove', e => {
    const r = cardEl.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    cardEl.style.transform = `perspective(900px) rotateX(${(y-0.5)*-18}deg) rotateY(${(x-0.5)*18}deg)`;
    holo.style.setProperty('--holo-angle', `${Math.atan2(y-0.5,x-0.5)*(180/Math.PI)+135}deg`);
    holo.style.setProperty('--holo-opacity', '0.65');
    sparkle.style.setProperty('--sparkle-x', `${x*100}%`);
    sparkle.style.setProperty('--sparkle-y', `${y*100}%`);
    sparkle.style.setProperty('--sparkle-opacity', '0.75');
  });
  cardEl.addEventListener('mouseleave', () => {
    cardEl.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    if (rarity !== 'legendario') { holo.style.setProperty('--holo-opacity','0.35'); sparkle.style.setProperty('--sparkle-opacity','0'); }
  });
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', e => {
      if (!el.cardModal.classList.contains('is-open')) return;
      const tx = Math.max(-12, Math.min(12, (e.beta - 45) * 0.3));
      const ty = Math.max(-12, Math.min(12, e.gamma * 0.3));
      cardEl.style.transform = `perspective(900px) rotateX(${-tx}deg) rotateY(${ty}deg)`;
    }, {passive:true});
  }
}

function closeCardModal() {
  el.cardModal.classList.remove('is-open');
  el.cardModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  document.body.classList.remove('card-modal-open');
}

function initCardModal() {
  el.cardModalClose.addEventListener('click', closeCardModal);
  el.cardModalBackdrop.addEventListener('click', closeCardModal);
  el.cardModalPrev.addEventListener('click', () => {
    state.modalIndex = (state.modalIndex - 1 + state.allCards.length) % state.allCards.length;
    openCardModal(state.modalIndex);
    state.carouselIndex = state.modalIndex; updateCoverflowPositions(true); updateCarouselCounter();
  });
  el.cardModalNext.addEventListener('click', () => {
    state.modalIndex = (state.modalIndex + 1) % state.allCards.length;
    openCardModal(state.modalIndex);
    state.carouselIndex = state.modalIndex; updateCoverflowPositions(true); updateCarouselCounter();
  });
}

/* ═══════════════════════════════════════════════════════
   MUSIC PLAYER
   ═══════════════════════════════════════════════════════ */

function buildSongMenu() {
  const existing = document.getElementById('songMenu');
  if (existing) { existing.remove(); return; }

  const menu = document.createElement('div');
  menu.id = 'songMenu';
  menu.className = 'song-menu glass-panel';
  menu.innerHTML = `<div class="song-menu__header">🎵 Nuestras Canciones</div>` +
    APP_DATA.songs.map((s, i) => `
      <button class="song-menu__item${i === state.currentSongIndex ? ' is-active' : ''}" data-idx="${i}">
        <span class="song-menu__title">${s.title}</span>
        ${s.artist ? `<span class="song-menu__artist">${s.artist}</span>` : ''}
      </button>`).join('');

  menu.querySelectorAll('.song-menu__item').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.idx);
      playAudio(APP_DATA.songs[idx].src, idx, APP_DATA.songs[idx]);
      menu.remove();
    });
  });

  // Cierra al tocar fuera
  setTimeout(() => document.addEventListener('click', function close(e) {
    if (!menu.contains(e.target) && e.target !== el.musicButton) { menu.remove(); document.removeEventListener('click', close); }
  }), 50);

  document.body.appendChild(menu);
  // Posicionar bajo el botón de música
  const r = el.musicButton.getBoundingClientRect();
  menu.style.top = (r.bottom + 8) + 'px';
  menu.style.left = Math.max(8, r.left - 60) + 'px';
}

function initMusic() {
  state.audio = new Audio();
  state.audio.addEventListener('ended', () => {
    // Avanzar automáticamente a la siguiente canción
    const next = ((state.currentSongIndex >= 0 ? state.currentSongIndex : 0) + 1) % APP_DATA.songs.length;
    playAudio(APP_DATA.songs[next].src, next, APP_DATA.songs[next]);
  });

  // Click en el icono/área de play → play/pause
  const icon = el.musicButton.querySelector('.music-button__icon');
  if (icon) {
    icon.addEventListener('click', e => {
      e.stopPropagation();
      if (state.audioPlaying) {
        state.audio.pause();
        state.audioPlaying = false;
        document.body.classList.remove('music-playing');
        el.musicButton.setAttribute('aria-pressed', 'false');
      } else {
        const idx = state.currentSongIndex >= 0 ? state.currentSongIndex : 0;
        const song = APP_DATA.songs[idx];
        if (song?.src) playAudio(song.src, idx, song);
        else if (el.musicStatus) el.musicStatus.textContent = 'Pon el MP3 en assets/music/';
      }
    });
  }

  // Click en el texto/título → abrir lista de canciones
  const copy = el.musicButton.querySelector('.music-button__copy');
  if (copy) {
    copy.addEventListener('click', e => { e.stopPropagation(); buildSongMenu(); });
  }

  // Fallback: click en el botón completo si no hay icono separado
  if (!icon && !copy) {
    el.musicButton.addEventListener('click', () => buildSongMenu());
  }
}

function playAudio(src, songIndex, songData) {
  if (!src) return;
  state.audio.src = src;
  state.audio.play().then(() => {
    state.audioPlaying = true;
    state.currentSongIndex = songIndex;
    document.body.classList.add('music-playing');
    el.musicButton.setAttribute('aria-pressed', 'true');
    if (el.musicTitle) el.musicTitle.textContent = songData ? songData.title : 'Reproduciendo';
    if (el.musicStatus) el.musicStatus.textContent = songData && songData.artist ? songData.artist : '♪';
  }).catch(() => {
    if (el.musicStatus) el.musicStatus.textContent = 'No se pudo cargar ♪';
  });
}

/* ═══════════════════════════════════════════════════════
   ADD MEMORY
   ═══════════════════════════════════════════════════════ */

function populateSongSelect() {
  if (!el.addMemorySongSelect) return;
  APP_DATA.songs.forEach((s, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = `${s.title}${s.artist ? ' — ' + s.artist : ''}`;
    el.addMemorySongSelect.appendChild(opt);
  });
}

let _memEditIndex = -1;
let _galleryEditIndex = -1;

function openAddMemoryModal() {
  _memEditIndex = -1;
  el.addMemoryModal.classList.add('is-open');
  el.addMemoryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeAddMemoryModal() {
  _memEditIndex = -1;
  _galleryEditIndex = -1;
  el.addMemoryModal.classList.remove('is-open');
  el.addMemoryModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function openEditMemory(memIndex, card) {
  _memEditIndex = memIndex;
  // Pre-fill form
  const f = el.addMemoryForm;
  if (f.elements.title)  f.elements.title.value  = card.title  || '';
  if (f.elements.date)   f.elements.date.value   = card.date   || '';
  if (f.elements.text)   f.elements.text.value   = card.text   || '';
  if (f.elements.rarity) f.elements.rarity.value = card.rarity || 'comun';
  if (el.addMemorySongSelect) el.addMemorySongSelect.value = card.songIndex ?? '';
  // Show note about image
  const note = f.querySelector('.edit-image-note') || (() => {
    const p = document.createElement('p');
    p.className = 'edit-image-note';
    p.style.cssText = 'font-size:0.78rem;color:rgba(255,200,120,0.8);margin:0 0 8px;';
    p.textContent = 'Deja vacío para conservar las fotos actuales, o selecciona nuevas para reemplazarlas.';
    f.querySelector('.file-upload-area').before(p);
    return p;
  })();
  note.style.display = 'block';
  el.addMemoryModal.classList.add('is-open');
  el.addMemoryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function openEditGalleryCard(galleryIndex, card) {
  _memEditIndex = -2;
  _galleryEditIndex = galleryIndex;
  const f = el.addMemoryForm;
  if (f.elements.title)  f.elements.title.value  = card.title  || '';
  if (f.elements.date)   f.elements.date.value   = card.date   || '';
  if (f.elements.text)   f.elements.text.value   = card.text   || '';
  if (f.elements.rarity) f.elements.rarity.value = card.rarity || 'comun';
  if (el.addMemorySongSelect) el.addMemorySongSelect.value = card.songIndex ?? '';
  const note = f.querySelector('.edit-image-note') || (() => {
    const p = document.createElement('p');
    p.className = 'edit-image-note';
    p.style.cssText = 'font-size:0.78rem;color:rgba(255,200,120,0.8);margin:0 0 8px;';
    f.querySelector('.file-upload-area').before(p);
    return p;
  })();
  note.textContent = 'Editando carta del álbum. Deja la imagen vacía para conservar la foto original.';
  note.style.display = 'block';
  el.addMemoryModal.classList.add('is-open');
  el.addMemoryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function deleteUserMemory(memIndex) {
  if (!confirm('¿Eliminar este recuerdo para siempre?')) return;
  const memories = loadUserMemories();
  memories.splice(memIndex, 1);
  saveUserMemories(memories);
  closeCardModal();
  renderCarousel();
}

function initAddMemory() {
  el.addMemoryClose.addEventListener('click', closeAddMemoryModal);
  el.addMemoryBackdrop.addEventListener('click', closeAddMemoryModal);

  let pendingMediaFiles = [];
  let pendingAudioBlob = null;
  let pendingAudioName = '';

  el.addMemoryFile.addEventListener('change', e => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    pendingMediaFiles = files;
    el.filePreview.style.display = 'block';
    el.fileUploadContent.style.display = 'none';
    el.filePreview.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;padding:8px;';
    el.filePreview.innerHTML = files.map(file => {
      const url = URL.createObjectURL(file);
      return isVideoFile(file.name)
        ? `<video src="${url}" muted style="height:100px;width:auto;max-width:100%;border-radius:10px;object-fit:cover;flex-shrink:0;"></video>`
        : `<img src="${url}" alt="preview" style="height:100px;width:auto;max-width:100%;object-fit:cover;border-radius:10px;flex-shrink:0;"/>`;
    }).join('');
  });

  el.addMemoryAudio.addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return;
    pendingAudioBlob = URL.createObjectURL(file);
    pendingAudioName = file.name.replace(/\.[^.]+$/, '');
    if (el.audioUploadName) el.audioUploadName.textContent = '♪ ' + pendingAudioName;
  });

  el.addMemoryForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(el.addMemoryForm);
    const title = data.get('title') || 'Nuevo Recuerdo';
    const date = data.get('date') || new Date().toISOString().split('T')[0];
    const text = data.get('text') || '';
    const rarity = data.get('rarity') || 'comun';
    const songIndex = data.get('songIndex') !== '' ? parseInt(data.get('songIndex')) : -1;
    const rarityHp = {comun:60,raro:75,ultra:88,legendario:100};

    const finalize = (mediaSrcs) => {
      const primaryImage = mediaSrcs[0] || '';
      if (_memEditIndex === -2 && _galleryEditIndex >= 0) {
        const overrides = loadGalleryOverrides();
        const origCard = APP_DATA.gallery[_galleryEditIndex];
        const prevOverride = overrides[_galleryEditIndex] || {};
        overrides[_galleryEditIndex] = {
          title, date, text, rarity,
          image: primaryImage || prevOverride.image || origCard.image,
          media: mediaSrcs.length ? mediaSrcs : (prevOverride.media || null),
          hp: rarityHp[rarity] || 60,
          songIndex: songIndex >= 0 ? songIndex : (prevOverride.songIndex ?? origCard.songIndex),
          customSongSrc: pendingAudioBlob || prevOverride.customSongSrc || undefined,
          customSongName: pendingAudioBlob ? pendingAudioName : (prevOverride.customSongName || undefined),
        };
        saveGalleryOverrides(overrides);
        _memEditIndex = -1; _galleryEditIndex = -1;
      } else {
        const memories = loadUserMemories();
        const existing = _memEditIndex >= 0 ? (memories[_memEditIndex] || {}) : {};
        const finalImage = primaryImage || existing.image || '';
        const finalMedia = mediaSrcs.length ? mediaSrcs : (existing.media || null);
        const memory = {
          title, date, text, rarity,
          image: finalImage, media: finalMedia,
          type: 'Memoria', hp: rarityHp[rarity] || 60,
          songIndex: songIndex >= 0 ? songIndex : (existing.songIndex ?? undefined),
          customSongSrc: pendingAudioBlob || existing.customSongSrc || undefined,
          customSongName: pendingAudioBlob ? pendingAudioName : (existing.customSongName || undefined),
        };
        if (_memEditIndex >= 0) { memories[_memEditIndex] = memory; } else { memories.push(memory); }
        saveUserMemories(memories);
      }
      el.addMemoryForm.reset();
      const note = el.addMemoryForm.querySelector('.edit-image-note');
      if (note) note.style.display = 'none';
      el.filePreview.style.display = 'none';
      el.fileUploadContent.style.display = 'flex';
      pendingMediaFiles = []; pendingAudioBlob = null; pendingAudioName = '';
      if (el.audioUploadName) el.audioUploadName.textContent = '';
      closeAddMemoryModal();
      renderCarousel();
      spawnParticles('hearts');
    };

    if (pendingMediaFiles.length) {
      const saves = pendingMediaFiles.map((file, i) => {
        const prefix = isVideoFile(file.name) ? 'vid_' : 'img_';
        const key = prefix + Date.now() + '_' + i;
        return MediaDB.save(key, file)
          .then(() => 'idb:' + key)
          .catch(() => {
            if (isVideoFile(file.name)) return Promise.resolve(URL.createObjectURL(file));
            return new Promise(res => {
              const fr = new FileReader();
              fr.onload = ev => res(ev.target.result);
              fr.readAsDataURL(file);
            });
          });
      });
      Promise.all(saves).then(srcs => finalize(srcs));
    } else {
      finalize([]);
    }
  });
}

/* ═══════════════════════════════════════════════════════
   ★★★  BOULEVARD DE SUEÑOS  ★★★
   ═══════════════════════════════════════════════════════ */

const DEFAULT_DREAMS = [
  { text:'✈️ Viajar a Europa juntos y perdernos por las calles de París', color:'yellow',  x:6,  y:8,  rotate:-3, done:false },
  { text:'🏖️ Pasar una semana en la playa, sin celulares',               color:'blue',    x:25, y:6,  rotate:2,  done:false },
  { text:'🌙 Acampar bajo las estrellas y contarnos todo bajo el cielo', color:'lavender',x:48, y:10, rotate:-2, done:false },
  { text:'🏡 Tener nuestro primer hogar propio, decorarlo juntos',       color:'pink',    x:70, y:7,  rotate:1,  done:false },
  { text:'🎭 Ir al teatro y al cine clásico una vez al mes',             color:'green',   x:4,  y:48, rotate:2,  done:false },
  { text:'📚 Leer el mismo libro y discutirlo juntos tomando café',      color:'yellow',  x:22, y:52, rotate:-1, done:false },
  { text:'🌅 Ver cada amanecer juntos, al menos una vez al mes',         color:'blue',    x:44, y:50, rotate:3,  done:false },
  { text:'🎸 Aprender a bailar salsa juntos de verdad',                  color:'pink',    x:65, y:53, rotate:-2, done:false },
  { text:'🌿 Hacer un jardín juntos y verlo crecer',                     color:'green',   x:12, y:76, rotate:1,  done:false },
  { text:'💍 Construir un futuro lleno de amor, risas y aventuras',      color:'lavender',x:52, y:74, rotate:-3, done:false },
];

let boulevardDreams = [];

function initBoulevardQuotes() {
  if (!el.boulevardQuoteText) return;
  function show(idx) {
    const q = BOULEVARD_QUOTES[idx % BOULEVARD_QUOTES.length];
    el.boulevardQuoteText.classList.add('is-fading');
    setTimeout(() => {
      el.boulevardQuoteText.textContent = q.text;
      if (el.boulevardQuoteAttr) el.boulevardQuoteAttr.textContent = q.attr;
      el.boulevardQuoteText.classList.remove('is-fading');
    }, 500);
  }
  show(0);
  setInterval(() => { state.quoteIndex = (state.quoteIndex + 1) % BOULEVARD_QUOTES.length; show(state.quoteIndex); }, 7000);
}

const DREAM_PIN_EMOJI = {
  yellow:   ['🌟','✨','⭐','💛','🌼'],
  pink:     ['🌸','🌺','💖','🌷','🪷'],
  blue:     ['💫','🫧','💙','🌀','🔵'],
  lavender: ['✨','💜','🌙','🫐','💐'],
  green:    ['🍃','🌿','🌱','💚','🪴'],
};
function getDreamEmoji(color, index) {
  const arr = DREAM_PIN_EMOJI[color] || DREAM_PIN_EMOJI.yellow;
  return arr[index % arr.length];
}

function renderBoulevardNote(dream, index) {
  const note = document.createElement('button');
  const color = dream.color || 'yellow';
  note.className = `dream-note dream-note--${color}${dream.done?' is-done':''}`;
  const px = Math.max(3, Math.min(91, dream.x));
  const py = Math.max(3, Math.min(87, dream.y));
  note.style.cssText = `left:${px}%;top:${py}%;`;
  note.style.animation = `floatUp ${3.5 + (index % 5) * 0.3}s ease-in-out ${index * 0.18}s infinite`;
  note.setAttribute('data-index', index);
  note.setAttribute('aria-label', dream.text);
  note.setAttribute('type', 'button');

  const emoji = dream.done ? '✅' : getDreamEmoji(color, index);
  note.textContent = emoji;

  note.addEventListener('click', e => {
    if (note.classList.contains('is-dragging')) return;
    showDreamPopup(index, note);
  });

  makeDraggable(note, index);
  return note;
}

function showDreamPopup(index, noteEl) {
  const popup = document.getElementById('dreamDetailPopup');
  const textEl = document.getElementById('dreamPopupText');
  const actionsEl = document.getElementById('dreamPopupActions');
  if (!popup || !textEl || !actionsEl) return;

  const dream = boulevardDreams[index];
  if (!dream) return;

  textEl.textContent = dream.text;
  actionsEl.innerHTML = `
    <button class="dream-popup__btn dream-popup__btn--done">${dream.done ? '✅ Cumplida' : '◌ Pendiente'}</button>
    <button class="dream-popup__btn dream-popup__btn--del">🗑 Eliminar</button>`;

  actionsEl.querySelector('.dream-popup__btn--done').addEventListener('click', () => {
    boulevardDreams[index].done = !boulevardDreams[index].done;
    saveBoulevardDreams(boulevardDreams);
    popup.style.display = 'none';
    renderBoulevard();
    renderDreamList();
  });
  actionsEl.querySelector('.dream-popup__btn--del').addEventListener('click', () => {
    boulevardDreams.splice(index, 1);
    saveBoulevardDreams(boulevardDreams);
    popup.style.display = 'none';
    renderBoulevard();
    renderDreamList();
  });

  // Position popup near the note or centered on mobile
  popup.style.display = 'block';
  popup.setAttribute('aria-hidden', 'false');
  popup.style.transform = '';
  if (noteEl && window.innerWidth > 600) {
    const r = noteEl.getBoundingClientRect();
    const pw = 320, ph = 160;
    let left = r.right + 10;
    let top  = r.top;
    if (left + pw > window.innerWidth - 12) left = r.left - pw - 10;
    if (top + ph  > window.innerHeight - 12) top = window.innerHeight - ph - 12;
    left = Math.max(8, left);
    top  = Math.max(8, top);
    popup.style.left = left + 'px';
    popup.style.top  = top  + 'px';
  } else {
    popup.style.left = '50%';
    popup.style.top  = '50%';
    popup.style.transform = 'translate(-50%,-50%)';
  }
}

function renderBoulevard() {
  el.boulevardNotes.querySelectorAll('.dream-note').forEach(n => n._dragAC?.abort());
  el.boulevardNotes.innerHTML = '';
  el.boulevardStrings.innerHTML = '';
  boulevardDreams.forEach((dream, i) => el.boulevardNotes.appendChild(renderBoulevardNote(dream, i)));
  setTimeout(drawStrings, 100);
}

function drawStrings() {
  const canvas = $('boulevardCanvas'); if (!el.boulevardStrings || !canvas) return;
  const notes = canvas.querySelectorAll('.dream-note');
  if (notes.length < 2) return;
  const cRect = canvas.getBoundingClientRect();
  const centers = Array.from(notes).map(n => {
    const r = n.getBoundingClientRect();
    return { x: r.left - cRect.left + r.width/2, y: r.top - cRect.top + r.height/2 };
  });
  el.boulevardStrings.innerHTML = '';
  for (let i = 0; i < centers.length - 1; i++) {
    const a = centers[i], b = centers[i+1];
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'boulevard-string');
    path.setAttribute('d', `M ${a.x},${a.y} Q ${(a.x+b.x)/2},${(a.y+b.y)/2+30} ${b.x},${b.y}`);
    el.boulevardStrings.appendChild(path);
  }
}

function makeDraggable(note, idx) {
  let sx, sy, ol, ot, dragging = false;
  const ac = new AbortController();
  note._dragAC = ac;
  function start(cx, cy) {
    dragging = true; sx = cx; sy = cy;
    const p = note.parentElement, pr = p ? p.getBoundingClientRect() : {width:600,height:480};
    ol = (parseFloat(note.style.left)/100) * pr.width;
    ot = (parseFloat(note.style.top)/100) * pr.height;
    note.style.zIndex = 20;
  }
  function move(cx, cy) {
    if (!dragging) return;
    const p = note.parentElement; if (!p) return;
    const pr = p.getBoundingClientRect();
    note.style.left = `${Math.max(0, Math.min(pr.width - note.offsetWidth,  ol + cx - sx)) / pr.width * 100}%`;
    note.style.top  = `${Math.max(0, Math.min(pr.height - note.offsetHeight, ot + cy - sy)) / pr.height * 100}%`;
  }
  function end() {
    if (!dragging) return; dragging = false;
    note.classList.remove('is-dragging');
    if (boulevardDreams[idx]) {
      boulevardDreams[idx].x = parseFloat(note.style.left);
      boulevardDreams[idx].y = parseFloat(note.style.top);
      saveBoulevardDreams(boulevardDreams);
    }
    drawStrings();
  }
  const sig = ac.signal;
  note.addEventListener('mousedown',  e => { e.preventDefault(); start(e.clientX, e.clientY); });
  document.addEventListener('mousemove', e => { if (dragging) { const d = Math.hypot(e.clientX-sx, e.clientY-sy); if (d > 5) note.classList.add('is-dragging'); move(e.clientX, e.clientY); } }, { signal: sig });
  document.addEventListener('mouseup', end, { signal: sig });
  note.addEventListener('touchstart', e => { start(e.touches[0].clientX, e.touches[0].clientY); }, {passive:true});
  note.addEventListener('touchmove',  e => { const d = Math.hypot(e.touches[0].clientX-sx, e.touches[0].clientY-sy); if (d > 8) note.classList.add('is-dragging'); move(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); }, {passive:false});
  note.addEventListener('touchend', end);
}

function initDreamDetailPopup() {
  const popup = document.getElementById('dreamDetailPopup');
  const closeBtn = document.getElementById('dreamPopupClose');
  if (!popup || !closeBtn) return;
  closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
    popup.style.transform = '';
    popup.setAttribute('aria-hidden', 'true');
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && popup.style.display !== 'none') {
      popup.style.display = 'none';
      popup.style.transform = '';
    }
  });
  document.addEventListener('click', e => {
    if (popup.style.display !== 'none' && !popup.contains(e.target) && !e.target.closest('.dream-note')) {
      popup.style.display = 'none';
      popup.style.transform = '';
    }
  });
}

function initBoulevard() {
  const saved = loadBoulevardDreams();
  boulevardDreams = (saved && saved.length) ? saved : JSON.parse(JSON.stringify(DEFAULT_DREAMS));
  renderBoulevard();
  initBoulevardQuotes();
  initDreamDetailPopup();

  const openDreamModal = () => {
    el.addDreamModal.classList.add('is-open');
    el.addDreamModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  el.boulevardAddBtn.addEventListener('click', openDreamModal);
  const addBtnList = document.getElementById('boulevardAddBtnList');
  if (addBtnList) addBtnList.addEventListener('click', openDreamModal);

  document.querySelectorAll('.note-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.note-color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedColor = btn.dataset.color;
    });
  });

  el.addDreamForm.addEventListener('submit', e => {
    e.preventDefault();
    const text = el.dreamText.value.trim(); if (!text) return;
    boulevardDreams.push({ text, color: state.selectedColor, x: Math.random()*80+5, y: Math.random()*76+5, rotate: (Math.random()-0.5)*8, done: false });
    saveBoulevardDreams(boulevardDreams);
    renderBoulevard();
    renderDreamList();
    el.dreamText.value = '';
    el.addDreamModal.classList.remove('is-open');
    el.addDreamModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });

  [el.addDreamClose, el.addDreamBackdrop].forEach(el2 => el2.addEventListener('click', () => {
    el.addDreamModal.classList.remove('is-open');
    el.addDreamModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }));

  window.addEventListener('resize', drawStrings);
}

/* ═══════════════════════════════════════════════════════
   EXPORT / IMPORT — sincronizar entre dispositivos
   ═══════════════════════════════════════════════════════ */

function blobToBase64(blob) {
  return new Promise(res => { const fr = new FileReader(); fr.onload = e => res(e.target.result); fr.readAsDataURL(blob); });
}

async function exportarDatos() {
  const btn = document.getElementById('exportBtn');
  if (btn) { btn.textContent = '⏳ Exportando...'; btn.disabled = true; }
  try {
    const memories = loadUserMemories();
    const overrides = loadGalleryOverrides();
    const dreams = loadBoulevardDreams() || [];
    const mediaMap = {};
    const allItems = [...memories, ...Object.values(overrides).filter(Boolean)];
    for (const item of allItems) {
      for (const src of getCardMedia(item)) {
        if (src && src.startsWith('idb:') && !mediaMap[src]) {
          const blob = await MediaDB.load(src.slice(4)).catch(() => null);
          if (blob) mediaMap[src] = await blobToBase64(blob);
        }
      }
    }
    const json = JSON.stringify({ version:2, memories, overrides, dreams, mediaMap });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([json], {type:'application/json'}));
    a.download = 'album-amor-' + new Date().toISOString().slice(0,10) + '.json';
    a.click();
  } finally {
    if (btn) { btn.textContent = '💾 Exportar datos'; btn.disabled = false; }
  }
}

async function importarDatos(file) {
  const btn = document.getElementById('importBtn');
  if (btn) { btn.textContent = '⏳ Importando...'; btn.disabled = true; }
  try {
    const data = JSON.parse(await file.text());
    const keyMap = {};
    if (data.mediaMap) {
      for (const [oldKey, base64] of Object.entries(data.mediaMap)) {
        try {
          const res = await fetch(base64);
          const blob = await res.blob();
          const newKey = oldKey.slice(4) + '_' + Date.now();
          await MediaDB.save(newKey, blob);
          keyMap[oldKey] = 'idb:' + newKey;
        } catch {}
      }
    }
    function remapItem(item) {
      if (!item) return item;
      if (item.image && keyMap[item.image]) item.image = keyMap[item.image];
      if (item.media) item.media = item.media.map(s => keyMap[s] || s);
      return item;
    }
    if (data.memories) saveUserMemories(data.memories.map(remapItem));
    if (data.overrides) {
      const ro = {};
      for (const [k,v] of Object.entries(data.overrides)) ro[k] = remapItem(v);
      saveGalleryOverrides(ro);
    }
    if (data.dreams) saveBoulevardDreams(data.dreams);
    renderCarousel();
    boulevardDreams = loadBoulevardDreams() || [];
    renderBoulevard();
    renderDreamList();
    alert('✅ Datos importados correctamente');
  } catch(e) {
    alert('Error al importar: ' + e.message);
  } finally {
    if (btn) { btn.textContent = '📥 Importar datos'; btn.disabled = false; }
  }
}

function initExportImport() {
  const exportBtn = document.getElementById('exportBtn');
  const importBtn = document.getElementById('importBtn');
  const importFile = document.getElementById('importFile');
  if (exportBtn) exportBtn.addEventListener('click', exportarDatos);
  if (importFile) importFile.addEventListener('change', e => { if (e.target.files[0]) importarDatos(e.target.files[0]); });
  if (importBtn) importBtn.addEventListener('click', () => importFile && importFile.click());
}

/* ═══════════════════════════════════════════════════════
   PARTICLES
   ═══════════════════════════════════════════════════════ */

function spawnParticles(type) {
  const fx = el.fxLayer; if (!fx) return;
  for (let i = 0; i < (type === 'hearts' ? 16 : 24); i++) {
    const e2 = document.createElement('span');
    e2.style.cssText = `left:${Math.random()*100}vw;bottom:${Math.random()*30}vh;`;
    e2.style.setProperty('--drift', `${(Math.random()-0.5)*200}px`);
    if (type === 'hearts') {
      e2.className = 'heart-particle';
      e2.textContent = ['❤️','💕','💖','✨','💫'][Math.floor(Math.random()*5)];
    } else {
      e2.className = 'confetti-piece';
      e2.style.background = `hsl(${Math.random()*360},80%,65%)`;
    }
    fx.appendChild(e2);
    setTimeout(() => e2.remove(), 3500);
  }
}

/* ═══════════════════════════════════════════════════════
   REVEAL, START, LOVE
   ═══════════════════════════════════════════════════════ */

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); } });
  }, {threshold:0.1});
  document.querySelectorAll('[data-reveal]').forEach(e2 => io.observe(e2));
}

function initStart() {
  if (!el.startButton) return;
  el.startButton.addEventListener('click', () => {
    el.startCurtain.classList.add('is-hidden');
    document.body.classList.add('story-started');
    setTimeout(() => el.startCurtain.style.display = 'none', 1000);
    spawnParticles('hearts');
  });
}

function initLoveButton() {
  if (!el.loveButton) return;
  el.loveButton.addEventListener('click', () => {
    spawnParticles('hearts');
    document.body.classList.add('final-mode');
    openUniverse();
  });
}

/* ─────────────── UNIVERSO ─────────────── */
function openUniverse() {
  const modal = document.getElementById('universeModal');
  const canvas = document.getElementById('universeCanvas');
  const closeBtn = document.getElementById('universeClose');
  if (!modal || !canvas) return;

  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  const ctx = canvas.getContext('2d');
  let W, H, raf, running = true, t2 = 0;
  let galaxyAngleOffset = 0, isDragging = false, lastDragX = 0;

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();

  // Drag to spin 360°
  canvas.style.cursor = 'grab';
  canvas.addEventListener('mousedown', e => { isDragging = true; lastDragX = e.clientX; canvas.style.cursor = 'grabbing'; });
  canvas.addEventListener('mousemove', e => { if (!isDragging) return; galaxyAngleOffset += (e.clientX - lastDragX) * 0.008; lastDragX = e.clientX; });
  canvas.addEventListener('mouseup', () => { isDragging = false; canvas.style.cursor = 'grab'; });
  canvas.addEventListener('mouseleave', () => { isDragging = false; canvas.style.cursor = 'grab'; });
  canvas.addEventListener('touchstart', e => { isDragging = true; lastDragX = e.touches[0].clientX; }, {passive:true});
  canvas.addEventListener('touchmove', e => { if (!isDragging) return; galaxyAngleOffset += (e.touches[0].clientX - lastDragX) * 0.012; lastDragX = e.touches[0].clientX; }, {passive:true});
  canvas.addEventListener('touchend', () => { isDragging = false; });

  // Palabras nuestras
  const OUR_WORDS = [
    {text:'Karen 💕', hue:330}, {text:'Sebastian 💙', hue:220},
    {text:'Te Amo ❤️', hue:350}, {text:'Mi Todo', hue:40},
    {text:'Para Siempre ✨', hue:60}, {text:'Mi Corazón', hue:10},
    {text:'Eres mi mundo', hue:280}, {text:'Contigo', hue:200},
    {text:'Tu sonrisa ☀️', hue:50}, {text:'Mi amor 💖', hue:340},
    {text:'Juntos', hue:150}, {text:'Siempre 💫', hue:270},
  ];
  const wordParts = OUR_WORDS.map((w, i) => ({
    ...w,
    angle: (i / OUR_WORDS.length) * Math.PI * 2,
    dist: 130 + (i % 3) * 52,
    da: 0.0014 * (i % 2 === 0 ? 1 : -0.7),
    alpha: 0,
  }));

  // Galaxy particles
  const gParticles = Array.from({length:600}, (_, i) => {
    const arm = Math.floor(Math.random()*3);
    const dist = Math.random() * Math.min(W, H) * 0.42;
    const spread = dist * 0.18;
    const baseAngle = (arm / 3) * Math.PI * 2 + dist * 0.008;
    const angle = baseAngle + (Math.random() - 0.5) * 0.6;
    return {
      dist, angle,
      da: 0.003 / (dist / 80 + 1),
      x: 0, y: 0,
      r: Math.random() * 1.8 + 0.3,
      hue: arm === 0 ? 260 + Math.random()*40
         : arm === 1 ? 320 + Math.random()*40
         : 180 + Math.random()*40,
      a: Math.random() * 0.7 + 0.3,
    };
  });

  // Orbiting planets
  const planets = [
    { dist:110, angle:0,   da:0.0085, r:8,  color:'#e8a0c0', label:'♡' },
    { dist:175, angle:2.1, da:0.0055, r:6,  color:'#90c0f8', label:'★' },
    { dist:240, angle:4.5, da:0.0035, r:10, color:'#f8d080', label:'♥' },
    { dist:310, angle:1.2, da:0.0022, r:5,  color:'#b8f0b0', label:'✦' },
  ];

  // Shooting stars
  const shooters = Array.from({length:4}, () => ({
    active:false, x:0, y:0, vx:0, vy:0, life:0, maxLife:0,
    timer: Math.random() * 180,
  }));

  // Kiss lean: starts apart, closes over ~3s then stays kissing
  let kissProgress = 0;

  function drawCouple(cx, cy) {
    ctx.save();
    // kissProgress 0=apart, 1=kissing
    kissProgress = Math.min(1, kissProgress + 0.004);
    const lean = kissProgress * 18; // pixels closer
    const tiltK = kissProgress * 0.28;  // Karen tilts right
    const tiltE = -kissProgress * 0.28; // Edgar tilts left

    // Soft glow underneath
    const glow = ctx.createRadialGradient(cx, cy+20, 0, cx, cy+20, 80);
    glow.addColorStop(0, 'rgba(255,180,220,0.22)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = glow; ctx.beginPath(); ctx.arc(cx, cy+20, 80, 0, Math.PI*2); ctx.fill();

    // ── Karen (left) ──────────────────────
    ctx.save();
    ctx.translate(cx - 32 + lean, cy);
    ctx.rotate(tiltK);
    // body / dress
    ctx.fillStyle = 'rgba(255,160,210,0.88)';
    ctx.beginPath();
    ctx.moveTo(0, -2); ctx.bezierCurveTo(-12, 10, -14, 30, -8, 44);
    ctx.lineTo(8, 44); ctx.bezierCurveTo(14, 30, 12, 10, 0, -2); ctx.fill();
    // neck
    ctx.fillStyle = 'rgba(255,200,220,0.8)';
    ctx.fillRect(-4, -12, 8, 12);
    // head
    ctx.beginPath(); ctx.arc(0, -20, 12, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(255,200,220,0.9)'; ctx.fill();
    // hair
    ctx.fillStyle = 'rgba(180,80,140,0.7)';
    ctx.beginPath();
    ctx.ellipse(0, -26, 13, 9, 0, Math.PI, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(-10, -20, 5, 12, -0.3, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.ellipse(10, -20, 5, 12, 0.3, 0, Math.PI*2); ctx.fill();
    // arms wrapping
    if (kissProgress > 0.5) {
      ctx.strokeStyle = 'rgba(255,160,210,0.7)';
      ctx.lineWidth = 5; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(10, 8); ctx.quadraticCurveTo(28+lean, 8, 28+lean*1.5, 14); ctx.stroke();
    }
    ctx.restore();

    // ── Edgar (right) ─────────────────────
    ctx.save();
    ctx.translate(cx + 32 - lean, cy);
    ctx.rotate(tiltE);
    // body / shirt
    ctx.fillStyle = 'rgba(140,180,255,0.88)';
    ctx.beginPath();
    ctx.moveTo(0, -2); ctx.bezierCurveTo(-12, 8, -13, 28, -8, 44);
    ctx.lineTo(8, 44); ctx.bezierCurveTo(13, 28, 12, 8, 0, -2); ctx.fill();
    // neck
    ctx.fillStyle = 'rgba(200,220,255,0.8)';
    ctx.fillRect(-4, -12, 8, 12);
    // head
    ctx.beginPath(); ctx.arc(0, -20, 12, 0, Math.PI*2);
    ctx.fillStyle = 'rgba(200,220,255,0.9)'; ctx.fill();
    // hair (short)
    ctx.fillStyle = 'rgba(60,40,20,0.75)';
    ctx.beginPath();
    ctx.ellipse(0, -28, 11, 7, 0, Math.PI, Math.PI*2); ctx.fill();
    // arms wrapping
    if (kissProgress > 0.5) {
      ctx.strokeStyle = 'rgba(140,180,255,0.7)';
      ctx.lineWidth = 5; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(-10, 8); ctx.quadraticCurveTo(-28-lean, 8, -28-lean*1.5, 14); ctx.stroke();
    }
    ctx.restore();

    // ── Kiss sparkles when close ───────────
    if (kissProgress > 0.85) {
      const ks = 1 + 0.3*Math.sin(t2*8);
      ctx.font = `${14*ks}px serif`;
      ctx.textAlign = 'center';
      ctx.globalAlpha = (kissProgress - 0.85) / 0.15 * 0.9;
      ctx.fillText('💋', cx, cy - 38);
      ctx.globalAlpha = 0.5 * Math.abs(Math.sin(t2*3));
      ctx.font = '11px serif';
      ctx.fillText('✨', cx - 18, cy - 48 + Math.sin(t2*2)*5);
      ctx.fillText('✨', cx + 18, cy - 48 + Math.cos(t2*2)*5);
      ctx.globalAlpha = 1;
      ctx.textAlign = 'left';
    } else {
      // Heart floating between them while approaching
      const ht = 0.7 + 0.3*Math.sin(t2*3);
      ctx.font = `${18*ht}px serif`;
      ctx.textAlign = 'center';
      ctx.globalAlpha = 0.85;
      ctx.fillText('❤️', cx, cy - 36);
      ctx.globalAlpha = 1; ctx.textAlign = 'left';
    }

    ctx.restore();
  }

  function tick2() {
    if (!running) return;
    t2 += 0.012;
    ctx.clearRect(0, 0, W, H);

    const cx = W/2, cy = H/2 + 30;

    // Deep space background
    const bg = ctx.createRadialGradient(cx, cy-30, 0, cx, cy-30, Math.max(W,H)*0.75);
    bg.addColorStop(0,   'rgba(22,8,42,1)');
    bg.addColorStop(0.35,'rgba(10,5,25,1)');
    bg.addColorStop(1,   'rgba(2,2,8,1)');
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // Galaxy particles (spin around couple)
    gParticles.forEach(p => {
      p.angle += p.da;
      p.x = cx + Math.cos(p.angle + galaxyAngleOffset) * p.dist;
      p.y = cy - 30 + Math.sin(p.angle + galaxyAngleOffset) * p.dist * 0.42;
      const ga = p.a * (0.55 + 0.45*Math.sin(t2*1.8 + p.angle));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `hsla(${p.hue},80%,78%,${ga})`;
      ctx.fill();
    });

    // Nebula glow
    const ng = ctx.createRadialGradient(cx, cy-30, 0, cx, cy-30, 200);
    ng.addColorStop(0,   'rgba(200,100,255,0.18)');
    ng.addColorStop(0.5, 'rgba(100,60,200,0.08)');
    ng.addColorStop(1,   'rgba(0,0,0,0)');
    ctx.fillStyle = ng;
    ctx.beginPath(); ctx.arc(cx, cy-30, 200, 0, Math.PI*2); ctx.fill();

    // Words nuestras — draw before couple
    wordParts.forEach(w => {
      w.angle += w.da;
      w.alpha = Math.min(0.88, w.alpha + 0.003);
      const wx = cx + Math.cos(w.angle + galaxyAngleOffset) * w.dist;
      const wy = (cy - 30) + Math.sin(w.angle + galaxyAngleOffset) * w.dist * 0.4;
      const pulse = 0.55 + 0.45 * Math.sin(t2 * 1.5 + w.angle);
      ctx.globalAlpha = w.alpha * pulse;
      ctx.font = 'bold 11px Cinzel,serif';
      ctx.fillStyle = `hsl(${w.hue},90%,78%)`;
      ctx.textAlign = 'center';
      ctx.shadowColor = `hsl(${w.hue},80%,65%)`;
      ctx.shadowBlur = 7;
      ctx.fillText(w.text, wx, wy);
      ctx.shadowBlur = 0;
    });
    ctx.globalAlpha = 1; ctx.textAlign = 'left';

    // Orbiting planets
    planets.forEach(pl => {
      pl.angle += pl.da;
      const px = cx + Math.cos(pl.angle + galaxyAngleOffset) * pl.dist;
      const py = cy - 30 + Math.sin(pl.angle + galaxyAngleOffset) * pl.dist * 0.42;
      const pg = ctx.createRadialGradient(px,py,0,px,py,pl.r*3.5);
      pg.addColorStop(0, pl.color+'cc'); pg.addColorStop(1, 'transparent');
      ctx.fillStyle = pg;
      ctx.beginPath(); ctx.arc(px, py, pl.r*3.5, 0, Math.PI*2); ctx.fill();
      ctx.beginPath(); ctx.arc(px, py, pl.r, 0, Math.PI*2);
      ctx.fillStyle = pl.color; ctx.fill();
    });

    // Shooting stars
    shooters.forEach(s => {
      if (!s.active) {
        s.timer--;
        if (s.timer <= 0) {
          s.active = true;
          s.x = Math.random() * W;
          s.y = Math.random() * H * 0.5;
          const ang = Math.PI/4 + (Math.random()-0.5)*0.5;
          const spd = 9 + Math.random()*7;
          s.vx = Math.cos(ang)*spd; s.vy = Math.sin(ang)*spd;
          s.maxLife = s.life = 28 + Math.random()*18;
        }
      } else {
        ctx.save();
        ctx.strokeStyle = `rgba(255,255,240,${s.life/s.maxLife*0.85})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx*5, s.y - s.vy*5);
        ctx.stroke();
        ctx.restore();
        s.x += s.vx; s.y += s.vy; s.life--;
        if (s.life <= 0) { s.active = false; s.timer = 80 + Math.random()*180; }
      }
    });

    // Couple kissing
    drawCouple(cx, cy - 30);

    // Floating hearts around couple
    for (let i = 0; i < 6; i++) {
      const ha = t2 * 0.8 + i * Math.PI / 3 + galaxyAngleOffset * 0.25;
      const hd = 85 + 18 * Math.sin(t2 + i);
      const hx = cx + Math.cos(ha) * hd;
      const hy = cy - 30 + Math.sin(ha) * hd * 0.5;
      ctx.globalAlpha = 0.35 + 0.25*Math.sin(t2*2+i);
      ctx.font = `${12 + 4*Math.sin(t2+i)}px serif`;
      ctx.textAlign = 'center';
      ctx.fillText(['❤️','💕','✨','💫','🌟','💖'][i], hx, hy);
    }
    ctx.globalAlpha = 1;
    ctx.textAlign = 'left';

    raf = requestAnimationFrame(tick2);
  }

  tick2();

  function closeUniverse() {
    running = false;
    cancelAnimationFrame(raf);
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  closeBtn.onclick = closeUniverse;
  modal.addEventListener('click', e => { if (e.target === modal) closeUniverse(); });
}

/* ─────────────── FLORES BOULEVARD ─────────────── */
const FLOWER_DATA = {
  rosa: {
    emoji:'🌹', name:'Rosa', sci:'Rosa damascena',
    origin:'Originaria de Persia y Europa, florece en primavera y verano.',
    facts:['Símbolo universal del amor romántico','Una rosa roja = amor profundo','Sus pétalos se usan en perfumes y aceites esenciales','Pueden vivir más de 35 años en la naturaleza'],
  },
  margarita: {
    emoji:'🌼', name:'Margarita', sci:'Bellis perennis',
    origin:'Europa y Asia Occidental. Florece en primavera y otoño.',
    facts:['El juego "me quiere, no me quiere" nació con ella','Tiene propiedades medicinales antiinflamatorias','Su nombre viene del griego "margarites" (perla)','Puede florecer casi todo el año en climas templados'],
  },
  girasol: {
    emoji:'🌻', name:'Girasol', sci:'Helianthus annuus',
    origin:'América del Norte. Cultivado desde hace 3.000 años.',
    facts:['Sigue al sol durante el día (heliotropismo)','Una cabeza puede contener hasta 2.000 semillas','Su aceite se usa en cocina y cosmética','Símbolo de lealtad y adoración'],
  },
  tulipan: {
    emoji:'🌷', name:'Tulipán', sci:'Tulipa gesneriana',
    origin:'Turquía y Persia, naturalizado en Holanda.',
    facts:['En el siglo XVII causó la "Tulipomanía" en Holanda','Sus bulbos valían más que una casa en esa época','Existen más de 3.000 variedades registradas','Simboliza amor perfecto y declaración amorosa'],
  },
  orquidea: {
    emoji:'🪷', name:'Orquídea', sci:'Orchidaceae',
    origin:'Trópicos y subtrópicos de todo el mundo.',
    facts:['La familia de plantas con flores más grande (25.000+ especies)','Pueden vivir más de 100 años en la naturaleza','La vainilla proviene de una orquídea tropical','Simbolizan elegancia, lujo y amor refinado'],
  },
  lirio: {
    emoji:'💐', name:'Lirio', sci:'Lilium candidum',
    origin:'Asia y Europa. Cultivado desde hace 3.500 años.',
    facts:['Símbolo de pureza y renovación','Aparece en el arte desde el antiguo Egipto','Su bulbo y pétalos pueden ser tóxicos para los gatos','Tiene una fragancia intensa que atrae a las polillas'],
  },
  jazmin: {
    emoji:'🌸', name:'Jazmín', sci:'Jasminum officinale',
    origin:'Asia Meridional (India, Himalaya). Cultivado en el Mediterráneo.',
    facts:['Florece principalmente de noche para atraer insectos','Se usa en los perfumes más lujosos del mundo','El té de jazmín es el más aromático del mundo','En India simboliza el amor divino y la pureza'],
  },
  hortensia: {
    emoji:'💜', name:'Hortensia', sci:'Hydrangea macrophylla',
    origin:'Asia Oriental (Japón, China) y América del Norte.',
    facts:['Su color varía según el pH del suelo (azul=ácido, rosa=alcalino)','El nombre significa "vasija de agua" en griego','Puede cambiar de color si cambias la acidez de la tierra','Simboliza gratitud, gracia y belleza genuina'],
  },
  peonia: {
    emoji:'🌺', name:'Peonía', sci:'Paeonia lactiflora',
    origin:'China, Siberia y Europa. Flor nacional de China.',
    facts:['Puede vivir más de 100 años en el mismo lugar','Su nombre viene del dios médico griego Peán','Es la flor más popular en los ramos de boda en Asia','Simboliza prosperidad, romanticismo y buena suerte'],
  },
  lavanda: {
    emoji:'🫐', name:'Lavanda', sci:'Lavandula angustifolia',
    origin:'Mediterráneo, especialmente Provenza (Francia).',
    facts:['Sus propiedades relajantes reducen el estrés y la ansiedad','Se ha usado desde el antiguo Egipto para embalsamar','El color "lavender" lleva su nombre','Los campos de lavanda en flor son visitados por millones de personas cada año'],
  },
};

function initFlowers() {
  const container = document.getElementById('boulevardFlowers');
  const popup = document.getElementById('flowerPopup');
  const closeBtn = document.getElementById('flowerPopupClose');
  if (!container || !popup) return;

  let activePin = null;

  container.querySelectorAll('.flower-pin').forEach(pin => {
    pin.addEventListener('click', e => {
      e.stopPropagation();
      const key = pin.dataset.flower;
      const data = FLOWER_DATA[key];
      if (!data) return;

      if (activePin === pin && popup.classList.contains('is-visible')) {
        popup.classList.remove('is-visible');
        popup.setAttribute('aria-hidden', 'true');
        activePin = null;
        return;
      }

      document.getElementById('flowerEmoji').textContent = data.emoji;
      document.getElementById('flowerName').textContent = data.name;
      document.getElementById('flowerSci').textContent = data.sci;
      document.getElementById('flowerOrigin').textContent = data.origin;
      const ul = document.getElementById('flowerFacts');
      ul.innerHTML = data.facts.map(f => `<li>${f}</li>`).join('');

      // Position popup near pin (fixed, viewport-relative)
      const pinRect = pin.getBoundingClientRect();
      popup.style.position = 'fixed';
      popup.style.left = `${pinRect.left + pinRect.width/2}px`;
      popup.style.top  = `${Math.max(8, pinRect.top - 14)}px`;
      popup.style.bottom = 'auto';
      popup.style.transform = 'translateX(-50%) translateY(-100%)';

      popup.classList.add('is-visible');
      popup.setAttribute('aria-hidden', 'false');
      activePin = pin;
    });
  });

  closeBtn && closeBtn.addEventListener('click', e => {
    e.stopPropagation();
    popup.classList.remove('is-visible');
    popup.setAttribute('aria-hidden', 'true');
    activePin = null;
  });

  document.addEventListener('click', e => {
    if (!popup.contains(e.target) && !e.target.classList.contains('flower-pin')) {
      popup.classList.remove('is-visible');
      popup.setAttribute('aria-hidden', 'true');
      activePin = null;
    }
  });
}

/* ═══════════════════════════════════════════════════════
   TOPBAR COLLAPSE (mobile)
   ═══════════════════════════════════════════════════════ */
function initTopbarCollapse() {
  const topbar = document.querySelector('.topbar');
  const btn = document.getElementById('topbarCollapseBtn');
  if (!btn || !topbar) return;
  let collapsed = localStorage.getItem('topbarCollapsed') === '1';
  function apply() {
    if (collapsed) {
      topbar.classList.add('is-collapsed');
      btn.classList.add('is-collapsed-state');
      btn.textContent = '♪';
      btn.title = 'Mostrar controles';
    } else {
      topbar.classList.remove('is-collapsed');
      btn.classList.remove('is-collapsed-state');
      btn.textContent = '▲';
      btn.title = 'Ocultar controles';
    }
  }
  apply();
  btn.addEventListener('click', () => {
    collapsed = !collapsed;
    localStorage.setItem('topbarCollapsed', collapsed ? '1' : '0');
    apply();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 760) topbar.classList.remove('is-collapsed');
  });
}

/* ═══════════════════════════════════════════════════════
   BOULEVARD VISTA LISTA / TABLERO
   ═══════════════════════════════════════════════════════ */
let boulevardMode = localStorage.getItem('boulevardMode') || 'tablero';

function renderDreamList() {
  const items = document.getElementById('dreamListItems');
  if (!items) return;
  items.innerHTML = '';
  if (!boulevardDreams.length) {
    items.innerHTML = '<p class="dream-list-empty">Aún no hay sueños. ¡Agrega uno! ✨</p>';
    return;
  }
  boulevardDreams.forEach((dream, i) => {
    const item = document.createElement('div');
    item.className = `dream-list-item${dream.done ? ' is-done' : ''}`;
    item.innerHTML = `
      <button class="dream-list-check" aria-label="${dream.done ? 'Marcar pendiente' : 'Marcar cumplida'}">${dream.done ? '✅' : '◌'}</button>
      <span class="dream-list-text">${dream.text}</span>
      <button class="dream-list-del" aria-label="Eliminar">✕</button>`;
    item.querySelector('.dream-list-check').addEventListener('click', () => {
      boulevardDreams[i].done = !boulevardDreams[i].done;
      saveBoulevardDreams(boulevardDreams);
      renderDreamList();
    });
    item.querySelector('.dream-list-del').addEventListener('click', () => {
      boulevardDreams.splice(i, 1);
      saveBoulevardDreams(boulevardDreams);
      renderDreamList();
      renderBoulevard();
    });
    items.appendChild(item);
  });
}

function setBoulevardMode(mode) {
  boulevardMode = mode;
  localStorage.setItem('boulevardMode', mode);
  const board = document.getElementById('boulevardBoard');
  const listView = document.getElementById('boulevardListView');
  const btnBoard = document.getElementById('blvModeBoard');
  const btnList = document.getElementById('blvModeList');
  if (!board || !listView) return;
  if (mode === 'lista') {
    board.style.display = 'none';
    listView.style.display = 'block';
    if (btnBoard) btnBoard.classList.remove('active');
    if (btnList)  btnList.classList.add('active');
    renderDreamList();
  } else {
    board.style.display = '';
    listView.style.display = 'none';
    if (btnBoard) btnBoard.classList.add('active');
    if (btnList)  btnList.classList.remove('active');
    renderBoulevard();
    setTimeout(drawStrings, 80);
  }
}

function initBoulevardModeToggle() {
  const btnBoard = document.getElementById('blvModeBoard');
  const btnList  = document.getElementById('blvModeList');
  if (btnBoard) btnBoard.addEventListener('click', () => setBoulevardMode('tablero'));
  if (btnList)  btnList.addEventListener('click',  () => setBoulevardMode('lista'));
  setBoulevardMode(window.innerWidth < 760 ? 'lista' : boulevardMode);
}

/* ═══════════════════════════════════════════════════════
   GLOBAL ESC
   ═══════════════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (el.cardModal.classList.contains('is-open')) closeCardModal();
  if (el.addMemoryModal.classList.contains('is-open')) closeAddMemoryModal();
  if (el.addDreamModal.classList.contains('is-open')) {
    el.addDreamModal.classList.remove('is-open');
    document.body.style.overflow = '';
  }
});

/* ═══════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initSky();
  initStart();
  initCounter();
  initTimeline();
  renderCarousel();
  initCarouselNav();
  initCardModal();
  populateSongSelect();
  initAddMemory();
  initBoulevard();
  initFlowers();
  initMusic();
  initLoveButton();
  initReveal();
  initTopbarCollapse();
  initBoulevardModeToggle();
  initExportImport();
});
