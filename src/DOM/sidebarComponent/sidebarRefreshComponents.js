import {
  getListObjects,
  getTodoObjects,
} from "../../objectsComponents/centralObjectsStorage.js";
import { createTodoObject } from "../../objectsComponents/createObjects.js";
import elementsCreate from "../elementsCreator.js";
import { setLabelAttributes } from "../toggleAttribute.js";
import removeChildren from "../removeChildren.js";
import {
  renderListOptions,
  renderTaskOptions,
} from "../mainPageComponent/mainOptionsPage.js";

// Refresh Tasks list in 'create list' dialog
function refreshCreateListItems() {
  // Get required components
  const emptyMessage = document.createElement("p");
  const todoItems = getTodoObjects();
  const todoItemsCount = getTodoObjects().length;
  const createListsDiv = document.querySelector("#create-lists-div");

  // No Tasks' case
  removeChildren(createListsDiv);
  if (todoItemsCount === 0) {
    emptyMessage.textContent = "No Created Tasks";
    createListsDiv.append(emptyMessage);
  } else {
    const checkboxLabels = elementsCreate("label", todoItemsCount);
    const checkboxElements = elementsCreate("input", todoItemsCount);
    const checkboxContainer = elementsCreate("div", todoItemsCount);

    // Avoid duplicates then append tasks based on their number
    for (let i = 0; i < todoItemsCount; i++) {
      setLabelAttributes(checkboxLabels[i], todoItems[i].Title, `task-${i}`);
      checkboxElements[i].setAttribute("type", "checkbox");
      checkboxElements[i].setAttribute("id", `task-${i}`);
      checkboxElements[i].setAttribute("name", "task");
      checkboxElements[i].setAttribute("value", `${todoItems[i].id}`);
      checkboxContainer[i].append(checkboxElements[i], checkboxLabels[i]);
      createListsDiv.append(checkboxContainer[i]);
    }
  }
}

// Refresh Lists' list
function refreshListItems() {
  // Get required components
  const listItems = getListObjects();
  const listItemsCount = getListObjects().length;
  const listsDiv = document.querySelector(".lists-div");

  // Append List objects based on their number
  const listContainer = elementsCreate("div", listItemsCount);
  const listButtons = elementsCreate("button", listItemsCount);
  const optionsButtons = elementsCreate("button", listItemsCount);

  // Ensure no duplicates are found then append Lists.
  removeChildren(listsDiv);
  for (let i = 0; i < listItemsCount; i++) {
    listButtons[i].textContent = listItems[i].Name;
    optionsButtons[i].textContent = "...";
    optionsButtons[i].addEventListener("click", () => {
      renderListOptions(listItems[i].id);
    });
    if (i === 0) {
      listContainer[i].append(listButtons[i]);
    } else {
      listContainer[i].append(listButtons[i], optionsButtons[i]);
    }
    listsDiv.append(listContainer[i]);
  }
}

function refreshTaskItems() {
  // Get required components
  const taskItems = getTodoObjects();
  const taskItemsCount = getTodoObjects().length;
  const tasksDiv = document.querySelector(".todos-div");

  // Append List objects based on their number
  const taskContainer = elementsCreate("div", taskItemsCount);
  const taskButtons = elementsCreate("button", taskItemsCount);
  const optionsButtons = elementsCreate("button", taskItemsCount);

  // Ensure no duplicates are found then append Lists.
  removeChildren(tasksDiv);
  for (let i = 0; i < taskItemsCount; i++) {
    taskButtons[i].textContent = taskItems[i].Title;
    optionsButtons[i].textContent = "...";
    optionsButtons[i].addEventListener("click", () =>
      renderTaskOptions(taskItems[i].id),
    );
    taskContainer[i].append(taskButtons[i], optionsButtons[i]);
    tasksDiv.append(taskContainer[i]);
  }
}

function refreshAllLists() {
  refreshListItems();
  refreshTaskItems();
}

export {
  refreshCreateListItems,
  refreshListItems,
  refreshTaskItems,
  refreshAllLists,
};
