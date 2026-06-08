import checkReturnedObject from "../../../checkers/checkReturnedObject.js";
import elementsCreate from "../../elementsCreator.js";
import { main } from "../../../universalQueries.js";
import renderTaskDetails from "./tasksDetailsDialogs.js";
import removeMainSections from "../../removeMainSections.js";
import { completeTaskProcess } from "./mainCompletionProcess.js";

function renderMainListsDetails(id) {
  let returnedTaskItem;
  removeMainSections();
  const emptyMessage = document.createElement("p");
  emptyMessage.textContent = "No Current Tasks";
  const passedList = checkReturnedObject(id, "list");
  const listItems = passedList.Items;
  const listItemsLength = passedList.Items.length;
  const mainListSection = document.createElement("section");
  mainListSection.id = "list-details";
  const mainListH1 = document.createElement("h1");
  mainListH1.textContent = "List Details";
  const mainListName = document.createElement("h2");
  mainListName.textContent = passedList.Name;
  const listItemsContainer = document.createElement("div");
  const listItemsUl = document.createElement("ul");
  const itemsLi = elementsCreate("li", listItemsLength);
  const itemsButton = elementsCreate("button", listItemsLength);
  const itemsPriority = elementsCreate("p", listItemsLength);
  const itemsDate = elementsCreate("p", listItemsLength);
  const completeStatusButtons = elementsCreate("button", listItemsLength);

  for (let i = 0; i < listItemsLength; i++) {
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
  if (listItemsLength === 0) {
    mainListSection.append(emptyMessage);
  }
  main.append(mainListSection);
}

export { renderMainListsDetails };
