import checkObjectOccurrence from "../../../checkers/checkObjectOccurrence.js";
import {
  getListObjects,
  syncListObjects,
  syncTaskObjects,
} from "../../../objectsComponents/centralObjectsStorage.js";
import {
  appendTaskToList,
  removeFromList,
} from "../../../objectsComponents/objectsManipulation.js";
import {
  refreshCreateListItems,
  refreshListItems,
} from "../../sidebarComponent/sidebarRefreshComponents.js";
import { isThisWeek, isToday } from "date-fns";

function toggleCompleteStatus(task) {
  const allListItems = getListObjects();
  const listItemsCount = getListObjects().length;
  const completedList = allListItems[3];

  for (let i = 0; i < listItemsCount; i++) {
    if (i === 0) {
      continue;
    } else {
      if (checkObjectOccurrence(allListItems[i], task)) {
        allListItems[i].removeTaskItem(task.id);
      }
    }
  }
  appendTaskToList(completedList, task);
  task.setCompleteStatus = true;
  syncTaskObjects();
  syncListObjects();
  refreshListItems();
  refreshCreateListItems();
}

function toggleIncompleteStatus(task) {
  const allListItems = getListObjects();
  const todaysList = allListItems[1];
  const thisWeeksList = allListItems[2];
  const completedList = allListItems[3];

  if (isToday(task.DueDate && checkObjectOccurrence(todaysList, task))) {
    todaysList.appendTaskItem(task.id);
  } else if (
    isThisWeek(task.DueDate) &&
    checkObjectOccurrence(thisWeeksList, task)
  ) {
    thisWeeksList.appendTaskItem(task.id);
  }
  removeFromList(completedList, task);
  task.setCompleteStatus = false;
  syncTaskObjects();
  syncListObjects();
  refreshListItems();
  refreshCreateListItems();
}

export { toggleCompleteStatus, toggleIncompleteStatus };
