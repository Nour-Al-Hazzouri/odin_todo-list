import elementsCreate from "../elementsCreator.js";

// Universal task creator components
const taskInput = elementsCreate('input', 5);
const taskLabel = elementsCreate('label', 5);
const taskOptions = elementsCreate('option', 3);

export { taskInput, taskLabel, taskOptions };