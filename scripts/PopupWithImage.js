import {Popup} from "./Popup.js";

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
