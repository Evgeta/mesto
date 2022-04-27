import Popup from '../components/Popup.js';

/*
Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
Перезаписывает родительский метод setEventListeners.
 Метод setEventListeners класса PopupWithForm должен не только добавлять
  обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
*/

export default class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;


    this._form = this._popup.querySelector('.popup__form');  //форма
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
