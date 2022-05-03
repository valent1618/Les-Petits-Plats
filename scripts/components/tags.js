import { createTag } from "../factory/tag.js";
import { handleRecipeByTags } from "../utils/handleRecipe.js";
import { handleFilterList } from "../utils/handleFilterList.js";

const tagsContainer = document.querySelector(".tags-container");

export function handleTags() {
  const options = document.querySelectorAll(".filter-option");

  options.forEach((option) => {
    // Add tag when option is clicked
    option.addEventListener("click", () => {
      // Add padding if the container was empty
      if (!tagsContainer.classList.contains("pt-4")) {
        tagsContainer.classList.add("pt-4");
      }

      // Create the tag
      const optionType =
        option.parentElement.parentElement.getAttribute("data-filter");
      const optionName = option.textContent;
      tagsContainer.prepend(createTag(optionName, optionType));

      // Handle the recipes
      handleRecipeByTags();

      // Remove tag when the tag created above is clicked
      tagsContainer.children[0].addEventListener("click", (e) => {
        // Make disapear the tag
        e.target.closest(".tag").setAttribute("data-remove", "true");
        setTimeout(() => {
          // then remove it
          tagsContainer.removeChild(e.target.closest(".tag"));
          // If the container have no tags
          // remove the padding
          if (tagsContainer.childElementCount === 0) {
            tagsContainer.classList.remove("pt-4");
          }
          // Handle the recipes
          handleRecipeByTags();
        }, 200);
      });
    });
  });
}
