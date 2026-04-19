import todoObjectsFactory from './todoObjectsFactory.js'
import listObjectsFactory from './listObjectsFactory.js';

const todoObjectsArray = [];
const listObjectsArray = [];

function saveObject(passedObject) {
    if (passedObject instanceof todoObjectsFactory)
        todoObjectsArray.push(passedObject);
    else if (passedObject instanceof listObjectsFactory) {
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