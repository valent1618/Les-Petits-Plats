import { ingredients, appliances, ustensils } from "../utils/handleData.js";

const filters = document.querySelectorAll(".filter");

export function fillFilterList() {
    filters.forEach((filter) => {
        const list = filter.querySelector(".list-group");

        switch(filter.getAttribute("data-filter")) {
            case "ingredients":
                ingredients.forEach((ingredient) => {
                    list.appendChild(createOption(ingredient));
                })
                break;
            case "appliances":
                appliances.forEach((appliance) => {
                    list.appendChild(createOption(appliance));
                })
                break;
            case "ustensils":
                ustensils.forEach((ustensil) => {
                    list.appendChild(createOption(ustensil));
                })
                break;
        }
    })
}

function createOption(option) {
    const li = document.createElement("li");
    li.className = "filter-option";
    li.textContent = option;

    return li;
}