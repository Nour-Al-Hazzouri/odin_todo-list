import "./styles.css";
import { appendSidebar } from "./DOM/sidebarComponent/sidebarInterface.js";
import { createTodoObject } from "./objectsComponents/createObjects.js";
import {
  refreshAllLists,
  refreshListItems,
} from "./DOM/listCreatorComponent/refreshSidebarComponents.js";

appendSidebar();

document.addEventListener("DOMContentLoaded", refreshAllLists);
