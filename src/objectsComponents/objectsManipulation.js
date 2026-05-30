import checkInstanceConditionOf from "../checkers/checkInstanceCondition.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";
import checkObjectOccurrence from "../checkers/checkObjectOccurrence.js";
import {
  deleteTodoObject,
  getListObjects,
  saveObject,
  syncListObjects,
  syncTodoObjects,
} from "./centralObjectsStorage.js";

// Add Tasks in Lists dynamically
function appendTodoToList(list, todoObject) {
  if (!checkInstanceConditionOf(list, todoObject)) {
    throw Error("Can't append to list. Check list and object.");
  } else {
    if (!checkObjectOccurrence(list, todoObject)) {
      list.appendTodoItem(todoObject);
      syncListObjects();
    } else {
      throw Error("Item already in list.");
    }
  }
}

// remove Tasks from Lists dynamically
function removeFromList(list, todoObject) {
  const listItems = getListObjects();
  const listItemsCount = listItems.length;

  if (!checkInstanceConditionOf(list, todoObject)) {
    throw Error("Check List and Task objects");
  } else {
    if (checkObjectOccurrence(list, todoObject)) {
      if (list.Name === 'Default') {
        deleteTodoObject(todoObject);
        syncTodoObjects();
        for (let i = 0; i < listItemsCount; i++) {
          listItems[i].removeTodoItem(todoObject);
        }
      } else {
        list.removeTodoItem(todoObject);
      }
      syncListObjects();
    } else {
      throw Error(`Item not in list`);
    }
  }
}

export { appendTodoToList, removeFromList };
