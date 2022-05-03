const forms = document.querySelectorAll("form");

export function disableForm() {
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  });
}
