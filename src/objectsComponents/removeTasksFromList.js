import {
  getListObjects,
  getTodoObjects,
} from "./centralObjectsStorage.js";

function removeTasksFromList(list, tasks) {
  const taskItems = getTodoObjects();
  const taskItemsCount = getTodoObjects().length;
  let counter = 0;
  for (const taskItem of taskItems) {
    if (taskItem.id === tasks[counter] && list.Name != 'Default') {
      list.removeTodoItem(taskItem);
      counter += 1;
    } else {
      alert("Can't remove tasks from default list")
    }
  }
}

export default removeTasksFromList;