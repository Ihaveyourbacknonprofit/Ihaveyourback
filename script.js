
// =========================
// GLOBAL THEME TOGGLE
// =========================
window.toggleTheme = function () {

  document.body.classList.toggle("dark");

  const btn = document.querySelector(".theme-toggle");

  if (document.body.classList.contains("dark")) {
    btn.innerHTML = "☀️ Light Mode";
    localStorage.setItem("theme", "dark");
  } else {
    btn.innerHTML = "🌙 Dark Mode";
    localStorage.setItem("theme", "light");
  }

};


// =========================
// LOAD SAVED THEME
// =========================
window.addEventListener("load", () => {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }

  const btn = document.querySelector(".theme-toggle");

  if (btn) {
    btn.innerHTML = document.body.classList.contains("dark")
      ? "☀️ Light Mode"
      : "🌙 Dark Mode";
  }

});


// =========================
// CARD ANIMATION
// =========================
window.addEventListener("load", () => {

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {

    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";

    setTimeout(() => {
      card.style.transition = "0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 150);

  });

});


// =========================
// HEADER SHADOW ON SCROLL
// =========================
window.addEventListener("scroll", () => {

  const header = document.querySelector("header");

  if (!header) return;

  if (window.scrollY > 10) {
    header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
  } else {
    header.style.boxShadow = "none";
  }

});
