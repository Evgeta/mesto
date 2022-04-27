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

  open(data) {
    this._popupImage.src = data.link;
    this._popupImage.alt = data.name;
    this._popupCaption.textContent = data.name;
    super.open();
  }
}
