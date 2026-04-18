# Requirements
- Each TODO-item is an object
- Each TODO-item must have:

    **Mandatory:**

        - Title
        - Description
        - Due Date
        - Priority

    **Optional:**

        - Notes
        - Checklist

- Lists (default & user-created) with ability to choose
    > Default must be the main view and contain all items regardless of user lists.
- Modularity (logic & DOM Separation), SOLID Principles
- UI components:
    - All lists
    - All items in each list (title, due date, priority-based colors)
    -  View/Edit item upon expansion
    - Delete Item
    - date-fns for dates
- LocalSTorage for persistence
- Edge Cases:
    - Avoid crash if LocalStorage is empty (inspect via devtools)
    - Send and retrieve data from and to JSON (used by LocalStorage)

# Approach
- **Modularity:** Each piece of code must be its own module.
    > Logic first, DOM Manipulation later.

- **SOLID**: About each module:
    
    - **Single Responsibility:** Does this module do one single responsibility ?
    - **Open/Closed:** Can I add more features without rewriting old code ?
    - **Liskov Substitution:** Will adding a sub-class to a main class break it?
    - **Interface Segregation:** Are there bloat methods not used by this object ?
    - **Dependency Inversion:** Is this module hard-coded to a specific dependency ?

# Walkthrough
- Created [Objects Factory](src/todoObjects/todoObjectsFactory.js) which is essentially the class with the minimum required fields.
- Created [Objects Storage](src/todoObjects/todoObjectsStorage.js) responsible for:
    - Universal Storage
    - Pushing each new TODO Object into the universal array
    - Returning the array for access of each object
- Created [Objects Creator](src/todoObjects/createTodoObject.js) that simply creates a new TODO Object and calls `saveTodoObject(todoObject)` to push it into the universal array
