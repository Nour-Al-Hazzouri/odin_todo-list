import { saveObject } from "./centralObjectsStorage.js";
import todoObjectsFactory from "../objectsFactories/todoObjectsFactory.js";
import listObjectsFactory from "../objectsFactories/listObjectsFactory.js";

function createTodoObject(title, description, dueDate, priority, notes) {
  const todoItem = new todoObjectsFactory(
    title,
    description,
    dueDate,
    priority,
    notes
  );
  saveObject(todoItem);
  return todoItem;
}

function createListObject(name) {
  const listItem = new listObjectsFactory(name);
  saveObject(listItem);
  return listItem;
}

export { createTodoObject, createListObject };
