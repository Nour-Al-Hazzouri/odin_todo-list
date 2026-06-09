import { main } from "../../../universalQueries.js";
import { renderTaskOptions } from "../mainOptionsComponents/mainOptionsPage.js";

function renderTaskDetails(task) {
  const taskInfoDialog = document.createElement("dialog");
  taskInfoDialog.id = "task-dialog";
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-btn");
  closeButton.textContent = "X";
  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", () => {
    taskInfoDialog.close();
    taskInfoDialog.remove();
    renderTaskOptions(task.id);
  });
  const taskMainDiv = document.createElement("div");
  const taskMainH3 = document.createElement("h3");
  taskMainH3.textContent = task.Title;
  const taskDescription = document.createElement("p");
  taskDescription.textContent = task.Description;
  const taskDueDate = document.createElement("p");
  taskDueDate.textContent = task.DueDate;
  const taskPriority = document.createElement("p");
  taskPriority.textContent = task.Priority;
  taskPriority.dataset.priority = task.Priority;
  const taskNotes = document.createElement("p");
  taskNotes.textContent = task.Notes;
  taskMainDiv.append(
    closeButton,
    taskMainH3,
    taskDescription,
    taskDueDate,
    taskPriority,
    taskNotes,
    editButton,
  );
  taskInfoDialog.append(taskMainDiv);
  main.append(taskInfoDialog);
  taskInfoDialog.showModal();
  closeButton.addEventListener("click", () => {
    taskInfoDialog.close();
    taskInfoDialog.remove();
  });
}

export default renderTaskDetails;
