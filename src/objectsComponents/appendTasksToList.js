import { syncListObjects } from "./centralObjectsStorage.js";
import { getAllTasks, allTaskItems } from "../checkers/checkTaskItems.js";

function appendTasksToList(list, tasks) {
  getAllTasks();
  let counter = 0;
  for (const taskItem of allTaskItems) {
    if (taskItem.id === tasks[counter]) {
      list.appendTaskItem(taskItem.id);
      counter += 1;
    }
  }
  syncListObjects();
}

export default appendTasksToList;
