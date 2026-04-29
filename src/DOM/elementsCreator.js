function elementsCreate(element, number) {
  const createdElement = new Array();
  if (!element || !number) {
    throw Error("Ensure to input element and number properly");
  } else {
    for (let i = 0; i < number; i++) {
      createdElement[i] = document.createElement(element);
    }
    return createdElement;
  }
}

export default elementsCreate;