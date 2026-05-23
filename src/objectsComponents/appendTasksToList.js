import {
  getListObjects,
  getTodoObjects,
  syncListObjects,
} from "./centralObjectsStorage.js";

function appendTasksToList(list, tasks) {
  const taskItems = getTodoObjects();
  const taskItemsCount = getTodoObjects().length;
  let counter = 0;
  for (const taskItem of taskItems) {
    if (taskItem.id === tasks[counter]) {
      list.appendTodoItem(taskItem);
      counter += 1;
    }
  }
  syncListObjects();
}

export default appendTasksToList;
