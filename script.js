/* =====================================================
   Karen Julieth & Edgar Sebastian — Album de Amor
   ===================================================== */
'use strict';

/* ─────────────── DATA ─────────────── */
const APP_DATA = {
  startDate: new Date('2026-06-07T19:00:00'),

  /* Canciones — agrega más MP3 en assets/music/ y añádelas aquí */
  songs: [
    { title: 'Solo Para Ti',          artist: 'Camila',                        src: 'assets/music/Camila - Solo Para Ti (Alt. Version).mp3' },
    { title: 'Prometo',               artist: 'Fonseca',                       src: 'assets/music/Fonseca - Prometo (LyricLetra).mp3' },
    { title: 'Para Tu Amor',          artist: 'Juanes',                        src: 'assets/music/Juanes - Para Tu Amor (Official Music Video).mp3' },
    { title: 'Estar Contigo',         artist: 'Alex Ubago ft. La Oreja de Van Gogh', src: 'assets/music/Alex Ubago - Estar contigo ft. La oreja de Van Gogh (Videoclip Oficial).mp3' },
    { title: 'Lo Poco Que Yo Quiero', artist: 'Morat & Silvestre Dangond',     src: 'assets/music/Morat, Silvestre Dangond - Lo poco que yo quiero (Video Oficial).mp3' },
    { title: 'Me Cambiaste la Vida',  artist: 'Río Roma',                      src: 'assets/music/Río Roma - Me Cambiaste la Vida (Videoclip).mp3' },
    { title: 'Amor del Bueno',        artist: 'Reyli Barba',                   src: 'assets/music/Reyli Barba - Amor del Bueno (Video).mp3' },
    { title: 'Sabrás',                artist: 'Herencia de Timbiquí',          src: 'assets/music/Sabrás, Herencia de Timbiquí - Video Oficial.mp3' },
    { title: 'Mi Suerte',             artist: '',                              src: 'assets/music/Mi Suerte.mp3' },
    { title: 'The Reason',            artist: 'Hoobastank',                    src: 'assets/music/Hoobastank - The Reason (Official Music Video).mp3' },
    /* Andrés Cepeda — pon el MP3 en assets/music/ con este nombre exacto */
    { title: 'Tan Solo Un Momento',   artist: 'Andrés Cepeda',                 src: 'assets/music/Andres Cepeda - Tan Solo Un Momento.mp3' },
    { title: 'El Camino',             artist: 'Andrés Cepeda',                 src: 'assets/music/Andres Cepeda - El Camino.mp3' },
    { title: 'Mañana',                artist: 'Andrés Cepeda',                 src: 'assets/music/Andres Cepeda - Manana.mp3' },
    /* Santiago Cruz */
    { title: 'Eres',                  artist: 'Santiago Cruz',                 src: 'assets/music/Santiago Cruz - Eres.mp3' },
    { title: 'La Respuesta',          artist: 'Santiago Cruz',                 src: 'assets/music/Santiago Cruz - La Respuesta.mp3' },
    { title: 'Un Millón de Recuerdos',artist: 'Santiago Cruz',                 src: 'assets/music/Santiago Cruz - Un Millon de Recuerdos.mp3' },
    /* Manuel Medrano */
    { title: 'Sueños',                artist: 'Manuel Medrano',                src: 'assets/music/Manuel Medrano - Suenos.mp3' },
    { title: 'Tu Nombre',             artist: 'Manuel Medrano',                src: 'assets/music/Manuel Medrano - Tu Nombre.mp3' },
    { title: 'No Te Vayas',           artist: 'Manuel Medrano',                src: 'assets/music/Manuel Medrano - No Te Vayas.mp3' },
  ],

  gallery: [
    { date:'El primer beso',              title:'El Primer Beso',           image:'assets/img/3.jpeg',  rarity:'legendario', type:'Amor',       hp:100, songIndex:0,  text:'El instante en que todo cambió. El universo pausó su respiración para que nosotros empezáramos la nuestra juntos. Ese beso que selló nuestro primer sí.' },
    { date:'Las madrugadas de Instagram', title:'Madrugadas de Instagram',  image:'assets/img/1.jpeg',  rarity:'raro',       type:'Memoria',    hp:70,  songIndex:1,  text:'Horas que se convirtieron en puentes. Cada mensaje una confesión, cada emoji una caricia digital que cruzaba la distancia.' },
    { date:'La primera foto juntos',      title:'Primera Foto Juntos',      image:'assets/img/2.jpeg',  rarity:'ultra',      type:'Historia',   hp:85,  songIndex:2,  text:'La primera vez que la cámara nos capturó como un "nosotros". Esa foto guarda el inicio de todo.' },
    { date:'Nuestro primer plan',         title:'El Primer Plan',           image:'assets/img/4.jpeg',  rarity:'raro',       type:'Aventura',   hp:75,  songIndex:3,  text:'El día que dijimos "vamos" sin saber a dónde, pero sabiendo que juntos era suficiente brújula.' },
    { date:'Cuando me dijiste que sí',    title:'El Gran Sí',               image:'assets/img/5.jpeg',  rarity:'legendario', type:'Amor',       hp:100, songIndex:4,  text:'El momento exacto en que Karen Julieth dijo sí y mi corazón escribió la página más importante de su historia.' },
    { date:'La primera vez que cocinamos',title:'Cocinando Juntos',         image:'assets/img/6.jpeg',  rarity:'comun',      type:'Hogar',      hp:60,  songIndex:5,  text:'Harina en la ropa, risas en la cocina. Descubrimos que incluso los errores culinarios saben mejor juntos.' },
    { date:'Ese atardecer inolvidable',   title:'El Atardecer',             image:'assets/img/7.jpeg',  rarity:'ultra',      type:'Magia',      hp:90,  songIndex:6,  text:'El cielo pintó naranja y rosa. Nos quedamos en silencio porque las palabras sobraban.' },
    { date:'La noche de estrellas',       title:'Noche de Estrellas',       image:'assets/img/8.jpeg',  rarity:'ultra',      type:'Magia',      hp:88,  songIndex:7,  text:'Acostados mirando el cielo, cada estrella testigo de que este amor es real, luminoso y nuestro.' },
    { date:'Nuestro primer viaje',        title:'Primer Viaje',             image:'assets/img/9.jpeg',  rarity:'legendario', type:'Aventura',   hp:95,  songIndex:8,  text:'El primer mapa que dibujamos juntos. La primera maleta compartida. El primer horizonte que fue nuestro.' },
    { date:'La llamada de medianoche',    title:'Llamada de Medianoche',    image:'assets/img/10.jpeg', rarity:'raro',       type:'Conexión',   hp:72,  songIndex:9,  text:'A las 2am, cuando el mundo dormía, nuestras voces se encontraron y la distancia dejó de existir.' },
    { date:'Bailando bajo la lluvia',     title:'Lluvia y Baile',           image:'assets/img/11.jpeg', rarity:'ultra',      type:'Alegría',    hp:87,  songIndex:10, text:'La lluvia llegó de sorpresa y tú dijiste "vamos" y bailamos mojados y absolutamente felices.' },
    { date:'El día que lloramos juntos',  title:'Lágrimas Compartidas',     image:'assets/img/12.jpeg', rarity:'raro',       type:'Verdad',     hp:80,  songIndex:11, text:'Descubrimos que el amor también es llorar sin vergüenza, sostenerse cuando todo tiembla.' },
    { date:'Nuestra canción favorita',    title:'Nuestra Canción',          image:'assets/img/13.jpeg', rarity:'comun',      type:'Música',     hp:65,  songIndex:12, text:'Una canción que se convirtió en nuestra. Ahora cada vez que suena el mundo se detiene.' },
    { date:'El cumpleaños especial',      title:'Cumpleaños Especial',      image:'assets/img/14.jpeg', rarity:'ultra',      type:'Celebración',hp:92,  songIndex:13, text:'Un año más de ella en el mundo y yo queriendo celebrar cada uno de esos años.' },
    { date:'La promesa del futuro',       title:'Promesa del Futuro',       image:'assets/img/15.jpeg', rarity:'legendario', type:'Amor',       hp:100, songIndex:14, text:'El día que prometimos el mañana juntos. El futuro dejó de ser incierto.' },
    { date:'Nuestro lugar secreto',       title:'Lugar Secreto',            image:'assets/img/16.jpeg', rarity:'ultra',      type:'Refugio',    hp:88,  songIndex:15, text:'Ese rincón del mundo donde el tiempo corre diferente y somos exactamente quienes somos.' },
    { date:'La sorpresa perfecta',        title:'La Gran Sorpresa',         image:'assets/img/17.jpeg', rarity:'raro',       type:'Magia',      hp:78,  songIndex:16, text:'Planifiqué todo durante semanas y cuando la viste, tu cara valió más que todo el esfuerzo.' },
    { date:'Nuestro primer año',          title:'Un Año Juntos',            image:'assets/img/18.jpeg', rarity:'legendario', type:'Hito',       hp:100, songIndex:17, text:'365 días aprendiendo a amarte mejor. Un año entero eligiéndote.' },
    { date:'La selfie del corazón',       title:'Selfie del Corazón',       image:'assets/img/19.jpeg', rarity:'comun',      type:'Cotidiano',  hp:62,  songIndex:18, text:'Una foto cualquiera que guarda algo extraordinario: el destello en tus ojos cuando eres feliz.' },
    { date:'Hoy y siempre',              title:'Hoy y Siempre',            image:'assets/img/20.jpeg', rarity:'legendario', type:'Amor',       hp:100, songIndex:0,  text:'Este recuerdo aún se está escribiendo. Cada día que pasa agrega palabras nuevas a esta historia sin final.' },
  ],

  timeline: [
    { date:'Junio 2026',       title:'El comienzo oficial',    image:'assets/img/3.jpeg',  text:'El día que dijimos sí y el mundo adquirió un nuevo significado.' },
    { date:'Antes de nosotros', title:'Las madrugadas previas', image:'assets/img/1.jpeg',  text:'Mensajes a deshoras, risa fácil, el presentimiento de que algo grande estaba naciendo.' },
    { date:'La primera foto',   title:'Primera imagen juntos',  image:'assets/img/2.jpeg',  text:'El universo quiso dejar constancia visual de que éramos reales.' },
    { date:'En construcción',   title:'Todo lo que viene',      image:'assets/img/4.jpeg',  text:'El futuro lleno de planes y aventuras que todavía no existen pero ya los esperamos.' },
  ],
};

const RARITY_STARS = { comun:'★', raro:'★★', ultra:'★★★', legendario:'★★★★' };

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
  cardModalPrev: $('cardModalPrev'), cardModalNext: $('cardModalNext'),
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
function loadUserMemories() { try { return JSON.parse(localStorage.getItem('userMemories') || '[]'); } catch { return []; } }
function saveUserMemories(arr) { try { localStorage.setItem('userMemories', JSON.stringify(arr)); } catch {} }
function loadBoulevardDreams() { try { const d = localStorage.getItem('boulevardDreams2'); return d ? JSON.parse(d) : null; } catch { return null; } }
function saveBoulevardDreams(arr) { try { localStorage.setItem('boulevardDreams2', JSON.stringify(arr)); } catch {} }

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
  let W, H;
  const stars = Array.from({length:200}, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.5 + 0.3,
    a: Math.random(), da: (Math.random() - 0.5) * 0.005,
  }));
  function resize() { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight; }
  resize(); window.addEventListener('resize', resize);
  (function tick() {
    ctx.clearRect(0, 0, W, H);
    stars.forEach(s => {
      s.a = Math.max(0.08, Math.min(1, s.a + s.da));
      if (s.a <= 0.08 || s.a >= 1) s.da *= -1;
      ctx.beginPath(); ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,240,200,${s.a * 0.65})`; ctx.fill();
    });
    requestAnimationFrame(tick);
  })();
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
  state.allCards = [...APP_DATA.gallery, ...memories];
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

  let mediaHtml = isVideoFile(cardData.image)
    ? `<video src="${cardData.image}" class="pcr-photo" autoplay muted loop playsinline></video>`
    : `<img src="${cardData.image||''}" class="pcr-photo" alt="${cardData.title}" loading="lazy"
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
  const slots = el.carouselRing.querySelectorAll('.poke-card-slot');
  slots.forEach((slot, i) => {
    const off = circularOffset(i, state.carouselIndex, state.carouselTotal);
    const cfg = getCoverflowTransform(off);
    slot.style.transition = animate
      ? 'transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94),opacity 0.65s ease,filter 0.65s ease'
      : 'none';
    slot.style.transform  = `translateX(${cfg.x}px) translateZ(${cfg.z}px) rotateY(${cfg.ry}deg) scale(${cfg.scale})`;
    slot.style.opacity    = cfg.opacity;
    slot.style.filter     = cfg.filter;
    slot.style.zIndex     = cfg.zi;
    slot.style.pointerEvents = Math.abs(off) <= 3 ? 'auto' : 'none';
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
    el.carouselRing.appendChild(slot);
  });

  const addSlot = createPokeCardElement({rarity:'comun'}, state.allCards.length, true);
  addSlot.addEventListener('click', openAddMemoryModal);
  el.carouselRing.appendChild(addSlot);

  updateCoverflowPositions(false);
  updateCarouselCounter();
  initHolographicEffects();
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
  const media  = isVideoFile(cardData.image)
    ? `<video src="${cardData.image}" class="pcr-photo" autoplay muted loop playsinline></video>`
    : `<img src="${cardData.image||''}" class="pcr-photo" alt="${cardData.title}"
            onerror="this.style.display='none'"/>`;

  return `
    <div class="pcr-photo-wrap" style="background:${bg}">${media}</div>
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

  el.cardModalRarityLabel.className = `card-modal__rarity-label rarity-${rarity}`;
  el.cardModalRarityLabel.textContent = `${RARITY_STARS[rarity]} ${rarity.charAt(0).toUpperCase()+rarity.slice(1)} • ${card.type||'Memoria'}`;
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

  el.cardModal.classList.add('is-open');
  el.cardModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  initFullCardHolo(el.cardModalCard, rarity);
}

function initFullCardHolo(cardEl, rarity) {
  if (!cardEl) return;
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

function initMusic() {
  state.audio = new Audio();
  state.audio.addEventListener('ended', () => {
    state.audioPlaying = false;
    document.body.classList.remove('music-playing');
  });

  el.musicButton.addEventListener('click', () => {
    if (state.audioPlaying) {
      state.audio.pause();
      state.audioPlaying = false;
      document.body.classList.remove('music-playing');
      el.musicButton.setAttribute('aria-pressed', 'false');
    } else {
      /* Play current song or first available */
      const idx = state.currentSongIndex >= 0 ? state.currentSongIndex : 0;
      const song = APP_DATA.songs[idx];
      if (song && song.src) playAudio(song.src, idx, song);
      else {
        if (el.musicStatus) el.musicStatus.textContent = 'Pon el MP3 en assets/music/';
      }
    }
  });
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

function openAddMemoryModal() {
  el.addMemoryModal.classList.add('is-open');
  el.addMemoryModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}
function closeAddMemoryModal() {
  el.addMemoryModal.classList.remove('is-open');
  el.addMemoryModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initAddMemory() {
  el.addMemoryClose.addEventListener('click', closeAddMemoryModal);
  el.addMemoryBackdrop.addEventListener('click', closeAddMemoryModal);

  let pendingMedia = null;
  let pendingAudioBlob = null;
  let pendingAudioName = '';

  el.addMemoryFile.addEventListener('change', e => {
    const file = e.target.files[0]; if (!file) return;
    pendingMedia = file;
    el.filePreview.style.display = 'block';
    el.fileUploadContent.style.display = 'none';
    const url = URL.createObjectURL(file);
    el.filePreview.innerHTML = isVideoFile(file.name)
      ? `<video src="${url}" controls style="max-height:220px;width:100%;border-radius:12px;"></video>`
      : `<img src="${url}" alt="preview" style="max-height:220px;width:100%;object-fit:contain;border-radius:12px;"/>`;
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

    const finalize = (imageSrc) => {
      const memory = {
        title, date, text, rarity, image: imageSrc,
        type: 'Memoria', hp: rarityHp[rarity] || 60,
        songIndex: songIndex >= 0 ? songIndex : undefined,
        customSongSrc: pendingAudioBlob || undefined,
        customSongName: pendingAudioBlob ? pendingAudioName : undefined,
      };
      const memories = loadUserMemories();
      memories.push(memory);
      saveUserMemories(memories);
      el.addMemoryForm.reset();
      el.filePreview.style.display = 'none';
      el.fileUploadContent.style.display = 'flex';
      pendingMedia = null; pendingAudioBlob = null; pendingAudioName = '';
      if (el.audioUploadName) el.audioUploadName.textContent = '';
      closeAddMemoryModal();
      renderCarousel();
      spawnParticles('hearts');
    };

    if (pendingMedia) {
      if (isVideoFile(pendingMedia.name) || pendingMedia.size > 8 * 1024 * 1024) {
        finalize(URL.createObjectURL(pendingMedia));
      } else {
        const reader = new FileReader();
        reader.onload = ev => finalize(ev.target.result);
        reader.readAsDataURL(pendingMedia);
      }
    } else {
      finalize('');
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

function renderBoulevardNote(dream, index) {
  const rot = dream.rotate ?? ((Math.random() - 0.5) * 8);
  const note = document.createElement('div');
  note.className = `dream-note dream-note--${dream.color||'yellow'}${dream.done?' is-done':''}`;
  note.style.cssText = `left:${dream.x}%;top:${dream.y}%;transform:rotate(${rot}deg);`;
  note.style.setProperty('--note-transform', `rotate(${rot}deg)`);
  note.style.animation = `noteAppear 0.4s ease ${index * 0.07}s both`;
  note.setAttribute('data-index', index);

  note.innerHTML = `
    <p>${dream.text}</p>
    <div class="dream-note__actions">
      <button class="dream-note__done-btn" data-done="${index}">${dream.done ? '✓ Cumplida' : '◌ Pendiente'}</button>
      <button class="dream-note__del" aria-label="Eliminar" data-del="${index}">✕</button>
    </div>`;

  note.querySelector('[data-done]').addEventListener('click', e => {
    e.stopPropagation();
    boulevardDreams[index].done = !boulevardDreams[index].done;
    saveBoulevardDreams(boulevardDreams);
    renderBoulevard();
  });
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
  function start(cx, cy) {
    dragging = true; sx = cx; sy = cy;
    const p = note.parentElement, pr = p ? p.getBoundingClientRect() : {width:600,height:480};
    ol = (parseFloat(note.style.left)/100) * pr.width;
    ot = (parseFloat(note.style.top)/100) * pr.height;
    note.classList.add('is-dragging'); note.style.zIndex = 20;
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
  note.addEventListener('mousedown',  e => { if (e.target.closest('.dream-note__actions')) return; e.preventDefault(); start(e.clientX, e.clientY); });
  document.addEventListener('mousemove', e => move(e.clientX, e.clientY));
  document.addEventListener('mouseup', end);
  note.addEventListener('touchstart', e => { if (e.target.closest('.dream-note__actions')) return; start(e.touches[0].clientX, e.touches[0].clientY); }, {passive:true});
  note.addEventListener('touchmove',  e => { move(e.touches[0].clientX, e.touches[0].clientY); e.preventDefault(); }, {passive:false});
  note.addEventListener('touchend', end);
}

function initBoulevard() {
  const saved = loadBoulevardDreams();
  boulevardDreams = (saved && saved.length) ? saved : JSON.parse(JSON.stringify(DEFAULT_DREAMS));
  renderBoulevard();
  initBoulevardQuotes();

  el.boulevardAddBtn.addEventListener('click', () => {
    el.addDreamModal.classList.add('is-open');
    el.addDreamModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });

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
    boulevardDreams.push({ text, color: state.selectedColor, x: Math.random()*60+5, y: Math.random()*60+5, rotate: (Math.random()-0.5)*8, done: false });
    saveBoulevardDreams(boulevardDreams);
    renderBoulevard();
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
    spawnParticles('hearts'); spawnParticles('petals');
    document.body.classList.add('final-mode');
  });
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
  initMusic();
  initLoveButton();
  initReveal();
});
