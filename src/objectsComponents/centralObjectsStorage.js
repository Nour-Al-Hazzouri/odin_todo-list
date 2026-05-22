import TodoObjectsFactory from "../objectsFactories/TodoObjectsFactory.js";
import ListObjectsFactory from "../objectsFactories/ListObjectsFactory.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";
import { isThisISOWeek, isThisWeek, isToday } from "date-fns";
import { removeFromList } from "./objectsManipulation.js";

const todoObjectsArray = [];
const listObjectsArray = [];

// Default lists - MANDATORY
listObjectsArray[0] = new ListObjectsFactory("Default");
listObjectsArray[1] = new ListObjectsFactory("Today");
listObjectsArray[2] = new ListObjectsFactory("This Week");

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
  } else if (checkInstanceOf(passedObject) === "list") {
    listObjectsArray.push(passedObject);
  } else {
    throw Error("Can't save unknown object.");
  }
}

// Delete object based on type
function deleteObject(passedObject) {
  if (
    (checkInstanceOf(passedObject) === "list" &&
      !(passedObject === listObjectsArray[0])) &&
    !(passedObject === listObjectsArray[1]) &&
    !(passedObject === listObjectsArray[2])
  ) {
    listObjectsArray.splice(listObjectsArray.indexOf(passedObject), 1);
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
}

export {
  saveObject,
  getTodoObjects,
  getListObjects,
  deleteObject,
  deleteTodoObject,
};
