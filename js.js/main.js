document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider_wrapper");

  // массив всех "слайдов"
  const slides = Array.from(sliderWrapper.children);

  // Устанавливаем текущий индекс активного слайда
  let currentSlide = 0;

  // Функция для отображения нужного слайда
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  // Первый слайд при загрузке
  showSlide(currentSlide);

  // Кнопки навигации стрелочки
  const prevButton = document.querySelector(".arrow.prev");
  const nextButton = document.querySelector(".arrow.next");

  // Обработка клика по кнопке "вперёд"
  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Обработка клика по кнопке "назад"
  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });
});
