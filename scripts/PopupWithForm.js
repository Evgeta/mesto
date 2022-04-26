import {Popup} from "./Popup.js";

/*

Создайте класс PopupWithImage, который наследует от Popup.
 Этот класс должен перезаписывать родительский метод open.
 В методе open класса PopupWithImage нужно вставлять
 в попап картинку с src изображения и подписью к картинке.

*/


export class PopupWithForm extends Popup {
  constructor({popupSelector, handleFormSubmit}) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = this._form.querySelectorAll('.popup__name');
    this._buttonSubmit = this._form.querySelector('.popup__btn');

    // this._inputValues = {}
  }

}
