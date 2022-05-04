import { fillRecipesContainer } from "./factory/recipeCard.js";
import { handleFilterList, listeningFilter } from "./components/filter.js";
import { disableForms } from "./components/forms.js";

// Factory
fillRecipesContainer();
handleFilterList();

// Events
disableForms();
listeningFilter();
