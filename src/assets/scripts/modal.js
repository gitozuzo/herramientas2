document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");
  const galleryItems = document.querySelectorAll(".gallery-item img");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      modal.classList.add("active");
      modalImg.src = item.src;
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });
});
