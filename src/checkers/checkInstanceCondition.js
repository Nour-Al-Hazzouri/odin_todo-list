import checkInstanceOf from "./checkInstanceOfObject.js";

// Ensure passed objects are List and TODO objects
function checkInstanceConditionOf(listObject, todoObject) {
  if (checkInstanceOf(listObject) !== "list") {
    throw Error("Not a list instance.");
  } else if (checkInstanceOf(todoObject) !== "todo") {
    throw Error("Not a todo object.");
  } else {
    return true;
  }
}

export default checkInstanceConditionOf;
