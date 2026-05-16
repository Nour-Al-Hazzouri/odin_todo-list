import { getListObjects } from "../../objectsComponents/centralObjectsStorage.js";
import { main } from "../../universalQueries.js";
import {
  refreshAllLists,
  refreshListItems,
} from "../sidebarComponent/sidebarRefreshComponents.js";
import checkReturnedObject from "../../checkers/checkReturnedObject.js";
import { setLabelAttributes } from "../toggleAttribute.js";
import removeAllChildNodes from "../removeChildren.js";

const listOptionsDiv = document.createElement("div");
const listForm = document.createElement("form");
const listLabel = document.createElement("label");
const listH1 = document.createElement("h1");
const listInput = document.createElement("input");
const listSave = document.createElement("button");
const allListItems = getListObjects();
let passedList;

function renderListOptions(id) {
  listOptionsDiv.id = "list-options";
  passedList = checkReturnedObject(id, "list");
  listH1.textContent = "List Options";
  setLabelAttributes(listLabel, "Change Name", "change-name");
  listInput.value = `${passedList.Name}`;
  listInput.name = "change-name";
  listInput.setAttribute("id", "change-name");
  listSave.textContent = "Save";
  listSave.setAttribute("type", "submit");
  listForm.append(listLabel, listInput, listSave);
  listOptionsDiv.append(listH1, listForm);
  main.append(listOptionsDiv);
}

listForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  passedList.setName = formData.get("change-name");
  removeAllChildNodes(listOptionsDiv);
  refreshListItems();
});

export { renderListOptions };
