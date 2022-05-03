export function createOption(option) {
  const li = document.createElement("li");
  li.className = "filter-option";
  li.textContent = option;

  return li;
}
