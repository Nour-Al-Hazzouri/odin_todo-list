import checkObjectOccurrence from "../../../checkers/checkObjectOccurrence.js";
import {
  syncListObjects,
  syncTaskObjects,
} from "../../../objectsComponents/centralObjectsStorage.js";
import {
  getAllLists,
  allLists,
  allListsCount,
} from "../../../checkers/checkListItems.js";
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
  getAllLists();
  const completedList = allLists[3];

  for (let i = 0; i < allListsCount; i++) {
    if (i === 0) {
      continue;
    } else {
      if (checkObjectOccurrence(allLists[i], task)) {
        allLists[i].removeTaskItem(task.id);
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
  getAllLists();
  const todaysList = allLists[1];
  const thisWeeksList = allLists[2];
  const completedList = allLists[3];

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
