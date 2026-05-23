import TodoObjectsFactory from "../objectsFactories/TodoObjectsFactory.js";
import ListObjectsFactory from "../objectsFactories/ListObjectsFactory.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";
import { isThisISOWeek, isThisWeek, isToday } from "date-fns";
import { removeFromList } from "./objectsManipulation.js";

let todoObjectsArray = [];
let listObjectsArray = [];

const fetchLists = localStorage.getItem("listObjectsArray");
const fetchTodos = localStorage.getItem("todoObjectsArray");

if (fetchLists) {
  const listParse = JSON.parse(fetchLists);
  listObjectsArray = listParse.map((object) =>
    ListObjectsFactory.fromJSON(object),
  );
} else {
  // Only use defaults if "listObjectsArray" key is missing from storage entirely
  listObjectsArray = [
    new ListObjectsFactory("Default"),
    new ListObjectsFactory("Today"),
    new ListObjectsFactory("This Week"),
  ];
}

// 2. Handle Global Tasks Independently
if (fetchTodos) {
  const taskParse = JSON.parse(fetchTodos);
  todoObjectsArray = taskParse.map((object) =>
    TodoObjectsFactory.fromJSON(object),
  );
} else {
  todoObjectsArray = [];
}

function syncListObjects() {
  const savedListsUpdates = JSON.stringify(listObjectsArray);
  localStorage.setItem("listObjectsArray", savedListsUpdates);
}
function syncTodoObjects() {
  const savedTodoUpdates = JSON.stringify(todoObjectsArray);
  localStorage.setItem("todoObjectsArray", savedTodoUpdates);
}


// Push object based on type
function saveObject(passedObject) {
  if (checkInstanceOf(passedObject) === "todo") {
    todoObjectsArray.push(passedObject);
    // Default must have all TODO Items
    listObjectsArray[0].appendTodoItem(passedObject);
    if (isToday(passedObject.DueDate)) {
      listObjectsArray[1].appendTodoItem(passedObject);
    } else if (isThisWeek(passedObject.DueDate)) {
      listObjectsArray[2].appendTodoItem(passedObject);
    }
    syncTodoObjects();
    syncListObjects();
  } else if (checkInstanceOf(passedObject) === "list") {
    listObjectsArray.push(passedObject);
    syncListObjects();
  } else {
    throw Error("Can't save unknown object.");
  }
}

// Delete object based on type
function deleteObject(passedObject) {
  if (
    checkInstanceOf(passedObject) === "list" &&
    !(passedObject === listObjectsArray[0]) &&
    !(passedObject === listObjectsArray[1]) &&
    !(passedObject === listObjectsArray[2])
  ) {
    listObjectsArray.splice(listObjectsArray.indexOf(passedObject), 1);
    syncListObjects();
  } else {
    throw Error("Can't delete default lists");
  }
}

function getTodoObjects() {
  return todoObjectsArray;
}
function getListObjects() {
  return listObjectsArray;
}
function deleteTodoObject(todoObject) {
  todoObjectsArray.splice(todoObjectsArray.indexOf(todoObject), 1);
  syncTodoObjects();
}

export {
  saveObject,
  getTodoObjects,
  getListObjects,
  deleteObject,
  deleteTodoObject,
  syncListObjects,
  syncTodoObjects,
};
