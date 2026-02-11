// espera a página carregar totalmente
window.addEventListener("load", () => {
  // ❤️ CORAÇÃO
  const heart = document.getElementById("heart");

  if (heart) {
    setTimeout(() => {
      heart.classList.remove("hidden");
      heart.classList.add("show");
    }, 800);
  }

  // 🎠 CARROSSEL
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");

  if (slides.length > 0 && nextBtn) {
    let currentSlide = 0;

    nextBtn.addEventListener("click", () => {
      slides[currentSlide].classList.remove("active");
      currentSlide++;

      // para no último slide
      if (currentSlide >= slides.length) {
        currentSlide = slides.length - 1;
      }

      slides[currentSlide].classList.add("active");
    });
  }

  // ❌ BOTÃO NÃO (foge + muda texto)
const noBtn = document.querySelector(".no"); if (noBtn) { let step = 0; noBtn.addEventListener("mouseover", () => { 
  // controla a mudança de texto 
  if (step === 0) { noBtn.textContent = "eu avisei"; step++; } 
  else if (step === 1) { noBtn.textContent = "aceita por favor"; step++; } 
  // faz o botão fugir 
  const x = Math.random() * 200 - 90; const y = Math.random() * 200 - 90; noBtn.style.transform = `translate(${x}px, ${y}px)`; }); }

  // ✅ BOTÃO SIM → MOSTRA CALENDÁRIO
  const yesBtn = document.querySelector(".yes");
  const datePicker = document.getElementById("datePicker");

  if (yesBtn && datePicker) {
    yesBtn.addEventListener("click", () => {
      datePicker.classList.remove("hidden");
      datePicker.classList.add("show");
    });
  }

  // 📅 CONFIRMAR DATA → WHATSAPP
  const confirmBtn = document.querySelector(".confirm");
  const finalMsg = document.getElementById("finalMsg");

  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      const dateInput = document.getElementById("date");
      if (!dateInput || !dateInput.value) return;

      const date = dateInput.value;

      datePicker.classList.add("hidden");

      if (finalMsg) {
        finalMsg.classList.remove("hidden");
      }

      // formata data
      const [year, month, day] = date.split("-");
      const formattedDate = `${day}/${month}`;

      // abre WhatsApp
      setTimeout(() => {
        const phone = "5515997237062"; // seu número
        const message = `anotado! dia ${formattedDate}, beijos minha gatinha gostosa já to com sdd`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
      }, 1000);
    });
  }
});

