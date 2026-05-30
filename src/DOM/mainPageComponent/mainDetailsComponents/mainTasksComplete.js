import checkObjectOccurrence from "../../../checkers/checkObjectOccurrence.js";
import {
  deleteObject,
  getCompletedTodosObjects,
  getListObjects,
  saveCompletedObject,
  syncCompletedTodosObjects,
  syncListObjects,
  syncTodoObjects,
} from "../../../objectsComponents/centralObjectsStorage.js";
import { appendTodoToList } from "../../../objectsComponents/objectsManipulation.js";
import {
  refreshCreateListItems,
  refreshListItems,
} from "../../sidebarComponent/sidebarRefreshComponents.js";
import { deleteTodoObject } from "../../../objectsComponents/centralObjectsStorage.js";

function completeTask(task) {
  const allListItems = getListObjects();
  const listItemsCount = getListObjects().length;
  const todaysList = allListItems[1];
  const thisWeeksList = allListItems[2];
  const completedList = allListItems[3];
  
  for (let i = 0; i < listItemsCount; i++) {
    if (i === 0) {
      continue;
    } else {
      if (checkObjectOccurrence(allListItems[i], task)) {
        allListItems[i].removeTodoItem(task);
      }
    }
  }
  appendTodoToList(completedList, task);
  task.setCompleteStatus = true;
  syncTodoObjects()
  syncListObjects();
  refreshListItems();
  refreshCreateListItems();
}

export { completeTask };
