import checkInstanceConditionOf from "./checkInstanceCondition.js";

// Check if a TODO object is inside a List
function checkObjectOccurrence(list, taskItem) {
  if (!checkInstanceConditionOf(list, taskItem)) {
    throw Error("Can't check object occurrence");
  } else {
    for (let i = 0; i < list.Items.length; i++) {
      if (list.Items[i] === taskItem.id) {
        return true;
      }
    }
    return false;
  }
}

export default checkObjectOccurrence;
