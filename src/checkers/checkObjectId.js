import {
  getListObjects,
  getTodoObjects,
} from "../objectsComponents/centralObjectsStorage.js";
import checkInstanceOf from "./checkInstanceOfObject.js";

function checkObjectId(passedObject) {
  const listObjects = getListObjects();
  const todoObjects = getTodoObjects();
  if (checkInstanceOf(passedObject) === "todo") {
    for (const todoObject of todoObjects) {
      if (passedObject.id === todoObject.id) {
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
