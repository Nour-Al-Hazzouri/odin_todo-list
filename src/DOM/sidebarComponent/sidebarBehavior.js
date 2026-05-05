import {
  body,
  sidebarSections,
  sidebarButtons,
  sidebarh2,
  aside,
  sidebarDivs,
} from "./sidebarElements.js";
import { getListObjects } from "../../objectsComponents/centralObjectsStorage.js";

const allListObjects = getListObjects();

function collapseSidebar() {
  aside.classList.remove("aside-expanded");
  aside.classList.add("aside-collapsed");
  for (let i = 0; i < sidebarSections.length; i++) {
    sidebarSections[i].classList.add("display-none");
  }
  sidebarButtons[1].classList.remove("display-none");
  sidebarButtons[1].textContent = "→";
  sidebarButtons[1].classList.add("expand-button");
  aside.append(sidebarButtons[1]);
  sidebarButtons[1].addEventListener("click", expandSidebar);
}

function expandSidebar() {
  aside.classList.remove("aside-collapsed");
  aside.classList.add("aside-expanded");
  for (let i = 0; i < sidebarSections.length; i++) {
    sidebarSections[i].classList.remove("display-none");
  }
  sidebarButtons[1].classList.add("display-none");
  sidebarButtons[0].addEventListener("click", collapseSidebar);
}

export { collapseSidebar, expandSidebar };
