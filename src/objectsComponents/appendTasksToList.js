import { getTaskObjects, syncListObjects } from "./centralObjectsStorage.js";

function appendTasksToList(list, tasks) {
  const taskItems = getTaskObjects();
  let counter = 0;
  for (const taskItem of taskItems) {
    if (taskItem.id === tasks[counter]) {
      list.appendTaskItem(taskItem);
      counter += 1;
    }
  }
  syncListObjects();
}

export default appendTasksToList;
