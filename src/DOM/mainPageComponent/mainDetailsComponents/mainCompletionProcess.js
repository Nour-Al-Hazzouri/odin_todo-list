import { completeTask } from "./mainTasksComplete.js";
import { deCompleteTask } from "./mainTasksIncomplete.js";

function completeTaskProcess(status, task) {
if (status === false) {
    completeTask(task);
} else if (status === true) {
    deCompleteTask(task);
}
}

export { completeTaskProcess };
