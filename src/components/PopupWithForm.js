import Popup from '../components/Popup.js';
export default class PopupWithForm extends Popup {
  constructor({
    popupSelector,
    handleFormSubmit
  }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;


    this._form = this._popup.querySelector('.popup__form'); //форма
    this._inputList = this._form.querySelectorAll('.popup__input'); //все поля для ввода
    this._buttonSubmit = this._form.querySelector('.popup__button'); //кнопка сохранения

    this._inputValues = {}; //значения всех полей формы
  }

  _getInputValues = () => {
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    console.log(this._inputValues);
    return this._inputValues;
  }

  _submitForm = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._submitForm);
  }

  _removeEventListeners() {
    super._removeEventListeners();
    this._form.removeEventListener('submit', this._submitForm);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
