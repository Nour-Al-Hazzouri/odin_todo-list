import { getAllLists, allLists, allListsCount } from "./checkListItems.js";
import { getAllTasks, allTaskItems, taskItemsCount } from "./checkTaskItems.js";

// Check if same `List` name is used
function checkListNameDuplicate(name) {
  getAllLists();
  if (!name) {
    throw Error("Ensure you correctly passed list name");
  } else {
    for (let i = 0; i < allListsCount; i++) {
      if (allLists[i].Name == name) {
        return true;
      }
    }
  }
  return false;
}

// Check if `Task` name is used
function checkTaskNameDuplicate(name) {
  getAllTasks();
  if (!name) {
    throw Error("Ensure you correctly passed task name");
  } else {
    for (let i = 0; i < taskItemsCount; i++) {
      if (allTaskItems[i].Title == name) {
        return true;
      }
    }
  }
  return false;
}

// Prohibit usage of certain names
function validateListName(name) {
  getAllLists();
  if (!name) {
    throw Error("Ensure you correctly passed list name");
  } else {
    for (let i = 0; i < allListsCount; i++) {
      if (name === "Default" || name === "default") {
        return true;
      }
    }
  }
  return false;
}

export { checkListNameDuplicate, checkTaskNameDuplicate, validateListName };
