const showInputError = (formElement, inputElement, errorMessage, validationObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationObject.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationObject.errorClass);
};

const hideInputError = (formElement, inputElement, validationObject) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationObject.inputErrorClass);
  errorElement.classList.remove(validationObject.errorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, validationObject) => {
  if (!inputElement.validity.valid) {
    /*если в элемент введены не валидные данные - отображаем ошибку*/
    showInputError(formElement, inputElement, inputElement.validationMessage, validationObject);
  } else {
    /*если в элемент введены валидные данные - скрываем ошибку*/
    hideInputError(formElement, inputElement, validationObject);
  }
};

const hasInvalidInput = (inputList) => {
  /*если хотя бы в один элемент введены не валидные данные,
   сообщаем, что данные филдсета не валидны*/
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, classname) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(classname);
  } else {
    buttonElement.classList.remove(classname);
  }
}

const setEventListeners = (formElement, validationObject) => {
  //формируем список input-элементов небора полей
  const inputList = Array.from(formElement.querySelectorAll(validationObject.inputSelector));
    //получает ссылку на кнопку подтверждения
  const buttonElement = formElement.querySelector(validationObject.submitButtonSelector);

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement, validationObject.inactiveButtonClass);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, validationObject);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement, validationObject.inactiveButtonClass);
    });
  });
};


const enableValidation = (validationObject) => {

  console.log(validationObject.formSelector);

  //Формируем массив форм документа. Критерий выбора - класс формы
  const formList = Array.from(document.querySelectorAll(validationObject.formSelector));

  /*Для каждой формы отключаем поведение по умолчанию*/
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    /*Для каждого набора полей устанавливаем слушателей*/
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet, validationObject);
    });
  });
};


// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});
