import {
  body,
  sidebarSections,
  sidebarButtons,
  sidebarh2,
  aside,
  sidebarDivs,
} from "./DOMElements.js";

function collapseSidebar() {
  aside.classList.add("display-none");
  sidebarButtons[1].classList.remove("display-none");
  sidebarButtons[1].textContent = "→";
  sidebarButtons[1].classList.add("expand-sidebar");
  body.append(sidebarButtons[1]);
  sidebarButtons[1].addEventListener("click", expandSidebar);
}

function expandSidebar() {
  body.appendChild(aside);
  aside.classList.remove("display-none");
  sidebarButtons[1].classList.add("display-none");
  sidebarButtons[0].addEventListener("click", collapseSidebar);
}

function appendSectionOne() {
  aside.appendChild(sidebarSections[0]);
  sidebarSections[0].append(sidebarButtons[0]);
  sidebarButtons[0].textContent = "←";
  sidebarButtons[0].addEventListener("click", collapseSidebar);
}

function appendSectionTwo() {
  
}

export { collapseSidebar, expandSidebar, appendSectionOne };
