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
import { add } from 'date-fns';


const todoItem = [];
for (let i = 0; i < 10; i++) {
  todoItem[i] = createTodoObject(
    `Item ${i}`,
    `Description ${i}`,
    "2026",
    "High",
  );
}
const listItem = createListObject("List1");
const allListItems = getListObjects();
const allTodoObjects = getTodoObjects();

console.log(todoItem);