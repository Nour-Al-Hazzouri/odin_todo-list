import checkInstanceOf from "./checkInstanceOfObject.js";

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
