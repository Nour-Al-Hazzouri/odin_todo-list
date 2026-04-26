class listObjectsFactory {
  #id;
  #name;
  #items = new Array();

  constructor(name) {
    this.#id = crypto.randomUUID();
    this.#name = name;
  }

  set setName(name) {
    if (this.#name === "Default") {
      throw Error("'Default' list is not editable.");
    } else {
      this.#name = name;
    }
  }
  get Name() {
    return this.#name;
  }
  get Items() {
    return this.#items;
  }
  get id() {
    return this.#id;
  }

  appendTodoItem(passedTodoItem) {
    this.#items.push(passedTodoItem);
  }
  removeTodoItem(passedTodoItem) {
    this.#items.splice(passedTodoItem);
  }
}

export default listObjectsFactory;
