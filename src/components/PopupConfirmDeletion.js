import Popup from '../components/Popup.js';
export default class PopupConfirmDeletion extends Popup {
  constructor(
    popupSelector
  ) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form'); //форма
    this._buttonSubmit = this._form.querySelector('.popup__button'); //кнопка да - подтверждения удаления
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit',
      (evt) => {
        evt.preventDefault();
        this._handleSubmit();
      }
    );
  }

  submitDelete(handleSubmit) {
    this._handleSubmit = handleSubmit;
  }

}
