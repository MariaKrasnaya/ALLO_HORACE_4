document.addEventListener("DOMContentLoaded", function () {
  // Получаем блоки событий
  let eventOne = document.querySelector(".event_1");
  let eventTwo = document.querySelector(".event_2");
  let eventThree = document.querySelector(".event_3");

  // Получаем блоки постеров
  let posterOne = document.querySelector(".posters_1");
  let posterTwo = document.querySelector(".posters_2");
  let posterThree = document.querySelector(".posters_3");

  // Скрываем все постеры
  function hideAllPosters() {
    posterOne.classList.remove("active");
    posterTwo.classList.remove("active");
    posterThree.classList.remove("active");
  }

  // Наведение на первый блок
  eventOne.addEventListener("mouseenter", function () {
    hideAllPosters();
    posterOne.classList.add("active");
  });
  eventOne.addEventListener("mouseleave", function () {
    hideAllPosters();
  });

  // Наведение на второй блок
  eventTwo.addEventListener("mouseenter", function () {
    hideAllPosters();
    posterTwo.classList.add("active");
  });
  eventTwo.addEventListener("mouseleave", function () {
    hideAllPosters();
  });

  // Наведение на третий блок
  eventThree.addEventListener("mouseenter", function () {
    hideAllPosters();
    posterThree.classList.add("active");
  });
  eventThree.addEventListener("mouseleave", function () {
    hideAllPosters();
  });
});
