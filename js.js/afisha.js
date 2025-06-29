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

  // Анимация текста печатная машинка
  const typewriterElement = document.getElementById("typewriter");

  // Массив строк (строки — как параграфы между <br>)
  const lines = [
    "совет от горация, особенности центра",
    "и межвременной связи, распродажа старых TV",
    "для конференций через века? Да, ознакомиться",
    "со списком крутых мероприятий можно ниже",
  ];

  // Объединяем строки, добавляя <br> между ними
  const fullText = lines.join("<br>");

  let currentIndex = 0;
  const speed = 35;

  function typeLetter() {
    if (currentIndex <= fullText.length) {
      const nextChar = fullText.slice(0, currentIndex);
      typewriterElement.innerHTML = nextChar;
      currentIndex += 1;
      setTimeout(typeLetter, speed);
    }
  }

  typeLetter();
});
