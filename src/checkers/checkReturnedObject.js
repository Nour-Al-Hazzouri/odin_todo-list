import {
  getListObjects,
  getTodoObjects,
} from "../objectsComponents/centralObjectsStorage.js";

// Return object based on type and id
function checkReturnedObject(passedId, objectType) {
  const listObjects = getListObjects();
  const todoObjects = getTodoObjects();
  if (objectType === "todo") {
    for (const todoObject of todoObjects) {
      if (passedId === todoObject.id) {
        return todoObject;
      }
    }
  } else if (objectType === "list") {
    for (const listObject of listObjects) {
      if (passedId === listObject.id) {
        return listObject;
      }
    }
  }
}

export default checkReturnedObject;
