import TaskObjectsFactory from "../objectsFactories/TaskObjectsFactory.js";
import ListObjectsFactory from "../objectsFactories/ListObjectsFactory.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";
import { isThisWeek, isToday } from "date-fns";

let taskObjectsArray = [];
let listObjectsArray = [];

const fetchLists = localStorage.getItem("listObjectsArray");
const fetchTasks = localStorage.getItem("taskObjectsArray");

if (fetchTasks) {
  const taskParse = JSON.parse(fetchTasks);
  taskObjectsArray = taskParse.map((object) =>
    TaskObjectsFactory.fromJSON(object),
  );
} else {
  taskObjectsArray = [];
}

if (fetchLists) {
  const listParse = JSON.parse(fetchLists);
  listObjectsArray = listParse.map((object) =>
    ListObjectsFactory.fromJSON(object, taskObjectsArray),
  );
} else {
  // Only use defaults if "listObjectsArray" key is missing from storage entirely
  listObjectsArray = [
    new ListObjectsFactory("Default"),
    new ListObjectsFactory("Today"),
    new ListObjectsFactory("This Week"),
    new ListObjectsFactory("Completed"),
  ];
}

function syncListObjects() {
  const savedListsUpdates = JSON.stringify(listObjectsArray);
  localStorage.setItem("listObjectsArray", savedListsUpdates);
}
function syncTaskObjects() {
  const savedTaskUpdates = JSON.stringify(taskObjectsArray);
  localStorage.setItem("taskObjectsArray", savedTaskUpdates);
}

// Push object based on type
function saveObject(passedObject) {
  if (checkInstanceOf(passedObject) === "task") {
    taskObjectsArray.push(passedObject);
    // Default must have all TODO Items
    listObjectsArray[0].appendTaskItem(passedObject.id);
    if (isToday(passedObject.DueDate)) {
      listObjectsArray[1].appendTaskItem(passedObject.id);
    } else if (isThisWeek(passedObject.DueDate)) {
      listObjectsArray[2].appendTaskItem(passedObject.id);
    }
    syncTaskObjects();
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
    !(passedObject === listObjectsArray[2]) &&
    !(passedObject === listObjectsArray[3])
  ) {
    listObjectsArray.splice(listObjectsArray.indexOf(passedObject), 1);
    syncListObjects();
  } else {
    throw Error("Can't delete default lists");
  }
}

function getTaskObjects() {
  return taskObjectsArray;
}
function getListObjects() {
  return listObjectsArray;
}

function deleteTaskObject(taskObject) {
  taskObjectsArray.splice(taskObjectsArray.indexOf(taskObject), 1);
  syncTaskObjects();
}

export {
  saveObject,
  getTaskObjects,
  getListObjects,
  deleteObject,
  deleteTaskObject,
  syncListObjects,
  syncTaskObjects,
};
