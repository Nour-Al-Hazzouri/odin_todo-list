import checkReturnedObject from "../../../checkers/checkReturnedObject.js";
import elementsCreate from "../../elementsCreator.js";
import { main } from "../../../universalQueries.js";

function renderMainListsDetails(id) {
  const passedList = checkReturnedObject(id, "list");
  const mainSections = document.querySelector("main > section");
  if (mainSections) {
    mainSections.remove();
  }
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
  const itemsDiv = elementsCreate("div", listItemsLength);
  const itemsButton = elementsCreate("button", listItemsLength);
  const itemsPriority = elementsCreate("p", listItemsLength);
  const itemsDate = elementsCreate("p", listItemsLength);
  for (let i = 0; i < listItemsLength; i++) {
    itemsButton[i].textContent = listItems[i].Title;
    itemsPriority[i].textContent = listItems[i].Priority;
    itemsDate[i].textContent = listItems[i].DueDate;
    itemsDiv[i].append(itemsButton[i], itemsPriority[i], itemsDate[i]);
    itemsLi[i].append(itemsDiv[i]);
    listItemsUl.append(itemsLi[i]);
  }
  listItemsContainer.append(listItemsUl);
  mainListSection.append(mainListH1, mainListName, listItemsContainer);
  main.append(mainListSection);
}

export { renderMainListsDetails };
