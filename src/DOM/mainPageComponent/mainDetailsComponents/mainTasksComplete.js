import checkObjectOccurrence from "../../../checkers/checkObjectOccurrence.js";
import {
  getListObjects,
  syncListObjects,
  syncTaskObjects,
} from "../../../objectsComponents/centralObjectsStorage.js";
import { appendTaskToList } from "../../../objectsComponents/objectsManipulation.js";
import {
  refreshCreateListItems,
  refreshListItems,
} from "../../sidebarComponent/sidebarRefreshComponents.js";

function completeTask(task) {
  const allListItems = getListObjects();
  const listItemsCount = getListObjects().length;
  const completedList = allListItems[3];

  for (let i = 0; i < listItemsCount; i++) {
    if (i === 0) {
      continue;
    } else {
      if (checkObjectOccurrence(allListItems[i], task)) {
        allListItems[i].removeTaskItem(task);
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

export { completeTask };
