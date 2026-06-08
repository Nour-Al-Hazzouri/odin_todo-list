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
