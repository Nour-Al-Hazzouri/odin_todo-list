function appendToList(list, todoItem) {
    if (!list.includes(todoItem)) {
        list.push(todoItem);
    } else {
        throw Error("Already Present");
    }
};

function removeFromList(list, item) {
    if (list.includes(item)) {
        list.splice(item, 1);
    } else {
        throw Error("Not Present");
    }
}

export { appendToList, removeFromList };