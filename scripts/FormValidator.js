export class FormValidator {
  constructor(validationSettings, formElement) {

    //настройки валидации - селекторы и классы формы
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
    //элемент той формы, которая валидируется
    this._formElement = formElement;
  }

 _showInputError(inputElement, errorMessage){
    const errorElement = _formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
 }

 _hideInputError(inputElement){
  const errorElement = _formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(this._errorClass);
}

_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    /*если в элемент введены не валидные данные - отображаем ошибку*/
    _showInputError(inputElement, inputElement.validationMessage);
  } else {
    /*если в элемент введены валидные данные - скрываем ошибку*/
    _hideInputError(inputElement);
  }
};

_hasInvalidInput = (inputList) => {
  /*если хотя бы в один элемент введены не валидные данные,
   сообщаем, что данные филдсета не валидны*/
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

_enableButton = (button) => {
  button.classList.remove(this._inactiveButtonClass);
  button.disabled = false;
};

_disableButton = (button) => {
  button.classList.add(this._inactiveButtonClass);
  button.disabled = true;
};

 _toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    _disableButton(buttonElement, this._inactiveButtonClass);
  } else {
    _enableButton(buttonElement, this._inactiveButtonClass);
  }
}

_setEventListeners = (fieldSet) => {

  //формируем список input-элементов набора полей
  const inputList = Array.from(fieldSet.querySelectorAll(this._inputSelector));
  //получает ссылку на кнопку подтверждения
  const buttonElement = fieldSet.querySelector(this._submitButtonSelector);

  // чтобы проверить состояние кнопки в самом начале
  _toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      _checkInputValidity(inputElement);
      // чтобы проверять его при изменении любого из полей
      _toggleButtonState(inputList, buttonElement);
    });
  });
};

enableValidation = () => {


    //добаляем обработчик подтверждения и отключаем поведение по умолчанию
    this._formElement.addEventListener('submit', function (evt) {
          evt.preventDefault();
    });

    /*Для каждого набора полей устанавливаем слушателей*/
    fieldsetList = Array.from(this._formElement.querySelectorAll('.popup__fieldset'));
    fieldsetList.forEach((fieldSet) => {
          this._setEventListeners(fieldSet);
    });

  }
}




