export const FeedbackSwap = () => {
  const form = document.querySelector(".contact-form");
  const formContactClassList = [
    "contact-form--inactive",
    "contact-form--shown",
    "contact-form--hide",
  ];
  const feedbackBlock = document.querySelector(".feedback");
  const feedbackBlockClassList = ["feedback--hide", "feedback--shown"];
  const feedbackButton = document.querySelector(".feedback__button");

  form.onsubmit = function (event) {
    event.preventDefault();

    let xhr = new XMLHttpRequest();

    xhr.open("POST", "form.php", true);
    xhr.setRequestHeader("Content-Type", "Application/x-www-form-unlencoded");
    xhr.onreadystatechange = function () {
      form.classList.add("contact-form--inactive");
      if (xhr.readyState === 4 && xhr.status === 200) {
        setTimeout(show, 2000, feedbackBlock);
      }
    };
    xhr.send();
  };

  feedbackButton.addEventListener("click", () => {
    show(form);
  });

  function show(elem) {
    if (elem === feedbackBlock) {
      formContactClassList.map((item, index) =>
        index === 2 ? form.classList.add(item) : form.classList.remove(item)
      );

      form.reset();

      feedbackBlockClassList.map((item, index) =>
        index === 1
          ? feedbackBlock.classList.add(item)
          : feedbackBlock.classList.remove(item)
      );
    } else {
      feedbackBlockClassList.map((item, index) =>
        index === 0
          ? feedbackBlock.classList.add(item)
          : feedbackBlock.classList.remove(item)
      );
      formContactClassList.map((item, index) =>
        index === 1 ? form.classList.add(item) : form.classList.remove(item)
      );
    }
  }
};
