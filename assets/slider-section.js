document.addEventListener("DOMContentLoaded", function () {
  const titles = document.querySelectorAll(".title-item");
  const contentItems = document.querySelectorAll(".content-item");
  const prevButton = document.querySelector(".nav-button.prev");
  const nextButton = document.querySelector(".nav-button.next");

  let activeIndex = 0;

  function setActiveIndex(index) {
    titles.forEach((title, i) => {
      title.classList.toggle("active", i === index);
    });
    contentItems.forEach((content, i) => {
      content.classList.toggle("active", i === index);
    });
    activeIndex = index;
  }

  titles.forEach((title, index) => {
    title.addEventListener("click", () => setActiveIndex(index));
  });

  prevButton.addEventListener("click", () => {
    const newIndex = (activeIndex - 1 + titles.length) % titles.length;
    setActiveIndex(newIndex);
  });

  nextButton.addEventListener("click", () => {
    const newIndex = (activeIndex + 1) % titles.length;
    setActiveIndex(newIndex);
  });

  setActiveIndex(activeIndex);
});
