const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_visible');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    /*если в элемент введены не валидные данные - отображаем ошибку*/
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    /*если в элемент введены валидные данные - скрываем ошибку*/
    hideInputError(formElement, inputElement);
  }
};

const hasInvalidInput = (inputList) => {
  /*если хотя бы в один элемент введены не валидные данные,
   сообщаем, что данные филдсета не валидны*/
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled');
  } else {
    buttonElement.classList.remove('popup__button_disabled');
  }
}

const setEventListeners = (formElement) => {
  //формируем список input-элементов небора полей
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  //получает ссылку на кнопку подтверждения
  const buttonElement = formElement.querySelector('.popup__button');

  // чтобы проверить состояние кнопки в самом начале
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      // чтобы проверять его при изменении любого из полей
      toggleButtonState(inputList, buttonElement);
    });
  });
};


const enableValidation = (validationObject) => {

  console.log(validationObject.formSelector);

  //Формируем массив форм документа. Критерий выбора - класс формы
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  /*Для каждой формы отключаем поведение по умолчанию*/
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    /*Для каждого набора полей устанавливаем слушателей*/
    const fieldsetList = Array.from(formElement.querySelectorAll('.popup__fieldset'));
    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
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
