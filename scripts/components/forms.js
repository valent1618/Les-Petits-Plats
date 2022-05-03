const forms = document.querySelectorAll("form");

export function disableForms() {
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
}
