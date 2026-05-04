import { getListObjects } from "../../objectsComponents/centralObjectsStorage.js";
import elementsCreate from "../elementsCreator.js";
import {
  body,
  aside,
  sidebarButtons,
  sidebarSections,
  sidebarh2,
  sidebarDivs,
} from "../DOMElements.js";
import { collapseSidebar, expandSidebar } from "../sidebarComponent/sidebarBehavior.js";
import {
  appendSectionOne,
  appendSectionTwo,
  appendSectionThree,
  appendSectionFour,
} from "./sidebarSections.js";

function appendSidebar() {
  expandSidebar();
  appendSectionOne();
  appendSectionTwo();
  appendSectionThree();
  appendSectionFour();
}

export { appendSidebar };
