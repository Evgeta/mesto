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

    this._fieldsetList = Array.from(this._formElement.querySelectorAll('.popup__fieldset'));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
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

  _hasInvalidInput = () => {
    /*если хотя бы в один элемент введены не валидные данные,
     сообщаем, что данные филдсета не валидны*/
    return this._inputList.some((inputElement) => {
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

  toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableButton(this._buttonElement, this._inactiveButtonClass);
    } else {
      this._enableButton(this._buttonElement, this._inactiveButtonClass);
    }
  }

  _setEventListeners = () => {

    // чтобы проверить состояние кнопки в самом начале
    this.toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        // чтобы проверять его при изменении любого из полей
        this.toggleButtonState();
      });
    });
  };

  enableValidation = () => {
    /*Для каждого набора полей устанавливаем слушателей*/
    this._setEventListeners();
  }
}
