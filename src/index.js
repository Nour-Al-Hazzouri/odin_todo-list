import "./styles.css";
import { appendSidebar } from "./DOM/sidebarComponent/sidebarInterface.js";
import { createListObject, createTodoObject } from "./objectsComponents/createObjects.js";
import {
  refreshAllLists,
  refreshListItems,
} from "./DOM/sidebarComponent/sidebarRefreshComponents.js";

appendSidebar();
document.addEventListener("DOMContentLoaded", refreshAllLists);