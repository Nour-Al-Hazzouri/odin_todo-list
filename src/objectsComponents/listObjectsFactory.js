class listObjectsFactory {

    #id
    #name;
    #items;

    constructor(name, items) {
        this.#id = crypto.randomUUID();
        this.#name = name;
        this.#items = items;
    }

    set setName(name) {
        this.#name = name;
    }
    get Name() {
        return this.#name
    }
    set setItems(listArray) {
        this.#items = listArray;
    }
    get Items() {
        return this.#items;
    }
    get UUID() {
        return this.#id;
    }
}

export default listObjectsFactory;