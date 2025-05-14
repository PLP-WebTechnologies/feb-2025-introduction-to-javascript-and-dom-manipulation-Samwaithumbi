// Change text content and style dynamically
document.getElementById("change-btn").addEventListener("click", () => {
    const text = document.getElementById("dynamic-text");
    text.textContent = "You've changed the text!";
    text.style.color = "green";
    text.style.fontWeight = "bold";
  });
  
  // Add or remove an element on button click
  let isAdded = false;
  const toggleBtn = document.getElementById("toggle-btn");
  const container = document.getElementById("container");
  
  toggleBtn.addEventListener("click", () => {
    if (!isAdded) {
      const newElement = document.createElement("p");
      newElement.textContent = "Hello! I am a new element.";
      newElement.id = "new-element";
      container.appendChild(newElement);
      toggleBtn.textContent = "Remove Element";
      isAdded = true;
    } else {
      const element = document.getElementById("new-element");
      if (element) {
        container.removeChild(element);
      }
      toggleBtn.textContent = "Add Element";
      isAdded = false;
    }
  });
  