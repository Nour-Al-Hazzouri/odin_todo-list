import elementsCreate from "../elementsCreator.js";

const sidebarSections = elementsCreate("section", 4);
const sidebarDivs = elementsCreate("div", 2);
const sidebarH2 = elementsCreate("h2", 3);
const sidebarButtons = elementsCreate("button", 4);

export { sidebarSections, sidebarButtons, sidebarH2, sidebarDivs };
