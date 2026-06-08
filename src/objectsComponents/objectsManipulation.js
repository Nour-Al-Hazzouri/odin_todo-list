import checkInstanceConditionOf from "../checkers/checkInstanceCondition.js";
import checkObjectOccurrence from "../checkers/checkObjectOccurrence.js";
import {
  deleteTaskObject,
  getListObjects,
  syncListObjects,
  syncTaskObjects,
} from "./centralObjectsStorage.js";

// Add Tasks in Lists dynamically
function appendTaskToList(list, taskObject) {
  if (!checkInstanceConditionOf(list, taskObject)) {
    throw Error("Can't append to list. Check list and object.");
  } else {
    if (!checkObjectOccurrence(list, taskObject)) {
      list.appendTaskItem(taskObject.id);
      syncListObjects();
    } else {
      throw Error("Item already in list.");
    }
  }
}

// remove Tasks from Lists dynamically
function removeFromList(list, taskObject) {
  const listItems = getListObjects();
  const listItemsCount = listItems.length;

  if (!checkInstanceConditionOf(list, taskObject)) {
    throw Error("Check List and Task objects");
  } else {
    if (checkObjectOccurrence(list, taskObject)) {
      if (list.Name === "Default") {
        deleteTaskObject(taskObject);
        syncTaskObjects();
        for (let i = 0; i < listItemsCount; i++) {
          listItems[i].removeTaskItem(taskObject.id);
        }
      } else {
        list.removeTaskItem(taskObject.id);
      }
      syncListObjects();
    } else {
      throw Error(`Item not in list`);
    }
  }
}

export { appendTaskToList, removeFromList };
