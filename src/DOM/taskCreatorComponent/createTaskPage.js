import { main } from "../../universalQueries.js";
import removeAllChildNodes from "../removeChildren.js";
import { mainInput, mainLabel } from "./createTaskElements.js";
import appendCreateTaskForm from "./createTaskForm.js";

const mainH1 = document.createElement("h1");

function taskForm() {
  removeAllChildNodes(main);
  mainH1.textContent = "Task Information";
  main.append(mainH1);
  appendCreateTaskForm();
}

export { taskForm };
