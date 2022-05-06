const recipesContainer = document.querySelector(".recipes-container");
const message = document.getElementById("no-recipe-message");

export function handleNoRecipeMessage(allRemoved, titles) {
  console.log(allRemoved);
  if (allRemoved) {
    recipesContainer.setAttribute("data-no-recipe", "true");
    message.textContent =
      "Aucune recette ne correspond à vos critères... Vous pouvez chercher : ";
    for (let i = 0; i < titles.length && i < 3; i++) {
      if (i === titles.length - 1 || i === 2) {
        if (i > 0) {
          message.textContent += `"${titles[i]}", etc...`;
        } else {
          message.textContent += `"${titles[i]}".`;
        }
      } else {
        message.textContent += `"${titles[i]}", `;
      }
    }
  } else {
    recipesContainer.setAttribute("data-no-recipe", "false");
  }
}
