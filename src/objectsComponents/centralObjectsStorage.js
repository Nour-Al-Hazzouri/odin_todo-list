import todoObjectsFactory from "../objectsFactories/todoObjectsFactory.js";
import listObjectsFactory from "../objectsFactories/listObjectsFactory.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";

const todoObjectsArray = [];
const listObjectsArray = [];

// Default list to contain all TODO items
listObjectsArray[0] = new listObjectsFactory("Default");

function saveObject(passedObject) {
  if (checkInstanceOf(passedObject) === "todo") {
    todoObjectsArray.push(passedObject);
    listObjectsArray[0].appendTodoItem(passedObject);
  } else if (checkInstanceOf(passedObject) === "list") {
    listObjectsArray.push(passedObject);
  } else {
    throw Error("Can't save unknown object.");
  }
}

function deleteObject(passedObject) {
  if (checkInstanceOf(passedObject) === "todo") {
    todoObjectsArray.splice(todoObjectsArray.indexOf(passedObject), 1);
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
