function removeMainSections() {
  const mainSections = document.querySelectorAll("main > section");
  if (mainSections) {
    mainSections.forEach((mainSection) => {
      mainSection.remove();
    });
  }
}

export default removeMainSections;
