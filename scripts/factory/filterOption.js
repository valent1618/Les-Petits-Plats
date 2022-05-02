export function createOption(option) {
  const li = document.createElement("li");
  li.className = "filter-option";
  li.setAttribute("data-remove", "true");
  li.textContent = option;

  return li;
}
