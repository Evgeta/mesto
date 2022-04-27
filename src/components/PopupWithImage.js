import Popup from '../components/Popup.js';

/*
Создайте класс PopupWithImage, который наследует от Popup.
 Этот класс должен перезаписывать родительский метод open.
 В методе open класса PopupWithImage нужно вставлять
 в попап картинку с src изображения и подписью к картинке.
*/

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__big-image');
    this._popupCaption = this._popup.querySelector('.popup__image-caption');
  }

  open(link, name) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupCaption.textContent = name;
    super.open();
  }
}
