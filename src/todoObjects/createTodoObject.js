import { saveTodoObject } from "./todoObjectsStorage.js";
import todoObjectsFactory from "./todoObjectsFactory.js";

function createTodoObject(title, description, dueDate, priority) {
    const todoItem = new todoObjectsFactory(title, description, dueDate, priority);
    saveTodoObject(todoItem);
}

export { createTodoObject };