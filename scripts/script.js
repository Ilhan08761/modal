const openModalBtn = document.querySelector(".openModalBtn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modalBody");
const acceptBtn = document.querySelector(".modalBody button");
const closeXBtn = document.querySelector(".closeModalX");

const closeModal = () => {
  modal.classList.add("modalHidden");
};

openModalBtn.addEventListener("click", () => {
  modal.classList.remove("modalHidden");
});

modal.addEventListener("click", () => {
  closeModal();
});

modalBody.addEventListener("click", (event) => {
  event.stopPropagation();
});

if (acceptBtn) {
  acceptBtn.addEventListener("click", closeModal);
}

if (closeXBtn) {
  closeXBtn.addEventListener("click", closeModal);
}

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 27) {
    closeModal();
  }
});
