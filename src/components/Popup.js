export default class Popup {

/*
Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
Принимает в конструктор единственный параметр — селектор попапа.
Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
Модальное окно также закрывается при клике на затемнённую область вокруг формы.
*/

constructor(popupSelector) {
  this._popup = document.querySelector(popupSelector);

  this._handleEscClose = this._handleEscClose.bind(this);
  this._handleMouseDownOnOverlayAndCrossButton = this._handleMouseDownOnOverlayAndCrossButton.bind(this);


  this._closeButton = this._popup.querySelector('.popup__close-btn');
}

open() {
  this._popup.classList.add("popup_opened");
  this.setEventListeners();
}

close() {
  this._popup.classList.remove("popup_opened");
  this._removeEventListeners();
}

_handleEscClose = (evt) => {
  if (evt.key === 'Escape') {
    this.close();
  }
}

_handleMouseDownOnOverlayAndCrossButton = (evt) => {
  if (evt.target.classList.contains('popup_opened') ||   //обработка нажатия левой кнопки мыши по оверлею
    evt.target.classList.contains('popup__close-btn')) //обработка нажатия левой кнопки мыши по кнопке-крестику
  this.close();
}

setEventListeners() {
  document.addEventListener('keydown', this._handleEscClose);
  this._closeButton.addEventListener('click', this._handleButtonClose);
  this._popup.addEventListener('mousedown', this._handleMouseDownOnOverlayAndCrossButton);
}

_removeEventListeners() {
  document.removeEventListener('keydown', this._handleEscClose);
  this._closeButton.removeEventListener('click', this._handleButtonClose);
  this._popup.removeEventListener('mousedown', this._handleMouseDownOnOverlayAndCrossButton);
}
}

