import { fillRecipesContainer } from "./factory/recipeCard.js";
import { handleFilterList, listeningFilter } from "./components/filter.js";
import { disableForms } from "./components/forms.js";
import { listeningSearchBar } from "./components/searchBar.js";

// Factory
fillRecipesContainer();
handleFilterList();

// Events
disableForms();
listeningSearchBar();
listeningFilter();
