document.querySelectorAll(".action-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const targetId = this.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);
    const isCurrentlyVisible = targetElement.classList.contains("visible");

    document.querySelectorAll(".before-element").forEach((element) => {
      element.classList.remove("visible");
    });

    if (!isCurrentlyVisible) {
      targetElement.classList.add("visible");
    }
  });
});
