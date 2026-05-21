import TodoObjectsFactory from "../objectsFactories/TodoObjectsFactory.js";
import ListObjectsFactory from "../objectsFactories/ListObjectsFactory.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";

const todoObjectsArray = [];
const listObjectsArray = [];

// Default list to contain all TODO items - MANDATORY
listObjectsArray[0] = new ListObjectsFactory("Default");
listObjectsArray[1] = new ListObjectsFactory("Today");
listObjectsArray[2] = new ListObjectsFactory("This Week");

// Push object based on type
function saveObject(passedObject) {
  if (checkInstanceOf(passedObject) === "todo") {
    todoObjectsArray.push(passedObject);
    // Default must have all TODO Items
    listObjectsArray[0].appendTodoItem(passedObject);
  } else if (checkInstanceOf(passedObject) === "list") {
    listObjectsArray.push(passedObject);
  } else {
    throw Error("Can't save unknown object.");
  }
}

// Delete object based on type
function deleteObject(passedObject) {
  if (checkInstanceOf(passedObject) === "todo") {
    todoObjectsArray.splice(todoObjectsArray.indexOf(passedObject), 1);
    // Default must not have any deleted TODOs
    listObjectsArray[0].removeTodoItem(passedObject);
  } else if (
    checkInstanceOf(passedObject) === "list" &&
    !(passedObject === listObjectsArray[0])
  ) {
    listObjectsArray.splice(listObjectsArray.indexOf(passedObject), 1);
  } else {
    throw Error("Can't delete 'Default' list");
  }
}

function getTodoObjects() {
  return todoObjectsArray;
}
function getListObjects() {
  return listObjectsArray;
}

export { saveObject, getTodoObjects, getListObjects, deleteObject };
