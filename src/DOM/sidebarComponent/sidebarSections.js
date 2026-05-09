import {
  sidebarSections,
  sidebarButtons,
  sidebarH2,
  sidebarDivs,
} from "./sidebarElements.js";
import { body, aside } from "../../universalQueries.js";
import { appendCreateTaskPage } from "./sidebarBehavior.js";

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
  aside.append(sidebarSections[2]);
  sidebarSections[2].append(sidebarH2[1]);
  sidebarH2[1].textContent = "Your Tasks";
  sidebarSections[2].append(sidebarDivs[1]);
  sidebarDivs[1].classList.add("todos-div");
}

function appendSectionFour() {
  aside.append(sidebarSections[3]);
  sidebarSections[3].append(sidebarButtons[2]);
  sidebarSections[3].append(sidebarButtons[3]);
  sidebarButtons[2].textContent = "Create List";
  sidebarButtons[2].classList.add("create-list");
  sidebarButtons[3].textContent = "Create Task";
  sidebarButtons[3].classList.add("create-task");
  sidebarButtons[3].addEventListener("click", appendCreateTaskPage);
}

export {
  appendSectionOne,
  appendSectionTwo,
  appendSectionThree,
  appendSectionFour,
};
