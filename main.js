// ============ SLIDER ============
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

// ============ DARK MODE ============
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// ============ LANGUAGE TOGGLE ============
let isHindi = false;
function toggleLanguage() {
  isHindi = !isHindi;
  document.querySelectorAll(".section-title").forEach(el => {
    el.textContent = isHindi ? "हमारे फोन" : "Our Phones";
  });
  document.querySelector("#booking h2").textContent = isHindi ? "फोन बुक करें" : "Book Your Phone Now";
  document.querySelector("#trust h2").textContent = isHindi ? "लोग हम पर क्यों भरोसा करते हैं" : "Why People Trust Us";
  document.querySelector("#faq h2").textContent = isHindi ? "अक्सर पूछे जाने वाले सवाल" : "Frequently Asked Questions";
}

// ============ PRODUCT FILTER ============
function filterBrand(brand) {
  const cards = document.querySelectorAll(".product-card");
  cards.forEach(card => {
    if (brand === "all" || card.classList.contains(brand)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// ============ COUNTDOWN TIMER ============
function startCountdown(duration) {
  let timer = duration, minutes, seconds;
  const display = document.getElementById("timer");
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);
    display.textContent = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    if (--timer < 0) timer = duration;
  }, 1000);
}
startCountdown(300); // 5 minutes