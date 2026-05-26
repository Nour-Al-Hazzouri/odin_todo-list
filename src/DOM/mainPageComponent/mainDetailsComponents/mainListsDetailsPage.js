import checkReturnedObject from "../../../checkers/checkReturnedObject.js";
import elementsCreate from "../../elementsCreator.js";
import { main } from "../../../universalQueries.js";
import renderTaskDetails from "./tasksDetailsDialogs.js";
import removeMainSections from "../../removeMainSections.js";

function renderMainListsDetails(id) {
  removeMainSections();
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
  for (let i = 0; i < listItemsLength; i++) {
    itemsButton[i].textContent = listItems[i].Title;
    itemsButton[i].addEventListener("click", () => {
      renderTaskDetails(listItems[i]);
    });
    itemsPriority[i].textContent = listItems[i].Priority;
    itemsPriority[i].dataset.priority = listItems[i].Priority;
    itemsDate[i].textContent = listItems[i].DueDate;
    itemsLi[i].append(itemsButton[i], itemsPriority[i], itemsDate[i]);
    listItemsUl.append(itemsLi[i]);
  }
  listItemsContainer.append(listItemsUl);
  mainListSection.append(mainListH1, mainListName, listItemsContainer);
  main.append(mainListSection);
}

export { renderMainListsDetails };
