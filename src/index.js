import './styles.css';
import { createTodoObject, createListObject } from './objectsComponents/createObjects.js';
import { getTodoObjects, getListObjects } from './objectsComponents/centralObjectsStorage.js';
import checkObjectId from './checkers/checkObjectId.js';

const listItem = createListObject("List 1", getTodoObjects());
const allTodoObjects = getTodoObjects();
const allListObjects = getListObjects();

console.log(allListObjects[1]);
console.log(checkObjectId(allListObjects[1]));