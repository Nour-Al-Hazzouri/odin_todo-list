import { saveObject } from "./centralObjectsStorage.js";
import TaskObjectsFactory from "../objectsFactories/TaskObjectsFactory.js";
import ListObjectsFactory from "../objectsFactories/ListObjectsFactory.js";

function createTaskObject(
  title,
  description = "empty",
  dueDate,
  priority,
  notes = "empty",
) {
  const taskItem = new TaskObjectsFactory(
    title,
    description,
    dueDate,
    priority,
    notes,
  );
  saveObject(taskItem);
  return taskItem;
}

function createListObject(name) {
  const listItem = new ListObjectsFactory(name);
  saveObject(listItem);
  return listItem;
}

export { createTaskObject, createListObject };
