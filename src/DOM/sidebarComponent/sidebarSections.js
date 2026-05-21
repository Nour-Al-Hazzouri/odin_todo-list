import {
  sidebarSections,
  sidebarButtons,
  sidebarH2,
  sidebarDivs,
} from "./sidebarElements.js";
import { body, aside } from "../../universalQueries.js";
import { appendCreateTaskPage } from "./sidebarBehavior.js";
import {
  appendTaskDialog,
  manipulateTaskDialog,
  manipulateTaskModal,
} from "../taskCreatorComponent/createTaskDialog.js";
import {
  appendListDialog,
  manipulateListDialog,
} from "../listCreatorComponent/createListDialog.js";

function appendSectionOne() {
  aside.append(sidebarSections[0]);
  sidebarSections[0].append(sidebarButtons[0]);
  sidebarButtons[0].textContent = "←";
}

function appendSectionTwo() {
  aside.append(sidebarSections[1]);
  sidebarSections[1].append(sidebarH2[0]);
  sidebarH2[0].textContent = "Your Lists";
  sidebarSections[1].append(sidebarDivs[0]);
  sidebarDivs[0].classList.add("lists-div");
}

function appendSectionThree() {
  aside.append(sidebarSections[3]);
  sidebarSections[3].append(sidebarButtons[2], sidebarButtons[3]);
  sidebarButtons[2].textContent = "Create List";
  sidebarButtons[2].classList.add("create-list");
  sidebarButtons[3].textContent = "Create Task";
  sidebarButtons[3].classList.add("create-task");
  sidebarButtons[3].id = "task-modal";
  appendListDialog();
  sidebarButtons[2].addEventListener("click", manipulateListDialog);
  appendTaskDialog();
  sidebarButtons[3].addEventListener("click", manipulateTaskDialog);
}

export {
  appendSectionOne,
  appendSectionTwo,
  appendSectionThree,
};
