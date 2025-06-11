// Kaydırma işlemleri için liste elemanını seçiyoruz
const slider = document.getElementById('slider');

// Sürükleme sırasında kullanılacak değişkenler
let isDragging = false;    // Kullanıcı basılı mı?
let startX = 0;            // Başlangıç tıklama konumu
let scrollStart = 0;       // Başlangıçta scrollLeft değeri

// Easing fonksiyonu (ease-out)
function easeOut(t) {
  return 1 - Math.pow(1 - t, 3);
}

// Belirlenen hedefe 0.35s boyunca kaydır
function animateScroll(target) {
  const duration = 350;                      // ms cinsinden
  const from = slider.scrollLeft;
  const change = target - from;
  const startTime = performance.now();

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    slider.scrollLeft = from + change * easeOut(progress);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  requestAnimationFrame(step);
}

// En yakın kartın konumunu hesapla ve oraya kaydır
function snapToCard() {
  const card = slider.querySelector('.card');
  if (!card) return;
  const cardStyle = getComputedStyle(slider);
  const gap = parseInt(cardStyle.gap) || 0;
  const cardWidth = card.offsetWidth + gap;
  const index = Math.round(slider.scrollLeft / cardWidth);
  const target = index * cardWidth;
  animateScroll(target);
}

// Pointer down => sürükleme başlasın
slider.addEventListener('pointerdown', (e) => {
  isDragging = true;
  slider.setPointerCapture(e.pointerId);
  startX = e.clientX;
  scrollStart = slider.scrollLeft;
});

// Pointer hareket ederse scrollLeft'i güncelle
slider.addEventListener('pointermove', (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  slider.scrollLeft = scrollStart - dx;
});

// Bırakıldığında sürükleme bitsin ve en yakın karta hizala
function endDrag() {
  if (!isDragging) return;
  isDragging = false;
  snapToCard();
}

// Tüm bitiş durumlarında hizalamayı tetikle
slider.addEventListener('pointerup', endDrag);
slider.addEventListener('pointercancel', endDrag);
slider.addEventListener('pointerleave', endDrag);

