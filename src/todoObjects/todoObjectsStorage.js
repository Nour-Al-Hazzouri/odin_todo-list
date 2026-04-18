const todoObjectsArray = [];

function saveTodoObject(todoObject) {
    todoObjectsArray.push(todoObject);
};

function getTodoObjects() {
    return todoObjectsArray;
}

export { saveTodoObject, getTodoObjects };