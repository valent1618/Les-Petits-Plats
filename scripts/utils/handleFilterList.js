import { handleData } from "../utils/handleData.js";
import { createOption } from "../factory/filterOption.js";

const filters = document.querySelectorAll(".filter");

export function handleFilterList() {
  const { ingredients, appliances, ustensils } = handleData();

  // Fill filters depend of the recipes display
  // and return promise when is done
  return new Promise((res) => {
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

      setTimeout(() => {
        // Remove all child of the list
        list.replaceChildren();
        // then create options
        datas.forEach((data) => {
          list.appendChild(createOption(data));
        });
        setTimeout(() => {
          // then make appear options
          list.childNodes.forEach((child) => {
            child.setAttribute("data-remove", "false");
          });
          // and resolve if it's the last filter
          if (i === filters.length - 1) {
            res();
          }
        });
      }, 400);
    });
  });
}
