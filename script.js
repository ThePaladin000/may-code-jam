const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-btn");
const spinWheel = document.querySelectorAll(".spin__wheel");
const spinnerWheel = document.querySelector(".spin__wheel-spinner");
let currentRotation = 0;

function modalOpen() {
  modal.classList.add("modal__open");
  document.addEventListener("keydown", keydownListener);
}

function modalClose() {
  modal.classList.remove("modal__open");
  document.removeEventListener("keydown", keydownListener);

  spinnerWheel.style.transition = "none";
  currentRotation = 0;
  spinnerWheel.style.transform = `rotate(${currentRotation}deg)`;
}

function keydownListener(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    modalClose();
  }
}

closeButton.addEventListener("click", modalClose);

function spin() {
  const rotations = Math.floor(Math.random() * 4) + 4;
  const baseRotation = rotations * 360;
  const extraDegrees = Math.floor(Math.random() * 348);
  const totalDegrees = baseRotation + extraDegrees;

  currentRotation += totalDegrees;

  spinnerWheel.style.transition = "transform 2.5s ease-out";
  spinnerWheel.style.transform = `rotate(${currentRotation}deg)`;

  setTimeout(() => {
    modalOpen();
  }, 3000);
}

closeButton.addEventListener("click", modalClose);

spinnerWheel.addEventListener("click", spin);

// DO NOT DELETE NOTES
// I outlined the order of operations below, but did use DOT to help figure out the spin function
// Click on spinner
// Spinner needs to spin (duration?)
// Once stopped, modal needs to open
// modal produces a random exercise from the various combinations of exercises
// Click Spin again button, which closes modal
// User can click the spinner again for another exercise
// Reset spinner to original position

// spinWheel.forEach((image) => {
//   image.addEventListener("click", modalOpen);
// });
