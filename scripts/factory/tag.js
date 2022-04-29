export function createTag(name, type) {
    // Create tag button
    const tagButton = document.createElement("btn");
    tagButton.className = "btn d-flex align-items-center gap-2 rounded text-white fw-bold py-2 px-3 tag";
    tagButton.setAttribute("type", "button");
    tagButton.setAttribute("aria-label", "Retire le tag");
    tagButton.setAttribute("data-tagType", type);
    tagButton.setAttribute("data-remove", "false");

    // Create tag name
    const tagName = document.createElement("p");
    tagName.className = "mb-0";
    tagName.textContent = name;

    // Create close icon
    const closeIcon = document.createElement("i");
    closeIcon.className = "bi bi-x-circle text-white fs-5";

    // Nest elements
    tagButton.append(tagName, closeIcon);

    return tagButton;
}