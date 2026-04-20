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
  - View/Edit item upon expansion
  - Delete Item
  - date-fns for dates
- LocalStorage for persistence
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

## Objects Factories - Classes

- `todoObjectsFactory.js`: Class to create TODO items with the required fields.
- `listObjectsFactory.js`: Class to create List items with the required fields

## Objects Components - Logic

- `centralObjectsStorage.js`: A central storage that saves all info about todo and list objects, with the ability to return arrays used to save each object instance.
    > `Default` list is manually created and assigned the `listObjectsArray` to show all created TODO items.
- `createObjects.js`: Responsible for calling the `saveObject()` function to either create a TODO object, or a List object.

## Checkers - Conditions

- `checkInstanceOfObject.js`: Checks if the `passedObject` is a TODO item or a List item.
- `checkObjectId.js`: Returns the ID of passed object, by using `checkInstanceOfObject.js` and comparing UUIDs in the appropriate array.
