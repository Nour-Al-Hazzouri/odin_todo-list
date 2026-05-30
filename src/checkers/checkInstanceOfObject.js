import TodoObjectsFactory from "../objectsFactories/TodoObjectsFactory.js";
import ListObjectsFactory from "../objectsFactories/ListObjectsFactory.js";

function checkInstanceOf(passedObject) {
  if (passedObject instanceof TodoObjectsFactory) return "todo";
  else if (passedObject instanceof ListObjectsFactory) return "list";
  else throw Error("Instance not recognizable.");
}

export default checkInstanceOf;
