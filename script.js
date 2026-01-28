document.addEventListener("DOMContentLoaded", () => {

  // ===== GALLERY LIGHTBOX =====
  const images = document.querySelectorAll(".gallery-img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // ===== DARK MODE TOGGLE =====
  const toggle = document.getElementById("theme-toggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    toggle.textContent = document.body.classList.contains("dark")
      ? "🔆"
      : "🌙";
  });

});
