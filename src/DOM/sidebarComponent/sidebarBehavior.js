import {
  sidebarSections,
  sidebarButtons,
  sidebarh2,
  sidebarDivs,
} from "./sidebarElements.js";

import { body, aside, main } from "../../universalQueries.js";
import elementsCreate from "../elementsCreator.js";
import { taskForm } from "../taskCreatorComponent/createTaskPage.js";

function collapseSidebar() {
  aside.classList.remove("aside-expanded");
  aside.classList.add("aside-collapsed");
  main.classList.add("main-expanded");
  main.classList.remove('main-collapsed');
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
  main.classList.add('main-collapsed');
  main.classList.remove('main-expanded');

  for (let i = 0; i < sidebarSections.length; i++) {
    sidebarSections[i].classList.remove("display-none");
  }
  sidebarButtons[1].classList.add("display-none");
  sidebarButtons[0].addEventListener("click", collapseSidebar);
}

function appendCreateTaskPage() {
  taskForm();
}

export { collapseSidebar, expandSidebar, appendCreateTaskPage };
