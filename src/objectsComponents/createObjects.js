import { saveObject } from "./centralObjectsStorage.js";
import TodoObjectsFactory from "../objectsFactories/TodoObjectsFactory.js";
import ListObjectsFactory from "../objectsFactories/ListObjectsFactory.js";

function createTodoObject(
  title,
  description = "empty",
  dueDate,
  priority,
  notes = "empty",
) {
  const todoItem = new TodoObjectsFactory(
    title,
    description,
    dueDate,
    priority,
    notes,
  );
  saveObject(todoItem);
  return todoItem;
}

function createListObject(name) {
  const listItem = new ListObjectsFactory(name);
  saveObject(listItem);
  return listItem;
}

export { createTodoObject, createListObject };
