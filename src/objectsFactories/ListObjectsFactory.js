import TodoObjectsFactory from "./TodoObjectsFactory.js";

class ListObjectsFactory {
  #id;
  #name;
  #items = [];

  constructor(name) {
    this.#id = crypto.randomUUID();
    this.#name = name;
  }

  set setName(name) {
    if (
      this.#name === "Default" ||
      this.#name === "Today" ||
      this.#name === "This Week" ||
      this.#name === "Completed"
    ) {
      alert("Default lists are not editable.");
    } else if (
      name !== "default" ||
      name !== "today" ||
      name !== "this week" ||
      name !== "completed"
    ) {
      this.#name = name;
    } else {
      throw Error("Cannot use term 'default' as name.");
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
    this.#items.splice(this.#items.indexOf(passedTodoItem), 1);
  }

  toJSON() {
    return {
      id: this.#id,
      name: this.#name,
      items: this.#items,
    };
  }
  static fromJSON(data, globalTodos = []) {
    const instance = new ListObjectsFactory(data.name);
    instance.#id = data.id;

    if (data.items) {
      instance.#items = data.items.map((item) => {
        // Link the reference from the global tasks
        const existingTaskReference = globalTodos.find(
          (globalTask) => globalTask.id === item.id,
        );

        // Return existing reference or fallback to creating a new one
        return existingTaskReference || TodoObjectsFactory.fromJSON(item);
      });
    }

    return instance;
  }
}

export default ListObjectsFactory;
