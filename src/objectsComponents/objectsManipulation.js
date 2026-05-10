import checkInstanceConditionOf from "../checkers/checkInstanceCondition.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";
import checkObjectOccurrence from "../checkers/checkObjectOccurrence.js";
import { saveObject } from "./centralObjectsStorage.js";

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
  if (!checkInstanceConditionOf(list, todoObject)) {
    throw Error("Can't remove from list. Check list and object.");
  } else {
    if (checkObjectOccurrence(list, todoObject)) {
      list.removeTodoItem(todoObject);
    } else {
      throw Error("Item not in list.");
    }
  }
}

export { appendTodoToList, removeFromList };
