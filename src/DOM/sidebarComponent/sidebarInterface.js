import { expandSidebar } from "../sidebarComponent/sidebarBehavior.js";

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
