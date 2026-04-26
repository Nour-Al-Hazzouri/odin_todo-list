import checkInstanceConditionOf from "./checkInstanceCondition.js";

function checkObjectOccurrence(list, todoItem) {
  if (!checkInstanceConditionOf(list, todoItem)) {
    throw Error("Can't check object occurrence");
  } else {
    for (const listItem of list.Items) {
      if (listItem.id === todoItem.id) {
        return true;
      }
    }
    return false;
  }
}

export default checkObjectOccurrence;
