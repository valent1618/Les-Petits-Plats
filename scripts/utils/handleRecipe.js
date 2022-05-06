import { recipes } from "../../data/recipes.js";
import { formatData } from "./formatData.js";
import { handleNoRecipeMessage } from "../components/noRecipeMessage.js";
import { handleFilterList } from "../components/filter.js";

export function handleRecipeBySearch(search) {
  const recipesCard = document.querySelectorAll(".recipe");

  search = formatData(search);

  let titles = [];
  let allRemoved = true;
  for (let i = 0; i < recipesCard.length; i++) {
    if (recipesCard[i].getAttribute("data-remove") === "false") {
      if (search.length > 2) {
        let remove = false;

        let title = formatData(recipesCard[i].querySelector("h2").textContent);
        titles.push(title);

        let description = formatData(
          recipesCard[i].querySelector(".card-description").textContent
        );

        let ingredients = [];
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
          ingredients.push(formatData(recipes[i].ingredients[j].ingredient));
        }

        // Test if search is include
        let include = false;

        let stop = false;
        // if it's include or if we check all the array
        // stop searching
        while (!stop) {
          // title
          for (let j = 0; j < title.length; j++) {
            for (let k = 0; k < search.length; k++) {
              if (title[j] === search[k]) {
                if (k === search.length - 1) {
                  include = true;
                  stop = true;
                }
                j++;
              } else {
                k = search.length;
              }
            }
          }

          // description
          for (let j = 0; j < description.length; j++) {
            for (let k = 0; k < search.length; k++) {
              if (description[j] === search[k]) {
                if (k === search.length - 1) {
                  include = true;
                  stop = true;
                }
                j++;
              } else {
                k = search.length;
              }
            }
          }

          // ingredients
          for (let j = 0; j < ingredients.length; j++) {
            for (let k = 0; k < ingredients[j].length; k++) {
              for (let l = 0; l < search.length; l++) {
                if (ingredients[j][k] === search[l]) {
                  if (l === search.length - 1) {
                    include = true;
                    stop = true;
                  }
                  k++;
                } else {
                  l = search.length;
                }
              }
            }
          }

          stop = true;
        }

        if (!include) {
          remove = true;
        }

        if (remove) {
          recipesCard[i].style.display = "none";
        } else {
          allRemoved = false;
          recipesCard[i].removeAttribute("style");
        }
      } else {
        allRemoved = false;
        recipesCard[i].removeAttribute("style");
      }
    }
  }

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
