document.querySelectorAll('.service-block').forEach(block => {
  const track = block.querySelector('.carousel-track');
  const slides = block.querySelectorAll('.carousel-slide');
  const dots = block.querySelectorAll('.carousel-dot');
  let current = 0;

  function goTo(idx) {
    current = (idx + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  block.querySelector('.prev').addEventListener('click', () => goTo(current - 1));
  block.querySelector('.next').addEventListener('click', () => goTo(current + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  setInterval(() => goTo(current + 1), 4500);
});
function submitForm() {
  const name    = document.getElementById('fname').value.trim();
  const phone   = document.getElementById('ftel').value.trim();
  const service = document.getElementById('fsubj').value.trim();
  const message = document.getElementById('fmsg').value.trim();

  if (!name || !phone || !service || !message) {
    alert('Ju lutem plotësoni të gjitha fushat!');
    return;
  }

  const text = `Përshëndetje! Unë jam *${name}*.\n📞 Tel: ${phone}\n🔹 Shërbimi: ${service}\n💬 Mesazhi: ${message}`;
  window.open(`https://wa.me/355696736765?text=${encodeURIComponent(text)}`, '_blank');
}
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
      document.body.style.overflow = '';
    });
  }
});
function toggleMenu() {
  const hamburger = document.getElementById('hamburger');
  const navPanel = document.getElementById('navPanel');
  const navOverlay = document.getElementById('navOverlay');

  hamburger.classList.toggle('open');
  navPanel.classList.toggle('open');
  navOverlay.classList.toggle('open');

  document.body.style.overflow = navPanel.classList.contains('open') ? 'hidden' : '';
}