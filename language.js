const controls = document.querySelector(".language");
const buttons = controls.querySelectorAll("button");
const translations = document.querySelectorAll(".translation");

function setLanguage(language) {
  document.body.dataset.language = language;
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  for (const translation of translations) {
    translation.hidden = language !== "both" && translation.lang !== language;
  }
  for (const button of buttons) {
    button.setAttribute("aria-pressed", String(button.value === language));
  }
}

controls.hidden = false;
for (const button of buttons) {
  button.addEventListener("click", () => setLanguage(button.value));
}
