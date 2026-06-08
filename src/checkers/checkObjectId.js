import {
  getListObjects,
  getTaskObjects,
} from "../objectsComponents/centralObjectsStorage.js";
import checkInstanceOf from "./checkInstanceOfObject.js";

function checkObjectId(passedObject) {
  const listObjects = getListObjects();
  const taskObjects = getTaskObjects();
  if (checkInstanceOf(passedObject) === "task") {
    for (const taskObject of taskObjects) {
      if (passedObject.id === taskObject.id) {
        return passedObject.id;
      }
    }
  } else if (checkInstanceOf(passedObject) === "list") {
    for (const listObject of listObjects) {
      if (passedObject.id === listObject.id) {
        return passedObject.id;
      }
    }
  } else {
    throw Error("Can't check id of unknown object.");
  }
}

export default checkObjectId;
