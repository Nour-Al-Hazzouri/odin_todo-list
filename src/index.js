import './styles.css';
import todoObjectsFactory from './todoObjectsFactory.js';

const todoItem = new todoObjectsFactory("titleOne", "This is the description of ItemOne", "15/10/2026", "High");
document.addEventListener("DOMContentLoaded", alertMe);

function alertMe() {
    alert(todoItem.Title);
    changeDetails()
};

function changeDetails() {
    todoItem.setTitle = "Edited Title"
    alert(todoItem.Title);
}