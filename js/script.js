// ========== Слайдер РОДИТЕЛЬ-УЧЕНИК ==========

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

// ========== Генерация комментария в форме по курсу ==========

// Кнопки в курсах "Записаться"
let courses_button = document.querySelectorAll(
  ".section-course__list-card-footer-buttons-enroll"
);

// Названия курсов
let courses_name = document.querySelectorAll(
  ".section-course__list-card-header-left-str-title"
);

// Перенос названия курса в комментарий формы
for (let i = 0; i < courses_button.length; i++) {
  courses_button[i].addEventListener("click", (e) => {
    let id_pole = document.querySelector("#formComment");
    if (i != 3) {
      id_pole.value = `${courses_name[i].textContent.trim()} КУРС`;
    } else if (i == 3) {
      id_pole.value = `ОНЛАЙН-ЛЕКТОРИЙ`;
    }
  });
}

// ==================================================

// Кнопка отправки в форме
const button = document.querySelector(".section-form__form-left-button");

// Чекбокс в форме
const chekedPersonalData = document.querySelector(".checkbox");

// Функция отправки данных из формы
function SendFormInfo() {
  let klientInformation = document.querySelectorAll(
    ".section-form__form-left-main-input"
  );
  let klientClass = document.querySelector(
    ".section-form__form-left-main-select"
  );
  console.log(klientClass);
  let order = JSON.stringify({
    parent_name: klientInformation[2].value,
    parent_number: klientInformation[3].value,
    student_name: klientInformation[0].value,
    student_number: klientInformation[1].value,
    student_comment: klientInformation[4].value,
    student_class: klientClass.value,
  });
  fetch("/api/callback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: order,
  })
    .then((response) => response.json())
    .then((result) => {
      document.dispatchEvent(new CustomEvent("modalclose"));
    });
  klientInformation.forEach((e) => {
    e.value = "";
  });
}

// Функция по нажатию кнопки "Оставить заявку"
button.addEventListener("click", (e) => {
  e.preventDefault();
  SendFormInfo();
  // backgroundStyleChange();
});
