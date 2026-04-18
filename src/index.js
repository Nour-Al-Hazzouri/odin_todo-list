import './styles.css';
import { createTodoObject } from './todoObjects/createTodoObject.js';
import { getTodoObjects } from './todoObjects/todoObjectsStorage.js';

createTodoObject("Task 1", "Task 1 Description", "11/11/2026", "High");
const todoObjects = getTodoObjects();
alert(todoObjects[0].UUID);