const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  body.classList.toggle("light", savedTheme === "light");
  toggleBtn.textContent = savedTheme === "light" ? "☀️" : "🌙";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  const isLight = body.classList.contains("light");
  toggleBtn.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});