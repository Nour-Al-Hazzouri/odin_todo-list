function removeAllChildNodes(parent) {
    while (parent.lastElementChild) {
        parent.removeChild(parent.lastElementChild);
    }
}

export default removeAllChildNodes;