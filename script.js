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

  // Auto-advance
  setInterval(() => goTo(current + 1), 4500);
});
