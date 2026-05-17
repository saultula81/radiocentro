self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Solo interceptar para cumplir el requisito de PWA básico, 
  // permitimos que el navegador maneje la red normalmente.
});
