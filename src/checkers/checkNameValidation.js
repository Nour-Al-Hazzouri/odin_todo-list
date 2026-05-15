import {
  getListObjects,
  getTodoObjects,
} from "../objectsComponents/centralObjectsStorage.js";

// Check if same `List` name is used
function checkListNameDuplicate(name) {
  const listItems = getListObjects();
  const listItemsCount = getListObjects().length;
  if (!name) {
    throw Error("Ensure you correctly passed list name");
  } else {
    for (let i = 0; i < listItemsCount; i++) {
      if (listItems[i].Name == name) {
        return true;
      }
    }
  }
  return false;
}

// Check if `Task` name is used
function checkTaskNameDuplicate(name) {
  const taskItems = getTodoObjects();
  const taskItemsCount = getTodoObjects().length;
  if (!name) {
    throw Error("Ensure you correctly passed task name");
  } else {
    for (let i = 0; i < taskItemsCount; i++) {
      if (taskItems[i].Title == name) {
        return true;
      }
    }
  }
  return false;
}

// Prohibit usage of certain names
function validateListName(name) {
  const listItems = getListObjects();
  const listItemsCount = getListObjects().length;
  if (!name) {
    throw Error("Ensure you correctly passed list name");
  } else {
    for (let i = 0; i < listItemsCount; i++) {
      if (name === "Default" || name === "default") {
        return true;
      }
    }
  }
  return false;
}

export { checkListNameDuplicate, checkTaskNameDuplicate, validateListName };
