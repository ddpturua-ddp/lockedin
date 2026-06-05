/* =========================
   PAGE LOAD
========================= */

// LOCKEDIN Stats

let xp = 0;
let coins = 0;
let level = 1;
let energy = 100;
/*== =========================
   BUTTON EFFECT
========================= */

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    button.style.transform = "scale(0.96)";

    setTimeout(() => {
      button.style.transform = "scale(1)";
    }, 120);
  });
});

/* =========================
   CARD ANIMATION
========================= */

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

cards.forEach((card) => {
  observer.observe(card);
});

/* =========================
   MOUSE GLOW
========================= */

const glow = document.querySelector(".background-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});

/* =========================
   HERO BUTTON
========================= */

const startButton = document.getElementById("startButton");
const lockedinForm = document.getElementById("lockedinForm");

startButton.addEventListener("click", () => {
  lockedinForm.classList.toggle("show");
});

const form = document.getElementById("lockedinForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    firstName: form.elements[0].value,
    lastName: form.elements[1].value,
    email: form.elements[2].value,
    phone: form.elements[3].value,
    instagram: form.elements[4].value,
    bigo: form.elements[5].value,
    pillar: form.elements[6].value,
    goal: form.elements[7].value,
    bio: form.elements[8].value,
  };

  try {
    await fetch(
      "https://script.google.com/macros/s/AKfycbzXJv_eJoDtqZl0Me-S-QBkQdDPKBBhcmZaVwwTV7hWU6Sd5mNjBwsvzD5D40VoCaVaOQ/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
      },
    );

    document.getElementById("lockedinPopup").style.display = "flex";

    form.reset();
  } catch (error) {
    console.error(error);
    alert("Submission failed.");
  }
});

function closePopup() {
  document.getElementById("lockedinPopup").style.display = "none";
}

/* =========================
   LIVE STATUS
========================= */

//const streak = 5;

/*document.getElementById("levelText").textContent = `Level: ${level}`;
document.getElementById("streakText").textContent = `Streak: ${streak} Days`;
document.getElementById("energyText").textContent = `Energy: ${energy}%`;
cameraInput.addEventListener("change", function () {
  const file = this.file[0];
  if (file) {
    photoPreview.src = URL.createObjectURL(file);
  }
});
*/
