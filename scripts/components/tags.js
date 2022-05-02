import { createTag } from "../factory/tag.js";
import { handleRecipeByTags } from "../utils/handleRecipe.js";
import { handleFilterList } from "../utils/handleFilterList.js";

const tagsContainer = document.querySelector(".tags-container");

export function handleTags() {
  const options = document.querySelectorAll(".filter-option");

  options.forEach((option) => {
    // Add tag
    option.addEventListener("click", () => {
      if (!tagsContainer.classList.contains("pt-4")) {
        tagsContainer.classList.add("pt-4");
      }

      const optionType =
        option.parentElement.parentElement.getAttribute("data-filter");
      const optionName = option.textContent;
      tagsContainer.prepend(createTag(optionName, optionType));

      options.forEach((option) => {
        option.setAttribute("data-remove", "true");
      });

      handleRecipeByTags()
        .then(() => handleFilterList())
        .then(() => handleTags());

      // Remove tag
      tagsContainer.children[0].addEventListener("click", (e) => {
        e.target.closest(".tag").setAttribute("data-remove", "true");
        setTimeout(() => {
          tagsContainer.removeChild(e.target.closest(".tag"));
          if (tagsContainer.childElementCount === 0) {
            tagsContainer.classList.remove("pt-4");
          }
          handleRecipeByTags()
            .then(() => handleFilterList())
            .then(() => handleTags());
        }, 200);
      });
    });
  });
}
