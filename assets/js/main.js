// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Navigation functionality
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector(".nav-links");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".main-header");
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
      header.style.transform = "translateY(-100%)";
    } else {
      header.style.transform = "translateY(0)";
    }
    lastScroll = currentScroll;
  });
});
