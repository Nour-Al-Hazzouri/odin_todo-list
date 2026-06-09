import checkReturnedObject from "../../../checkers/checkReturnedObject.js";
import elementsCreate from "../../elementsCreator.js";
import { main } from "../../../universalQueries.js";
import renderTaskDetails from "./tasksDetailsDialogs.js";
import removeMainSections from "../../removeMainSections.js";
import { completeTaskProcess } from "./mainCompletionProcess.js";
import {
  checkListItems,
  returnedList,
  listItems,
  listLength,
} from "../../../checkers/checkListItems.js";
import { noCurrentTasksMessage } from "../../sidebarComponent/emptyObjects.js";

function renderMainListsDetails(id) {
  let returnedTaskItem;
  removeMainSections();
  checkListItems(id);
  const mainListSection = document.createElement("section");
  mainListSection.id = "list-details";
  const mainListH1 = document.createElement("h1");
  mainListH1.textContent = "List Details";
  const mainListName = document.createElement("h2");
  mainListName.textContent = returnedList.Name;
  const listItemsContainer = document.createElement("div");
  const listItemsUl = document.createElement("ul");
  const itemsLi = elementsCreate("li", listLength);
  const itemsButton = elementsCreate("button", listLength);
  const itemsPriority = elementsCreate("p", listLength);
  const itemsDate = elementsCreate("p", listLength);
  const completeStatusButtons = elementsCreate("button", listLength);

  for (let i = 0; i < listLength; i++) {
    returnedTaskItem = checkReturnedObject(listItems[i], "task");
    itemsButton[i].textContent = returnedTaskItem.Title;
    itemsButton[i].addEventListener("click", () => {
      renderTaskDetails(returnedTaskItem);
    });
    itemsPriority[i].textContent = returnedTaskItem.Priority;
    itemsPriority[i].dataset.priority = returnedTaskItem.Priority;
    itemsDate[i].textContent = returnedTaskItem.DueDate;
    if (returnedTaskItem.CompleteStatus === false) {
      completeStatusButtons[i].textContent = "Complete";
    } else if (returnedTaskItem.CompleteStatus === true) {
      completeStatusButtons[i].textContent = "Incomplete";
    }
    completeStatusButtons[i].addEventListener("click", () => {
      completeTaskProcess(returnedTaskItem.CompleteStatus, returnedTaskItem);
      renderMainListsDetails(id);
    });
    itemsLi[i].append(
      itemsButton[i],
      itemsPriority[i],
      itemsDate[i],
      completeStatusButtons[i],
    );
    listItemsUl.append(itemsLi[i]);
  }
  listItemsContainer.append(listItemsUl);
  mainListSection.append(mainListH1, mainListName, listItemsContainer);
  if (listLength === 0) {
    mainListSection.append(noCurrentTasksMessage);
  }
  main.append(mainListSection);
}

export { renderMainListsDetails };
