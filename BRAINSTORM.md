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

---

# V1

My initial approach was: Render features functional
Enforcing SOLID and DRY was challenging due to the amount of work I needed to put in to just implement the workflow I have planned, so after having a functional webapp and a short break, I decided to start fresh and go with `V2`.

# Refactor

After completing `V1` of this project which was functional, I wasn't compeletely satisfied with the quality of the code so I decided to make `V2` a refactored version.
Since `V1` took me 1-month, 1-week of work, and since I already understand how my code works and what each module does, I decided for `V2` to focus on brainstorming, thinking of solutions, and using `AI` to fasten things up for a combo of maintainability and speed of implementation.

# V2

## To Change

- **Edit Tasks:** While the logic exists, it's not present in the `DOM`.
- **Change List Items:** `List` Items is an array of `Tasks` objects, but instead, I decided it should only include Tasks' ids using `checkReturnedObject` to return objects.
- **DRY:** Many modules contain repeated blocks of code and queries that can be extracted into a single module.
- **Enforce SOLID:** Ensure that further improvements and code is strictly adherent to SOLID principles.
