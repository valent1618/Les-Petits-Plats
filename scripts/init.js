import { fillRecipesContainer } from "./factory/recipeCard.js";
import { handleFilterList, listeningFilter } from "./components/filter.js";

// Factory
fillRecipesContainer();
handleFilterList();

// Events
listeningFilter();
