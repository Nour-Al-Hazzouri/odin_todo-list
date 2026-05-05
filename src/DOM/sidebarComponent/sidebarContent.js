import { getListObjects } from "../../objectsComponents/centralObjectsStorage.js";
import elementsCreate from "../elementsCreator.js";

const listItem = new Array();
function appendListItems(passedListArray) {
  const passedListLength = passedListArray.length;
  const listDivs = elementsCreate("div", passedListLength);
  for (let i = 0; i < passedListLength; i++) {
    listDivs[i].innerHTML = `<button>${passedListArray[i].Name}</button><button>...</button>`;
    listItem[i] = listDivs[i];
  }
  return listItem;
}

export { appendListItems };
