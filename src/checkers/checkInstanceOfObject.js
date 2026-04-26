import todoObjectsFactory from "../objectsFactories/todoObjectsFactory.js";
import listObjectsFactory from "../objectsFactories/listObjectsFactory.js";

function checkInstanceOf(passedObject) {
  if (passedObject instanceof todoObjectsFactory) return "todo";
  else if (passedObject instanceof listObjectsFactory) return "list";
  else throw Error("Instance not recognizable.");
}

export default checkInstanceOf;
