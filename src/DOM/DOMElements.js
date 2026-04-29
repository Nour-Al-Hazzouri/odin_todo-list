import elementsCreate from "./elementsCreator.js";

const body = document.querySelector("body");
const sidebarSections = elementsCreate("section", 4);
const sidebarDivs = elementsCreate("div", 2);
const sidebarh2 = elementsCreate("h2", 3);
const sidebarButtons = elementsCreate("button", 3);
const aside = document.querySelector("aside");

export {
  body,
  sidebarSections,
  sidebarButtons,
  sidebarh2,
  sidebarDivs,
  aside,
};
