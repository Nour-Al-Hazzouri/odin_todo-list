// Create TODO items per required fields.
class todoObjectsFactory {

    #title;
    #description
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
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

}

export default todoObjectsFactory;