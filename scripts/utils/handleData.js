import { recipes } from "../../data/recipes.js";
import { formatData, sortFilterData } from "./formatData.js";

export function handleData() {
  const recipesDOM = document.querySelectorAll(".recipe");
  const tags = document.querySelectorAll(".tag");

  let ingredients = [];
  let appliances = [];
  let ustensils = [];

  // For each recipe display fill the arrays with format data
  recipesDOM.forEach((recipe, i) => {
    if (
      recipe.getAttribute("data-remove") === "false" &&
      !recipe.getAttribute("style")
    ) {
      // ingredients
      recipes[i].ingredients.forEach((ingredient) => {
        ingredients.push(formatData(ingredient.ingredient, "upper"));
      });

      // appliances
      appliances.push(formatData(recipes[i].appliance, "upper"));

      // ustensils
      recipes[i].ustensils.forEach((ustensil) => {
        ustensils.push(formatData(ustensil, "upper"));
      });
    }
  });

  // Sort and filter the arrays
  ingredients = sortFilterData(ingredients);
  appliances = sortFilterData(appliances);
  ustensils = sortFilterData(ustensils);

  // Remove tags select of the list options
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
