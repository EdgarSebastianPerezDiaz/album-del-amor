/* =====================================================
   Karen Julieth & Edgar Sebastian — Album de Amor
   ===================================================== */

'use strict';

/* ───────────────────────────── DATA ───────────────────────────── */
const APP_DATA = {
  startDate: new Date('2026-06-07T19:00:00'),
  songs: [
    { title: 'Perfect',  artist: 'Ed Sheeran',    src: '' },
    { title: 'Happier',  artist: 'Ed Sheeran',    src: '' },
    { title: 'Die With A Smile', artist: 'Bruno Mars & Lady Gaga', src: '' },
    { title: 'All of Me',        artist: 'John Legend',            src: '' },
    { title: 'Lover',            artist: 'Taylor Swift',           src: '' },
    { title: 'Can\'t Help Falling In Love', artist: 'Elvis Presley', src: '' },
    { title: 'A Thousand Years', artist: 'Christina Perri',        src: '' },
    { title: 'Thinking Out Loud',artist: 'Ed Sheeran',             src: '' },
    { title: 'Tenerife Sea',     artist: 'Ed Sheeran',             src: '' },
    { title: 'Make You Feel My Love', artist: 'Adele',             src: '' },
    { title: 'Just The Way You Are', artist: 'Bruno Mars',         src: '' },
    { title: 'I Will Always Love You', artist: 'Whitney Houston',  src: '' },
    { title: 'My Heart Will Go On', artist: 'Celine Dion',         src: '' },
    { title: 'Endless Love',     artist: 'Diana Ross & Lionel Richie', src: '' },
    { title: 'At Last',          artist: 'Etta James',             src: '' },
    { title: 'La Vie En Rose',   artist: 'Édith Piaf',             src: '' },
    { title: 'Fly Me To The Moon', artist: 'Frank Sinatra',        src: '' },
    { title: 'Stand By Me',      artist: 'Ben E. King',            src: '' },
    { title: 'Your Song',        artist: 'Elton John',             src: '' },
    { title: 'Something',        artist: 'The Beatles',            src: '' },
  ],
  gallery: [
    { date: 'El primer beso',              title: 'El Primer Beso',           image: '3.jpeg',  rarity:'legendario', type:'Amor',     hp:100, text:'El instante en que todo cambió. El universo pausó su respiración para que nosotros empezáramos la nuestra juntos. Ese beso que selló nuestro primer sí.' },
    { date: 'Las madrugadas de Instagram', title: 'Madrugadas de Instagram',  image: '1.jpeg',  rarity:'raro',       type:'Memoria',  hp:70,  text:'Horas que se convirtieron en puentes. Cada mensaje una confesión, cada emoji una caricia digital que cruzaba la distancia antes de que supiéramos que éramos esto.' },
    { date: 'La primera foto juntos',      title: 'Primera Foto',             image: '2.jpeg',  rarity:'ultra',      type:'Historia', hp:85,  text:'La primera vez que la cámara nos capturó como un "nosotros". Esa foto guarda más que una imagen: guarda el inicio de todo.' },
    { date: 'Nuestro primer plan',         title: 'El Primer Plan',           image: '4.jpeg',  rarity:'raro',       type:'Aventura', hp:75,  text:'El día que dijimos "vamos" sin saber bien a dónde, pero sabiendo que juntos era suficiente brújula para cualquier camino.' },
    { date: 'Cuando me dijiste que sí',    title: 'El Gran Sí',               image: '5.jpeg',  rarity:'legendario', type:'Amor',     hp:100, text:'El momento exacto en que Karen Julieth dijo sí y mi corazón escribió la página más importante de toda su historia.' },
    { date: 'La primera vez que cocinamos',title: 'Cocinando Juntos',         image: '6.jpeg',  rarity:'comun',      type:'Hogar',    hp:60,  text:'Harina en la ropa, risas en la cocina y el descubrimiento de que incluso los errores culinarios saben mejor cuando los compartimos.' },
    { date: 'Ese atardecer inolvidable',   title: 'El Atardecer',             image: '7.jpeg',  rarity:'ultra',      type:'Magia',    hp:90,  text:'El cielo pintó naranja y rosa como si supiera que estábamos ahí. Nos quedamos en silencio porque las palabras sobraban.' },
    { date: 'La noche de estrellas',       title: 'Noche de Estrellas',       image: '8.jpeg',  rarity:'ultra',      type:'Magia',    hp:88,  text:'Acostados mirando el cielo, cada estrella se convirtió en una promesa que no necesitaba palabras para ser real y eterna.' },
    { date: 'Nuestro primer viaje',        title: 'Primer Viaje',             image: '9.jpeg',  rarity:'legendario', type:'Aventura', hp:95,  text:'El primer mapa que dibujamos juntos. La primera maleta compartida. El primer horizonte que fue nuestro y no mío o tuyo.' },
    { date: 'La llamada de medianoche',    title: 'Llamada de Medianoche',    image: '10.jpeg', rarity:'raro',       type:'Conexión', hp:72,  text:'A las 2am, cuando el mundo dormía, nuestras voces se encontraron y la distancia dejó de existir por un rato mágico.' },
    { date: 'Bailando bajo la lluvia',     title: 'Lluvia y Baile',           image: '11.jpeg', rarity:'ultra',      type:'Alegría',  hp:87,  text:'La lluvia llegó de sorpresa y tú dijiste "vamos" y bailamos sin música más que la del cielo, mojados y absolutamente felices.' },
    { date: 'El día que lloramos juntos',  title: 'Lágrimas Compartidas',     image: '12.jpeg', rarity:'raro',       type:'Verdad',   hp:80,  text:'Descubrimos que el amor también es llorar sin vergüenza, sostenerse cuando todo tiembla y saber que no estás solo en la tormenta.' },
    { date: 'Nuestra canción favorita',    title: 'Nuestra Canción',          image: '13.jpeg', rarity:'comun',      type:'Música',   hp:65,  text:'La primera vez que una canción se convirtió en "nuestra". Cada vez que suena, regresamos a ese momento como si el tiempo no existiera.' },
    { date: 'El cumpleaños especial',      title: 'Cumpleaños Especial',      image: '14.jpeg', rarity:'ultra',      type:'Celebración', hp:92, text:'Un año más de ella en el mundo y yo queriendo que todos los años siguientes tengan su nombre en la primera página.' },
    { date: 'La promesa del futuro',       title: 'Promesa del Futuro',       image: '15.jpeg', rarity:'legendario', type:'Amor',     hp:100, text:'El día que el mañana dejó de ser incierto porque lo prometimos juntos. El futuro tiene nuestros nombres escritos lado a lado.' },
    { date: 'Nuestro lugar secreto',       title: 'Lugar Secreto',            image: '16.jpeg', rarity:'ultra',      type:'Refugio',  hp:88,  text:'Ese rincón del mundo que nadie más conoce, donde el tiempo corre diferente y siempre podemos ser exactamente quienes somos.' },
    { date: 'La sorpresa perfecta',        title: 'La Gran Sorpresa',         image: '17.jpeg', rarity:'raro',       type:'Magia',    hp:78,  text:'Planifiqué todo durante semanas y cuando lo viste, tu sonrisa valió más que cualquier regalo que el dinero pueda comprar.' },
    { date: 'Nuestro primer año',          title: 'Un Año Juntos',            image: '18.jpeg', rarity:'legendario', type:'Hito',     hp:100, text:'365 días llenos de aprendizajes, crecimientos, complicidades y la certeza de que elegirte fue la mejor decisión de mi vida.' },
    { date: 'La selfie del corazón',       title: 'Selfie del Corazón',       image: '19.jpeg', rarity:'comun',      type:'Cotidiano',hp:62,  text:'Una foto cualquiera que guarda extraordinario: el destello en tus ojos cuando estás feliz y sé que soy parte de ese brillo.' },
    { date: 'Hoy y siempre',              title: 'Hoy y Siempre',            image: '20.jpeg', rarity:'legendario', type:'Amor',     hp:100, text:'Este recuerdo aún se está escribiendo. Cada día que pasa agrega palabras nuevas a esta historia que no tiene final planeado.' },
  ],
  timeline: [
    { date: 'Junio 2026',       title: 'El comienzo oficial',           image: '3.jpeg', text: 'El día que dijimos sí y el mundo adquirió un nuevo significado. Primer capítulo de la historia más bonita.' },
    { date: 'Antes de nosotros', title: 'Las madrugadas previas',       image: '1.jpeg', text: 'Mensajes a deshoras, risa fácil, el presentimiento de que algo grande estaba naciendo entre palabras.' },
    { date: 'La primera foto',   title: 'Primera imagen juntos',        image: '2.jpeg', text: 'El universo quiso dejar constancia visual de que éramos reales. Una foto para la historia.' },
    { date: 'En construcción',   title: 'Todo lo que viene',            image: '4.jpeg', text: 'El futuro lleno de planes, aventuras y momentos que todavía no existen pero ya los esperamos con el corazón abierto.' },
  ],
  letters: [
    { title: 'Carta I — El inicio', song: 'Perfect — Ed Sheeran', text: `Querida Karen Julieth,\n\nHubo un momento exacto en que el universo decidió que nuestros caminos debían cruzarse, y ese momento tiene nombre, hora y una sonrisa tuya que no he podido borrar de la memoria.\n\nEsta página existe porque algunas historias merecen ser guardadas con cuidado, como se guardan las cartas de amor: en un lugar seguro, lejos del tiempo que todo lo consume.\n\nCon todo mi amor,\nEdgar Sebastian ♥` },
    { title: 'Carta II — El primer beso',     song: 'A Thousand Years — Christina Perri',  text: `Karen,\n\nHay besos que son sólo besos. Y luego está ese, el nuestro, que fue una declaración entera. Un poema sin palabras. Una respuesta a todas las preguntas que no sabía que me estaba haciendo.\n\nCuando cerraste los ojos, cerré el capítulo de la soledad para siempre.\n\nTuyo,\nEdgar ♥` },
    { title: 'Carta III — Las madrugadas',    song: 'Thinking Out Loud — Ed Sheeran',      text: `Para Karen,\n\nLas 2am contigo son diferentes. El mundo duerme pero nosotros inventábamos universos en letras y emojis. Cada notificación era un regalo anticipado.\n\nEn esas madrugadas aprendí que el tiempo contigo no se pierde: se invierte en algo que vale la eternidad.\n\nSiempre,\nEdgar ♥` },
    { title: 'Carta IV — La primera foto',    song: 'All of Me — John Legend',             text: `Mi Karen,\n\nLa primera foto juntos guarda más que imagen: guarda el instante preciso en que dejamos de ser dos historias separadas para convertirnos en un capítulo conjunto.\n\nMira esa foto y verás en mis ojos que ya sabía que eras todo.\n\nCon amor,\nEdgar ♥` },
    { title: 'Carta V — El primer plan',      song: 'Happier — Ed Sheeran',                text: `Karen Julieth,\n\nEse día tomamos la decisión más sencilla del mundo: estar juntos en algún lugar del mapa. No importaba el destino. Tú eras el destino.\n\nAprendí que el mejor viaje es cualquiera que hagas a mi lado.\n\nPara siempre tuyo,\nEdgar ♥` },
    { title: 'Carta VI — El gran sí',         song: 'Can\'t Help Falling in Love — Elvis', text: `Mi amor,\n\nCuando dijiste sí, el tiempo se detuvo. El corazón aceleró. El mundo adquirió colores que no tenía antes.\n\nEse sí tuyo es la respuesta más hermosa que he recibido en toda mi vida. Y la más importante.\n\nCompletamente tuyo,\nEdgar ♥` },
    { title: 'Carta VII — Cocinando',         song: 'Your Song — Elton John',              text: `Para Karen,\n\nLa harina en la ropa y las risas en la cocina me enseñaron que los momentos imperfectos contigo son perfectos. Que no necesito planearlo todo para que salga bien, si estás tú presente.\n\nCon cariño,\nEdgar ♥` },
    { title: 'Carta VIII — El atardecer',     song: 'La Vie En Rose — Édith Piaf',         text: `Karen,\n\nEl cielo pintó naranja ese atardecer y yo sólo pude mirarte a ti. Porque ningún color del mundo compite con la luz que tienes cuando eres feliz.\n\nEse silencio que compartimos fue la conversación más profunda de mi vida.\n\nTuyo,\nEdgar ♥` },
    { title: 'Carta IX — Noche de estrellas', song: 'Fly Me To The Moon — Frank Sinatra',  text: `Mi Karen,\n\nAcostados bajo el cielo contándote cosas que nunca le he dicho a nadie. Cada estrella testigo de que este amor es real y luminoso y nuestro.\n\nEl universo entero conspira para que sigamos aquí, juntos.\n\nSiempre,\nEdgar ♥` },
    { title: 'Carta X — El primer viaje',     song: 'Stand By Me — Ben E. King',           text: `Para Karen Julieth,\n\nEl primer viaje juntos redefinió todo lo que sabía sobre la aventura. Resultó que el mejor destino no está en el mapa sino en la persona que lleva tu mano en el camino.\n\nContigo quiero perderme en todos los mapas del mundo.\n\nCon amor eterno,\nEdgar ♥` },
    { title: 'Carta XI — Medianoche',         song: 'Tenerife Sea — Ed Sheeran',           text: `Karen,\n\nA las 2am cuando el mundo duerme, tu voz es el único sonido que necesito. Cada llamada un puente entre tu mundo y el mío, construido en segundos, sólido como el amor.\n\nTuyo a cualquier hora,\nEdgar ♥` },
    { title: 'Carta XII — La lluvia',         song: 'Die With A Smile — Bruno Mars',       text: `Mi Karen,\n\nBailaste bajo la lluvia sin importarte nada y en ese momento te vi como eres: libre, luminosa, completamente viva. El agua no te mojó, te reveló.\n\nEnamorado de ti para siempre,\nEdgar ♥` },
    { title: 'Carta XIII — Las lágrimas',     song: 'Make You Feel My Love — Adele',       text: `Para Karen,\n\nEl día que lloramos juntos descubrí que el amor verdadero no es sólo risa sino también abrazo en la tormenta, mano tendida en la oscuridad, presencia cuando más duele.\n\nAquí estaré siempre,\nEdgar ♥` },
    { title: 'Carta XIV — Nuestra canción',   song: 'Something — The Beatles',             text: `Karen Julieth,\n\nUna canción que se convirtió en nuestra cuando la escuchamos juntos. Ahora cada vez que suena el mundo se detiene y sólo existimos nosotros dos en ese segundo perfecto.\n\nCon música y amor,\nEdgar ♥` },
    { title: 'Carta XV — Tu cumpleaños',      song: 'Lover — Taylor Swift',                text: `Mi Karen,\n\nUn año más de ti en el mundo y yo queriendo celebrar cada uno de esos años. No sólo tu cumpleaños sino el regalo que significa tu existencia entera para mí.\n\nFeliz de compartir el tiempo contigo,\nEdgar ♥` },
    { title: 'Carta XVI — La promesa',        song: 'Endless Love — Diana Ross',           text: `Para Karen,\n\nEl día que prometimos el mañana juntos, el futuro dejó de ser incierto. Ahora lo que viene tiene dirección, tiene nombre, tiene tus ojos como brújula.\n\nPrometido para siempre,\nEdgar ♥` },
    { title: 'Carta XVII — Lugar secreto',    song: 'I Will Always Love You — Whitney',    text: `Karen mía,\n\nEse lugar que sólo nosotros conocemos, donde el tiempo corre diferente y somos exactamente quienes somos sin máscaras ni miedo. Ese rincón del mundo tiene tu perfume.\n\nTuyo en ese lugar y en todos,\nEdgar ♥` },
    { title: 'Carta XVIII — La sorpresa',     song: 'Just The Way You Are — Bruno Mars',   text: `Mi amor,\n\nPlanifiqué la sorpresa durante semanas y cuando la viste, tu cara valió más que todo el esfuerzo combinado. Ese momento guardado para siempre en los archivos del corazón.\n\nSiempre queriendo sorprenderte,\nEdgar ♥` },
    { title: 'Carta XIX — Un año',            song: 'At Last — Etta James',                text: `Para Karen Julieth,\n\n365 días. 8760 horas. Un año entero aprendiendo a amarte mejor cada día. Un año entero eligiéndote y descubriendo que es la decisión más fácil y más importante de mi vida.\n\nCon un año de amor y toda la vida por delante,\nEdgar ♥` },
    { title: 'Carta XX — Hoy y siempre',      song: 'My Heart Will Go On — Celine Dion',   text: `Mi Karen Julieth,\n\nEste recuerdo aún se está escribiendo. Hoy, mañana, todos los días que vienen. El amor no tiene punto final, tiene puntos suspensivos que se convierten en nuevos capítulos.\n\nHoy y siempre,\nEdgar Sebastian Perez Diaz ♥` },
    { title: 'Carta XXI — Nuestro álbum',     song: 'Perfect — Ed Sheeran',                text: `Querida Karen,\n\nSi llegas a esta carta XXI es porque alguien la creó para guardar un momento nuevo, un recuerdo que se sumó a nuestra historia. Esta página crece contigo, con nosotros.\n\nCada carta guardada es un capítulo más de esta historia infinita.\n\nCon todo el amor del mundo,\nEdgar Sebastian ♥` },
  ],
};

const RARITY_STARS = { comun:'★', raro:'★★', ultra:'★★★', legendario:'★★★★' };

/* ───────────── BOULEVARD QUOTES ───────────── */
const BOULEVARD_QUOTES = [
  { text: '"A veces hay que caminar por el boulevard más oscuro para encontrar la luz que siempre estuvo dentro de ti."', attr: '— Boulevard, 2014' },
  { text: '"No es tarde para empezar a vivir la vida que siempre soñaste. Nunca lo es."', attr: '— Boulevard, 2014' },
  { text: '"El amor verdadero no busca el camino más corto. Busca el camino correcto, aunque sea largo y tortuoso."', attr: '— Boulevard, 2014' },
  { text: '"Hay quienes sueñan con ojos cerrados y quienes construyen el sueño con ojos abiertos. Sé de los segundos."', attr: '— Boulevard, 2014' },
  { text: '"Cada paso en el boulevard es una historia. Cada historia es una vida. Cada vida merece ser vivida completamente."', attr: '— Boulevard, 2014' },
  { text: '"El futuro pertenece a quienes creen en la belleza de sus sueños y tienen el valor de perseguirlos."', attr: '— Eleanor Roosevelt' },
  { text: '"Los sueños son el mapa del alma: te dicen a dónde ir cuando el mundo intenta decirte que te quedes quieto."', attr: '— Anónimo' },
  { text: '"Soñar juntos no es duplicar el sueño. Es multiplicarlo por infinito."', attr: '— Karen & Sebastian' },
];

/* ───────────── STATE ───────────── */
const state = {
  carouselIndex: 0,
  carouselTotal: 0,
  allCards: [],
  modalIndex: 0,
  letterIndex: 0,
  galleryIndex: 0,
  galleryItems: [],
  userMemories: [],
  selectedColor: 'yellow',
  quoteIndex: 0,
  quoteTimer: null,
};

/* ───────────── ELEMENTS ───────────── */
const $ = id => document.getElementById(id);
const elements = {
  startCurtain: $('startCurtain'),
  startButton: $('startButton'),
  carouselRing: $('carouselRing'),
  carouselPrev: $('carouselPrev'),
  carouselNext: $('carouselNext'),
  carouselCounter: $('carouselCounter'),
  carouselCardName: $('carouselCardName'),
  carouselViewport: $('carouselViewport'),
  cardModal: $('cardModal'),
  cardModalClose: $('cardModalClose'),
  cardModalBackdrop: $('cardModalBackdrop'),
  cardModalCard: $('cardModalCard'),
  cardModalInfo: $('cardModalInfo'),
  cardModalTitle: $('cardModalTitle'),
  cardModalText: $('cardModalText'),
  cardModalRarityLabel: $('cardModalRarityLabel'),
  cardModalPrev: $('cardModalPrev'),
  cardModalNext: $('cardModalNext'),
  addMemoryModal: $('addMemoryModal'),
  addMemoryClose: $('addMemoryClose'),
  addMemoryBackdrop: $('addMemoryBackdrop'),
  addMemoryForm: $('addMemoryForm'),
  addMemoryFile: $('addMemoryFile'),
  fileUploadContent: $('fileUploadContent'),
  filePreview: $('filePreview'),
  addDreamModal: $('addDreamModal'),
  addDreamClose: $('addDreamClose'),
  addDreamBackdrop: $('addDreamBackdrop'),
  addDreamForm: $('addDreamForm'),
  dreamText: $('dreamText'),
  boulevardAddBtn: $('boulevardAddBtn'),
  boulevardNotes: $('boulevardNotes'),
  boulevardStrings: $('boulevardStrings'),
  boulevardQuoteText: $('boulevardQuoteText'),
  boulevardQuoteAttr: $('boulevardQuoteAttr'),
  galleryModal: $('galleryModal'),
  modalImage: $('modalImage'),
  modalVideo: $('modalVideo'),
  modalDate: $('modalDate'),
  modalSong: $('modalSong'),
  modalTitle: $('modalTitle'),
  modalCaption: $('modalCaption'),
  modalPrev: $('modalPrev'),
  modalNext: $('modalNext'),
  musicButton: $('musicButton'),
  musicStatus: $('musicStatus'),
  loveButton: $('loveButton'),
  letterPrev: $('letterPrev'),
  letterNext: $('letterNext'),
  letterPlaySong: $('letterPlaySong'),
  letterOpenPhoto: $('letterOpenPhoto'),
  letterPetals: $('letterPetals'),
  letterText: $('letterText'),
  letterRail: $('letterRail'),
  letterBookProgress: $('letterBookProgress'),
  letterBookSong: $('letterBookSong'),
  topbarCounterValue: $('topbarCounterValue'),
  skyCanvas: $('skyCanvas'),
  fxLayer: $('fxLayer'),
};

/* ─────────────────── UTILS ─────────────────── */
function isVideoFile(src) {
  if (!src) return false;
  return /\.(mp4|webm|ogg|mov|avi)$/i.test(src) || src.startsWith('blob:');
}

function loadUserMemories() {
  try { return JSON.parse(localStorage.getItem('userMemories') || '[]'); } catch { return []; }
}
function saveUserMemories(arr) {
  try { localStorage.setItem('userMemories', JSON.stringify(arr)); } catch {}
}
function loadBoulevardDreams() {
  try { const d = localStorage.getItem('boulevardDreams'); return d ? JSON.parse(d) : null; } catch { return null; }
}
function saveBoulevardDreams(arr) {
  try { localStorage.setItem('boulevardDreams', JSON.stringify(arr)); } catch {}
}

/* ─────────────────── CANVAS SKY ─────────────────── */
function initSky() {
  const canvas = elements.skyCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, stars = [], particles = [];

  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < 180; i++) {
    stars.push({ x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + 0.3, a: Math.random(), da: (Math.random() - 0.5) * 0.006 });
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a = Math.max(0.1, Math.min(1, s.a + s.da));
      if (s.a <= 0.1 || s.a >= 1) s.da *= -1;
      ctx.beginPath();
      ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,200,${s.a * 0.7})`;
      ctx.fill();
    });
    requestAnimationFrame(tick);
  }
  tick();
}

/* ─────────────────── COUNTER ─────────────────── */
function initCounter() {
  function update() {
    const diff = Date.now() - APP_DATA.startDate.getTime();
    if (diff < 0) { if (elements.topbarCounterValue) elements.topbarCounterValue.textContent = 'Pronto...'; return; }
    const tot = Math.floor(diff / 1000);
    const months = Math.floor(tot / (30.44 * 24 * 3600));
    const days = Math.floor((tot % (30.44 * 24 * 3600)) / (24 * 3600));
    const hours = Math.floor((tot % (24 * 3600)) / 3600);
    const mins = Math.floor((tot % 3600) / 60);
    const secs = tot % 60;
    const fmt = n => String(n).padStart(2, '0');
    const str = `${fmt(months)}m ${fmt(days)}d ${fmt(hours)}h ${fmt(mins)}m ${fmt(secs)}s`;
    if (elements.topbarCounterValue) elements.topbarCounterValue.textContent = str;
    if ($('counterMonths')) $('counterMonths').textContent = fmt(months);
    if ($('counterDays')) $('counterDays').textContent = fmt(days);
    if ($('counterHours')) $('counterHours').textContent = fmt(hours);
    if ($('counterMinutes')) $('counterMinutes').textContent = fmt(mins);
    if ($('counterSeconds')) $('counterSeconds').textContent = fmt(secs);
  }
  update();
  setInterval(update, 1000);
}

/* ─────────────────── TIMELINE ─────────────────── */
function initTimeline() {
  const grid = $('timelineGrid');
  if (!grid) return;
  APP_DATA.timeline.forEach(item => {
    const card = document.createElement('article');
    card.className = 'timeline-card glass-panel';
    card.innerHTML = `
      <div class="timeline-media"><img src="${item.image}" alt="${item.title}" loading="lazy"/></div>
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

/* Coverflow transform per offset from center */
function getCoverflowTransform(offset) {
  const abs = Math.abs(offset);
  const sign = Math.sign(offset) || 1;
  /* On mobile scale everything down */
  const isMobile = window.innerWidth < 760;
  const xMul = isMobile ? 0.58 : 1;

  if (abs === 0) return { x: 0, z: 0, ry: 0, scale: isMobile ? 1.0 : 1.05, opacity: 1, filter: 'none', zi: 100 };
  if (abs === 1) return { x: sign * (isMobile ? 148 : 260), z: -80, ry: -sign * 44, scale: isMobile ? 0.82 : 0.86, opacity: 0.78, filter: 'brightness(0.82)', zi: 80 };
  if (abs === 2) return { x: sign * (isMobile ? 258 : 472), z: -200, ry: -sign * 63, scale: isMobile ? 0.65 : 0.68, opacity: 0.52, filter: 'brightness(0.58)', zi: 60 };
  if (abs === 3) return { x: sign * (isMobile ? 330 : 630), z: -340, ry: -sign * 76, scale: 0.50, opacity: 0.18, filter: 'brightness(0.3)', zi: 40 };
  return { x: sign * 800, z: -500, ry: -sign * 85, scale: 0.32, opacity: 0, filter: 'brightness(0.1)', zi: 20 };
}

function circularOffset(i, active, total) {
  let off = i - active;
  if (off > total / 2) off -= total;
  if (off < -total / 2) off += total;
  return off;
}

function buildAllCards() {
  state.userMemories = loadUserMemories();
  state.allCards = [...APP_DATA.gallery, ...state.userMemories];
}

function createPokeCardElement(cardData, index, isAdd) {
  const slot = document.createElement('div');
  slot.className = `poke-card-slot${isAdd ? ' add-card' : ''} rarity-${cardData.rarity || 'comun'}`;
  slot.setAttribute('data-slot-index', index);

  if (isAdd) {
    slot.innerHTML = `
      <div class="poke-card-roulette">
        <span class="pcr-add-icon">✦</span>
        <p class="pcr-add-text">Agregar<br/>nuevo recuerdo</p>
      </div>`;
    return slot;
  }

  const rarity = cardData.rarity || 'comun';
  const stars = RARITY_STARS[rarity] || '★';
  const num = String(index + 1).padStart(3, '0');
  const isVideo = isVideoFile(cardData.image);

  let mediaHtml = '';
  if (isVideo) {
    mediaHtml = `<video src="${cardData.image}" class="pcr-photo" autoplay muted loop playsinline></video>`;
  } else {
    mediaHtml = `<img src="${cardData.image || ''}" class="pcr-photo" alt="${cardData.title}" loading="lazy"/>`;
  }

  slot.innerHTML = `
    <div class="poke-card-roulette">
      <div class="pcr-photo-wrap">${mediaHtml}</div>
      <div class="pcr-top">
        <span class="pcr-num">#${num}</span>
        <span class="pcr-type-badge">${cardData.type || 'Memoria'}</span>
      </div>
      <div class="pcr-overlay">
        <span class="pcr-name">${cardData.title}</span>
        <div class="pcr-bottom-row">
          <span class="pcr-stars">${stars}</span>
          <span class="pcr-hp">♥ ${cardData.hp || 60} HP</span>
        </div>
      </div>
      <div class="pcr-corner pcr-corner--tl"></div>
      <div class="pcr-corner pcr-corner--tr"></div>
      <div class="pcr-corner pcr-corner--bl"></div>
      <div class="pcr-corner pcr-corner--br"></div>
      <div class="pcr-holo"></div>
      <div class="pcr-sparkle"></div>
    </div>`;

  return slot;
}

function updateCoverflowPositions(animate = true) {
  const slots = elements.carouselRing.querySelectorAll('.poke-card-slot');
  const total = state.carouselTotal;

  slots.forEach((slot, i) => {
    const offset = circularOffset(i, state.carouselIndex, total);
    const cfg = getCoverflowTransform(offset);
    slot.style.transition = animate
      ? 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94),opacity 0.65s ease,filter 0.65s ease'
      : 'none';
    slot.style.transform = `translateX(${cfg.x}px) translateZ(${cfg.z}px) rotateY(${cfg.ry}deg) scale(${cfg.scale})`;
    slot.style.opacity = cfg.opacity;
    slot.style.filter = cfg.filter;
    slot.style.zIndex = cfg.zi;
    slot.style.pointerEvents = Math.abs(offset) <= 3 ? 'auto' : 'none';

    /* is-center marker for hint text */
    if (offset === 0) slot.classList.add('is-center');
    else slot.classList.remove('is-center');
  });
}

function updateCarouselCounter() {
  const total = state.carouselTotal;
  const i = state.carouselIndex;
  if (elements.carouselCounter) elements.carouselCounter.textContent = `${i + 1} / ${total}`;
  const card = state.allCards[i];
  if (elements.carouselCardName) elements.carouselCardName.textContent = card ? card.title : 'Agregar recuerdo';
}

function renderCarousel() {
  buildAllCards();
  const ring = elements.carouselRing;
  ring.innerHTML = '';

  const total = state.allCards.length + 1; /* +1 for add card */
  state.carouselTotal = total;

  for (let i = 0; i < state.allCards.length; i++) {
    const slot = createPokeCardElement(state.allCards[i], i, false);
    slot.addEventListener('click', () => handleCardClick(i));
    ring.appendChild(slot);
  }

  /* Add-card slot */
  const addSlot = createPokeCardElement({ rarity: 'comun' }, state.allCards.length, true);
  addSlot.addEventListener('click', openAddMemoryModal);
  ring.appendChild(addSlot);

  updateCoverflowPositions(false);
  updateCarouselCounter();
  initHolographicEffects();
}

function handleCardClick(i) {
  if (i === state.carouselIndex) {
    /* Second click on active card → open modal */
    openCardModal(i);
  } else {
    /* First click → navigate */
    state.carouselIndex = i;
    updateCoverflowPositions(true);
    updateCarouselCounter();
  }
}

function initHolographicEffects() {
  const slots = elements.carouselRing.querySelectorAll('.poke-card-slot:not(.add-card)');
  slots.forEach(slot => {
    const inner = slot.querySelector('.poke-card-roulette');
    if (!inner) return;

    inner.addEventListener('mousemove', e => {
      const rect = inner.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI);
      inner.style.setProperty('--holo-angle', `${angle + 135}deg`);
      inner.style.setProperty('--holo-opacity', '0.55');
      inner.style.setProperty('--sparkle-x', `${x * 100}%`);
      inner.style.setProperty('--sparkle-y', `${y * 100}%`);
      inner.style.setProperty('--sparkle-opacity', '0.65');
    });
    inner.addEventListener('mouseleave', () => {
      const rarity = slot.className.includes('legendario') ? 'legendario' : 'none';
      inner.style.setProperty('--holo-opacity', rarity === 'legendario' ? '0.45' : '0');
      inner.style.setProperty('--sparkle-opacity', rarity === 'legendario' ? '0.55' : '0');
    });
  });
}

function initCarouselNav() {
  elements.carouselPrev.addEventListener('click', () => {
    state.carouselIndex = (state.carouselIndex - 1 + state.carouselTotal) % state.carouselTotal;
    updateCoverflowPositions(true);
    updateCarouselCounter();
  });
  elements.carouselNext.addEventListener('click', () => {
    state.carouselIndex = (state.carouselIndex + 1) % state.carouselTotal;
    updateCoverflowPositions(true);
    updateCarouselCounter();
  });

  /* Touch/swipe on viewport */
  let touchStartX = 0;
  let touchStartY = 0;
  let isDragging = false;

  elements.carouselViewport.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  elements.carouselViewport.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    const dy = e.changedTouches[0].clientY - touchStartY;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 38) {
      if (dx < 0) {
        state.carouselIndex = (state.carouselIndex + 1) % state.carouselTotal;
      } else {
        state.carouselIndex = (state.carouselIndex - 1 + state.carouselTotal) % state.carouselTotal;
      }
      updateCoverflowPositions(true);
      updateCarouselCounter();
    }
  }, { passive: true });

  /* Mouse drag */
  let mouseStartX = 0;
  elements.carouselViewport.addEventListener('mousedown', e => {
    mouseStartX = e.clientX;
    isDragging = false;
  });
  elements.carouselViewport.addEventListener('mousemove', e => {
    if (Math.abs(e.clientX - mouseStartX) > 5) isDragging = true;
  });
  elements.carouselViewport.addEventListener('mouseup', e => {
    const dx = e.clientX - mouseStartX;
    if (isDragging && Math.abs(dx) > 40) {
      if (dx < 0) state.carouselIndex = (state.carouselIndex + 1) % state.carouselTotal;
      else state.carouselIndex = (state.carouselIndex - 1 + state.carouselTotal) % state.carouselTotal;
      updateCoverflowPositions(true);
      updateCarouselCounter();
    }
    isDragging = false;
  });

  /* Keyboard */
  document.addEventListener('keydown', e => {
    if (elements.cardModal.classList.contains('is-open')) return;
    if (e.key === 'ArrowLeft') elements.carouselPrev.click();
    if (e.key === 'ArrowRight') elements.carouselNext.click();
  });

  /* Reposition on resize */
  window.addEventListener('resize', () => updateCoverflowPositions(false));
}

/* ═══════════════════════════════════════════════════════
   ★★★  CARD MODAL (full view)  ★★★
   ═══════════════════════════════════════════════════════ */

function buildFullCard(cardData, index) {
  const rarity = cardData.rarity || 'comun';
  const stars = RARITY_STARS[rarity];
  const num = String(index + 1).padStart(3, '0');
  const isVideo = isVideoFile(cardData.image);

  let mediaHtml = '';
  if (isVideo) {
    mediaHtml = `<video src="${cardData.image}" class="pcr-photo" autoplay muted loop playsinline></video>`;
  } else {
    mediaHtml = `<img src="${cardData.image || ''}" class="pcr-photo" alt="${cardData.title}"/>`;
  }

  /* Rarity-specific backgrounds for full card */
  const rarityBg = {
    comun: 'linear-gradient(160deg,#1a1a2a,#0d0d18)',
    raro: 'linear-gradient(160deg,#0d1a2e,#071020)',
    ultra: 'linear-gradient(160deg,#1a0d2e,#0d0720)',
    legendario: 'linear-gradient(160deg,#2a1a00,#1a0e00)',
  };

  return `
    <style>
      #cardModalCard { background:${rarityBg[rarity]}; }
      #cardModalCard .pcr-holo { --holo-opacity:0.35; }
    </style>
    <div class="pcr-photo-wrap">${mediaHtml}</div>
    <div class="pcr-top">
      <span class="pcr-num">#${num}</span>
      <span class="pcr-type-badge">${cardData.type || 'Memoria'}</span>
    </div>
    <div class="pcr-overlay">
      <span class="pcr-name">${cardData.title}</span>
      <div class="pcr-bottom-row">
        <span class="pcr-stars">${stars}</span>
        <span class="pcr-hp">♥ ${cardData.hp || 60} HP</span>
      </div>
    </div>
    <div class="pcr-corner pcr-corner--tl"></div>
    <div class="pcr-corner pcr-corner--tr"></div>
    <div class="pcr-corner pcr-corner--bl"></div>
    <div class="pcr-corner pcr-corner--br"></div>
    <div class="pcr-holo"></div>
    <div class="pcr-sparkle"></div>`;
}

function openCardModal(index) {
  const card = state.allCards[index];
  if (!card) return;
  state.modalIndex = index;

  const rarity = card.rarity || 'comun';
  elements.cardModalCard.className = `poke-card-full rarity-${rarity}`;
  elements.cardModalCard.innerHTML = buildFullCard(card, index);

  elements.cardModalRarityLabel.className = `card-modal__rarity-label rarity-${rarity}`;
  elements.cardModalRarityLabel.textContent = `${RARITY_STARS[rarity]} ${rarity.charAt(0).toUpperCase() + rarity.slice(1)} • ${card.type || 'Memoria'}`;
  elements.cardModalTitle.textContent = card.title;
  elements.cardModalText.textContent = card.text || '';

  elements.cardModal.classList.add('is-open');
  elements.cardModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  initFullCardHolographic(elements.cardModalCard, rarity);
}

function initFullCardHolographic(cardEl, rarity) {
  if (!cardEl) return;
  const holo = cardEl.querySelector('.pcr-holo');
  const sparkle = cardEl.querySelector('.pcr-sparkle');
  if (!holo || !sparkle) return;

  cardEl.addEventListener('mousemove', e => {
    const rect = cardEl.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const tx = (y - 0.5) * -18;
    const ty = (x - 0.5) * 18;
    const angle = Math.atan2(y - 0.5, x - 0.5) * (180 / Math.PI);
    cardEl.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg)`;
    holo.style.setProperty('--holo-angle', `${angle + 135}deg`);
    holo.style.setProperty('--holo-opacity', '0.65');
    sparkle.style.setProperty('--sparkle-x', `${x * 100}%`);
    sparkle.style.setProperty('--sparkle-y', `${y * 100}%`);
    sparkle.style.setProperty('--sparkle-opacity', '0.75');
  });
  cardEl.addEventListener('mouseleave', () => {
    cardEl.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
    if (rarity !== 'legendario') {
      holo.style.setProperty('--holo-opacity', '0.35');
      sparkle.style.setProperty('--sparkle-opacity', '0');
    }
  });

  /* DeviceOrientation for mobile */
  if (window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', e => {
      if (!elements.cardModal.classList.contains('is-open')) return;
      const tx = Math.max(-12, Math.min(12, (e.beta - 45) * 0.3));
      const ty = Math.max(-12, Math.min(12, e.gamma * 0.3));
      cardEl.style.transform = `perspective(900px) rotateX(${-tx}deg) rotateY(${ty}deg)`;
    }, { passive: true });
  }
}

function closeCardModal() {
  elements.cardModal.classList.remove('is-open');
  elements.cardModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initCardModal() {
  elements.cardModalClose.addEventListener('click', closeCardModal);
  elements.cardModalBackdrop.addEventListener('click', closeCardModal);

  elements.cardModalPrev.addEventListener('click', () => {
    state.modalIndex = (state.modalIndex - 1 + state.allCards.length) % state.allCards.length;
    openCardModal(state.modalIndex);
    /* Also sync carousel */
    state.carouselIndex = state.modalIndex;
    updateCoverflowPositions(true);
    updateCarouselCounter();
  });
  elements.cardModalNext.addEventListener('click', () => {
    state.modalIndex = (state.modalIndex + 1) % state.allCards.length;
    openCardModal(state.modalIndex);
    state.carouselIndex = state.modalIndex;
    updateCoverflowPositions(true);
    updateCarouselCounter();
  });
}

/* ═══════════════════════════════════════════════════════
   ADD MEMORY
   ═══════════════════════════════════════════════════════ */

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

function initAddMemory() {
  elements.addMemoryClose.addEventListener('click', closeAddMemoryModal);
  elements.addMemoryBackdrop.addEventListener('click', closeAddMemoryModal);

  let pendingFile = null;

  elements.addMemoryFile.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    pendingFile = file;
    elements.filePreview.style.display = 'block';
    elements.fileUploadContent.style.display = 'none';

    if (isVideoFile(file.name) || file.size > 8 * 1024 * 1024) {
      const url = URL.createObjectURL(file);
      if (isVideoFile(file.name)) {
        elements.filePreview.innerHTML = `<video src="${url}" controls style="max-height:220px;width:100%;border-radius:12px;"></video>`;
      } else {
        elements.filePreview.innerHTML = `<img src="${url}" alt="preview" style="max-height:220px;width:100%;object-fit:contain;border-radius:12px;"/>`;
      }
    } else {
      const reader = new FileReader();
      reader.onload = ev => {
        elements.filePreview.innerHTML = `<img src="${ev.target.result}" alt="preview" style="max-height:220px;width:100%;object-fit:contain;border-radius:12px;"/>`;
      };
      reader.readAsDataURL(file);
    }
  });

  elements.addMemoryForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(elements.addMemoryForm);
    const title = data.get('title') || 'Nuevo Recuerdo';
    const date = data.get('date') || new Date().toISOString().split('T')[0];
    const text = data.get('text') || '';
    const rarity = data.get('rarity') || 'comun';

    let imageSrc = '';
    if (pendingFile) {
      if (isVideoFile(pendingFile.name) || pendingFile.size > 8 * 1024 * 1024) {
        imageSrc = URL.createObjectURL(pendingFile);
      } else {
        const reader = new FileReader();
        reader.onload = ev => {
          imageSrc = ev.target.result;
          finalizeMemory(title, date, text, rarity, imageSrc);
        };
        reader.readAsDataURL(pendingFile);
        return;
      }
    }
    finalizeMemory(title, date, text, rarity, imageSrc);
  });

  function finalizeMemory(title, date, text, rarity, image) {
    const rarityHp = { comun: 60, raro: 75, ultra: 88, legendario: 100 };
    const memory = {
      title, date, text, rarity, image,
      type: 'Memoria',
      hp: rarityHp[rarity] || 60,
    };
    state.userMemories.push(memory);
    saveUserMemories(state.userMemories);

    elements.addMemoryForm.reset();
    elements.filePreview.style.display = 'none';
    elements.fileUploadContent.style.display = 'flex';
    pendingFile = null;

    closeAddMemoryModal();
    renderCarousel();
    spawnParticles('hearts');
  }
}

/* ═══════════════════════════════════════════════════════
   ★★★  BOULEVARD DE SUEÑOS  ★★★
   ═══════════════════════════════════════════════════════ */

const DEFAULT_DREAMS = [
  { text: '✈️ Viajar a Europa juntos y perdernos por las calles de París', color: 'yellow',  x: 6,  y: 8,  rotate: -3 },
  { text: '🏖️ Pasar una semana completa en la playa, sin celulares', color: 'blue',    x: 25, y: 6,  rotate: 2  },
  { text: '🌙 Acampar bajo las estrellas y contarnos todo bajo el cielo abierto', color: 'lavender', x: 48, y: 10, rotate: -2 },
  { text: '🏡 Tener nuestro primer hogar propio, decorarlo juntos', color: 'pink',    x: 70, y: 7,  rotate: 1  },
  { text: '🎭 Ir al teatro y al cine clásico una vez al mes', color: 'green',   x: 4,  y: 48, rotate: 2  },
  { text: '📚 Leer el mismo libro y discutirlo juntos tomando café', color: 'yellow',  x: 22, y: 52, rotate: -1 },
  { text: '🌅 Ver cada amanecer por un año entero, al menos una vez al mes', color: 'blue',    x: 44, y: 50, rotate: 3  },
  { text: '🎸 Aprender a bailar salsa juntos de verdad', color: 'pink',    x: 65, y: 53, rotate: -2 },
  { text: '🌿 Hacer un jardín juntos y verlo crecer con el tiempo', color: 'green',   x: 12, y: 76, rotate: 1  },
  { text: '💍 Construir un futuro lleno de amor, risas y aventuras', color: 'lavender', x: 52, y: 74, rotate: -3 },
];

let boulevardDreams = [];

function initBoulevardQuotes() {
  if (!elements.boulevardQuoteText) return;

  function showQuote(idx) {
    const q = BOULEVARD_QUOTES[idx % BOULEVARD_QUOTES.length];
    elements.boulevardQuoteText.classList.add('is-fading');
    setTimeout(() => {
      elements.boulevardQuoteText.textContent = q.text;
      if (elements.boulevardQuoteAttr) elements.boulevardQuoteAttr.textContent = q.attr;
      elements.boulevardQuoteText.classList.remove('is-fading');
    }, 500);
  }

  showQuote(0);
  state.quoteTimer = setInterval(() => {
    state.quoteIndex = (state.quoteIndex + 1) % BOULEVARD_QUOTES.length;
    showQuote(state.quoteIndex);
  }, 7000);
}

function renderBoulevardNote(dream, index) {
  const note = document.createElement('div');
  const rot = dream.rotate || ((Math.random() - 0.5) * 8);
  note.className = `dream-note dream-note--${dream.color || 'yellow'}`;
  note.style.left = `${dream.x}%`;
  note.style.top = `${dream.y}%`;
  note.style.transform = `rotate(${rot}deg)`;
  note.style.setProperty('--note-transform', `rotate(${rot}deg)`);
  note.style.animation = `noteAppear 0.4s ease ${index * 0.06}s both`;
  note.setAttribute('data-index', index);

  note.innerHTML = `
    <div class="dream-note__actions">
      <button class="dream-note__del" aria-label="Eliminar nota" data-del="${index}">✕</button>
    </div>
    <p>${dream.text}</p>`;

  note.querySelector('[data-del]').addEventListener('click', e => {
    e.stopPropagation();
    boulevardDreams.splice(index, 1);
    saveBoulevardDreams(boulevardDreams);
    renderBoulevard();
  });

  makeDraggable(note, index);
  return note;
}

function renderBoulevard() {
  const container = elements.boulevardNotes;
  const svg = elements.boulevardStrings;
  if (!container) return;
  container.innerHTML = '';
  if (svg) svg.innerHTML = '';

  boulevardDreams.forEach((dream, i) => {
    container.appendChild(renderBoulevardNote(dream, i));
  });

  setTimeout(drawStrings, 80);
}

function drawStrings() {
  const svg = elements.boulevardStrings;
  const canvas = $('boulevardCanvas');
  if (!svg || !canvas) return;

  const notes = canvas.querySelectorAll('.dream-note');
  if (notes.length < 2) return;

  const cRect = canvas.getBoundingClientRect();

  const centers = Array.from(notes).map(n => {
    const r = n.getBoundingClientRect();
    return { x: r.left - cRect.left + r.width / 2, y: r.top - cRect.top + r.height / 2 };
  });

  svg.innerHTML = '';
  for (let i = 0; i < centers.length - 1; i++) {
    const a = centers[i];
    const b = centers[i + 1];
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2 + 28;
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('class', 'boulevard-string');
    path.setAttribute('d', `M ${a.x},${a.y} Q ${mx},${my} ${b.x},${b.y}`);
    svg.appendChild(path);
  }
}

function makeDraggable(note, idx) {
  let startX, startY, origLeft, origTop, dragging = false;

  function startDrag(clientX, clientY) {
    dragging = true;
    startX = clientX;
    startY = clientY;
    const parent = note.parentElement;
    const pRect = parent ? parent.getBoundingClientRect() : { width: 600, height: 480 };
    origLeft = (parseFloat(note.style.left) / 100) * pRect.width;
    origTop = (parseFloat(note.style.top) / 100) * pRect.height;
    note.classList.add('is-dragging');
    note.style.zIndex = 20;
  }

  function moveDrag(clientX, clientY) {
    if (!dragging) return;
    const parent = note.parentElement;
    if (!parent) return;
    const pRect = parent.getBoundingClientRect();
    const dx = clientX - startX;
    const dy = clientY - startY;
    const newL = Math.max(0, Math.min(pRect.width - note.offsetWidth, origLeft + dx));
    const newT = Math.max(0, Math.min(pRect.height - note.offsetHeight, origTop + dy));
    note.style.left = `${(newL / pRect.width) * 100}%`;
    note.style.top = `${(newT / pRect.height) * 100}%`;
  }

  function endDrag() {
    if (!dragging) return;
    dragging = false;
    note.classList.remove('is-dragging');
    if (boulevardDreams[idx]) {
      boulevardDreams[idx].x = parseFloat(note.style.left);
      boulevardDreams[idx].y = parseFloat(note.style.top);
      saveBoulevardDreams(boulevardDreams);
    }
    drawStrings();
  }

  note.addEventListener('mousedown', e => {
    if (e.target.closest('.dream-note__actions')) return;
    e.preventDefault();
    startDrag(e.clientX, e.clientY);
  });
  document.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
  document.addEventListener('mouseup', endDrag);

  note.addEventListener('touchstart', e => {
    if (e.target.closest('.dream-note__actions')) return;
    startDrag(e.touches[0].clientX, e.touches[0].clientY);
  }, { passive: true });
  note.addEventListener('touchmove', e => {
    moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    e.preventDefault();
  }, { passive: false });
  note.addEventListener('touchend', endDrag);
}

function initBoulevard() {
  const saved = loadBoulevardDreams();
  boulevardDreams = saved && saved.length ? saved : JSON.parse(JSON.stringify(DEFAULT_DREAMS));

  renderBoulevard();
  initBoulevardQuotes();

  if (elements.boulevardAddBtn) {
    elements.boulevardAddBtn.addEventListener('click', () => {
      elements.addDreamModal.classList.add('is-open');
      elements.addDreamModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  }

  /* Color picker */
  document.querySelectorAll('.note-color-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.note-color-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedColor = btn.dataset.color;
    });
  });

  /* Add dream form */
  if (elements.addDreamForm) {
    elements.addDreamForm.addEventListener('submit', e => {
      e.preventDefault();
      const text = elements.dreamText.value.trim();
      if (!text) return;
      const newDream = {
        text, color: state.selectedColor,
        x: Math.random() * 60 + 5,
        y: Math.random() * 60 + 5,
        rotate: (Math.random() - 0.5) * 8,
      };
      boulevardDreams.push(newDream);
      saveBoulevardDreams(boulevardDreams);
      renderBoulevard();
      elements.dreamText.value = '';
      elements.addDreamModal.classList.remove('is-open');
      elements.addDreamModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    });
  }

  elements.addDreamClose.addEventListener('click', () => {
    elements.addDreamModal.classList.remove('is-open');
    elements.addDreamModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
  elements.addDreamBackdrop.addEventListener('click', () => {
    elements.addDreamModal.classList.remove('is-open');
    elements.addDreamModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });

  window.addEventListener('resize', drawStrings);
}

/* ═══════════════════════════════════════════════════════
   MUSIC
   ═══════════════════════════════════════════════════════ */

function initMusic() {
  const audio = new Audio();
  let playing = false, songIdx = 0;

  function playSong(idx) {
    const s = APP_DATA.songs[idx % APP_DATA.songs.length];
    if (!s.src) {
      if (elements.musicStatus) elements.musicStatus.textContent = s.title + ' — ' + s.artist;
      return;
    }
    audio.src = s.src;
    audio.play().catch(() => {});
    if (elements.musicStatus) elements.musicStatus.textContent = s.title + ' — ' + s.artist;
  }

  audio.addEventListener('ended', () => { songIdx = (songIdx + 1) % APP_DATA.songs.length; playSong(songIdx); });

  if (elements.musicButton) {
    elements.musicButton.addEventListener('click', () => {
      playing = !playing;
      if (playing) {
        document.body.classList.add('music-playing');
        playSong(songIdx);
        elements.musicButton.setAttribute('aria-pressed', 'true');
      } else {
        document.body.classList.remove('music-playing');
        audio.pause();
        elements.musicButton.setAttribute('aria-pressed', 'false');
      }
    });
  }

  window.playLetterSong = idx => {
    const s = APP_DATA.songs[idx % APP_DATA.songs.length];
    if (!s.src) return;
    audio.src = s.src;
    playing = true;
    document.body.classList.add('music-playing');
    audio.play().catch(() => {});
    if (elements.musicStatus) elements.musicStatus.textContent = s.title + ' — ' + s.artist;
  };
}

/* ═══════════════════════════════════════════════════════
   MINI LETTER BOOK
   ═══════════════════════════════════════════════════════ */

function initLetterBook() {
  function renderLetter(i) {
    const letters = [...APP_DATA.letters];
    const l = letters[i];
    if (!l) return;

    elements.letterBookProgress.textContent = `Carta ${i + 1} de ${letters.length}`;
    elements.letterBookSong.textContent = `Canción: ${l.song}`;
    elements.letterText.classList.add('is-fading');
    setTimeout(() => {
      elements.letterText.innerHTML = l.text.split('\n').map(p => p ? `<p>${p}</p>` : '').join('');
      elements.letterText.classList.remove('is-fading');
    }, 240);

    elements.letterPrev.disabled = i === 0;
    elements.letterNext.disabled = i === letters.length - 1;
    state.letterIndex = i;

    /* Rail */
    Array.from(elements.letterRail.children).forEach((item, ri) => {
      item.classList.toggle('is-active', ri === i);
    });
  }

  /* Build rail */
  APP_DATA.letters.forEach((_, i) => {
    const btn = document.createElement('button');
    btn.className = 'letter-rail__item';
    btn.textContent = i + 1;
    btn.addEventListener('click', () => renderLetter(i));
    elements.letterRail.appendChild(btn);
  });

  renderLetter(0);

  elements.letterPrev.addEventListener('click', () => { if (state.letterIndex > 0) renderLetter(state.letterIndex - 1); });
  elements.letterNext.addEventListener('click', () => { if (state.letterIndex < APP_DATA.letters.length - 1) renderLetter(state.letterIndex + 1); });
  elements.letterPlaySong.addEventListener('click', () => {
    if (window.playLetterSong) window.playLetterSong(state.letterIndex);
  });
  elements.letterOpenPhoto.addEventListener('click', () => {
    const photoIdx = state.letterIndex - 1;
    if (photoIdx >= 0 && photoIdx < APP_DATA.gallery.length) openGalleryModal(photoIdx);
  });
  elements.letterPetals.addEventListener('click', () => spawnParticles('petals'));
}

/* ═══════════════════════════════════════════════════════
   GALLERY MODAL (for letter book)
   ═══════════════════════════════════════════════════════ */

function openGalleryModal(index) {
  state.galleryItems = APP_DATA.gallery;
  state.galleryIndex = index;
  renderGallerySlide(index);
  elements.galleryModal.classList.add('is-open');
  elements.galleryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function renderGallerySlide(index) {
  const item = state.galleryItems[index];
  if (!item) return;

  const isVid = isVideoFile(item.image);
  elements.modalImage.style.display = isVid ? 'none' : 'block';
  elements.modalVideo.style.display = isVid ? 'block' : 'none';

  if (isVid) {
    elements.modalVideo.src = item.image;
  } else {
    elements.modalImage.src = item.image || '';
    elements.modalImage.alt = item.title;
  }

  elements.modalDate.textContent = item.date;
  elements.modalTitle.textContent = item.title;
  elements.modalCaption.textContent = item.text || '';
  const songData = APP_DATA.songs[index % APP_DATA.songs.length];
  elements.modalSong.textContent = songData ? `♪ ${songData.title} — ${songData.artist}` : '';
  state.galleryIndex = index;
}

function initGalleryModal() {
  elements.modalPrev.addEventListener('click', () => {
    const prev = (state.galleryIndex - 1 + state.galleryItems.length) % state.galleryItems.length;
    renderGallerySlide(prev);
  });
  elements.modalNext.addEventListener('click', () => {
    const next = (state.galleryIndex + 1) % state.galleryItems.length;
    renderGallerySlide(next);
  });

  const close = () => {
    elements.galleryModal.classList.remove('is-open');
    elements.galleryModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    elements.modalVideo.pause();
  };

  document.querySelectorAll('[data-modal-close]').forEach(el => el.addEventListener('click', close));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (elements.cardModal.classList.contains('is-open')) closeCardModal();
      if (elements.galleryModal.classList.contains('is-open')) close();
      if (elements.addMemoryModal.classList.contains('is-open')) closeAddMemoryModal();
    }
  });
}

/* ═══════════════════════════════════════════════════════
   PARTICLES & FX
   ═══════════════════════════════════════════════════════ */

function spawnParticles(type) {
  const fx = elements.fxLayer;
  if (!fx) return;
  const count = type === 'hearts' ? 16 : 24;

  for (let i = 0; i < count; i++) {
    const el = document.createElement('span');
    const x = Math.random() * 100;
    const drift = (Math.random() - 0.5) * 160;
    el.style.left = `${x}vw`;
    el.style.bottom = `${Math.random() * 30}vh`;
    el.style.setProperty('--drift', `${drift}px`);

    if (type === 'hearts') {
      el.className = 'heart-particle';
      el.textContent = ['❤️','💕','💖','✨','💫'][Math.floor(Math.random() * 5)];
    } else {
      el.className = 'confetti-piece';
      el.style.background = `hsl(${Math.random() * 360},80%,65%)`;
      el.style.setProperty('--drift', `${(Math.random() - 0.5) * 200}px`);
    }

    fx.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

/* ═══════════════════════════════════════════════════════
   LOVE BUTTON
   ═══════════════════════════════════════════════════════ */

function initLoveButton() {
  if (!elements.loveButton) return;
  elements.loveButton.addEventListener('click', () => {
    spawnParticles('hearts');
    spawnParticles('petals');
    document.body.classList.add('final-mode');
  });
}

/* ═══════════════════════════════════════════════════════
   INTERSECTION OBSERVER (reveal)
   ═══════════════════════════════════════════════════════ */

function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
}

/* ═══════════════════════════════════════════════════════
   START CURTAIN
   ═══════════════════════════════════════════════════════ */

function initStart() {
  if (!elements.startButton) return;
  elements.startButton.addEventListener('click', () => {
    elements.startCurtain.classList.add('is-hidden');
    document.body.classList.add('story-started');
    setTimeout(() => { elements.startCurtain.style.display = 'none'; }, 1000);
    spawnParticles('hearts');
  });
}

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
  initAddMemory();
  initLetterBook();
  initGalleryModal();
  initBoulevard();
  initMusic();
  initLoveButton();
  initReveal();
});
