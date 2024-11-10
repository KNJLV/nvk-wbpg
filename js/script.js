// DOMContentLoaded - для выполнения кода после загрузки DOM
document.addEventListener("DOMContentLoaded", () => {
  // Ссылки на элементы
  const parentRadioInput = document.getElementById("parent-button");
  const studentRadioInput = document.getElementById("student-button");
  const parentButton = document.querySelector(
    ".section-form__form-left-slider-parent"
  );
  const studentButton = document.querySelector(
    ".section-form__form-left-slider-student"
  );

  const studentName = document.getElementById("studentName");
  const studentPhoneNumber = document.getElementById("studentPhoneNumber");
  const parentName = document.getElementById("parentName");
  const parentPhoneNumber = document.getElementById("parentPhoneNumber");

  // Функция для обновления состояния формы
  const updateFormState = () => {
    if (studentRadioInput.checked) {
      // Показываем поля ученика, скрываем родителя
      studentName.style.display = "inline";
      studentPhoneNumber.style.display = "inline";
      parentName.style.display = "none";
      parentPhoneNumber.style.display = "none";
      studentButton.classList.add("active-slider-button");
      parentButton.classList.remove("active-slider-button");
    } else if (parentRadioInput.checked) {
      // Показываем поля родителя, скрываем ученика
      studentName.style.display = "none";
      studentPhoneNumber.style.display = "none";
      parentName.style.display = "inline";
      parentPhoneNumber.style.display = "inline";
      parentButton.classList.add("active-slider-button");
      studentButton.classList.remove("active-slider-button");
    }
  };

  // Установить начальное состояние
  studentRadioInput.checked = true;
  updateFormState();

  // Обработчики событий
  parentRadioInput.addEventListener("change", updateFormState);
  studentRadioInput.addEventListener("change", updateFormState);
});
