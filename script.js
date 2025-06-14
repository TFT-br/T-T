// ===== Efeito de Digitação =====
function typeEffect(elementId, text, speed = 50) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.textContent = "";
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

window.addEventListener("DOMContentLoaded", () => {
  const heroEl = document.getElementById("typed-hero");
  if (heroEl) {
    const fullText = heroEl.textContent.trim();
    typeEffect("typed-hero", fullText, 70);
  }

  // ===== Animação de Fade-in nos Cards =====
  const cards = document.querySelectorAll(".fade-in-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));

  // ===== Inicializar Swiper (se existir na página) =====
  const swiperContainer = document.querySelector(".swiper");
  if (swiperContainer) {
    new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true
    });
  }
});

// ===== Modal Fullscreen =====
function openFull(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = img.src;
  }
}

function closeFull() {
  const modal = document.getElementById("imgModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Fecha modal ao clicar fora da imagem
document.addEventListener("click", (e) => {
  const modal = document.getElementById("imgModal");
  if (modal && e.target === modal) {
    modal.style.display = "none";
  }
});

function openFull(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");
  if (modal && modalImg) {
    modal.style.display = "block";
    modalImg.src = img.src;
  }
}

function closeFull() {
  const modal = document.getElementById("imgModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Fecha modal ao clicar fora da imagem
document.addEventListener("click", (e) => {
  const modal = document.getElementById("imgModal");
  if (modal && e.target === modal) {
    modal.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const clickSound = document.getElementById("click-sound");
  
  document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', () => {
      if (clickSound) {
        clickSound.currentTime = 0;
        clickSound.play();
      }
    });
  });
});
