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


export class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;

    this._form = this._popup.querySelector('.popup__form');  //ссылка на форму
    this._inputList = this._form.querySelectorAll('.popup__name');
    this._buttonSubmit = this._form.querySelector('.popup__btn');

    // this._inputValues = {}
  }

}
