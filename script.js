// SCROLL SUAVE PREMIUM

document.querySelectorAll('a[href^="#"]').forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));

target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
});
});

// DARK MODE

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

// MOBILE MENU

const menuBtn = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

// ANIMAÇÃO AO DESCER

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
});

document.querySelectorAll(".reveal").forEach(el => {
observer.observe(el);
});
