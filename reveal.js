document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".reveal");
  items.forEach((el, i) => {
    el.style.animationDelay = `${0.6 + i * 0.3}s`;
  });
});
