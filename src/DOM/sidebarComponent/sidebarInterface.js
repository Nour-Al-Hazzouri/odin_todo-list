import { expandSidebar } from "../sidebarComponent/sidebarBehavior.js";

import {
  appendSectionOne,
  appendSectionTwo,
  appendSectionThree,
} from "./sidebarSections.js";

function appendSidebar() {
  expandSidebar();
  appendSectionOne();
  appendSectionTwo();
  appendSectionThree();
}

export { appendSidebar };
