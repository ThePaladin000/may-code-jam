const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal__close-btn");
const spinButton = document.querySelector(".spin__wheel-arrow");

function modalOpen() {
  modal.classList.add("modal__open");
  document.addEventListener("keydown", keydownListener);
}

function modalClose() {
  modal.classList.remove("modal__open");
  document.removeEventListener("keydown", keydownListener);
}

function keydownListener(event) {
  if (event.key === "Escape" || event.key === "Esc") {
    modalClose();
  }
}

closeButton.addEventListener("click", modalClose);
spinButton.addEventListener("click", modalOpen);
