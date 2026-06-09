import { getAllLists, allLists } from "./checkListItems.js";
import { getAllTasks, allTaskItems } from "./checkTaskItems.js";

// Return object based on type and id
function checkReturnedObject(passedId, objectType) {
  getAllLists();
  getAllTasks();
  if (objectType === "task") {
    for (const taskObject of allTaskItems) {
      if (passedId === taskObject.id) {
        return taskObject;
      }
    }
  } else if (objectType === "list") {
    for (const listObject of allLists) {
      if (passedId === listObject.id) {
        return listObject;
      }
    }
  }
}

export default checkReturnedObject;
