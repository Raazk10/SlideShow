export default function SlideShow() {
  // query selectors

  const slide = document.querySelectorAll(".carousel__item");
  const nextButton = document.querySelector(".slideButton--nextButton");
  const previousButton = document.querySelector(".slideButton--previousButton");
  const dotsButton = document.querySelectorAll(".carousel__button");

  // event listeners

  nextButton.addEventListener("click", handleNextButtonClick);
  previousButton.addEventListener("click", handlepreviousButtonClick);

  // event handlers
  function handleNextButtonClick() {
    nextSlide();
    selectNextElementSibling();
  }

  function handlepreviousButtonClick() {
    previousSlide();
    selectPreviousElementSibling();
  }

  //methods

  function nextSlide() {
    const current = document.querySelector(".carousel__item--selected");

    // Remove current class
    current.classList.remove("carousel__item--selected");

    // Check for next slide
    if (current.nextElementSibling) {
      // Add current to next sibling
      current.nextElementSibling.classList.add("carousel__item--selected");
    } else {
      // Add current to start
      slide[0].classList.add("carousel__item--selected");
    }
  }

  function previousSlide() {
    const current = document.querySelector(".carousel__item--selected");

    // Remove current class
    current.classList.remove("carousel__item--selected");
    // Check for prev slide
    if (current.previousElementSibling) {
      // Add current to prev sibling
      current.previousElementSibling.classList.add("carousel__item--selected");
    } else {
      // Add current to last
      slide[slide.length - 1].classList.add("carousel__item--selected");
    }
  }

  function selectNextElementSibling() {
    const currentDot = document.querySelector(".carousel__button--selected");

    // dot slide with next button click
    currentDot.classList.remove("carousel__button--selected");

    if (currentDot.nextElementSibling) {
      currentDot.nextElementSibling.classList.add("carousel__button--selected");
    } else {
      dotsButton[0].classList.add("carousel__button--selected");
    }
  }

  function selectPreviousElementSibling() {
    const currentDot = document.querySelector(".carousel__button--selected");

    // dot slide with prev button click
    currentDot.classList.remove("carousel__button--selected");

    if (currentDot.previousElementSibling) {
      currentDot.previousElementSibling.classList.add(
        "carousel__button--selected"
      );
    } else {
      dotsButton[dotsButton.length - 1].classList.add(
        "carousel__button--selected"
      );
    }
  }

  // dot navigation

  dotsButton.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      //unselect all slide and dots
      slide.forEach((item) => {
        item.classList.remove("carousel__item--selected");
      });

      dotsButton.forEach((dot) =>
        dot.classList.remove("carousel__button--selected")
      );
      slide[i].classList.add("carousel__item--selected");
      dot.classList.add("carousel__button--selected");
    });
  });
}
