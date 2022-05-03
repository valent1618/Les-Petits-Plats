import { fillRecipesContainer } from "./factory/recipeCard.js";
import { handleFilterList } from "./utils/handleFilterList.js";
import { listeningFilter } from "./components/filter.js";

// Factory
fillRecipesContainer();
handleFilterList();

// Events
listeningFilter();
