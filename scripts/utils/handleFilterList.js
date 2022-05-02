import { handleData } from "../utils/handleData.js";
import { createOption } from "../factory/filterOption.js";

const filters = document.querySelectorAll(".filter");

export function handleFilterList() {
  const { ingredients, appliances, ustensils } = handleData();

  return new Promise((res) => {
    filters.forEach((filter, i) => {
      const list = filter.querySelector(".list-group");
      const options = filter.querySelectorAll(".filter-option");

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
        list.replaceChildren();
        datas.forEach((data) => {
          list.appendChild(createOption(data));
        });
        setTimeout(() => {
          list.childNodes.forEach((child) => {
            child.setAttribute("data-remove", "false");
          });
        });
      }, 400);
    });

    setTimeout(() => {
      res();
    }, 500);
  });
}
