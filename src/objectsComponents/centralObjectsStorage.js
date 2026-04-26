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
  } else if (checkInstanceOf(passedObject) === "list") {
    listObjectsArray.push(passedObject);
  } else {
    throw Error("Can't save unknown object.");
  }
}

function getTodoObjects() {
  return todoObjectsArray;
}
function getListObjects() {
  return listObjectsArray;
}

export { saveObject, getTodoObjects, getListObjects };
