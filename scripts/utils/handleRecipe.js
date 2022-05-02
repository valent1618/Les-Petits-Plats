import { recipes } from "../../data/recipes.js";
import { formatData } from "./formatData.js";

export function handleRecipeByTags() {
  const tags = document.querySelectorAll(".tag");
  const recipesCard = document.querySelectorAll(".recipe");

  return new Promise((res) => {
    recipesCard.forEach((recipeCard, i) => {
      let remove = false;

      tags.forEach((tag) => {
        const tagName = tag.querySelector("p").textContent;
        let include = false;

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

        if (!include) {
          remove = true;
        }
      });

      recipeCard.setAttribute("data-remove", "true");

      setTimeout(() => {
        recipeCard.style.display = "none";
        if (!remove) {
          recipeCard.style.display = "flex";
          setTimeout(() => {
            recipeCard.setAttribute("data-remove", "false");
          });
        }
      }, 400);
    });

    setTimeout(() => {
      res();
    }, 500);
  });
}
