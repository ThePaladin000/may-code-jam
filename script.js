import { workoutPlans } from "./data/constants.js";

const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-btn");
const spinnerWheel = document.querySelector(".spin__wheel-spinner");
const spinForm = document.querySelector(".spin__form");
const spinAgainButton = document.querySelector(".modal__button");

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

function animateWheel() {
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

function getRandomExercise(experienceLevel, exerciseType) {
  const exercises = workoutPlans[experienceLevel][exerciseType];
  return exercises[Math.floor(Math.random() * exercises.length)];
}

function spin(experienceLevel, exerciseType) {
  if (!experienceLevel) {
    alert("Please select an experience level before spinning!");
  }

  if (!exerciseType) {
    alert("Please select an exercise type before spinning!");
  }

  if (experienceLevel && exerciseType) {
    animateWheel();
    const randomExercise = getRandomExercise(experienceLevel, exerciseType);
    document.querySelector(".modal__workout-display").textContent =
      randomExercise;
  }
}

spinForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const experience = document.querySelector(
    'input[name="experience"]:checked'
  )?.value;
  const exercise = document.querySelector(
    'input[name="exercise"]:checked'
  )?.value;
  spin(experience, exercise);
});

spinAgainButton.addEventListener("click", () => {
  modalClose();
  spinForm.reset();
});

// DO NOT DELETE NOTES
// I outlined the order of operations below, but did use DOT to help figure out the spin function
// Click on spinner
// Spinner needs to spin (duration?)
// Once stopped, modal needs to open
// modal produces a random exercise from the various combinations of exercises
// Click Spin again button, which closes modal
// User can click the spinner again for another exercise
// Reset spinner to original position
