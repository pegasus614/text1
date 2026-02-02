// Confirm JS is connected
console.log("Football Pulse JS is connected ✅");
// const carousel = new bootstrap.Carousel('#myCarousel')

// Smooth scroll for nav + headlines
document.querySelectorAll('a[href^="#"], .nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


 // ===== NAV MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');      // open / close menu
  menuToggle.classList.toggle('open');      // turn ☰ into X
});




// Back to top button
const backTop = document.createElement("button");
backTop.innerText = "⬆️";
backTop.className = "back-to-top";
document.body.appendChild(backTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backTop.style.display = "block";
  } else {
    backTop.style.display = "none";
  }
});

backTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Live date in footer
const footerCopy = document.querySelector(".footer-copy");
if (footerCopy) {
  const year = new Date().getFullYear();
  footerCopy.innerText = `© ${year} Football Pulse | All Rights Reserved`;
}

// 🕒 Cool Compact Footer Date & Time
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  const dt = document.getElementById("datetime");

  if (year) year.textContent = new Date().getFullYear();
  if (!dt) return;

  const fmt = new Intl.DateTimeFormat("en-US", {
    weekday: "short", month: "short", day: "numeric",
    hour: "2-digit", minute: "2-digit", second: "2-digit",
    hour12: true, timeZone: "Africa/Lagos"
  });

  setInterval(() => (dt.textContent = fmt.format(new Date())), 1000);
});


// ===== MAKE NAVBAR STICKY ON SCROLL =====
window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  
  if (window.scrollY > 10) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
});


