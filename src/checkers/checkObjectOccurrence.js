import checkInstanceConditionOf from "./checkInstanceCondition.js";

// Check if a TODO object is inside a List
function checkObjectOccurrence(list, taskItem) {
  if (!checkInstanceConditionOf(list, taskItem)) {
    throw Error("Can't check object occurrence");
  } else {
    for (const listItem of list.Items) {
      if (listItem.id === taskItem.id) {
        return true;
      }
    }
    return false;
  }
}

export default checkObjectOccurrence;
