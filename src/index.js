import "./styles.css";
import {
  createTodoObject,
  createListObject,
} from "./objectsComponents/createObjects.js";
import {
  getTodoObjects,
  getListObjects,
} from "./objectsComponents/centralObjectsStorage.js";
import checkObjectId from "./checkers/checkObjectId.js";
import listObjectsFactory from "./objectsFactories/listObjectsFactory.js";
import checkInstanceOf from "./checkers/checkInstanceOfObject.js";
import checkObjectOccurrence from "./checkers/checkObjectOccurrence.js";
import {
  appendTodoToList,
  removeFromList,
} from "./objectsComponents/listsManipulation.js";

const todoItem = createTodoObject(
  `Item 1`,
  `Description 1`,
  "11/11/2026",
  "High",
);
const listItem = createListObject("List 1");
const allListItems = getListObjects();

console.log(checkObjectOccurrence(listItem, todoItem));
appendTodoToList(listItem, todoItem);
console.log(checkObjectOccurrence(listItem, todoItem));
removeFromList(listItem, todoItem);
console.log(checkObjectOccurrence(listItem, todoItem));
removeFromList(listItem, todoItem);
console.log(checkObjectOccurrence(listItem, todoItem));
