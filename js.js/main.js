document.addEventListener("DOMContentLoaded", function () {
  // Навигация
  const navigation = document.querySelector(".nav_main");
  const initialOffset = navigation.offsetTop;

  window.addEventListener("scroll", function () {
    if (window.scrollY >= initialOffset) {
      navigation.classList.add("sticky");
    } else {
      navigation.classList.remove("sticky");
    }
  });

  // Интерактив со слайдером в section1
  const sliderWrapper = document.querySelector(".slider_wrapper");

  const slides = Array.from(sliderWrapper.children);

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

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  // Интерактив с этажами башни
  const towerImage = document.getElementById("towerImage");
  const picsFloor = document.querySelector(".pics_floor");

  document.querySelector(".point_view").addEventListener("click", function () {
    towerImage.src = "./img/tower_1.svg";
    picsFloor.innerHTML =
      '<img src="./img/point_view_slideshow.gif" alt="площадка гифка">';
  });

  document.querySelector(".library").addEventListener("click", function () {
    towerImage.src = "./img/tower_2.svg";
    picsFloor.innerHTML =
      '<img src="./img/library_slidehow.gif" alt="библиотека гифка">';
  });

  document
    .querySelector(".telefon_room")
    .addEventListener("click", function () {
      towerImage.src = "./img/tower_3.svg";
      picsFloor.innerHTML =
        '<img src="./img/telefon_room_slideshow.gif" alt="телефонная гифка">';
    });

  document.querySelector(".main_floor").addEventListener("click", function () {
    towerImage.src = "./img/tower_4.svg";
    picsFloor.innerHTML =
      '<img src="./img/first_floor_slideshow.gif" alt="вестибюль гифка">';
  });

  // Изменение текста в интерактиве с башней
  const pointView = document.querySelector(".point_view");
  const library = document.querySelector(".library");
  const telefonRoom = document.querySelector(".telefon_room");
  const mainFloor = document.querySelector(".main_floor");

  const descriptionTitle = document.querySelector(".description h1");
  const descriptionText = document.querySelector(".description p");

  pointView.addEventListener("click", function () {
    descriptionTitle.textContent = "ПЛОЩАДКА";
    descriptionText.textContent =
      "место для релаксации и изучения города с высоты птичьего полёта";
  });

  library.addEventListener("click", function () {
    descriptionTitle.textContent = "БИБЛИОТЕКА";
    descriptionText.textContent = "место для чтения, коворкинг, книжный архив";
  });

  telefonRoom.addEventListener("click", function () {
    descriptionTitle.textContent = "ТЕЛЕФОННЫЙ ЗАЛ";
    descriptionText.textContent =
      "главный центр межвременной связи с философами древности";
  });

  mainFloor.addEventListener("click", function () {
    descriptionTitle.textContent = "ВЕСТИБЮЛЬ";
    descriptionText.textContent =
      "место распределения по разным вопросам, кафе, читальные места";
  });

  // Окошко записи на посещение в центр
  const descriptionButton = document.querySelector(".description_btn");
  const overlay = document.getElementById("overlay");
  const modal = document.getElementById("modal");
  const submitButton = document.querySelector(".submit_btn");
  const successPopup = document.getElementById("successPopup");

  // Открыть форму
  descriptionButton.addEventListener("click", function () {
    overlay.style.display = "block";
    modal.style.display = "block";
  });

  // Отправить форму
  submitButton.addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const email = document.getElementById("email").value;

    if (name && date && time && email) {
      modal.style.display = "none";
      overlay.style.display = "none";
      successPopup.style.display = "block";

      setTimeout(function () {
        successPopup.style.display = "none";
      }, 2000);
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  });

  // Закрытие формы по клику на затемнение
  overlay.addEventListener("click", function () {
    modal.style.display = "none";
    overlay.style.display = "none";
  });
});
