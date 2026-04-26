import "./styles.css";
import {
  createTodoObject,
  createListObject,
} from "./objectsComponents/createObjects.js";
import {
  getTodoObjects,
  getListObjects,
  deleteObject,
} from "./objectsComponents/centralObjectsStorage.js";
import checkObjectId from "./checkers/checkObjectId.js";
import listObjectsFactory from "./objectsFactories/listObjectsFactory.js";
import checkInstanceOf from "./checkers/checkInstanceOfObject.js";
import checkObjectOccurrence from "./checkers/checkObjectOccurrence.js";
import {
  appendTodoToList,
  removeFromList,
} from "./objectsComponents/objectsManipulation.js";

const todoItem = [];
for (let i = 1; i < 10; i++) {
  todoItem[i] = createTodoObject(
    `Item ${i}`,
    `Description ${i}`,
    "11/11/2026",
    "High",
  );
}

const allListItems = getListObjects();
const allTodoObjects = getTodoObjects();

console.log(allListItems);
deleteObject(allTodoObjects[5]);
