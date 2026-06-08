import checkObjectOccurrence from "../../../checkers/checkObjectOccurrence.js";
import {
  getListObjects,
  syncListObjects,
  syncTaskObjects,
} from "../../../objectsComponents/centralObjectsStorage.js";
import { removeFromList } from "../../../objectsComponents/objectsManipulation.js";
import {
  refreshCreateListItems,
  refreshListItems,
} from "../../sidebarComponent/sidebarRefreshComponents.js";
import { isThisWeek, isToday } from "date-fns";

function deCompleteTask(task) {
  const allListItems = getListObjects();
  const todaysList = allListItems[1];
  const thisWeeksList = allListItems[2];
  const completedList = allListItems[3];

  if (isToday(task.DueDate && checkObjectOccurrence(todaysList, task))) {
    todaysList.appendTaskItem(task);
  } else if (
    isThisWeek(task.DueDate) &&
    checkObjectOccurrence(thisWeeksList, task)
  ) {
    thisWeeksList.appendTaskItem(task);
  }
  removeFromList(completedList, task);
  task.setCompleteStatus = false;
  syncTaskObjects();
  syncListObjects();
  refreshListItems();
  refreshCreateListItems();
}

export { deCompleteTask };
