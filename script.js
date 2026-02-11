// Espera a página carregar totalmente
window.addEventListener("load", () => {
  console.log("Script carregou! ✅");

  // ---------------------
  // ❤️ CORAÇÃO
  // ---------------------
  const heart = document.getElementById("heart");
  if (heart) {
    setTimeout(() => {
      heart.classList.remove("hidden");
      heart.classList.add("show");
      console.log("Heart mostrado!");
    }, 800);
  }

  // ---------------------
  // 🎠 CARROSSEL
  // ---------------------
  const slides = document.querySelectorAll(".slide");
  const nextBtn = document.querySelector(".next");

  if (slides.length > 0 && nextBtn) {
    let currentSlide = 0;

    nextBtn.addEventListener("click", () => {
      slides[currentSlide].classList.remove("active");
      currentSlide++;
      if (currentSlide >= slides.length) currentSlide = slides.length - 1;
      slides[currentSlide].classList.add("active");
      console.log("Slide atual:", currentSlide);
    });
  }

  // ---------------------
  // ❌ BOTÃO NÃO
  // ---------------------
  const noBtn = document.querySelector(".no");
  if (noBtn) {
    let step = 0;
    noBtn.addEventListener("mouseover", () => {
      // Muda o texto
      if (step === 0) {
        noBtn.textContent = "eu avisei";
        step++;
      } else if (step === 1) {
        noBtn.textContent = "aceita por favor";
        step++;
      }

      // Faz o botão "fugir"
      const x = Math.random() * 200 - 90; // deslocamento horizontal
      const y = Math.random() * 200 - 90; // deslocamento vertical
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // ---------------------
  // ✅ BOTÃO SIM → MOSTRA CALENDÁRIO
  // ---------------------
  const yesBtn = document.querySelector(".yes");
  const datePicker = document.getElementById("datePicker");

  if (yesBtn && datePicker) {
    yesBtn.addEventListener("click", () => {
      datePicker.classList.remove("hidden");
      datePicker.classList.add("show");
      console.log("Calendário mostrado!");
    });
  }

  // ---------------------
  // 📅 CONFIRMAR DATA → WHATSAPP
  // ---------------------
  const confirmBtn = document.querySelector(".confirm");
  const finalMsg = document.getElementById("finalMsg");

  if (confirmBtn && datePicker) {
    confirmBtn.addEventListener("click", () => {
      const dateInput = document.getElementById("date");
      if (!dateInput || !dateInput.value) {
        alert("Escolha uma data primeiro!");
        return;
      }

      const date = dateInput.value;
      datePicker.classList.add("hidden");
      if (finalMsg) finalMsg.classList.remove("hidden");

      // Formata a data
      const [year, month, day] = date.split("-");
      const formattedDate = `${day}/${month}`;

      // Abre WhatsApp
      const phone = "5515997237062"; // seu número
      const message = `Anotado! Dia ${formattedDate}, beijo 😄`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.location.href = url;
    });
  }
});
