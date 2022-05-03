import { handleData } from "../utils/handleData.js";
import { createOption } from "../factory/filterOption.js";
import { handleTags } from "../components/tags.js";

const filters = document.querySelectorAll(".filter");

export function handleFilterList() {
  const { ingredients, appliances, ustensils } = handleData();

  // Fill filters depend of the recipes display
  filters.forEach((filter, i) => {
    const list = filter.querySelector(".list-group");

    // Datas depend of the filter type
    let datas;
    switch (filter.getAttribute("data-filter")) {
      case "ingredients":
        datas = ingredients;
        break;
      case "appliances":
        datas = appliances;
        break;
      case "ustensils":
        datas = ustensils;
        break;
    }

    // Remove all child of the list
    list.replaceChildren();
    // then create options
    datas.forEach((data) => {
      list.appendChild(createOption(data));
    });
  });

  // Relaunch event on the new options for handle tags
  handleTags();
}
