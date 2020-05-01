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

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    form.classList.add("contact-form--inactive");

    function showFeedback() {
      formContactClassList.map((item, index) =>
        index === 2 ? form.classList.add(item) : form.classList.remove(item)
      );
      form.reset();
      feedbackBlockClassList.map((item, index) =>
        index === 1
          ? feedbackBlock.classList.add(item)
          : feedbackBlock.classList.remove(item)
      );
    }

    setTimeout(showFeedback, 2000);
  });

  feedbackButton.addEventListener("click", () => {
    feedbackBlockClassList.map((item, index) =>
      index === 0
        ? feedbackBlock.classList.add(item)
        : feedbackBlock.classList.remove(item)
    );
    formContactClassList.map((item, index) =>
      index === 1 ? form.classList.add(item) : form.classList.remove(item)
    );
  });
};
