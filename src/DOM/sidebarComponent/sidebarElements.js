import elementsCreate from "../elementsCreator.js";

const sidebarSections = elementsCreate("section", 4);
const sidebarDivs = elementsCreate("div", 3);
const sidebarH2 = elementsCreate("h2", 4);
const sidebarButtons = elementsCreate("button", 4);

export { sidebarSections, sidebarButtons, sidebarH2, sidebarDivs };
