const clock = document.getElementById("clock");

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  clock.textContent = `${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 30000);

document.querySelectorAll(".app-card").forEach((card) => {
  card.addEventListener("click", () => {
    document.querySelectorAll(".app-card").forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
  });
});
