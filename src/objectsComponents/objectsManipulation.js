import checkInstanceConditionOf from "../checkers/checkInstanceCondition.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";
import checkObjectOccurrence from "../checkers/checkObjectOccurrence.js";
import { deleteTodoObject, getListObjects, saveObject, syncListObjects, syncTodoObjects } from "./centralObjectsStorage.js";

// Add Tasks in Lists dynamically
function appendTodoToList(list, todoObject) {
  if (!checkInstanceConditionOf(list, todoObject)) {
    throw Error("Can't append to list. Check list and object.");
  } else {
    if (!checkObjectOccurrence(list, todoObject)) {
      list.appendTodoItem(todoObject);
    } else {
      throw Error("Item already in list.");
    }
  }
}

// remove Tasks from Lists dynamically
function removeFromList(list, todoObject) {
  const listItems = getListObjects();
  const defaultList = listItems[0];
  const todaysList = listItems[1];
  const thisWeeksList = listItems[2];

  if (!checkInstanceConditionOf(list, todoObject)) {
    throw Error("Can't remove from list. Check list and object.");
  } else {
    if (checkObjectOccurrence(list, todoObject)) {
      list.removeTodoItem(todoObject);
      if (checkObjectOccurrence(defaultList, todoObject)) {
        defaultList.removeTodoItem(todoObject);
      }
      if (checkObjectOccurrence(todaysList, todoObject)) {
        todaysList.removeTodoItem(todoObject);
      }
      if (checkObjectOccurrence(thisWeeksList, todoObject)) {
        thisWeeksList.removeTodoItem(todoObject);
      }
      deleteTodoObject(todoObject);
      syncListObjects();
      syncTodoObjects();
    } else {
      console.log(`Item not in list`);
    }
  }
}

export { appendTodoToList, removeFromList };
