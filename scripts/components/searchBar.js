import { handleRecipeBySearch } from "../utils/handleRecipe.js";

const form = document.querySelector(".search-form");
const input = document.getElementById("search-recipe");

export function listeningSearchBar() {
  input.addEventListener("input", (e) => {
    let search = e.target.value;

    if (search.length > 2 || search.length === 0) {
      handleRecipeBySearch(search);
      form.setAttribute("data-error-visible", "false");
    } else {
      form.setAttribute("data-error-visible", "true");
    }
  });
}