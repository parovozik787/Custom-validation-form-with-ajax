export const FormValidation = () => {
  const inputName = document.querySelector("#name");
  const inputPhone = document.querySelector("#phone");
  const inputEmail = document.querySelector("#email");

  inputName.addEventListener("keyup", () => {
    if (inputName.value.length === 0) {
      inputName.classList.remove("invalid");
    } else if (
      inputName.value.length < 3 ||
      inputName.value.match(/\d+[0-9]/g) ||
      inputName.value.length > 20
    ) {
      inputName.classList.add("invalid");
    } else {
      inputName.classList.remove("invalid");
    }
  });

  inputPhone.addEventListener("keyup", () => {
    if (inputPhone.value.length === 0) {
      inputPhone.classList.remove("invalid");
    } else if (
      inputPhone.value.length < 10 ||
      inputPhone.value.length > 12 ||
      inputPhone.value.match(/\D/g)
    ) {
      inputPhone.classList.add("invalid");
    } else {
      inputPhone.classList.remove("invalid");
    }
  });

  inputEmail.addEventListener("keyup", () => {
    if (inputEmail.value.length === 0) {
      inputEmail.classList.remove("invalid");
    } else if (
      !inputEmail.value.match(
        /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g
      )
    ) {
      inputEmail.classList.add("invalid");
    } else {
      inputEmail.classList.remove("invalid");
    }
  });
};
