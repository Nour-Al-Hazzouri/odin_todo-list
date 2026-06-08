# Module Dependencies

This file documents all modules in the `src` directory and their dependencies to help with brainstorming and understanding the impact of changes.

## `DOM/elementsCreator.js`

- _No dependencies_

## `DOM/listCreatorComponent/createListDialog.js`

- **Depends on:**
  - `universalQueries.js`
  - `DOM/listCreatorComponent/createListForm.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`

## `DOM/listCreatorComponent/createListForm.js`

- **Depends on:**
  - `DOM/toggleAttribute.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `DOM/sidebarComponent/sidebarFormsSubmitter.js`

## `DOM/mainPageComponent/mainDetailsComponents/mainCompletionProcess.js`

- **Depends on:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksComplete.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`

## `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`

- **Depends on:**
  - `checkers/checkReturnedObject.js`
  - `DOM/elementsCreator.js`
  - `universalQueries.js`
  - `DOM/mainPageComponent/mainDetailsComponents/tasksDetailsDialogs.js`
  - `DOM/removeMainSections.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainCompletionProcess.js`

## `DOM/mainPageComponent/mainDetailsComponents/mainTasksComplete.js`

- **Depends on:**
  - `checkers/checkObjectOccurrence.js`
  - `objectsComponents/centralObjectsStorage.js`
  - `objectsComponents/objectsManipulation.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`

## `DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`

- **Depends on:**
  - `checkers/checkObjectOccurrence.js`
  - `objectsComponents/centralObjectsStorage.js`
  - `objectsComponents/objectsManipulation.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `date-fns`

## `DOM/mainPageComponent/mainDetailsComponents/tasksDetailsDialogs.js`

- **Depends on:**
  - `universalQueries.js`

## `DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`

- **Depends on:**
  - `checkers/checkReturnedObject.js`
  - `objectsComponents/centralObjectsStorage.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `DOM/toggleAttribute.js`
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`

## `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`

- **Depends on:**
  - `checkers/checkReturnedObject.js`
  - `universalQueries.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`
  - `DOM/mainPageComponent/mainOptionsComponents/taskOptionsForm.js`
  - `objectsComponents/centralObjectsStorage.js`
  - `objectsComponents/objectsManipulation.js`
  - `DOM/removeMainSections.js`

## `DOM/mainPageComponent/mainOptionsComponents/taskOptionsForm.js`

- **Depends on:**
  - `checkers/checkReturnedObject.js`
  - `DOM/elementsCreator.js`
  - `DOM/toggleAttribute.js`

## `DOM/removeChildren.js`

- _No dependencies_

## `DOM/removeMainSections.js`

- _No dependencies_

## `DOM/sidebarComponent/sidebarBehavior.js`

- **Depends on:**
  - `DOM/sidebarComponent/sidebarElements.js`
  - `universalQueries.js`

## `DOM/sidebarComponent/sidebarElements.js`

- **Depends on:**
  - `DOM/elementsCreator.js`

## `DOM/sidebarComponent/sidebarFormsSubmitter.js`

- **Depends on:**
  - `objectsComponents/createObjects.js`
  - `checkers/checkNameValidation.js`
  - `objectsComponents/appendTasksToList.js`
  - `checkers/checkReturnedObject.js`
  - `objectsComponents/centralObjectsStorage.js`

## `DOM/sidebarComponent/sidebarInterface.js`

- **Depends on:**
  - `DOM/sidebarComponent/sidebarBehavior.js`
  - `DOM/sidebarComponent/sidebarSections.js`

## `DOM/sidebarComponent/sidebarRefreshComponents.js`

- **Depends on:**
  - `objectsComponents/centralObjectsStorage.js`
  - `DOM/elementsCreator.js`
  - `DOM/toggleAttribute.js`
  - `DOM/removeChildren.js`
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`
  - `checkers/checkReturnedObject.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`
  - `checkers/checkObjectOccurrence.js`

## `DOM/sidebarComponent/sidebarSections.js`

- **Depends on:**
  - `DOM/sidebarComponent/sidebarElements.js`
  - `universalQueries.js`
  - `DOM/taskCreatorComponent/createTaskDialog.js`
  - `DOM/listCreatorComponent/createListDialog.js`

## `DOM/taskCreatorComponent/createTaskDialog.js`

- **Depends on:**
  - `universalQueries.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `DOM/taskCreatorComponent/createTaskForm.js`

## `DOM/taskCreatorComponent/createTaskElements.js`

- **Depends on:**
  - `DOM/elementsCreator.js`

## `DOM/taskCreatorComponent/createTaskForm.js`

- **Depends on:**
  - `DOM/taskCreatorComponent/createTaskElements.js`
  - `DOM/toggleAttribute.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `DOM/sidebarComponent/sidebarFormsSubmitter.js`

## `DOM/toggleAttribute.js`

- _No dependencies_

## `checkers/checkInstanceCondition.js`

- **Depends on:**
  - `checkers/checkInstanceOfObject.js`

## `checkers/checkInstanceOfObject.js`

- **Depends on:**
  - `objectsFactories/TaskObjectsFactory.js`
  - `objectsFactories/ListObjectsFactory.js`

## `checkers/checkNameValidation.js`

- **Depends on:**
  - `objectsComponents/centralObjectsStorage.js`

## `checkers/checkObjectId.js`

- **Depends on:**
  - `objectsComponents/centralObjectsStorage.js`
  - `checkers/checkInstanceOfObject.js`

## `checkers/checkObjectOccurrence.js`

- **Depends on:**
  - `checkers/checkInstanceCondition.js`

## `checkers/checkReturnedObject.js`

- **Depends on:**
  - `objectsComponents/centralObjectsStorage.js`

## `index.js`

- **Depends on:**
  - `DOM/sidebarComponent/sidebarInterface.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `styles.css`

## `objectsComponents/appendTasksToList.js`

- **Depends on:**
  - `objectsComponents/centralObjectsStorage.js`

## `objectsComponents/centralObjectsStorage.js`

- **Depends on:**
  - `objectsFactories/TaskObjectsFactory.js`
  - `objectsFactories/ListObjectsFactory.js`
  - `checkers/checkInstanceOfObject.js`
  - `date-fns`

## `objectsComponents/createObjects.js`

- **Depends on:**
  - `objectsComponents/centralObjectsStorage.js`
  - `objectsFactories/TaskObjectsFactory.js`
  - `objectsFactories/ListObjectsFactory.js`

## `objectsComponents/objectsManipulation.js`

- **Depends on:**
  - `checkers/checkInstanceCondition.js`
  - `checkers/checkObjectOccurrence.js`
  - `objectsComponents/centralObjectsStorage.js`

## `objectsFactories/ListObjectsFactory.js`

- **Depends on:**
  - `objectsFactories/TaskObjectsFactory.js`

## `objectsFactories/TaskObjectsFactory.js`

- _No dependencies_

## `universalQueries.js`

- _No dependencies_

---

# Impact Analysis (Reverse Dependencies)

This section shows which modules are affected if a specific module is changed. If you modify a module listed below, you should also check the modules that depend on it.

## `DOM/elementsCreator.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`
  - `DOM/mainPageComponent/mainOptionsComponents/taskOptionsForm.js`
  - `DOM/sidebarComponent/sidebarElements.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `DOM/taskCreatorComponent/createTaskElements.js`

## `DOM/listCreatorComponent/createListDialog.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarSections.js`

## `DOM/listCreatorComponent/createListForm.js`

- **If modified, check these affected modules:**
  - `DOM/listCreatorComponent/createListDialog.js`

## `DOM/mainPageComponent/mainDetailsComponents/mainCompletionProcess.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`

## `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`

## `DOM/mainPageComponent/mainDetailsComponents/mainTasksComplete.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainCompletionProcess.js`

## `DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainCompletionProcess.js`

## `DOM/mainPageComponent/mainDetailsComponents/tasksDetailsDialogs.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`

## `DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`

## `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`

## `DOM/mainPageComponent/mainOptionsComponents/taskOptionsForm.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`

## `DOM/removeChildren.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`

## `DOM/removeMainSections.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`

## `DOM/sidebarComponent/sidebarBehavior.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarInterface.js`

## `DOM/sidebarComponent/sidebarElements.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarBehavior.js`
  - `DOM/sidebarComponent/sidebarSections.js`

## `DOM/sidebarComponent/sidebarFormsSubmitter.js`

- **If modified, check these affected modules:**
  - `DOM/listCreatorComponent/createListForm.js`
  - `DOM/taskCreatorComponent/createTaskForm.js`

## `DOM/sidebarComponent/sidebarInterface.js`

- **If modified, check these affected modules:**
  - `index.js`

## `DOM/sidebarComponent/sidebarRefreshComponents.js`

- **If modified, check these affected modules:**
  - `DOM/listCreatorComponent/createListDialog.js`
  - `DOM/listCreatorComponent/createListForm.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksComplete.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`
  - `DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`
  - `DOM/taskCreatorComponent/createTaskDialog.js`
  - `DOM/taskCreatorComponent/createTaskForm.js`
  - `index.js`

## `DOM/sidebarComponent/sidebarSections.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarInterface.js`

## `DOM/taskCreatorComponent/createTaskDialog.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarSections.js`

## `DOM/taskCreatorComponent/createTaskElements.js`

- **If modified, check these affected modules:**
  - `DOM/taskCreatorComponent/createTaskForm.js`

## `DOM/taskCreatorComponent/createTaskForm.js`

- **If modified, check these affected modules:**
  - `DOM/taskCreatorComponent/createTaskDialog.js`

## `DOM/toggleAttribute.js`

- **If modified, check these affected modules:**
  - `DOM/listCreatorComponent/createListForm.js`
  - `DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`
  - `DOM/mainPageComponent/mainOptionsComponents/taskOptionsForm.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `DOM/taskCreatorComponent/createTaskForm.js`

## `checkers/checkInstanceCondition.js`

- **If modified, check these affected modules:**
  - `checkers/checkObjectOccurrence.js`
  - `objectsComponents/objectsManipulation.js`

## `checkers/checkInstanceOfObject.js`

- **If modified, check these affected modules:**
  - `checkers/checkInstanceCondition.js`
  - `checkers/checkObjectId.js`
  - `objectsComponents/centralObjectsStorage.js`

## `checkers/checkNameValidation.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarFormsSubmitter.js`

## `checkers/checkObjectId.js`

- _No modules depend on this. Safe to modify without cascading internal effects._

## `checkers/checkObjectOccurrence.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksComplete.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `objectsComponents/objectsManipulation.js`

## `checkers/checkReturnedObject.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`
  - `DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`
  - `DOM/mainPageComponent/mainOptionsComponents/taskOptionsForm.js`
  - `DOM/sidebarComponent/sidebarFormsSubmitter.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`

## `date-fns`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`
  - `objectsComponents/centralObjectsStorage.js`

## `index.js`

- _No modules depend on this. Safe to modify without cascading internal effects._

## `objectsComponents/appendTasksToList.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarFormsSubmitter.js`

## `objectsComponents/centralObjectsStorage.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksComplete.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`
  - `DOM/mainPageComponent/mainOptionsComponents/listOptionsForm.js`
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`
  - `DOM/sidebarComponent/sidebarFormsSubmitter.js`
  - `DOM/sidebarComponent/sidebarRefreshComponents.js`
  - `checkers/checkNameValidation.js`
  - `checkers/checkObjectId.js`
  - `checkers/checkReturnedObject.js`
  - `objectsComponents/appendTasksToList.js`
  - `objectsComponents/createObjects.js`
  - `objectsComponents/objectsManipulation.js`

## `objectsComponents/createObjects.js`

- **If modified, check these affected modules:**
  - `DOM/sidebarComponent/sidebarFormsSubmitter.js`

## `objectsComponents/objectsManipulation.js`

- **If modified, check these affected modules:**
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksComplete.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainTasksIncomplete.js`
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`

## `objectsFactories/ListObjectsFactory.js`

- **If modified, check these affected modules:**
  - `checkers/checkInstanceOfObject.js`
  - `objectsComponents/centralObjectsStorage.js`
  - `objectsComponents/createObjects.js`

## `objectsFactories/TaskObjectsFactory.js`

- **If modified, check these affected modules:**
  - `checkers/checkInstanceOfObject.js`
  - `objectsComponents/centralObjectsStorage.js`
  - `objectsComponents/createObjects.js`
  - `objectsFactories/ListObjectsFactory.js`

## `styles.css`

- **If modified, check these affected modules:**
  - `index.js`

## `universalQueries.js`

- **If modified, check these affected modules:**
  - `DOM/listCreatorComponent/createListDialog.js`
  - `DOM/mainPageComponent/mainDetailsComponents/mainListsDetailsPage.js`
  - `DOM/mainPageComponent/mainDetailsComponents/tasksDetailsDialogs.js`
  - `DOM/mainPageComponent/mainOptionsComponents/mainOptionsPage.js`
  - `DOM/sidebarComponent/sidebarBehavior.js`
  - `DOM/sidebarComponent/sidebarSections.js`
  - `DOM/taskCreatorComponent/createTaskDialog.js`
