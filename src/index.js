import { appendListItems } from "./DOM/sidebarComponent/sidebarContent.js";
import { appendSidebar } from "./DOM/sidebarComponent/sidebarInterface.js";
import { createListObject } from "./objectsComponents/createObjects.js";
import "./styles.css";

const listItem = new Array;
for (let i = 0; i < 15; i++) {
    listItem[i] = createListObject(`List ${i}`)
};

appendSidebar();

const listItem2 = createListObject(`List 22`);