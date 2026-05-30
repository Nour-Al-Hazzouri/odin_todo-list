import checkObjectOccurrence from "../../../checkers/checkObjectOccurrence.js";
import {
  deleteObject,
  getListObjects,
  syncListObjects,
  syncTodoObjects,
} from "../../../objectsComponents/centralObjectsStorage.js";
import {
  appendTodoToList,
  removeFromList,
} from "../../../objectsComponents/objectsManipulation.js";
import {
  refreshCreateListItems,
  refreshListItems,
} from "../../sidebarComponent/sidebarRefreshComponents.js";
import { deleteTodoObject } from "../../../objectsComponents/centralObjectsStorage.js";
import { isThisWeek, isToday } from "date-fns";

function deCompleteTask(task) {
  const allListItems = getListObjects();
  const todaysList = allListItems[1];
  const thisWeeksList = allListItems[2];
  const completedList = allListItems[3];
  
  if (isToday(task.DueDate && checkObjectOccurrence(todaysList, task))) {
    todaysList.appendTodoItem(task);
  } else if (
    isThisWeek(task.DueDate) &&
    checkObjectOccurrence(thisWeeksList, task)
  ) {
    thisWeeksList.appendTodoItem(task);
  }
  removeFromList(completedList, task);
  task.setCompleteStatus = false
  syncTodoObjects()
  syncListObjects();
  refreshListItems();
  refreshCreateListItems();
}

export { deCompleteTask };
