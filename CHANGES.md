# Changes Log

## Request #1 - 2026-06-08

**Technical Summary**: Renamed `Todo` to `Task` across the codebase.

### Technical Log

- **Modified Files**:
  - `src/objectsFactories/TaskObjectsFactory.js` (Renamed from `TodoObjectsFactory.js`)
  - `src/DOM/mainPageComponent/mainDetailsComponents/mainTasksComplete.js`
  - `src/DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`
  - `src/DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`
  - `src/DOM/mainPageComponent/mainOptionsComponents/taskOptionsForm.js`
  - `src/DOM/sidebarComponent/sidebarFormsSubmitter.js`
  - `src/DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `src/DOM/taskCreatorComponent/createTaskForm.js`
  - `src/checkers/checkInstanceCondition.js`
  - `src/checkers/checkInstanceOfObject.js`
  - `src/checkers/checkNameValidation.js`
  - `src/checkers/checkObjectId.js`
  - `src/checkers/checkObjectOccurrence.js`
  - `src/checkers/checkReturnedObject.js`
  - `src/objectsComponents/appendTasksToList.js`
  - `src/objectsComponents/centralObjectsStorage.js`
  - `src/objectsComponents/createObjects.js`
  - `src/objectsComponents/objectsManipulation.js`
  - `src/objectsFactories/ListObjectsFactory.js`
  - `MODULES.md`
- **Logic Changes**: Replaced all instances of the substring "Todo" with "Task" and "todo" with "task". No internal application logic or structural control flow was altered.
- **Why**: To align the codebase terminology with the V2 architecture plan which shifts the domain modeling from "Todo" items to "Task" items.

### Plain English Summary

I updated the entire codebase to use the word "Task" instead of "Todo" to match your new V2 plans. This means that file names (like `TaskObjectsFactory.js`) and internal variable names have been swapped, but the actual functionality remains exactly the same as before.

## Request #2 - 2026-06-09

**Technical Summary**: Integrated `checkListItems.js` module in `refreshListItems()`.

### Technical Log

- **Modified Files**:
  - `src/DOM/sidebarComponent/sidebarRefreshComponents.js`
- **Logic Changes**: Replaced direct calls to `getListObjects()` and accessing list length with imports from `checkListItems.js`, namely `checkAllLists()`, `allLists`, `allListsCount`, `checkListItems()`, and `listLength`.
- **Why**: To encapsulate list retrieval, validation, and metadata checking logic into a reusable module.

### Plain English Summary

I updated the sidebar list rendering function to use the newly created helper module (`checkListItems.js`) for fetching lists and checking the number of tasks in each list, rather than calling general database helpers directly inside the UI rendering code.

## Request #3 - 2026-06-09

**Technical Summary**: Created `checkTaskItems.js` and `emptyObjects.js` modules and integrated them into `sidebarRefreshComponents.js`.

### Technical Log

- **Modified Files**:
  - `src/DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `src/checkers/checkTaskItems.js` (NEW)
  - `src/DOM/sidebarComponent/emptyObjects.js` (NEW)
- **Logic Changes**: Extracted generic empty paragraph DOM elements into `emptyObjects.js`. Extracted task list fetching into `checkTaskItems.js`. Refactored `sidebarRefreshComponents.js` to rely exclusively on these new modules along with `checkListItems.js` for data state, preventing repetitive DOM element creation and centralizing logic.
- **Why**: To further modularize repetitive element creation (like "No Tasks" messages) and unify task data retrieval following the pattern established by the list checking module.

### Plain English Summary

I created a new module to handle fetching task items (similar to the one we just made for list items) and another module that stores pre-made "Empty" messages (like "No Created Tasks"). Finally, I updated all the sidebar refreshing functions to use these new helpers, which cleans up the code and avoids doing the exact same thing in multiple places.

## Request #4 - 2026-06-09

**Technical Summary**: Refactored `getListObjects` and `getTaskObjects` usages across all dependent modules to use `checkListItems.js` and `checkTaskItems.js`.

### Technical Log

- **Modified Files**:
  - `src/DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`
  - `src/DOM/mainPageComponent/mainDetailsComponents/mainTasksStatusToggle.js`
  - `src/DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`
  - `src/DOM/sidebarComponent/emptyObjects.js`
  - `src/objectsComponents/appendTasksToList.js`
  - `src/objectsComponents/objectsManipulation.js`
  - `src/checkers/checkReturnedObject.js`
  - `src/checkers/checkObjectId.js`
  - `src/checkers/checkNameValidation.js`
- **Logic Changes**: Replaced occurrences of `const listItems = getListObjects()` and `const taskItems = getTaskObjects()` with the encapsulated methods `getAllLists()` and `getAllTasks()`. Also replaced direct `list.Items` fetching and length checks with `checkListItems(id)` and extracted an empty message. Refactored local variables (`listItems`, `taskItems`, `listItemsCount`, etc.) to point to the live module bindings (`allLists`, `allTaskItems`, `allListsCount`, `taskItemsCount`) exposed by the checker modules.
- **Why**: To completely centralize list and task retrieval, maintaining a single source of truth and enforcing the newly established pattern across the entire platform.

### Plain English Summary

I performed a platform-wide sweep based on `MODULES.md` and updated all remaining files that were still using the old method for fetching lists and tasks. They now securely route through the newly created checker modules, unifying data access patterns across your application.
