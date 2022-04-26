import {Popup} from "./Popup.js";

/*

Создайте класс PopupWithImage, который наследует от Popup.
 Этот класс должен перезаписывать родительский метод open.
 В методе open класса PopupWithImage нужно вставлять
 в попап картинку с src изображения и подписью к картинке.

*/


export class PopupWithImage extends Popup {
 /* constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__img-main');
    this._popupTitle = this._popup.querySelector('.popup__img-title');
  }*/

 /* open(link, name) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupTitle.textContent = name;
    super.open();
  }*/
}
