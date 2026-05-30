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
## Logic
### TODO Objects
**Each TODO object must:**
  - Store _at least_ the minimal required information
  - Be inside the `default` list
  - be capable of being added or removed from any list (excluding `default` which is the main view)
  - Be editable in all fields except `id`, and deletable
### List Objects
**Each List object must:**
  - Store _at least_ the minimal required information
  - be capable of being deleted
  - Be editable in name and contained items (except for `default`, and `id` for any list item)
## UI & DOM
### Interface
- **Sidebar** should at least have:
  - `default list`
  - User-made `lists`
  - Ability to close & re-open
  - Create new `TODO` and `list` objects
  - Have an options dropdown for each `list`
- **Content Area:** should at least have:
  - Selected `list`'s items
  - Each `TODO`'s information fields
  - Options to change `TODO`'s list, delete it, or edit its information
