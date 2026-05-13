// Create same element multiple times with a loop.
function elementsCreate(element, number = 0) {
  const createdElement = new Array();
  if (!element) {
    throw Error("Ensure to input element and number properly");
  } else {
    for (let i = 0; i < number; i++) {
      createdElement[i] = document.createElement(element);
    }
    return createdElement;
  }
}

export default elementsCreate;
