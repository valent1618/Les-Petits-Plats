import { handleData } from "../utils/handleData.js";
import { createOption } from "../factory/filterOption.js";
import { handleTags } from "./tags.js";

const filters = document.querySelectorAll(".filter");

export function listeningFilter() {
  // Add document event for collapse filter when is clicked out
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".filter")) {
      filters.forEach((filter) => {
        if (filter.getAttribute("data-expanded") === "true") {
          filter.setAttribute("data-expanded", "false");
          filter.querySelector("input").value = "";
          filter.querySelector("input").dispatchEvent(new Event("input"));
        }
      });
    }
  });
  // Collapse filter when escape is pressed
  document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      document.body.click();
      document.getElementById("search-recipe").focus();
    }
  });

  filters.forEach((filter) => {
    const input = filter.querySelector("input");
    const filterForm = filter.querySelector(".filter-form");

    input.addEventListener("focus", () => {
      // Click on the body for collapse all the filter
      document.body.click();
      // and expand the good one
      filter.setAttribute("data-expanded", "true");
    });

    // Allow the arrow (form::after) to become clickable
    filterForm.addEventListener("click", (e) => {
      if (e.target === filterForm) {
        filter.getAttribute("data-expanded") === "true"
          ? document.body.click()
          : input.focus();
      }
    });

    // Handle the input for filter the options
    input.addEventListener("input", (e) => {
      const options = filter.querySelectorAll(".filter-option");
      options.forEach((option) => {
        if (
          !option.textContent
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        ) {
          option.style.display = "none";
        } else {
          option.style.display = "block";
        }
      });
    });
  });
}

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
