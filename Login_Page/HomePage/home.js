const boxes = document.querySelectorAll(".box");

// Add a click event listener to each box
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Toggle a "selected" class on the clicked box
    box.classList.toggle("selected");

    // Remove the "selected" class from all other boxes
    boxes.forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.classList.remove("selected");
      }
    });
  });
});
