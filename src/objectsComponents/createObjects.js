import { saveObject } from "./centralObjectsStorage.js";
import todoObjectsFactory from "../objectsFactories/todoObjectsFactory.js";
import listObjectsFactory from "../objectsFactories/listObjectsFactory.js";

function createTodoObject(title, description, dueDate, priority) {
    const todoItem = new todoObjectsFactory(title, description, dueDate, priority);
    saveObject(todoItem);
}

function createListObject(name, components) {
    const listItem = new listObjectsFactory(name, components);
    saveObject(listItem);
}

export { createTodoObject, createListObject };