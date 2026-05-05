import {
  body,
  sidebarSections,
  sidebarButtons,
  sidebarh2,
  sidebarDivs,
  aside,
} from "./sidebarElements.js";

import { collapseSidebar } from "./sidebarBehavior.js";
import { getListObjects } from "../../objectsComponents/centralObjectsStorage.js";
import { appendListItems } from "./sidebarContent.js";
import elementsCreate from "../elementsCreator.js";

const allListObjects = getListObjects();

const sidebarListsDivs = elementsCreate('div', allListObjects.length);

function appendSectionOne() {
  aside.append(sidebarSections[0]);
  sidebarSections[0].append(sidebarButtons[0]);
  sidebarButtons[0].textContent = "←";
  sidebarButtons[0].addEventListener("click", collapseSidebar);
}

function appendSectionTwo() {
  aside.append(sidebarSections[1]);
  sidebarSections[1].append(sidebarh2[0]);
  sidebarh2[0].textContent = "Your Lists";
  sidebarSections[1].append(sidebarDivs[0]);
}

function appendSectionThree() {
  aside.append(sidebarSections[2]);
  sidebarSections[2].append(sidebarh2[1]);
  sidebarh2[1].textContent = "Your Tasks";
  sidebarSections[2].append(sidebarDivs[1]);
}

function appendSectionFour() {
  aside.append(sidebarSections[3]);
  sidebarSections[3].append(sidebarButtons[2]);
  sidebarButtons[2].textContent = "Create +";
}

export {
  appendSectionOne,
  appendSectionTwo,
  appendSectionThree,
  appendSectionFour,
};
