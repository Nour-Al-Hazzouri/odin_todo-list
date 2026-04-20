import todoObjectsFactory from '../objectsFactories/todoObjectsFactory.js'
import listObjectsFactory from '../objectsFactories/listObjectsFactory.js';
import checkInstanceOf from '../checkers/checkInstanceOfObject.js';

const todoObjectsArray = [];
const listObjectsArray = [];

// Default list to contain all TODO items
listObjectsArray[0] = {
    id: crypto.randomUUID(),
    name: "Default",
    items: todoObjectsArray
};

function saveObject(passedObject) {
    if (checkInstanceOf(passedObject) === 'todo') {
        todoObjectsArray.push(passedObject);
    }
    else if (checkInstanceOf(passedObject) === 'list') {
        listObjectsArray.push(passedObject);
    }
};

function getTodoObjects() {
    return todoObjectsArray;
}
function getListObjects() {
    return listObjectsArray;
}

export { saveObject, getTodoObjects, getListObjects };