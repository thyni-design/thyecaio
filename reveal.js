document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.animationDelay = `${0.8 + i * 0.3}s`;
  });
});
