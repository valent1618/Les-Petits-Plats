import { createTag } from "../factory/tag.js";

const filters = document.querySelectorAll(".filter");
const tagsContainer = document.querySelector(".tags-container");

export function listeningFilter() {
    document.addEventListener("click", (e) => {
        if(!e.target.closest(".filter")) {
            filters.forEach((filter) => {
                if(filter.getAttribute("data-expanded") === "true") {
                    filter.setAttribute("data-expanded", "false");
                }
            })
        }
    })

    document.addEventListener("keydown", (e) => {
        if(e.code === "Escape") {
            document.body.click();
        }
    })

    filters.forEach((filter) => {
        const input = filter.querySelector("input");

        filter.addEventListener("click", (e) => {
            if(!e.target.classList.contains("filter-option")){
                input.focus();
            }
        })

        input.addEventListener("focus", () => {
            filters.forEach((filter) => {
                if(filter.getAttribute("data-expanded") === "true") {
                    filter.setAttribute("data-expanded", "false");
                }
            })
            filter.setAttribute("data-expanded", "true");
        })
    })


    // Options
    const options = document.querySelectorAll(".filter-option");

    options.forEach((option) => {
        option.addEventListener("click", () => {
            if(!tagsContainer.classList.contains("pt-4")) {
                tagsContainer.classList.add("pt-4");
            }
            tagsContainer.prepend(createTag(option.textContent, option.parentElement.parentElement.getAttribute("data-filter")));
            tagsContainer.children[0].addEventListener("click", (e) => {
                e.target.closest(".tag").setAttribute("data-remove", "true");
                setTimeout(() => {
                    tagsContainer.removeChild(e.target.closest(".tag"));
                    if(tagsContainer.childElementCount === 0) {
                        tagsContainer.classList.remove("pt-4");
                    }
                }, 200);
                option.style.display = "block";
            })
            option.style.display = "none";
        });
    })
}