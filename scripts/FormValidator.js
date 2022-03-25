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

  enableValidation(){

  }

 _showInputError(inputElement, errorMessage){
    const errorElement = _formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
 }

 _hideInputError(inputElement, errorMessage){
  const errorElement = _formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.remove(this._errorClass);
}

_checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    /*если в элемент введены не валидные данные - отображаем ошибку*/
    showInputError(inputElement, inputElement.validationMessage);
  } else {
    /*если в элемент введены валидные данные - скрываем ошибку*/
    hideInputError(inputElement);
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


}
