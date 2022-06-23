export default function transParallax() {
  const elements = document.querySelectorAll('[data-parallax]');

  function moveContent(scrollOffset) {
    elements.forEach((item) => {
      let el = item;

      let speedX = el.dataset.speedX;
      let speedY = el.dataset.speedY;

      if (el.dataset.speedX === undefined) {
        speedX = 0;
      }

      if (el.dataset.speedY === undefined) {
        speedY = 0;
      }

      el.style.transform = `translate(
          ${speedX * scrollOffset}px,
          ${speedY * scrollOffset}px)`;
    });
  }

  window.addEventListener('scroll', () => {
    let scrollOffset = window.pageYOffset;
    moveContent(scrollOffset);
  });
}
