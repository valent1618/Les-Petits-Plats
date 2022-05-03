import { fillRecipesContainer } from "./factory/recipeCard.js";
import { handleFilterList, listeningFilter } from "./components/filter.js";
import { disableForm } from "./components/forms.js";

// Factory
fillRecipesContainer();
handleFilterList();

// Events
disableForm();
listeningFilter();
