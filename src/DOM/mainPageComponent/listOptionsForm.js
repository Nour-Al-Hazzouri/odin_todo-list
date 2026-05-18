import checkReturnedObject from "../../checkers/checkReturnedObject.js";
import elementsCreate from "../elementsCreator.js";
import removeAllChildNodes from "../removeChildren.js";
import { refreshListItems } from "../sidebarComponent/sidebarRefreshComponents.js";
import { setLabelAttributes } from "../toggleAttribute.js";

let passedList;

function createListOptionsForm(id) {
  const listForm = document.createElement("form");
  listForm.id = "options-form";
  const listLabel = document.createElement("label");
  const listInput = document.createElement("input");
  const listSave = document.createElement("button");
  const listTasksContainer = document.createElement("div");
  passedList = checkReturnedObject(id, "list");
  const listItems = passedList.Items;
  const listItemsLength = passedList.Items.length;
  const listOptions = elementsCreate("input", listItemsLength);
  const labelOptions = elementsCreate("label", listItemsLength);
  setLabelAttributes(listLabel, "Name", "list-name");
  listInput.value = `${passedList.Name}`;
  listInput.name = "list-name";
  listInput.setAttribute("id", "list-name");
  listTasksContainer.id = "list-items";
  for (let i = 0; i < listItemsLength; i++) {
    if (passedList.Name === "Default") {
      continue;
    } else {
      listOptions[i].setAttribute("type", "checkbox");
      listOptions[i].value = listItems[i].id;
      listOptions[i].name = "task";
      listOptions[i].id = `task-${i}`;
      labelOptions[i].setAttribute("for", `task-${i}`);
      labelOptions[i].textContent = listItems[i].Title;
      listTasksContainer.append(listOptions[i], labelOptions[i]);
    }
  }
  listSave.textContent = "Save";
  listSave.setAttribute("type", "submit");
  listForm.append(listLabel, listInput, listTasksContainer, listSave);
  activateEventListener(listForm);
  return listForm;
}

function activateEventListener(listForm) {
  listForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    passedList.setName = formData.get("list-name");
    const listOptions = document.querySelector("#list-options");
    refreshListItems();
  });
}

export default createListOptionsForm;
