import { recipes } from "../../data/recipes.js";

const recipesContainer = document.querySelector(".recipes-container");

export function fillRecipesContainer() {
    recipes.forEach((recipe) => {
        // Create card
        const card = document.createElement("div");
        card.className = "card recipe";
        card.setAttribute("data-remove", "false");
        
        // Create img
        const img = document.createElement("img");
        img.setAttribute("src", "assets/poulet.jpeg");
        img.className = "card-img-top";
        img.setAttribute("alt", recipe.name);
    
        // Create card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body";
    
        // Create title container
        const titleContainer = document.createElement("div");
        titleContainer.className = "card-title d-flex justify-content-between align-items-center gap-3 mb-0";
    
        // Create title
        const nameRecipe = document.createElement("h2");
        nameRecipe.className = "mb-0 fs-5 fw-normal";
        nameRecipe.textContent = recipe.name;
    
        // Create time container
        const timeContainer = document.createElement("div");
        timeContainer.className = "d-flex align-items-center gap-2";
    
        // Create timeIcon
        const timeIcon = document.createElement("i");
        timeIcon.className = "bi bi-clock fs-4";
    
        // Create time
        const time = document.createElement("h3");
        time.className = "mb-0 fs-5";
        time.textContent =  `${recipe.time} min`;
    
        // Create info container
        const infoContainer = document.createElement("div");
        infoContainer.className = "row py-4";
    
        // Create list container
        const listContainer = document.createElement("div");
        listContainer.className = "col";

        // Create list of ingredients
        const list = document.createElement("ul");
        list.className = "ingredient-list";
        
        recipe.ingredients.forEach((ingredient) => {
            // Create ingredient
            const ingredientItem = document.createElement("li");
            ingredientItem.className = "ingredient";
            ingredientItem.setAttribute("data-name", ingredient.ingredient);
    
            // Create name ingredient
            const nameIngr = document.createElement("span");
            nameIngr.className = "fw-bold ingredient-name";
            nameIngr.textContent = ingredient.ingredient;
    
            if(ingredient.quantity) {
                nameIngr.textContent += ": ";
                ingredientItem.textContent = ingredient.quantity;
    
                if(ingredient.unit) {
                    switch(ingredient.unit) {
                        case "grammes":
                            ingredient.unit = "g";
                            break;
                        case "cuillères à soupe":
                        case "cuillère à soupe":
                            ingredient.quantity > 1 ? ingredient.unit = " cuillères" : ingredient.unit = " cuillère";
                            break;
                        default:
                            if(ingredient.unit.length > 3) {
                                ingredient.unit = ` ${ingredient.unit}`
                            }
                    }
                    ingredientItem.textContent += ingredient.unit;
                }
            }
    
            ingredientItem.prepend(nameIngr);
            list.appendChild(ingredientItem);
        })
    
        // Create description container
        const descriptionContainer = document.createElement("div");
        descriptionContainer.className = "col";
    
        // Create description
        const description = document.createElement("p");
        description.className = "mb-0 card-description";
        description.textContent = recipe.description;
    
    
        // Nest elements
        listContainer.appendChild(list);
        descriptionContainer.appendChild(description);
        infoContainer.append(listContainer, descriptionContainer);
        timeContainer.append(timeIcon, time);
        titleContainer.append(nameRecipe, timeContainer);
        cardBody.append(titleContainer, infoContainer);
        card.append(img, cardBody);
        recipesContainer.appendChild(card);
    })
}