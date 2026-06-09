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
      throw Error("Cannot use defaults as names.");
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

  appendTaskItem(passedTaskItemId) {
    this.#items.push(passedTaskItemId);
  }
  removeTaskItem(passedTaskItemId) {
    // 1. Find the index first
    const index = this.#items.indexOf(passedTaskItemId);
    // 2. Only splice IF the index is NOT -1
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }

  toJSON() {
    return {
      id: this.#id,
      name: this.#name,
      items: this.#items,
    };
  }
  static fromJSON(data) {
    const instance = new ListObjectsFactory(data.name);
    instance.#id = data.id;

    if (data.items) {
      instance.#items = data.items.map((item) =>
        typeof item === "object" && item !== null ? item.id : item,
      );
    }
    return instance;
  }
}

export default ListObjectsFactory;
