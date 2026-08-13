// =====================================================
// ===== EFEITO DE DIGITAÇÃO ============================
// =====================================================

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


// =====================================================
// ===== CONTADOR DE TEMPO DE RELACIONAMENTO ============
// =====================================================

// Data em que começamos a namorar:
// 20/05/2018 às 00:00:00

const relationshipStart = new Date(2018, 4, 20, 0, 0, 0);


// Calcula anos, meses, dias, horas, minutos e segundos

function calculateLoveTime(startDate, currentDate) {

  let years = currentDate.getFullYear() - startDate.getFullYear();

  let months = currentDate.getMonth() - startDate.getMonth();

  let days = currentDate.getDate() - startDate.getDate();

  let hours = currentDate.getHours() - startDate.getHours();

  let minutes = currentDate.getMinutes() - startDate.getMinutes();

  let seconds = currentDate.getSeconds() - startDate.getSeconds();


  // Corrige segundos

  if (seconds < 0) {

    seconds += 60;
    minutes--;

  }


  // Corrige minutos

  if (minutes < 0) {

    minutes += 60;
    hours--;

  }


  // Corrige horas

  if (hours < 0) {

    hours += 24;
    days--;

  }


  // Corrige dias

  if (days < 0) {

    const previousMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      0
    );

    days += previousMonth.getDate();

    months--;

  }


  // Corrige meses

  if (months < 0) {

    months += 12;
    years--;

  }


  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds
  };

}


// Atualiza os números na tela

function updateLoveCounter() {

  const now = new Date();

  const time = calculateLoveTime(
    relationshipStart,
    now
  );


  const years = document.getElementById("years");
  const months = document.getElementById("months");
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");


  if (years) {
    years.textContent = time.years;
  }

  if (months) {
    months.textContent = time.months;
  }

  if (days) {
    days.textContent = time.days;
  }

  if (hours) {
    hours.textContent = time.hours;
  }

  if (minutes) {
    minutes.textContent = time.minutes;
  }

  if (seconds) {
    seconds.textContent = time.seconds;
  }

}


// =====================================================
// ===== DOM CONTENT LOADED =============================
// =====================================================

window.addEventListener("DOMContentLoaded", () => {


  // ===== Efeito de Digitação =====

  const heroEl = document.getElementById("typed-hero");

  if (heroEl) {

    const fullText = heroEl.textContent.trim();

    typeEffect(
      "typed-hero",
      fullText,
      70
    );

  }


  // ===== Inicia o contador =====

  updateLoveCounter();


  // Atualiza o contador a cada segundo

  setInterval(
    updateLoveCounter,
    1000
  );


  // ===== Animação de Fade-in nos Cards =====

  const cards = document.querySelectorAll(
    ".fade-in-card"
  );


  if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
              "translateY(0)";

            observer.unobserve(entry.target);

          }

        });

      },
      {
        threshold: 0.2
      }
    );


    cards.forEach(card => {

      observer.observe(card);

    });

  }


  // ===== Inicializar Swiper =====

  const swiperContainer =
    document.querySelector(".swiper");


  if (swiperContainer) {

    new Swiper(
      ".swiper",
      {

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

      }
    );

  }


  // ===================================================
  // ===== SOM DOS BOTÕES ==============================
  // ===================================================

  const clickSound =
    document.getElementById("click-sound");


  document
    .querySelectorAll("a, button")
    .forEach(el => {

      el.addEventListener("click", () => {

        if (clickSound) {

          clickSound.currentTime = 0;

          clickSound.play().catch(() => {});

        }

      });

    });

});


// =====================================================
// ===== MODAL FULLSCREEN ===============================
// =====================================================

function openFull(img) {

  const modal =
    document.getElementById("imgModal");

  const modalImg =
    document.getElementById("modalImg");


  if (modal && modalImg) {

    modal.style.display = "block";

    modalImg.src = img.src;

  }

}


function closeFull() {

  const modal =
    document.getElementById("imgModal");


  if (modal) {

    modal.style.display = "none";

  }

}


// Fecha modal ao clicar fora da imagem

document.addEventListener(
  "click",
  (e) => {

    const modal =
      document.getElementById("imgModal");


    if (
      modal &&
      e.target === modal
    ) {

      modal.style.display = "none";

    }

  }
);

