import { ingredients, appliances, ustensils } from "../utils/handleData.js";

const filters = document.querySelectorAll(".filter");

export function fillFilterList() {
    filters.forEach((filter) => {
        const list = filter.querySelector(".list-group");

        switch(filter.getAttribute("data-filter")) {
            case "ingredients":
                ingredients.forEach((ingredient) => {
                    const li = document.createElement("li");
                    li.textContent = ingredient;
                    list.appendChild(li);
                })
                break;
            case "appliances":
                appliances.forEach((appliance) => {
                    const li = document.createElement("li");
                    li.textContent = appliance;
                    list.appendChild(li);
                })
                break;
            case "ustensils":
                ustensils.forEach((ustensil) => {
                    const li = document.createElement("li");
                    li.textContent = ustensil;
                    list.appendChild(li);
                })
                break;
        }
    })
}