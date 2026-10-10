/*
  ╔══════════════════════════════════════════════════════════════╗
  ║           CONFIGURACIÓN DE FIREBASE — ALBUM DEL AMOR        ║
  ╠══════════════════════════════════════════════════════════════╣
  ║                                                              ║
  ║  PASOS PARA ACTIVAR (5 minutos, gratis para siempre):       ║
  ║                                                              ║
  ║  1. Ve a https://console.firebase.google.com                 ║
  ║  2. "Crear un proyecto" → nombre: album-del-amor            ║
  ║     (desactiva Google Analytics si quieres)                 ║
  ║  3. En el menú izquierdo: "Compilación" → "Realtime Db"     ║
  ║     → "Crear base de datos" → "Comenzar en modo de prueba"  ║
  ║     → elige la región más cercana → "Habilitar"             ║
  ║  4. Vuelve a "Información general del proyecto"             ║
  ║     → clic en el ícono </> (Web) → Registra la app         ║
  ║     → copia el objeto firebaseConfig que aparece            ║
  ║  5. Reemplaza los valores AQUÍ ABAJO con los tuyos y sube   ║
  ║     el cambio con git push                                   ║
  ║                                                              ║
  ╚══════════════════════════════════════════════════════════════╝
*/
const FIREBASE_CONFIG = {
  apiKey:            "REEMPLAZAR_apiKey",
  authDomain:        "REEMPLAZAR_authDomain",
  databaseURL:       "REEMPLAZAR_databaseURL",
  projectId:         "REEMPLAZAR_projectId",
  storageBucket:     "REEMPLAZAR_storageBucket",
  messagingSenderId: "REEMPLAZAR_messagingSenderId",
  appId:             "REEMPLAZAR_appId"
};
