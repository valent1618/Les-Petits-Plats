import { recipes } from "../../data/recipes.js";
import { formatData } from "./formatData.js";
import { handleNoRecipeMessage } from "../components/noRecipeMessage.js";
import { handleFilterList } from "../components/filter.js";

export function handleRecipeBySearch(search) {
  const recipesCard = document.querySelectorAll(".recipe");

  search = formatData(search);

  let titles = [];
  let allRemoved = true;
  recipesCard.forEach((recipeCard, i) => {
    if (recipeCard.getAttribute("data-remove") === "false") {
      if (search.length > 2) {
        let remove = false;

        let title = formatData(recipes[i].name);
        titles.push(title);

        let description = formatData(recipes[i].description);

        let ingredients = [];
        recipes[i].ingredients.forEach((ingredient) => {
          ingredients.push(formatData(ingredient.ingredient));
        });

        // Test if search is include
        if (!title.includes(search) && !description.includes(search)) {
          let include = false;
          ingredients.forEach((ingredient) => {
            if (ingredient.includes(search)) {
              include = true;
            }
          });
          if (!include) {
            remove = true;
          }
        }

        if (remove) {
          recipeCard.style.display = "none";
        } else {
          allRemoved = false;
          recipeCard.removeAttribute("style");
        }
      } else {
        allRemoved = false;
        recipesCard[i].removeAttribute("style");
      }
    }
  });

  // Display or not the message
  handleNoRecipeMessage(allRemoved, titles);

  // Handle options in the filter lists
  handleFilterList();
}

export function handleRecipeByTags() {
  const inputSearch = document.getElementById("search-recipe");
  const tags = document.querySelectorAll(".tag");
  const recipesCard = document.querySelectorAll(".recipe");

  // Handle the recipes depend of the present tag
  recipesCard.forEach((recipeCard, i) => {
    let remove = false;

    tags.forEach((tag) => {
      const tagName = tag.querySelector("p").textContent.toLowerCase();
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

  handleRecipeBySearch(inputSearch.value);

  // Handle options in the filter lists
  handleFilterList();
}
