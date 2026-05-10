function multiToggleAttribute(element, attribute) {
  element.toggleAttribute(attribute);
}

function setLabelAttributes(label, content, id) {
  label.textContent = content;
  label.setAttribute("for", id);
}

export { multiToggleAttribute, setLabelAttributes };
