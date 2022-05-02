import { recipes } from "../../data/recipes.js";
import { formatData, sortFilterData } from "./formatData.js";

export function handleData() {
  const recipesDOM = document.querySelectorAll(".recipe");
  const tags = document.querySelectorAll(".tag");

  let ingredients = [];
  let appliances = [];
  let ustensils = [];

  // For each recipe display fill the arrays
  recipesDOM.forEach((recipe, i) => {
    if (recipe.getAttribute("data-remove") === "false") {
      // ingredients
      recipes[i].ingredients.forEach((ingredient) => {
        ingredients.push(formatData(ingredient.ingredient));
      });

      // appliances
      appliances.push(formatData(recipes[i].appliance));

      // ustensils
      recipes[i].ustensils.forEach((ustensil) => {
        ustensils.push(formatData(ustensil));
      });
    }
  });

  // Sort and filter the arrays
  ingredients = sortFilterData(ingredients);
  appliances = sortFilterData(appliances);
  ustensils = sortFilterData(ustensils);

  // Remove tags select of the list
  if (tags.length > 0) {
    tags.forEach((tag) => {
      ingredients = ingredients.filter(
        (data) => !data.includes(tag.textContent)
      );
      appliances = appliances.filter((data) => !data.includes(tag.textContent));
      ustensils = ustensils.filter((data) => !data.includes(tag.textContent));
    });
  }

  return { ingredients, appliances, ustensils };
}
