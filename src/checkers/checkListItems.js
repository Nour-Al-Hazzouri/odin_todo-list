import checkInstanceOf from "./checkInstanceOfObject.js";
import checkReturnedObject from "./checkReturnedObject.js";
import { getListObjects } from "../objectsComponents/centralObjectsStorage.js";

let allLists;
let allListsCount;

let returnedList;
let listItems;
let listLength;

function getAllLists() {
  allLists = getListObjects();
  allListsCount = getListObjects().length;
}

function checkListItems(id) {
  const list = checkReturnedObject(id, "list");
  if (checkInstanceOf(list) !== "list") {
    throw Error("Passed ID does not belong to a list object.");
  }
  returnedList = list;
  listItems = list.Items;
  listLength = list.Items.length;
}

export {
  getAllLists,
  allLists,
  allListsCount,
  checkListItems,
  returnedList,
  listItems,
  listLength,
};
