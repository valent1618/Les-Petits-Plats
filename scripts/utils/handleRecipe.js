import { recipes } from "../../data/recipes.js";
import { formatData } from "./formatData.js";
import { handleFilterList } from "./handleFilterList.js";

export function handleRecipeByTags() {
  const tags = document.querySelectorAll(".tag");
  const recipesCard = document.querySelectorAll(".recipe");

  // Handle the recipes depend of the present tag
  recipesCard.forEach((recipeCard, i) => {
    let remove = false;

    tags.forEach((tag) => {
      const tagName = tag.querySelector("p").textContent;
      let include = false;

      // Try to find if the recipe contain the tag name
      switch (tag.getAttribute("data-tagtype")) {
        case "ingredients":
          recipes[i].ingredients.forEach((ingredient) => {
            if (formatData(ingredient.ingredient).includes(tagName)) {
              include = true;
            }
          });
          break;
        case "appliances":
          if (formatData(recipes[i].appliance).includes(tagName)) {
            include = true;
          }
          break;
        case "ustensils":
          recipes[i].ustensils.forEach((ustensil) => {
            if (formatData(ustensil).includes(tagName)) {
              include = true;
            }
          });
          break;
      }

      // If it's not, remove the recipe
      if (!include) {
        remove = true;
      }
    });

    if (remove) {
      recipeCard.setAttribute("data-remove", "true");
    } else {
      recipeCard.setAttribute("data-remove", "false");
    }
  });

  // Handle options in the filter lists
  handleFilterList();
}
