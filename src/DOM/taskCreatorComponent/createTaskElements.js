import elementsCreate from "../elementsCreator.js";

// Universal task creator components
const mainInput = elementsCreate('input', 5);
const mainLabel = elementsCreate('label', 5);
const mainOptions = elementsCreate('option', 3);

export { mainInput, mainLabel, mainOptions };