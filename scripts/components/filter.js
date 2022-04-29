const filters = document.querySelectorAll(".filter");

export function listeningFilter() {
    document.addEventListener("click", (e) => {
        if(!e.target.closest(".filter")) {
            filters.forEach((filter) => {
                if(filter.getAttribute("data-expanded") === "true") {
                    filter.setAttribute("data-expanded", "false");
                    filter.querySelector("input").value = "";
                    filter.querySelector("input").dispatchEvent(new Event("input"));
                }
            })
        }
    })
    document.addEventListener("keydown", (e) => {
        if(e.code === "Escape") {
            document.body.click();
            document.getElementById("search-recipe").focus();
        }
    })

    filters.forEach((filter) => {
        const input = filter.querySelector("input");
        const options = filter.querySelectorAll(".filter-option");

        filter.addEventListener("click", (e) => {
            if(!e.target.classList.contains("filter-option")){
                input.focus();
            }
        })

        input.addEventListener("focus", () => {
            document.body.click();
            filter.setAttribute("data-expanded", "true");
        })

        input.addEventListener("input", (e) => {
            options.forEach((option) => {
                if(!option.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                    option.style.display = "none";
                } else {
                    option.style.display = "block"
                }
            })
        })
    })
}