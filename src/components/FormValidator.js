export default class FormValidator {
  constructor(validationSettings, formElement) {
    //настройки валидации - селекторы и классы формы
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
    //элемент той формы, которая валидируется
    this._formElement = formElement;

    this._button = this._formElement.querySelector(".popup__button");
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      /*если в элемент введены не валидные данные - отображаем ошибку*/
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      /*если в элемент введены валидные данные - скрываем ошибку*/
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = (inputList) => {
    /*если хотя бы в один элемент введены не валидные данные,
     сообщаем, что данные филдсета не валидны*/
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _enableButton = () => {
    this._button.classList.remove(this._inactiveButtonClass);
    this._button.disabled = false;
  };

  disableButton = () => {
    this._button.classList.add(this._inactiveButtonClass);
    this._button.disabled = true;
  };

  _toggleButtonState = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      this.disableButton(buttonElement, this._inactiveButtonClass);
    } else {
      this._enableButton(buttonElement, this._inactiveButtonClass);
    }
  }

  _setEventListeners = (fieldSet) => {
    //формируем список input-элементов набора полей
    const inputList = Array.from(fieldSet.querySelectorAll(this._inputSelector));
    //получает ссылку на кнопку подтверждения
    const buttonElement = fieldSet.querySelector(this._submitButtonSelector);
    // чтобы проверить состояние кнопки в самом начале
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };

  enableValidation = () => {
    //добаляем обработчик подтверждения и отключаем поведение по умолчанию
    this._formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    /*Для каждого набора полей устанавливаем слушателей*/
    const fieldsetList = Array.from(this._formElement.querySelectorAll('.popup__fieldset'));
    fieldsetList.forEach((fieldSet) => {
      this._setEventListeners(fieldSet);
    });
  }
}
