const CACHE_NAME = 'championship-v1';
// 캐시할 파일 목록 (기존 파일 이름들을 모두 적어주세요)
const FILES_TO_CACHE = [
  'index.html',
  'mainpage.html',
  'information.html',
  'admin.html',
  'add_base.html',
  'add_medium.html',
  'add_master.html',
  'championship.html',
  'dog.png'
  'cat.png'
  'bear.png'
  'rabbit.png'
  'penguin.png'
  'frog.png'
  'pig.png'
  'chick.png'
  'baby_dragon.png'
  'elephant.png'
  'staff.png'
  'shield.png'
  'cape.png'
  'wing_gold.png'
  'slime_blue.png'
  'slime_pink.png'
  'slime_yellow.png'
  'slime_green.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});