import { getTaskObjects } from "../objectsComponents/centralObjectsStorage.js";

let allTaskItems;
let taskItemsCount;

function getAllTasks() {
  allTaskItems = getTaskObjects();
  taskItemsCount = getTaskObjects().length;
}

export { getAllTasks, allTaskItems, taskItemsCount };
