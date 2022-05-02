import { createTag } from "../factory/tag.js";
import { handleRecipeByTags } from "../utils/handleRecipe.js";

const tagsContainer = document.querySelector(".tags-container");

export function handleTags() {
    const options = document.querySelectorAll(".filter-option");
    
    options.forEach((option) => {
        // Add tag
        option.addEventListener("click", () => {
            option.style.display = "none";

            if(!tagsContainer.classList.contains("pt-4")) {
                tagsContainer.classList.add("pt-4");
            }

            const typeOption = option.parentElement.parentElement.getAttribute("data-filter");
            tagsContainer.prepend(createTag(option.textContent, typeOption));

            handleRecipeByTags();

            // Remove tag
            tagsContainer.children[0].addEventListener("click", (e) => {
                e.target.closest(".tag").setAttribute("data-remove", "true");
                setTimeout(() => {
                    tagsContainer.removeChild(e.target.closest(".tag"));
                    if(tagsContainer.childElementCount === 0) {
                        tagsContainer.classList.remove("pt-4");
                    }
                    handleRecipeByTags();
                }, 200);
                option.style.display = "block";
            })
        });
    })
}