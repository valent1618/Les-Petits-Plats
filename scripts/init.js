import { fillRecipesContainer } from "./factory/recipeCard.js";
import { handleFilterList } from "./utils/handleFilterList.js";
import { listeningFilter } from "./components/filter.js";
import { handleTags } from "./components/tags.js";

// Factory
fillRecipesContainer();

// Events
listeningFilter();

// Handle filters and tags
handleFilterList().then(() => handleTags());
