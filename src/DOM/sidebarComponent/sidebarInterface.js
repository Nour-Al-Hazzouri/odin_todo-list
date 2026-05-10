import { expandSidebar } from "../sidebarComponent/sidebarBehavior.js";

import {
  appendSectionOne,
  appendSectionTwo,
  appendSectionThree,
  appendSectionFour,
} from "./sidebarSections.js";

function appendSidebar() {
  // collapseSidebar is called by expandSidebar
  expandSidebar();
  appendSectionOne();
  appendSectionTwo();
  appendSectionThree();
  appendSectionFour();
}

export { appendSidebar };
