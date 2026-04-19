import './styles.css';
import { createTodoObject, createListObject } from './objectsComponents/createObjects.js';
import { getTodoObjects, getListObjects } from './objectsComponents/centralObjectsStorage.js';
const todoItem = createTodoObject("Task 1", "Description", "11/11/2025", "High");
const listItem = createListObject("Default", getTodoObjects());

console.log(getTodoObjects());
console.log(getListObjects());