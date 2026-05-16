import {
  createListObject,
  createTodoObject,
} from "../../objectsComponents/createObjects.js";
import {
  checkListNameDuplicate,
  checkTaskNameDuplicate,
  validateListName,
} from "../../checkers/checkNameValidation.js";
import appendTasksToList from "../listCreatorComponent/appendTasksToList.js";
import checkInstanceOf from "../../checkers/checkInstanceOfObject.js";
import checkObjectOccurrence from "../../checkers/checkObjectOccurrence.js";
import checkReturnedObject from "../../checkers/checkReturnedObject.js";

function submitListForm(target) {
  const transformedList = Object.fromEntries(target);
  const listName = transformedList.name;
  if (checkListNameDuplicate(transformedList.name)) {
    alert("A list with the same name already exists");
  } else if (validateListName(transformedList.name)) {
    alert("List name not allowed");
  } else {
    const selectedTasks = target.getAll("task");
    const createdList = createListObject(listName);
    appendTasksToList(createdList, selectedTasks);
  }
}

function submitTaskForm(target) {
  const createdTask = Object.fromEntries(target);
  const taskName = createdTask.title;
  if (checkTaskNameDuplicate(createdTask.title)) {
    alert("A task with the same name already exists");
  } else {
    const taskDescription = createdTask.description;
    const taskDueDate = createdTask.duedate;
    const taskPriority = createdTask.priority;
    const taskNotes = createdTask.notes;
    createTodoObject(
      taskName,
      taskDescription,
      taskDueDate,
      taskPriority,
      taskNotes,
    );
  }
}

export { submitListForm, submitTaskForm };
