import checkInstanceOf from "./checkInstanceOfObject.js";
import { getAllLists, allLists } from "./checkListItems.js";
import { getAllTasks, allTaskItems } from "./checkTaskItems.js";

function checkObjectId(passedObject) {
  getAllLists();
  getAllTasks();
  if (checkInstanceOf(passedObject) === "task") {
    for (const taskObject of allTaskItems) {
      if (passedObject.id === taskObject.id) {
        return passedObject.id;
      }
    }
  } else if (checkInstanceOf(passedObject) === "list") {
    for (const listObject of allLists) {
      if (passedObject.id === listObject.id) {
        return passedObject.id;
      }
    }
  } else {
    throw Error("Can't check id of unknown object.");
  }
}

export default checkObjectId;
