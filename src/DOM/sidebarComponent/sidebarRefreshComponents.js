import elementsCreate from "../elementsCreator.js";
import { setLabelAttributes } from "../toggleAttribute.js";
import removeChildren from "../removeChildren.js";
import { renderListOptions } from "../mainPageComponent/mainOptionsComponents/mainOptionsPage.js";
import removeAllChildNodes from "../removeChildren.js";
import { renderMainListsDetails } from "../mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js";
import checkObjectOccurrence from "../../checkers/checkObjectOccurrence.js";
import {
  getAllLists,
  allLists,
  allListsCount,
  checkListItems,
  listLength,
  returnedList,
  listItems,
} from "../../checkers/checkListItems.js";
import {
  getAllTasks,
  allTaskItems,
  taskItemsCount,
} from "../../checkers/checkTaskItems.js";
import {
  noCreatedTasksMessage,
  noCreatedListsMessage,
  noAddedTasksMessage,
  noTasksToAddMessage,
  cantAddToDefaultMessage,
} from "./emptyObjects.js";
import checkReturnedObject from "../../checkers/checkReturnedObject.js";

// Refresh Tasks list in 'create list' dialog
function refreshCreateListItems() {
  // Get required components
  getAllLists();
  getAllTasks();
  const createListsContainer = document.querySelector("#create-lists-div");
  // No Tasks' case
  removeAllChildNodes(createListsContainer);

  if (taskItemsCount === 0 || taskItemsCount === allLists[3].Items.length) {
    createListsContainer.append(noCreatedTasksMessage);
  } else {
    const checkboxLabels = elementsCreate("label", taskItemsCount);
    const checkboxElements = elementsCreate("input", taskItemsCount);
    const checkboxContainer = elementsCreate("div", taskItemsCount);
    for (let i = 0; i < taskItemsCount; i++) {
      if (allTaskItems[i].CompleteStatus === true) {
        continue;
      } else {
        setLabelAttributes(
          checkboxLabels[i],
          allTaskItems[i].Title,
          `task-${i}`,
        );
        checkboxElements[i].setAttribute("type", "checkbox");
        checkboxElements[i].setAttribute("id", `task-${i}`);
        checkboxElements[i].setAttribute("name", "task");
        checkboxElements[i].setAttribute("value", `${allTaskItems[i].id}`);
        checkboxContainer[i].append(checkboxElements[i], checkboxLabels[i]);
        createListsContainer.append(checkboxContainer[i]);
      }
    }
  }
}

function refreshCreateTaskItems() {
  const listsContainer = document.querySelector("#lists-container");
  removeAllChildNodes(listsContainer);
  getAllLists();
  if (allListsCount === 4) {
    listsContainer.append(noCreatedListsMessage);
  } else {
    const listElementDiv = elementsCreate("div", allListsCount);
    const listElementLabel = elementsCreate("label", allListsCount);
    const listElementInput = elementsCreate("input", allListsCount);
    for (let i = 0; i < allListsCount; i++) {
      if (
        allLists[i].Name === "Default" ||
        allLists[i].Name === "Today" ||
        allLists[i].Name === "This Week" ||
        allLists[i].Name === "Completed"
      ) {
        continue;
      } else {
        setLabelAttributes(listElementLabel[i], allLists[i].Name, `list-${i}`);
        listElementInput[i].setAttribute("type", "checkbox");
        listElementInput[i].name = "list";
        listElementInput[i].id = `list-${i}`;
        listElementInput[i].value = allLists[i].id;
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
  getAllLists();
  const listsContainer = document.querySelector("#aside-lists");
  const usersContainer = document.querySelector("#user-aside-lists");

  // Append List objects based on their number
  const listItemsContainer = elementsCreate("div", allListsCount);
  const userItemsContainer = elementsCreate("div", allListsCount);
  const listButtons = elementsCreate("button", allListsCount);
  const optionsButtons = elementsCreate("button", allListsCount);

  // Ensure no duplicates are found then append Lists.
  removeChildren(listsContainer);
  removeChildren(usersContainer);
  for (let i = 0; i < allListsCount; i++) {
    checkListItems(allLists[i].id);
    listButtons[i].textContent = `${allLists[i].Name} - ${listLength}`;
    listButtons[i].addEventListener("click", () => {
      renderMainListsDetails(allLists[i].id);
    });
    optionsButtons[i].textContent = "...";
    optionsButtons[i].addEventListener("click", () => {
      renderListOptions(allLists[i].id);
      refreshListsRemovedTasks(allLists[i].id);
      refreshListsAddTasks(allLists[i].id);
    });
    if (i === 0 || i === 1 || i === 2) {
      listsContainer.append(listItemsContainer[i]);
      listItemsContainer[i].append(listButtons[i], optionsButtons[i]);
    } else if (i === 3) {
      listsContainer.append(listItemsContainer[i]);
      listItemsContainer[i].append(listButtons[i]);
    } else {
      userItemsContainer[i].append(listButtons[i], optionsButtons[i]);
      usersContainer.append(userItemsContainer[i]);
    }
  }
}

function refreshListsRemovedTasks(id) {
  let selectedTask;
  const listItemsDiv = document.querySelector("#list-items");
  removeAllChildNodes(listItemsDiv);
  checkListItems(id);
  if (listLength === 0) {
    listItemsDiv.append(noAddedTasksMessage);
  }
  const listOptions = elementsCreate("input", listLength);
  const labelOptions = elementsCreate("label", listLength);
  const tasksDivs = elementsCreate("div", listLength);
  for (let i = 0; i < listLength; i++) {
    selectedTask = checkReturnedObject(listItems[i], "task");
    listOptions[i].setAttribute("type", "checkbox");
    listOptions[i].value = listItems[i];
    listOptions[i].name = "task";
    listOptions[i].id = `task-${i}`;
    labelOptions[i].setAttribute("for", `task-${i}`);
    labelOptions[i].textContent = selectedTask.Title;
    tasksDivs[i].append(listOptions[i], labelOptions[i]);
    listItemsDiv.append(tasksDivs[i]);
  }
}

function refreshListsAddTasks(id) {
  const listItemsDiv = document.querySelector("#added-list-items");
  checkListItems(id);
  getAllTasks();
  removeAllChildNodes(listItemsDiv);
  if (
    returnedList.Name === "Default" ||
    returnedList.Name === "Today" ||
    returnedList.Name === "This Week" ||
    returnedList.Name === "Completed"
  ) {
    listItemsDiv.append(cantAddToDefaultMessage);
  }
  const listOptions = elementsCreate("input", taskItemsCount);
  const labelOptions = elementsCreate("label", taskItemsCount);
  const tasksDivs = elementsCreate("div", taskItemsCount);
  for (let i = 0; i < taskItemsCount; i++) {
    if (
      checkObjectOccurrence(returnedList, allTaskItems[i]) ||
      returnedList.Name === "Default" ||
      returnedList.Name === "Today" ||
      returnedList.Name === "This Week" ||
      returnedList.Name === "Completed"
    ) {
      continue;
    } else {
      listOptions[i].setAttribute("type", "checkbox");
      listOptions[i].value = allTaskItems[i].id;
      listOptions[i].name = "add-task";
      listOptions[i].id = `add-task-${i}`;
      labelOptions[i].setAttribute("for", `add-task-${i}`);
      labelOptions[i].textContent = allTaskItems[i].Title;
      tasksDivs[i].append(listOptions[i], labelOptions[i]);
      listItemsDiv.append(tasksDivs[i]);
    }
  }
  if (listItemsDiv.childElementCount === 0) {
    listItemsDiv.append(noTasksToAddMessage);
  }
}

export {
  refreshCreateListItems,
  refreshCreateTaskItems,
  refreshListItems,
  refreshListsRemovedTasks,
  refreshListsAddTasks,
};
