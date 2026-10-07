/*
 * Experiencia romántica — Versión 2.0 con cartas Pokémon, Boulevard de Sueños, soporte de video.
 */

const APP_CONFIG = {
  startDate: new Date('2026-06-07T19:00:00'),
  musicPath: 'assets/music/',
  imagePath: 'assets/img/',
  defaultTrackIndex: 0,
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
};

/* ============================================================
   DATOS PRINCIPALES
   ============================================================ */
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
    { date: '07 junio 2026 — 7:00 p.m.', title: 'El sí que nos cambió para siempre', story: '"Hay momentos que se quedan como un acorde largo: se repiten dentro del pecho y nunca terminan. Contigo cada nota tiene sentido, y esa tarde en que dije que sí, todo sonaba distinto —como si el mundo entero hubiera afinado para nuestras voces."', image: '6.jpeg', fallback: 'Nuestro sí' },
    { date: 'Nuestras madrugadas', title: 'Conversaciones que nos hicieron hogar', story: '"A las tres de la mañana tu voz era abrigo, y cada mensaje tuyo parecía una puerta abierta para seguirnos eligiendo aun con los ojos cansados."', image: '1.jpeg', fallback: 'Madrugada' },
    { date: 'Tunja y nuestros lugares', title: 'Misas, biblioteca y promesas', story: '"Entre iglesias, biblioteca y calles nuevas, aprendí que amar también es caminar despacio, reír bajito y sentir que lo simple se vuelve eterno."', image: '12.jpeg', fallback: 'Tunja' },
    { date: 'Nuestro presente', title: 'Una historia que sigue creciendo', story: '"Si el tiempo insiste en avanzar, que avance con nosotros; porque contigo hasta el futuro parece una carta de amor escrita sin final."', image: '20.jpeg', fallback: 'Presente' },
  ],

  /* Cartas de recuerdos — ahora con rarity, type, hp */
  gallery: [
    { date: 'Las madrugadas de Instagram', title: 'Las madrugadas de Instagram', caption: '', image: '1.jpeg', fallback: 'Madrugadas', rarity: 'raro', type: 'Memoria', hp: 70 },
    { date: 'La primera cita', title: 'La primera cita', caption: '', image: '2.jpeg', fallback: 'Primera cita', rarity: 'ultra', type: 'Amor', hp: 85 },
    { date: 'El primer beso', title: 'El primer beso', caption: '', image: '3.jpeg', fallback: 'Primer beso', rarity: 'legendario', type: 'Amor', hp: 100 },
    { date: 'La primera misa juntos', title: 'La primera misa juntos', caption: '', image: '4.jpeg', fallback: 'Primera misa', rarity: 'raro', type: 'Promesa', hp: 75 },
    { date: 'Tunja, tu salón, tu saco', title: 'Tunja, tu salón, tu saco', caption: '', image: '5.jpeg', fallback: 'Tunja', rarity: 'comun', type: 'Aventura', hp: 60 },
    { date: 'El día que te pedí que fueras mi novia', title: 'El día que te pedí que fueras mi novia', caption: '', image: '6.jpeg', fallback: 'Mi novia', rarity: 'legendario', type: 'Amor', hp: 100 },
    { date: 'El lugar, el llanto, el alma llena', title: 'El lugar, el llanto, el alma llena', caption: '', image: '7.jpeg', fallback: 'Alma llena', rarity: 'ultra', type: 'Magia', hp: 90 },
    { date: 'El lugar favorito y la comida', title: 'El lugar favorito y la comida', caption: '', image: '8.jpeg', fallback: 'Comida', rarity: 'raro', type: 'Aventura', hp: 70 },
    { date: 'Risas de toda una semana', title: 'Risas de toda una semana', caption: '', image: '9.jpeg', fallback: 'Risas', rarity: 'comun', type: 'Risa', hp: 65 },
    { date: 'El primer helado', title: 'El primer helado', caption: '', image: '10.jpeg', fallback: 'Helado', rarity: 'comun', type: 'Risa', hp: 60 },
    { date: 'Segundo viaje a Tunja', title: 'Segundo viaje a Tunja', caption: '', image: '11.jpeg', fallback: 'Tunja II', rarity: 'raro', type: 'Aventura', hp: 75 },
    { date: 'La biblioteca, tu belleza', title: 'La biblioteca, tu belleza', caption: '', image: '12.jpeg', fallback: 'Biblioteca', rarity: 'raro', type: 'Magia', hp: 80 },
    { date: 'El atardecer que cerró el viaje', title: 'El atardecer que cerró el viaje', caption: '', image: '13.jpeg', fallback: 'Atardecer', rarity: 'ultra', type: 'Magia', hp: 88 },
    { date: 'La excusa de visitar a mi suegra', title: 'La excusa de visitar a mi suegra', caption: '', image: '14.jpeg', fallback: 'Suegra', rarity: 'comun', type: 'Risa', hp: 60 },
    { date: 'El camino tarde por hablar de más', title: 'El camino tarde por hablar de más', caption: '', image: '15.jpeg', fallback: 'Camino', rarity: 'comun', type: 'Risa', hp: 65 },
    { date: 'Misa, pareja ideal', title: 'Misa, pareja ideal', caption: '', image: '16.jpeg', fallback: 'Pareja', rarity: 'raro', type: 'Promesa', hp: 78 },
    { date: 'Poesía pura I', title: 'Poesía pura I', caption: '', image: '17.jpeg', fallback: 'Poesía I', rarity: 'ultra', type: 'Magia', hp: 92 },
    { date: 'Poesía pura II', title: 'Poesía pura II', caption: '', image: '18.jpeg', fallback: 'Poesía II', rarity: 'ultra', type: 'Magia', hp: 92 },
    { date: 'Poesía pura III', title: 'Poesía pura III', caption: '', image: '19.jpeg', fallback: 'Poesía III', rarity: 'ultra', type: 'Magia', hp: 95 },
    { date: 'El futuro que espero contigo', title: 'El futuro que espero contigo', caption: '', image: '20.jpeg', fallback: 'El futuro', rarity: 'legendario', type: 'Promesa', hp: 100 },
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

  dreams: [
    'Viajar contigo y convertir cada ciudad en una postal con nuestro idioma secreto.',
    'Despertar a tu lado con música suave, café y una ventana abierta al futuro.',
    'Celebrar aniversarios con cartas, fotos nuevas y un montón de recuerdos viejos.',
    'Reírnos de nuestras propias anécdotas y descubrir que el tiempo nos volvió más cómplices.',
    'Seguir construyendo una historia donde lo cotidiano también se sienta extraordinario.',
    'Guardar cada versión de nosotros como si fueran capítulos de una novela bonita.',
  ],

  loveLetters: [
    { title: 'Carta I — El destino nos hizo jurados', text: 'Dicen que el destino no avisa, que llega vestido de casualidad, quizás por eso escogió un salón de votación para presentarnos, como si la democracia misma necesitara testigos de lo que iba a nacer ahí. Llegaste con una sonrisa que parecía haber sido guardada durante años solo para ese día, y una mirada que hizo que las urnas, las actas y los formularios perdieran toda su importancia. Yo, que apenas te conocía, ya buscaba pretextos para estar cerca, para escuchar tu voz, para molestarte con tus letras torcidas de maestra que enseña a los niños a escribir bonito pero que a mí me hacía reír con ternura.' },
    { title: 'Carta II — Las madrugadas de Instagram', text: 'Hubo un tiempo en que las dos y las tres de la mañana dejaron de ser horas de insomnio para convertirse en horas nuestras, ya que el sueño no lograba competir con las ganas de seguir hablando. Cada notificación se volvió una pequeña fiesta, cada audio tuyo una melodía que yo guardaba como quien guarda algo valioso en un cofre invisible.', image: '1.jpeg' },
    { title: 'Carta III — La primera cita', text: 'El tiempo, esa cosa que normalmente pesa tanto, decidió volverse líquido esa tarde, y se nos escapó entre las manos sin que lo notáramos, ya que hablar contigo nunca se sintió como hablar sino como reconocer algo que ya conocía de otra vida. Ese día te tomé de la mano, y desde entonces decidí, casi sin decirlo, que no pensaba soltarla.', image: '2.jpeg' },
    { title: 'Carta IV — El primer beso', text: 'Hubo una noche que anhelé tanto que cuando por fin llegó, casi no supe cómo sostenerla entre los brazos, quizás porque los deseos cumplidos siempre asustan un poco antes de volverse alegría. Ese beso que tanto imaginé se sintió como si el aire mismo se hubiera puesto de acuerdo para quedarse quieto un segundo, solo para nosotros.', image: '3.jpeg' },
    { title: 'Carta V — La primera misa juntos', text: 'Hay lugares que cargan un peso distinto, y la iglesia siempre ha sido, para mí, uno de esos sitios donde todo se vuelve más real, más importante. Ir a misa contigo por primera vez fue como presentarte ante lo que más respeto, ya que estar ahí, cerca de ti, en silencio compartido, me hizo sentir que por fin tenía a la mujer indicada en el lugar indicado.', image: '4.jpeg' },
    { title: 'Carta VI — Tunja, tu salón, tu saco', text: 'Fui a Tunja con la excusa de un trabajo de la universidad que, al final, dejé sin terminar, ya que verte de lejos en tu salón de clase, tan juiciosa, tan hermosa sin proponérselo, me pareció mucho más importante que cualquier nota académica. Te regalé el saco que más me gustaba usar porque quería que tuvieras una parte de mí cerca cuando yo no pudiera estarlo.', image: '5.jpeg' },
    { title: 'Carta VII — El día que te pedí que fueras mi novia', text: 'Lo anhelé tanto que lo planeé con la misma dedicación con la que se planea algo sagrado. Te escribí una carta acompañada de canciones de Morat, porque a veces las palabras propias necesitan ayuda de otras voces para decir lo que sienten. Tal vez nunca estuve tan nervioso en mi vida, pero tampoco nunca estuve tan seguro de algo.', image: '6.jpeg' },
    { title: 'Carta VIII — El lugar, el llanto, el alma llena', text: 'Cuéntame tú que recuerdas de ese día, porque yo lo llevo grabado como una fotografía que no se borra: verte llorar, no de tristeza sino de esas lágrimas que solo salen cuando el corazón está demasiado lleno para quedarse callado, fue quizás el instante más humano que he vivido contigo.', image: '7.jpeg' },
    { title: 'Carta IX — El lugar favorito y la comida', text: 'Ese mismo día, como si el universo quisiera regalarnos una jornada completa, terminamos en nuestro lugar favorito, compartiendo una comida que supo distinta, más especial, ya que todo lo que como contigo sabe distinto.', image: '8.jpeg' },
    { title: 'Carta X — Risas de toda una semana', text: 'Anhelo verte todas las veces que la vida me lo permite, ya que cada encuentro contigo se ha convertido en de mis días más felices, incluso los que compartimos con tu mamá entre charlas y sobremesas. Conocer a tus perritos, jugar con ellos, verlos correr hacia ti como si supieran que eres su persona favorita del mundo, me enseñó que el amor también se mide en esas pequeñas alegrías compartidas.', image: '9.jpeg' },
    { title: 'Carta XI — El primer helado', text: 'Un domingo cualquiera se volvió memorable solo porque estuvimos juntos, compartiendo un helado que quizás no recuerdo de qué sabor era, pero sí recuerdo tu risa mientras lo comíamos. Tal vez el amor no necesita grandes escenarios: a veces basta un helado y una tarde de domingo.', image: '10.jpeg' },
    { title: 'Carta XII — Segundo viaje a Tunja', text: 'Volví a Tunja, esta vez para conocer tu universidad, tu biblioteca, los rincones donde te vuelves tú misma sin que nadie te mire. Escuché tus historias, conocí tus lugares favoritos, y entendí que cada espacio que me mostrabas era, en realidad, un pedazo de tu memoria que decidías compartir conmigo.', image: '11.jpeg' },
    { title: 'Carta XIII — La biblioteca, tu belleza, tu cercanía', text: 'Estar contigo en la biblioteca de tu universidad, admirando tu belleza sin necesidad de decir nada, sintiéndote cerca mientras el silencio del lugar nos envolvía, fue de esos momentos que se quedan grabados como una fotografía importante.', image: '12.jpeg' },
    { title: 'Carta XIV — El atardecer que cerró el viaje', text: 'Terminamos ese viaje con una vista de atardecer que parecía pintada solo para nosotros, entre iglesias hermosas donde oramos juntos, entre sushi y pizza compartidos como quien comparte más que comida, y con nuestros primeros collares comprados como símbolo de algo que ya no tenía vuelta atrás.', image: '13.jpeg' },
    { title: 'Carta XV — La excusa de visitar a mi suegra', text: 'Siempre anhelo ir a visitar a tu mamá, ir a recogerla, y si soy honesto, sé que esa es apenas una excusa hermosa para estar más cerca de ti. Tal vez no hay estrategia más sincera que esa: inventar motivos pequeños para no dejar de verte.', image: '14.jpeg' },
    { title: 'Carta XVI — El camino tarde por hablar de más', text: 'También recuerdo esos caminos a recoger a tu mamá donde el tiempo se nos iba entre risas y conversaciones, y a veces llegábamos tarde solo por no querer dejar de hablar. Quizás la impuntualidad, cuando es por hablar contigo, deja de ser un defecto.', image: '15.jpeg' },
    { title: 'Carta XVII — Misa, pareja ideal, y unas medias por unos botines', text: 'Fuimos a misa una vez más, y esa mañana nos vimos como la pareja ideal que aún hoy seguimos siendo. Después, entre risas, salimos a comprar unas medias porque tus botines nuevos te habían dejado heridas en los pies, y ese detalle tan pequeño, tan humano, también se volvió parte de nuestra historia.', image: '16.jpeg' },
    { title: 'Carta XVIII — Poesía pura I', text: 'Tal vez el amor no se explica, solo se vive, y contigo he vivido instantes que se sienten como versos escritos por alguien que nos observa desde lejos. Tu risa tiene la costumbre de llegar sin avisar y quedarse instalada en mi pecho durante días.', image: '17.jpeg' },
    { title: 'Carta XIX — Poesía pura II', text: 'Quizás nadie me explicó nunca que el amor también huele a mañanas compartidas, a mensajes de buenos días, a la certeza tranquila de que hay alguien pensando en uno incluso en el silencio. Contigo aprendí que la felicidad no siempre grita, a veces solo susurra, y ese susurro se parece mucho a tu nombre.', image: '18.jpeg' },
    { title: 'Carta XX — Poesía pura III', text: 'Ya que el tiempo insiste en pasar, prefiero que pase contigo, entre risas, entre misas, entre viajes a Tunja y helados de domingo. Tal vez lo mágico de esta historia no está en los grandes gestos sino en la suma silenciosa de todos los días pequeños que decidimos compartir sin darnos cuenta de que estábamos construyendo algo que ya no se puede deshacer.', image: '19.jpeg' },
    { title: 'Carta XXI — El futuro que espero contigo', text: 'Quizás todavía no sé cómo se ve el futuro con exactitud, pero sé que quiero que tenga tu risa dentro, tus perritos corriendo por algún patio, tu mamá cerca, tus historias de maestra contadas antes de dormir. Espero que seas mi futuro, ya que ya eres, sin proponértelo, mi presente favorito.', image: '20.jpeg' },
  ],
};

/* ============================================================
   STATE
   ============================================================ */
const state = {
  galleryIndex: 0,
  letterStarted: false,
  letterBookIndex: 0,
  finalShown: false,
  musicPlaying: false,
  currentTrackIndex: APP_CONFIG.defaultTrackIndex,
  carouselIndex: 0,
  carouselTotal: 21,
  cardModalIndex: -1,
  selectedDreamColor: 'yellow',
  allCards: [], // gallery + user-added
};

/* ============================================================
   DOM ELEMENTS
   ============================================================ */
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
  modalVideo: document.getElementById('modalVideo'),
  modalDate: document.getElementById('modalDate'),
  modalSong: document.getElementById('modalSong'),
  modalTitle: document.getElementById('modalTitle'),
  modalCaption: document.getElementById('modalCaption'),
  modalPrev: document.getElementById('modalPrev'),
  modalNext: document.getElementById('modalNext'),
  loveButton: document.getElementById('loveButton'),
  fxLayer: document.getElementById('fxLayer'),
  skyCanvas: document.getElementById('skyCanvas'),
  // Carousel
  carouselRing: document.getElementById('carouselRing'),
  carouselCounter: document.getElementById('carouselCounter'),
  carouselCardName: document.getElementById('carouselCardName'),
  carouselPrev: document.getElementById('carouselPrev'),
  carouselNext: document.getElementById('carouselNext'),
  // Card modal
  cardModal: document.getElementById('cardModal'),
  cardModalBackdrop: document.getElementById('cardModalBackdrop'),
  cardModalClose: document.getElementById('cardModalClose'),
  cardModalCard: document.getElementById('cardModalCard'),
  cardModalInfo: document.getElementById('cardModalInfo'),
  cardModalRarityLabel: document.getElementById('cardModalRarityLabel'),
  cardModalTitle: document.getElementById('cardModalTitle'),
  cardModalText: document.getElementById('cardModalText'),
  cardModalPrev: document.getElementById('cardModalPrev'),
  cardModalNext: document.getElementById('cardModalNext'),
  // Add Memory Modal
  addMemoryModal: document.getElementById('addMemoryModal'),
  addMemoryBackdrop: document.getElementById('addMemoryBackdrop'),
  addMemoryClose: document.getElementById('addMemoryClose'),
  addMemoryForm: document.getElementById('addMemoryForm'),
  addMemoryFile: document.getElementById('addMemoryFile'),
  filePreview: document.getElementById('filePreview'),
  fileUploadContent: document.getElementById('fileUploadContent'),
  // Boulevard
  boulevardBoard: document.getElementById('boulevardBoard'),
  boulevardCanvas: document.getElementById('boulevardCanvas'),
  boulevardNotes: document.getElementById('boulevardNotes'),
  boulevardStrings: document.getElementById('boulevardStrings'),
  boulevardAddBtn: document.getElementById('boulevardAddBtn'),
  // Dream Modal
  addDreamModal: document.getElementById('addDreamModal'),
  addDreamBackdrop: document.getElementById('addDreamBackdrop'),
  addDreamClose: document.getElementById('addDreamClose'),
  addDreamForm: document.getElementById('addDreamForm'),
  dreamText: document.getElementById('dreamText'),
};

const audio = new Audio();
audio.preload = 'metadata';
audio.loop = false;

/* ============================================================
   HELPERS
   ============================================================ */
function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }
function pad(v) { return String(v).padStart(2, '0'); }

function createPlaceholderDataUri(title, subtitle, tone = '#d8b45c') {
  const st = title.replace(/&/g, '&amp;');
  const ss = subtitle.replace(/&/g, '&amp;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900"><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#161218"/><stop offset="100%" stop-color="#08080c"/></linearGradient><radialGradient id="glow" cx="50%" cy="35%" r="60%"><stop offset="0%" stop-color="${tone}" stop-opacity="0.42"/><stop offset="100%" stop-color="${tone}" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="900" fill="url(#bg)"/><rect width="1200" height="900" fill="url(#glow)"/><text x="80" y="450" fill="#f4f0e8" font-size="66" font-family="Georgia,serif" font-weight="700">${st}</text><text x="80" y="520" fill="${tone}" font-size="30" letter-spacing="4" font-family="Segoe UI,Arial,sans-serif">${ss}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function getImageSrc(fileName) { return `${APP_CONFIG.imagePath}${fileName}`; }
function getTrackSrc(fileName) { return `${APP_CONFIG.musicPath}${fileName}`; }

function getTrackForPhotoIndex(photoIndex) {
  const trackIndex = Math.floor(photoIndex / 2);
  return APP_DATA.songs[trackIndex] || APP_DATA.songs[0];
}

function getTrackForLetterIndex(letterIndex) {
  if (letterIndex <= 0) return null;
  const trackIndex = Math.floor((letterIndex - 1) / 2);
  return APP_DATA.songs[clamp(trackIndex, 0, APP_DATA.songs.length - 1)];
}

function isVideoFile(src) {
  return /\.(mp4|webm|ogg|mov|avi)$/i.test(src) || (typeof src === 'string' && src.startsWith('data:video'));
}

/* ============================================================
   RARITY HELPERS
   ============================================================ */
const RARITY_STARS = { comun: '★', raro: '★★', ultra: '★★★', legendario: '★★★★' };
const RARITY_LABELS = { comun: 'Común ★', raro: 'Raro ★★', ultra: 'Ultra Raro ★★★', legendario: 'Legendario ★★★★' };
const RARITY_HP = { comun: 60, raro: 75, ultra: 88, legendario: 100 };
const CARD_NUM_OFFSET = 1;

/* ============================================================
   MUSIC
   ============================================================ */
function updateMusicUI(playing) {
  state.musicPlaying = playing;
  document.body.classList.toggle('music-playing', playing);
  elements.musicButton.setAttribute('aria-pressed', String(playing));
  const track = APP_DATA.songs[state.currentTrackIndex];
  const suffix = track ? `: ${track.title}` : '';
  elements.musicStatus.textContent = playing ? `Sonando${suffix}` : `Pausada${suffix}`;
}

function setCurrentTrack(trackIndex, shouldPlay = false) {
  const safeIndex = clamp(trackIndex, 0, APP_DATA.songs.length - 1);
  const track = APP_DATA.songs[safeIndex];
  state.currentTrackIndex = safeIndex;
  audio.src = getTrackSrc(track.file);
  audio.load();
  elements.musicStatus.textContent = shouldPlay ? `Cargando: ${track.title}` : `Listo: ${track.title}`;
  if (shouldPlay) return audio.play().then(() => updateMusicUI(true));
  updateMusicUI(false);
  return Promise.resolve();
}

function playCurrentTrack() { return setCurrentTrack(state.currentTrackIndex, true); }
function playTrack(trackIndex) { return setCurrentTrack(trackIndex, true); }

function initMusic() {
  setCurrentTrack(APP_CONFIG.defaultTrackIndex, false);
  elements.musicButton.addEventListener('click', async () => {
    try {
      if (audio.paused) await playCurrentTrack();
      else { audio.pause(); updateMusicUI(false); }
    } catch (_) {
      elements.musicStatus.textContent = 'Añade tu canción en assets/music';
      updateMusicUI(false);
    }
  });
  audio.addEventListener('ended', () => updateMusicUI(false));
  audio.addEventListener('pause', () => { if (!audio.ended) updateMusicUI(false); });
  audio.addEventListener('play', () => updateMusicUI(true));
  audio.addEventListener('error', () => { elements.musicStatus.textContent = 'Revisa las canciones en assets/music'; updateMusicUI(false); });
}

/* ============================================================
   COUNTER
   ============================================================ */
function formatElapsedTime(start, end = new Date()) {
  let cursor = new Date(start.getTime());
  let months = 0;
  while (true) {
    const next = new Date(cursor.getTime());
    next.setMonth(next.getMonth() + 1);
    if (next <= end) { months++; cursor = next; } else break;
  }
  const rem = Math.max(0, end.getTime() - cursor.getTime());
  return {
    months,
    days: Math.floor(rem / 86400000),
    hours: Math.floor((rem % 86400000) / 3600000),
    minutes: Math.floor((rem % 3600000) / 60000),
    seconds: Math.floor((rem % 60000) / 1000),
  };
}

function updateCounter() {
  const t = formatElapsedTime(APP_CONFIG.startDate);
  elements.counterMonths.textContent = pad(t.months);
  elements.counterDays.textContent = pad(t.days);
  elements.counterHours.textContent = pad(t.hours);
  elements.counterMinutes.textContent = pad(t.minutes);
  elements.counterSeconds.textContent = pad(t.seconds);
  elements.topbarCounterValue.textContent = `${pad(t.months)}m ${pad(t.days)}d ${pad(t.hours)}h ${pad(t.minutes)}m ${pad(t.seconds)}s`;
}

function startCounter() { updateCounter(); window.setInterval(updateCounter, 1000); }

/* ============================================================
   PARTICLES & FX
   ============================================================ */
function drawHeart(ctx, x, y, size, alpha = 1) {
  ctx.save(); ctx.translate(x, y); ctx.scale(size / 32, size / 32);
  ctx.globalAlpha = alpha; ctx.beginPath();
  ctx.moveTo(0, 10); ctx.bezierCurveTo(0, 2, -10, 0, -16, 6);
  ctx.bezierCurveTo(-24, 14, -18, 28, 0, 38);
  ctx.bezierCurveTo(18, 28, 24, 14, 16, 6);
  ctx.bezierCurveTo(10, 0, 0, 2, 0, 10);
  ctx.closePath(); ctx.fillStyle = 'rgba(217, 118, 138, 0.45)'; ctx.fill(); ctx.restore();
}

function createBackgroundCanvas() {
  const canvas = elements.skyCanvas;
  const ctx = canvas.getContext('2d', { alpha: true });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const stars = [], particles = [], hearts = [];
  let width = 0, height = 0;

  function resize() {
    width = window.innerWidth; height = window.innerHeight;
    canvas.width = Math.floor(width * dpr); canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    stars.length = 0; particles.length = 0; hearts.length = 0;
    const sc = APP_CONFIG.prefersReducedMotion ? 72 : 120;
    const pc = APP_CONFIG.prefersReducedMotion ? 24 : 42;
    const hc = APP_CONFIG.prefersReducedMotion ? 8 : 18;
    for (let i = 0; i < sc; i++) stars.push({ x: Math.random() * width, y: Math.random() * height, size: 0.6 + Math.random() * 1.8, speed: 0.01 + Math.random() * 0.025, phase: Math.random() * Math.PI * 2, alpha: 0.22 + Math.random() * 0.6 });
    for (let i = 0; i < pc; i++) particles.push({ x: Math.random() * width, y: Math.random() * height, vx: -0.08 + Math.random() * 0.16, vy: -0.04 + Math.random() * 0.08, size: 0.8 + Math.random() * 1.9, hue: i % 2 === 0 ? 'rgba(216,180,92,0.26)' : 'rgba(207,156,165,0.18)', twirl: Math.random() * Math.PI * 2 });
    for (let i = 0; i < hc; i++) hearts.push({ x: Math.random() * width, y: Math.random() * height, vx: -0.12 + Math.random() * 0.24, vy: -0.05 - Math.random() * 0.08, size: 9 + Math.random() * 12, alpha: 0.12 + Math.random() * 0.18, phase: Math.random() * Math.PI * 2 });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    const grad = ctx.createLinearGradient(0, 0, 0, height);
    grad.addColorStop(0, 'rgba(10,10,16,0.9)'); grad.addColorStop(0.5, 'rgba(8,8,12,0.7)'); grad.addColorStop(1, 'rgba(5,5,7,0.92)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, width, height);
    for (const s of stars) {
      s.phase += s.speed;
      const tw = 0.5 + Math.sin(s.phase) * 0.5;
      ctx.beginPath(); ctx.fillStyle = `rgba(255,255,255,${s.alpha * tw})`; ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2); ctx.fill();
    }
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy; p.twirl += 0.01;
      if (p.x < -20) p.x = width + 20; if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20; if (p.y > height + 20) p.y = -20;
      ctx.beginPath(); ctx.fillStyle = p.hue; ctx.arc(p.x + Math.sin(p.twirl) * 8, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    }
    for (const h of hearts) {
      h.x += h.vx; h.y += h.vy; h.phase += 0.04;
      if (h.y < -30) h.y = height + 30; if (h.x < -30) h.x = width + 30; if (h.x > width + 30) h.x = -30;
      drawHeart(ctx, h.x, h.y, h.size, h.alpha + Math.sin(h.phase) * 0.06);
    }
    requestAnimationFrame(render);
  }

  resize(); window.addEventListener('resize', resize); requestAnimationFrame(render);
}

function createHeartParticle(x, y, drift = 0) {
  const heart = document.createElement('span');
  heart.className = 'heart-particle'; heart.textContent = '❤';
  heart.style.left = `${x}px`; heart.style.top = `${y}px`;
  heart.style.setProperty('--drift', `${drift}px`);
  heart.style.fontSize = `${14 + Math.random() * 18}px`;
  heart.style.animationDuration = `${2200 + Math.random() * 1800}ms`;
  elements.fxLayer.appendChild(heart); window.setTimeout(() => heart.remove(), 4200);
}

function createConfettiPiece(x, y, color) {
  const c = document.createElement('span'); c.className = 'confetti-piece';
  c.style.left = `${x}px`; c.style.top = `${y}px`; c.style.background = color;
  c.style.setProperty('--drift', `${(Math.random() - 0.5) * 220}px`);
  c.style.animationDuration = `${1800 + Math.random() * 1600}ms`;
  elements.fxLayer.appendChild(c); window.setTimeout(() => c.remove(), 4200);
}

function createSparkle(parent) {
  const s = document.createElement('span'); s.className = 'sparkle';
  s.style.left = `${Math.random() * 100}%`; s.style.top = `${Math.random() * 80}%`;
  parent.appendChild(s); window.setTimeout(() => s.remove(), 950);
}

function celebrateBurst({ hearts = 60, confetti = 44, sparkles = 18, duration = 2600 } = {}) {
  const vw = window.innerWidth, vh = window.innerHeight;
  const hi = window.setInterval(() => createHeartParticle(Math.random() * vw, vh - 40, (Math.random() - 0.5) * 220), 60);
  const ci = window.setInterval(() => { const p = ['#d8b45c','#cf9ca5','#ffffff','#7e2336']; createConfettiPiece(Math.random() * vw, -20, p[Math.floor(Math.random() * p.length)]); }, 90);
  const si = window.setInterval(() => createSparkle(elements.fxLayer), 120);
  window.setTimeout(() => { window.clearInterval(hi); window.clearInterval(ci); window.clearInterval(si); }, duration);
}

function celebrateLoveStorm() {
  const vw = window.innerWidth, vh = window.innerHeight;
  const end = Date.now() + 4200;
  const storm = window.setInterval(() => {
    const hb = APP_CONFIG.prefersReducedMotion ? 3 : 9;
    const cb = APP_CONFIG.prefersReducedMotion ? 2 : 6;
    for (let i = 0; i < hb; i++) createHeartParticle(Math.random() * vw, vh - 30, (Math.random() - 0.5) * 280);
    for (let i = 0; i < cb; i++) { const cols = ['#d8b45c','#cf9ca5','#fff5e6','#7e2336']; createConfettiPiece(Math.random() * vw, -20, cols[i % cols.length]); }
    createSparkle(elements.fxLayer);
    if (Date.now() >= end) window.clearInterval(storm);
  }, APP_CONFIG.prefersReducedMotion ? 150 : 70);
}

/* ============================================================
   TIMELINE
   ============================================================ */
function setImageWithFallback(img, item) {
  img.alt = item.title || '';
  img.src = getImageSrc(item.image);
  img.addEventListener('error', () => { img.src = createPlaceholderDataUri(item.title, item.fallback || 'Recuerdo'); }, { once: true });
}

function renderTimeline() {
  elements.timelineGrid.innerHTML = '';
  APP_DATA.timeline.forEach(item => {
    const article = document.createElement('article');
    article.className = 'timeline-card glass-panel';
    const media = document.createElement('div'); media.className = 'timeline-media';
    const img = document.createElement('img'); setImageWithFallback(img, item); media.appendChild(img);
    const body = document.createElement('div'); body.className = 'timeline-card__body';
    body.innerHTML = `<span class="card-meta">${item.date}</span><h3>${item.title}</h3><p>${item.story}</p>`;
    article.appendChild(media); article.appendChild(body);
    elements.timelineGrid.appendChild(article);
  });
}

/* ============================================================
   ★★★ POKÉMON CARDS CAROUSEL ★★★
   ============================================================ */
function hydrateGalleryCaptionsFromLetters() {
  APP_DATA.gallery.forEach((photo, i) => {
    const letter = APP_DATA.loveLetters[i + 1];
    if (!letter) return;
    const cleanTitle = letter.title.replace(/^Carta\s+[^-]+-\s*/i, '').trim();
    photo.title = cleanTitle || photo.title;
    photo.date = letter.title || photo.date;
    photo.caption = letter.text || photo.caption;
  });
}

function loadUserMemories() {
  try {
    const raw = localStorage.getItem('userMemories');
    return raw ? JSON.parse(raw) : [];
  } catch (_) { return []; }
}

function saveUserMemories(memories) {
  try { localStorage.setItem('userMemories', JSON.stringify(memories)); } catch (_) {}
}

function buildAllCards() {
  const userMems = loadUserMemories();
  state.allCards = [...APP_DATA.gallery, ...userMems];
  state.carouselTotal = state.allCards.length + 1; // +1 for the "Add" card
}

function createPokeCardElement(cardData, index, isAddCard = false) {
  const slot = document.createElement('div');
  slot.className = `poke-card-slot${isAddCard ? ' add-card' : ' rarity-' + (cardData.rarity || 'comun')}`;
  slot.dataset.index = String(index);

  if (isAddCard) {
    slot.innerHTML = `
      <div class="poke-card">
        <div class="poke-card__add-content">
          <span class="poke-card__add-icon">✨</span>
          <span class="poke-card__add-text">Carta #${index + 1}<br/>Agregar Nuevo<br/>Recuerdo</span>
        </div>
      </div>`;
    slot.addEventListener('click', () => openAddMemoryModal());
    return slot;
  }

  const rarity = cardData.rarity || 'comun';
  const stars = RARITY_STARS[rarity] || '★';
  const type = cardData.type || 'Amor';
  const hp = cardData.hp || RARITY_HP[rarity] || 60;
  const num = pad(index + CARD_NUM_OFFSET);
  const shortTitle = (cardData.title || '').length > 22
    ? (cardData.title || '').substring(0, 22) + '…'
    : (cardData.title || '');
  const shortDesc = (cardData.caption || cardData.text || '').substring(0, 90) + '…';

  const mediaSrc = cardData.mediaDataUrl || (cardData.image ? getImageSrc(cardData.image) : null);
  const isVideo = mediaSrc && isVideoFile(mediaSrc);

  const mediaHtml = mediaSrc
    ? (isVideo
        ? `<video src="${mediaSrc}" muted autoplay loop playsinline style="width:100%;height:100%;object-fit:cover;"></video>`
        : `<img alt="${shortTitle}" src="${mediaSrc}" style="width:100%;height:100%;object-fit:cover;" />`)
    : `<div style="width:100%;height:100%;background:linear-gradient(135deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02));display:flex;align-items:center;justify-content:center;font-size:2.5rem;">❤</div>`;

  slot.innerHTML = `
    <div class="poke-card">
      <div class="poke-card__header">
        <span class="poke-card__name">${shortTitle}</span>
        <span class="poke-card__hp">♥ ${hp} HP</span>
      </div>
      <div class="poke-card__image-wrap">${mediaHtml}</div>
      <div class="poke-card__type-row">
        <span class="poke-card__type-badge">${type}</span>
        <span class="poke-card__stars">${stars}</span>
      </div>
      <div class="poke-card__desc-row">
        <p class="poke-card__desc">${shortDesc}</p>
      </div>
      <div class="poke-card__footer">
        <span class="poke-card__num">#${num}</span>
        <span class="poke-card__edition">Edición 2026</span>
      </div>
      <div class="poke-card__holo"></div>
      <div class="poke-card__sparkle"></div>
    </div>`;

  // Handle image error
  const img = slot.querySelector('img');
  if (img) {
    img.addEventListener('error', () => {
      img.src = createPlaceholderDataUri(cardData.title || 'Recuerdo', cardData.fallback || '#' + num, '#d8b45c');
    }, { once: true });
  }

  // Click → open card modal
  slot.addEventListener('click', () => openCardModal(index));

  return slot;
}

/* ---- CAROUSEL GEOMETRY ---- */
const CAROUSEL_RADIUS = 580;
const ANGLE_PER_CARD = 360 / 21; // recalculated when total changes

function positionCard(slot, index, total) {
  const angle = index * (360 / total);
  slot.style.transform = `rotateY(${angle}deg) translateZ(${CAROUSEL_RADIUS}px)`;
}

function renderCarousel() {
  if (!elements.carouselRing) return;
  elements.carouselRing.innerHTML = '';
  const total = state.carouselTotal;

  state.allCards.forEach((cardData, i) => {
    const slot = createPokeCardElement(cardData, i, false);
    positionCard(slot, i, total);
    elements.carouselRing.appendChild(slot);
  });

  // Add "add new" card
  const addSlot = createPokeCardElement(null, state.allCards.length, true);
  positionCard(addSlot, state.allCards.length, total);
  elements.carouselRing.appendChild(addSlot);

  updateCarouselPosition(false);
  initHolographicEffects();
}

function updateCarouselPosition(animate = true) {
  if (!elements.carouselRing) return;
  const total = state.carouselTotal;
  const angle = state.carouselIndex * -(360 / total);

  if (!animate) elements.carouselRing.style.transition = 'none';
  elements.carouselRing.style.transform = `rotateY(${angle}deg)`;
  if (!animate) { void elements.carouselRing.offsetWidth; elements.carouselRing.style.transition = ''; }

  // Update counter
  const card = state.allCards[state.carouselIndex];
  const isAdd = state.carouselIndex >= state.allCards.length;
  if (elements.carouselCounter) elements.carouselCounter.textContent = `${state.carouselIndex + 1} / ${total}`;
  if (elements.carouselCardName) {
    elements.carouselCardName.textContent = isAdd ? 'Agregar Recuerdo' : (card ? card.title : '');
  }
}

function carouselNavigate(dir) {
  state.carouselIndex = (state.carouselIndex + dir + state.carouselTotal) % state.carouselTotal;
  updateCarouselPosition(true);
}

function initCarousel() {
  buildAllCards();
  renderCarousel();

  elements.carouselPrev.addEventListener('click', () => carouselNavigate(-1));
  elements.carouselNext.addEventListener('click', () => carouselNavigate(1));

  // Touch/swipe on viewport
  const vp = document.getElementById('carouselViewport');
  if (vp) {
    let touchStartX = 0;
    vp.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
    vp.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) carouselNavigate(dx < 0 ? 1 : -1);
    }, { passive: true });
    // Mouse drag
    let mouseStartX = 0, isDragging = false;
    vp.addEventListener('mousedown', (e) => { mouseStartX = e.clientX; isDragging = true; });
    vp.addEventListener('mouseup', (e) => {
      if (!isDragging) return; isDragging = false;
      const dx = e.clientX - mouseStartX;
      if (Math.abs(dx) > 40) carouselNavigate(dx < 0 ? 1 : -1);
    });
    vp.addEventListener('mouseleave', () => { isDragging = false; });
  }

  // Keyboard navigation when section is visible
  document.addEventListener('keydown', (e) => {
    if (elements.cardModal && elements.cardModal.classList.contains('is-open')) return;
    if (e.key === 'ArrowLeft') carouselNavigate(-1);
    if (e.key === 'ArrowRight') carouselNavigate(1);
  });
}

/* ============================================================
   HOLOGRAPHIC EFFECT
   ============================================================ */
function initHolographicEffects() {
  if (APP_CONFIG.prefersReducedMotion) return;

  document.querySelectorAll('.poke-card-slot:not(.add-card) .poke-card').forEach(card => {
    const slot = card.closest('.poke-card-slot');
    const rarity = [...(slot ? slot.classList : [])].find(c => c.startsWith('rarity-'))?.replace('rarity-', '') || 'comun';

    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const tiltX = (y - 0.5) * -18;
      const tiltY = (x - 0.5) * 18;
      const angle = (x * 0.5 + y * 0.5) * 360;

      card.style.setProperty('--tilt-x', `${tiltX}deg`);
      card.style.setProperty('--tilt-y', `${tiltY}deg`);
      card.style.setProperty('--holo-angle', `${angle}deg`);
      card.style.setProperty('--holo-opacity', rarity === 'legendario' ? '0.9' : rarity === 'ultra' ? '0.7' : '0.5');
      card.style.setProperty('--sparkle-x', `${x * 100}%`);
      card.style.setProperty('--sparkle-y', `${y * 100}%`);
      card.style.setProperty('--sparkle-opacity', rarity === 'legendario' ? '0.8' : rarity === 'ultra' ? '0.6' : '0.3');
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--holo-opacity', rarity === 'legendario' ? '0.45' : '0');
      card.style.setProperty('--sparkle-opacity', rarity === 'legendario' ? '0.5' : '0');
    });
  });
}

/* Full card holographic effect in modal */
function initFullCardHolographic(cardEl, rarity) {
  if (APP_CONFIG.prefersReducedMotion) return;

  cardEl.addEventListener('mousemove', (e) => {
    const rect = cardEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tiltX = (y - 0.5) * -22;
    const tiltY = (x - 0.5) * 22;
    const angle = (x * 0.5 + y * 0.5) * 360;
    cardEl.style.setProperty('--tilt-x', `${tiltX}deg`);
    cardEl.style.setProperty('--tilt-y', `${tiltY}deg`);
    cardEl.style.setProperty('--holo-angle', `${angle}deg`);
    cardEl.style.setProperty('--holo-opacity', rarity === 'legendario' ? '0.95' : rarity === 'ultra' ? '0.8' : '0.6');
    cardEl.style.setProperty('--sparkle-x', `${x * 100}%`);
    cardEl.style.setProperty('--sparkle-y', `${y * 100}%`);
    cardEl.style.setProperty('--sparkle-opacity', rarity === 'legendario' ? '0.9' : rarity === 'ultra' ? '0.7' : '0.4');
  });
  cardEl.addEventListener('mouseleave', () => {
    cardEl.style.setProperty('--tilt-x', '0deg');
    cardEl.style.setProperty('--tilt-y', '0deg');
    cardEl.style.setProperty('--holo-opacity', rarity === 'legendario' ? '0.6' : '0');
    cardEl.style.setProperty('--sparkle-opacity', rarity === 'legendario' ? '0.6' : '0');
  });

  // Gyroscope for mobile
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (e) => {
      if (!elements.cardModal.classList.contains('is-open')) return;
      const tiltX = clamp(e.beta * 0.3, -15, 15);
      const tiltY = clamp(e.gamma * 0.3, -15, 15);
      cardEl.style.setProperty('--tilt-x', `${tiltX}deg`);
      cardEl.style.setProperty('--tilt-y', `${tiltY}deg`);
    });
  }
}

/* ============================================================
   CARD MODAL (full screen view)
   ============================================================ */
function openCardModal(index) {
  const total = state.allCards.length;
  if (index < 0 || index >= total) { openAddMemoryModal(); return; }
  const cardData = state.allCards[index];
  if (!cardData) { openAddMemoryModal(); return; }

  state.cardModalIndex = index;
  const rarity = cardData.rarity || 'comun';
  const letter = APP_DATA.loveLetters[index + 1];
  const type = cardData.type || 'Amor';
  const hp = cardData.hp || RARITY_HP[rarity] || 60;
  const stars = RARITY_STARS[rarity] || '★';
  const num = pad(index + CARD_NUM_OFFSET);
  const mediaSrc = cardData.mediaDataUrl || (cardData.image ? getImageSrc(cardData.image) : null);
  const isVideo = mediaSrc && isVideoFile(mediaSrc);

  const mediaHtml = mediaSrc
    ? (isVideo
        ? `<video src="${mediaSrc}" controls autoplay playsinline style="width:100%;height:100%;object-fit:contain;border-radius:12px;"></video>`
        : `<img alt="${cardData.title}" src="${mediaSrc}" style="width:100%;height:100%;object-fit:cover;" onerror="this.src='${createPlaceholderDataUri(cardData.title, '#' + num)}'" />`)
    : `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;">❤</div>`;

  elements.cardModalCard.className = `poke-card-full rarity-${rarity}`;
  elements.cardModalCard.innerHTML = `
    <div class="poke-card-inner" style="
      background: ${rarity === 'legendario' ? 'linear-gradient(160deg,#1a1200,#2d1f00)' :
                   rarity === 'ultra' ? 'linear-gradient(160deg,#1a0d2e,#2d1052)' :
                   rarity === 'raro' ? 'linear-gradient(160deg,#0f1b35,#1a2d4f)' :
                   'linear-gradient(160deg,#1e1e2e,#2a2a3e)'};
      width:100%;height:100%;display:flex;flex-direction:column;border-radius:18px;">
      <div class="poke-card__header" style="padding:12px 16px 10px;">
        <span class="poke-card__name" style="font-size:0.85rem;max-width:200px;">${cardData.title}</span>
        <span class="poke-card__hp" style="font-size:0.8rem;">♥ ${hp} HP</span>
      </div>
      <div class="poke-card__image-wrap" style="margin:5px 14px;border-radius:14px;flex:1;">${mediaHtml}</div>
      <div class="poke-card__type-row" style="padding:6px 14px;">
        <span class="poke-card__type-badge" style="font-size:0.72rem;">${type}</span>
        <span class="poke-card__stars" style="font-size:0.85rem;">${stars}</span>
      </div>
      <div class="poke-card__desc-row" style="padding:5px 14px 8px;border-top:1px solid rgba(255,255,255,0.07);">
        <p class="poke-card__desc" style="font-size:0.7rem;-webkit-line-clamp:3;">${(cardData.caption || cardData.text || '').substring(0, 120)}…</p>
      </div>
      <div class="poke-card__footer" style="padding:5px 14px 12px;">
        <span class="poke-card__num" style="font-size:0.62rem;">#${num}</span>
        <span class="poke-card__edition" style="font-size:0.62rem;">Edición 2026</span>
      </div>
    </div>
    <div class="poke-card__holo"></div>
    <div class="poke-card__sparkle"></div>`;

  // Info panel
  const rarityLabel = RARITY_LABELS[rarity] || rarity;
  elements.cardModalRarityLabel.textContent = rarityLabel;
  elements.cardModalRarityLabel.className = `card-modal__rarity-label rarity-${rarity}`;
  elements.cardModalTitle.textContent = cardData.title || `Recuerdo #${num}`;
  elements.cardModalText.textContent = cardData.caption || cardData.text || letter?.text || 'Sin descripción aún.';

  elements.cardModal.classList.add('is-open');
  elements.cardModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  initFullCardHolographic(elements.cardModalCard, rarity);
}

function closeCardModal() {
  elements.cardModal.classList.remove('is-open');
  elements.cardModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  // Stop video if playing
  const video = elements.cardModalCard.querySelector('video');
  if (video) video.pause();
}

function initCardModal() {
  elements.cardModalClose.addEventListener('click', closeCardModal);
  elements.cardModalBackdrop.addEventListener('click', closeCardModal);
  elements.cardModalPrev.addEventListener('click', () => {
    const ni = (state.cardModalIndex - 1 + state.allCards.length) % state.allCards.length;
    openCardModal(ni);
  });
  elements.cardModalNext.addEventListener('click', () => {
    const ni = (state.cardModalIndex + 1) % state.allCards.length;
    openCardModal(ni);
  });
  document.addEventListener('keydown', (e) => {
    if (!elements.cardModal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeCardModal();
    if (e.key === 'ArrowLeft') { const ni = (state.cardModalIndex - 1 + state.allCards.length) % state.allCards.length; openCardModal(ni); }
    if (e.key === 'ArrowRight') { const ni = (state.cardModalIndex + 1) % state.allCards.length; openCardModal(ni); }
  });
}

/* ============================================================
   ADD MEMORY MODAL
   ============================================================ */
function openAddMemoryModal() {
  elements.addMemoryModal.classList.add('is-open');
  elements.addMemoryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeAddMemoryModal() {
  elements.addMemoryModal.classList.remove('is-open');
  elements.addMemoryModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

let pendingMediaDataUrl = null;
let pendingMediaType = 'image';

function initAddMemory() {
  elements.addMemoryClose.addEventListener('click', closeAddMemoryModal);
  elements.addMemoryBackdrop.addEventListener('click', closeAddMemoryModal);

  elements.addMemoryFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    pendingMediaType = file.type.startsWith('video') ? 'video' : 'image';
    const reader = new FileReader();

    reader.onload = (ev) => {
      pendingMediaDataUrl = ev.target.result;
      elements.filePreview.style.display = 'block';
      elements.fileUploadContent.style.display = 'none';

      if (pendingMediaType === 'video') {
        elements.filePreview.innerHTML = `<video src="${pendingMediaDataUrl}" controls style="max-height:200px;border-radius:10px;width:100%"></video>`;
      } else {
        elements.filePreview.innerHTML = `<img src="${pendingMediaDataUrl}" style="max-height:200px;border-radius:10px;object-fit:contain;width:100%" alt="Preview"/>`;
      }
    };

    // Only read as base64 if < 8MB, otherwise use object URL
    if (file.size < 8 * 1024 * 1024) {
      reader.readAsDataURL(file);
    } else {
      pendingMediaDataUrl = URL.createObjectURL(file);
      pendingMediaType = file.type.startsWith('video') ? 'video' : 'image';
      elements.filePreview.style.display = 'block';
      elements.fileUploadContent.style.display = 'none';
      if (pendingMediaType === 'video') {
        elements.filePreview.innerHTML = `<video src="${pendingMediaDataUrl}" controls style="max-height:200px;border-radius:10px;width:100%"></video>`;
      } else {
        elements.filePreview.innerHTML = `<img src="${pendingMediaDataUrl}" style="max-height:200px;border-radius:10px;object-fit:contain;width:100%" alt="Preview"/>`;
      }
    }
  });

  elements.addMemoryForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(elements.addMemoryForm);
    const title = data.get('title') || 'Nuevo recuerdo';
    const date = data.get('date') || new Date().toLocaleDateString('es-CO');
    const text = data.get('text') || '';
    const rarity = data.get('rarity') || 'comun';

    const newMemory = {
      title, date, text,
      caption: text,
      rarity,
      type: 'Memoria',
      hp: RARITY_HP[rarity] || 60,
      fallback: title,
      mediaDataUrl: pendingMediaDataUrl || null,
      mediaType: pendingMediaType,
    };

    const userMems = loadUserMemories();
    userMems.push(newMemory);
    saveUserMemories(userMems);

    // Rebuild carousel
    buildAllCards();
    renderCarousel();
    state.carouselIndex = state.allCards.length - 1;
    updateCarouselPosition(false);

    // Reset form
    elements.addMemoryForm.reset();
    pendingMediaDataUrl = null;
    elements.filePreview.style.display = 'none';
    elements.fileUploadContent.style.display = 'flex';

    closeAddMemoryModal();
    celebrateBurst({ hearts: 30, confetti: 20, sparkles: 10, duration: 1800 });
  });
}

/* ============================================================
   ★★★ BOULEVARD DE SUEÑOS ★★★
   ============================================================ */
const DEFAULT_BOULEVARD_DREAMS = [
  { text: 'Viajar a la playa juntos y ver el amanecer 🌅', color: 'yellow', x: 5, y: 8, rotate: -3 },
  { text: 'Despertar a tu lado con café y música suave ☕', color: 'pink', x: 28, y: 5, rotate: 2 },
  { text: 'Tener nuestra propia casita con jardín 🏡', color: 'blue', x: 54, y: 7, rotate: -2 },
  { text: 'Conocer el mar contigo 🌊', color: 'green', x: 78, y: 10, rotate: 4 },
  { text: 'Celebrar muchos aniversarios juntos 💍', color: 'lavender', x: 10, y: 45, rotate: -4 },
  { text: 'Tener nuestros perritos y malcriarlos juntos 🐕', color: 'yellow', x: 38, y: 50, rotate: 1 },
  { text: 'Ir a Cartagena y comer muchísimo 🌮', color: 'pink', x: 65, y: 48, rotate: -2 },
  { text: 'Construir recuerdos eternos, uno por uno ❤️', color: 'lavender', x: 20, y: 72, rotate: 3 },
  { text: 'Aprender a bailar juntos sin pisarnos 💃', color: 'blue', x: 48, y: 75, rotate: -1 },
  { text: 'Reírnos de nuestras viejas anécdotas siendo viejitos 👴👵', color: 'green', x: 72, y: 70, rotate: 2 },
];

function loadBoulevardDreams() {
  try {
    const raw = localStorage.getItem('boulevardDreams');
    return raw ? JSON.parse(raw) : null;
  } catch (_) { return null; }
}

function saveBoulevardDreams(dreams) {
  try { localStorage.setItem('boulevardDreams', JSON.stringify(dreams)); } catch (_) {}
}

let boulevardDreams = [];

function renderBoulevardDreams() {
  if (!elements.boulevardNotes) return;
  elements.boulevardNotes.innerHTML = '';
  if (elements.boulevardStrings) elements.boulevardStrings.innerHTML = '';

  boulevardDreams.forEach((dream, i) => addNoteToBoard(dream, i, false));
  drawStrings();
}

function addNoteToBoard(dream, index, save = true) {
  if (save) {
    dream.x = 5 + Math.random() * 70;
    dream.y = 5 + Math.random() * 60;
    dream.rotate = (Math.random() - 0.5) * 8;
    boulevardDreams.push(dream);
    saveBoulevardDreams(boulevardDreams);
    index = boulevardDreams.length - 1;
  }

  const note = document.createElement('div');
  note.className = `dream-note dream-note--${dream.color || 'yellow'}`;
  note.dataset.index = String(index);
  note.style.left = `${dream.x}%`;
  note.style.top = `${dream.y}%`;
  note.style.transform = `rotate(${dream.rotate || 0}deg)`;
  note.style.setProperty('--note-rotate', `rotate(${dream.rotate || 0}deg)`);
  note.style.setProperty('--note-transform', `rotate(${dream.rotate || 0}deg)`);
  note.style.animation = 'noteAppear 0.4s ease forwards';

  note.innerHTML = `
    <div class="dream-note__actions">
      <button class="dream-note__del" title="Eliminar" aria-label="Eliminar sueño">✕</button>
    </div>
    <p>${dream.text}</p>`;

  note.querySelector('.dream-note__del').addEventListener('click', (e) => {
    e.stopPropagation();
    boulevardDreams.splice(index, 1);
    saveBoulevardDreams(boulevardDreams);
    renderBoulevardDreams();
  });

  makeDraggable(note, index);
  elements.boulevardNotes.appendChild(note);

  if (save) drawStrings();
}

function makeDraggable(note, index) {
  let startX, startY, startLeft, startTop, isDragging = false;

  const onStart = (cx, cy) => {
    const board = elements.boulevardCanvas;
    if (!board) return;
    const boardRect = board.getBoundingClientRect();
    const noteRect = note.getBoundingClientRect();
    startX = cx; startY = cy;
    startLeft = noteRect.left - boardRect.left;
    startTop = noteRect.top - boardRect.top;
    isDragging = true;
    note.classList.add('is-dragging');
    note.style.left = `${startLeft}px`; note.style.top = `${startTop}px`;
    note.style.transform = `rotate(${(Math.random() - 0.5) * 6}deg) scale(1.04)`;
  };

  const onMove = (cx, cy) => {
    if (!isDragging) return;
    const board = elements.boulevardCanvas;
    if (!board) return;
    const boardRect = board.getBoundingClientRect();
    const dx = cx - startX, dy = cy - startY;
    const newLeft = clamp(startLeft + dx, 0, boardRect.width - 170);
    const newTop = clamp(startTop + dy, 0, boardRect.height - 140);
    note.style.left = `${newLeft}px`; note.style.top = `${newTop}px`;
  };

  const onEnd = (cx, cy) => {
    if (!isDragging) return;
    isDragging = false;
    note.classList.remove('is-dragging');
    const board = elements.boulevardCanvas;
    if (!board) return;
    const boardRect = board.getBoundingClientRect();
    const newLeft = note.offsetLeft;
    const newTop = note.offsetTop;
    const xPct = (newLeft / boardRect.width) * 100;
    const yPct = (newTop / boardRect.height) * 100;
    if (boulevardDreams[index]) {
      boulevardDreams[index].x = xPct; boulevardDreams[index].y = yPct;
    }
    note.style.left = `${xPct}%`; note.style.top = `${yPct}%`;
    note.style.transform = `rotate(${boulevardDreams[index]?.rotate || 0}deg)`;
    saveBoulevardDreams(boulevardDreams);
    drawStrings();
  };

  // Mouse
  note.addEventListener('mousedown', (e) => { if (e.button === 0) { e.preventDefault(); onStart(e.clientX, e.clientY); } });
  document.addEventListener('mousemove', (e) => { if (isDragging) onMove(e.clientX, e.clientY); });
  document.addEventListener('mouseup', (e) => { if (isDragging) onEnd(e.clientX, e.clientY); });

  // Touch
  note.addEventListener('touchstart', (e) => { const t = e.touches[0]; onStart(t.clientX, t.clientY); }, { passive: true });
  note.addEventListener('touchmove', (e) => { const t = e.touches[0]; onMove(t.clientX, t.clientY); e.preventDefault(); }, { passive: false });
  note.addEventListener('touchend', (e) => { const t = e.changedTouches[0]; onEnd(t.clientX, t.clientY); }, { passive: true });
}

function drawStrings() {
  if (!elements.boulevardStrings || !elements.boulevardNotes) return;
  const svg = elements.boulevardStrings;
  svg.innerHTML = '';
  const board = elements.boulevardCanvas;
  if (!board) return;
  const boardRect = board.getBoundingClientRect();
  const notes = elements.boulevardNotes.querySelectorAll('.dream-note');
  if (notes.length < 2) return;

  // Draw strings between a few random pairs for decoration
  const pairs = [];
  for (let i = 0; i < Math.min(notes.length, 6); i++) {
    const j = (i + 2) % notes.length;
    if (j !== i) pairs.push([i, j]);
  }

  pairs.forEach(([ai, bi]) => {
    const a = notes[ai], b = notes[bi];
    if (!a || !b) return;
    const ar = a.getBoundingClientRect(), br = b.getBoundingClientRect();
    const x1 = ar.left - boardRect.left + ar.width / 2;
    const y1 = ar.top - boardRect.top + ar.height / 2;
    const x2 = br.left - boardRect.left + br.width / 2;
    const y2 = br.top - boardRect.top + br.height / 2;
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2 + 30;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${x1},${y1} Q${mx},${my} ${x2},${y2}`);
    path.setAttribute('class', 'boulevard-string');
    svg.appendChild(path);
  });
}

function initBoulevard() {
  const saved = loadBoulevardDreams();
  boulevardDreams = saved || DEFAULT_BOULEVARD_DREAMS.map(d => ({ ...d }));
  if (!saved) saveBoulevardDreams(boulevardDreams);
  renderBoulevardDreams();

  elements.boulevardAddBtn.addEventListener('click', () => openAddDreamModal());
}

/* ---- Add Dream Modal ---- */
function openAddDreamModal() {
  elements.addDreamModal.classList.add('is-open');
  elements.addDreamModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (elements.dreamText) elements.dreamText.focus();
}

function closeAddDreamModal() {
  elements.addDreamModal.classList.remove('is-open');
  elements.addDreamModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initAddDream() {
  elements.addDreamClose.addEventListener('click', closeAddDreamModal);
  elements.addDreamBackdrop.addEventListener('click', closeAddDreamModal);

  // Color picker
  document.querySelectorAll('.note-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.note-color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedDreamColor = btn.dataset.color;
    });
  });

  elements.addDreamForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = elements.dreamText.value.trim();
    if (!text) return;
    addNoteToBoard({ text, color: state.selectedDreamColor }, -1, true);
    elements.addDreamForm.reset();
    state.selectedDreamColor = 'yellow';
    document.querySelectorAll('.note-color-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.note-color-btn[data-color="yellow"]')?.classList.add('active');
    closeAddDreamModal();
  });
}

/* ============================================================
   GALLERY MODAL (legacy — for letter section "Ver foto")
   ============================================================ */
function createModalSlide(index) {
  const item = APP_DATA.gallery[index];
  if (!item) return;
  const track = getTrackForPhotoIndex(index);
  state.galleryIndex = index;
  elements.modalDate.textContent = item.date;
  if (elements.modalSong) elements.modalSong.textContent = `Canción: ${track.title}`;
  elements.modalTitle.textContent = item.title;
  elements.modalCaption.textContent = item.caption;

  const mediaSrc = item.mediaDataUrl || getImageSrc(item.image);
  const isVideo = isVideoFile(mediaSrc);

  if (isVideo) {
    elements.modalImage.style.display = 'none';
    elements.modalVideo.style.display = 'block';
    elements.modalVideo.src = mediaSrc;
    elements.modalVideo.load();
  } else {
    elements.modalVideo.style.display = 'none';
    elements.modalVideo.pause();
    elements.modalImage.style.display = 'block';
    elements.modalImage.alt = item.title;
    elements.modalImage.src = mediaSrc;
    elements.modalImage.addEventListener('error', () => {
      elements.modalImage.src = createPlaceholderDataUri(item.title, item.fallback || 'Recuerdo');
    }, { once: true });
  }

  // adjust modal layout
  window.setTimeout(() => {
    try {
      const panel = document.querySelector('.gallery-modal__panel');
      if (panel) {
        const imgH = elements.modalImage.clientHeight || 0;
        if (imgH > panel.clientHeight - 80) elements.galleryModal.classList.add('gallery-modal--stacked');
        else elements.galleryModal.classList.remove('gallery-modal--stacked');
        const copy = panel.querySelector('.gallery-modal__copy');
        if (copy) copy.style.maxHeight = `${Math.max(120, panel.clientHeight - 120)}px`;
      }
    } catch (_) {}
  }, 40);
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
  if (elements.modalVideo) { elements.modalVideo.pause(); elements.modalVideo.src = ''; }
  document.body.style.overflow = '';
}

function nextGallerySlide(direction) {
  const total = APP_DATA.gallery.length;
  createModalSlide((state.galleryIndex + direction + total) % total);
}

function initGalleryModal() {
  elements.modalPrev.addEventListener('click', () => nextGallerySlide(-1));
  elements.modalNext.addEventListener('click', () => nextGallerySlide(1));
  elements.galleryModal.addEventListener('click', (e) => { if (e.target.matches('[data-modal-close]')) closeGallery(); });
  document.addEventListener('keydown', (e) => {
    if (!elements.galleryModal.classList.contains('is-open')) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') nextGallerySlide(-1);
    if (e.key === 'ArrowRight') nextGallerySlide(1);
  });
}

/* ============================================================
   LETTER BOOK (MINI LIBRO)
   ============================================================ */
function buildLetterRail() {
  elements.letterRail.innerHTML = '';
  APP_DATA.loveLetters.forEach((entry, i) => {
    const btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'letter-rail__item';
    btn.textContent = i === 0 ? 'Intro' : pad(i);
    btn.setAttribute('aria-label', entry.title);
    btn.addEventListener('click', () => renderLetterBook(i));
    elements.letterRail.appendChild(btn);
  });
}

function renderLetterBook(index) {
  const safeIndex = clamp(index, 0, APP_DATA.loveLetters.length - 1);
  const letter = APP_DATA.loveLetters[safeIndex];
  const track = getTrackForLetterIndex(safeIndex);
  state.letterBookIndex = safeIndex;

  elements.letterBookProgress.textContent = `Carta ${safeIndex + 1} de ${APP_DATA.loveLetters.length}`;
  elements.letterBookSong.textContent = track ? `Canción asociada: ${track.title}` : 'Canción asociada: Introducción';

  elements.letterText.innerHTML = `
    <article class="letter-card">
      <h3>${letter.title}</h3>
      <p>${letter.text}</p>
      <p class="letter-card__signature">Para ella, desde la memoria.</p>
    </article>`;

  elements.letterPrev.disabled = safeIndex === 0;
  elements.letterNext.disabled = safeIndex === APP_DATA.loveLetters.length - 1;
  elements.letterOpenPhoto.disabled = (safeIndex - 1) < 0;
  elements.letterPlaySong.disabled = !track;

  elements.letterRail.querySelectorAll('.letter-rail__item').forEach((btn, i) => {
    btn.classList.toggle('is-active', i === safeIndex);
  });

  if (!APP_CONFIG.prefersReducedMotion) {
    elements.letterText.classList.remove('is-fading');
    void elements.letterText.offsetWidth;
    elements.letterText.classList.add('is-fading');
  }
}

function initLetterBook() {
  buildLetterRail();
  renderLetterBook(0);

  elements.letterPrev.addEventListener('click', () => renderLetterBook(state.letterBookIndex - 1));
  elements.letterNext.addEventListener('click', () => renderLetterBook(state.letterBookIndex + 1));

  elements.letterPlaySong.addEventListener('click', () => {
    const track = getTrackForLetterIndex(state.letterBookIndex);
    if (!track) return;
    const idx = APP_DATA.songs.findIndex(s => s.file === track.file);
    if (idx >= 0) playTrack(idx);
  });

  elements.letterOpenPhoto.addEventListener('click', () => {
    const photoIndex = state.letterBookIndex - 1;
    if (photoIndex >= 0) openGallery(photoIndex);
  });

  elements.letterPetals.addEventListener('click', () => celebrateLoveStorm());
}

/* ============================================================
   SECTION REVEAL
   ============================================================ */
function applySectionReveal() {
  const sections = document.querySelectorAll('[data-reveal]');
  const observer = new IntersectionObserver((entries) => {
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
          renderFinalPoems();
        }
      }
    }
  }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });
  sections.forEach(s => observer.observe(s));
}

/* ============================================================
   FINAL SECTION (poems)
   ============================================================ */
const APP_DATA_POEMS = [
  'Mañanas que elegimos:\nDespertar contigo no es un deseo, es mi proyecto favorito. Imagino cafés compartidos, ventanas que se abren al mismo sol y la costumbre de decirte buenos días hasta que la vida nos lo haga automático.',
  'Mapas con tu nombre:\nTe prometo giras sin prisa, escapadas sin itinerario y volver siempre a la misma esquina donde tus manos me reconocen. Llevaré tu risa en la maleta.',
  'La casa de los pequeños milagros:\nQuiero un rincón con plantas, una mesa donde escribir cartas y un patio con dos perros que confundan nuestros pasos con alegría.',
  'Aprender y envejecer contigo:\nPrometo aprender tus canciones, tus silencios y las recetas que te abrazan. Prometo equivocarme a tu lado y perdonarte despacio.',
  'Promesas simples, firmes:\nNo prometo un mundo perfecto, pero sí días llenos de atención: responder tus mensajes aunque esté ocupado, sorprenderte con flores sin fecha.',
  'Futuro a dos voces:\nQuiero que hablemos del mañana como se habla del postre favorito: con ganas y sin apuro. Quiero ser el lugar al que siempre quieras volver.',
];

function renderFinalPoems() {
  const container = document.querySelector('.final-copy');
  if (!container || container.querySelector('.final-poems')) return;
  const wrapper = document.createElement('div');
  wrapper.className = 'final-poems';
  const html = APP_DATA_POEMS.map(p => {
    const parts = p.split('\n');
    const title = parts[0].replace(/:$/, '');
    const body = parts.slice(1).join('\n');
    return `<article class="poem-card glass-panel"><h4>${title}</h4><p class="poem-text">${body}</p></article>`;
  }).join('');
  wrapper.innerHTML = `<h3>Poemas del futuro</h3><div class="poem-list">${html}</div>`;
  container.insertBefore(wrapper, container.firstChild);
}

/* ============================================================
   START CURTAIN
   ============================================================ */
function initStartCurtain() {
  elements.startButton.addEventListener('click', () => {
    elements.startCurtain.classList.add('is-hidden');
    document.body.classList.add('story-started');
    window.setTimeout(() => {
      document.getElementById('introSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, APP_CONFIG.prefersReducedMotion ? 0 : 220);
  });
}

/* ============================================================
   GLOBAL CONTROLS
   ============================================================ */
function initGlobalControls() {
  elements.loveButton.addEventListener('click', () => celebrateLoveStorm());
}

/* ============================================================
   BOOT
   ============================================================ */
function boot() {
  hydrateGalleryCaptionsFromLetters();
  createBackgroundCanvas();
  applySectionReveal();
  renderTimeline();
  initCarousel();
  initCardModal();
  initAddMemory();
  initBoulevard();
  initAddDream();
  initLetterBook();
  initGalleryModal();
  initMusic();
  initStartCurtain();
  initGlobalControls();
  startCounter();

  window.setTimeout(() => {
    const hero = document.getElementById('introSection');
    if (hero) hero.classList.add('is-visible');
  }, 220);
}

boot();
