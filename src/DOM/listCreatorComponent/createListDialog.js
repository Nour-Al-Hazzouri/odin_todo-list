import { main } from "../../universalQueries.js";
import createListForm from "./createListForm.js";
import {
  refreshCreateListItems,
  refreshListItems,
} from "../sidebarComponent/sidebarRefreshComponents.js";

const listDialog = document.createElement("dialog");
const closeListDialog = document.createElement("button");

// Render `List` dialog
function appendListDialog() {
  const listForm = createListForm();
  closeListDialog.textContent = "X";
  closeListDialog.classList.add("close-btn");
  listDialog.append(closeListDialog, listForm);
  main.append(listDialog);
}


function manipulateListDialog() {
  refreshCreateListItems();
  listDialog.showModal();
  closeListDialog.addEventListener("click", () => {
    listDialog.close();
  });
}

export { appendListDialog, manipulateListDialog };
