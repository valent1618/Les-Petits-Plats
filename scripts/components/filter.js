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

    // Focus the input when a filter is selected
    filter.addEventListener("click", (e) => {
      // Except if an option is clicked
      if (!e.target.classList.contains("filter-option")) {
        input.focus();
      }
    });

    input.addEventListener("focus", () => {
      // Click on the body for collapse all the filter
      document.body.click();
      // and expand the good one
      filter.setAttribute("data-expanded", "true");
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
