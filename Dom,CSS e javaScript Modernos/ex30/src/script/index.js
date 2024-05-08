function handleModal() {
    const button = document.querySelector("#showMessage");
    const modalContainer = document.querySelector("#modalController");
  
    button.addEventListener("click", () => {
      modalContainer.showModal();
  
     closeModal()
    });
  }

  handleModal()
  
  function closeModal() {
    const button = document.querySelector("#closeModal");
    const modalContainer = document.querySelector("#modalController");
  
    button.addEventListener("click", () => {
      modalContainer.close();
    });
  }

  