document.addEventListener("DOMContentLoaded", function () {
  const merchElement = document.getElementById("typewriter_merch");

  const merchLines = [
    "окунись в атмосферу межвременного мерча",
    "с горацием и другими деятелями прошлого",
  ];

  const fullMerchText = merchLines.join("<br>");

  let merchIndex = 0;
  const merchSpeed = 35;

  function typeMerchLetter() {
    if (merchIndex <= fullMerchText.length) {
      const nextChar = fullMerchText.slice(0, merchIndex);
      merchElement.innerHTML = nextChar;
      merchIndex += 1;
      setTimeout(typeMerchLetter, merchSpeed);
    }
  }

  typeMerchLetter();

  // Корзина
  const buttons = document.querySelectorAll(".base_btn");
  const cartCountElement = document.querySelector(".cart-count");

  let cartCount = 0;

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const currentText = button.querySelector("p").innerText;

      // Если товар уже добавлен — ничего не делаем
      if (currentText === "В КОРЗИНЕ") return;

      // Увеличиваем счётчик
      cartCount += 1;
      cartCountElement.textContent = cartCount;

      // Меняем текст кнопки
      button.querySelector("p").innerText = "В КОРЗИНЕ";

      // Блокируем повторное добавление визуально (по желанию)
      button.style.opacity = "0.7";
      button.style.pointerEvents = "none";
    });
  });

  // открытие/закрытие шторки корзины
  const cartDrawerElement = document.getElementById("cartDrawer");
  const closeCartButton = document.getElementById("closeCart");
  const cartIconElement = document.querySelector(".cart-icon");

  if (!cartDrawerElement || !closeCartButton || !cartIconElement) {
    console.warn("Один или несколько элементов для шторки корзины не найдены.");
    return;
  }

  cartIconElement.addEventListener("click", function () {
    cartDrawerElement.classList.add("open");
  });

  closeCartButton.addEventListener("click", function () {
    cartDrawerElement.classList.remove("open");
  });
});
