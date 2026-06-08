import {
  toggleCompleteStatus,
  toggleIncompleteStatus,
} from "./mainTasksStatusToggle.js";

function completeTaskProcess(status, task) {
  if (status === false) {
    toggleCompleteStatus(task);
  } else if (status === true) {
    toggleIncompleteStatus(task);
  }
}

export { completeTaskProcess };
