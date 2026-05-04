import {
  body,
  sidebarSections,
  sidebarButtons,
  sidebarh2,
  aside,
  sidebarDivs,
} from "../DOMElements.js";
import { getListObjects } from "../../objectsComponents/centralObjectsStorage.js";

const allListObjects = getListObjects();

function collapseSidebar() {
  aside.classList.add("display-none");
  sidebarButtons[1].classList.remove("display-none");
  sidebarButtons[1].textContent = "→";
  sidebarButtons[1].classList.add("expand-button");
  body.append(sidebarButtons[1]);
  sidebarButtons[1].addEventListener("click", expandSidebar);
}

function expandSidebar() {
  body.append(aside);
  aside.classList.remove("display-none");
  sidebarButtons[1].classList.add("display-none");
  sidebarButtons[0].addEventListener("click", collapseSidebar);
}

export {
  collapseSidebar,
  expandSidebar,
};
