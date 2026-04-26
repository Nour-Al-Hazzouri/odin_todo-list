import checkInstanceConditionOf from "../checkers/checkInstanceCondition.js";
import checkInstanceOf from "../checkers/checkInstanceOfObject.js";
import checkObjectOccurrence from "../checkers/checkObjectOccurrence.js";
import { saveObject } from "./centralObjectsStorage.js";

function appendTodoToList(list, todoItem) {
  if (!checkInstanceConditionOf(list, todoItem)) {
    throw Error("Can't append to list. Check list and object.");
  } else {
    if (!checkObjectOccurrence(list, todoItem)) {
      list.appendTodoItem(todoItem);
    } else {
      throw Error("Item already in list.");
    }
  }
}

function removeFromList(list, todoItem) {
  if (!checkInstanceConditionOf(list, todoItem)) {
    throw Error("Can't remove from list. Check list and object.");
  } else {
    if (checkObjectOccurrence(list, todoItem)) {
      list.removeTodoItem(todoItem);
    } else {
      throw Error("Item not in list.");
    }
  }
}

export { appendTodoToList, removeFromList };
