export default function setLabelAttributes(label, content, id) {
    label.textContent = content;
    label.setAttribute('for', id);
}