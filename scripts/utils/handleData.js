import { recipes } from "../../data/recipes.js";
import { formatData, sortFilterData } from "./formatData.js";

export let ingredients = [];
export let appliances = [];
export let ustensils = [];

// For each recipe fill the arrays
recipes.forEach((recipe) => {
    // ingredients
    recipe.ingredients.forEach((ingredient) => {
        ingredients.push(formatData(ingredient.ingredient));
    })

    // appliances
    appliances.push(formatData(recipe.appliance));

    // ustensils
    recipe.ustensils.forEach((ustensil) => {
        ustensils.push(formatData(ustensil));
    })
})

// Sort and filter the arrays
ingredients = sortFilterData(ingredients);
appliances = sortFilterData(appliances);
ustensils = sortFilterData(ustensils);
