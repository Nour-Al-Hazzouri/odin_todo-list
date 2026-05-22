import {
  getListObjects,
  getTodoObjects,
} from "../../objectsComponents/centralObjectsStorage.js";
import elementsCreate from "../elementsCreator.js";
import { setLabelAttributes } from "../toggleAttribute.js";
import removeChildren from "../removeChildren.js";
import {
  renderListOptions,
  renderTaskOptions,
} from "../mainPageComponent/mainOptionsComponents/mainOptionsPage.js";
import removeAllChildNodes from "../removeChildren.js";
import checkReturnedObject from "../../checkers/checkReturnedObject.js";
import { renderMainListsDetails } from "../mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js";

// Refresh Tasks list in 'create list' dialog
function refreshCreateListItems() {
  // Get required components
  const emptyMessage = document.createElement("p");
  const todoItems = getTodoObjects();
  const todoItemsCount = getTodoObjects().length;
  const createlistsContainer = document.querySelector("#create-lists-div");

  // No Tasks' case
  removeAllChildNodes(createlistsContainer);
  if (todoItemsCount === 0) {
    emptyMessage.textContent = "No Created Tasks";
    createlistsContainer.append(emptyMessage);
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
      createlistsContainer.append(checkboxContainer[i]);
    }
  }
}

function refreshCreateTaskItems() {
  const listsContainer = document.querySelector("#lists-container");
  removeAllChildNodes(listsContainer);
  const emptyMessage = document.createElement("p");
  emptyMessage.textContent = "No Created Lists";
  const listItems = getListObjects();
  const listItemsLength = getListObjects().length;
  if (listItemsLength === 1) {
    listsContainer.append(emptyMessage);
  } else {
    const listElementDiv = elementsCreate("div", listItemsLength);
    const listElementLabel = elementsCreate("label", listItemsLength);
    const listElementInput = elementsCreate("input", listItemsLength);
    for (let i = 0; i < listItemsLength; i++) {
      if (
        listItems[i].Name === "Default" ||
        listItems[i].Name === "Today" ||
        listItems[i].Name === "This Week"
      ) {
        continue;
      } else {
        setLabelAttributes(listElementLabel[i], listItems[i].Name, `list-${i}`);
        listElementInput[i].setAttribute("type", "checkbox");
        listElementInput[i].name = "list";
        listElementInput[i].id = `list-${i}`;
        listElementInput[i].value = listItems[i].id;
        listElementLabel[i].for = `list-${i}`;
        listElementDiv[i].append(listElementInput[i], listElementLabel[i]);
        listsContainer.append(listElementDiv[i]);
      }
    }
  }
}

// Refresh Lists' list
function refreshListItems() {
  // Get required components
  const listItems = getListObjects();
  const listItemsCount = getListObjects().length;
  const listsContainer = document.querySelector(".lists-div");
  const usersContainer = document.querySelector(".user-lists-div");

  // Append List objects based on their number
  const listItemsContainer = elementsCreate("div", listItemsCount);
  const userItemsContainer = elementsCreate("div", listItemsCount);
  const listButtons = elementsCreate("button", listItemsCount);
  const optionsButtons = elementsCreate("button", listItemsCount);

  // Ensure no duplicates are found then append Lists.
  removeChildren(listsContainer);
  removeChildren(usersContainer);
  for (let i = 0; i < listItemsCount; i++) {
    listButtons[i].textContent =
      `${listItems[i].Name} - ${listItems[i].Items.length}`;
    listButtons[i].addEventListener("click", () => {
      renderMainListsDetails(listItems[i].id);
    });
    optionsButtons[i].textContent = "...";
    optionsButtons[i].addEventListener("click", () => {
      renderListOptions(listItems[i].id);
      refreshListsRemovedTasks(listItems[i].id);
    });
    if (i === 0 || i === 1 || i === 2) {
      listsContainer.append(listItemsContainer[i]);
      listItemsContainer[i].append(listButtons[i], optionsButtons[i]);
    } else {
      userItemsContainer[i].append(listButtons[i], optionsButtons[i]);
      usersContainer.append(userItemsContainer[i]);
    }
  }
}

function refreshListsRemovedTasks(id) {
  const emptyMessage = document.createElement("p");
  emptyMessage.textContent = "No Added Tasks";
  const listItemsDiv = document.querySelector("#list-items");
  removeAllChildNodes(listItemsDiv);
  const passedList = checkReturnedObject(id, "list");
  const listItems = passedList.Items;
  const listItemsLength = passedList.Items.length;
  if (listItemsLength === 0) {
    listItemsDiv.append(emptyMessage);
  }
  const listOptions = elementsCreate("input", listItemsLength);
  const labelOptions = elementsCreate("label", listItemsLength);
  const tasksDivs = elementsCreate("div", listItemsLength);
  for (let i = 0; i < listItemsLength; i++) {
    listOptions[i].setAttribute("type", "checkbox");
    listOptions[i].value = listItems[i].id;
    listOptions[i].name = "task";
    listOptions[i].id = `task-${i}`;
    labelOptions[i].setAttribute("for", `task-${i}`);
    labelOptions[i].textContent = listItems[i].Title;
    tasksDivs[i].append(listOptions[i], labelOptions[i]);
    listItemsDiv.append(tasksDivs[i]);
  }
}

function refreshAllLists() {
  refreshListItems();
  refreshTaskItems();
}

export {
  refreshCreateListItems,
  refreshCreateTaskItems,
  refreshListItems,
  refreshListsRemovedTasks,
};
