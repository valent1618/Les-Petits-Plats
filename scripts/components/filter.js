const filters = document.querySelectorAll(".filter");
const filterInputs = document.querySelectorAll(".filter-input");

export function listeningFilter() {
    filters.forEach((filter) => {
        filter.addEventListener("click", () => {
            filter.querySelector(".filter-input").focus();
        })
    })
    
    filterInputs.forEach((input) => {
        input.addEventListener("focus", () => {
            input.parentElement.parentElement.setAttribute("data-expanded", "true");
        })
        input.addEventListener("blur", () => {
            input.parentElement.parentElement.setAttribute("data-expanded", "false");
        })
    })
}