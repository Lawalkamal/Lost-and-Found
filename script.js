document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

//Hero text animation
const fadeTexts = [
  `Lost something? Let's help you <span class="highlight">find</span> it.`,
  `Found something? You can <span class="highlight"> report </span> it here.`,
  `<span class="highlight">Your community</span>, your items, safely reunited.`,
];

let currentIndex = 0;
const fadeTextEl = document.getElementById("fade-text");

setInterval(() => {
  fadeTextEl.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % fadeTexts.length;
    fadeTextEl.innerHTML = fadeTexts[currentIndex];
    fadeTextEl.style.opacity = 1;
  }, 500);
}, 4000);



