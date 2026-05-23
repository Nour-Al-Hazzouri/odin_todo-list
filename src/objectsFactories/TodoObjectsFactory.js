// Create TODO items per required fields.
class TodoObjectsFactory {
  #id;
  #title;
  #description;
  #dueDate;
  #priority;
  #notes;

  constructor(title, description, dueDate, priority, notes) {
    this.#id = crypto.randomUUID();
    this.#title = title;
    this.#description = description;
    this.#dueDate = dueDate;
    this.#priority = priority;
    this.#notes = notes;
  }

  set setTitle(title) {
    this.#title = title;
  }
  get Title() {
    return this.#title;
  }
  set setDescription(description) {
    this.#description = description;
  }
  get Description() {
    return this.#description;
  }
  set setDueDate(dueDate) {
    this.#dueDate = dueDate;
  }
  get DueDate() {
    return this.#dueDate;
  }
  set setPriority(priority) {
    this.#priority = priority;
  }
  get Priority() {
    return this.#priority;
  }
  get Notes() {
    return this.#notes;
  }
  set setNotes(notes) {
    this.#notes = notes;
  }
  get id() {
    return this.#id;
  }
  toJSON() {
    return {
      title: this.#title,
      description: this.#description,
      dueDate: this.#dueDate,
      priority: this.#priority,
      notes: this.#notes,
      id: this.#id,
    };
  }

  static fromJSON(object) {
    const instance = new TodoObjectsFactory(
      object.title,
      object.description,
      object.dueDate,
      object.priority,
      object.notes,
    );
    instance.#id = object.id;
    return instance;
  }
}

export default TodoObjectsFactory;
