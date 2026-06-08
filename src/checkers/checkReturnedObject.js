import {
  getListObjects,
  getTaskObjects,
} from "../objectsComponents/centralObjectsStorage.js";

// Return object based on type and id
function checkReturnedObject(passedId, objectType) {
  const listObjects = getListObjects();
  const taskObjects = getTaskObjects();
  if (objectType === "task") {
    for (const taskObject of taskObjects) {
      if (passedId === taskObject.id) {
        return taskObject;
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
