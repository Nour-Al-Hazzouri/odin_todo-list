import checkInstanceOf from "./checkInstanceOfObject.js";

// Ensure passed objects are List and TODO objects
function checkInstanceConditionOf(listObject, taskObject) {
  if (checkInstanceOf(listObject) !== "list") {
    throw Error("Not a list instance.");
  } else if (checkInstanceOf(taskObject) !== "task") {
    throw Error("Not a task object.");
  } else {
    return true;
  }
}

export default checkInstanceConditionOf;
