export default class Popup {

/*
Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
Принимает в конструктор единственный параметр — селектор попапа.
Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа.
Модальное окно также закрывается при клике на затемнённую область вокруг формы.
*/

  constructor(selector) {
    this._popup = document.querySelector(selector);

    this._handleMouseDownOnOverlayAndCrossButton = this._handleMouseDownOnOverlayAndCrossButton.bind(this);
  }

  open() {
    this._popup.classList.add("popup_opened");
    //document.addEventListener('keydown', this._handleEscClose);

   // document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    //document.removeEventListener('keydown', this._handleEscClose);
    //document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  /*
  _handleOverlayClose = (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  _handleButtonClose = () => {
    this.close();
  }

*/


  /*setEventListeners() {
    this._closeButton = this._popup.querySelector('.popup__btn-close');
    this._popup.addEventListener('mousedown', this._handleOverlayClose);
    this._closeButton.addEventListener('click', this._handleButtonClose);
  }/*

 /* _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
    this._closeButton.removeEventListener('click', this._handleButtonClose);
  }
*/
}

