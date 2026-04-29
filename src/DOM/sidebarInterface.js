import { getListObjects } from "../objectsComponents/centralObjectsStorage.js";
import elementsCreate from "./elementsCreator.js";
import { body, aside, sidebarButtons, sidebarSections, sidebarh2, sidebarDivs } from "./DOMElements.js"
import { collapseSidebar, expandSidebar, appendSectionOne } from "./sidebarBehavior.js";


function appendSidebar() {
  expandSidebar();
  appendSectionOne();
}

export { appendSidebar };
