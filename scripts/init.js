import { fillFilterList } from "./factory/filterList.js";
import { listeningFilter } from "./components/filter.js";
import { fillRecipesContainer } from "./factory/recipeCard.js";
import { handleTags } from "./components/tags.js";

// Factory
fillFilterList();
fillRecipesContainer();

// Events
listeningFilter();
handleTags();