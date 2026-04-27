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
    } else if ((name !== 'Default') && (name !== 'default')){
      this.#name = name;
    } else {
      throw Error("Cannot use term 'default' as name.")
    };
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
    this.#items.splice(this.#items.indexOf(passedTodoItem), 1);
  }
}

export default listObjectsFactory;
