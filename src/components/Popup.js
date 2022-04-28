export default class Popup {

  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleMouseDownOnOverlayAndCrossButton = this._handleMouseDownOnOverlayAndCrossButton.bind(this);
    this._closeButton = this._popup.querySelector('.popup__close-btn');
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleMouseDownOnOverlayAndCrossButton = (evt) => {
    if (evt.target.classList.contains('popup_opened') || //обработка нажатия левой кнопки мыши по оверлею
      evt.target.classList.contains('popup__close-btn')) //обработка нажатия левой кнопки мыши по кнопке-крестику
      this.close();
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', this._handleMouseDownOnOverlayAndCrossButton);
  }

  _removeEventListeners() {
    this._popup.removeEventListener('mousedown', this._handleMouseDownOnOverlayAndCrossButton);
  }
}
