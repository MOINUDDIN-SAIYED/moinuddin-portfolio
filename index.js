// Typing effect with blinking cursor
const heroTitle = document.querySelector('h1');
const originalText = "JUNIOR WEB DEVELOPER | HTML, CSS, JAVASCRIPT.";
let idx = 0;

function typeWriter() {
  if (idx < originalText.length) {
    heroTitle.innerHTML = `<br>${originalText.slice(0, idx)}<span class="border-r-2 border-black animate-pulse"></span>`;
    idx++;
    setTimeout(typeWriter, 70);
  }
}
window.onload = typeWriter;

// Floating image animation on load
const images = document.querySelectorAll("img");
images.forEach((img, i) => {
  img.style.opacity = 0;
  img.style.transform = `translateY(${i % 2 === 0 ? "-50px" : "50px"}) scale(0.9) rotate(${i % 2 === 0 ? "-10deg" : "10deg"})`;

  setTimeout(() => {
    img.style.transition = "all 1.2s ease";
    img.style.opacity = 1;
    img.style.transform = `translateY(0) scale(1) rotate(${i % 2 === 0 ? "-10deg" : "10deg"})`;
  }, 1000 + i * 300);
});

// Parallax effect on mousemove
document.querySelector('.flex.gap-4').addEventListener('mousemove', e => {
  const imgs = document.querySelectorAll('.flex.gap-4 img');
  imgs.forEach((img, i) => {
    const offsetX = (e.offsetX - img.width / 2) / 20;
    const offsetY = (e.offsetY - img.height / 2) / 20;
    img.style.transform = `rotate(${i % 2 === 0 ? "-10deg" : "10deg"}) translate(${offsetX}px, ${offsetY}px) scale(1.02)`;
  });
});

document.querySelector('.flex.gap-4').addEventListener('mouseleave', () => {
  const imgs = document.querySelectorAll('.flex.gap-4 img');
  imgs.forEach((img, i) => {
    img.style.transform = `rotate(${i % 2 === 0 ? "-10deg" : "10deg"}) translate(0, 0) scale(1)`;
  });
});

// Scroll arrow animation
const arrow = document.createElement("div");
arrow.innerHTML = "⬇️";
arrow.className = "text-2xl animate-bounce text-center mt-12";
document.querySelector(".text-center").appendChild(arrow);

// Fade-in name animation
["left-8", "right-8"].forEach((cls, i) => {
  const el = document.querySelector(`.absolute.${cls}`);
  el.style.opacity = 0;
  el.style.transform = "translateY(-20px)";
  setTimeout(() => {
    el.style.transition = "all 1s ease";
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
    el.classList.add("text-blue-500");
  }, 1600 + i * 400);
});
