import { getListObjects, getTodoObjects } from "../objectsComponents/centralObjectsStorage.js";
import checkInstanceOf from "./checkInstanceOfObject.js";

const listObjects = getListObjects();
const todoObjects = getTodoObjects();

function checkObjectId(passedObject) {
    if (checkInstanceOf(passedObject) === 'todo') {
        for (const todoObject of todoObjects) {
            if (passedObject.UUID === todoObject.UUID) {
                return passedObject.UUID;
            }
        }
    } else if (checkInstanceOf(passedObject) === 'list') {
        for (const listObject of listObjects) {
            if (passedObject.UUID === listObject.UUID) {
                return passedObject.UUID;
            }
        }
    }
}

export default checkObjectId;